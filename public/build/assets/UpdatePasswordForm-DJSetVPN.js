import{q as p,u as _,o as m,g as i,b as r,a as e,d as a,w as f,T as g,f as y,e as v,h as x}from"./app-DYBJY9gc.js";import{a as l,_ as n}from"./Label-ZUg-xQxO.js";import{_ as d}from"./InputError-Cl-SwftO.js";import{_ as V}from"./Button-DdS-Gon2.js";const k=r("header",null,[r("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Atualização de Senha "),r("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Certifique-se de que sua conta esteja usando uma senha longa e aleatória para permanecer seguro. ")],-1),S={class:"flex items-center gap-4"},h={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},$={__name:"UpdatePasswordForm",setup(b){const u=p(null),c=p(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),c.value.focus())}})};return(N,o)=>(m(),i("section",null,[k,r("form",{onSubmit:y(w,["prevent"]),class:"mt-6 space-y-6"},[r("div",null,[e(n,{for:"current_password",value:"Senha Atual"}),e(l,{id:"current_password",ref_key:"currentPasswordInput",ref:c,modelValue:a(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>a(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(d,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"password",value:"Nova Senha"}),e(l,{id:"password",ref_key:"passwordInput",ref:u,modelValue:a(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>a(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(n,{for:"password_confirmation",value:"Confirme a Nova Senha"}),e(l,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>a(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",S,[e(V,{disabled:a(s).processing},{default:f(()=>[v("Finalizar")]),_:1},8,["disabled"]),e(g,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:f(()=>[a(s).recentlySuccessful?(m(),i("p",h," Atualização concluída com Sucesso. ")):x("",!0)]),_:1})])],32)]))}};export{$ as default};