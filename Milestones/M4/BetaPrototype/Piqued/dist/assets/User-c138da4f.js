import{S as ee,i as te,s as le,e as f,a as g,A as I,b as n,Z as M,d as J,f as a,_ as R,$ as V,J as ae,g as h,K as se,t as w,h as K,X as re,L as ne,a0 as ie,c as P,m as T,Q as W,a1 as Y,a2 as x,j as U,a3 as z}from"./index-2614f849.js";/* empty css                                          */import{C as A}from"./Card-3d404ad7.js";import"./Tag-e62cd69d.js";function oe(i){let e,l,c,s,r,o,d;return l=new A({}),s=new A({}),{c(){e=f("div"),P(l.$$.fragment),c=g(),P(s.$$.fragment),n(e,"class","articles svelte-tquyd4")},m(t,b){J(t,e,b),T(l,e,null),a(e,c),T(s,e,null),d=!0},i(t){d||(w(l.$$.fragment,t),w(s.$$.fragment,t),W(()=>{d&&(o&&o.end(1),r=Y(e,z,{x:-10,duration:250,delay:300}),r.start())}),d=!0)},o(t){h(l.$$.fragment,t),h(s.$$.fragment,t),r&&r.invalidate(),o=x(e,z,{x:-10,duration:250}),d=!1},d(t){t&&K(e),U(l),U(s),t&&o&&o.end()}}}function ue(i){let e,l,c,s,r,o,d;return l=new A({}),s=new A({}),{c(){e=f("div"),P(l.$$.fragment),c=g(),P(s.$$.fragment),n(e,"class","articles svelte-tquyd4")},m(t,b){J(t,e,b),T(l,e,null),a(e,c),T(s,e,null),d=!0},i(t){d||(w(l.$$.fragment,t),w(s.$$.fragment,t),W(()=>{d&&(o&&o.end(1),r=Y(e,z,{x:10,duration:250,delay:300}),r.start())}),d=!0)},o(t){h(l.$$.fragment,t),h(s.$$.fragment,t),r&&r.invalidate(),o=x(e,z,{x:10,duration:250}),d=!1},d(t){t&&K(e),U(l),U(s),t&&o&&o.end()}}}function ce(i){let e,l,c,s,r,o,d,t,b,$,k,L,m,N,Q,S,X,j,p,Z,H,B,_,v,q,E,D;const G=[ue,oe],y=[];function O(u,C){return u[0]==`/user/${u[1]}#liked`?0:1}return _=O(i),v=y[_]=G[_](i),{c(){e=f("div"),l=f("div"),c=f("div"),c.innerHTML='<img src="../img/burger.jpg" alt="profile picture" width="300" height="200" loading="lazy" class="svelte-tquyd4"/>',s=g(),r=f("div"),o=f("h2"),o.textContent=`${i[1]}`,d=g(),t=f("div"),t.innerHTML=`<p>Full name</p> 
                <p>Email</p>`,b=g(),$=f("div"),k=f("ul"),L=f("li"),m=f("a"),N=I(i[1]),Q=I("'s Posts"),X=g(),j=f("li"),p=f("a"),Z=I("Liked Posts"),B=g(),v.c(),n(c,"class","account-image svelte-tquyd4"),n(t,"class","info-section svelte-tquyd4"),n(t,"id","contact"),n(r,"class","info svelte-tquyd4"),n(l,"class","main-account svelte-tquyd4"),n(m,"href","/user/"+i[1]),n(m,"class",S=M(i[0]==`/user/${i[1]}`?"active":"")+" svelte-tquyd4"),n(L,"class","svelte-tquyd4"),n(p,"href","/user/"+i[1]+"#liked"),n(p,"class",H=M(i[0]==`/user/${i[1]}#liked`?"active":"")+" svelte-tquyd4"),n(j,"class","svelte-tquyd4"),n(k,"class","tab-bar svelte-tquyd4"),n($,"class","post-container"),n(e,"class","biopage svelte-tquyd4")},m(u,C){J(u,e,C),a(e,l),a(l,c),a(l,s),a(l,r),a(r,o),a(r,d),a(r,t),a(e,b),a(e,$),a($,k),a(k,L),a(L,m),a(m,N),a(m,Q),a(k,X),a(k,j),a(j,p),a(p,Z),a($,B),y[_].m($,null),q=!0,E||(D=[R(V.call(null,m)),R(V.call(null,p))],E=!0)},p(u,[C]){(!q||C&1&&S!==(S=M(u[0]==`/user/${u[1]}`?"active":"")+" svelte-tquyd4"))&&n(m,"class",S),(!q||C&1&&H!==(H=M(u[0]==`/user/${u[1]}#liked`?"active":"")+" svelte-tquyd4"))&&n(p,"class",H);let F=_;_=O(u),_!==F&&(ae(),h(y[F],1,1,()=>{y[F]=null}),se(),v=y[_],v||(v=y[_]=G[_](u),v.c()),w(v,1),v.m($,null))},i(u){q||(w(v),q=!0)},o(u){h(v),q=!1},d(u){u&&K(e),y[_].d(),E=!1,re(D)}}}function de(i,e,l){let c;ne(i,ie,r=>l(0,c=r)),console.log(c);let s=localStorage.getItem("username");return[c,s]}class $e extends ee{constructor(e){super(),te(this,e,de,ce,le,{})}}export{$e as default};