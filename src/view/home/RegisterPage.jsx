import T from '../common/js/common';
import React from 'react';
import { connect } from 'react-redux';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
        this.onRegister = this.onRegister.bind(this);
        this.onGotoStep2 = this.onGotoStep2.bind(this);
        this.updateSize = this.updateSize.bind(this);
        this.onSelectBooth = this.onSelectBooth.bind(this);
        this.removeEventItem = this.removeEventItem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.bgImage = React.createRef();
        this.selectBooth = React.createRef();

        this.state = { event: null, register: null, screen: 0, booth: [], selectedBooth: [] };

        const url = '/event/career-fair-2018';
        $.get(T.url(url)).then(res => {
            if (res.error) {
                console.error('GET: ' + url + '. ' + res.error);
            } else {
                this.setState({ event: res.event, register: res.register });
            }
        }).catch(error => {
            console.error('GET: ' + url + '. ' + error);
        });
    }

    componentDidMount() {
        const url = '/event/event-item/career-fair-2018';
        $.get(T.url(url)).then(res => {
            if (res.error) {
                console.error('GET: ' + url + '. ' + res.error);
            } else {
                this.setState({ booth: res.items });
            }
        }).catch(error => {
            console.error('GET: ' + url + '. ' + error);
        });

        setTimeout(() => {
            const image = new Image();
            image.onload = () => {
                $(this.bgImage.current).attr('href', image.src);
                this.setState({ width: image.width, height: image.height });
            }
            image.src = '/img/event/career_fair_2018.png';
        }, 100);

        $(window).resize(this.updateSize);
    }

    componentDidUpdate() {
        this.updateSize();

        const register = this.state.register;
        if (register) {
            $('#rgpEmail').val(register.email ? register.email : '');
            $('#rgpPhoneNumber').val(register.phoneNumber ? register.phoneNumber : '');
            $('#rgpContactName').val(register.contactName ? register.contactName : '');
            $('#rgpName').val(register.name ? register.name : '');
            $('#rgpDisplayName').val(register.displayName ? register.displayName : '');
            $('#rgpAddress').val(register.address ? register.address : '');
            $('#rgpTaxCode').val(register.taxCode ? register.taxCode : '');
        }
    }

    onCancel() {
        T.confirm('Đăng ký gian hàng', 'Bạn có chắc bạn muốn hủy thông tin đăng ký?', () => this.setState({ screen: 0 }))
    }

    updateSize() {
        if (this.state.width && this.state.height) {
            const svg = $('svg'),
                svgHeight = svg.width() * this.state.height / this.state.width;
            svg.attr('height', svgHeight);
        }
    }

    onRegister(event) {
        if (this.props.system) {
            if (this.props.system.user) {
                window.scrollTo(0, 0);

                $('#rgpForm1 input').val('');
                if (this.props.system && this.props.system.user) {
                    $('#rgpEmail').val(this.props.system.user.email);
                }

                const url = '/event/register/' + this.state.event._id;
                $.get(T.url(url)).then(res => {
                    if (res.error) {
                        console.error('GET: ' + url + '. ' + res.error);
                    } else {
                        this.setState({ screen: 1, register: res.register });
                    }
                }).catch(error => {
                    console.error('GET: ' + url + '. ' + error);
                });
            } else {
                T.addListener('onLogin', 'showRegister', () => {
                    const timeoutFunc = () => {
                        if (this.props.system.user) {
                            this.onRegister(null)
                        } else {
                            setTimeout(timeoutFunc, 300);
                        }
                    };
                    timeoutFunc();

                    T.removeListener('onLogin', 'showRegister');
                });
                T.showLoginModal({ state: 'login', message: 'Xin vui lòng đăng nhập trước!' });
            }
        }
        if (event) event.preventDefault();
    }

    onGotoStep2(event) {
        if (document.getElementById('rgpForm1').checkValidity()) {
            const data = {
                eventId: this.state.event._id,
                email: $('#rgpEmail').val(),
                phoneNumber: $('#rgpPhoneNumber').val(),
                contactName: $('#rgpContactName').val(),
                name: $('#rgpName').val(),
                displayName: $('#rgpDisplayName').val(),
                address: $('#rgpAddress').val(),
                taxCode: $('#rgpTaxCode').val()
            };

            let url = '/event/register';
            $.post(T.url(url), { data }).then(res => {
                if (res.error) {
                    console.error('POST: ' + url + '. ' + res.error);
                } else {
                    url = '/event/event-item/' + this.state.event._id;
                    $.get(T.url(url)).then(res => {
                        if (res.error) {
                            console.error('GET: ' + url + '. ' + res.error);
                        } else {
                            let selectedBooth = [];
                            for (let i = 0; i < res.items.length; i++) {
                                selectedBooth.push(res.items[i]._id);
                            }
                            this.setState({ screen: 2, selectedBooth });
                        }
                    }).catch(error => {
                        console.error('GET: ' + url + '. ' + error);
                    });
                }
            }).catch(error => {
                console.error('POST: ' + url + '. ' + error);
            });
        } else {
            event.stopPropagation();
        }
        document.getElementById('rgpForm1').classList.add('was-validated');
        event.preventDefault();
    }

    onSelectBooth(event) {
        const selectedBooth = this.state.selectedBooth.splice(0),
            boothIndex = $(event.target).attr('data-id'),
            index = selectedBooth.indexOf(boothIndex);
        if (index === -1) {
            selectedBooth.push(boothIndex);
        } else {
            selectedBooth.splice(index, 1);
        }
        this.setState({ selectedBooth });

        event.preventDefault();
    }

    removeEventItem(event) {
        const boothIndex = $(event.target).attr('data-id'),
            selectedBooth = this.state.selectedBooth.splice(0),
            index = selectedBooth.indexOf(boothIndex);
        if (index !== -1) {
            selectedBooth.splice(index, 1);
        }
        this.setState({ selectedBooth });

        event.preventDefault();
    }

    onSubmit(event) {
        if (this.state.selectedBooth.length === 0) {
            T.alert('Đăng ký', 'Bạn vẫn chưa chọn gian hàng nào cả!');
        } else {
            const data = { eventId: this.state.event._id, ids: this.state.selectedBooth };
            const url = '/event/event-item';
            $.post(T.url(url), { data }).then(res => {
                if (res.error) {
                    console.error('POST: ' + url + '. ' + res.error);
                } else {
                    T.alert('Ngày hội việc làm', 'Bạn đã đăng ký thành công gian hàng!');
                    this.setState({ screen: 0 });
                }
            }).catch(error => {
                console.error('POST: ' + url + '. ' + error);
            });
        }

        event.preventDefault();
    }

    render() {
        const { screen, booth } = this.state;
        if (this.props.system && this.props.system.user == null && screen !== 0) {
            this.setState({ screen: 0 });
        }

        const step2Style = {
            position: 'fixed', zIndex: 1000, bottom: '0', left: '0',
            width: '100%', maxHeight: 'auto',
            backgroundColor: '#333', color: 'white',
            display: screen === 2 ? 'block' : 'none'
        };

        const buttons = [], selectedButtons = [];
        for (let i = 0; i < booth.length; i++) {
            const item = booth[i],
                isMyBooth = (this.props.system && this.props.system.user && item.userId === this.props.system.user._id);
            if (item.userId == undefined || item.userId == null || isMyBooth) {
                if (isMyBooth) {
                    console.log(item.name, item.userId, this.props.system.user._id);
                }
                let index = this.state.selectedBooth.indexOf(item._id),
                    className = 'btn btn-sm';
                if (index === -1) {
                    className += ' btn-outline-primary';
                } else {
                    className += ' btn-danger';
                    selectedButtons.push(
                        <div key={i} className='btn-group' style={{ margin: '0 3px' }}>
                            <button type='button' className='btn btn-sm btn-primary' data-id={item._id}>{item.name}</button>
                            <button type='button' className='btn btn-sm btn-danger' data-id={item._id} onClick={this.removeEventItem}>X</button>
                        </div>
                    );
                }

                buttons.push(
                    <button key={i} type='button' className={className} data-id={item._id} onClick={this.onSelectBooth}>{item.name}</button >
                );
            }
        }

        return (
            <div className='container'>
                <svg width='100%' height={this.state.height} style={{ display: screen !== 1 ? 'block' : 'none', marginBottom: screen === 2 ? '135px' : '0' }}>
                    <image ref={this.bgImage} width='100%' />
                </svg>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <a href='#register' onClick={this.onRegister} style={{ display: screen === 0 ? 'block' : 'none' }}>
                        <img src='/img/register.png' alt='Register' className='col-md-3 col-sm-6 col-xs-7 col-8' style={{ height: 'auto' }} />
                    </a>
                </div>

                <form className='needs-validation' id='rgpForm1' onSubmit={this.onGotoStep2} noValidate='true' style={{ display: screen === 1 ? 'block' : 'none' }}>
                    <div className='modal-body'>
                        <div className='form-group row'>
                            <label htmlFor='rgpEmail' className='col-sm-3 col-form-label'>Email</label>
                            <div className='col-sm-9'>
                                <input type='email' className='form-control' required={true} autoFocus={true}
                                    placeholder='Email' id='rgpEmail' />
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpPhoneNumber' className='col-sm-3 col-form-label'>
                                Điện thoại di động
                            </label>
                            <div className='col-sm-9'>
                                <input type='number' className='form-control' required='true'
                                    placeholder='Điện thoại di động' id='rgpPhoneNumber' />
                                <small className='form-text text-muted'>
                                    Điện thoại di động người liên hệ trực tiếp
                                </small>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpContactName' className='col-sm-3 col-form-label'>
                                Họ và tên
                            </label>
                            <div className='col-sm-9'>
                                <input type='text' className='form-control' required={true}
                                    placeholder='Họ và tên' id='rgpContactName' />
                                <small className='form-text text-muted'>
                                    Họ và tên người liên hệ trực tiếp
                                </small>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpName' className='col-sm-3 col-form-label'>
                                Tên đơn vị
                            </label>
                            <div className='col-sm-9'>
                                <input type='text' className='form-control' required={true}
                                    placeholder='Tên đơn vị' id='rgpName' />
                                <small className='form-text text-muted'>
                                    Để xuất hóa đơn hoặc biên nhận
                                </small>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpDisplayName' className='col-sm-3 col-form-label'>
                                Tên hiển thị
                            </label>
                            <div className='col-sm-9'>
                                <input type='text' className='form-control' required={true}
                                    placeholder='Tên hiển thị' id='rgpDisplayName' />
                                <small className='form-text text-muted'>
                                    Tên đơn vị thể hiện trên gian hàng
                                </small>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpAddress' className='col-sm-3 col-form-label'>
                                Địa chỉ
                            </label>
                            <div className='col-sm-9'>
                                <input type='text' className='form-control' required={true}
                                    placeholder='Địa chỉ' id='rgpAddress' />
                                <small className='form-text text-muted'>
                                    Để ghi trên hóa đơn hoặc biên nhận
                                </small>
                            </div>
                        </div>
                        <div className='form-group row'>
                            <label htmlFor='rgpTaxCode' className='col-sm-3 col-form-label'>
                                Mã số thuế
                            </label>
                            <div className='col-sm-9'>
                                <input type='text' className='form-control' required={true}
                                    placeholder='Mã số thuế' id='rgpTaxCode' />
                            </div>
                        </div>
                        <p id='rgpErrorMessage' className='text-danger' />
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-secondary' onClick={this.onCancel}>Hủy</button>
                        <button type='submit' className='btn btn-primary'>Chọn gian hàng</button>
                    </div>
                </form>

                <div style={step2Style} ref={this.selectBooth}>
                    <div style={{ padding: '6px 12px', margin: '6px 6px 0 6px', borderRadius: '6px', border: 'solid 1px', maxHeight: '80px', overflow: 'auto' }}>
                        <div style={{ overflowY: 'scroll' }}>{buttons}</div>
                    </div>
                    <div style={{ whiteSpace: 'nowrap', padding: '6px', marginBottom: '6px' }}>
                        <div style={{ display: 'inline-block' }}>
                            Chọn gian hàng:&nbsp;
                            {selectedButtons}
                        </div>
                        <button type='button' className='btn btn-sm btn-primary float-right' onClick={this.onSubmit}>Submit</button>
                        <button type='button' className='btn btn-sm btn-secondary float-right' onClick={this.onCancel} style={{ margin: '0 6px' }}>Hủy</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    system: state.system
});
const mapActionsToProps = {
};
export default connect(mapStateToProps, mapActionsToProps)(RegisterPage);