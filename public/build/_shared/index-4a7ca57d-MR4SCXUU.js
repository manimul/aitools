import{a as Se}from"/build/_shared/chunk-TXWP6KMN.js";import{a as ve,b as _e,d as U}from"/build/_shared/chunk-XGBS4WV6.js";import{A as ee,B as te,C as ne,D as re,E as oe,F as ie,Hb as tt,Ia as C,Ka as D,Lb as ye,M as se,N as ce,Na as E,Nb as B,O as le,Oa as me,Ob as ge,Pa as N,Qa as k,Qc as nt,Sa as q,T as ae,U as Je,Ua as pe,Vb as Te,Wc as Ce,_ as ue,bb as fe,db as he,dd as be,ed as De,f as H,fd as je,g as V,gd as we,hc as Le,ic as Ie,id as xe,j as x,kc as Pe,kd as Ee,m as A,n as Y,o as G,od as Oe,p as $,pc as W,r as z,s as K,ta as de,u as X,vb as Ze,vc as Re,w as Q,x as J,y as Z,zb as et}from"/build/_shared/chunk-6ORFEM36.js";import"/build/_shared/chunk-2WXH3QX5.js";import"/build/_shared/chunk-BT6BK5OL.js";import"/build/_shared/chunk-LCNKOXSN.js";import"/build/_shared/chunk-WRAB7R2F.js";import{a as Xe,c as Qe}from"/build/_shared/chunk-TE2R5WIX.js";import{e as R}from"/build/_shared/chunk-ADMCF34Z.js";var r=R(Qe()),l=R(Xe());var $e=R(tt());var xt=R(et()),Et=R(nt()),Ot=R(Ze());var Ne=R(Je()),Fe=100,M=2e3,ke={by:[{field:"_updatedAt",direction:"desc"}]},rt={};function ot(e,o){return e._id?B(e._id):"item-".concat(o)}function it(e){return ge(e).map(o=>({...o.draft||o.published,hasPublished:!!o.published,hasDraft:!!o.draft}))}var st=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function ct(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.match(st);if(!n)return null;let t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){let c=t.slice(1),a=o[c];return typeof a=="string"?a:null}return t}function lt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function at(e){return e.map(o=>[ut(o),(o.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function ut(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function dt(e,o){let n=e.by.map(t=>{if(t.mapWith)return t;let c=mt(o,t.field);return c?ft(c,"datetime")?{...t,mapWith:"dateTime"}:c.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,c)=>t===e.by[c])?e:{...e,by:n}}function mt(e,o){let n=ae(o),t=e;for(let c of n){if(!t)return;if(typeof c=="string"){t=pt(t,c);continue}if(!(ce(c)||se(c))||t.jsonType!=="array")return;let[i,s]=t.of||[];if(s||!i)return;if(!le(i)){t=i;continue}let[f,h]=i.to||[];if(h||!f)return;t=f}return t}function pt(e,o){if(!("fields"in e))return;let n=e.fields.find(t=>t.name===o);return n?n.type:void 0}function ft(e,o){let n=e.type;for(;n;){if(n.name===o||!n.type&&n.jsonType===o)return!0;n=n.type}return!1}function ht(e){let{childItemId:o,error:n,filterIsSimpleTypeContraint:t,fullList:c,isActive:a,isLoading:i,items:s,layout:f,onListChange:h,onRetry:u,showIcons:y}=e,S=W(),{collapsed:P}=be(),{collapsed:I,index:g}=je(),[v,_]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(I)return;let d=setTimeout(()=>{_(!0)},0);return()=>{clearTimeout(d)}},[I]);let T=(0,l.useCallback)(d=>{let L=B(d._id),m=o===L;return(0,r.jsx)(Se,{icon:y===!1?!1:void 0,id:L,pressed:!a&&m,selected:a&&m,layout:f,schemaType:S.get(d._type),value:d})},[o,a,f,S,y]),p=(0,l.useMemo)(()=>{if(!v)return null;if(n)return(0,r.jsx)(E,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,r.jsx)(q,{width:1,children:(0,r.jsxs)(he,{paddingX:4,paddingY:5,space:4,children:[(0,r.jsx)(pe,{as:"h3",children:"Could not fetch list items"}),(0,r.jsxs)(C,{as:"p",children:["Error: ",(0,r.jsx)("code",{children:n.message})]}),u&&(0,r.jsx)(D,{children:(0,r.jsx)(N,{icon:de,onClick:u,text:"Retry",tone:"primary"})})]})})});if(s===null)return(0,r.jsx)(E,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,r.jsx)(ve,{ms:300,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(me,{muted:!0}),(0,r.jsx)(D,{marginTop:3,children:(0,r.jsx)(C,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!i&&s.length===0)return(0,r.jsx)(E,{align:"center",direction:"column",height:"fill",justify:"center",children:(0,r.jsx)(q,{width:1,children:(0,r.jsx)(D,{paddingX:4,paddingY:5,children:(0,r.jsx)(C,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});let d=c&&s.length===M;return(0,r.jsxs)(D,{padding:2,children:[s.length>0&&(0,r.jsx)(fe,{gap:1,getItemKey:ot,items:s,renderItem:T,onChange:h},"".concat(g,"-").concat(I)),i&&(0,r.jsx)(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:(0,r.jsx)(C,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),d&&(0,r.jsx)(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:(0,r.jsxs)(C,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",M," documents"]})})]})},[n,t,c,h,i,s,u,T,v,I,g]);return(0,r.jsx)(we,{overflow:P?void 0:"auto",children:p})}var qe=(0,l.memo)(e=>{let{index:o,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:c=[],setLayout:a,setSortOrder:i,title:s}=e,{features:f}=_e(),h=(0,l.useMemo)(()=>({setLayout:u=>{let{layout:y}=u;a(y)},setSortOrder:u=>{i(u)}}),[a,i]);return(0,r.jsx)(xe,{backButton:f.backButton&&o>0&&(0,r.jsx)(N,{as:Ce,"data-as":"a",icon:ue,mode:"bleed"}),title:s,actions:(0,r.jsx)(Ee,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:c,menuItems:t})})});qe.displayName="DocumentListPaneHeader";var yt={result:null,error:!1},gt=e=>({result:{documents:e},loading:!1,error:!1}),Tt=e=>({result:null,loading:!1,error:e}),Lt=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new V,t=n.next.bind(n);return e.pipe(A(i=>({client:i.client,query:i.query,params:i.params})),J(Ne.default),ee(1),H()).pipe(oe(i=>{let s=Re(i.client,i.query,i.params,o).pipe(A(gt),ne());return $(x({loading:!0}).pipe(Q(400),ie(s)),s)})).pipe(re(yt),K((i,s)=>Y(x(Tt(i)),$(G(window,"online"),n).pipe(X(1),Z(s)))),te((i,s)=>({...i,...s,onRetry:t})))};function It(e){var o;let{apiVersion:n,filter:t,params:c,sortOrder:a}=e,i=Pe(Te),[s,f]=(0,l.useState)(!1),h=(0,l.useRef)(s),[u,y]=(0,l.useState)(null),S=u?.error||null,P=u?.loading||u===null,I=u?.onRetry,g=(o=u?.result)==null?void 0:o.documents,v=(0,l.useMemo)(()=>g?it(g):null,[g]),_=(0,l.useMemo)(()=>{let p=a?.extendedProjection,d=["_id","_type"],L=d.join(","),m=a?.by||[],b=s?M:Fe,j=m.length>0?m:ke.by,w=at(j);if(p){let O=d.concat(p).join(",");return["*[".concat(t,"] {").concat(O,"}"),"order(".concat(w,") [0...").concat(b,"]"),"{".concat(L,"}")].join("|")}return"*[".concat(t,"]|order(").concat(w,")[0...").concat(b,"]{").concat(L,"}")},[t,s,a]),T=(0,l.useCallback)(p=>{let{toIndex:d}=p;P||h.current||d>=Fe/2&&(f(!0),h.current=!0)},[P]);return(0,l.useEffect)(()=>{let p=s?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);let L=Lt(x({client:i,query:_,params:c}),{apiVersion:n,tag:"desk.document-list"}).pipe(z(p)).subscribe(y);return()=>L.unsubscribe()},[n,i,s,_,c]),(0,l.useEffect)(()=>{y(null),f(!1),h.current=!1},[t,c,a,n]),{error:S,fullList:s,handleListChange:T,isLoading:P,items:v,onRetry:I}}var Ae=[];function Pt(e){let o=(0,l.useRef)(e);return(0,$e.default)(o.current,e)||(o.current=e),o.current}var Nt=(0,l.memo)(function(o){let{childItemId:n,index:t,isActive:c,isSelected:a,pane:i,paneKey:s}=o,f=W(),{name:h}=Ie(),{defaultLayout:u="default",displayOptions:y,initialValueTemplates:S=Ae,menuItems:P,menuItemGroups:I,options:g,title:v}=i,{apiVersion:_,defaultOrdering:T=Ae,filter:p}=g,d=Pt(g.params||rt),L=i.source,m=(0,l.useMemo)(()=>ct(p,d),[p,d]),b=y?.showIcons!==!1,[j,w]=U(m,"layout",u),O=(0,l.useMemo)(()=>T?.length>0?{by:T}:ke,[T]),[F,Be]=U(m,"sortOrder",O),We=m&&F?dt(F,f.get(m)):F,Ue=ye(We),Me=lt(p),{error:He,fullList:Ve,handleListChange:Ye,isLoading:Ge,items:ze,onRetry:Ke}=It({filter:p,params:d,sortOrder:Ue,apiVersion:_});return(0,r.jsx)(Le,{name:L||h,children:(0,r.jsxs)(De,{currentMaxWidth:350,id:s,maxWidth:640,minWidth:320,selected:a,children:[Oe,(0,r.jsx)(qe,{index:t,initialValueTemplates:S,menuItems:P,menuItemGroups:I,setLayout:w,setSortOrder:Be,title:v}),(0,r.jsx)(ht,{childItemId:n,error:He,filterIsSimpleTypeContraint:Me,fullList:Ve,isActive:c,isLoading:Ge,items:ze,layout:j,onListChange:Ye,onRetry:Ke,showIcons:b})]})})});export{Nt as default};
