import T from '../common/js/common';
import React from 'react';
import { Link } from 'react-router-dom';
import UploadBox from '../common/UploadBox.jsx';
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class NewsEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.changeActive = this.changeActive.bind(this);
        this.checkLink = this.checkLink.bind(this);
        this.newsLinkChange = this.newsLinkChange.bind(this);
        this.save = this.save.bind(this);

        this.newsLink = React.createRef();
        this.uploadBox = React.createRef();

        this.state = { item: null, categories: [], editorState: EditorState.createEmpty() };
    }

    componentDidMount() {
        this.getData();

        setTimeout(() => {
            $('#neNewsTitle').focus();

            $('#neNewsCategories').select2();

            $('#neNewsStartPost').datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                todayHighlight: true
            });
            $('#neNewsStopPost').datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                todayHighlight: true
            });
        }, 500);
    }

    getData() {
        const route = T.routeMatcher('/admin/news/edit/:newsId'),
            params = route.parse(window.location.pathname),
            url = '/admin/news/item/' + params.newsId;

        T.get(url, data => {
            if (data.error) {
                T.notify('Lấy tin tức bị lỗi!', 'danger');
                this.props.history.push('/admin/news/list');
                console.error('GET: ' + url + '. ' + data.error);
            } else if (data.item) {
                $('#neNewsCategories').val(data.item.categories);

                const neNewsStartPost = $('#neNewsStartPost').datepicker({
                    format: 'dd/mm/yyyy',
                    autoclose: true,
                    todayHighlight: true
                });
                const neNewsStopPost = $('#neNewsStopPost').datepicker({
                    format: 'dd/mm/yyyy',
                    autoclose: true,
                    todayHighlight: true
                });
                if (data.item.startPost) neNewsStartPost.datepicker('update', new Date(data.item.startPost));
                if (data.item.stopPost) neNewsStopPost.datepicker('update', new Date(data.item.stopPost));

                $(this.newsLink.current).html('http://bktphcm.net/tintuc/' + data.item.link)
                    .attr('href', '/tintuc/' + data.item.link);

                this.uploadBox.current.setImage(data.item.image);

                const { contentBlocks, entityMap } = htmlToDraft(data.item.content),
                    contentState = ContentState.createFromBlockArray(contentBlocks, entityMap),
                    editorState = EditorState.createWithContent(contentState);

                this.setState({ item: data.item, categories: data.categories, editorState });
            } else {
                this.props.history.push('/admin/news/list');
            }
        }, error => {
            T.notify('Lấy tin tức bị lỗi!', 'danger');
            this.props.history.push('/admin/news/list');
        });
    }

    changeActive(event) {
        this.setState({ item: Object.assign({}, this.state.item, { active: event.target.checked }) });
    }

    checkLink(item) {
        const url = '/admin/news/item/check-link';
        T.put(url, { _id: item._id, link: $('#neNewsLink').val().trim() }, data => {
            if (data.error) {
                T.notify('Kiểm tra Link bị lỗi!', 'danger');
                console.error('PUT: ' + url + '. ' + error);
            } else {
                T.notify('Link hợp lệ!', 'success');
            }
        }, error => T.notify('Kiểm tra Link bị lỗi!', 'danger'));
    }

    newsLinkChange(event) {
        $(this.newsLink.current).html('http://bktphcm.net/tintuc/' + event.target.value)
            .attr('href', '/tintuc/' + event.target.value);
    }

    save() {
        const item = Object.assign({}, this.state.item, {
            categories: $('#neNewsCategories').val(),
            title: $('#neNewsTitle').val(),
            link: $('#neNewsLink').val().trim(),
            startPost: $('#neNewsStartPost').datepicker('getDate'),
            stopPost: $('#neNewsStopPost').datepicker('getDate'),
            content: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
        });

        const changes = {
            categories: item.categories,
            title: item.title,
            link: item.link,
            active: item.active,
            content: item.content,
            startPost: item.startPost,
            stopPost: item.stopPost
        };

        const url = '/admin/news/list';
        T.put(url, { _id: item._id, changes }, data => {
            if (data.error) {
                T.notify('Tin tức cập nhật bị lỗi', 'danger');
                console.error('PUT: ' + url + '. ' + error);
            } else {
                T.notify('Tin tức được cập nhật!', 'info');
                $('#neNewsLink').val(item.link);
                this.setState({ item });
            }
        }, error => T.notify('Tin tức cập nhật bị lỗi', 'danger'));
    }

    render() {
        const item = this.state.item ? this.state.item : {
            priority: 1,
            categories: [],
            title: '',
            content: '',
            image: T.url('/image/avatar.jpg'),
            createdDate: new Date(),
            active: false,
            view: 0
        };
        const title = item.title != '' ? 'Tiêu đề: <b>' + item.title + '</b> - ' + T.dateToText(item.createdDate) : '',
            linkDefaultNews = 'http://bktphcm.net/news/id/' + item._id;
        let categories = this.state.categories ? this.state.categories.map(
            (item, index) => <option key={index} value={item._id}>{item.title}</option>) : null;

        return (
            <main className='app-content'>
                <div className='app-title'>
                    <div>
                        <h1><i className='fa fa-edit' /> Tin tức: Chỉnh sửa</h1>
                        <p dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                    <ul className='app-breadcrumb breadcrumb'>
                        <Link to='/admin'><i className='fa fa-home fa-lg' /></Link>
                        &nbsp;/&nbsp;
                        <Link to='/admin/list'>Danh sách tin tức</Link>
                        &nbsp;/&nbsp;
                        <a href='#'>Chỉnh sửa</a>
                    </ul>
                </div>
                <br />
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='tile'>
                            <h3 className='tile-title'>Thông tin chung</h3>
                            <div className='tile-body'>
                                <div className='form-group'>
                                    <label className='control-label'>Tên bài viết</label>
                                    <input className='form-control' type='text' placeholder='Tên bài viết' id='neNewsTitle' defaultValue={item.title} />
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Hình ảnh</label>
                                    <UploadBox postUrl='/admin/upload' uploadType='NewsItemImage' ref={this.uploadBox} />
                                </div>
                                <div className='form-group row'>
                                    <label className='control-label col-3 col-sm-3'>Kích hoạt</label>
                                    <div className='col-8 col-sm-8 toggle'>
                                        <label>
                                            <input type='checkbox' checked={item.active} onChange={this.changeActive} /><span className='button-indecator' />
                                        </label>
                                    </div>
                                </div>
                                <div className='form-group row'>
                                    <label className='control-label col-3 col-sm-3'>Lược xem</label>
                                    <div className='col-8 col-sm-8'>{item.view}</div>
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Danh mục bài viết</label>
                                    <select className='form-control' id='neNewsCategories' multiple={true} defaultValue={[]}>
                                        <optgroup label='Lựa chọn danh mục'>{categories}</optgroup>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='tile'>
                            <h3 className='tile-title'>Link</h3>
                            <div className='tile-body'>
                                <div className='form-group'>
                                    <label className='control-label'>Link mặc định</label><br />
                                    <a href={linkDefaultNews} style={{ fontWeight: 'bold' }} target='_blank'>{linkDefaultNews}</a>
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Link truyền thông</label><br />
                                    <a href='#' ref={this.newsLink} style={{ fontWeight: 'bold' }} target='_blank' />
                                    <input className='form-control' id='neNewsLink' type='text' placeholder='Link truyền thông' defaultValue={item.link} onChange={this.newsLinkChange} />
                                </div>
                            </div>
                            <div className='tile-footer'>
                                <button className='btn btn-danger' type='button' onClick={() => this.checkLink(item)}>
                                    <i className='fa fa-fw fa-lg fa-check-circle' />Kiểm tra link
                                </button>
                            </div>
                        </div>
                        <div className='tile'>
                            <h3 className='tile-title'>Ngày tháng</h3>
                            <div className='tile-body'>
                                <div className='form-group'>
                                    <label className='control-label'>Ngày tạo: {T.dateToText(item.createdDate)}</label>
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Ngày bắt đầu đăng bài viết</label>
                                    <input className='form-control' id='neNewsStartPost' type='text' placeholder='Ngày bắt đầu đăng bài viết' defaultValue={item.startPost} />
                                </div>
                                <div className='form-group'>
                                    <label className='control-label'>Ngày kết thúc đăng bài viết</label>
                                    <input className='form-control' id='neNewsStopPost' type='text' placeholder='Ngày kết thúc đăng bài viết' defaultValue={item.stopPost} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='tile'>
                            <h3 className='tile-title'>Nội dung bài viết</h3>
                            <div className='tile-body'>
                                <Editor
                                    editorState={this.state.editorState}
                                    editorStyle={{ border: 'solid 1px #eee', minHeight: '100px', padding: '0 3px' }}
                                    toolbar={{
                                        // inline: { inDropdown: true },
                                        // list: { inDropdown: true },
                                        // textAlign: { inDropdown: true },
                                        // link: { inDropdown: true },
                                        // colorPicker: { inDropdown: true },
                                        // history: { inDropdown: true },
                                        // image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                                    }}
                                    onEditorStateChange={editorState => this.setState({ editorState })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Link to='/admin/news/list' className='btn btn-secondary btn-circle' style={{ position: 'fixed', lefft: '10px', bottom: '10px' }}>
                    <i className='fa fa-lg fa-reply' />
                </Link>
                <button type='button' className='btn btn-primary btn-circle' style={{ position: 'fixed', right: '10px', bottom: '10px' }}
                    onClick={this.save}>
                    <i className='fa fa-lg fa-save' />
                </button>
            </main>
        );
    }
}