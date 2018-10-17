import T from '../common/js/common';
import '../common/js/sweetalert.min.js';
import React from 'react';
import { Link } from 'react-router-dom';

export default class NewsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.table = React.createRef();
        this.getData = this.getData.bind(this);
        this.create = this.create.bind(this);
        this.changeActive = this.changeActive.bind(this);
        this.swap = this.swap.bind(this);

        this.state = { page: null };
    }

    componentDidMount() {
        this.getData();
    }

    create() {
        const url = '/admin/news/list';
        T.post(url, data => {
            if (data.error) {
                T.notify('Tạo tin tức bị lỗi!', 'danger');
                console.error('POST: ' + url + '. ' + data.error);
            } else {
                this.props.history.push('/admin/news/edit/' + data.item._id);
            }
        }, error => T.notify('Tạo tin tức bị lỗi!', 'danger'));
    }

    getData() {
        const url = '/admin/news/list/page/1/100'; //TODO
        T.get(url, data => {
            if (data.error) {
                T.notify('Lấy tin tức bị lỗi!', 'danger');
                console.error('GET: ' + url + '. ' + data.error);
            } else {
                this.setState({ page: data.page });
            }
        }, error => T.notify('Lấy tin tức bị lỗi!', 'danger'));
    }

    swap(item, isMoveUp) {
        const url = '/admin/news/list/swap/';
        T.put(url, { id: item._id, isMoveUp }, data => {
            if (data.error) {
                T.notify('Thay đổi thứ tự tin tức bị lỗi!', 'danger');
                console.error('PUT: ' + url + '. ' + data.error);
            } else {
                this.getData();
            }
        }, error => T.notify('Thay đổi thứ tự tin tức bị lỗi!', 'danger'));
    }

    changeActive(item, index) {
        const url = '/admin/news/list';
        T.put(url, { _id: item._id, changes: { active: !item.active } }, data => {
            if (data.error) {
                T.notify('Thay đổi kích hoạt tin tức bị lỗi!', 'danger');
                console.error('PUT: ' + url + '. ' + data.error);
            } else {
                T.notify('Tin tức ' + (data.item.active ? 'được ' : 'mất ') + 'kích hoạt!', 'info');
                const state = Object.assign({}, this.state);
                state.page.list[index].active = data.item.active;
                this.setState(state);
            }
        }, error => T.notify('Thay đổi kích hoạt tin tức bị lỗi!', 'danger'));
    }

    delete(item) {
        swal({
            title: 'Tin tức: Xóa tin tức',
            text: 'Bạn có chắc bạn muốn xóa tin tức này?', icon: 'warning', dangerMode: true,
            buttons: { cancel: true, confirm: true },
        }).then(isConfirm => {
            if (isConfirm) {
                const url = '/admin/news/list';
                T.delete(url, { id: item._id }, data => {
                    if (data.error) {
                        T.notify('Xóa tin tức bị lỗi!', 'danger');
                        console.error('DELETE: ' + url + '. ' + data.error);
                    } else {
                        swal({ text: 'Tin tức được xóa thành công!', icon: 'error', button: false, timer: 1500 });
                        this.getData();
                    }
                }, error => T.notify('Xóa tin tức bị lỗi!', 'danger'));
            }
        });
    }

    render() {
        let table = null;
        if (this.state.page && this.state.page.list && this.state.page.list.length > 0) {
            table = (
                <table className='table table-hover table-bordered' ref={this.table}>
                    <thead>
                        <tr>
                            <th style={{ width: '80%' }}>Title</th>
                            <th style={{ width: '20%', textAlign: 'center' }}>Image</th>
                            <th style={{ width: 'auto' }}>Active</th>
                            <th style={{ width: 'auto', textAlign: 'center' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.page.list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td style={{ width: '20%', textAlign: 'center' }}>
                                    <img src={T.url(item.image)} alt='avatar' style={{ height: '32px' }} />
                                </td>
                                <td className='toggle' style={{ textAlign: 'center' }} >
                                    <label>
                                        <input type='checkbox' defaultChecked={item.active} onClick={() => this.changeActive(item, index)} /><span className='button-indecator' />
                                    </label>
                                </td>
                                <td className='btn-group'>
                                    <a className='btn btn-success' href='#' onClick={() => this.swap(item, true)}>
                                        <i className='fa fa-lg fa-arrow-up' />
                                    </a>
                                    <a className='btn btn-success' href='#' onClick={() => this.swap(item, false)}>
                                        <i className='fa fa-lg fa-arrow-down' />
                                    </a>
                                    <Link to={'/admin/news/edit/' + item._id} data-id={item._id} className='btn btn-primary'>
                                        <i className='fa fa-lg fa-edit' />
                                    </Link>
                                    <a className='btn btn-danger' href='#' onClick={() => this.delete(item)}>
                                        <i className='fa fa-lg fa-trash' />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        } else {
            table = <p>Không có bài viết!</p>;
        }

        return (
            <main className='app-content'>
                <div className='app-title'>
                    <div>
                        <h1><i className='fa fa-dashboard' /> Tin tức: Danh sách</h1>
                        <p></p>
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <li className='breadcrumb-item'>
                            <Link to='/admin'><i className='fa fa-home fa-lg' /></Link>
                        </li>
                        <li className='breadcrumb-item'><a href='#'>Tin tức: Danh sách</a></li>
                    </ul>
                </div>
                <div className='row tile'>
                    {table}
                </div>
                <button type='button' className='btn btn-primary btn-circle' style={{ position: 'fixed', right: '10px', bottom: '10px' }}
                    onClick={this.create}>
                    <i className='fa fa-lg fa-plus' />
                </button>
            </main>
        );
    }
}