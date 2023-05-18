import{S as A,i as H,s as L,q as z,a as w,r as u,d as f,u as k,f as c,g as M,v as Z,w as C,x as B,h as q,t as S,k as V,l as _,y as v,z as P,A as R,B as U,p as m}from"./index-8bd7a823.js";function j(i){let e=(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),""),l;return{c(){l=U(e)},m(r,a){c(r,l,a)},p:m,d(r){r&&_(l)}}}function D(i){let e;return{c(){e=u("path"),f(e,"d","M221.7,133.7l-72,72a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L196.7,136H40a8,8,0,0,1,0-16H196.7L138.3,61.7a8.1,8.1,0,0,1,11.4-11.4l72,72A8.1,8.1,0,0,1,221.7,133.7Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function E(i){let e;return{c(){e=u("path"),f(e,"d","M218.8,130.8l-72,72a3.9,3.9,0,0,1-5.6,0,3.9,3.9,0,0,1,0-5.6L206.3,132H40a4,4,0,0,1,0-8H206.3L141.2,58.8a4,4,0,0,1,5.6-5.6l72,72A3.9,3.9,0,0,1,218.8,130.8Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function F(i){let e;return{c(){e=u("path"),f(e,"d","M220.2,132.2l-72,72a5.9,5.9,0,0,1-8.4-8.4L201.5,134H40a6,6,0,0,1,0-12H201.5L139.8,60.2a5.9,5.9,0,0,1,8.4-8.4l72,72A5.8,5.8,0,0,1,220.2,132.2Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function G(i){let e;return{c(){e=u("path"),f(e,"d","M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function I(i){let e;return{c(){e=u("path"),f(e,"d","M221.7,133.7l-72,72a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L196.7,136H40a8,8,0,0,1,0-16H196.7L138.3,61.7a8.1,8.1,0,0,1,11.4-11.4l72,72A8.1,8.1,0,0,1,221.7,133.7Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function J(i){let e;return{c(){e=u("path"),f(e,"d","M224.5,136.5l-72,72a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17L187,140H40a12,12,0,0,1,0-24H187L135.5,64.5a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.5,136.5Z")},m(l,r){c(l,e,r)},p:m,d(l){l&&_(e)}}}function K(i){let e,l,r,a;const b=i[6].default,o=z(b,i,i[5],null);function h(t,s){return t[0]==="bold"?J:t[0]==="duotone"?I:t[0]==="fill"?G:t[0]==="light"?F:t[0]==="thin"?E:t[0]==="regular"?D:j}let d=h(i),n=d(i),p=[{xmlns:"http://www.w3.org/2000/svg"},{width:i[2]},{height:i[2]},{fill:i[1]},{transform:r=i[3]?"scale(-1, 1)":void 0},{viewBox:"0 0 256 256"},i[4]],g={};for(let t=0;t<p.length;t+=1)g=w(g,p[t]);return{c(){e=u("svg"),o&&o.c(),l=u("rect"),n.c(),f(l,"width","256"),f(l,"height","256"),f(l,"fill","none"),k(e,g)},m(t,s){c(t,e,s),o&&o.m(e,null),M(e,l),n.m(e,null),a=!0},p(t,[s]){o&&o.p&&(!a||s&32)&&Z(o,b,t,t[5],a?B(b,t[5],s,null):C(t[5]),null),d===(d=h(t))&&n?n.p(t,s):(n.d(1),n=d(t),n&&(n.c(),n.m(e,null))),k(e,g=q(p,[{xmlns:"http://www.w3.org/2000/svg"},(!a||s&4)&&{width:t[2]},(!a||s&4)&&{height:t[2]},(!a||s&2)&&{fill:t[1]},(!a||s&8&&r!==(r=t[3]?"scale(-1, 1)":void 0))&&{transform:r},{viewBox:"0 0 256 256"},s&16&&t[4]]))},i(t){a||(S(o,t),a=!0)},o(t){V(o,t),a=!1},d(t){t&&_(e),o&&o.d(t),n.d()}}}function N(i,e,l){const r=["weight","color","size","mirrored"];let a=v(e,r),{$$slots:b={},$$scope:o}=e;const h=P("iconCtx")||{};let{weight:d=h.weight??"regular"}=e,{color:n=h.color??"currentColor"}=e,{size:p=h.size??"1em"}=e,{mirrored:g=h.mirrored||!1}=e;return i.$$set=t=>{e=w(w({},e),R(t)),l(4,a=v(e,r)),"weight"in t&&l(0,d=t.weight),"color"in t&&l(1,n=t.color),"size"in t&&l(2,p=t.size),"mirrored"in t&&l(3,g=t.mirrored),"$$scope"in t&&l(5,o=t.$$scope)},[d,n,p,g,a,o,b]}class Q extends A{constructor(e){super(),H(this,e,N,K,L,{weight:0,color:1,size:2,mirrored:3})}}export{Q as A};
