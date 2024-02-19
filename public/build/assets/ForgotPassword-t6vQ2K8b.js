import{o as n,c as m,a as e,u,w as o,g as c,t as p,h as f,b as a,d as t,n as _,f as h}from"./app-DYBJY9gc.js";import{r as v}from"./MailIcon-Ci3tE14x.js";import{_ as w,I as g}from"./ValidationErrors-BerGid3x.js";import{_ as k}from"./Button-DdS-Gon2.js";import{_ as x}from"./Guest-CRsOhu4J.js";import{_ as b,a as y}from"./Label-ZUg-xQxO.js";import"./index-BS37t9UK.js";function B(r,s){return n(),m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})])}const V=a("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Esqueceu sua senha? Sem problemas. Basta nos informar seu endereço de e-mail e enviaremos por e-mail um link de redefinição de senha que permitirá que você escolha uma nova. ",-1),$={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"grid gap-6"},q={class:"space-y-2"},C=a("span",null,"Link de redefinição de senha de e-mail",-1),L={__name:"ForgotPassword",props:{status:String},setup(r){const s=u({email:""}),d=()=>{s.post(route("password.email"))};return(I,l)=>(n(),m(x,{title:"Recuperar Senha"},{default:o(()=>[V,r.status?(n(),c("div",$,p(r.status),1)):f("",!0),e(w,{class:"mb-4"}),a("form",{onSubmit:h(d,["prevent"])},[a("div",S,[a("div",q,[e(b,{for:"email",value:"Endereço de email"}),e(g,null,{icon:o(()=>[e(t(v),{"aria-hidden":"true",class:"w-5 h-5"})]),default:o(()=>[e(y,{withIcon:"",id:"email",type:"email",class:"block w-full",placeholder:"usuário@provedor.com",modelValue:t(s).email,"onUpdate:modelValue":l[0]||(l[0]=i=>t(s).email=i),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),_:1})]),a("div",null,[e(k,{class:"justify-center gap-2 w-full",disabled:t(s).processing},{default:o(({iconSizeClasses:i})=>[e(t(B),{"aria-hidden":"true",class:_(i)},null,8,["class"]),C]),_:1},8,["disabled"])])])],32)]),_:1}))}};export{L as default};
