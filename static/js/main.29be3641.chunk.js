(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},4:function(e,t,a){e.exports=a.p+"static/media/logo.7baba3c1.svg"},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(16),a(1)),i=a(4),s=a.n(i);var u=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u043c\u0435\u0441\u0442\u043e"}))};var p=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__autor"},"\xa9 2020 Mesto Russia"))},m=a(5),_=a(6),d=new(function(){function e(t){Object(m.a)(this,e),this._options=t,this._url=t.baseUrl,this._headers=t.headers}return Object(_.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._handleOriginalResponse)}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(function(e){return t._handleOriginalResponse(e)})}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(function(e){return t._handleOriginalResponse(e)})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"f7e16f72-6fdb-4cb4-9e4c-1f17e80e3d75","Content-Type":"application/json"}});var h=function(e){return r.a.createElement("article",{className:"element"},r.a.createElement("img",{className:"element__img",alt:e.name,src:e.link,onClick:function(){e.onCardClick(e)}}),r.a.createElement("button",{className:"element__button-delete",type:"button"}),r.a.createElement("div",{className:"element__info"},r.a.createElement("h3",{className:"element__title"},e.name),r.a.createElement("div",{className:"element__like-container"},r.a.createElement("button",{className:"element__button-like",type:"button"}),r.a.createElement("span",{className:"element__like-count"},e.likes.length))))};var f=function(e){var t=e.onEditProfile,a=e.onEditAvatar,o=e.onAddPlace,c=e.onCardClick,i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],p=s[1],m=Object(n.useState)(""),_=Object(l.a)(m,2),f=_[0],b=_[1],E=Object(n.useState)(""),v=Object(l.a)(E,2),k=v[0],N=v[1],g=Object(n.useState)([]),y=Object(l.a)(g,2),O=y[0],C=y[1];return Object(n.useEffect)(function(){d.getUserInfo().then(function(e){p(e.name),b(e.about),N(e.avatar)}).catch(function(e){return console.log(e)}),d.getCards().then(function(e){C(e.map(function(e){return{cardId:e._id,name:e.name,link:e.link,likes:e.likes}}))}).catch(function(e){return console.log(e)})},[]),r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__card"},r.a.createElement("img",{className:"profile__avatar",src:k,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),r.a.createElement("button",{className:"profile__avatar-button","aria-label":"\u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:a})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("h1",{className:"profile__title"},u),r.a.createElement("button",{className:"profile__button-edit button",type:"button",onClick:t}),r.a.createElement("h2",{className:"profile__subtitle"},f)),r.a.createElement("button",{className:"profile__button-add button",type:"button",onClick:o})),r.a.createElement("section",{className:"elements","aria-label":"\u0424\u043e\u0442\u043e\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"},O.map(function(e){return r.a.createElement(h,{key:e.cardId,name:e.name,link:e.link,likes:e.likes,onCardClick:c})})))};var b=function(e){var t=e.name,a=e.buttonText,n=e.title,o=e.children,c=e.isOpen,l=e.onClose;return r.a.createElement("div",{className:"popup popup-".concat(t," ").concat(c?"popup_opened":"")},r.a.createElement("div",{className:"popup__container popup__container-".concat(t)},r.a.createElement("button",{className:"popup__button-close button popup__button-close-".concat(t),type:"button",onClick:l}),r.a.createElement("form",{className:"popup__form popup__form-".concat(t),name:"".concat(t,"-from")},r.a.createElement("h4",{className:"popup__profile popup__profile-".concat(t)},n),o,r.a.createElement("button",{className:"popup__button-save",type:"submit"},a))))};var E=function(e){var t=e.card,a=e.onClose;return r.a.createElement("div",{className:"popup popup_photo-card ".concat(t.link?"popup_opened":"")},r.a.createElement("div",{className:"popup__container-card"},r.a.createElement("button",{className:"popup__button-close button popup__button-close-photo",type:"button",onClick:a}),r.a.createElement("img",{className:"popup__img-card",src:t.link,alt:t.name}),r.a.createElement("h4",{className:"popup__title-card"},t.name)))};var v=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],m=r.a.useState(!1),_=Object(l.a)(m,2),d=_[0],h=_[1],v=r.a.useState({}),k=Object(l.a)(v,2),N=k[0],g=k[1];function y(){n(!1),s(!1),h(!1),g({})}return r.a.createElement("div",{className:"page"},r.a.createElement(u,null),r.a.createElement(f,{onEditProfile:n,onEditAvatar:s,onAddPlace:h,onCardClick:g}),r.a.createElement(p,null),r.a.createElement(b,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:y},r.a.createElement("input",{className:"popup__input popup__input_type_name",id:"name-input",type:"text",defaultValue:"",name:"name",placeholder:"\u0418\u043c\u044f",minLength:2,maxLength:40,required:""}),r.a.createElement("span",{className:"popup__input-error name-input-error"}),r.a.createElement("input",{className:"popup__input popup__input_type_job",id:"job-input",type:"text",defaultValue:"",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:2,maxLength:200,required:""}),r.a.createElement("span",{className:"popup__input-error job-input-error"})),r.a.createElement(b,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:d,onClose:y},r.a.createElement("input",{className:"popup__input popup__input_type_place",id:"place-input",type:"text",defaultValue:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:2,maxLength:30,required:""}),r.a.createElement("span",{className:"popup__input-error place-input-error"}),r.a.createElement("input",{className:"popup__input popup__input_type_link",id:"link-input",type:"url",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:""}),r.a.createElement("span",{className:"popup__input-error link-input-error"})),r.a.createElement(E,{card:N,onClose:y}),r.a.createElement(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:i,onClose:y},r.a.createElement("input",{className:"popup__input popup__input_type_avatar",id:"avatar-input",type:"url",defaultValue:"",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",minLength:2,maxLength:200,required:""}),r.a.createElement("span",{className:"popup__input-error avatar-input-error"})),r.a.createElement(b,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}))},k=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,62)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),k()},7:function(e,t,a){e.exports=a(61)}},[[7,3,2]]]);
//# sourceMappingURL=main.29be3641.chunk.js.map