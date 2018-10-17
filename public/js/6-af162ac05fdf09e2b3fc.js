(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),n=s(a(6)),l=s(a(1)),o=a(18);function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.onCancel=a.onCancel.bind(a),a.onRegister=a.onRegister.bind(a),a.onGotoStep2=a.onGotoStep2.bind(a),a.updateSize=a.updateSize.bind(a),a.onSelectBooth=a.onSelectBooth.bind(a),a.removeEventItem=a.removeEventItem.bind(a),a.onSubmit=a.onSubmit.bind(a),a.bgImage=l.default.createRef(),a.selectBooth=l.default.createRef(),a.state={event:null,register:null,screen:0,booth:[],selectedBooth:[]};var r="/event/career-fair-2018";return $.get(n.default.url(r)).then(function(e){e.error?console.error("GET: "+r+". "+e.error):a.setState({event:e.event,register:e.register})}).catch(function(e){console.error("GET: "+r+". "+e)}),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this,t="/event/event-item/career-fair-2018";$.get(n.default.url(t)).then(function(a){a.error?console.error("GET: "+t+". "+a.error):e.setState({booth:a.items})}).catch(function(e){console.error("GET: "+t+". "+e)}),setTimeout(function(){var t=new Image;t.onload=function(){$(e.bgImage.current).attr("href",t.src),e.setState({width:t.width,height:t.height})},t.src="/img/event/career_fair_2018.png"},100),$(window).resize(this.updateSize)}},{key:"componentDidUpdate",value:function(){this.updateSize();var e=this.state.register;e&&($("#rgpEmail").val(e.email?e.email:""),$("#rgpPhoneNumber").val(e.phoneNumber?e.phoneNumber:""),$("#rgpContactName").val(e.contactName?e.contactName:""),$("#rgpName").val(e.name?e.name:""),$("#rgpDisplayName").val(e.displayName?e.displayName:""),$("#rgpAddress").val(e.address?e.address:""),$("#rgpTaxCode").val(e.taxCode?e.taxCode:""))}},{key:"onCancel",value:function(){var e=this;n.default.confirm("Đăng ký gian hàng","Bạn có chắc bạn muốn hủy thông tin đăng ký?",function(){return e.setState({screen:0})})}},{key:"updateSize",value:function(){if(this.state.width&&this.state.height){var e=$("svg"),t=e.width()*this.state.height/this.state.width;e.attr("height",t)}}},{key:"onRegister",value:function(e){var t=this;if(this.props.system)if(this.props.system.user){window.scrollTo(0,0),$("#rgpForm1 input").val(""),this.props.system&&this.props.system.user&&$("#rgpEmail").val(this.props.system.user.email);var a="/event/register/"+this.state.event._id;$.get(n.default.url(a)).then(function(e){e.error?console.error("GET: "+a+". "+e.error):t.setState({screen:1,register:e.register})}).catch(function(e){console.error("GET: "+a+". "+e)})}else n.default.addListener("onLogin","showRegister",function(){!function e(){t.props.system.user?t.onRegister(null):setTimeout(e,300)}(),n.default.removeListener("onLogin","showRegister")}),n.default.showLoginModal({state:"login",message:"Xin vui lòng đăng nhập trước!"});e&&e.preventDefault()}},{key:"onGotoStep2",value:function(e){var t=this;if(document.getElementById("rgpForm1").checkValidity()){var a={eventId:this.state.event._id,email:$("#rgpEmail").val(),phoneNumber:$("#rgpPhoneNumber").val(),contactName:$("#rgpContactName").val(),name:$("#rgpName").val(),displayName:$("#rgpDisplayName").val(),address:$("#rgpAddress").val(),taxCode:$("#rgpTaxCode").val()},r="/event/register";$.post(n.default.url(r),{data:a}).then(function(e){e.error?console.error("POST: "+r+". "+e.error):(r="/event/event-item/"+t.state.event._id,$.get(n.default.url(r)).then(function(e){if(e.error)console.error("GET: "+r+". "+e.error);else{for(var a=[],n=0;n<e.items.length;n++)a.push(e.items[n]._id);t.setState({screen:2,selectedBooth:a})}}).catch(function(e){console.error("GET: "+r+". "+e)}))}).catch(function(e){console.error("POST: "+r+". "+e)})}else e.stopPropagation();document.getElementById("rgpForm1").classList.add("was-validated"),e.preventDefault()}},{key:"onSelectBooth",value:function(e){var t=this.state.selectedBooth.splice(0),a=$(e.target).attr("data-id"),r=t.indexOf(a);-1===r?t.push(a):t.splice(r,1),this.setState({selectedBooth:t}),e.preventDefault()}},{key:"removeEventItem",value:function(e){var t=$(e.target).attr("data-id"),a=this.state.selectedBooth.splice(0),r=a.indexOf(t);-1!==r&&a.splice(r,1),this.setState({selectedBooth:a}),e.preventDefault()}},{key:"onSubmit",value:function(e){var t=this;if(0===this.state.selectedBooth.length)n.default.alert("Đăng ký","Bạn vẫn chưa chọn gian hàng nào cả!");else{var a={eventId:this.state.event._id,ids:this.state.selectedBooth},r="/event/event-item";$.post(n.default.url(r),{data:a}).then(function(e){e.error?console.error("POST: "+r+". "+e.error):(n.default.alert("Ngày hội việc làm","Bạn đã đăng ký thành công gian hàng!"),t.setState({screen:0}))}).catch(function(e){console.error("POST: "+r+". "+e)})}e.preventDefault()}},{key:"render",value:function(){var e=this.state,t=e.screen,a=e.booth;this.props.system&&null==this.props.system.user&&0!==t&&this.setState({screen:0});for(var r={position:"fixed",zIndex:1e3,bottom:"0",left:"0",width:"100%",maxHeight:"auto",backgroundColor:"#333",color:"white",display:2===t?"block":"none"},n=[],o=[],s=0;s<a.length;s++){var i=a[s],c=this.props.system&&this.props.system.user&&i.userId===this.props.system.user._id;if(void 0==i.userId||null==i.userId||c){c&&console.log(i.name,i.userId,this.props.system.user._id);var m="btn btn-sm";-1===this.state.selectedBooth.indexOf(i._id)?m+=" btn-outline-primary":(m+=" btn-danger",o.push(l.default.createElement("div",{key:s,className:"btn-group",style:{margin:"0 3px"}},l.default.createElement("button",{type:"button",className:"btn btn-sm btn-primary","data-id":i._id},i.name),l.default.createElement("button",{type:"button",className:"btn btn-sm btn-danger","data-id":i._id,onClick:this.removeEventItem},"X")))),n.push(l.default.createElement("button",{key:s,type:"button",className:m,"data-id":i._id,onClick:this.onSelectBooth},i.name))}}return l.default.createElement("div",{className:"container"},l.default.createElement("svg",{width:"100%",height:this.state.height,style:{display:1!==t?"block":"none",marginBottom:2===t?"135px":"0"}},l.default.createElement("image",{ref:this.bgImage,width:"100%"})),l.default.createElement("div",{style:{width:"100%",textAlign:"center"}},l.default.createElement("a",{href:"#register",onClick:this.onRegister,style:{display:0===t?"block":"none"}},l.default.createElement("img",{src:"/img/register.png",alt:"Register",className:"col-md-3 col-sm-6 col-xs-7 col-8",style:{height:"auto"}}))),l.default.createElement("form",{className:"needs-validation",id:"rgpForm1",onSubmit:this.onGotoStep2,noValidate:"true",style:{display:1===t?"block":"none"}},l.default.createElement("div",{className:"modal-body"},l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpEmail",className:"col-sm-3 col-form-label"},"Email"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"email",className:"form-control",required:!0,autoFocus:!0,placeholder:"Email",id:"rgpEmail"}))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpPhoneNumber",className:"col-sm-3 col-form-label"},"Điện thoại di động"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"number",className:"form-control",required:"true",placeholder:"Điện thoại di động",id:"rgpPhoneNumber"}),l.default.createElement("small",{className:"form-text text-muted"},"Điện thoại di động người liên hệ trực tiếp"))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpContactName",className:"col-sm-3 col-form-label"},"Họ và tên"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Họ và tên",id:"rgpContactName"}),l.default.createElement("small",{className:"form-text text-muted"},"Họ và tên người liên hệ trực tiếp"))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpName",className:"col-sm-3 col-form-label"},"Tên đơn vị"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Tên đơn vị",id:"rgpName"}),l.default.createElement("small",{className:"form-text text-muted"},"Để xuất hóa đơn hoặc biên nhận"))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpDisplayName",className:"col-sm-3 col-form-label"},"Tên hiển thị"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Tên hiển thị",id:"rgpDisplayName"}),l.default.createElement("small",{className:"form-text text-muted"},"Tên đơn vị thể hiện trên gian hàng"))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpAddress",className:"col-sm-3 col-form-label"},"Địa chỉ"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Địa chỉ",id:"rgpAddress"}),l.default.createElement("small",{className:"form-text text-muted"},"Để ghi trên hóa đơn hoặc biên nhận"))),l.default.createElement("div",{className:"form-group row"},l.default.createElement("label",{htmlFor:"rgpTaxCode",className:"col-sm-3 col-form-label"},"Mã số thuế"),l.default.createElement("div",{className:"col-sm-9"},l.default.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Mã số thuế",id:"rgpTaxCode"}))),l.default.createElement("p",{id:"rgpErrorMessage",className:"text-danger"})),l.default.createElement("div",{className:"modal-footer"},l.default.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.onCancel},"Hủy"),l.default.createElement("button",{type:"submit",className:"btn btn-primary"},"Chọn gian hàng"))),l.default.createElement("div",{style:r,ref:this.selectBooth},l.default.createElement("div",{style:{padding:"6px 12px",margin:"6px 6px 0 6px",borderRadius:"6px",border:"solid 1px",maxHeight:"80px",overflow:"auto"}},l.default.createElement("div",{style:{overflowY:"scroll"}},n)),l.default.createElement("div",{style:{whiteSpace:"nowrap",padding:"6px",marginBottom:"6px"}},l.default.createElement("div",{style:{display:"inline-block"}},"Chọn gian hàng: ",o),l.default.createElement("button",{type:"button",className:"btn btn-sm btn-primary float-right",onClick:this.onSubmit},"Submit"),l.default.createElement("button",{type:"button",className:"btn btn-sm btn-secondary float-right",onClick:this.onCancel,style:{margin:"0 6px"}},"Hủy"))))}}]),t}();t.default=(0,o.connect)(function(e){return{system:e.system}},{})(i)}}]);