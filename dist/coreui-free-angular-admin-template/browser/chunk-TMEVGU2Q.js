var r=Object.create;var h=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,w=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;var o=a=>{throw TypeError(a)};var m=(a,b,c)=>b in a?h(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,y=(a,b)=>{for(var c in b||={})k.call(b,c)&&m(a,c,b[c]);if(g)for(var c of g(b))n.call(b,c)&&m(a,c,b[c]);return a},z=(a,b)=>s(a,u(b));var A=(a,b)=>{var c={};for(var d in a)k.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&g)for(var d of g(a))b.indexOf(d)<0&&n.call(a,d)&&(c[d]=a[d]);return c};var B=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),C=(a,b)=>{for(var c in b)h(a,c,{get:b[c],enumerable:!0})},x=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of v(b))!k.call(a,e)&&e!==c&&h(a,e,{get:()=>b[e],enumerable:!(d=t(b,e))||d.enumerable});return a};var D=(a,b,c)=>(c=a!=null?r(w(a)):{},x(b||!a||!a.__esModule?h(c,"default",{value:a,enumerable:!0}):c,a));var l=(a,b,c)=>b.has(a)||o("Cannot "+c);var E=(a,b,c)=>(l(a,b,"read from private field"),c?c.call(a):b.get(a)),F=(a,b,c)=>b.has(a)?o("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),G=(a,b,c,d)=>(l(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),H=(a,b,c)=>(l(a,b,"access private method"),c);var I=(a,b,c)=>new Promise((d,e)=>{var p=f=>{try{i(c.next(f))}catch(j){e(j)}},q=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(p,q);i((c=c.apply(a,b)).next())});export{y as a,z as b,A as c,B as d,C as e,D as f,E as g,F as h,G as i,H as j,I as k};
