import T from '../common/js/common';
import React from 'react';
import UploadBox from '../common/UploadBox.jsx';

export default class NewsCategoryModal extends React.Component {
    constructor(props) {
        super(props);
        this.save = this.save.bind(this);

        this.modal = React.createRef();
        this.uploadBox = React.createRef();
        this.btnSave = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            $(this.modal.current).on('shown.bs.modal', () => $('#ncName').focus());
        }, 500);

        T.showNewsCategoryModal = (item) => {
            const url = '/admin/news/category/edit/' + item._id;
            T.put(url, data => { }, error => T.notify('Sửa danh mục tin tức bị lỗi', 'danger'));

            const { title, image } = item ? item : { title: '', image: '/img/avatar.jpg' };
            $('#ncName').data('title', title).val(title);
            $(this.btnSave.current).data('id', item._id);
            this.uploadBox.current.setImage(image);

            $(this.modal.current).modal('show');
        };
    }

    save(event) {
        const url = '/admin/news/category',
            data = { _id: $(event.target).data('id'), changes: { title: $('#ncName').val().trim() } };
        if (data.changes.title == '') {
            T.notify('Tên danh mục bị trống!', 'danger');
            $('#ncName').focus();
        } else {
            T.put(url, data, result => {
                if (result.error) {
                    T.notify('Lưu danh mục tin tức bị lỗi!', 'danger');
                    console.error('PUT: ' + url + '. ' + result.error);
                } else if (this.props.onSaveSuccess) {
                    $(this.modal.current).modal('hide');
                    T.notify('Tên danh mục lưu thành công!', 'success');
                    this.props.onSaveSuccess();
                }
            }, error => {
                T.notify('Lưu danh mục tin tức bị lỗi!', 'danger');
            });
        }
    }

    render() {
        return (
            <div className='modal' tabIndex='-1' role='dialog' ref={this.modal}>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Tin tức: Danh mục</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body'>
                            <div className='form-group'>
                                <label htmlFor='ncName'>Tên danh mục</label>
                                <input className='form-control' id='ncName' type='text' placeholder='Tên danh mục' />
                            </div>
                            <div className='form-group'>
                                <label>Hình đại diện</label>
                                <UploadBox postUrl='/admin/upload' uploadType='NewsCategoryImage' ref={this.uploadBox} />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-dismiss='modal'>Đóng</button>
                            <button type='button' className='btn btn-primary' ref={this.btnSave} onClick={this.save}>Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}