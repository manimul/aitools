import{d as T}from"/build/_shared/chunk-ADMCF34Z.js";var U=["Value","Copy","Blank","ReturnIntoArray","ReturnIntoObject","ReturnIntoObjectSameKey","PushField","PushElement","PushParent","Pop","PushFieldCopy","PushFieldBlank","PushElementCopy","PushElementBlank","ReturnIntoObjectPop","ReturnIntoObjectSameKeyPop","ReturnIntoArrayPop","ObjectSetFieldValue","ObjectCopyField","ObjectDeleteField","ArrayAppendValue","ArrayAppendSlice","StringAppendString","StringAppendSlice"],k=function(){function e(t,r,n){this.i=0,this.inputStack=[],this.outputStack=[],this.model=t,this.root=r,this.patch=n}return e.prototype.read=function(){return this.patch[this.i++]},e.prototype.process=function(){for(this.inputStack.push({value:this.root}),this.outputStack.push({value:this.root});this.i<this.patch.length;){var t=this.read(),r=U[t];if(!r)throw new Error("Unknown opcode: "+t);var n="process"+r;this[n].apply(this)}var o=this.outputStack.pop();return this.finalizeOutput(o)},e.prototype.inputEntry=function(){return this.inputStack[this.inputStack.length-1]},e.prototype.inputKey=function(t,r){return t.keys||(t.keys=this.model.objectGetKeys(t.value).sort()),t.keys[r]},e.prototype.outputEntry=function(){return this.outputStack[this.outputStack.length-1]},e.prototype.outputArray=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyArray(t.value)),t.writeValue},e.prototype.outputObject=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyObject(t.value)),t.writeValue},e.prototype.outputString=function(){var t=this.outputEntry();return t.writeValue||(t.writeValue=this.model.copyString(t.value)),t.writeValue},e.prototype.finalizeOutput=function(t){return t.writeValue?this.model.finalize(t.writeValue):t.value},e.prototype.processValue=function(){var t=this.model.wrap(this.read());this.outputStack.push({value:t})},e.prototype.processCopy=function(){var t=this.inputEntry();this.outputStack.push({value:t.value})},e.prototype.processBlank=function(){this.outputStack.push({value:null})},e.prototype.processReturnIntoArray=function(){var t=this.outputStack.pop(),r=this.finalizeOutput(t),n=this.outputArray();this.model.arrayAppendValue(n,r)},e.prototype.processReturnIntoObject=function(){var t=this.read(),r=this.outputStack.pop(),n=this.finalizeOutput(r);n=this.model.markChanged(n);var o=this.outputObject();this.model.objectSetField(o,t,n)},e.prototype.processReturnIntoObjectSameKey=function(){var t=this.inputEntry(),r=this.outputStack.pop(),n=this.finalizeOutput(r),o=this.outputObject();this.model.objectSetField(o,t.key,n)},e.prototype.processPushField=function(){var t=this.read(),r=this.inputEntry(),n=this.inputKey(r,t),o=this.model.objectGetField(r.value,n);this.inputStack.push({value:o,key:n})},e.prototype.processPushElement=function(){var t=this.read(),r=this.inputEntry(),n=this.model.arrayGetElement(r.value,t);this.inputStack.push({value:n})},e.prototype.processPop=function(){this.inputStack.pop()},e.prototype.processPushFieldCopy=function(){this.processPushField(),this.processCopy()},e.prototype.processPushFieldBlank=function(){this.processPushField(),this.processBlank()},e.prototype.processPushElementCopy=function(){this.processPushElement(),this.processCopy()},e.prototype.processPushElementBlank=function(){this.processPushElement(),this.processBlank()},e.prototype.processReturnIntoObjectPop=function(){this.processReturnIntoObject(),this.processPop()},e.prototype.processReturnIntoObjectSameKeyPop=function(){this.processReturnIntoObjectSameKey(),this.processPop()},e.prototype.processReturnIntoArrayPop=function(){this.processReturnIntoArray(),this.processPop()},e.prototype.processObjectSetFieldValue=function(){this.processValue(),this.processReturnIntoObject()},e.prototype.processObjectCopyField=function(){this.processPushField(),this.processCopy(),this.processReturnIntoObjectSameKey(),this.processPop()},e.prototype.processObjectDeleteField=function(){var t=this.read(),r=this.inputEntry(),n=this.inputKey(r,t),o=this.outputObject();this.model.objectDeleteField(o,n)},e.prototype.processArrayAppendValue=function(){var t=this.model.wrap(this.read()),r=this.outputArray();this.model.arrayAppendValue(r,t)},e.prototype.processArrayAppendSlice=function(){var t=this.read(),r=this.read(),n=this.outputArray(),o=this.inputEntry().value;this.model.arrayAppendSlice(n,o,t,r)},e.prototype.processStringAppendString=function(){var t=this.model.wrap(this.read()),r=this.outputString();this.model.stringAppendValue(r,t)},e.prototype.processStringAppendSlice=function(){var t=this.read(),r=this.read(),n=this.outputString(),o=this.inputEntry().value;this.model.stringAppendSlice(n,o,t,r)},e}();function y(e){return e>>16?4:e>>11?3:e>>7?2:1}function O(e){for(var t=0,r=0;r<e.length;r++){var n=e.codePointAt(r),o=y(n);o==4&&r++,t+=o}return t}function F(e,t,r){r===void 0&&(r=0);var n=r,o=0;for(o=r;n<t;o++){var a=e.codePointAt(o),i=y(a);i===4&&o++,n+=i}return o}function G(e,t){for(var r=Math.min(e.length,t.length),n=0,o=0;o<r;){var a=e.codePointAt(o),i=t.codePointAt(o);if(a!==i)return n;var s=y(a);n+=s,o+=s===4?2:1}return n}function R(e,t,r){r===void 0&&(r=0);for(var n=Math.min(e.length,t.length)-r,o=0,a=0;a<n;){var i=e.codePointAt(e.length-1-a),s=t.codePointAt(t.length-1-a);if(i!==s)return o;var p=y(i);o+=p,a+=p===4?2:1}return o}var q={wrap:function(e){return e},finalize:function(e){return Array.isArray(e)?e:e.data},markChanged:function(e){return e},objectGetKeys:function(e){return Object.keys(e)},objectGetField:function(e,t){return e[t]},arrayGetElement:function(e,t){return e[t]},copyObject:function(e){var t={type:"object",data:{}};if(e!==null)for(var r=0,n=Object.entries(e);r<n.length;r++){var o=n[r],a=o[0],i=o[1];t.data[a]=i}return t},copyArray:function(e){return e===null?[]:e.slice()},copyString:function(e){return{type:"string",data:e===null?"":e}},objectSetField:function(e,t,r){e.data[t]=r},objectDeleteField:function(e,t){delete e.data[t]},arrayAppendValue:function(e,t){e.push(t)},arrayAppendSlice:function(e,t,r,n){e.push.apply(e,t.slice(r,n))},stringAppendSlice:function(e,t,r,n){var o=t,a=F(o,r),i=F(o,n,a);e.data+=o.slice(a,i)},stringAppendValue:function(e,t){e.data+=t}};function H(e,t){var r=e,n=new k(q,r,t);return n.process()}var B={};T(B,{applyPatch:()=>N,getType:()=>I,rebaseValue:()=>z,unwrap:()=>c,wrap:()=>J});var V=function(){function e(t){this.meta=t}return e.prototype.wrap=function(t){return this.wrapWithMeta(t,this.meta,this.meta)},e.prototype.wrapWithMeta=function(t,r,n){return n===void 0&&(n=this.meta),{data:t,startMeta:r,endMeta:n}},e.prototype.asObject=function(t){if(!t.content){for(var r={},n=0,o=Object.entries(t.data);n<o.length;n++){var a=o[n],i=a[0],s=a[1];r[i]=this.wrapWithMeta(s,t.startMeta)}t.content={type:"object",fields:r}}return t.content},e.prototype.asArray=function(t){var r=this;if(!t.content){var n=t.data.map(function(a){return r.wrapWithMeta(a,t.startMeta)}),o=n.map(function(){return r.meta});t.content={type:"array",elements:n,metas:o}}return t.content},e.prototype.asString=function(t){if(!t.content){var r=t.data,n={value:r,utf8size:O(r),uses:[],startMeta:t.startMeta,endMeta:t.endMeta};t.content=this.stringFromParts([n])}return t.content},e.prototype.stringFromParts=function(t){for(var r={type:"string",parts:t},n=0,o=t;n<o.length;n++){var a=o[n];a.uses.push(r)}return r},e.prototype.objectGetKeys=function(t){return t.content?Object.keys(t.content.fields):Object.keys(t.data)},e.prototype.objectGetField=function(t,r){var n=this.asObject(t);return n.fields[r]},e.prototype.arrayGetElement=function(t,r){var n=this.asArray(t);return n.elements[r]},e.prototype.finalize=function(t){return this.updateEndMeta(t),{content:t,startMeta:this.meta,endMeta:this.meta}},e.prototype.markChanged=function(t){return this.wrap(c(t))},e.prototype.updateEndMeta=function(t){if(t.type=="string")for(var r=0,n=t.parts;r<n.length;r++){var o=n[r];o.endMeta=this.meta}else if(t.type==="array")for(var a=0,i=t.elements;a<i.length;a++){var s=i[a];s.content&&s.endMeta!==this.meta&&this.updateEndMeta(s.content),s.endMeta=this.meta}else for(var p=0,u=Object.values(t.fields);p<u.length;p++){var s=u[p];s.content&&s.endMeta!==this.meta&&this.updateEndMeta(s.content),s.endMeta=this.meta}},e.prototype.copyString=function(t){if(t){var r=this.asString(t);return this.stringFromParts(r.parts.slice())}else return{type:"string",parts:[]}},e.prototype.copyObject=function(t){var r={type:"object",fields:{}};if(t){var n=this.asObject(t);Object.assign(r.fields,n.fields)}return r},e.prototype.copyArray=function(t){var r=t?this.asArray(t):null,n=r?r.elements:[],o=r?r.metas:[];return{type:"array",elements:n,metas:o}},e.prototype.objectSetField=function(t,r,n){t.fields[r]=n},e.prototype.objectDeleteField=function(t,r){delete t.fields[r]},e.prototype.arrayAppendValue=function(t,r){t.elements.push(r),t.metas.push(this.meta)},e.prototype.arrayAppendSlice=function(t,r,n,o){var a,i,s=this.asArray(r),p=s.elements.length===n;if((a=t.elements).push.apply(a,s.elements.slice(n,o)),p)(i=t.metas).push.apply(i,s.metas.slice(n,o));else for(var u=n;u<o;u++)t.metas.push(this.meta)},e.prototype.stringAppendValue=function(t,r){for(var n=this.asString(r),o=0,a=n.parts;o<a.length;o++){var i=a[o];this.stringAppendPart(t,i)}},e.prototype.stringAppendPart=function(t,r){t.parts.push(r),r.uses.push(t)},e.prototype.resolveStringPart=function(t,r,n){if(n===0)return r;for(var o=r;o<t.parts.length;o++){var a=t.parts[o];if(n===a.utf8size)return o+1;if(n<a.utf8size)return this.splitString(a,n),o+1;n-=a.utf8size}throw new Error("splitting string out of bounds")},e.prototype.splitString=function(t,r){var n,o,a=r,i=t.utf8size-a;if(t.utf8size!==t.value.length){var s=0;for(r=0;s<a;r++){var p=t.value.codePointAt(r),u=y(p);u===4&&r++,s+=u}}n=t.value.slice(0,r),o=t.value.slice(r);var M={value:o,utf8size:i,uses:t.uses.slice(),startMeta:t.startMeta,endMeta:t.endMeta};t.value=n,t.utf8size=a;for(var l=0,v=t.uses;l<v.length;l++){var d=v[l],f=d.parts.indexOf(t);if(f===-1)throw new Error("bug: mismatch between string parts and use.");d.parts.splice(f+1,0,M)}},e.prototype.stringAppendSlice=function(t,r,n,o){for(var a=this.asString(r),i=this.resolveStringPart(a,0,n),s=this.resolveStringPart(a,i,o-n),p=i;p<s;p++){var u=a.parts[p];this.stringAppendPart(t,u)}},e}();function J(e,t){return{data:e,startMeta:t,endMeta:t}}function c(e){if(typeof e.data<"u")return e.data;var t,r=e.content;switch(r.type){case"string":t=r.parts.map(function(p){return p.value}).join("");break;case"array":t=r.elements.map(function(p){return c(p)});break;case"object":{t={};for(var n=0,o=Object.entries(r.fields);n<o.length;n++){var a=o[n],i=a[0],s=a[1];t[i]=c(s)}}}return e.data=t,t}function I(e){return e.content?e.content.type:Array.isArray(e.data)?"array":e.data===null?"null":typeof e.data}function z(e,t){var r=I(e),n=I(t);if(r!==n)return t;var o=new V(e.endMeta),a=new V(t.endMeta);switch(r){case"object":{for(var i=o.asObject(e),s=a.asObject(t),p=0,u=Object.keys(i.fields).length,M=Object.keys(s.fields).length,l=0,v=Object.entries(s.fields);l<v.length;l++){var d=v[l],f=d[0],D=d[1],w=i.fields[f];w&&(s.fields[f]=z(w,D),s.fields[f]===w&&p++)}var W=u===M&&u===p;return W?e:t}case"array":{var E=o.asArray(e),m=a.asArray(t);if(E.elements.length!==m.elements.length)break;for(var C=0,h=0;h<m.elements.length;h++)m.elements[h]=z(E.elements[h],m.elements[h]),m.elements[h]!==E.elements[h]&&C++;return C===0?e:t}case"null":case"boolean":case"number":{if(c(e)===c(t))return e;break}case"string":{var g=c(e),S=c(t);if(g===S)return e;var j=a.copyString(null),b=G(g,S),P=R(g,S,b),K=O(S),A=O(g);0<b&&a.stringAppendSlice(j,e,0,b),b<K-P&&a.stringAppendSlice(j,t,b,K-P),A-P<A&&a.stringAppendSlice(j,e,A-P,A);var x=a.finalize(j);if(c(x)!==S)throw new Error("incorrect string rebase");return x}}return t}function N(e,t,r){var n=new V(r),o=new k(n,e,t);return o.process()}export{B as a,H as b};
