import{S as J,i as K,s as O,G as Q,e as l,b as i,c as T,d as o,Z as R,f as h,g as e,m as A,t as k,k as q,l as v,n as D,A as L}from"./index-aabb09f3.js";import{T as I}from"./Tag-7af25cac.js";function V($){let t;return{c(){t=L("card-tag1")},m(s,r){h(s,t,r)},d(s){s&&v(t)}}}function W($){let t;return{c(){t=L("card-tag2")},m(s,r){h(s,t,r)},d(s){s&&v(t)}}}function X($){let t;return{c(){t=L("Like")},m(s,r){h(s,t,r)},d(s){s&&v(t)}}}function Y($){let t,s,r,M,g,f,S,u,j,x,B,n,m,G,H,C,N,b,P,w,U,p,Z,d,_;return f=new I({props:{type:"tag",$$slots:{default:[V]},$$scope:{ctx:$}}}),u=new I({props:{type:"tag",$$slots:{default:[W]},$$scope:{ctx:$}}}),p=new Q({props:{$$slots:{default:[X]},$$scope:{ctx:$}}}),{c(){t=l("div"),s=l("div"),r=l("h1"),r.textContent="Post Title",M=i(),g=l("div"),T(f.$$.fragment),S=i(),T(u.$$.fragment),j=i(),x=l("div"),B=i(),n=l("div"),m=l("img"),H=i(),C=l("h1"),C.textContent="Author Name",N=i(),b=l("p"),b.textContent="Date Uploaded :",P=i(),w=l("p"),w.textContent="Date Modified :",U=i(),T(p.$$.fragment),Z=i(),d=l("div"),d.innerHTML="<h1>Comments</h1>",o(g,"class","tags"),o(s,"class","post-title"),o(x,"class","article-information"),R(m.src,G="../img/burger.jpg")||o(m,"src",G),o(m,"alt","description of image"),o(m,"width","30"),o(m,"height","20"),o(n,"class","author"),o(d,"class","comments"),o(t,"class","article-page")},m(a,c){h(a,t,c),e(t,s),e(s,r),e(s,M),e(s,g),A(f,g,null),e(g,S),A(u,g,null),e(t,j),e(t,x),e(t,B),e(t,n),e(n,m),e(n,H),e(n,C),e(n,N),e(n,b),e(n,P),e(n,w),e(n,U),A(p,n,null),e(t,Z),e(t,d),_=!0},p(a,[c]){const z={};c&1&&(z.$$scope={dirty:c,ctx:a}),f.$set(z);const E={};c&1&&(E.$$scope={dirty:c,ctx:a}),u.$set(E);const F={};c&1&&(F.$$scope={dirty:c,ctx:a}),p.$set(F)},i(a){_||(k(f.$$.fragment,a),k(u.$$.fragment,a),k(p.$$.fragment,a),_=!0)},o(a){q(f.$$.fragment,a),q(u.$$.fragment,a),q(p.$$.fragment,a),_=!1},d(a){a&&v(t),D(f),D(u),D(p)}}}class et extends J{constructor(t){super(),K(this,t,null,Y,O,{})}}export{et as default};