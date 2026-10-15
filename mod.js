// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r){return n<0?(n+=r+1)<0?-1:n:n>r?-1:n}function r(r,t){var u,e,f,o;for(u={},e=[],o=0;o<r.length;o++){if((f=n(r[o],t))<0)return null;void 0===u[f]&&(u[f]=!0,e.push(f))}return e}export{r as default};
//# sourceMappingURL=mod.js.map
