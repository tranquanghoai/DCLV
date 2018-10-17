(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{113:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=(u(r(7)),u(r(1))),n=r(27),s=r(143),l=u(r(144));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"container"},o.default.createElement(l.default,null),"Introduction: to be completed")}}]),t}(),i={loginUser:s.loginUser};t.default=(0,n.connect)(function(e){return{user:e.user}},i)(c)},143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case a:return Object.assign({},e,{loginUser:t.loginUser});case o:return Object.assign({},e,{page:t});case n:var r=Object.assign({},e);if(r.page)for(var s=0,l=r.page.list.length;s<l;s++)if(t.user._id===r.page.list[s]._id){r.page.list[s]=t.user;break}return r;default:return e}},t.updateLoginUser=s,t.updateUserPage=l,t.updateUserInPage=u,t.getLoginUser=function(e){return function(t){var r="/login-user";T.get(T.url(r)).then(function(r){t(s(r.data.user)),e&&e()}).catch(function(t){T.m.toast({html:"Get current user has some errors!"}),console.error("GET: "+r+".",t),e&&e()})}},t.loginUser=function(e,t,r){return function(a){T.post(T.url("/login"),{email:e,password:t}).then(function(e){e.data.user&&a(s(e.data.user)),r&&r(e.data.error)}).catch(function(e){T.m.toast({html:"Login has some errors!"}),console.error("POST: /login.",e),r&&r(null)})}},t.logoutUser=function(e){return function(t){T.get(T.url("/logout")).then(function(r){t(s(null)),e&&e()}).catch(function(t){T.m.toast({html:"Logout has some errors!"}),console.error("GET: /logout.",t),e&&e()})}},t.deleteUser=function(e,t,r,a){return function(o){var n="/admin/user";T.delete(T.url(n),{data:{_id:e}}).then(function(e){e&&e.data?e.data.error?(T.m.toast({html:"Delete user has some errors!"}),console.error("DELETE: "+n+". "+e.data.error)):(T.m.toast({html:"The user has been deleted!"}),o(c(t,r))):(T.m.toast({html:"Delete user has some errors!"}),console.error("DELETE: "+n+".")),a&&a()}).catch(function(e){T.m.toast({html:"Delete user has some errors!"}),console.error("DELETE: "+n+".",e),a&&a()})}},t.changePasswordUser=function(e,t,r){return function(a){var o="/admin/user";T.put(T.url(o),{user:{_id:e,password:t}}).then(function(e){e&&e.data?e.data.error?(T.m.toast({html:"Change user password has some errors!"}),console.error("PUT: "+o+". "+e.data.error)):T.m.toast({html:"The user password has been updated!"}):(T.m.toast({html:"Change user password has some errors!"}),console.error("PUT: "+o+".")),r&&r()}).catch(function(e){T.m.toast({html:"Change user password has some errors!"}),console.error("PUT: "+o+".",e),r&&r()})}},t.saveUser=function(e,t,r,a){return function(o){var n="/admin/user",s=e._id?"put":"post";T[s](T.url(n),{user:e}).then(function(l){l&&l.data?l.data.error?(T.m.toast({html:"Save user has some errors! "+l.data.error.message}),console.error(s.toUpperCase()+": "+n+".",l.data.error)):(T.m.toast({html:"Save!"}),o(e._id?u(l.data.user):c(t,r))):(T.m.toast({html:"Save user has some errors!"}),console.error(s.toUpperCase()+": "+n+".")),a&&a()}).catch(function(e){T.m.toast({html:"Save user has some errors!"}),console.error(s.toUpperCase()+": "+n+".",e),a&&a()})}},t.getUserPage=c,t.updateUserImage=function(e,t,r){return function(a){var o="/admin/image-upload/user/"+e._id;T.post(T.url(o),t).then(function(e){e&&e.data?e.data.error?(T.m.toast({html:"Post image has some errors!"}),console.error("Post: "+o+". "+e.data.error)):(a(u(e.data.item)),r&&r(e.data.item.image)):(T.m.toast({html:"Post image has some errors!"}),console.error("GET: "+o+"."))}).catch(function(e){T.m.toast({html:"Post image has some errors!"}),console.error("Post: "+o+".",e),r&&r()})}};var a=t.UPDATE_LOGIN_USER="user:updateLoginUser",o=t.UPDATE_USER_PAGE="user:updateUserPage",n=t.UPDATE_USER_IN_PAGE="user:updateUserInPage";function s(e){return console.log(null!=e?"Login "+e.email+" as "+e.role+".":"Logout!"),{type:a,loginUser:e}}function l(e,t,r,a,n){return T.setPageInfo("User",t,r),{type:o,list:e,pageNumber:t,pageSize:r,pageTotal:a,totalItem:n}}function u(e){return{type:n,user:e}}function c(e,t,r){return function(a){var o="/admin/user/page/"+e+"/"+t;T.get(T.url(o)).then(function(n){if(n&&n.data)if(n.data.error||null==n.data.page)T.m.toast({html:"Get users has some errors!"}),console.error("GET: "+o+". "+n.data.error),a(l([],e,t,0,0));else{var s=n.data.page,u=s.list,c=s.pageNumber,i=s.pageSize,d=s.totalItem;a(l(u,c,i,Math.ceil(d/i),d))}else T.m.toast({html:"Get users has some errors!"}),console.error("GET: "+o+".");r&&r()}).catch(function(e){T.m.toast({html:"Get users has some errors!"}),console.error("GET: "+o+".",e),r&&r()})}}},144:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var n=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"render",value:function(){return o.default.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},o.default.createElement("ol",{className:"carousel-indicators"},o.default.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),o.default.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),o.default.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}),o.default.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}),o.default.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"4"})),o.default.createElement("div",{className:"carousel-inner"},o.default.createElement("div",{className:"carousel-item active"},o.default.createElement("img",{className:"d-block w-100",src:"/img/h1.png",alt:""})),o.default.createElement("div",{className:"carousel-item"},o.default.createElement("img",{className:"d-block w-100",src:"/img/h2.png",alt:""})),o.default.createElement("div",{className:"carousel-item"},o.default.createElement("img",{className:"d-block w-100",src:"/img/h3.png",alt:""})),o.default.createElement("div",{className:"carousel-item"},o.default.createElement("img",{className:"d-block w-100",src:"/img/h4.png",alt:""})),o.default.createElement("div",{className:"carousel-item"},o.default.createElement("img",{className:"d-block w-100",src:"/img/h5.png",alt:""}))),o.default.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},o.default.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),o.default.createElement("span",{className:"sr-only"},"Previous")),o.default.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},o.default.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),o.default.createElement("span",{className:"sr-only"},"Next")))}}]),t}();t.default=n}}]);