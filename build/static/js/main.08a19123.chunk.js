(this.webpackJsonpeducar_web=this.webpackJsonpeducar_web||[]).push([[0],{170:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),s=(n(170),n(14)),o=n(85),l=n(136),u=n(61),d=n(17),j=n(33),b=n(29),O=n(149),h=n(310),f=n(299),p=n(269),x=n(272),m=n(270),v=n(271),g=n(81),y=n(3);var k=function(){return Object(y.jsx)(u.b,{to:"/home",style:{textDecoration:"none",color:"unset"},children:Object(y.jsx)(g.a,{variant:"h6",children:" EducAR "})})},S=Object(p.a)({title:{display:"flex",justifyContent:"flex-start",padding:0,marginLeft:0},appBar:{zIndex:2}});function w(e){var t=e.children,n=e.hideLogo,a=e.position,r=S();return Object(y.jsx)(m.a,{position:a,className:r.appBar,children:Object(y.jsxs)(v.a,{variant:"dense",children:[n?null:Object(y.jsx)(x.a,{className:r.title,children:Object(y.jsx)(k,{})}),t]})})}w.defaultProps={hideLogo:!1,position:"static",children:[]};var C=w,N=n(273),T=n(274),I=n(275),M=n(45),L=window.matchMedia("(prefers-color-scheme: dark)").matches,R=Object(M.b)({name:"settings",initialState:{paletteType:L?"dark":"light"},reducers:{setPaletteType:function(e,t){e.paletteType=t.payload},togglePaletteType:function(e){e.paletteType="dark"===e.paletteType?"light":"dark"}}}),P=Object(R.actions),E=function(e){return e.settings.paletteType},z=R.reducer;function A(e){switch(e){case"light":return Object(y.jsx)(N.a,{});case"dark":return Object(y.jsx)(T.a,{});default:return null}}var B=function(){var e=Object(s.useSelector)(E),t=Object(s.useStore)();return Object(y.jsx)(I.a,{onClick:function(){return t.dispatch(P.togglePaletteType())},"aria-label":"Toggle light/dark theme",children:A(e)})},D=n(277),F=n(278),W=n(18),q=n(276),V=Object(M.b)({name:"account",initialState:{accessToken:null},reducers:{userLoggedIn:function(e,t){e.accessToken=t.payload},userLoggedOff:function(e){e.accessToken=null},setScenes:function(e,t){e.scenes=t.payload}}}),_=Object(V.actions),U=function(e){return e.account.accessToken},G=function(e){return e.entities.channels||[]},H=V.reducer,Q="https://sketchfab.com/oauth2/authorize/?response_type=token&client_id=".concat("Qj6hQl5K04dccP4SsGykPq4Pyp8kTYkny5gAqBBY","&approval_prompt=auto"),Y=Object(p.a)((function(e){return{submit:{marginTop:e.spacing(6),margin:e.spacing(3,0,2)}}}));var J=function(){var e=Y(),t=Object(a.useState)(null),n=Object(W.a)(t,2),r=n[0],c=n[1],i=Object(s.useStore)();Object(a.useEffect)((function(){if(window.opener){var e=function(){var e=new URL(window.location).hash.split("&"),t=null;return e.forEach((function(e){-1!==e.indexOf("access_token")&&(t=e.replace("#access_token=",""))})),t}(),t=new URLSearchParams(window.location.search).get("error")||null;null!==e?(window.opener.postMessage({accessToken:e,source:window.name}),window.close()):null!==t&&window.close()}}));var o=function e(t){if("http://localhost:3000"===t.origin){var n=t.data;"Sketchfab OAuth2 Login"===n.source&&(window.removeEventListener("message",e,!1),i.dispatch(_.userLoggedIn(n.accessToken)))}};return Object(y.jsx)(q.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){window.removeEventListener("message",o,!1);var e=window.top.outerHeight/2+window.top.screenY-275,t=window.top.outerWidth/2+window.top.screenX-225;if(null===r||r.closed){var n=window.open(Q,"Sketchfab OAuth2 Login","innerHeight=550,innerWidth=450,top=".concat(e,",left=").concat(t));c(n)}else r.focus();window.addEventListener("message",o,!1)},children:"Entrar com Sketchfab"})},K=Object(p.a)((function(e){return{root:{width:350,margin:"0 auto",padding:"10px"},title:{textAlign:"center"},pos:{marginBottom:12},form:{width:"100%",marginTop:e.spacing(1)},submit:{marginTop:e.spacing(6),margin:e.spacing(3,0,2)}}}));var X=function(){var e=K();return Object(y.jsx)(D.a,{className:e.root,variant:"outlined",children:Object(y.jsxs)(F.a,{children:[Object(y.jsx)(g.a,{className:e.title,component:"h1",variant:"h5",children:"Login"}),Object(y.jsx)("form",{className:e.form,noValidate:!0,children:Object(y.jsx)(J,{})})]})})},$=Object(p.a)({loginCard:{marginTop:"100px"}});var Z=function(){var e=$();return Object(y.jsxs)("div",{children:[Object(y.jsx)(C,{children:Object(y.jsx)(B,{})}),Object(y.jsx)("div",{className:e.loginCard,children:Object(y.jsx)(X,{})})]})},ee=n(293),te=n(300);function ne(e){var t=e.children,n=e.redirectTo,a=e.onClick,r=e.disabled,c=Object(b.g)();return Object(y.jsx)(q.a,{variant:"contained",onClick:function(){a(),c.push(n)},disabled:r,children:t})}ne.defaultProps={disabled:!1,onClick:function(){}};var ae=ne,re=Object(p.a)((function(e){return{pageTitle:{marginTop:e.spacing(4),marginBottom:e.spacing(4),padding:"0"}}}));var ce=function(e){var t=e.title,n=re();return Object(y.jsx)(x.a,{className:n.pageTitle,maxWidth:"md",children:Object(y.jsx)(g.a,{variant:"h5",component:"h1",children:t})})},ie=n(279),se=n(150),oe=n(283);var le=function(){var e=Object(s.useStore)(),t=r.a.useState(null),n=Object(W.a)(t,2),a=n[0],c=n[1],i=function(){c(null)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(I.a,{onClick:function(e){c(e.currentTarget)},"aria-controls":"simple-menu","aria-haspopup":"true",children:Object(y.jsx)(ie.a,{})}),Object(y.jsxs)(se.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:i,children:[Object(y.jsx)(oe.a,{onClick:i,children:"Minha Conta"}),Object(y.jsx)(oe.a,{onClick:function(){e.dispatch(_.userLoggedOff()),i()},children:"Sair"})]})]})},ue=n(76),de=function(e){return e.entities.scenes||{}},je=(Object(ue.createSelector)(de,(function(e){return Object.keys().map((function(t,n){return{thumbnail:e[t].trigger,name:t,id:n}}))})),de),be="translate",Oe="rotate",he="scale",fe="model",pe="video",xe="image",me={trigger:{src:"",isValid:!1},overlay_selection:[0],controlMode:be,overlays:[],isNewScene:!0,name:"",addOverlayModal:{isAddingOverlay:!1,src:"",type:xe,isValid:!1},blobFiles:{}},ve=Object(M.b)({name:"editor",initialState:me,reducers:{setMarkerSrc:function(e,t){e.trigger.src=t.payload},setValidMarker:function(e){e.trigger.isValid=!0},setInvalidMarker:function(e){e.trigger.isValid=!1},setStateFromScene:function(e,t){var n=t.payload,a=n.name,r=n.scene;return Object(d.a)(Object(d.a)({},me),{},{overlays:r.overlays,trigger:{src:r.trigger,isValid:!0},isNewScene:!1,name:a})},setOverlaySelection:function(e,t){e.overlay_selection=t.payload},setControlMode:function(e,t){e.controlMode=t.payload},setOverlayTransform:function(e,t){var n=t.payload.posRotScale,a=n.position,r=n.rotation,c=n.scale;e.overlays[t.payload.id].position=a,e.overlays[t.payload.id].rotation=r,e.overlays[t.payload.id].scale=c},setIsAddingOverlay:function(e,t){e.addOverlayModal.isAddingOverlay=t.payload},setAddOverlaySrc:function(e,t){e.addOverlayModal.src=t.payload},setAddOverlayIsValid:function(e,t){e.addOverlayModal.isValid=t.payload},setAddOverlayType:function(e,t){e.addOverlayModal.type=t.payload,e.addOverlayModal.src=me.addOverlayModal.src},addOverlay:function(e){e.overlays.push({scale:{x:1,y:1,z:1},position:{x:0,y:0,z:0},type:e.addOverlayModal.type,url:e.addOverlayModal.src,rotation:{x:0,y:0,z:0}}),e.addOverlayModal=me.addOverlayModal},removeOverlay:function(e){e.overlays.splice(e.overlay_selection[0],1),e.overlay_selection=[0]},setBlobFile:function(e,t){e.blobFiles[t.payload.key]=t.payload.value},clearEditorState:function(){return me},setName:function(e,t){e.name=t.payload}}}),ge=Object(ve.actions),ye=function(e){return e.editor.trigger.src},ke=function(e){return e.editor.trigger.isValid},Se=function(e){return e.editor.overlays},we=function(e){return e.editor.overlay_selection},Ce=function(e){return e.editor.controlMode},Ne=function(e){return{sceneId:e.editor.name,sceneInfo:{trigger:e.editor.trigger.src,overlays:e.editor.overlays}}},Te=function(e){return e.editor.addOverlayModal.isAddingOverlay},Ie=function(e){return e.editor.addOverlayModal.isValid},Me=function(e){return e.editor.addOverlayModal.src},Le=function(e){return e.editor.addOverlayModal.type},Re=function(e){return e.editor.blobFiles},Pe=function(e){return e.editor},Ee=ve.reducer,ze=Object(M.b)({name:"home",initialState:{selectedChannelIndex:null},reducers:{setSelectedChannelIndex:function(e,t){e.selectedChannelIndex=t.payload}}}),Ae=Object(ze.actions),Be=function(e){return e.home.selectedChannelIndex},De=ze.reducer,Fe=n(287),We=n(288),qe=n(289),Ve=n(313),_e=n(23),Ue=n.n(_e),Ge=n(32),He=n(100),Qe=n(315),Ye=n(236),Je=Object(p.a)((function(e){return{imgContainer:{display:"flex",justifyContent:"center",alignItems:"center",height:"440px",marginTop:e.spacing(4)},img:{maxWidth:"100%",maxHeight:"100%"}}}));var Ke=function(){var e=Object(a.useState)(!1),t=Object(W.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(W.a)(c,2),o=i[0],l=i[1],u=Je(),d=Object(s.useSelector)(ye),j=Object(s.useStore)();function b(){return(b=Object(Ge.a)(Ue.a.mark((function e(){return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:e.sent.ok&&(l(!1),j.dispatch(ge.setValidMarker())),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){j.dispatch(ge.setInvalidMarker()),l(!1),r(!1)}),[d]),Object(a.useEffect)((function(){n&&function(){b.apply(this,arguments)}()}),[n]),Object(y.jsxs)(He.a,{variant:"outlined",className:u.imgContainer,square:!0,children:[Object(y.jsx)("img",{className:u.img,src:d,alt:"",onLoad:function(){r(!0)}}),Object(y.jsx)(Qe.a,{autoHideDuration:null,severity:"error",open:o,TransitionComponent:Ye.a,message:"N\xe3o \xe9 poss\xedvel utilizar esta imagem (poss\xedvel erro de CORS)."})]})},Xe=Object(p.a)({content:{padding:"0"}});var $e=function(){var e=Object(s.useStore)(),t=Xe(),n=Object(s.useSelector)(ye);return Object(y.jsxs)(x.a,{maxWidth:"md",className:t.content,children:[Object(y.jsx)(Ve.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"markerSrc",label:"Link da imagem",name:"markerSrc",autoFocus:!0,onChange:function(t){return n=t.target.value,void e.dispatch(ge.setMarkerSrc(n));var n},value:n}),Object(y.jsx)(Ke,{})]})},Ze=Object(p.a)({window:{minWidth:"600px"}});var et=function(e){var t=e.open,n=e.handleClose,a=Ze(),r=Object(s.useDispatch)();return Object(y.jsxs)(Fe.a,{open:t,onClose:n,children:[Object(y.jsx)(We.a,{className:a.window,children:Object(y.jsx)($e,{})}),Object(y.jsxs)(qe.a,{children:[Object(y.jsx)(q.a,{onClick:n,children:"Salvar"}),Object(y.jsx)(q.a,{onClick:function(){n(),r(ge.setMarkerSrc(""))},children:"Fechar"})]})]})},tt=n(112),nt=n(290),at=n(291),rt=n(292),ct=n(59),it=n.n(ct),st="https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/",ot={updateScene:function(e){var t=e.accessToken,n=e.channelId,a=e.sceneId,r=e.scene;return{method:"put",url:"/channels/".concat(n,"/scenes/").concat(a),baseURL:st,data:{scene:r},headers:{authorizationToken:t}}},createChannel:function(e){var t=e.accessToken,n=e.channelId,a=e.password;return{method:"post",url:"/channels",baseURL:st,data:Object(d.a)(Object(d.a)({id:n},a&&{password:a}),{},{scenes:{}}),headers:{authorizationToken:t}}},deleteChannel:function(e){var t=e.accessToken,n=e.channelId;return{method:"delete",url:"/channels/".concat(n),baseURL:st,headers:{authorizationToken:t}}}},lt=Object(p.a)({cardDesign:{backgroundColor:"rgba(255, 0, 0, 0)"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{display:"flex",flexGrow:1,alignItems:"center",justifyContent:"center"},editingCardContent:{flexGrow:1},buttonBase:{display:"block",flexGrow:1}});function ut(e){var t=e.setState,n=e.handleOpenMarker,r=lt(),c=Object(s.useSelector)(ye),i=Object(s.useSelector)(U),o=Object(s.useSelector)(G)[Object(s.useSelector)(Be)],l=(Object(s.useDispatch)(),Object(a.useState)("")),u=Object(W.a)(l,2),d=u[0],j=u[1];return Object(y.jsxs)(D.a,{className:r.card,children:[Object(y.jsx)(tt.a,{className:r.buttonBase,onClick:n,children:c?Object(y.jsx)(nt.a,{className:r.cardMedia,image:c||"",title:"marker"}):Object(y.jsx)(nt.a,{children:Object(y.jsx)(g.a,{children:"*Clique aqui para escolher uma imagem*"})})}),Object(y.jsx)(F.a,{className:r.editingCardContent,children:Object(y.jsx)(Ve.a,{value:d,placeholder:"Nome da cena",onChange:function(e){return j(e.target.value)}})}),Object(y.jsxs)(at.a,{children:[Object(y.jsx)(q.a,{size:"small",onClick:function(){if(e=c,d&&e){var e,n=ot.updateScene({accessToken:i,channelId:o.id,sceneId:d,scene:{trigger:c,overlays:[]}});it()(n).then().catch(),t("blank")}},children:"Salvar"}),Object(y.jsx)(q.a,{size:"small",onClick:function(){return t("blank")},children:"Fechar"})]})]})}function dt(e){var t=e.setState,n=lt(),a=Object(s.useDispatch)();return Object(y.jsx)(D.a,{className:n.card,classes:{root:n.cardDesign},children:Object(y.jsx)(tt.a,{className:n.buttonBase,onClick:function(){a(ge.setMarkerSrc("")),t("editing")},children:Object(y.jsxs)(F.a,{className:n.cardContent,children:["Nova Cena",Object(y.jsx)(rt.a,{})]})})})}var jt=function(e){var t=e.handleOpenMarker,n=(lt(),Object(a.useState)("blank")),r=Object(W.a)(n,2),c=r[0],i=r[1],s=function(e){switch(e.type){case"blank":return Object(y.jsx)(dt,{setState:i});case"editing":return Object(y.jsx)(ut,{setState:i,handleOpenMarker:t});default:return Object(y.jsx)("div",{})}};return Object(y.jsx)(ee.a,{item:!0,xs:12,sm:6,md:4,children:Object(y.jsx)(s,{type:c})})},bt=n(235),Ot=n(294),ht=n(295),ft=n(297),pt=n(282),xt=n(298),mt=n(296),vt=n(311);var gt=function(e){var t=e.open,n=e.handleClose,r=Object(a.useState)(""),c=Object(W.a)(r,2),i=c[0],o=c[1],l=Object(a.useState)(""),u=Object(W.a)(l,2),d=u[0],j=u[1],b=Object(s.useSelector)(U),O=ot.createChannel({accessToken:b,channelId:i,password:d});return Object(y.jsxs)(Fe.a,{open:t,onClose:n,children:[Object(y.jsx)(We.a,{style:{display:"flex"},children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(g.a,{variant:"h6",children:"Adicionar Canal"}),Object(y.jsx)(vt.a,{m:2,children:Object(y.jsx)(Ve.a,{placeholder:"Nome do Canal",id:"channelId",name:"channelId",required:!0,value:i,onChange:function(e){return o(e.target.value)}})}),Object(y.jsx)(vt.a,{m:2,children:Object(y.jsx)(Ve.a,{placeholder:"Senha do Canal",id:"channelPassword",name:"channelPassword",type:"password",value:d,onChange:function(e){return j(e.target.value)}})})]})}),Object(y.jsxs)(qe.a,{children:[Object(y.jsx)(q.a,{onClick:function(){""!==i&&(n(),it()(O).then((function(){})).catch((function(){})))},children:"Salvar"}),Object(y.jsx)(q.a,{onClick:n,children:"Fechar"})]})]})};function yt(e){var t=e.channelId,n=e.anchorEl,a=e.handleClose,r=Object(s.useSelector)(U),c=ot.deleteChannel({accessToken:r,channelId:t});return Object(y.jsx)(se.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:a,children:Object(y.jsx)(oe.a,{onClick:function(){it()(c).then().catch(),a()},children:"Deletar"})})}yt.defaultProps={anchorEl:null};var kt=yt,St=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:2},drawer:{width:248,flexShrink:0},drawerPaper:{width:248},drawerContainer:{marginTop:48,overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));var wt=function(e){var t=e.channels,n=e.children,r=St(),c=Object(s.useDispatch)(),i=Object(a.useState)(!1),o=Object(W.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(null),j=Object(W.a)(d,2),b=j[0],O=j[1],h=Object(a.useState)(0),f=Object(W.a)(h,2),p=f[0],x=f[1];return Object(y.jsxs)(ft.a,{variant:"permanent",className:r.drawer,classes:{paper:r.drawerPaper},children:[Object(y.jsx)(C,{position:"fixed",children:n}),Object(y.jsx)("div",{className:r.drawerContainer,children:Object(y.jsxs)(pt.a,{children:[Object(y.jsxs)(xt.a,{children:["Meus Canais",Object(y.jsx)(ht.a,{children:Object(y.jsx)(I.a,{edge:"end",onClick:function(){return u(!0)},children:Object(y.jsx)(rt.a,{})})})]}),t.map((function(e,t){return Object(y.jsxs)(bt.a,{button:!0,onClick:function(){return function(e){return c(Ae.setSelectedChannelIndex(e))}(t)},children:[Object(y.jsx)(Ot.a,{primary:e.id}),Object(y.jsx)(ht.a,{children:Object(y.jsx)(I.a,{onClick:function(t){return n=function(){return x(e.id)},O(t.currentTarget),void n();var n},children:Object(y.jsx)(mt.a,{})})})]},e.id)}))]})}),Object(y.jsx)(gt,{open:l,handleClose:function(){return u(!1)}}),Object(y.jsx)(kt,{channelId:p,anchorEl:b,handleClose:function(){O(null)}})]})},Ct=Object(p.a)({card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1}});var Nt=function(e){var t=e.name,n=e.scene,a=e.id,r=Ct(),c=Object(s.useStore)(),i=Object(b.g)();return Object(y.jsx)(ee.a,{item:!0,xs:12,sm:6,md:4,children:Object(y.jsxs)(D.a,{className:r.card,children:[Object(y.jsx)(nt.a,{className:r.cardMedia,image:n.trigger,title:"Thumbnail"}),Object(y.jsx)(F.a,{className:r.cardContent,children:Object(y.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t})}),Object(y.jsx)(at.a,{children:Object(y.jsx)(q.a,{size:"small",color:"primary",onClick:function(){c.dispatch(ge.setStateFromScene({name:t,scene:n})),i.push("/editor")},children:"Editar"})})]})},a)},Tt=Object(p.a)((function(e){return{root:{display:"flex"},cardGrid:{padding:0,paddingBottom:e.spacing(6)},loading:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},content:{flexGrow:1,padding:e.spacing(3)}}}));var It=function(){var e=Tt(),t=Object(s.useSelector)(U),n=(Object(s.useSelector)(je),Object(s.useSelector)(G)),r=n[Object(s.useSelector)(Be)],c=Object(s.useDispatch)(),i=Object(o.useRequest)(function(e){return{url:"https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/channels/",transform:function(e){return{channels:e.Items}},update:{channels:function(e,t){return t}},options:{headers:{authorizationToken:e}},force:!0}}(t)),l=Object(W.a)(i,1)[0].isFinished;Object(a.useEffect)((function(){l&&c(Ae.setSelectedChannelIndex(0))}),[l]);var u=Object(a.useState)(!1),d=Object(W.a)(u,2),j=d[0],b=d[1];return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(f.a,{}),Object(y.jsx)(C,{position:"fixed"}),Object(y.jsxs)(wt,{channels:n,children:[Object(y.jsx)(B,{}),Object(y.jsx)(le,{})]}),Object(y.jsxs)("div",{className:e.content,children:[Object(y.jsx)(ce,{title:"Cenas"}),Object(y.jsx)(x.a,{className:e.cardGrid,maxWidth:"md",children:Object(y.jsxs)(ee.a,{container:!0,spacing:4,children:[Object(y.jsx)(jt,{handleOpenMarker:function(){return b(!0)}}),r?Object.keys(r.scenes).map((function(e,t){return Object(y.jsx)(Nt,{name:e,scene:r.scenes[e],id:t},e)})):Object(y.jsx)("div",{className:e.loading,children:Object(y.jsx)(te.a,{})})]})})]}),Object(y.jsx)(et,{open:j,handleClose:function(){return b(!1)}})]})};var Mt=function(){var e=Object(s.useSelector)(ke);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(C,{children:[Object(y.jsx)(B,{}),Object(y.jsx)(le,{}),Object(y.jsx)(ae,{redirectTo:"/editor",disabled:!e,children:"Prosseguir"})]}),Object(y.jsx)(ce,{title:"Selecionar Marcador"}),Object(y.jsx)($e,{})]})},Lt=n(307),Rt=n(308),Pt=n(309),Et=n(301),zt=n(286),At=n(312),Bt=Object(p.a)({img:{maxWidth:"100%",maxHeight:"100%"}});function Dt(){var e=Object(a.useState)(!1),t=Object(W.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(W.a)(c,2),o=i[0],l=i[1],u=Bt(),d=Object(s.useSelector)(Me),j=Object(s.useStore)();function b(){return(b=Object(Ge.a)(Ue.a.mark((function e(){return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:e.sent.ok&&(l(!1),j.dispatch(ge.setAddOverlayIsValid(!0))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){j.dispatch(ge.setAddOverlayIsValid(!1)),l(!1),r(!1)}),[d]),Object(a.useEffect)((function(){n&&function(){b.apply(this,arguments)}()}),[n]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:u.img,src:d,alt:"",onLoad:function(){return r(!0)}}),Object(y.jsx)(Qe.a,{autoHideDuration:null,severity:"error",open:o,TransitionComponent:Ye.a,message:"N\xe3o \xe9 poss\xedvel utilizar esta imagem (poss\xedvel erro de CORS)."})]})}function Ft(e){var t=e.split("-");return t[t.length-1]}var Wt=Object(p.a)({img:{maxWidth:"100%",maxHeight:"100%"}}),qt="https://sketchfab.com/3d-models/";function Vt(){var e=Wt(),t=Object(s.useSelector)(Me),n=Object(s.useStore)(),r=Object(s.useSelector)(U),c=Object(s.useSelector)(Re),i=Object(a.useState)(""),o=Object(W.a)(i,2),l=o[0],u=o[1],d=Object(a.useState)(!1),j=Object(W.a)(d,2),b=j[0],O=j[1];function h(e){return f.apply(this,arguments)}function f(){return(f=Object(Ge.a)(Ue.a.mark((function e(t){var n,a,c,i,s;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=15;break}if(t.substring(0,32)!==qt){e.next=15;break}return n=Ft(t),a="https://api.sketchfab.com/v3/models/".concat(n),c={method:"GET",headers:{Authorization:"Bearer ".concat(r)},mode:"cors"},e.next=8,fetch(a,c);case 8:if(!(i=e.sent).ok){e.next=15;break}return e.next=12,i.json();case 12:if(!(s=e.sent).isDownloadable){e.next=15;break}return e.abrupt("return",s.thumbnails.images[0].url);case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)(Object(Ge.a)(Ue.a.mark((function e(){var a;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.dispatch(ge.setAddOverlayIsValid(!1)),O(!1),u(""),e.next=5,h(t);case 5:(a=e.sent)&&(u(a),c[t]?O(!0):n.dispatch(ge.setAddOverlayIsValid(!0)));case 7:case"end":return e.stop()}}),e)}))),[t]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:e.img,src:l,alt:""}),Object(y.jsx)(Qe.a,{autoHideDuration:null,severity:"error",TransitionComponent:Ye.a,open:b,message:"Modelo j\xe1 adicionado."})]})}var _t=Object(p.a)((function(e){return{form:{display:"flex",width:"100%"},previewContainer:{display:"flex",justifyContent:"center",alignItems:"center",aspectRatio:"2 / 1",minWidth:"380px",width:"calc(100vw - 480px)",maxWidth:"880px",marginTop:e.spacing(4)}}})),Ut=function(e){switch(e){case xe:return Object(y.jsx)(Dt,{});case fe:return Object(y.jsx)(Vt,{});default:return null}};function Gt(){var e=_t(),t=Object(s.useSelector)(Te),n=Object(s.useStore)(),a=Object(s.useSelector)(Me),r=Object(s.useSelector)(Ie),c=Object(s.useSelector)(Le),i=function(){return n.dispatch(ge.setIsAddingOverlay(!1))};return Object(y.jsxs)(Fe.a,{open:t,onClose:i,"aria-labelledby":"form-dialog-title",maxWidth:"xl",className:e.dialog,children:[Object(y.jsx)(Et.a,{id:"form-dialog-title",children:"Adicionar Overlay"}),Object(y.jsxs)(We.a,{children:[Object(y.jsxs)(zt.a,{variant:"outlined",className:e.form,children:[Object(y.jsxs)(At.a,{id:"markerType",value:c,onChange:function(e){return t=e.target.value,n.dispatch(ge.setAddOverlayType(t));var t},children:[Object(y.jsx)(oe.a,{value:xe,children:"Imagem"}),Object(y.jsx)(oe.a,{value:fe,children:"Modelo 3D"})]}),Object(y.jsx)(Ve.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"markerSrc",label:"Link do Overlay",name:"markerSrc",autoFocus:!0,value:a,onChange:function(e){return t=e.target.value,n.dispatch(ge.setAddOverlaySrc(t));var t}})]}),Object(y.jsx)(He.a,{variant:"outlined",className:e.previewContainer,square:!0,children:Ut(c)})]}),Object(y.jsxs)(qe.a,{children:[Object(y.jsx)(q.a,{onClick:i,color:"primary",children:"Cancelar"}),Object(y.jsx)(q.a,{onClick:function(){c===fe&&n.dispatch(ge.setAddOverlaySrc(Ft(a))),n.dispatch(ge.addOverlay())},variant:"contained",color:"primary",disabled:!r,children:"Adicionar"})]})]})}var Ht=n(26),Qt=n(304),Yt=n(320),Jt=n(319),Kt=n(1);var Xt=function(e){var t=Object(s.useSelector)(we),n=Object(s.useSelector)(Se)[t[0]],r=Object(s.useStore)(),c=function(e){var t=e.position,n=e.rotation,a=e.scale;return{initialPosition:[t.x,t.y,t.z],initialRotation:[n.x,n.y,n.z],initialScale:[a.x,a.y,a.z]}}(n),i=c.initialPosition,o=c.initialRotation,l=c.initialScale,u=e.orbitRef,j=e.controlMode,b=e.children,O=e.transformRef;return Object(a.useEffect)((function(){if(O.current&&u.current){var e=O.current;e.setMode(j);var n=function(e){u.current.enabled=!e.value},a=function(n){var a=e.worldPosition,c=(new Kt.Euler).setFromQuaternion(e.worldQuaternion),i=e.worldScale,s={id:t[0],posRotScale:{position:Object(d.a)({},a),rotation:{x:c._x,y:c._y,z:c._z},scale:Object(d.a)({},i)}};r.dispatch(ge.setOverlayTransform(s))};return e.addEventListener("dragging-changed",n),e.addEventListener("mouseUp",a),function(){e.removeEventListener("dragging-changed",n),e.removeEventListener("mouseUp",a)}}})),Object(y.jsx)(Jt.a,{ref:O,position:i,rotation:o,scale:l,children:b})},$t=n(302),Zt=function(e){var t=e.url,n=e.initialParam,r=Object(a.useState)(void 0),c=Object(W.a)(r,2),i=c[0],s=c[1],o=n.initialPosition,l=n.initialRotation,u=n.initialScale,d=Object($t.a)(t);return Object(a.useEffect)((function(){s(d.image.naturalHeight/d.image.naturalWidth)}),[d]),t&&d&&i?Object(y.jsx)(a.Suspense,{fallback:null,children:Object(y.jsxs)("mesh",{position:o,rotation:l,scale:u,children:[Object(y.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,i,0]}),Object(y.jsx)("meshBasicMaterial",{attach:"material",map:d})]})}):null},en=n(303),tn=n(314),nn=n(145),an=n.n(nn),rn=function(){return Object(y.jsx)(en.a,{children:Object(y.jsx)("meshBasicMaterial",{attach:"material",color:"hotpink"})})},cn=function(e){var t=e.url,n=e.initialParam,r=n.initialPosition,c=n.initialRotation,i=n.initialScale,s=Object(tn.a)(t);return s?Object(y.jsx)(a.Suspense,{fallback:Object(y.jsx)("div",{}),children:Object(y.jsx)("primitive",{position:r,rotation:c,scale:i,name:"3dmodel",object:s.scene})}):Object(y.jsx)(rn,{})};function sn(e){return e.toLowerCase().split(".").pop()}function on(e){return ln.apply(this,arguments)}function ln(){return(ln=Object(Ge.a)(Ue.a.mark((function e(t){var n,a;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.async("blob");case 2:return n=e.sent,a=URL.createObjectURL(n),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function un(e,t){return dn.apply(this,arguments)}function dn(){return(dn=Object(Ge.a)(Ue.a.mark((function e(t,n){var a,r;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.async("string");case 2:return a=e.sent,Object.keys(n).forEach((function(e){a=a.replace(e,n[e])})),r=new Blob([a]),e.abrupt("return",URL.createObjectURL(r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jn(e){return bn.apply(this,arguments)}function bn(){return(bn=Object(Ge.a)(Ue.a.mark((function e(t){var n,a,r,c,i,s,o;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.arrayBuffer();case 5:return a=e.sent,e.next=8,an.a.loadAsync(a);case 8:return r=e.sent,c=Object.values(r.files).filter((function(e){return!e.dir})),i=c.find((function(e){return"gltf"===sn(e.name)})),c.splice(c.indexOf(i),1),s={},e.next=15,Promise.all(c.map(function(){var e=Object(Ge.a)(Ue.a.mark((function e(t){return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,on(t);case 2:s[t.name]=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 15:return e.next=17,un(i,s);case 17:return o=e.sent,e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function On(e,t){return hn.apply(this,arguments)}function hn(){return(hn=Object(Ge.a)(Ue.a.mark((function e(t,n){var a,r,c,i;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.sketchfab.com/v3/models/".concat(t,"/download"),r={method:"GET",headers:{Authorization:"Bearer ".concat(n)},mode:"cors"},e.next=4,fetch(a,r);case 4:return c=e.sent,e.next=7,c.json();case 7:return i=e.sent,e.abrupt("return",i.gltf.url);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fn=function(e){var t=e.modelId,n=e.initialParam,r=Object(a.useState)(""),c=Object(W.a)(r,2),i=c[0],o=c[1],l=Object(s.useSelector)(U),u=Object(s.useSelector)(Re),d=Object(s.useStore)();return Object(a.useEffect)(Object(Ge.a)(Ue.a.mark((function e(){var n,a;return Ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u[t]){e.next=12;break}return d.dispatch(ge.setBlobFile({key:t,value:{isDownloading:!0}})),e.next=4,On(t,l);case 4:return n=e.sent,e.next=7,jn(n);case 7:a=e.sent,d.dispatch(ge.setBlobFile({key:t,value:{isDownloading:!1,fileUrl:a}})),o(a),e.next=13;break;case 12:u[t].isDownloading||o(u[t].fileUrl);case 13:case"end":return e.stop()}}),e)}))),[t,u[t]]),i?Object(y.jsx)(cn,{url:i,initialParam:n}):Object(y.jsx)(rn,{})};var pn=function(e){var t=e.id,n=e.type,a=e.url,r=Object(s.useSelector)(we),c=Object(s.useSelector)(Se)[t],i=function(e,t){var n=t.position,a=t.rotation,r=t.scale;return e?{initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]}:{initialPosition:[n.x,n.y,n.z],initialRotation:[a.x,a.y,a.z],initialScale:[r.x,r.y,r.z]}}(r[0]===t,c);switch(n){case xe:return Object(y.jsx)(Zt,{initialParam:i,url:a});case fe:return Object(y.jsx)(fn,{initialParam:i,modelId:a});case pe:default:return null}},xn=n(37),mn=n(111),vn=n(39),gn=n(146),yn=n.n(gn),kn=n(147),Sn=function(e){return e.queries},wn=function(e){return e.entities},Cn={key:"root",storage:n.n(kn).a,whitelist:["account","settings"]},Nn=Object(xn.b)({account:H,settings:z,editor:Ee,entities:vn.entitiesReducer,queries:vn.queriesReducer,home:De}),Tn=Object(mn.a)(Cn,Nn),In=Object(M.a)({reducer:Tn,middleware:function(e){return e({serializableCheck:!1}).concat(Object(vn.queryMiddleware)(yn.a,Sn,wn))}}),Mn=Object(mn.b)(In),Ln=In;function Rn(){var e=Object(s.useSelector)(Se),t=Object(s.useSelector)(we),n=Object(s.useSelector)(Ce),r=Object(s.useSelector)(ye),c=t[0],i=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)();return Object(y.jsx)(Ht.a,{children:Object(y.jsxs)(s.Provider,{store:Ln,children:[Object(y.jsx)(Qt.a,{ref:i,position:[0,5,6],rotation:[0,1.57,0]}),Object(y.jsx)("ambientLight",{}),Object(y.jsx)("pointLight",{position:[10,10,10]}),e.map((function(e,t){var r=e.type,i=e.url;return t===c?Object(y.jsx)(Xt,{orbitRef:o,controlMode:n,transformRef:l,children:Object(y.jsx)(a.Suspense,{fallback:null,children:Object(y.jsx)(pn,{id:t,type:r,url:i})})}):Object(y.jsx)(a.Suspense,{fallback:null,children:Object(y.jsx)(pn,{id:t,type:r,ref:null,url:i})})})),Object(y.jsx)(a.Suspense,{fallback:null,children:Object(y.jsx)(Zt,{initialParam:{initialPosition:[0,0,0],initialRotation:[-1.57075,0,0],initialScale:[1,1,1]},url:r,fwdRef:null})}),Object(y.jsx)(Yt.a,{ref:o})]})})}var Pn=Object(p.a)((function(){return{viewport:{backgroundColor:"#282c34",flex:3}}}));function En(){var e=Pn();return Object(y.jsx)(vt.a,{className:e.viewport,children:Object(y.jsx)(Rn,{})})}var zn=n(316),An=Object(p.a)((function(){return{iconTool:{marginLeft:"10px"}}}));function Bn(e){var t=e.toolName,n=e.icon,a=e.onClickCallback,r=An();return Object(y.jsx)(zn.a,{title:t,children:Object(y.jsx)(I.a,{className:r.iconTool,"aria-label":t,color:"default",onClick:a,children:n})})}Bn.defaultProps={onClickCallback:function(){return null}};var Dn=Bn,Fn=n(306),Wn=n(305),qn=Object(p.a)((function(){return{container:{borderRadius:3,backgroundColor:"#505050"},title:{borderTopRightRadius:3,borderTopLeftRadius:3,display:"flex",color:"white",justifyContent:"center",alignItems:"center",backgroundColor:"#404040"},body:{display:"flex",flexDirection:"column"},footer:{}}}));function Vn(e){var t=e.title,n=e.options,a=e.children,r=qn();return Object(y.jsxs)(vt.a,{className:r.container,m:1,children:[Object(y.jsx)(vt.a,{className:r.title,children:t}),Object(y.jsx)(Wn.a,{}),Object(y.jsx)(vt.a,{m:1,className:r.body,children:a}),Object(y.jsx)(Wn.a,{}),Object(y.jsx)(vt.a,{className:r.footer,children:n})]})}Vn.defaultProps={children:Object(y.jsx)("div",{}),options:Object(y.jsx)("div",{})};var _n=Vn,Un=Object(p.a)((function(){return{selected:{marginTop:4,backgroundColor:"#7070A7"},normal:{marginTop:4,backgroundColor:"#505050"}}}));var Gn=function(e){var t=e.id,n=e.nome,a=Un(),r=Object(s.useSelector)(we).includes(t)?a.selected:a.normal,c=Object(s.useStore)();return Object(y.jsx)(q.a,{className:r,variant:"contained",onClick:function(){var e=[t];c.dispatch(ge.setOverlaySelection(e))},disableElevation:!0,children:n})},Hn=Object(p.a)((function(){return{container:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}}));var Qn=function(){var e=Hn(),t=Object(s.useSelector)(Se),n=Object(s.useStore)();return Object(y.jsx)(_n,{title:"Overlays",options:Object(y.jsxs)(vt.a,{className:e.container,children:[Object(y.jsx)(I.a,{size:"small",onClick:function(){return n.dispatch(ge.setIsAddingOverlay(!0))},children:Object(y.jsx)(rt.a,{})}),Object(y.jsx)(I.a,{size:"small",onClick:function(){return n.dispatch(ge.removeOverlay())},children:Object(y.jsx)(Fn.a,{})})]}),children:t.map((function(e,t){return Object(y.jsx)(Gn,{id:t,nome:"Overlay ".concat(t)},String(t))}))})};var Yn=function(){var e=Object(s.useSelector)(Pe),t=e.name,n=e.isNewScene,a=Object(s.useDispatch)();return Object(y.jsx)(Ve.a,{id:"sceneName",value:t,onChange:n?function(e){return a(ge.setName(e.target.value))}:null})},Jn=Object(p.a)((function(){return{menu:{flex:1,display:"flex",flexDirection:"column",backgroundColor:"#121316"}}}));function Kn(e){var t=e.children,n=Jn();return Object(y.jsx)(vt.a,{className:n.menu,children:t})}var Xn=function(){var e=Object(s.useSelector)(U),t=Object(s.useSelector)(G)[Object(s.useSelector)(Be)],n=Object(s.useSelector)(Ne),a=n.sceneId,r=n.sceneInfo,c=ot.updateScene({accessToken:e,channelId:t.id,sceneId:a,scene:r});return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(q.a,{variant:"contained",onClick:function(){it()(c).then((function(){})).catch((function(){}))},children:"Salvar Cena"})})},$n=Object(p.a)((function(){return{horizontal:{display:"flex",flexDirection:"row",height:"calc(100vh - 48px)"},toolbar:{flex:1e3,display:"flex",justifyContent:"center",alignItems:"center"},toolbarLeft:{flex:1,display:"flex",marginRight:"auto",alignItems:"center",justifyContent:"flex-start"},toolbarCenter:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},toolbarRight:{flex:1,display:"flex",marginLeft:"auto",alignItems:"center",justifyContent:"flex-end"}}}));var Zn=function(){var e=Object(s.useStore)(),t=$n(),n=function(t){return e.dispatch(ge.setControlMode(t))};return Object(y.jsxs)("div",{children:[Object(y.jsx)(C,{hideLogo:!0,children:Object(y.jsxs)("div",{className:t.toolbar,children:[Object(y.jsxs)("div",{className:t.toolbarLeft,children:[Object(y.jsx)(k,{}),Object(y.jsx)(Dn,{toolName:"Transla\xe7\xe3o",icon:Object(y.jsx)(Lt.a,{}),onClickCallback:function(){return n(be)}}),Object(y.jsx)(Dn,{toolName:"Rota\xe7\xe3o",icon:Object(y.jsx)(Rt.a,{}),onClickCallback:function(){return n(Oe)}}),Object(y.jsx)(Dn,{toolName:"Escala",icon:Object(y.jsx)(Pt.a,{}),onClickCallback:function(){return n(he)}})]}),Object(y.jsx)("div",{className:t.toolbarCenter,children:Object(y.jsx)(Yn,{})}),Object(y.jsxs)("div",{className:t.toolbarRight,children:[Object(y.jsx)(le,{}),Object(y.jsx)(Xn,{})]})]})}),Object(y.jsxs)(vt.a,{className:t.horizontal,children:[Object(y.jsxs)(Kn,{children:[Object(y.jsx)(Qn,{}),Object(y.jsx)(_n,{title:"Adicionar um Link"})]}),Object(y.jsx)(En,{}),Object(y.jsx)(Kn,{children:Object(y.jsx)(_n,{title:"Info"})})]}),Object(y.jsx)(Gt,{})]})},ea=["children","isLoggedIn"],ta=["isLoggedIn"];function na(e){var t=e.children,n=e.isLoggedIn,a=Object(j.a)(e,ea);return Object(y.jsx)(b.b,Object(d.a)(Object(d.a)({},a),{},{render:function(){return n?t:Object(y.jsx)(b.a,{to:"/login"})}}))}function aa(e){var t=e.isLoggedIn,n=Object(j.a)(e,ta);return Object(y.jsx)(b.b,Object(d.a)(Object(d.a)({},n),{},{render:function(){return t?Object(y.jsx)(b.a,{to:"/home"}):Object(y.jsx)(Z,{})}}))}function ra(){var e=null!==Object(s.useSelector)(U);return Object(y.jsxs)(b.d,{children:[Object(y.jsx)(aa,{isLoggedIn:e,path:"/login"}),Object(y.jsx)(na,{isLoggedIn:e,path:"/home",children:Object(y.jsx)(It,{})}),Object(y.jsx)(na,{isLoggedIn:e,path:"/marcador",children:Object(y.jsx)(Mt,{})}),Object(y.jsx)(na,{isLoggedIn:e,path:"/editor",children:Object(y.jsx)(Zn,{})}),Object(y.jsx)(b.b,{path:"/",component:function(e){var t=e.location;return Object(y.jsx)(b.a,{to:Object(d.a)(Object(d.a)({},t),{},{pathname:"/home"})})}})]})}var ca=function(){var e=Object(s.useSelector)(E),t=Object(a.useMemo)((function(){return Object(O.a)({palette:{type:e}})}),[e]);return Object(y.jsxs)(h.a,{theme:t,children:[Object(y.jsx)(f.a,{}),Object(y.jsx)(ra,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(s.Provider,{store:Ln,children:Object(y.jsx)(o.Provider,{queriesSelector:function(e){return e.queries},children:Object(y.jsx)(l.a,{loading:null,persistor:Mn,children:Object(y.jsx)(u.a,{children:Object(y.jsx)(ca,{})})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[233,1,2]]]);
//# sourceMappingURL=main.08a19123.chunk.js.map