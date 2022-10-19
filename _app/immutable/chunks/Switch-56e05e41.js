import{S as Ee,i as Ce,s as ye,U as J,k as M,a as z,l as R,m as O,h as D,c as H,n as I,V as K,b as ee,C as w,W as X,D as De,X as he,Y as $,A as ne,Z as Se,_ as ae,$ as we,a3 as Oe,o as Ie,a0 as ke,R as W,T as q,H as le}from"./index-02bf3165.js";import{a as Pe,g as Y,_ as te,e as Me,b as Re,M as Le,c as Q,u as ve,f as Fe,d as N}from"./useActions-655c657c.js";import{e as oe,p as ce}from"./prefixFilter-4c6b67e2.js";import{R as Te}from"./Ripple-60a26aae.js";/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F;(function(s){s.PROCESSING="mdc-switch--processing",s.SELECTED="mdc-switch--selected",s.UNSELECTED="mdc-switch--unselected"})(F||(F={}));var ue;(function(s){s.RIPPLE=".mdc-switch__ripple"})(ue||(ue={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ue(s,e,t){var r=Ve(s,e),n=r.getObservers(e);return n.push(t),function(){n.splice(n.indexOf(t),1)}}var Z=new WeakMap;function Ve(s,e){var t=new Map;Z.has(s)||Z.set(s,{isEnabled:!0,getObservers:function(u){var _=t.get(u)||[];return t.has(u)||t.set(u,_),_},installedProperties:new Set});var r=Z.get(s);if(r.installedProperties.has(e))return r;var n=Ae(s,e)||{configurable:!0,enumerable:!0,value:s[e],writable:!0},o=Pe({},n),v=n.get,g=n.set;if("value"in n){delete o.value,delete o.writable;var b=n.value;v=function(){return b},n.writable&&(g=function(u){b=u})}return v&&(o.get=function(){return v.call(this)}),g&&(o.set=function(u){var _,m,E=v?v.call(this):u;if(g.call(this,u),r.isEnabled&&(!v||u!==E))try{for(var c=Y(r.getObservers(e)),a=c.next();!a.done;a=c.next()){var d=a.value;d(u,E)}}catch(h){_={error:h}}finally{try{a&&!a.done&&(m=c.return)&&m.call(c)}finally{if(_)throw _.error}}}),r.installedProperties.add(e),Object.defineProperty(s,e,o),r}function Ae(s,e){for(var t=s,r;t&&(r=Object.getOwnPropertyDescriptor(t,e),!r);)t=Object.getPrototypeOf(t);return r}function Ge(s,e){var t=Z.get(s);t&&(t.isEnabled=e)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Be=function(s){te(e,s);function e(t){var r=s.call(this,t)||this;return r.unobserves=new Set,r}return e.prototype.destroy=function(){s.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,r){var n,o,v=this,g=[];try{for(var b=Y(Object.keys(r)),u=b.next();!u.done;u=b.next()){var _=u.value,m=r[_].bind(this);g.push(this.observeProperty(t,_,m))}}catch(c){n={error:c}}finally{try{u&&!u.done&&(o=b.return)&&o.call(b)}finally{if(n)throw n.error}}var E=function(){var c,a;try{for(var d=Y(g),h=d.next();!h.done;h=d.next()){var L=h.value;L()}}catch(p){c={error:p}}finally{try{h&&!h.done&&(a=d.return)&&a.call(d)}finally{if(c)throw c.error}}v.unobserves.delete(E)};return this.unobserves.add(E),E},e.prototype.observeProperty=function(t,r,n){return Ue(t,r,n)},e.prototype.setObserversEnabled=function(t,r){Ge(t,r)},e.prototype.unobserve=function(){var t,r;try{for(var n=Y(Me([],Re(this.unobserves))),o=n.next();!o.done;o=n.next()){var v=o.value;v()}}catch(g){t={error:g}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e}(Le);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var je=function(s){te(e,s);function e(t){var r=s.call(this,t)||this;return r.handleClick=r.handleClick.bind(r),r}return e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(Be),ze=function(s){te(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.init=function(){s.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(F.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(F.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,F.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,F.SELECTED),this.toggleClass(!this.adapter.state.selected,F.UNSELECTED)},e.prototype.toggleClass=function(t,r){t?this.adapter.addClass(r):this.adapter.removeClass(r)},e}(je);function de(s){let e,t,r,n,o,v,g,b,u,_,m=[{class:g=Q({[s[8]]:!0,"mdc-switch__icons":!0})},ce(s[19],"icons$")],E={};for(let c=0;c<m.length;c+=1)E=J(E,m[c]);return{c(){e=M("div"),t=W("svg"),r=W("path"),n=z(),o=W("svg"),v=W("path"),this.h()},l(c){e=R(c,"DIV",{class:!0});var a=O(e);t=q(a,"svg",{class:!0,viewBox:!0});var d=O(t);r=q(d,"path",{d:!0}),O(r).forEach(D),d.forEach(D),n=H(a),o=q(a,"svg",{class:!0,viewBox:!0});var h=O(o);v=q(h,"path",{d:!0}),O(v).forEach(D),h.forEach(D),a.forEach(D),this.h()},h(){I(r,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),I(t,"class","mdc-switch__icon mdc-switch__icon--on"),I(t,"viewBox","0 0 24 24"),I(v,"d","M20 13H4v-2h16v2z"),I(o,"class","mdc-switch__icon mdc-switch__icon--off"),I(o,"viewBox","0 0 24 24"),K(e,E)},m(c,a){ee(c,e,a),w(e,t),w(t,r),w(e,n),w(e,o),w(o,v),u||(_=X(b=ve.call(null,e,s[7])),u=!0)},p(c,a){K(e,E=he(m,[a[0]&256&&g!==(g=Q({[c[8]]:!0,"mdc-switch__icons":!0}))&&{class:g},a[0]&524288&&ce(c[19],"icons$")])),b&&$(b.update)&&a[0]&128&&b.update.call(null,c[7])},d(c){c&&D(e),u=!1,_()}}}function fe(s){let e,t;return{c(){e=M("div"),t=M("div"),this.h()},l(r){e=R(r,"DIV",{class:!0});var n=O(e);t=R(n,"DIV",{class:!0}),O(t).forEach(D),n.forEach(D),this.h()},h(){I(t,"class","mdc-switch__focus-ring"),I(e,"class","mdc-switch__focus-ring-wrapper")},m(r,n){ee(r,e,n),w(e,t)},d(r){r&&D(e)}}}function He(s){let e,t,r,n,o,v,g,b,u,_,m,E,c,a,d,h,L,p=s[6]&&de(s),C=s[4]&&fe(),T=[{class:E=Q({[s[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!s[10],"mdc-switch--selected":s[10],"mdc-switch--processing":s[1],"smui-switch--color-secondary":s[5]==="secondary",...s[12]})},{type:"button"},{role:"switch"},{"aria-checked":c=s[10]?"true":"false"},{disabled:s[0]},s[16],oe(s[19],["icons$"])],y={};for(let l=0;l<T.length;l+=1)y=J(y,T[l]);return{c(){e=M("button"),t=M("div"),r=z(),n=M("div"),o=M("div"),v=M("div"),g=M("div"),b=z(),u=M("div"),_=z(),p&&p.c(),m=z(),C&&C.c(),this.h()},l(l){e=R(l,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var f=O(e);t=R(f,"DIV",{class:!0}),O(t).forEach(D),r=H(f),n=R(f,"DIV",{class:!0});var U=O(n);o=R(U,"DIV",{class:!0});var P=O(o);v=R(P,"DIV",{class:!0});var V=O(v);g=R(V,"DIV",{class:!0}),O(g).forEach(D),V.forEach(D),b=H(P),u=R(P,"DIV",{class:!0}),O(u).forEach(D),_=H(P),p&&p.l(P),P.forEach(D),U.forEach(D),m=H(f),C&&C.l(f),f.forEach(D),this.h()},h(){I(t,"class","mdc-switch__track"),I(g,"class","mdc-elevation-overlay"),I(v,"class","mdc-switch__shadow"),I(u,"class","mdc-switch__ripple"),I(o,"class","mdc-switch__handle"),I(n,"class","mdc-switch__handle-track"),K(e,y)},m(l,f){ee(l,e,f),w(e,t),w(e,r),w(e,n),w(n,o),w(o,v),w(v,g),w(o,b),w(o,u),s[28](u),w(o,_),p&&p.m(o,null),w(e,m),C&&C.m(e,null),e.autofocus&&e.focus(),s[29](e),h||(L=[X(a=ve.call(null,e,s[2])),X(s[15].call(null,e)),X(d=Te.call(null,e,{unbounded:!0,color:s[5],active:s[14],rippleElement:s[13],disabled:s[0],addClass:s[17],removeClass:s[18]})),De(e,"click",s[30])],h=!0)},p(l,f){l[6]?p?p.p(l,f):(p=de(l),p.c(),p.m(o,null)):p&&(p.d(1),p=null),l[4]?C||(C=fe(),C.c(),C.m(e,null)):C&&(C.d(1),C=null),K(e,y=he(T,[f[0]&5162&&E!==(E=Q({[l[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!l[10],"mdc-switch--selected":l[10],"mdc-switch--processing":l[1],"smui-switch--color-secondary":l[5]==="secondary",...l[12]}))&&{class:E},{type:"button"},{role:"switch"},f[0]&1024&&c!==(c=l[10]?"true":"false")&&{"aria-checked":c},f[0]&1&&{disabled:l[0]},l[16],f[0]&524288&&oe(l[19],["icons$"])])),a&&$(a.update)&&f[0]&4&&a.update.call(null,l[2]),d&&$(d.update)&&f[0]&24609&&d.update.call(null,{unbounded:!0,color:l[5],active:l[14],rippleElement:l[13],disabled:l[0],addClass:l[17],removeClass:l[18]})},i:ne,o:ne,d(l){l&&D(e),s[28](null),p&&p.d(),C&&C.d(),s[29](null),h=!1,Se(L)}}}function We(s,e,t){const r=["use","class","disabled","focusRing","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let n=ae(e,r);var o;const v=Fe(we());let g=()=>{};function b(i){return i===g}let{use:u=[]}=e,{class:_=""}=e,{disabled:m=!1}=e,{focusRing:E=!1}=e,{color:c="primary"}=e,{group:a=g}=e,{checked:d=g}=e,{value:h=null}=e,{processing:L=!1}=e,{icons:p=!0}=e,{icons$use:C=[]}=e,{icons$class:T=""}=e,y,l,f={},U,P=!1,V=(o=Oe("SMUI:generic:input:props"))!==null&&o!==void 0?o:{},S=b(a)?b(d)?!1:d:a.indexOf(h)!==-1,G={get disabled(){return m},set disabled(i){t(0,m=i)},get processing(){return L},set processing(i){t(1,L=i)},get selected(){return S},set selected(i){t(10,S=i)}},B=d,j=b(a)?[]:[...a],A=S;Ie(()=>{t(11,l=new ze({addClass:se,hasClass:ge,isDisabled:()=>m,removeClass:ie,setAriaChecked:()=>{},setDisabled:k=>{t(0,m=k)},state:G}));const i={get element(){return x()},get checked(){return S},set checked(k){S!==k&&(G.selected=k,y&&N(y,"SMUISwitch:change",{selected:k,value:h}))},activateRipple(){m||t(14,P=!0)},deactivateRipple(){t(14,P=!1)}};return N(y,"SMUIGenericInput:mount",i),l.init(),l.initFromDOM(),()=>{N(y,"SMUIGenericInput:unmount",i),l.destroy()}});function ge(i){return i in f?f[i]:x().classList.contains(i)}function se(i){f[i]||t(12,f[i]=!0,f)}function ie(i){(!(i in f)||f[i])&&t(12,f[i]=!1,f)}function be(){return V&&V.id}function x(){return y}function pe(i){le[i?"unshift":"push"](()=>{U=i,t(13,U)})}function me(i){le[i?"unshift":"push"](()=>{y=i,t(9,y)})}const _e=()=>l&&l.handleClick();return s.$$set=i=>{e=J(J({},e),ke(i)),t(19,n=ae(e,r)),"use"in i&&t(2,u=i.use),"class"in i&&t(3,_=i.class),"disabled"in i&&t(0,m=i.disabled),"focusRing"in i&&t(4,E=i.focusRing),"color"in i&&t(5,c=i.color),"group"in i&&t(20,a=i.group),"checked"in i&&t(21,d=i.checked),"value"in i&&t(22,h=i.value),"processing"in i&&t(1,L=i.processing),"icons"in i&&t(6,p=i.icons),"icons$use"in i&&t(7,C=i.icons$use),"icons$class"in i&&t(8,T=i.icons$class)},s.$$.update=()=>{if(s.$$.dirty[0]&242222592){let i=!1;if(!b(a))if(A!==S){const k=a.indexOf(h);S&&k===-1?(a.push(h),t(20,a),t(27,A),t(10,S),t(22,h),t(26,j),t(21,d),t(25,B),t(9,y)):!S&&k!==-1&&(a.splice(k,1),t(20,a),t(27,A),t(10,S),t(22,h),t(26,j),t(21,d),t(25,B),t(9,y)),i=!0}else{const k=j.indexOf(h),re=a.indexOf(h);k>-1&&re===-1?G.selected=!1:re>-1&&k===-1&&(G.selected=!0)}b(d)?A!==S&&(i=!0):d!==S&&(d===B?(t(21,d=S),i=!0):G.selected=d),t(25,B=d),t(26,j=b(a)?[]:[...a]),t(27,A=S),i&&y&&N(y,"SMUISwitch:change",{selected:S,value:h})}},[m,L,u,_,E,c,p,C,T,y,S,l,f,U,P,v,V,se,ie,n,a,d,h,be,x,B,j,A,pe,me,_e]}class Ze extends Ee{constructor(e){super(),Ce(this,e,We,He,ye,{use:2,class:3,disabled:0,focusRing:4,color:5,group:20,checked:21,value:22,processing:1,icons:6,icons$use:7,icons$class:8,getId:23,getElement:24},null,[-1,-1])}get getId(){return this.$$.ctx[23]}get getElement(){return this.$$.ctx[24]}}export{Ze as S};
