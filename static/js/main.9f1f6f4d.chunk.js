(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(6),c=n.n(s),o=n(1),l=n(2),u=n(4),i=n(3),d=(n(12),n(13),n(14),function(e){var t=e.todos,n=e.getCurrentUserId,a=e.selectedUserId;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{className:e.completed?"TodoList__item TodoList__item--checked":"TodoList__item TodoList__item--unchecked"},r.a.createElement("label",null,e.completed?r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!0}):r.a.createElement("input",{type:"checkbox",readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:a===e.userId?"TodoList__user-button TodoList__user-button--selected button":"TodoList__user-button button",type:"button",onClick:function(){return n(e.userId)}},"UserId #",e.userId))})))))});n(15);function m(e){return fetch("https://mate-api.herokuapp.com/"+e).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))}var p=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;m("users/".concat(this.props.userId)).then((function(t){return e.setState({user:t.data})}))}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.userId!==e.userId&&m("users/".concat(this.props.userId)).then((function(e){return t.setState({user:e.data})}))}},{key:"render",value:function(){var e=this.state.user,t=e.name,n=e.email,a=e.phone,s=e.id;return r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",s)),r.a.createElement("h3",{className:"CurrentUser__name"},t),r.a.createElement("p",{className:"CurrentUser__email"},n),r.a.createElement("p",{className:"CurrentUser__phone"},a),r.a.createElement("button",{className:"fluid negative ui button",onClick:this.props.clearUser,type:"button"},"Clear"))}}]),n}(r.a.PureComponent),h=function(e){var t=e.onChangeHandler,n=e.onSelectHandler;return r.a.createElement("div",{className:"ui form"},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Title",r.a.createElement("input",{placeholder:"Enter task title",type:"text",onChange:function(e){return t(e)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Select status",r.a.createElement("select",{onChange:function(e){return n(e)}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"active"},"Active"),r.a.createElement("option",{value:"completed"},"Completed"))))))},f=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:null},e.getCurrentUserId=function(t){e.setState({selectedUserId:t})},e.onSelectHandler=function(t){var n=t.target.value;"completed"===n&&m("todos").then((function(t){return e.setState({todos:t.data.filter((function(e){return!0===e.completed}))})})),"active"===n&&m("todos").then((function(t){return e.setState({todos:t.data.filter((function(e){return!1===e.completed}))})})),"all"===n&&m("todos").then((function(t){return e.setState({todos:t.data})}))},e.clearUser=function(){e.setState({selectedUserId:null})},e.onChangeHandler=function(e){e.target.value},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;m("todos").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(h,{onChangeHandler:this.onChangeHandler,onSelectHandler:this.onSelectHandler}),r.a.createElement(d,{todos:t,getCurrentUserId:this.getCurrentUserId,selectedUserId:this.state.selectedUserId})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(p,{userId:this.state.selectedUserId,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9f1f6f4d.chunk.js.map