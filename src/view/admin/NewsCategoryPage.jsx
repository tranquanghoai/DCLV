import T from '../common/js/common';
import '../common/js/sweetalert.min.js';
import React from 'react';
import NewsCategoryModal from './NewsCategoryModal.jsx';

export default class NewsCategoryPage extends React.Component {
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

    getData() {
        const url = '/admin/news/category/page/1/100'; //TODO
        T.get(url, data => {
            if (data.error) {
                T.notify('Lấy danh mục bị lỗi!', 'danger');
                console.error('GET: ' + url + '. ' + data.error);
            } else {
                this.setState({ page: data.page });
            }
        }, error => T.notify('Lấy danh mục bị lỗi!', 'danger'));
    }

    create() {
        const url = '/admin/news/category';
        T.post(url, data => {
            if (data.error) {
                T.notify('Tạo danh mục bị lỗi!', 'danger');
                console.error('POST: ' + url + '. ' + data.error);
            } else {
                T.showNewsCategoryModal(data.item);
                this.getData();
            }
        }, error => T.notify('Tạo danh mục bị lỗi!', 'danger'));
    }

    swap(item, isMoveUp) {
        const url = '/admin/news/category/swap/';
        T.put(url, { id: item._id, isMoveUp }, data => {
            if (data.error) {
                T.notify('Thay đổi vị trí danh mục bị lỗi!', 'danger')
                console.error('PUT: ' + url + '. ' + data.error);
            } else {
                this.getData();
            }
        }, error => T.notify('Thay đổi vị trí danh mục bị lỗi!', 'danger'));
    }

    changeActive(item, index) {
        const url = '/admin/news/category';
        T.put(url, { _id: item._id, changes: { active: !item.active } }, data => {
            if (data.error) {
                T.notify('Thay đổi kích hoạt danh mục bị lỗi!', 'danger');
                console.error('PUT: ' + url + '. ' + data.error);
            } else {
                T.notify('Danh mục ' + (data.item.active ? 'được ' : 'mất ') + 'kích hoạt!', 'info');
                const state = Object.assign({}, this.state);
                state.page.list[index].active = data.item.active;
                this.setState(state);
            }
        }, error => T.notify('Thay đổi kích hoạt danh mục bị lỗi!', 'danger'));
    }

    delete(item) {
        swal({
            title: 'Tin tức: Xóa danh mục',
            text: 'Bạn có chắc bạn muốn xóa danh mục này?', icon: 'warning', dangerMode: true,
            buttons: { cancel: true, confirm: true },
        }).then(isConfirm => {
            if (isConfirm) {
                const url = '/admin/news/category';
                T.delete(url, { id: item._id }, data => {
                    if (data.error) {
                        T.notify('Xóa danh mục bị lỗi!', 'danger');
                        console.error('DELETE: ' + url + '. ' + data.error);
                    } else {
                        swal({ text: 'Danh mục được xóa thành công!', icon: 'error', button: false, timer: 1500 });
                        this.getData();
                    }
                }, error => T.notify('Xóa danh mục bị lỗi!', 'danger'));
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
                                    <a className='btn btn-primary' href='#' onClick={() => T.showNewsCategoryModal(item)}>
                                        <i className='fa fa-lg fa-edit' />
                                    </a>
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
            table = <p>Không có danh mục!</p>;
        }

        return (
            <main className='app-content'>
                <div className='app-title'>
                    <div>
                        <h1><i className='fa fa-dashboard' />Tin tức: Danh mục</h1>
                        <p></p>
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <li className='breadcrumb-item'>
                            <i className='fa fa-home fa-lg' />
                        </li>
                        <li className='breadcrumb-item'>
                            <a href='#'>Tin tức: Danh mục</a>
                        </li>
                    </ul>
                </div>
                <div className='row tile'>
                    {table}
                </div>
                <button type='button' className='btn btn-primary btn-circle' style={{ position: 'fixed', right: '10px', bottom: '10px' }}
                    onClick={this.create}>
                    <i className='fa fa-lg fa-plus' />
                </button>
                <NewsCategoryModal onSaveSuccess={this.getData} />
            </main >
        );
    }
}