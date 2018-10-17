import T from '../common/js/common';
import React from 'react';

const scrollerStyle = { width: '100%', height: '160px', margin: '0 auto', position: 'relative' };
const innerScrollArea = { overflow: 'hidden', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 };
const scrollerItemStyle = { padding: 0, margin: 0, listStyleType: 'none', position: 'absolute', height: '100%' };

export default class LogoCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.scroller = React.createRef();

        this.state = { logos: [] };
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        setTimeout(() => {
            const scroller = $(this.scroller.current).children().eq(0),
                scrollerContent = scroller.children('ul');
            scrollerContent.children().clone().appendTo(scrollerContent);
            let curX = 0;
            scrollerContent.children().each(function () {
                curX += $(this).css({ left: curX }).outerWidth(true);
            });
            const fullWidth = curX / 2;
            var scrollerWidth = scroller.width();

            // Scrolling speed management
            var controller = { curSpeed: 0, fullSpeed: 2 };
            var $controller = $(controller);
            const tweenToNewSpeed = (newSpeed, duration) => {
                if (duration === undefined) duration = 600;
                $controller.stop(true).animate({ curSpeed: newSpeed }, duration);
            };

            // Pause on hover
            scroller.hover(
                () => tweenToNewSpeed(0),
                () => tweenToNewSpeed(controller.fullSpeed)
            );

            // Scrolling management; start the automatical scrolling
            const doScroll = function () {
                const newX = scroller.scrollLeft() + controller.curSpeed;
                scroller.scrollLeft(newX > fullWidth * 2 - scrollerWidth ? newX - fullWidth : newX);
            };
            setInterval(doScroll, 50);
            tweenToNewSpeed(controller.fullSpeed);
        }, 500);
    }

    getData() {
        const url = this.props.src;
        $.get(T.url(url)).then(logos => {
            this.setState({ logos: logos ? logos : [] });
        }).catch(error => {
            console.error('GET: ' + url + '. ' + error);
        });
    }

    render() {
        const mainStyle = Object.assign({}, scrollerStyle, this.props.style);
        const items = this.state.logos.map((logo, key) => (
            <li key={key} style={scrollerItemStyle}>
                <a href={logo.link} target='_blank'>
                    <img src={logo.img} alt={logo.text} width='auto' height='100%' />
                </a>
            </li>
        ));
        return (
            <div ref={this.scroller} style={mainStyle}>
                <div className='innerScrollArea' style={innerScrollArea}>
                    <ul style={{ padding: 0, margin: 0, position: 'relative', height: '100%' }}>
                        {items}
                    </ul>
                </div>
            </div >
        );
    }
}

LogoCarousel.propTypes = {
    src: T.PropTypes.string
};