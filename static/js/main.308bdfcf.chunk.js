(this.webpackJsonpgrapheme_test_task=this.webpackJsonpgrapheme_test_task||[]).push([[0],{103:function(e,t,a){e.exports=a(212)},108:function(e,t,a){},109:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(108),a(109),a(24)),i=a(100),s=a(22),_=a(9),p=a(215),u={countries:[{value:"RUS",label:"\u0420\u043e\u0441\u0441\u0438\u044f"},{value:"ESH",label:"\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0421\u0430\u0445\u0430\u0440\u0430"},{value:"BLM",label:"\u0421\u0435\u043d-\u0411\u0430\u0440\u0442\u0435\u043b\u044c\u043c\u0438"},{value:"SVN",label:"\u0421\u043b\u043e\u0432\u0435\u043d\u0438\u044f"},{value:"USA",label:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b"},{value:"SLE",label:"\u0421\u044c\u0435\u0440\u0440\u0430-\u041b\u0435\u043e\u043d\u0435"},{value:"PHL",label:"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u044b"},{value:"CHL",label:"\u0427\u0438\u043b\u0438"},{value:"JPN",label:"\u042f\u043f\u043e\u043d\u0438\u044f"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return t.type,e},d=Object(_.b)({checkout:m,form:p.a}),h=Object(_.c)(d);window.__store__=h;var b=h,v=a(49),E=a(214),f=a(213),g=a(97),S=a.n(g),y=function(e){var t=e.input,a=e.label,n=e.type,c=e.meta,l=c.touched,o=c.error,i=(c.warning,e.initialValue,e.disabled),s=e.className,_=l&&o;return console.log("error ".concat(a," ").concat(n," - ").concat(_)),r.a.createElement("div",{className:s},r.a.createElement("input",Object.assign({},t,{className:_?S.a.input_error:"",placeholder:a,type:n,value:t.value,disabled:i})))},N=a(1),C=a(101);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.input,a=e.label,n=e.meta,c=n.touched,l=n.error,o=(n.warning,e.options),i=e.className,s=c&&l;console.log("error ".concat(a," - ").concat(s));var _={indicatorSeparator:function(){return{display:"none"}},container:function(e,t){return x({},e,{height:40})},menu:function(e,t){return x({},e,{height:120})},menuList:function(e,t){return x({},e,{height:120})},control:function(e,t){return x({},e,{height:40,minHeight:40,borderColor:"#DEDCDC",borderRadius:5})},placeholder:function(e,t){return x({},e,{fontFamily:"Helvetica Neue, sans-serif",fontStyle:"normal",fontWeight:300,fontSize:16,lineHeight:18,color:"#6B6B6B",marginLeft:7})},singleValue:function(e,t){return x({},e,{fontFamily:"Helvetica Neue, sans-serif",fontStyle:"normal",fontWeight:300,fontSize:16,lineHeight:18,color:"black",marginLeft:7})}},p=s?x({},_,{control:function(e,t){return x({},e,{borderColor:"#FFADAD"})}}):_;return r.a.createElement("div",{className:i},r.a.createElement(C.a,Object.assign({},t,{styles:p,placeholder:a,onChange:function(e){return t.onChange(e)},onBlur:function(){return t.onBlur(t.value)},options:o})))},w=a(8),I=a.n(w),k=Object(f.a)({form:"step1",validate:function(e){var t={};return e.fullName||(t.fullName="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.town||(t.town="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.address||(t.address="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.country||(t.country="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.index||(t.index="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),t}})((function(e){var t=e.handleSubmit,a=e.countriesList;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"".concat(I.a.heading," ").concat(I.a.step1__heading)},r.a.createElement("span",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438")),r.a.createElement("div",{className:"".concat(I.a.label," ").concat(I.a.step1__recipient_label)},r.a.createElement("span",null,"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c")),r.a.createElement(E.a,{className:"".concat(I.a.input," ").concat(I.a.customInput," ").concat(I.a.step1__FIO_input),name:"fullName",type:"text",component:y,label:"\u0424\u0418\u041e"}),r.a.createElement("div",{className:"".concat(I.a.label," ").concat(I.a.step1__address_label)},r.a.createElement("span",null,"\u0410\u0434\u0440\u0435\u0441")),r.a.createElement(E.a,{className:"".concat(I.a.input," ").concat(I.a.customInput," ").concat(I.a.step1__city_input),name:"town",type:"text",component:y,label:"\u0413\u043e\u0440\u043e\u0434"}),r.a.createElement(E.a,{className:"".concat(I.a.input," ").concat(I.a.customInput," ").concat(I.a.step1__address_input),name:"address",type:"text",component:y,label:"\u0410\u0434\u0440\u0435\u0441"}),r.a.createElement("div",{className:I.a.step1__countryAndZipBox},r.a.createElement(E.a,{className:I.a.step1__country,name:"country",type:"text",component:j,label:"\u0421\u0442\u0440\u0430\u043d\u0430",options:a}),r.a.createElement(E.a,{className:"".concat(I.a.input," ").concat(I.a.customInput," ").concat(I.a.step1__zip),name:"index",type:"text",component:y,label:"\u0418\u043d\u0434\u0435\u043a\u0441"})),r.a.createElement("div",{className:I.a.step1__button},r.a.createElement("button",{className:I.a.button},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c")))})),A=Object(s.b)((function(e){return{countriesList:e.checkout.countries}}),{})(k),B=function(e,t){if(!e)return e;var a=e.replace(/[^\d]/g,"");return a.length<4?a:4===a.length?a+" ":a.length<8?a.slice(0,4)+" "+a.slice(4):8===a.length?a.slice(0,4)+" "+a.slice(4,8):a.length<12?a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8):12===a.length?a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8,12):a.length<16?a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8,12)+" "+a.slice(12):16===a.length?a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8,12)+" "+a.slice(12,16):a.length<20?a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8,12)+" "+a.slice(12,16)+" "+a.slice(16):a.slice(0,4)+" "+a.slice(4,8)+" "+a.slice(8,12)+" "+a.slice(12,16)+" "+a.slice(16,20)},F=function(e,t){if(!e)return e;var a=e.replace(/[^\d]/g,"");return 1===a.length?Number.parseInt(a)>1?1:a:2===a.length?0===Number.parseInt(a[1])?a.slice(0,1)+"1 / ":Number.parseInt(a)<=12?a+" / ":"12 / ":3===a.length?a.slice(0,2)+" / "+a.slice(2):a.slice(0,2)+" / "+a.slice(2,4)},H=function(e,t){if(!e)return e;var a=e.replace(/[^\d]/g,"");return a.length<3?a:a.slice(0,3)},T=a(7),z=a.n(T),P=Object(f.a)({form:"step2",validate:function(e){var t={};return e.nameOnTheCard||(t.nameOnTheCard="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.cardNumber||(t.cardNumber="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.date||(t.date="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),e.CVV||(t.CVV="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),t}})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"".concat(z.a.heading," ").concat(z.a.step2__heading)},r.a.createElement("span",null,"\u041e\u043f\u043b\u0430\u0442\u0430")),r.a.createElement("div",{className:"".concat(z.a.label," ").concat(z.a.step2__nameOnTheCard_label)},r.a.createElement("span",null,"\u0418\u043c\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435")),r.a.createElement(E.a,{className:"".concat(z.a.input," ").concat(z.a.customInput," ").concat(z.a.step2__nameOnTheCard_input),name:"nameOnTheCard",type:"text",component:y,label:"\u0418\u043c\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",normalize:function(e){return e&&e.toUpperCase()}}),r.a.createElement("div",{className:"".concat(z.a.label," ").concat(z.a.step2__nameOnTheCard_label)},r.a.createElement("span",null,"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b")),r.a.createElement(E.a,{className:"".concat(z.a.input," ").concat(z.a.customInput," ").concat(z.a.step2__cardNumber_input),name:"cardNumber",type:"text",component:y,normalize:B,label:"\u0425\u0425\u0425\u0425 \u0425\u0425\u0425\u0425 \u0425\u0425\u0425\u0425 \u0425\u0425\u0425\u0425 \u0425\u0425\u0425\u0425"}),r.a.createElement("div",{className:z.a.step2__dateAndCvvBox},r.a.createElement("div",{className:z.a.step2__date},r.a.createElement("div",{className:"".concat(z.a.label)},r.a.createElement("span",null,"\u0421\u0440\u043e\u043a")),r.a.createElement(E.a,{className:"".concat(z.a.input," ").concat(z.a.customInput," ").concat(z.a.step2__dateAndCvv_input),name:"date",type:"text",component:y,normalize:F,label:"MM / YY"})),r.a.createElement("div",{className:z.a.step2__cvv},r.a.createElement("div",{className:"".concat(z.a.label)},r.a.createElement("span",null,"CVV")),r.a.createElement(E.a,{className:"".concat(z.a.input," ").concat(z.a.customInput," ").concat(z.a.step2__dateAndCvv_input),name:"CVV",type:"password",component:y,normalize:H,label:""}))),r.a.createElement("div",{className:z.a.step2__button},r.a.createElement("button",{className:z.a.button},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c")))})),D=a(98),L=a.n(D),V=function(){return r.a.createElement("div",{className:L.a.thanks},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"thankYou.svg",alt:"Thank you"})))},R=a(71),M=a.n(R),U=a(28),G=a.n(U),J=a(102),Y=function(e){for(var t=e.stepsArr,a=e.stepperState,n=[],c=0;c<t.length;c++)n.push(t[c]),c<t.length-1&&n.push("FiChevronRight");return r.a.createElement("div",{className:a?G.a.stepperHide:G.a.stepper},n.map((function(e,t){return"FiChevronRight"!==e?r.a.createElement("span",{key:t,className:e.isActive?"".concat(G.a.stepper__step," ").concat(G.a.stepper__step_active):"".concat(G.a.stepper__step)},e.name):r.a.createElement(J.a,{key:t,className:G.a.stepper__chevronRight})})))},q=function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(v.a)(l,2),i=o[0],s=o[1],_=Object(n.useState)([{name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",isActive:!0},{name:"\u041e\u043f\u043b\u0430\u0442\u0430",isActive:!1}]),p=Object(v.a)(_,2),u=p[0],m=p[1],d=function(){c(2),m([{name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",isActive:!1},{name:"\u041e\u043f\u043b\u0430\u0442\u0430",isActive:!0}])},h=function(){c(3),s(!0)},b=function(e){switch(!0){case 1===e:return r.a.createElement("div",null,r.a.createElement(A,{onSubmit:d}));case 2===e:return r.a.createElement("div",null,r.a.createElement(P,{onSubmit:h}));case 3===e:return r.a.createElement("div",null,r.a.createElement(V,null));default:return r.a.createElement(r.a.Fragment,null)}}(a);return r.a.createElement("div",{className:M.a.formContainer},r.a.createElement("div",{className:M.a.formContainer__body},r.a.createElement(Y,{stepsArr:u,stepperState:i}),b))},W=a(25),Z=a.n(W),K=function(){return r.a.createElement("header",{className:Z.a.header},r.a.createElement("div",{className:"".concat(Z.a.header__inscription," ").concat(Z.a.header__inscription_margin)},r.a.createElement("span",{className:Z.a.header__inscriptionText},"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),r.a.createElement("div",{className:"".concat(Z.a.header__logoBox," ").concat(Z.a.header__logoBox_margin)},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:"logo ".concat(Z.a.header__logo),src:"GraphemeLogo.svg",alt:"logo grapheme"}))))},X=function(e){return e&&e.toUpperCase()},Q=function(e){return e&&e.toLowerCase()},$=function(e){return function(t,a,n){return parseFloat(t)>parseFloat(n[e])?t:a}},ee=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"".concat(t.slice(0,3),"-").concat(t.slice(3)):"".concat(t.slice(0,3),"-").concat(t.slice(3,6),"-").concat(t.slice(6,10))},te=Object(f.a)({form:"normalizing",initialValues:{min:"1",max:"10"}})((function(e){var t,a=e.handleSubmit,n=e.pristine,c=e.reset,l=e.submitting;return r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("div",null,r.a.createElement(E.a,{name:"username",component:"input",type:"text",placeholder:"Username",normalize:Q}))),r.a.createElement("div",null,r.a.createElement("label",null,"Shout"),r.a.createElement("div",null,r.a.createElement(E.a,{name:"shout",component:"input",type:"text",placeholder:"Shout something!",normalize:X}))),r.a.createElement("div",null,r.a.createElement("label",null,"Phone"),r.a.createElement("div",null,r.a.createElement(E.a,{name:"phone",component:"input",type:"text",placeholder:"Phone Number",normalize:ee}))),r.a.createElement("div",null,r.a.createElement("label",null,"Min"),r.a.createElement("div",null,r.a.createElement(E.a,{name:"min",component:"input",type:"number",normalize:(t="max",function(e,a,n){return parseFloat(e)<parseFloat(n[t])?e:a})}))),r.a.createElement("div",null,r.a.createElement("label",null,"Max"),r.a.createElement("div",null,r.a.createElement(E.a,{name:"max",component:"input",type:"number",normalize:$("min")}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:l},"Submit"),r.a.createElement("button",{type:"button",disabled:n||l,onClick:c},"Clear Values")))}));function ae(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null),r.a.createElement("main",{className:"Container"},r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(o.a,{exact:!0,path:"/test",render:function(){return r.a.createElement(te,null)}})))}var ne=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{store:b},r.a.createElement(ae,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,a){e.exports={header:"Header_header__1dFUM",header__inscription_margin:"Header_header__inscription_margin__1ZxlO",header__inscriptionText:"Header_header__inscriptionText__2vk8W",header__logoBox_margin:"Header_header__logoBox_margin__2CGFw",header__logo:"Header_header__logo__1-M52"}},28:function(e,t,a){e.exports={stepper:"Stepper_stepper__RoOSu",stepperHide:"Stepper_stepperHide__1ujgK",stepper__step:"Stepper_stepper__step__qtcD0",stepper__chevronRight:"Stepper_stepper__chevronRight__3J_mp",stepper__step_active:"Stepper_stepper__step_active__3P03u"}},7:function(e,t,a){e.exports={heading:"Step2_heading__1B_jC",label:"Step2_label__17XYE",input:"Step2_input__srCFe",input_error:"Step2_input_error__14TFd",button:"Step2_button__XwIzY",customInput:"Step2_customInput__3erof",step2__heading:"Step2_step2__heading__15Qvc",step2__nameOnTheCard_label:"Step2_step2__nameOnTheCard_label__3rrhX",step2__nameOnTheCard_input:"Step2_step2__nameOnTheCard_input__uhLaD",step2__cardNumber_input:"Step2_step2__cardNumber_input__2sFeo",step2__dateAndCvvBox:"Step2_step2__dateAndCvvBox__A55e5",step2__cvv:"Step2_step2__cvv__1SjuM",step2__date:"Step2_step2__date__3eEE5",step2__dateAndCvv_input:"Step2_step2__dateAndCvv_input__2_u4o",step2__button:"Step2_step2__button__mcBGT"}},71:function(e,t,a){e.exports={formContainer:"Checkout_formContainer__RvR-l",formContainer__body:"Checkout_formContainer__body__Mg9Kc"}},8:function(e,t,a){e.exports={heading:"Step1_heading__2_dPS",label:"Step1_label__qOv1R",input:"Step1_input__1wVsv",input_error:"Step1_input_error__p2DKM",button:"Step1_button__3Ltlb",customInput:"Step1_customInput__T9cJa",step1__heading:"Step1_step1__heading__2OkCj",step1__recipient_label:"Step1_step1__recipient_label__22dr-",step1__FIO_input:"Step1_step1__FIO_input__IElBI",step1__address_label:"Step1_step1__address_label__34dHs",step1__city_input:"Step1_step1__city_input__f5Gjj",step1__address_input:"Step1_step1__address_input__33oEl",step1__countryAndZipBox:"Step1_step1__countryAndZipBox__2D4Za",step1__zip:"Step1_step1__zip__2brJq",step1__country:"Step1_step1__country__X2jLk",step1__button:"Step1_step1__button__xvjqP"}},97:function(e,t,a){e.exports={heading:"StepsCommonStyle_heading__1G-vt",label:"StepsCommonStyle_label__7uBjF",input:"StepsCommonStyle_input__1b_BG",input_error:"StepsCommonStyle_input_error__2SY1G",button:"StepsCommonStyle_button__1cqmD",customInput:"StepsCommonStyle_customInput__1KAJr"}},98:function(e,t,a){e.exports={thanks:"Step3_thanks__2ljUS"}}},[[103,1,2]]]);
//# sourceMappingURL=main.308bdfcf.chunk.js.map