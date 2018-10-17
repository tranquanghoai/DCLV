import T from '../common/js/common';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../common/Loading.jsx';
import HomeHeader from '../home/HomeHeader.jsx';
import MessagePage from '../common/MessagePage.jsx';
import LoginModal from '../home/LoginModal.jsx';
import AdminHeader from '../admin/AdminHeader.jsx';
import SidebarMenu from '../admin/SidebarMenu.jsx';
import Confirm from '../common/Confirm.jsx';
import Alert from '../common/Alert.jsx';

import Title from './../home/Title.jsx';
import Menu from './../home/Menu.jsx';
import Footer from './../home/Footer.jsx';
//=================================================================================================

const notFoundPage = () => <MessagePage message='Page not found!' />,
    registeredPage = () => <MessagePage message='Thanks for you registration!<br/>Please check your email and active your account.' />,
    activeUserPage = () => <MessagePage isTask={true} />,
    homePage = Loadable({ loading: Loading, loader: () => import('../home/HomePage.jsx') }),
    aboutPage = Loadable({ loading: Loading, loader: () => import('../about/AboutPage.jsx') }),
    propertyPage = Loadable({ loading: Loading, loader: () => import('../property/PropertyPage.jsx') }),
    agentPage = Loadable({ loading: Loading, loader: () => import('../agent/AgentPage.jsx') }),
    galleryPage = Loadable({ loading: Loading, loader: () => import('../gallery/Gallery.jsx') }),
    registerPage = Loadable({ loading: Loading, loader: () => import('../home/RegisterPage.jsx') }),
    dashboardPage = Loadable({ loading: Loading, loader: () => import('../admin/DashboardPage.jsx') }),
    userPage = Loadable({ loading: Loading, loader: () => import('../admin/UserPage.jsx') }),
    homeCarouselPage = Loadable({ loading: Loading, loader: () => import('../admin/HomeCarouselPage.jsx') }),
    homeStrategyPartnerPage = Loadable({ loading: Loading, loader: () => import('../admin/HomeStrategyPartnerPage.jsx') }),
    homeRecruitingPartnerPage = Loadable({ loading: Loading, loader: () => import('../admin/HomeRecruitingPartnerPage.jsx') }),
    introductionCarouselPage = Loadable({ loading: Loading, loader: () => import('../admin/IntroductionCarouselPage.jsx') }),
    introductionMissionPage = Loadable({ loading: Loading, loader: () => import('../admin/IntroductionMissionPage.jsx') }),
    introductionPersonnelPage = Loadable({ loading: Loading, loader: () => import('../admin/IntroductionPersonnelPage.jsx') }),
    eventCarouselPage = Loadable({ loading: Loading, loader: () => import('../admin/EventCarouselPage.jsx') }),
    eventCategoryPage = Loadable({ loading: Loading, loader: () => import('../admin/EventCategoryPage.jsx') }),
    eventListPage = Loadable({ loading: Loading, loader: () => import('../admin/EventListPage.jsx') }),
    eventEditPage = Loadable({ loading: Loading, loader: () => import('../admin/EventEditPage.jsx') }),
    newsCarouselPage = Loadable({ loading: Loading, loader: () => import('../admin/NewsCarouselPage.jsx') }),
    newsCategoryPage = Loadable({ loading: Loading, loader: () => import('../admin/NewsCategoryPage.jsx') }),
    newsListPage = Loadable({ loading: Loading, loader: () => import('../admin/NewsListPage.jsx') }),
    newsEditPage = Loadable({ loading: Loading, loader: () => import('../admin/NewsEditPage.jsx') });

const routes = [
    { view: 'user', path: '/', component: homePage, exact: true, menuIndex: 0 },
    { view: 'user', path: '/introduction', component: aboutPage, menuIndex: 1 },
    { view: 'user', path: '/property', component: propertyPage, menuIndex: 2 },
    { view: 'user', path: '/agent', component: agentPage, menuIndex: 3 },
    { view: 'user', path: '/gallery', component: galleryPage, menuIndex: 5 },
    { view: 'user', path: '/registered', component: registeredPage },
    { view: 'user', path: '/active-user/:userId', component: activeUserPage },

    { view: 'admin', path: '/admin/user', component: userPage },
    { view: 'admin', path: '/admin/home/carousel', component: homeCarouselPage },
    { view: 'admin', path: '/admin/home/strategy-partner', component: homeStrategyPartnerPage },
    { view: 'admin', path: '/admin/home/recruiting-partner', component: homeRecruitingPartnerPage },
    { view: 'admin', path: '/admin/introduction/carousel', component: introductionCarouselPage },
    { view: 'admin', path: '/admin/introduction/mission', component: introductionMissionPage },
    { view: 'admin', path: '/admin/introduction/personnel', component: introductionPersonnelPage },
    { view: 'admin', path: '/admin/event/carousel', component: eventCarouselPage },
    { view: 'admin', path: '/admin/event/category', component: eventCategoryPage },
    { view: 'admin', path: '/admin/event/list', component: eventListPage },
    { view: 'admin', path: '/admin/event/edit/:newsId', component: eventEditPage },
    { view: 'admin', path: '/admin/news/carousel', component: newsCarouselPage },
    { view: 'admin', path: '/admin/news/category', component: newsCategoryPage },
    { view: 'admin', path: '/admin/news/list', component: newsListPage },
    { view: 'admin', path: '/admin/news/edit/:newsId', component: newsEditPage },
    { view: 'admin', path: '/admin', component: dashboardPage }
];
const switches = <Switch>{routes.map((route, index) => <Route key={index} {...route} />)}</Switch>;

export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(event) {
        if (this.props.system && this.props.system.user) {
            T.logOut();
        } else {
            T.showLoginModal({ state: 'login', message: '' });
        }
        event.preventDefault();
    }

    render() {
        let routeIndex = -1;
        for (let i = 0, pathname = window.location.pathname; i < routes.length; i++) {
            const route = T.routeMatcher(routes[i].path);
            if (route.parse(pathname)) {
                routeIndex = i;
                break;
            }
        }

        // console.log('route', routeIndex, routes.length - 1, routeIndex != routes.length - 1);
        if (routeIndex !== - 1) {
            const route = routes[routeIndex];
            if (route.view === 'user') {
                let btnLoginText = '',
                    btnLoginStyle = {
                        position: 'fixed', right: '8px', top: '50%', padding: '8px',
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                        color: '#fff', backgroundColor: '#2c5a85',
                        writingMode: 'tb-rl',
                        textDecorationLine: 'none'
                    };

                if (this.props.system && this.props.system.user) {
                    btnLoginText = 'Đăng xuất';
                    btnLoginStyle.backgroundColor = 'red';
                } else {
                    btnLoginText = 'Đăng nhập';
                    btnLoginStyle.backgroundColor = '#2c5a85';
                }

                return (
                    <main className='wrapper'>
                        {/* <HomeHeader menuIndex={route.menuIndex} />
                        <div className='site-content'>
                            {switches}
                        </div> */}
                        <Title />
                        <Menu />
                        {switches}
                        <Footer />
                        {/* <a style={btnLoginStyle} href='#' onClick={this.onLogin.bind(this)}>{btnLoginText}</a>
                        <LoginModal />
                        <Confirm />
                        <Alert /> */}
                    </main>
                );
            } else if (route.view === 'admin') {
                return (
                    <div className='app sidebar-mini rtl'>
                        <AdminHeader />
                        <SidebarMenu />
                        <div className='site-content'>
                            {switches}
                        </div>
                        <Confirm />
                        <Alert />
                    </div >
                );
            }
        } else {
            return (
                <main className='app'>
                    {notFoundPage()}
                </main >
            );
        }
    }
}