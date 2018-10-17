import React from 'react';
import { Link } from 'react-router-dom';

export default class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            var treeviewMenu = $('.app-menu');

            // Toggle Sidebar
            $('[data-toggle="sidebar"]').click(function (event) {
                $('.app').toggleClass('sidenav-toggled');
                event.preventDefault();
            });

            // Activate sidebar treeview toggle
            $('[data-toggle="treeview"]').click(function (event) {
                if (!$(this).parent().hasClass('is-expanded')) {
                    treeviewMenu.find('[data-toggle="treeview"]').parent().removeClass('is-expanded');
                }
                $(this).parent().toggleClass('is-expanded');
                event.preventDefault();
            });

            // Set initial active toggle
            $('[data-toggle="treeview."].is-expanded').parent().toggleClass('is-expanded');

            //Activate bootstrip tooltips
            $('[data-toggle="tooltip"]').tooltip();
        }, 500);
    }

    render() {
        return [
            <div key={1} className='app-sidebar__overlay' data-toggle='sidebar' />,
            <aside key={2} className='app-sidebar'>
                <div className='app-sidebar__user'>
                    <img className='app-sidebar__user-avatar' src='https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg' alt='Avatar' />
                    <div>
                        <p className='app-sidebar__user-name'>Admin</p>
                        <p className='app-sidebar__user-designation'>SSCC</p>
                    </div>
                </div>
                <ul className='app-menu'>
                    <li>
                        <Link className='app-menu__item' to='/admin'>
                            <i className='app-menu__icon fa fa-dashboard' />
                            <span className='app-menu__label'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='app-menu__item' to='/admin/user'>
                            <i className='app-menu__icon fa fa-user' />
                            <span className='app-menu__label'>Người dùng</span>
                        </Link>
                    </li>
                    <li className='treeview'>
                        <a className='app-menu__item' href='#' data-toggle='treeview'>
                            <i className='app-menu__icon fa fa-home' />
                            <span className='app-menu__label'>Home</span>
                            <i className='treeview-indicator fa fa-angle-right' />
                        </a>
                        <ul className='treeview-menu'>
                            <li>
                                <Link className='treeview-item' to='/admin/home/carousel'>
                                    <i className='icon fa fa-circle-o' />Carousel
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/home/strategy-partner'>
                                    <i className='icon fa fa-circle-o' />Đối tác chiến lược
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/home/recruiting-partner'>
                                    <i className='icon fa fa-circle-o' />Đối tác tuyển dụng
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='treeview'>
                        <a className='app-menu__item' href='#' data-toggle='treeview'>
                            <i className='app-menu__icon fa fa-pie-chart' />
                            <span className='app-menu__label'>Giới thiệu</span>
                            <i className='treeview-indicator fa fa-angle-right' />
                        </a>
                        <ul className='treeview-menu'>
                            <li>
                                <Link className='treeview-item' to='/admin/introduction/carousel'>
                                    <i className='icon fa fa-circle-o' />Carousel
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/introduction/mission'>
                                    <i className='icon fa fa-circle-o' />Chức năng - Nhiệm vụ
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/introduction/personnel'>
                                    <i className='icon fa fa-circle-o' />Nhân sự
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='treeview'>
                        <a className='app-menu__item' href='#' data-toggle='treeview'>
                            <i className='app-menu__icon fa fa-edit' />
                            <span className='app-menu__label'>Tin tức</span>
                            <i className='treeview-indicator fa fa-angle-right' />
                        </a>
                        <ul className='treeview-menu'>
                            <li>
                                <Link className='treeview-item' to='/admin/news/carousel'>
                                    <i className='icon fa fa-circle-o' />Carousel
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/news/category'>
                                    <i className='icon fa fa-circle-o' />Danh mục
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/news/list'>
                                    <i className='icon fa fa-circle-o' />Bài viết
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='treeview'>
                        <a className='app-menu__item' href='#' data-toggle='treeview'>
                            <i className='app-menu__icon fa fa-th-list' />
                            <span className='app-menu__label'>Sự kiện</span>
                            <i className='treeview-indicator fa fa-angle-right' />
                        </a>
                        <ul className='treeview-menu'>
                            <li>
                                <Link className='treeview-item' to='/admin/event/carousel'>
                                    <i className='icon fa fa-circle-o' />Carousel
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/event/category'>
                                    <i className='icon fa fa-circle-o' />Danh mục
                                </Link>
                            </li>
                            <li>
                                <Link className='treeview-item' to='/admin/event/list'>
                                    <i className='icon fa fa-circle-o' />Sự kiện
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside >
        ];
    }
}