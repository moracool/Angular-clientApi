import{a as X}from"./chunk-DUDD5W7N.js";import{b as q,c as f,d as U,e as B,i as g,l as A,n as H,p as K,t as P,u as _,w as W,x as z}from"./chunk-GYD2A3BJ.js";import{$ as l,Bb as w,Bc as j,C,Db as I,Ea as y,H as F,Nb as E,O as m,P as u,Pa as a,Ya as S,Yc as k,Za as b,_ as p,_c as N,ed as T,gc as R,gd as M,hd as L,jd as O,kd as V,ma as d,pb as x,xa as i,ya as o,yc as D,za as s,zc as G}from"./chunk-6I37QHE2.js";import{f as Q}from"./chunk-TMEVGU2Q.js";var v=Q(X());var J=(()=>{let e=class e{constructor(){}loginSession(r,t){return r=="admin"&&t=="admin"?{message:"OK"}:{error:"OK"}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var $=()=>({"minWidth.%":44}),le=(()=>{let e=class e{constructor(r,t,c,h){this.utilitiesService=r,this.fb=t,this.route=c,this._router=h}ngOnInit(){this.loginForm=this.fb.group({user:new g(null,[f.required]),password:new g(null,[f.required])})}login(){if(this.loginForm.controls.user.value==""||this.loginForm.controls.user.value==null||this.loginForm.controls.password.value==""||this.loginForm.controls.password.value==null)v.default.fire({title:"ERROR",text:"Debe ingresar su Usuario y Contrase\xF1a, dejo alguno en blanco",icon:"error"});else{var r=this.utilitiesService.loginSession(this.loginForm.controls.user.value,this.loginForm.controls.password.value);r.hasOwnProperty("error")?v.default.fire({title:"ERROR",text:"Inicio de sesion incorrecto, Revise su Usuario y Contrase\xF1a.",icon:"error"}):(this.loginForm.reset(),this._router.navigate(["/dashboard"]))}}};e.\u0275fac=function(t){return new(t||e)(l(J),l(_),l(w),l(I))},e.\u0275cmp=F({type:e,selectors:[["app-login"]],standalone:!0,features:[S],decls:33,vars:3,consts:[[1,"bg-light","dark:bg-transparent","min-vh-100","d-flex","flex-row","align-items-center"],["breakpoint","md"],[1,"justify-content-center"],["lg","10","xl","8"],[1,"p-4"],["cForm","","autocomplete","off",3,"formGroup"],[1,"text-body-secondary"],[1,"mb-3"],["cInputGroupText",""],["cIcon","","name","cilUser"],["autoComplete","Usuario","required","","cFormControl","","placeholder","Usuario","formControlName","user"],[1,"mb-4"],["cIcon","","name","cilLockLocked"],["autoComplete","current-password","cFormControl","","required","","placeholder","Contrase\xF1a","type","password","formControlName","password"],["xs","6"],["cButton","","color","primary",1,"px-4",3,"click"],[1,"text-white","bg-primary","py-5",3,"ngStyle"],[1,"text-center","align-items-center"],[1,"mt-5"]],template:function(t,c){t&1&&(i(0,"div",0)(1,"c-container",1)(2,"c-row",2)(3,"c-col",3)(4,"c-card-group")(5,"c-card",4)(6,"c-card-body")(7,"form",5)(8,"h1"),a(9,"Inicio de Sesi\xF3n"),o(),i(10,"p",6),a(11,"Ingresa tus datos para continuar!"),o(),i(12,"c-input-group",7)(13,"span",8),m(),s(14,"svg",9),o(),u(),s(15,"input",10),o(),i(16,"c-input-group",11)(17,"span",8),m(),s(18,"svg",12),o(),u(),s(19,"input",13),o(),i(20,"c-row")(21,"c-col",14)(22,"button",15),y("click",function(){return c.login()}),a(23," Ingresar "),o()()()()()(),i(24,"c-card",16)(25,"c-card-body",17)(26,"div")(27,"h2"),a(28,"Prueba T\xE9cnica"),s(29,"br"),a(30,"Analista programador"),o(),i(31,"h3",18),a(32,"Luis Mora-2024"),o()()()()()()()()()),t&2&&(p(7),d("formGroup",c.loginForm),p(17),d("ngStyle",b(2,$)))},dependencies:[W,A,q,U,B,P,z,H,K,L,V,O,j,D,G,k,N,M,E,T,R,x]});let n=e;return n})();export{le as LoginComponent};
