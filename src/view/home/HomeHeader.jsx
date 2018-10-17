import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            $('.menu[data-index="' + this.props.menuIndex + '"]').addClass('active');

            $('.menu').click(function () {
                $('.menu').removeClass('active');
                $('.menu[data-index="' + $(this).attr('data-index') + '"]').addClass('active');
            });

            $('.dropdown').hover(
                function () {
                    $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
                    $(this).toggleClass('open');
                    $('b', this).toggleClass('caret caret-up');
                },
                function () {
                    $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
                    $(this).toggleClass('open');
                    $('b', this).toggleClass('caret caret-up');
                });

            $('#sidebar').mCustomScrollbar({
                theme: 'minimal'
            });

            $('#dismiss, .overlay').on('click', () => {
                $('#sidebar').removeClass('active'); // hide sidebar
                $('.overlay').removeClass('active'); // hide overlay
            });

            $('#sidebarCollapse').on('click', () => {
                $('#sidebar').addClass('active'); // open sidebar
                $('.overlay').addClass('active'); // fade in the overlay
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        }, 100);
    }

    render() {
        return (
            <header className='site-header'>
                <div className='container'>
                    <Link to='/'><img src='/img/header.png' alt='sscc' style={{ width: '100%' }} /></Link>
                    <nav className='nav nav-pills flex-column flex-sm-row navbar-expand-lg' style={{ marginTop: 6 }}>
                        <button id='sidebarCollapse' className='navbar-toggler' type='button' data-toggle='collapse' aria-expanded='false' aria-label='Toggle navigation'>
                            <img src='/img/sandwich.png' alt='menu' style={{ height: '24px' }} />
                        </button>
                        <div className='collapse navbar-collapse'>
                            <a className='flex-sm-fill text-sm-center nav-link' target='_blank' href='http://www.hcmut.edu.vn/'>HCMUT.EDU.VN</a>
                            <Link to='/' className='flex-sm-fill text-sm-center nav-link menu' data-index={0}>SSCC</Link>
                            <div className='dropdown'>
                                <Link to='/introduction' className='flex-sm-fill text-sm-center nav-link dropdown-toggle menu' data-index={1}>GIỚI THIỆU</Link>
                                <div className='dropdown-menu'>
                                    <a className='dropdown-item' href='#'>Chức năng - Nhiệm vụ</a>
                                    <a className='dropdown-item' href='#'>Nhân sự</a>
                                </div>
                            </div>
                            <div className='dropdown'>
                                <Link to='/event' className='flex-sm-fill text-sm-center nav-link dropdown-toggle menu' data-index={2}>SỰ KIỆN</Link>
                                <div className='dropdown-menu'>
                                    <a className='dropdown-item' href='#'>Hình ảnh hoạt động</a>
                                    <a className='dropdown-item' href='#'>BKHCM Career Fair</a>
                                    <a className='dropdown-item' href='#'>Techcamp Saigon Uni</a>
                                    <a className='dropdown-item' href='#'>Tư vấn mùa thi</a>
                                </div>
                            </div>
                            <div className='dropdown'>
                                <Link to='/student' className='flex-sm-fill text-sm-center nav-link dropdown-toggle menu' data-index={3}>SINH VIÊN</Link>
                                <div className='dropdown-menu'>
                                    <a className='dropdown-item' href='#'>Bản tin doanh nghiệp</a>
                                    <a className='dropdown-item' href='#'>Bản tin việc làm</a>
                                    <a className='dropdown-item' href='#'>Học tập - Hướng nghiệp</a>
                                    <a className='dropdown-item' href='#'>Chào tân sinh viên K2017</a>
                                    <a className='dropdown-item' href='#'>Hoạt động ngoài khóa</a>
                                </div>
                            </div>
                            <Link to='/news' className='flex-sm-fill text-sm-center nav-link menu' data-index={4}>TIN TỨC</Link>
                            <Link to='/career-fair-2018' className='flex-sm-fill text-sm-center nav-link menu' data-index={5}>NGÀY HỘI VIỆC LÀM</Link>
                        </div>
                    </nav>
                </div>

                <nav id='sidebar'>
                    <img id='dismiss' src='/img/close.png' />
                    <div className='sidebar-header'>
                        <h3>SSCC</h3>
                    </div>
                    <ul className='list-unstyled components'>
                        <li>
                            <a href='http://hcmut.edu.vn' target='_blank'>hcmut.edu.vn</a>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='active'>
                            <a href='#sbSubmenuIntroduction' data-toggle='collapse' aria-expanded='false'>Giới thiệu</a>
                            <ul className='collapse list-unstyled' id='sbSubmenuIntroduction'>
                                <li>
                                    <a href='#'>Chức năng - Nhiệm vụ</a>
                                </li>
                                <li>
                                    <a href='#'>Nhân sự</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#sbSubmenuEvent' data-toggle='collapse' aria-expanded='false'>Sự kiện</a>
                            <ul className='collapse list-unstyled' id='sbSubmenuEvent'>
                                <li>
                                    <a href='#'>Hình ảnh hoạt động</a>
                                </li>
                                <li>
                                    <a href='#'>BKHCM Career Fair</a>
                                </li>
                                <li>
                                    <a href='#'>Techcamp Saigon Uni</a>
                                </li>
                                <li>
                                    <a href='#'>Tư vấn mùa thi</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#sbSubmenuStudent' data-toggle='collapse' aria-expanded='false'>Sinh viên</a>
                            <ul className='collapse list-unstyled' id='sbSubmenuStudent'>
                                <li>
                                    <a href='#'>Bản tin doanh nghiệp</a>
                                </li>
                                <li>
                                    <a href='#'>Bản tin việc làm</a>
                                </li>
                                <li>
                                    <a href='#'>Học tập - Hướng nghiệp</a>
                                </li>
                                <li>
                                    <a href='#'>Chào tân sinh viên K2017</a>
                                </li>
                                <li>
                                    <a href='#'>Hoạt động ngoài khóa</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>Tin tức</a>
                        </li>
                        <li>
                            <a href='/career-fair-2018'>Ngày hội việc làm</a>
                        </li>
                    </ul>
                </nav>

                <div className='overlay' />
            </header>
        );
    }
}