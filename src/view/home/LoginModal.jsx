import T from '../common/js/common';
import React from 'react';
import { connect } from 'react-redux';
import { updateSystemState } from '../redux/system.jsx';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNavLinkClick = this.onNavLinkClick.bind(this);

        T.showLoginModal = (data) => {
            this.updateView(data.state, data.message);
            $('#modalLogin').modal('show');
        };

        T.logOut = () => {
            T.confirm('Đăng xuất', 'Bạn có chắc bạn muốn đăng xuất?', () => {
                T.post('/logout', {},
                    data => this.props.updateSystemState({ user: null }),
                    error => console.error('GET: /logout. ' + error));
            });
        }
    }

    updateView(state, message) {
        $('#modalLogin a.nav-link').removeClass('active').removeClass('show');
        $('#modalLogin a.nav-link[href="#' + state + '"]').addClass('active').addClass('show');
        $('#modalLogin p.message').html(message ? message : '');

        $('#modalLogin div.modal-content div.modal-body div.form-group').css('display', 'flex')
        if (state === 'register') {
            $('#loginForgotPassword').css('display', 'none');
            $('#modalLogin input').val('');
            $('#modalLogin #loginModalSend').attr('data-action', state).html('Đăng ký');
        } else {
            $('#loginForgotPassword').css('display', 'block');
            $('#loginModalName').parent().parent().css('display', 'none')
            $('#modalLogin #loginModalSend').attr('data-action', state).html('Đăng nhập');
        }
    }

    onNavLinkClick(event) {
        this.updateView($(event.target).attr('href').substring(1), '');
        event.preventDefault();
    }

    onForgotPasswordClick() {
        const email = $('#loginModalEmail').val().trim();

        if (email.checkEmail() === false || email === '') {
            $('#loginModalErrorMessage').html('Email is not valid!');
            $('#loginModalEmail').focus();
            return;
        }
        T.put('/login/forgot-password', { email }, result => {
            if (result.error) {
                $('#loginModalErrorMessage').html('Check email has some error!');
            } else {
                $('#loginModalErrorMessage').html('Your request is solved. Please check your email to reset your password!');
            }
        }, () => $('#loginModalErrorMessage').html('Check email has some error!'));
    }

    onSubmit(event) {
        let loginModalSend = $('#loginModalSend').attr('disabled', true),
            data = {
                name: $('#loginModalName').val().trim(),
                email: $('#loginModalEmail').val().trim(),
                password: $('#loginModalPassword').val()
            };
        if (loginModalSend.attr('data-action') === 'register') {
            if (data.name === '') {
                loginModalSend.attr('disabled', false);
                $('#loginModalErrorMessage').html('Your name is empty now!');
                $('#loginModalName').focus();
            } else {
                T.post('/register', data, res => {
                    loginModalSend.attr('disabled', false);
                    $('#loginModalErrorMessage').html(res.error ? res.error : '');

                    if (res.user) {
                        $('#modalLogin').modal('hide');
                        T.alert('Đăng ký thành viên', 'Bạn đã đăng ký thành viên thành công. Vui lòng kiểm tra email kích hoạt tài khoản!');
                    }
                }, error => {
                    loginModalSend.attr('disabled', false);
                    console.error('POST register:', error);
                });

                // const url = '/register';
                // $.post(T.url(url), data).then(res => {
                //     loginModalSend.attr('disabled', false);
                //     $('#loginModalErrorMessage').html(res.error ? res.error : '');

                //     if (res.user) {
                //         $('#modalLogin').modal('hide');
                //         T.alert('Đăng ký thành viên', 'Bạn đã đăng ký thành viên thành công. Vui lòng kiểm tra email kích hoạt tài khoản!');
                //     }
                // }).catch(error => {
                //     loginModalSend.attr('disabled', false);
                // });
            }
        } else { //login
            T.post('/login', data, res => {
                loginModalSend.attr('disabled', false);
                $('#loginModalErrorMessage').html(res.error ? res.error : '');
                if (res.user) {
                    T.runListener('onLogin');
                    this.props.updateSystemState({ user: res.user });
                    $('#modalLogin').modal('hide');

                    if (res.user.role === 'admin') {
                        window.location = '/admin';
                    }
                }
            }, error => {
                loginModalSend.attr('disabled', false);
                console.error('POST login:', error);
            });

            // const url = '/login';
            // $.post(T.url(url), data).then(res => {
            //     loginModalSend.attr('disabled', false);
            //     $('#loginModalErrorMessage').html(res.error ? res.error : '');
            //     if (res.user) {
            //         T.runListener('onLogin');
            //         this.props.updateSystemState({ user: res.user });
            //         $('#modalLogin').modal('hide');
            //     }
            // }).catch(error => {
            //     loginModalSend.attr('disabled', false);
            // });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div id='modalLogin' className='modal' tabIndex='-1' role='dialog'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header' style={{ padding: 0 }}>
                            <ul className='nav nav-pills nav-fill'
                                style={{ width: '100%', display: 'flex' }}>
                                <li className='nav-item'>
                                    <a href='#register' onClick={this.onNavLinkClick} className='nav-link'
                                        style={{ paddingTop: '12px', paddingBottom: '12px', sborderRadius: '4.5px 0 0 0' }}>Đăng ký</a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#login' onClick={this.onNavLinkClick} className='nav-link'
                                        style={{ paddingTop: '12px', paddingBottom: '12px', borderRadius: '0 4.5px 0 0' }}>Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                        <form className='needs-validation' onSubmit={this.onSubmit} noValidate='true'>
                            <div className='modal-body'>
                                <p className='message' />
                                <div className='form-group row'>
                                    <label htmlFor='loginModalName' className='col-sm-3 col-form-label'>Họ và tên</label>
                                    <div className='col-sm-9'>
                                        <input type='text' className='form-control' required={true}
                                            placeholder='Name' id='loginModalName' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='loginModalEmail' className='col-sm-3 col-form-label'>Email</label>
                                    <div className='col-sm-9'>
                                        <input type='email' className='form-control' required={true}
                                            placeholder='Email' id='loginModalEmail' />
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label htmlFor='loginModalPassword' className='col-sm-3 col-form-label'>Mật khẩu</label>
                                    <div className='col-sm-9'>
                                        <input type='password' className='form-control' required={true}
                                            placeholder='Password' id='loginModalPassword' />
                                        <a style={{ margin: '10px' }} id='loginForgotPassword' href='#' className='onlyLoginForm'
                                            onClick={this.onForgotPasswordClick.bind(this)}>Quên mật khẩu?</a>
                                    </div>
                                </div>
                                <p id='loginModalErrorMessage' className='text-danger' />
                            </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-secondary' data-dismiss='modal'
                                    style={{ width: '100px' }}>Đóng
                                </button>
                                <button type='submit' className='btn btn-primary' id='loginModalSend'
                                    style={{ width: '100px' }} data-action='register'>Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    system: state.system
});
const mapActionsToProps = { updateSystemState };
export default connect(mapStateToProps, mapActionsToProps)(LoginModal);