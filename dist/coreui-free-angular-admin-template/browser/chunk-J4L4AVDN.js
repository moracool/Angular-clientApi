import{w,x as G}from"./chunk-GYD2A3BJ.js";import{$ as c,Cc as F,Fa as h,H as l,Ic as I,Ja as g,Pa as e,Y as p,Ya as T,_ as a,_d as E,hd as P,ia as s,ja as C,jd as d,ka as f,kd as S,md as B,pc as _,ua as x,ub as M,va as u,wa as v,xa as t,ya as o,yc as b,za as D,zc as y}from"./chunk-6I37QHE2.js";import"./chunk-TMEVGU2Q.js";var O=()=>[d];function A(i,n){if(i&1&&(e(0,`
                        `),t(1,"c-col",4),D(2,"img",5),o(),e(3,`
                        `)),i&2){let L=h().$implicit;a(2),g("src","assets/photos/",L,"",p)}}function R(i,n){i&1&&(e(0,`
                        `),s(1,A,4,2),C(2,1,O),f())}var J=(()=>{let n=class n{constructor(r){this.listPhotos=[],this.httpClient=r}ngOnInit(){this.list()}list(){this.httpClient.get("assets/photos/index.txt",{responseType:"text"}).subscribe({next:r=>{this.listPhotos=r.split(/\r?\n/)},error:r=>console.error(r)})}};n.\u0275fac=function(m){return new(m||n)(c(M))},n.\u0275cmp=l({type:n,selectors:[["app-photos"]],standalone:!0,features:[T],decls:24,vars:0,consts:[["xs","12"],[1,"mb-4"],["fluid",""],[1,"products-grid"],["xs","12","sm","6","md","4","lg","3",1,"item"],["cImg","","rounded","","height","200","width","200",3,"src"]],template:function(m,H){m&1&&(t(0,"c-row"),e(1,`  

    `),e(2,`
      `),t(3,"c-col",0),e(4,`
        `),t(5,"c-card",1),e(6,`
          `),t(7,"c-card-header"),e(8,"Lista de Fotos"),o(),e(9,`
          `),t(10,"c-card-body"),e(11,`         
            `),e(12,`
            
            `),t(13,"c-container",2),e(14,`
                `),t(15,"c-row",3),e(16,`                    
                    `),u(17,R,4,0,null,null,x),o(),e(19,`   
            `),o(),e(20,`
           

            `),o(),e(21,`
`),o(),e(22,`

`),o(),e(23,`
`),o()),m&2&&(a(17),v(H.listPhotos))},dependencies:[B,d,P,S,w,G,I,b,y,F,E,_],styles:[".products-grid[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{float:left;text-align:center;margin-bottom:0;border:1px solid #f3f3f3}"]});let i=n;return i})();export{J as PhotosComponent};
