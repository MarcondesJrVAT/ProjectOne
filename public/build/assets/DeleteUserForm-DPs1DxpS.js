import{y as k,A as b,J as C,i as $,o as _,c as q,a,w as o,j as f,m as p,b as e,T as y,n as h,r as V,h as B,K as D,q as w,u as E,g as S,z as T,e as v,d,M as U}from"./app-DYBJY9gc.js";import{_ as j,a as z}from"./Label-ZUg-xQxO.js";import{_ as M}from"./InputError-Cl-SwftO.js";import{_ as x}from"./Button-DdS-Gon2.js";const N={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},F=e("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),K=[F],R={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(r,{emit:l}){const t=r,s=l;k(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const i=()=>{t.closeable&&s("close")},n=m=>{m.key==="Escape"&&t.show&&i()};b(()=>document.addEventListener("keydown",n)),C(()=>{document.removeEventListener("keydown",n),document.body.style.overflow=null});const c=$(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(m,u)=>(_(),q(D,{to:"body"},[a(y,{"leave-active-class":"duration-200"},{default:o(()=>[f(e("div",N,[a(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:o(()=>[f(e("div",{class:"fixed inset-0 transform transition-all",onClick:i},K,512),[[p,r.show]])]),_:1}),a(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:o(()=>[f(e("div",{class:h(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[r.show?V(m.$slots,"default",{key:0}):B("",!0)],2),[[p,r.show]])]),_:3})],512),[[p,r.show]])]),_:3})]))}},W={class:"space-y-6"},A=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Remover conta "),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Depois que sua conta for excluída, todos os seus recursos e dados serão ser excluído permanentemente. Antes de excluir sua conta, por favor baixar quaisquer dados ou informações que você deseja reter. ")],-1),I={class:"p-6"},L=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Tem certeza de que deseja excluir sua conta? ",-1),P=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Depois que sua conta for excluída, todos os seus recursos e dados será excluído permanentemente. Por favor digite sua senha para confirme que deseja excluir permanentemente sua conta. ",-1),J={class:"mt-6"},O={class:"mt-6 flex justify-end"},Y={__name:"DeleteUserForm",setup(r){const l=w(!1),t=w(null),s=E({password:""}),i=()=>{l.value=!0,T(()=>t.value.focus())},n=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>t.value.focus(),onFinish:()=>s.reset()})},c=()=>{l.value=!1,s.reset()};return(m,u)=>(_(),S("section",W,[A,a(x,{variant:"danger",onClick:i},{default:o(()=>[v(" Remover conta ")]),_:1}),a(R,{show:l.value,onClose:c},{default:o(()=>[e("div",I,[L,P,e("div",J,[a(j,{for:"password",value:"Password",class:"sr-only"}),a(z,{id:"password",ref_key:"passwordInput",ref:t,modelValue:d(s).password,"onUpdate:modelValue":u[0]||(u[0]=g=>d(s).password=g),type:"password",class:"mt-1 block w-3/4",placeholder:"Senha",onKeyup:U(n,["enter"])},null,8,["modelValue"]),a(M,{message:d(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",O,[a(x,{variant:"secondary",onClick:c},{default:o(()=>[v(" Cancelar ")]),_:1}),a(x,{variant:"danger",class:h(["ml-3",{"opacity-25":d(s).processing}]),disabled:d(s).processing,onClick:n},{default:o(()=>[v(" Remover Conta ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Y as default};