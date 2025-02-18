!function(e,t,r,n,i){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[n]&&s[n],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!o[t]){if(!e[t]){var i="function"==typeof s[n]&&s[n];if(!r&&i)return i(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var c=Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var h=o[t]=new u.Module(t);e[t][0].call(h.exports,d,h,h.exports,s)}return o[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=o,u.parent=a,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return s[n]}}),s[n]=u;for(var c=0;c<t.length;c++)u(t[c]);if(r){var h=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=h:"function"==typeof define&&define.amd&&define(function(){return h})}}({"6JwWS":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"db",()=>u),i.export(r,"auth",()=>c);var s=e("firebase/firestore"),a=e("firebase/app"),o=e("firebase/auth");let l=(0,a.initializeApp)({apiKey:"AIzaSyCHQupKKWIeJvBL7CItQYVDkH2ioMScyEA",authDomain:"website-assignment-336da.firebaseapp.com",projectId:"website-assignment-336da",storageBucket:"website-assignment-336da.firebasestorage.app",messagingSenderId:"251346372536",appId:"1:251346372536:web:595cbc111a2d40eca6f14d",measurementId:"G-0X6TL3BWR2"}),u=(0,s.getFirestore)(l),c=(0,o.getAuth)(l)},{"firebase/firestore":"59KHr","firebase/app":"7mwHT","firebase/auth":"8Nm6e","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"59KHr":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var s=e("@firebase/firestore");i.exportAll(s,r)},{"@firebase/firestore":"amS9o","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],amS9o:[function(e,t,r,n){var i,s,a,o,l=e("@parcel/transformer-js/src/esmodule-helpers.js");l.defineInteropFlag(r),l.export(r,"AbstractUserDataWriter",()=>uJ),l.export(r,"AggregateField",()=>lZ),l.export(r,"AggregateQuerySnapshot",()=>l0),l.export(r,"Bytes",()=>l1),l.export(r,"CACHE_SIZE_UNLIMITED",()=>lF),l.export(r,"CollectionReference",()=>lA),l.export(r,"DocumentReference",()=>lS),l.export(r,"DocumentSnapshot",()=>u8),l.export(r,"FieldPath",()=>l2),l.export(r,"FieldValue",()=>l3),l.export(r,"Firestore",()=>lU),l.export(r,"FirestoreError",()=>D),l.export(r,"GeoPoint",()=>l5),l.export(r,"LoadBundleTask",()=>lM),l.export(r,"PersistentCacheIndexManager",()=>cG),l.export(r,"Query",()=>lx),l.export(r,"QueryCompositeFilterConstraint",()=>uR),l.export(r,"QueryConstraint",()=>uC),l.export(r,"QueryDocumentSnapshot",()=>u4),l.export(r,"QueryEndAtConstraint",()=>uz),l.export(r,"QueryFieldFilterConstraint",()=>uN),l.export(r,"QueryLimitConstraint",()=>uF),l.export(r,"QueryOrderByConstraint",()=>uL),l.export(r,"QuerySnapshot",()=>u7),l.export(r,"QueryStartAtConstraint",()=>uB),l.export(r,"SnapshotMetadata",()=>u5),l.export(r,"Timestamp",()=>$),l.export(r,"Transaction",()=>cO),l.export(r,"VectorValue",()=>l8),l.export(r,"WriteBatch",()=>cN),l.export(r,"_AutoId",()=>q),l.export(r,"_ByteString",()=>tU),l.export(r,"_DatabaseId",()=>tX),l.export(r,"_DocumentKey",()=>X),l.export(r,"_EmptyAppCheckTokenProvider",()=>j),l.export(r,"_EmptyAuthCredentialsProvider",()=>P),l.export(r,"_FieldPath",()=>J),l.export(r,"_TestingHooks",()=>cZ),l.export(r,"_cast",()=>lw),l.export(r,"_debugAssert",()=>k),l.export(r,"_internalAggregationQueryToProtoRunAggregationQueryRequest",()=>cX),l.export(r,"_internalQueryToProtoQueryTarget",()=>cJ),l.export(r,"_isBase64Available",()=>tF),l.export(r,"_logWarn",()=>S),l.export(r,"_validateIsNotUsedTogether",()=>lg),l.export(r,"addDoc",()=>cc),l.export(r,"aggregateFieldEqual",()=>u6),l.export(r,"aggregateQuerySnapshotEqual",()=>u3),l.export(r,"and",()=>uP),l.export(r,"arrayRemove",()=>cU),l.export(r,"arrayUnion",()=>cF),l.export(r,"average",()=>u1),l.export(r,"clearIndexedDbPersistence",()=>lK),l.export(r,"collection",()=>lC),l.export(r,"collectionGroup",()=>lk),l.export(r,"connectFirestoreEmulator",()=>lT),l.export(r,"count",()=>u2),l.export(r,"deleteAllPersistentCacheIndexes",()=>cW),l.export(r,"deleteDoc",()=>cu),l.export(r,"deleteField",()=>cL),l.export(r,"disableNetwork",()=>lQ),l.export(r,"disablePersistentCacheIndexAutoCreation",()=>cH),l.export(r,"doc",()=>lN),l.export(r,"documentId",()=>l6),l.export(r,"enableIndexedDbPersistence",()=>lz),l.export(r,"enableMultiTabIndexedDbPersistence",()=>lG),l.export(r,"enableNetwork",()=>lW),l.export(r,"enablePersistentCacheIndexAutoCreation",()=>cK),l.export(r,"endAt",()=>u$),l.export(r,"endBefore",()=>uG),l.export(r,"ensureFirestoreConfigured",()=>lj),l.export(r,"executeWrite",()=>cf),l.export(r,"getAggregateFromServer",()=>cm),l.export(r,"getCountFromServer",()=>cg),l.export(r,"getDoc",()=>ce),l.export(r,"getDocFromCache",()=>cr),l.export(r,"getDocFromServer",()=>cn),l.export(r,"getDocs",()=>ci),l.export(r,"getDocsFromCache",()=>cs),l.export(r,"getDocsFromServer",()=>ca),l.export(r,"getFirestore",()=>lB),l.export(r,"getPersistentCacheIndexManager",()=>c$),l.export(r,"increment",()=>cV),l.export(r,"initializeFirestore",()=>lV),l.export(r,"limit",()=>uU),l.export(r,"limitToLast",()=>uV),l.export(r,"loadBundle",()=>lJ),l.export(r,"memoryEagerGarbageCollector",()=>c_),l.export(r,"memoryLocalCache",()=>cE),l.export(r,"memoryLruGarbageCollector",()=>cb),l.export(r,"namedQuery",()=>lX),l.export(r,"onSnapshot",()=>ch),l.export(r,"onSnapshotsInSync",()=>cd),l.export(r,"or",()=>uO),l.export(r,"orderBy",()=>uM),l.export(r,"persistentLocalCache",()=>cT),l.export(r,"persistentMultipleTabManager",()=>cC),l.export(r,"persistentSingleTabManager",()=>cA),l.export(r,"query",()=>uk),l.export(r,"queryEqual",()=>lR),l.export(r,"refEqual",()=>lD),l.export(r,"runTransaction",()=>cP),l.export(r,"serverTimestamp",()=>cM),l.export(r,"setDoc",()=>co),l.export(r,"setIndexConfiguration",()=>cq),l.export(r,"setLogLevel",()=>E),l.export(r,"snapshotEqual",()=>u9),l.export(r,"startAfter",()=>uq),l.export(r,"startAt",()=>uj),l.export(r,"sum",()=>u0),l.export(r,"terminate",()=>lY),l.export(r,"updateDoc",()=>cl),l.export(r,"vector",()=>cB),l.export(r,"waitForPendingWrites",()=>lH),l.export(r,"where",()=>uD),l.export(r,"writeBatch",()=>cj);var u=e("@firebase/app"),c=e("@firebase/component"),h=e("@firebase/logger"),d=e("@firebase/util"),f=e("@firebase/webchannel-wrapper/bloom-blob"),p=e("@firebase/webchannel-wrapper/webchannel-blob"),g=e("1f357d3d806fe63b"),m=e("d0007d14bc1ab93c").Buffer;let y="@firebase/firestore",v="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I="11.3.1",_=new h.Logger("@firebase/firestore");function b(){return _.logLevel}function E(e){_.setLogLevel(e)}function T(e,...t){if(_.logLevel<=h.LogLevel.DEBUG){let r=t.map(A);_.debug(`Firestore (${I}): ${e}`,...r)}}function x(e,...t){if(_.logLevel<=h.LogLevel.ERROR){let r=t.map(A);_.error(`Firestore (${I}): ${e}`,...r)}}function S(e,...t){if(_.logLevel<=h.LogLevel.WARN){let r=t.map(A);_.warn(`Firestore (${I}): ${e}`,...r)}}function A(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){let t=`FIRESTORE (${I}) INTERNAL ASSERTION FAILED: `+e;throw x(t),Error(t)}function k(e,t){e||C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends d.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class P{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(w.UNAUTHENTICATED))}shutdown(){}}class L{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M{constructor(e){this.t=e,this.currentUser=w.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||C();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new R;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new R,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new R)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||C(),new O(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||C(),new w(e)}}class F{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=w.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class U{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new F(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class B{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,u._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||C();let r=e=>{null!=e.error&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,T("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new V(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||C(),this.R=e.token,new V(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class j{getToken(){return Promise.resolve(new V(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function z(e,t){return e<t?-1:+(e>t)}function G(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class ${static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new $(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new D(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new D(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new $(0,0))}static max(){return new K(new $(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H="__name__";class W{constructor(e,t,r){void 0===t?t=0:t>e.length&&C(),void 0===r?r=e.length-t:r>e.length-t&&C(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===W.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof W?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=W.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=W.isNumericId(e),n=W.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?W.extractNumericId(e).compare(W.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return(0,f.Integer).fromString(e.substring(4,e.length-2))}}class Q extends W{construct(e,t,r){return new Q(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new D(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new Q(t)}static emptyPath(){return new Q([])}}let Y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends W{construct(e,t,r){return new J(e,t,r)}static isValidIdentifier(e){return Y.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===H}static keyField(){return new J([H])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new D(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new D(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new D(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new D(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Q.fromString(e))}static fromName(e){return new X(Q.fromString(e).popFirst(5))}static empty(){return new X(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Q.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Q.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Q(e.slice()))}}class Z{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}function ee(e){return e.fields.find(e=>2===e.kind)}function et(e){return e.fields.filter(e=>2!==e.kind)}function er(e,t){let r=z(e.collectionGroup,t.collectionGroup);if(0!==r)return r;for(let n=0;n<Math.min(e.fields.length,t.fields.length);++n)if(0!==(r=function(e,t){let r=J.comparator(e.fieldPath,t.fieldPath);return 0!==r?r:z(e.kind,t.kind)}(e.fields[n],t.fields[n])))return r;return z(e.fields.length,t.fields.length)}Z.UNKNOWN_ID=-1;class en{constructor(e,t){this.fieldPath=e,this.kind=t}}class ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ei(0,eo.min())}}function es(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new eo(K.fromTimestamp(1e9===n?new $(r+1,0):new $(r,n)),X.empty(),t)}function ea(e){return new eo(e.readTime,e.key,-1)}class eo{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new eo(K.min(),X.empty(),-1)}static max(){return new eo(K.max(),X.empty(),-1)}}function el(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=X.comparator(e.documentKey,t.documentKey))?r:z(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ec{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(e){if(e.code!==N.FAILED_PRECONDITION||e.message!==eu)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ed((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ed?t:ed.resolve(t)}catch(e){return ed.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ed.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ed.reject(t)}static resolve(e){return new ed((t,r)=>{t(e)})}static reject(e){return new ed((t,r)=>{r(e)})}static waitFor(e){return new ed((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=ed.resolve(!1);for(let r of e)t=t.next(e=>e?ed.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new ed((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new ed((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef="SimpleDb";class ep{static open(e,t,r,n){try{return new ep(t,e.transaction(n,r))}catch(e){throw new ev(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new R,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ev(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{let r=eE(t.target.error);this.m.reject(new ev(e,r))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(T(ef,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new eI(this.transaction.objectStore(e))}}class eg{static delete(e){return T(ef,"Removing database:",e),e_(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,d.isIndexedDBAvailable)())return!1;if(eg.v())return!0;let e=(0,d.getUA)(),t=eg.C(e),r=em(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<r&&r<4.5)}static v(){var e;return void 0!==g&&"YES"===(null===(e=g.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static C(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}constructor(e,t,r){this.name=e,this.version=t,this.O=r,12.2===eg.C((0,d.getUA)())&&x("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(T(ef,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{t(e.target.result)},n.onblocked=()=>{r(new ev(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=t=>{let n=t.target.error;"VersionError"===n.name?r(new D(N.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?r(new D(N.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):r(new ev(e,n))},n.onupgradeneeded=e=>{T(ef,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.O.B(t,n.transaction,e.oldVersion,this.version).next(()=>{T(ef,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,n){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.N(e);let t=ep.open(this.db,e,i?"readonly":"readwrite",r),s=n(t).next(e=>(t.S(),e)).catch(e=>(t.abort(e),ed.reject(e))).toPromise();return s.catch(()=>{}),await t.p,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(T(ef,"Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function em(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}class ey{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return e_(this.q.delete())}}class ev extends D{constructor(e,t){super(N.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ew(e){return"IndexedDbTransactionError"===e.name}class eI{constructor(e){this.store=e}put(e,t){let r;return void 0!==t?(T(ef,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(T(ef,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),e_(r)}add(e){return T(ef,"ADD",this.store.name,e,e),e_(this.store.add(e))}get(e){return e_(this.store.get(e)).next(t=>(void 0===t&&(t=null),T(ef,"GET",this.store.name,e,t),t))}delete(e){return T(ef,"DELETE",this.store.name,e),e_(this.store.delete(e))}count(){return T(ef,"COUNT",this.store.name),e_(this.store.count())}G(e,t){let r=this.options(e,t),n=r.index?this.store.index(r.index):this.store;if("function"==typeof n.getAll){let e=n.getAll(r.range);return new ed((t,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(r),t=[];return this.j(e,(e,r)=>{t.push(r)}).next(()=>t)}}H(e,t){let r=this.store.getAll(e,null===t?void 0:t);return new ed((e,t)=>{r.onerror=e=>{t(e.target.error)},r.onsuccess=t=>{e(t.target.result)}})}J(e,t){T(ef,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Y=!1;let n=this.cursor(r);return this.j(n,(e,t,r)=>r.delete())}Z(e,t){let r;t?r=e:(r={},t=e);let n=this.cursor(r);return this.j(n,t)}X(e){let t=this.cursor({});return new ed((r,n)=>{t.onerror=e=>{n(eE(e.target.error))},t.onsuccess=t=>{let n=t.target.result;n?e(n.primaryKey,n.value).next(e=>{e?n.continue():r()}):r()}})}j(e,t){let r=[];return new ed((n,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void n();let s=new ey(i),a=t(i.primaryKey,i.value,s);if(a instanceof ed){let e=a.catch(e=>(s.done(),ed.reject(e)));r.push(e)}s.isDone?n():null===s.U?i.continue():i.continue(s.U)}}).next(()=>ed.waitFor(r))}options(e,t){let r;return void 0!==e&&("string"==typeof e?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function e_(e){return new ed((t,r)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{r(eE(e.target.error))}})}let eb=!1;function eE(e){let t=eg.C((0,d.getUA)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eb||(eb=!0,setTimeout(()=>{throw e},0)),e}}return e}let eT="IndexBackfiller";class ex{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){T(eT,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let e=await this.ee.ne();T(eT,`Documents written: ${e}`)}catch(e){ew(e)?T(eT,"Ignoring IndexedDB error during index backfill: ",e):await eh(e)}await this.te(6e4)})}}class eS{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){let r=new Set,n=t,i=!0;return ed.doWhile(()=>!0===i&&n>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!r.has(t))return T(eT,`Processing collection: ${t}`),this.ie(e,t,n).next(e=>{n-=e,r.add(t)});i=!1})).next(()=>t-n)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(n=>this.localStore.localDocuments.getNextDocuments(e,t,n,r).next(r=>{let i=r.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.se(n,r)).next(r=>(T(eT,`Updating offset: ${r}`),this.localStore.indexManager.updateCollectionGroup(e,t,r))).next(()=>i.size)}))}se(e,t){let r=e;return t.changes.forEach((e,t)=>{let n=ea(t);el(n,r)>0&&(r=n)}),new eo(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function eC(e){return null==e}function ek(e){return 0===e&&1/e==-1/0}function eN(e){return"number"==typeof e&&Number.isInteger(e)&&!ek(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}function eD(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"}eA.ae=-1;function eR(e){let t=e.length;if(t>=2||C(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||C(),Q.emptyPath();let r=t-2,n=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>r)&&C(),e.charAt(t+1)){case"\x01":let a;let o=e.substring(s,t);0===i.length?a=o:(i+=o,a=i,i=""),n.push(a);break;case"\x10":i+=e.substring(s,t),i+="\0";break;case"\x11":i+=e.substring(s,t+1);break;default:C()}s=t+2}return new Q(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eO="remoteDocuments",eP="owner",eL="owner",eM="mutationQueues",eF="mutations",eU="batchId",eV="userMutationsIndex",eB=["userId","batchId"],ej={},eq="documentMutations",ez="remoteDocumentsV14",eG=["prefixPath","collectionGroup","readTime","documentId"],e$="documentKeyIndex",eK=["prefixPath","collectionGroup","documentId"],eH="collectionGroupIndex",eW=["collectionGroup","readTime","prefixPath","documentId"],eQ="remoteDocumentGlobal",eY="remoteDocumentGlobalKey",eJ="targets",eX="queryTargetsIndex",eZ=["canonicalId","targetId"],e0="targetDocuments",e1=["targetId","path"],e2="documentTargetsIndex",e6=["path","targetId"],e3="targetGlobalKey",e5="targetGlobal",e8="collectionParents",e4=["collectionId","parent"],e7="clientMetadata",e9="bundles",te="namedQueries",tt="indexConfiguration",tr="collectionGroupIndex",tn="indexState",ti=["indexId","uid"],ts="sequenceNumberIndex",ta=["uid","sequenceNumber"],to="indexEntries",tl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tu="documentKeyIndex",tc=["indexId","uid","orderedDocumentKey"],th="documentOverlays",td=["userId","collectionPath","documentId"],tf="collectionPathOverlayIndex",tp=["userId","collectionPath","largestBatchId"],tg="collectionGroupOverlayIndex",tm=["userId","collectionGroup","largestBatchId"],ty="globals",tv=[eM,eF,eq,eO,eJ,eP,e5,e0,e7,eQ,e8,e9,te],tw=[...tv,th],tI=[eM,eF,eq,ez,eJ,eP,e5,e0,e7,eQ,e8,e9,te,th],t_=[...tI,tt,tn,to],tb=[...t_,ty];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends ec{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function tT(e,t){return eg.M(e.ue,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function tS(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function tA(e,t){let r=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.push(t(e[n],n,e));return r}function tC(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t){this.comparator=e,this.root=t||tD.EMPTY}insert(e,t){return new tk(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tD.BLACK,null,null))}remove(e){return new tk(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tD.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tN(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tN(this.root,e,this.comparator,!1)}getReverseIterator(){return new tN(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tN(this.root,e,this.comparator,!0)}}class tN{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tD{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:tD.RED,this.left=null!=n?n:tD.EMPTY,this.right=null!=i?i:tD.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new tD(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return tD.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return tD.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,tD.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,tD.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();let e=this.left.check();if(e!==this.right.check())throw C();return e+ +!this.isRed()}}tD.EMPTY=null,tD.RED=!0,tD.BLACK=!1,tD.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,r,n,i){return this}insert(e,t,r){return new tD(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e){this.comparator=e,this.data=new tk(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tO(this.data.getIterator())}getIteratorFrom(e){return new tO(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tR)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tR(this.comparator);return t.data=e,t}}class tO{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tP(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new tL([])}unionWith(e){let t=new tR(J.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new tL(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return G(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e){this.binaryString=e}static fromBase64String(e){return new tU(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tM("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new tU(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tU.EMPTY_BYTE_STRING=new tU("");let tV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tB(e){if(e||C(),"string"==typeof e){let t=0,r=tV.exec(e);if(r||C(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:tj(e.seconds),nanos:tj(e.nanos)}}function tj(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function tq(e){return"string"==typeof e?tU.fromBase64String(e):tU.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tz="server_timestamp",tG="__type__",t$="__previous_value__",tK="__local_write_time__";function tH(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[tG])||void 0===r?void 0:r.stringValue)===tz}function tW(e){let t=e.mapValue.fields[t$];return tH(t)?tW(t):t}function tQ(e){let t=tB(e.mapValue.fields[tK].timestampValue);return new $(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tY{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}let tJ="(default)";class tX{constructor(e,t){this.projectId=e,this.database=t||tJ}static empty(){return new tX("","")}get isDefaultDatabase(){return this.database===tJ}isEqual(e){return e instanceof tX&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tZ="__type__",t0="__max__",t1={mapValue:{fields:{__type__:{stringValue:t0}}}},t2="__vector__",t6="value",t3={nullValue:"NULL_VALUE"};function t5(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?tH(e)?4:rc(e)?0x1fffffffffffff:rl(e)?10:11:C()}function t8(e,t){if(e===t)return!0;let r=t5(e);if(r!==t5(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tQ(e).isEqual(tQ(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=tB(e.timestampValue),n=tB(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return tq(e.bytesValue).isEqual(tq(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return tj(e.geoPointValue.latitude)===tj(t.geoPointValue.latitude)&&tj(e.geoPointValue.longitude)===tj(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tj(e.integerValue)===tj(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=tj(e.doubleValue),n=tj(t.doubleValue);return r===n?ek(r)===ek(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return G(e.arrayValue.values||[],t.arrayValue.values||[],t8);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(tx(r)!==tx(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!t8(r[e],n[e])))return!1;return!0}(e,t);default:return C()}}function t4(e,t){return void 0!==(e.values||[]).find(e=>t8(e,t))}function t7(e,t){if(e===t)return 0;let r=t5(e),n=t5(t);if(r!==n)return z(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return z(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=tj(e.integerValue||e.doubleValue),n=tj(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return t9(e.timestampValue,t.timestampValue);case 4:return t9(tQ(e),tQ(t));case 5:return z(e.stringValue,t.stringValue);case 6:return function(e,t){let r=tq(e),n=tq(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=z(r[e],n[e]);if(0!==t)return t}return z(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=z(tj(e.latitude),tj(t.latitude));return 0!==r?r:z(tj(e.longitude),tj(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return re(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let a=e.fields||{},o=t.fields||{},l=null===(r=a[t6])||void 0===r?void 0:r.arrayValue,u=null===(n=o[t6])||void 0===n?void 0:n.arrayValue,c=z((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:re(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===t1.mapValue&&t===t1.mapValue)return 0;if(e===t1.mapValue)return 1;if(t===t1.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=z(n[e],s[e]);if(0!==t)return t;let a=t7(r[n[e]],i[s[e]]);if(0!==a)return a}return z(n.length,s.length)}(e.mapValue,t.mapValue);default:throw C()}}function t9(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return z(e,t);let r=tB(e),n=tB(t),i=z(r.seconds,n.seconds);return 0!==i?i:z(r.nanos,n.nanos)}function re(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=t7(r[e],n[e]);if(t)return t}return z(r.length,n.length)}function rt(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=tB(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?tq(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,X.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rt(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rt(e.fields[i])}`;return r+"}"}(e.mapValue):C()}function rr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rn(e){return!!e&&"integerValue"in e}function ri(e){return!!e&&"arrayValue"in e}function rs(e){return!!e&&"nullValue"in e}function ra(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ro(e){return!!e&&"mapValue"in e}function rl(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[tZ])||void 0===r?void 0:r.stringValue)===t2}function ru(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return tS(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ru(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=ru(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rc(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===t0}let rh={mapValue:{fields:{[tZ]:{stringValue:t2},[t6]:{arrayValue:{}}}}};function rd(e,t){let r=t7(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function rf(e,t){let r=t7(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.value=e}static empty(){return new rp({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ro(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ru(t)}setAll(e){let t=J.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=ru(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());ro(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return t8(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];ro(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(tS(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new rp(ru(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new rg(e,0,K.min(),K.min(),K.min(),rp.empty(),0)}static newFoundDocument(e,t,r,n){return new rg(e,1,t,K.min(),r,n,0)}static newNoDocument(e,t){return new rg(e,2,t,K.min(),K.min(),rp.empty(),0)}static newUnknownDocument(e,t){return new rg(e,3,t,K.min(),K.min(),rp.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(K.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rp.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rg&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rg(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.position=e,this.inclusive=t}}function ry(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?X.comparator(X.fromName(a.referenceValue),r.key):t7(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rv(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!t8(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{}class r_ extends rI{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new rC(e,t,r):"array-contains"===t?new rR(e,r):"in"===t?new rO(e,r):"not-in"===t?new rP(e,r):"array-contains-any"===t?new rL(e,r):new r_(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new rk(e,r):new rN(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(t7(t,this.value)):null!==t&&t5(this.value)===t5(t)&&this.matchesComparison(t7(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rb extends rI{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new rb(e,t)}matches(e){return rE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rE(e){return"and"===e.op}function rT(e){return"or"===e.op}function rx(e){return rS(e)&&rE(e)}function rS(e){for(let t of e.filters)if(t instanceof rb)return!1;return!0}function rA(e,t){let r=e.filters.concat(t);return rb.create(r,e.op)}class rC extends r_{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class rk extends r_{constructor(e,t){super(e,"in",t),this.keys=rD("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rN extends r_{constructor(e,t){super(e,"not-in",t),this.keys=rD("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rD(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>X.fromName(e.referenceValue))}class rR extends r_{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ri(t)&&t4(t.arrayValue,this.value)}}class rO extends r_{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&t4(this.value.arrayValue,t)}}class rP extends r_{constructor(e,t){super(e,"not-in",t)}matches(e){if(t4(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!t4(this.value.arrayValue,t)}}class rL extends r_{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ri(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>t4(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.le=null}}function rF(e,t=null,r=[],n=[],i=null,s=null,a=null){return new rM(e,t,r,n,i,s,a)}function rU(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof r_)return t.field.canonicalString()+t.op.toString()+rt(t.value);if(rx(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eC(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rt(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rt(e)).join(",")),e.le=t}return e.le}function rV(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof r_?r instanceof r_&&t.op===r.op&&t.field.isEqual(r.field)&&t8(t.value,r.value):t instanceof rb?r instanceof rb&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void C()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rv(e.startAt,t.startAt)&&rv(e.endAt,t.endAt)}function rB(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function rj(e,t){return e.filters.filter(e=>e instanceof r_&&e.field.isEqual(t))}function rq(e,t,r){let n=t3,i=!0;for(let r of rj(e,t)){let e=t3,t=!0;switch(r.op){case"<":case"<=":var s;e="nullValue"in(s=r.value)?t3:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?rr(tX.empty(),X.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?rl(s)?rh:{mapValue:{}}:C();break;case"==":case"in":case">=":e=r.value;break;case">":e=r.value,t=!1;break;case"!=":case"not-in":e=t3}0>rd({value:n,inclusive:i},{value:e,inclusive:t})&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];0>rd({value:n,inclusive:i},{value:e,inclusive:r.inclusive})&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}function rz(e,t,r){let n=t1,i=!0;for(let r of rj(e,t)){let e=t1,t=!0;switch(r.op){case">=":case">":var s;e="nullValue"in(s=r.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?rr(tX.empty(),X.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?rh:"mapValue"in s?rl(s)?{mapValue:{}}:t1:C(),t=!1;break;case"==":case"in":case"<=":e=r.value;break;case"<":e=r.value,t=!1;break;case"!=":case"not-in":e=t1}rf({value:n,inclusive:i},{value:e,inclusive:t})>0&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];rf({value:n,inclusive:i},{value:e,inclusive:r.inclusive})>0&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rG{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function r$(e){return new rG(e)}function rK(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rH(e){return null!==e.collectionGroup}function rW(e){if(null===e.he){let t;e.he=[];let r=new Set;for(let t of e.explicitOrderBy)e.he.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new tR(J.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.he.push(new rw(t,n))}),r.has(J.keyField().canonicalString())||e.he.push(new rw(J.keyField(),n))}return e.he}function rQ(e){return e.Pe||(e.Pe=rJ(e,rW(e))),e.Pe}function rY(e){return e.Te||(e.Te=rJ(e,e.explicitOrderBy)),e.Te}function rJ(e,t){if("F"===e.limitType)return rF(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rw(e.field,t)});let r=e.endAt?new rm(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rm(e.startAt.position,e.startAt.inclusive):null;return rF(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function rX(e,t){let r=e.filters.concat([t]);return new rG(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function rZ(e,t,r){return new rG(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function r0(e,t){return rV(rQ(e),rQ(t))&&e.limitType===t.limitType}function r1(e){return`${rU(rQ(e))}|lt:${e.limitType}`}function r2(e){var t;let r;return`Query(target=${r=(t=rQ(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof r_?`${t.field.canonicalString()} ${t.op} ${rt(t.value)}`:t instanceof rb?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eC(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>rt(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>rt(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function r6(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):X.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of rW(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=ry(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,rW(e),t))&&(!e.endAt||!!function(e,t,r){let n=ry(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,rW(e),t))}function r3(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function r5(e){return(t,r)=>{let n=!1;for(let i of rW(e)){let e=function(e,t,r){let n=e.field.isKeyField()?X.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?t7(n,i):C()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return C()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){tS(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return tC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r4=new tk(X.comparator),r7=new tk(X.comparator);function r9(...e){let t=r7;for(let r of e)t=t.insert(r.key,r);return t}function ne(e){let t=r7;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nt(){return new r8(e=>e.toString(),(e,t)=>e.isEqual(t))}let nr=new tk(X.comparator),nn=new tR(X.comparator);function ni(...e){let t=nn;for(let r of e)t=t.add(r);return t}let ns=new tR(z);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ek(t)?"-0":t}}function no(e){return{integerValue:""+e}}function nl(e,t){return eN(t)?no(t):na(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this._=void 0}}function nc(e,t){return e instanceof nm?rn(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nh extends nu{}class nd extends nu{constructor(e){super(),this.elements=e}}function nf(e,t){let r=nv(t);for(let t of e.elements)r.some(e=>t8(e,t))||r.push(t);return{arrayValue:{values:r}}}class np extends nu{constructor(e){super(),this.elements=e}}function ng(e,t){let r=nv(t);for(let t of e.elements)r=r.filter(e=>!t8(e,t));return{arrayValue:{values:r}}}class nm extends nu{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ny(e){return tj(e.integerValue||e.doubleValue)}function nv(e){return ri(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.field=e,this.transform=t}}class nI{constructor(e,t){this.version=e,this.transformResults=t}}class n_{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n_}static exists(e){return new n_(void 0,e)}static updateTime(e){return new n_(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nb(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nE{}function nT(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nR(e.key,n_.none()):new nA(e.key,e.data,n_.none());{let r=e.data,n=rp.empty(),i=new tR(J.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nC(e.key,n,new tL(i.toArray()),n_.none())}}function nx(e,t,r,n){return e instanceof nA?function(e,t,r,n){if(!nb(e.precondition,t))return r;let i=e.value.clone(),s=nD(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nC?function(e,t,r,n){if(!nb(e.precondition,t))return r;let i=nD(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nk(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nb(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nS(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&G(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nd&&n instanceof nd||r instanceof np&&n instanceof np?G(r.elements,n.elements,t8):r instanceof nm&&n instanceof nm?t8(r.Ie,n.Ie):r instanceof nh&&n instanceof nh)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nA extends nE{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nC extends nE{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nk(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nN(e,t,r){var n;let i=new Map;e.length===r.length||C();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof nd?nf(o,l):o instanceof np?ng(o,l):n))}return i}function nD(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nh?function(e,t){let r={fields:{[tG]:{stringValue:tz},[tK]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&tH(t)&&(t=tW(t)),t&&(r.fields[t$]=t),{mapValue:r}}(t,s):e instanceof nd?nf(e,s):e instanceof np?ng(e,s):function(e,t){let r=nc(e,t),n=ny(r)+ny(e.Ie);return rn(r)&&rn(e.Ie)?no(n):na(e.serializer,n)}(e,s))}return n}class nR extends nE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nO extends nE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nA?function(e,t,r){let n=e.value.clone(),i=nN(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nC?function(e,t,r){if(!nb(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nN(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nk(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=nx(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=nx(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nt();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nT(s,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ni())}isEqual(e){return this.batchId===e.batchId&&G(this.mutations,e.mutations,(e,t)=>nS(e,t))&&G(this.baseMutations,e.baseMutations,(e,t)=>nS(e,t))}}class nL{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||C();let n=nr,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new nL(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e,t){this.count=e,this.unchangedNames=t}}function nV(e){switch(e){case N.OK:return C();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return C()}}function nB(e){if(void 0===e)return x("GRPC error has no .code"),N.UNKNOWN;switch(e){case i.OK:return N.OK;case i.CANCELLED:return N.CANCELLED;case i.UNKNOWN:return N.UNKNOWN;case i.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case i.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case i.INTERNAL:return N.INTERNAL;case i.UNAVAILABLE:return N.UNAVAILABLE;case i.UNAUTHENTICATED:return N.UNAUTHENTICATED;case i.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case i.NOT_FOUND:return N.NOT_FOUND;case i.ALREADY_EXISTS:return N.ALREADY_EXISTS;case i.PERMISSION_DENIED:return N.PERMISSION_DENIED;case i.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case i.ABORTED:return N.ABORTED;case i.OUT_OF_RANGE:return N.OUT_OF_RANGE;case i.UNIMPLEMENTED:return N.UNIMPLEMENTED;case i.DATA_LOSS:return N.DATA_LOSS;default:return C()}}(s=i||(i={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nj=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nq(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nz=new f.Integer([0xffffffff,0xffffffff],0);function nG(e){let t=nq().encode(e),r=new f.Md5;return r.update(t),new Uint8Array(r.digest())}function n$(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new f.Integer([r,n],0),new f.Integer([i,s],0)]}class nK{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nH(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new nH(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new nH(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=(0,f.Integer).fromNumber(this.Ee)}Ae(e,t,r){let n=e.add(t.multiply((0,f.Integer).fromNumber(r)));return 1===n.compare(nz)&&(n=new f.Integer([n.getBits(0),n.getBits(1)],0)),n.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,r]=n$(nG(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);if(!this.Re(n))return!1}return!0}static create(e,t,r){let n=new nK(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Ee)return;let[t,r]=n$(nG(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);this.Ve(n)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class nH extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nW{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,nQ.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new nW(K.min(),n,new tk(z),r4,ni())}}class nQ{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nQ(r,t,ni(),ni(),ni())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e,t,r,n){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=n}}class nJ{constructor(e,t){this.targetId=e,this.ge=t}}class nX{constructor(e,t,r=tU.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class nZ{constructor(){this.pe=0,this.ye=n2(),this.we=tU.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ni(),t=ni(),r=ni();return this.ye.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:C()}}),new nQ(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=n2()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||C()}Le(){this.be=!0,this.Se=!0}}class n0{constructor(e){this.ke=e,this.qe=new Map,this.Qe=r4,this.$e=n1(),this.Ke=n1(),this.Ue=new tk(z)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:C()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,r)=>{this.Je(r)&&t(r)})}Ze(e){let t=e.targetId,r=e.ge.count,n=this.Xe(t);if(n){let i=n.target;if(rB(i)){if(0===r){let e=new X(i.path);this.ze(t,e,rg.newNoDocument(e,K.min()))}else 1===r||C()}else{let n=this.et(t);if(n!==r){let r=this.tt(e),i=r?this.nt(r,e,n):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null==nj||nj.rt(function(e,t,r,n,i){var s,a,o,l,u,c;let h={localCacheCount:e,existenceFilterCount:t.count,databaseId:r.database,projectId:r.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(l=null===(o=null===(a=null==d?void 0:d.bits)||void 0===a?void 0:a.bitmap)||void 0===o?void 0:o.length)&&void 0!==l?l:0,padding:null!==(c=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==c?c:0,mightContain:e=>{var t;return null!==(t=null==n?void 0:n.mightContain(e))&&void 0!==t&&t}}),h}(n,e.ge,this.ke.it(),r,i))}}}}tt(e){let t,r;let n=e.ge.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=tq(i).toUint8Array()}catch(e){if(e instanceof tM)return S("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new nK(t,s,a)}catch(e){return S(e instanceof nH?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ee?null:r}nt(e,t,r){return 2*(t.ge.count!==r-this.st(e,t.targetId))}st(e,t){let r=this.ke.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,r,null),n++)}),n}ot(e){let t=new Map;this.qe.forEach((r,n)=>{let i=this.Xe(n);if(i){if(r.current&&rB(i.target)){let t=new X(i.target.path);this._t(t).has(n)||this.ut(n,t)||this.ze(n,t,rg.newNoDocument(t,e))}r.ve&&(t.set(n,r.Fe()),r.Me())}});let r=ni();this.Ke.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Qe.forEach((t,r)=>r.setReadTime(e));let n=new nW(e,t,this.Ue,this.Qe,r);return this.Qe=r4,this.$e=n1(),this.Ke=n1(),this.Ue=new tk(z),n}Ge(e,t){if(!this.Je(e))return;let r=2*!!this.ut(e,t.key);this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;let n=this.He(e);this.ut(e,t)?n.xe(t,1):n.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new nZ,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new tR(z),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new tR(z),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||T("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nZ),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function n1(){return new tk(X.comparator)}function n2(){return new tk(X.comparator)}let n6={asc:"ASCENDING",desc:"DESCENDING"},n3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n5={and:"AND",or:"OR"};class n8{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n4(e,t){return e.useProto3Json||eC(t)?t:{value:t}}function n7(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function n9(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ie(e){return e||C(),K.fromTimestamp(function(e){let t=tB(e);return new $(t.seconds,t.nanos)}(e))}function it(e,t){return ir(e,t).canonicalString()}function ir(e,t){let r=new Q(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ii(e){let t=Q.fromString(e);return ib(t)||C(),t}function is(e,t){return it(e.databaseId,t.path)}function ia(e,t){let r=ii(t);if(r.get(1)!==e.databaseId.projectId)throw new D(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new D(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new X(ic(r))}function io(e,t){return it(e.databaseId,t)}function il(e){let t=ii(e);return 4===t.length?Q.emptyPath():ic(t)}function iu(e){return new Q(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ic(e){return e.length>4&&"documents"===e.get(4)||C(),e.popFirst(5)}function ih(e,t,r){return{name:is(e,t),fields:r.value.mapValue.fields}}function id(e,t,r){let n=ia(e,t.name),i=ie(t.updateTime),s=t.createTime?ie(t.createTime):K.min(),a=new rp({mapValue:{fields:t.fields}}),o=rg.newFoundDocument(n,i,s,a);return r&&o.setHasCommittedMutations(),r?o.setHasCommittedMutations():o}function ip(e,t){var r;let n;if(t instanceof nA)n={update:ih(e,t.key,t.value)};else if(t instanceof nR)n={delete:is(e,t.key)};else if(t instanceof nC)n={update:ih(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nO))return C();n={verify:is(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof np)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nm)return{fieldPath:t.field.canonicalString(),increment:r.Ie};throw C()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:n7(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:C()),n}function ig(e,t){var r;let n=t.currentDocument?void 0!==(r=t.currentDocument).updateTime?n_.updateTime(ie(r.updateTime)):void 0!==r.exists?n_.exists(r.exists):n_.none():n_.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{var r,n;let i;return r=e,i=null,"setToServerValue"in(n=t)?("REQUEST_TIME"===n.setToServerValue||C(),i=new nh):"appendMissingElements"in n?i=new nd(n.appendMissingElements.values||[]):"removeAllFromArray"in n?i=new np(n.removeAllFromArray.values||[]):"increment"in n?i=new nm(r,n.increment):C(),new nw(J.fromServerFormat(n.fieldPath),i)}):[];if(t.update){t.update.name;let r=ia(e,t.update.name),s=new rp({mapValue:{fields:t.update.fields}});return t.updateMask?new nC(r,s,new tL((t.updateMask.fieldPaths||[]).map(e=>J.fromServerFormat(e))),n,i):new nA(r,s,n,i)}return t.delete?new nR(ia(e,t.delete),n):t.verify?new nO(ia(e,t.verify),n):C()}function im(e,t){return{documents:[io(e,t.path)]}}function iy(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=io(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof r_?function(e){if("=="===e.op){if(ra(e.value))return{unaryFilter:{field:iI(e.field),op:"IS_NAN"}};if(rs(e.value))return{unaryFilter:{field:iI(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ra(e.value))return{unaryFilter:{field:iI(e.field),op:"IS_NOT_NAN"}};if(rs(e.value))return{unaryFilter:{field:iI(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iI(e.field),op:n3[e.op],value:e.value}}}(t):t instanceof rb?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:n5[t.op],filters:r}}}(t):C()}(rb.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:iI(e.field),direction:n6[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=n4(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ht:s,parent:i}}function iv(e,t,r,n){let{ht:i,parent:s}=iy(e,t),a={},o=[],l=0;return r.forEach(e=>{let t=n?e.alias:"aggregate_"+l++;a[t]=e.alias,"count"===e.aggregateType?o.push({alias:t,count:{}}):"avg"===e.aggregateType?o.push({alias:t,avg:{field:iI(e.fieldPath)}}):"sum"===e.aggregateType&&o.push({alias:t,sum:{field:iI(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:o,structuredQuery:i.structuredQuery},parent:i.parent},Pt:a,parent:s}}function iw(e){var t;let r,n=il(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||C();let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=i_(e.unaryFilter.field);return r_.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=i_(e.unaryFilter.field);return r_.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=i_(e.unaryFilter.field);return r_.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=i_(e.unaryFilter.field);return r_.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):void 0!==t.fieldFilter?r_.create(i_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rb.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return C()}}(t.compositeFilter.op)):C()}(e);return t instanceof rb&&rx(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rw(i_(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eC(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new rm(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new rm(e.values||[],t)}(i.endAt)),new rG(n,a,l,o,u,"F",c,h)}function iI(e){return{fieldPath:e.canonicalString()}}function i_(e){return J.fromServerFormat(e.fieldPath)}function ib(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t,r,n,i=K.min(),s=K.min(),a=tU.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new iE(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.Tt=e}}function ix(e,t){let r=t.key,n={prefixPath:r.getCollectionPath().popLast().toArray(),collectionGroup:r.collectionGroup,documentId:r.path.lastSegment(),readTime:iS(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;n.document={name:is(i=e.Tt,t.key),fields:t.data.value.mapValue.fields,updateTime:n7(i,t.version.toTimestamp()),createTime:n7(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())n.noDocument={path:r.path.toArray(),readTime:iA(t.version)};else{if(!t.isUnknownDocument())return C();n.unknownDocument={path:r.path.toArray(),version:iA(t.version)}}return n}function iS(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function iA(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function iC(e){let t=new $(e.seconds,e.nanoseconds);return K.fromTimestamp(t)}function ik(e,t){let r=(t.baseMutations||[]).map(t=>ig(e.Tt,t));for(let e=0;e<t.mutations.length-1;++e){let r=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let n=t.mutations[e+1];r.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let n=t.mutations.map(t=>ig(e.Tt,t)),i=$.fromMillis(t.localWriteTimeMs);return new nP(t.batchId,i,r,n)}function iN(e){var t;let r=iC(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?iC(e.lastLimboFreeSnapshotVersion):K.min();return new iE(void 0!==e.query.documents?(1===(t=e.query).documents.length||C(),rQ(r$(il(t.documents[0])))):rQ(iw(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,n,tU.fromBase64String(e.resumeToken))}function iD(e,t){let r;let n=iA(t.snapshotVersion),i=iA(t.lastLimboFreeSnapshotVersion);r=rB(t.target)?im(e.Tt,t.target):iy(e.Tt,t.target).ht;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:rU(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function iR(e){let t=iw({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rZ(t,t.limit,"L"):t}function iO(e,t){return new nM(t.largestBatchId,ig(e.Tt,t.overlayMutation))}function iP(e,t){let r=t.path.lastSegment();return[e,eD(t.path.popLast()),r]}function iL(e,t,r,n){return{indexId:e,uid:t,sequenceNumber:r,readTime:iA(n.readTime),documentKey:eD(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{getBundleMetadata(e,t){return tT(e,e9).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:iC(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return tT(e,e9).put({bundleId:t.id,createTime:iA(ie(t.createTime)),version:t.version})}getNamedQuery(e,t){return tT(e,te).get(t).next(e=>{if(e)return{name:e.name,query:iR(e.bundledQuery),readTime:iC(e.readTime)}})}saveNamedQuery(e,t){return tT(e,te).put({name:t.name,readTime:iA(ie(t.readTime)),bundledQuery:t.bundledQuery})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){return new iF(e,t.uid||"")}getOverlay(e,t){return tT(e,th).get(iP(this.userId,t)).next(e=>e?iO(this.serializer,e):null)}getOverlays(e,t){let r=nt();return ed.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){let n=[];return r.forEach((r,i)=>{let s=new nM(t,i);n.push(this.Et(e,s))}),ed.waitFor(n)}removeOverlaysForBatchId(e,t,r){let n=new Set;t.forEach(e=>n.add(eD(e.getCollectionPath())));let i=[];return n.forEach(t=>{let n=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,r+1],!1,!0);i.push(tT(e,th).J(tf,n))}),ed.waitFor(i)}getOverlaysForCollection(e,t,r){let n=nt(),i=eD(t),s=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return tT(e,th).G(tf,s).next(e=>{for(let t of e){let e=iO(this.serializer,t);n.set(e.getKey(),e)}return n})}getOverlaysForCollectionGroup(e,t,r,n){let i;let s=nt(),a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tT(e,th).Z({index:tg,range:a},(e,t,r)=>{let a=iO(this.serializer,t);s.size()<n||a.largestBatchId===i?(s.set(a.getKey(),a),i=a.largestBatchId):r.done()}).next(()=>s)}Et(e,t){return tT(e,th).put(function(e,t,r){let[n,i,s]=iP(t,r.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:ip(e.Tt,r.mutation)}}(this.serializer,this.userId,t))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{dt(e){return tT(e,ty)}getSessionToken(e){return this.dt(e).get("sessionToken").next(e=>{let t=null==e?void 0:e.value;return t?tU.fromUint8Array(t):tU.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(tj(e.integerValue));else if("doubleValue"in e){let r=tj(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),ek(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),"string"==typeof r&&(r=tB(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(tq(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?rc(e)?this.ft(t,Number.MAX_SAFE_INTEGER):rl(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):C()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let r=e.fields||{};for(let e of(this.ft(t,55),Object.keys(r)))this.wt(e,t),this.Rt(r[e],t)}vt(e,t){var r,n;let i=e.fields||{};this.ft(t,53);let s=(null===(n=null===(r=i[t6].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.ft(t,15),t.gt(tj(s)),this.wt(t6,t),this.Rt(i[t6],t)}Ft(e,t){let r=e.values||[];for(let e of(this.ft(t,50),r))this.Rt(e,t)}Dt(e,t){this.ft(t,37),X.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}function iB(e){return Math.ceil((64-function(e){let t=0;for(let r=0;r<8;++r){let n=function(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}(255&e[r]);if(t+=n,8!==n)break}return t}(e))/8)}iV.xt=new iV;class ij{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Nt(e);else if(e<2048)this.Nt(960|e>>>6),this.Nt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Nt(480|e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e);else{let e=t.codePointAt(0);this.Nt(240|e>>>18),this.Nt(128|63&e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e)}}this.Bt()}$t(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.kt(e);else if(e<2048)this.kt(960|e>>>6),this.kt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.kt(480|e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e);else{let e=t.codePointAt(0);this.kt(240|e>>>18),this.kt(128|63&e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e)}}this.qt()}Kt(e){let t=this.Ut(e),r=iB(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Gt(e){let t=this.Ut(e),r=iB(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}zt(){this.jt(255),this.jt(255)}Ht(){this.Jt(255),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let e=1;e<t.length;++e)t[e]^=255*!!r;return t}Nt(e){let t=255&e;0===t?(this.jt(0),this.jt(255)):255===t?(this.jt(255),this.jt(0)):this.jt(t)}kt(e){let t=255&e;0===t?(this.Jt(0),this.Jt(255)):255===t?(this.Jt(255),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let n=new Uint8Array(r);n.set(this.buffer),this.buffer=n}}class iq{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class iz{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class iG{constructor(){this.Zt=new ij,this.Xt=new iq(this.Zt),this.en=new iz(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return 0===e?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e,t,r,n){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=n}nn(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new i$(this.indexId,this.documentKey,this.arrayValue,r)}}function iK(e,t){let r=e.indexId-t.indexId;return 0!==r?r:0!==(r=iH(e.arrayValue,t.arrayValue))?r:0!==(r=iH(e.directionalValue,t.directionalValue))?r:X.comparator(e.documentKey,t.documentKey)}function iH(e,t){for(let r=0;r<e.length&&r<t.length;++r){let n=e[r]-t[r];if(0!==n)return n}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(e){for(let t of(this.rn=new tR((e,t)=>J.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[],e.filters))t.isInequality()?this.rn=this.rn.add(t):this._n.push(t)}get an(){return this.rn.size>1}un(e){if(e.collectionGroup===this.collectionId||C(),this.an)return!1;let t=ee(e);if(void 0!==t&&!this.cn(t))return!1;let r=et(e),n=new Set,i=0,s=0;for(;i<r.length&&this.cn(r[i]);++i)n=n.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.rn.size>0){let e=this.rn.getIterator().getNext();if(!n.has(e.field.canonicalString())){let t=r[i];if(!this.ln(e,t)||!this.hn(this.sn[s++],t))return!1}++i}for(;i<r.length;++i){let e=r[i];if(s>=this.sn.length||!this.hn(this.sn[s++],e))return!1}return!0}Pn(){if(this.an)return null;let e=new tR(J.comparator),t=[];for(let r of this._n)if(!r.field.isKeyField()){if("array-contains"===r.op||"array-contains-any"===r.op)t.push(new en(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new en(r.field,0))}}for(let r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new en(r.field,+("asc"!==r.dir))));return new Z(Z.UNKNOWN_ID,this.collectionId,t,ei.empty())}cn(e){for(let t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let r="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function iQ(e){return e instanceof r_}function iY(e){return e instanceof rb&&rx(e)}function iJ(e){return iQ(e)||iY(e)||function(e){if(e instanceof rb&&rT(e)){for(let t of e.getFilters())if(!iQ(t)&&!iY(t))return!1;return!0}return!1}(e)}function iX(e,t){return e instanceof r_||e instanceof rb||C(),t instanceof r_||t instanceof rb||C(),i0(e instanceof r_?t instanceof r_?rb.create([e,t],"and"):iZ(e,t):t instanceof r_?iZ(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||C(),rE(e)&&rE(t))return rA(e,t.getFilters());let r=rT(e)?e:t,n=rT(e)?t:e,i=r.filters.map(e=>iX(e,n));return rb.create(i,"or")}(e,t))}function iZ(e,t){if(rE(t))return rA(t,e.getFilters());{let r=t.filters.map(t=>iX(e,t));return rb.create(r,"or")}}function i0(e){if(e instanceof r_||e instanceof rb||C(),e instanceof r_)return e;let t=e.getFilters();if(1===t.length)return i0(t[0]);if(rS(e))return e;let r=t.map(e=>i0(e)),n=[];return r.forEach(t=>{t instanceof r_?n.push(t):t instanceof rb&&(t.op===e.op?n.push(...t.filters):n.push(t))}),1===n.length?n[0]:rb.create(n,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Tn=new i2}addToCollectionParentIndex(e,t){return this.Tn.add(t),ed.resolve()}getCollectionParents(e,t){return ed.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return ed.resolve()}deleteFieldIndex(e,t){return ed.resolve()}deleteAllFieldIndexes(e){return ed.resolve()}createTargetIndexes(e,t){return ed.resolve()}getDocumentsMatchingTarget(e,t){return ed.resolve(null)}getIndexType(e,t){return ed.resolve(0)}getFieldIndexes(e,t){return ed.resolve([])}getNextCollectionGroupToUpdate(e){return ed.resolve(null)}getMinOffset(e,t){return ed.resolve(eo.min())}getMinOffsetFromCollectionGroup(e,t){return ed.resolve(eo.min())}updateCollectionGroup(e,t,r){return ed.resolve()}updateIndexEntries(e,t){return ed.resolve()}}class i2{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new tR(Q.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new tR(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i6="IndexedDbIndexManager",i3=new Uint8Array(0);class i5{constructor(e,t){this.databaseId=t,this.In=new i2,this.En=new r8(e=>rU(e),(e,t)=>rV(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){let r=t.lastSegment(),n=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});let i={collectionId:r,parent:eD(n)};return tT(e,e8).put(i)}return ed.resolve()}getCollectionParents(e,t){let r=[],n=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return tT(e,e8).G(n).next(e=>{for(let n of e){if(n.collectionId!==t)break;r.push(eR(n.parent))}return r})}addFieldIndex(e,t){let r=tT(e,tt),n={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete n.indexId;let i=r.add(n);if(t.indexState){let r=tT(e,tn);return i.next(e=>{r.put(iL(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let r=tT(e,tt),n=tT(e,tn),i=tT(e,to);return r.delete(t.indexId).next(()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=tT(e,tt),r=tT(e,to),n=tT(e,tn);return t.J().next(()=>r.J()).next(()=>n.J())}createTargetIndexes(e,t){return ed.forEach(this.dn(t),t=>this.getIndexType(e,t).next(r=>{if(0===r||1===r){let r=new iW(t).Pn();if(null!=r)return this.addFieldIndex(e,r)}}))}getDocumentsMatchingTarget(e,t){let r=tT(e,to),n=!0,i=new Map;return ed.forEach(this.dn(t),t=>this.An(e,t).next(e=>{n&&(n=!!e),i.set(t,e)})).next(()=>{if(n){let e=ni(),n=[];return ed.forEach(i,(i,s)=>{T(i6,`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${rU(t)}`);let a=function(e,t){let r=ee(t);if(void 0===r)return null;for(let t of rj(e,r.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),o=function(e,t){let r=new Map;for(let n of et(t))for(let t of rj(e,n.fieldPath))switch(t.op){case"==":case"in":r.set(n.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return r.set(n.fieldPath.canonicalString(),t.value),Array.from(r.values())}return null}(s,i),l=function(e,t){let r=[],n=!0;for(let i of et(t)){let t=0===i.kind?rq(e,i.fieldPath,e.startAt):rz(e,i.fieldPath,e.startAt);r.push(t.value),n&&(n=t.inclusive)}return new rm(r,n)}(s,i),u=function(e,t){let r=[],n=!0;for(let i of et(t)){let t=0===i.kind?rz(e,i.fieldPath,e.endAt):rq(e,i.fieldPath,e.endAt);r.push(t.value),n&&(n=t.inclusive)}return new rm(r,n)}(s,i),c=this.Rn(i,s,l),h=this.Rn(i,s,u),d=this.Vn(i,s,o),f=this.mn(i.indexId,a,c,l.inclusive,h,u.inclusive,d);return ed.forEach(f,i=>r.H(i,t.limit).next(t=>{t.forEach(t=>{let r=X.fromSegments(t.documentKey);e.has(r)||(e=e.add(r),n.push(r))})}))}).next(()=>n)}return ed.resolve(null)})}dn(e){let t=this.En.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof r_||t instanceof rb||C(),t instanceof r_)return t;if(1===t.filters.length)return e(t.filters[0]);let r=t.filters.map(t=>e(t)),n=rb.create(r,t.op);return iJ(n=i0(n))?n:(n instanceof rb||C(),rE(n)||C(),n.filters.length>1||C(),n.filters.reduce((e,t)=>iX(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var r,n;if(t instanceof r_||t instanceof rb||C(),t instanceof r_){if(t instanceof rO){let e=(null===(n=null===(r=t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>r_.create(t.field,"==",e)))||[];return rb.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return rb.create(i,t.op)}(e));return iJ(t)||C(),iQ(t)||iY(t)?[t]:t.getFilters()})(rb.create(e.filters,"and")).map(t=>rF(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t)),t}mn(e,t,r,n,i,s,a){let o=(null!=t?t.length:1)*Math.max(r.length,i.length),l=o/(null!=t?t.length:1),u=[];for(let c=0;c<o;++c){let o=t?this.fn(t[c/l]):i3,h=this.gn(e,o,r[c%l],n),d=this.pn(e,o,i[c%l],s),f=a.map(t=>this.gn(e,o,t,!0));u.push(...this.createRange(h,d,f))}return u}gn(e,t,r,n){let i=new i$(e,X.empty(),t,r);return n?i:i.nn()}pn(e,t,r,n){let i=new i$(e,X.empty(),t,r);return n?i.nn():i}An(e,t){let r=new iW(t),n=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,n).next(e=>{let t=null;for(let n of e)r.un(n)&&(!t||n.fields.length>t.fields.length)&&(t=n);return t})}getIndexType(e,t){let r=2,n=this.dn(t);return ed.forEach(n,t=>this.An(e,t).next(e=>{e?0!==r&&e.fields.length<function(e){let t=new tR(J.comparator),r=!1;for(let n of e.filters)for(let e of n.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?r=!0:t=t.add(e.field));for(let r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+ +!!r}(t)&&(r=1):r=0})).next(()=>null!==t.limit&&n.length>1&&2===r?1:r)}yn(e,t){let r=new iG;for(let n of et(e)){let e=t.data.field(n.fieldPath);if(null==e)return null;let i=r.tn(n.kind);iV.xt.At(e,i)}return r.Yt()}fn(e){let t=new iG;return iV.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){let r=new iG;return iV.xt.At(rr(this.databaseId,t),r.tn(function(e){let t=et(e);return 0===t.length?0:t[t.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(null===r)return[];let n=[];n.push(new iG);let i=0;for(let s of et(e)){let e=r[i++];for(let r of n)if(this.Sn(t,s.fieldPath)&&ri(e))n=this.bn(n,s,e);else{let t=r.tn(s.kind);iV.xt.At(e,t)}}return this.Dn(n)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){let n=[...e],i=[];for(let e of r.arrayValue.values||[])for(let r of n){let n=new iG;n.seed(r.Yt()),iV.xt.At(e,n.tn(t.kind)),i.push(n)}return i}Sn(e,t){return!!e.filters.find(e=>e instanceof r_&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let r=tT(e,tt),n=tT(e,tn);return(t?r.G(tr,IDBKeyRange.bound(t,t)):r.G()).next(e=>{let t=[];return ed.forEach(e,e=>n.get([e.indexId,this.uid]).next(r=>{t.push(function(e,t){let r=t?new ei(t.sequenceNumber,new eo(iC(t.readTime),new X(eR(t.documentKey)),t.largestBatchId)):ei.empty(),n=e.fields.map(([e,t])=>new en(J.fromServerFormat(e),t));return new Z(e.indexId,e.collectionGroup,n,r)}(e,r))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let r=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==r?r:z(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,r){let n=tT(e,tt),i=tT(e,tn);return this.vn(e).next(e=>n.G(tr,IDBKeyRange.bound(t,t)).next(t=>ed.forEach(t,t=>i.put(iL(t.indexId,this.uid,e,r)))))}updateIndexEntries(e,t){let r=new Map;return ed.forEach(t,(t,n)=>{let i=r.get(t.collectionGroup);return(i?ed.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(r.set(t.collectionGroup,i),ed.forEach(i,r=>this.Cn(e,t,r).next(t=>{let i=this.Fn(n,r);return t.isEqual(i)?ed.resolve():this.Mn(e,n,r,t,i)}))))})}xn(e,t,r,n){return tT(e,to).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,n){return tT(e,to).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){let n=tT(e,to),i=new tR(iK);return n.Z({index:tu,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(e,n)=>{i=i.add(new i$(r.indexId,t,n.arrayValue,n.directionalValue))}).next(()=>i)}Fn(e,t){let r=new tR(iK),n=this.yn(t,e);if(null==n)return r;let i=ee(t);if(null!=i){let s=e.data.field(i.fieldPath);if(ri(s))for(let i of s.arrayValue.values||[])r=r.add(new i$(t.indexId,e.key,this.fn(i),n))}else r=r.add(new i$(t.indexId,e.key,i3,n));return r}Mn(e,t,r,n,i){T(i6,"Updating index entries for document '%s'",t.key);let s=[];return function(e,t,r,n,i){let s=e.getIterator(),a=t.getIterator(),o=tP(s),l=tP(a);for(;o||l;){let e=!1,t=!1;if(o&&l){let n=r(o,l);n<0?t=!0:n>0&&(e=!0)}else null!=o?t=!0:e=!0;e?(n(l),l=tP(a)):t?(i(o),o=tP(s)):(o=tP(s),l=tP(a))}}(n,i,iK,n=>{s.push(this.xn(e,t,r,n))},n=>{s.push(this.On(e,t,r,n))}),ed.waitFor(s)}vn(e){let t=1;return tT(e,tn).Z({index:ts,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,r,n)=>{n.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((e,t)=>iK(e,t)).filter((e,t,r)=>!t||0!==iK(e,r[t-1]));let n=[];for(let i of(n.push(e),r)){let r=iK(i,e),s=iK(i,t);if(0===r)n[0]=e.nn();else if(r>0&&s<0)n.push(i),n.push(i.nn());else if(s>0)break}n.push(t);let i=[];for(let e=0;e<n.length;e+=2){if(this.Nn(n[e],n[e+1]))return[];let t=[n[e].indexId,this.uid,n[e].arrayValue,n[e].directionalValue,i3,[]],r=[n[e+1].indexId,this.uid,n[e+1].arrayValue,n[e+1].directionalValue,i3,[]];i.push(IDBKeyRange.bound(t,r))}return i}Nn(e,t){return iK(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(i8)}getMinOffset(e,t){return ed.mapArray(this.dn(t),t=>this.An(e,t).next(e=>e||C())).next(i8)}}function i8(e){0!==e.length||C();let t=e[0].indexState.offset,r=t.largestBatchId;for(let n=1;n<e.length;n++){let i=e[n].indexState.offset;0>el(i,t)&&(t=i),r<i.largestBatchId&&(r=i.largestBatchId)}return new eo(t.readTime,t.documentKey,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i4={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class i7{static withCacheSize(e){return new i7(e,i7.DEFAULT_COLLECTION_PERCENTILE,i7.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i9(e,t,r){let n=e.store(eF),i=e.store(eq),s=[],a=IDBKeyRange.only(r.batchId),o=0,l=n.Z({range:a},(e,t,r)=>(o++,r.delete()));s.push(l.next(()=>{1===o||C()}));let u=[];for(let e of r.mutations){var c,h;let n=(c=e.key.path,h=r.batchId,[t,eD(c),h]);s.push(i.delete(n)),u.push(e.key)}return ed.waitFor(s).next(()=>u)}function se(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw C();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i7.DEFAULT_COLLECTION_PERCENTILE=10,i7.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,i7.DEFAULT=new i7(0x2800000,i7.DEFAULT_COLLECTION_PERCENTILE,i7.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),i7.DISABLED=new i7(-1,0,0);class st{constructor(e,t,r,n){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=n,this.Bn={}}static It(e,t,r,n){return""!==e.uid||C(),new st(e.isAuthenticated()?e.uid:"",t,r,n)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).Z({index:eV,range:r},(e,r,n)=>{t=!1,n.done()}).next(()=>t)}addMutationBatch(e,t,r,n){let i=tT(e,eq),s=sn(e);return s.add({}).next(a=>{var o;"number"==typeof a||C();let l=new nP(a,t,r,n),u=function(e,t,r){let n=r.baseMutations.map(t=>ip(e.Tt,t)),i=r.mutations.map(t=>ip(e.Tt,t));return{userId:t,batchId:r.batchId,localWriteTimeMs:r.localWriteTime.toMillis(),baseMutations:n,mutations:i}}(this.serializer,this.userId,l),c=[],h=new tR((e,t)=>z(e.canonicalString(),t.canonicalString()));for(let e of n){let t=(o=this.userId,[o,eD(e.key.path),a]);h=h.add(e.key.path.popLast()),c.push(s.put(u)),c.push(i.put(t,ej))}return h.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Bn[a]=l.keys()}),ed.waitFor(c).next(()=>l)})}lookupMutationBatch(e,t){return sn(e).get(t).next(e=>e?(e.userId===this.userId||C(),ik(this.serializer,e)):null)}Ln(e,t){return this.Bn[t]?ed.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let r=e.keys();return this.Bn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,n=IDBKeyRange.lowerBound([this.userId,r]),i=null;return sn(e).Z({index:eV,range:n},(e,t,n)=>{t.userId===this.userId&&(t.batchId>=r||C(),i=ik(this.serializer,t)),n.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return sn(e).Z({index:eV,range:t,reverse:!0},(e,t,n)=>{r=t.batchId,n.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).G(eV,t).next(e=>e.map(e=>ik(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=[this.userId,eD(t.path)],n=IDBKeyRange.lowerBound(r),i=[];return tT(e,eq).Z({range:n},(r,n,s)=>{let[a,o,l]=r,u=eR(o);if(a===this.userId&&t.path.isEqual(u))return sn(e).get(l).next(e=>{if(!e)throw C();e.userId===this.userId||C(),i.push(ik(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tR(z),n=[];return t.forEach(t=>{let i=[this.userId,eD(t.path)],s=IDBKeyRange.lowerBound(i),a=tT(e,eq).Z({range:s},(e,n,i)=>{let[s,a,o]=e,l=eR(a);s===this.userId&&t.path.isEqual(l)?r=r.add(o):i.done()});n.push(a)}),ed.waitFor(n).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=[this.userId,eD(r)],s=IDBKeyRange.lowerBound(i),a=new tR(z);return tT(e,eq).Z({range:s},(e,t,i)=>{let[s,o,l]=e,u=eR(o);s===this.userId&&r.isPrefixOf(u)?u.length===n&&(a=a.add(l)):i.done()}).next(()=>this.kn(e,a))}kn(e,t){let r=[],n=[];return t.forEach(t=>{n.push(sn(e).get(t).next(e=>{if(null===e)throw C();e.userId===this.userId||C(),r.push(ik(this.serializer,e))}))}),ed.waitFor(n).next(()=>r)}removeMutationBatch(e,t){return i9(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),ed.forEach(r,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ed.resolve();let r=IDBKeyRange.lowerBound([this.userId]),n=[];return tT(e,eq).Z({range:r},(e,t,r)=>{if(e[0]===this.userId){let t=eR(e[1]);n.push(t)}else r.done()}).next(()=>{0===n.length||C()})})}containsKey(e,t){return sr(e,this.userId,t)}Qn(e){return tT(e,eM).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sr(e,t,r){let n=[t,eD(r.path)],i=n[1],s=IDBKeyRange.lowerBound(n),a=!1;return tT(e,eq).Z({range:s,Y:!0},(e,r,n)=>{let[s,o,l]=e;s===t&&o===i&&(a=!0),n.done()}).next(()=>a)}function sn(e){return tT(e,eF)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new si(0)}static Un(){return new si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{let r=new si(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(e=>K.fromTimestamp(new $(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(n=>(n.highestListenSequenceNumber=t,r&&(n.lastRemoteSnapshotVersion=r.toTimestamp()),t>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t),this.Gn(e,n)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>tT(e,eJ).delete(t.targetId)).next(()=>this.Wn(e)).next(t=>(t.targetCount>0||C(),t.targetCount-=1,this.Gn(e,t)))}removeTargets(e,t,r){let n=0,i=[];return tT(e,eJ).Z((s,a)=>{let o=iN(a);o.sequenceNumber<=t&&null===r.get(o.targetId)&&(n++,i.push(this.removeTargetData(e,o)))}).next(()=>ed.waitFor(i)).next(()=>n)}forEachTarget(e,t){return tT(e,eJ).Z((e,r)=>{t(iN(r))})}Wn(e){return tT(e,e5).get(e3).next(e=>(null!==e||C(),e))}Gn(e,t){return tT(e,e5).put(e3,t)}zn(e,t){return tT(e,eJ).put(iD(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(e=>e.targetCount)}getTargetData(e,t){let r=rU(t),n=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),i=null;return tT(e,eJ).Z({range:n,index:eX},(e,r,n)=>{let s=iN(r);rV(t,s.target)&&(i=s,n.done())}).next(()=>i)}addMatchingKeys(e,t,r){let n=[],i=sa(e);return t.forEach(t=>{let s=eD(t.path);n.push(i.put({targetId:r,path:s})),n.push(this.referenceDelegate.addReference(e,r,t))}),ed.waitFor(n)}removeMatchingKeys(e,t,r){let n=sa(e);return ed.forEach(t,t=>{let i=eD(t.path);return ed.waitFor([n.delete([r,i]),this.referenceDelegate.removeReference(e,r,t)])})}removeMatchingKeysForTargetId(e,t){let r=sa(e),n=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(n)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),n=sa(e),i=ni();return n.Z({range:r,Y:!0},(e,t,r)=>{let n=new X(eR(e[1]));i=i.add(n)}).next(()=>i)}containsKey(e,t){let r=eD(t.path),n=IDBKeyRange.bound([r],[r+"\0"],!1,!0),i=0;return sa(e).Z({index:e2,Y:!0,range:n},([e,t],r,n)=>{0!==e&&(i++,n.done())}).next(()=>i>0)}lt(e,t){return tT(e,eJ).get(t).next(e=>e?iN(e):null)}}function sa(e){return tT(e,e0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so="LruGarbageCollector";function sl([e,t],[r,n]){let i=z(e,r);return 0===i?z(t,n):i}class su{constructor(e){this.Hn=e,this.buffer=new tR(sl),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sl(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sc{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){T(so,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ew(e)?T(so,"Ignoring IndexedDB error during garbage collection: ",e):await eh(e)}await this.er(3e5)})}}class sh{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ed.resolve(eA.ae);let r=new su(t);return this.tr.forEachTarget(e,e=>r.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>r.Zn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(T("LruGarbageCollector","Garbage collection skipped; disabled"),ed.resolve(i4)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(T("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i4):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,n,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(T("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),b()<=h.LogLevel.DEBUG&&T("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ed.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.db=e,this.garbageCollector=new sh(this,t)}nr(e){let t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(e,r)=>t(r))}addReference(e,t,r){return sf(e,r)}removeReference(e,t,r){return sf(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return sf(e,t)}ar(e,t){let r;return r=!1,tT(e,eM).X(n=>sr(e,n,t).next(e=>(e&&(r=!0),ed.resolve(!e)))).next(()=>r)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[],i=0;return this._r(e,(s,a)=>{if(a<=t){let t=this.ar(e,s).next(t=>{if(!t)return i++,r.getEntry(e,s).next(()=>(r.removeEntry(s,K.min()),sa(e).delete([0,eD(s.path)])))});n.push(t)}}).next(()=>ed.waitFor(n)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return sf(e,t)}_r(e,t){let r=sa(e),n,i=eA.ae;return r.Z({index:e2},([e,r],{path:s,sequenceNumber:a})=>{0===e?(i!==eA.ae&&t(new X(eR(n)),i),i=a,n=s):i=eA.ae}).next(()=>{i!==eA.ae&&t(new X(eR(n)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sf(e,t){var r;return sa(e).put((r=e.currentSequenceNumber,{targetId:0,path:eD(t.path),sequenceNumber:r}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.changes=new r8(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rg.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?ed.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return tT(e,ez).put(r)}removeEntry(e,t,r){return tT(e,ez).delete(function(e,t){let r=e.path.toArray();return[r.slice(0,r.length-2),r[r.length-2],iS(t),r[r.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=rg.newInvalidDocument(t);return tT(e,ez).Z({index:e$,range:IDBKeyRange.only(sy(t))},(e,n)=>{r=this.cr(t,n)}).next(()=>r)}lr(e,t){let r={size:0,document:rg.newInvalidDocument(t)};return tT(e,ez).Z({index:e$,range:IDBKeyRange.only(sy(t))},(e,n)=>{r={document:this.cr(t,n),size:se(n)}}).next(()=>r)}getEntries(e,t){let r=r4;return this.hr(e,t,(e,t)=>{let n=this.cr(e,t);r=r.insert(e,n)}).next(()=>r)}Pr(e,t){let r=r4,n=new tk(X.comparator);return this.hr(e,t,(e,t)=>{let i=this.cr(e,t);r=r.insert(e,i),n=n.insert(e,se(t))}).next(()=>({documents:r,Tr:n}))}hr(e,t,r){if(t.isEmpty())return ed.resolve();let n=new tR(sw);t.forEach(e=>n=n.add(e));let i=IDBKeyRange.bound(sy(n.first()),sy(n.last())),s=n.getIterator(),a=s.getNext();return tT(e,ez).Z({index:e$,range:i},(e,t,n)=>{let i=X.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;a&&0>sw(a,i);)r(a,null),a=s.getNext();a&&a.isEqual(i)&&(r(a,t),a=s.hasNext()?s.getNext():null),a?n.W(sy(a)):n.done()}).next(()=>{for(;a;)r(a,null),a=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,r,n,i){let s=t.path,a=[s.popLast().toArray(),s.lastSegment(),iS(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],o=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return tT(e,ez).G(IDBKeyRange.bound(a,o,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let r=r4;for(let i of e){let e=this.cr(X.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(r6(t,e)||n.has(e.key))&&(r=r.insert(e.key,e))}return r})}getAllFromCollectionGroup(e,t,r,n){let i=r4,s=sv(t,r),a=sv(t,eo.max());return tT(e,ez).Z({index:eH,range:IDBKeyRange.bound(s,a,!0)},(e,t,r)=>{let s=this.cr(X.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===n&&r.done()}).next(()=>i)}newChangeBuffer(e){return new sm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return tT(e,eQ).get(eY).next(e=>(e||C(),e))}ur(e,t){return tT(e,eQ).put(eY,t)}cr(e,t){if(t){let e=function(e,t){let r;if(t.document)r=id(e.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=X.fromSegments(t.noDocument.path),n=iC(t.noDocument.readTime);r=rg.newNoDocument(e,n),t.hasCommittedMutations&&r.setHasCommittedMutations()}else{if(!t.unknownDocument)return C();{let e=X.fromSegments(t.unknownDocument.path),n=iC(t.unknownDocument.version);r=rg.newUnknownDocument(e,n)}}return t.readTime&&r.setReadTime(function(e){let t=new $(e[0],e[1]);return K.fromTimestamp(t)}(t.readTime)),r}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(K.min())))return e}return rg.newInvalidDocument(e)}}class sm extends sp{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new r8(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],r=0,n=new tR((e,t)=>z(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let a=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,a.readTime)),s.isValidDocument()){let o=ix(this.Ir.serializer,s);n=n.add(i.path.popLast());let l=se(o);r+=l-a.size,t.push(this.Ir.addEntry(e,i,o))}else if(r-=a.size,this.trackRemovals){let r=ix(this.Ir.serializer,s.convertToNoDocument(K.min()));t.push(this.Ir.addEntry(e,i,r))}}),n.forEach(r=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Ir.updateMetadata(e,r)),ed.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(e=>(this.Er.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:e,Tr:t})=>(t.forEach((t,r)=>{this.Er.set(t,{size:r,readTime:e.get(t).readTime})}),e))}}function sy(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function sv(e,t){let r=t.documentKey.path.toArray();return[e,iS(t.readTime),r.slice(0,r.length-2),r.length>0?r[r.length-1]:""]}function sw(e,t){let r=e.path.toArray(),n=t.path.toArray(),i=0;for(let e=0;e<r.length-2&&e<n.length-2;++e)if(i=z(r[e],n[e]))return i;return(i=z(r.length,n.length))||(i=z(r[r.length-2],n[n.length-2]))||z(r[r.length-1],n[n.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&nx(r.mutation,e,tL.empty(),$.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ni()).next(()=>t))}getLocalViewOfDocuments(e,t,r=ni()){let n=nt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=r9();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ni()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=r4,s=nt(),a=nt();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof nC)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nx(a.mutation,t,a.mutation.getFieldMask(),$.now())):s.set(t.key,tL.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new sI(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=nt(),n=new tk((e,t)=>e-t),i=ni();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||tL.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||ni()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=nt();l.forEach(e=>{if(!i.has(e)){let n=nT(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return ed.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):rH(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):ed.resolve(nt()),a=-1,o=i;return s.next(t=>ed.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?ed.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ni())).next(e=>({batchId:a,changes:ne(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=r9();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=r9();return this.indexManager.getCollectionParents(e,i).next(a=>ed.forEach(a,a=>{let o=new rG(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rg.newInvalidDocument(n)))});let r=r9();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&nx(s.mutation,n,tL.empty(),$.now()),r6(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return ed.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:ie(t.createTime)}),ed.resolve()}getNamedQuery(e,t){return ed.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:iR(t.bundledQuery),readTime:ie(t.readTime)}),ed.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.overlays=new tk(X.comparator),this.Rr=new Map}getOverlay(e,t){return ed.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nt();return ed.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Et(e,t,n)}),ed.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Rr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(r)),ed.resolve()}getOverlaysForCollection(e,t,r){let n=nt(),i=t.length+1,s=new X(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return ed.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new tk((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nt(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=nt(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return ed.resolve(a)}Et(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Rr.get(n.largestBatchId).delete(r.key);this.Rr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new nM(t,r));let i=this.Rr.get(t);void 0===i&&(i=ni(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.sessionToken=tU.EMPTY_BYTE_STRING}getSessionToken(e){return ed.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ed.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(){this.Vr=new tR(sS.mr),this.gr=new tR(sS.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let r=new sS(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new sS(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new X(new Q([])),r=new sS(t,e),n=new sS(t,e+1),i=[];return this.gr.forEachInRange([r,n],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new X(new Q([])),r=new sS(t,e),n=new sS(t,e+1),i=ni();return this.gr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sS(e,0),r=this.Vr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class sS{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return X.comparator(e.key,t.key)||z(e.Cr,t.Cr)}static pr(e,t){return z(e.Cr,t.Cr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new tR(sS.mr)}checkEmpty(e){return ed.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nP(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Mr=this.Mr.add(new sS(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ed.resolve(s)}lookupMutationBatch(e,t){return ed.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Nr(t+1),n=r<0?0:r;return ed.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return ed.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return ed.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new sS(t,0),n=new sS(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,n],e=>{let t=this.Or(e.Cr);i.push(t)}),ed.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tR(z);return t.forEach(e=>{let t=new sS(e,0),n=new sS(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,n],e=>{r=r.add(e.Cr)})}),ed.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;X.isDocumentKey(i)||(i=i.child(""));let s=new sS(new X(i),0),a=new tR(z);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Cr)),!0)},s),ed.resolve(this.Br(a))}Br(e){let t=[];return e.forEach(e=>{let r=this.Or(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||C(),this.mutationQueue.shift();let r=this.Mr;return ed.forEach(t.mutations,n=>{let i=new sS(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){let r=new sS(t,0),n=this.Mr.firstAfterOrEqual(r);return ed.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,ed.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.kr=e,this.docs=new tk(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return ed.resolve(r?r.document.mutableCopy():rg.newInvalidDocument(t))}getEntries(e,t){let r=r4;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rg.newInvalidDocument(e))}),ed.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=r4,s=t.path,a=new X(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=el(ea(a),r)||(n.has(a.key)||r6(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ed.resolve(i)}getAllFromCollectionGroup(e,t,r,n){C()}qr(e,t){return ed.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sk(this)}getSize(e){return ed.resolve(this.size)}}class sk extends sp{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Ir.addEntry(e,n)):this.Ir.removeEntry(r)}),ed.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.persistence=e,this.Qr=new r8(e=>rU(e),rV),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sx,this.targetCount=0,this.Ur=si.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,r)=>t(r)),ed.resolve()}getLastRemoteSnapshotVersion(e){return ed.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ed.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),ed.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),ed.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new si(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,ed.resolve()}updateTargetData(e,t){return this.zn(t),ed.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,ed.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Qr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),ed.waitFor(i).next(()=>n)}getTargetCount(e){return ed.resolve(this.targetCount)}getTargetData(e,t){let r=this.Qr.get(t)||null;return ed.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),ed.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),ed.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),ed.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Kr.vr(t);return ed.resolve(r)}containsKey(e,t){return ed.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new eA(0),this.zr=!1,this.zr=!0,this.jr=new sT,this.referenceDelegate=e(this),this.Hr=new sN(this),this.indexManager=new i1,this.remoteDocumentCache=new sC(e=>this.referenceDelegate.Jr(e)),this.serializer=new iT(t),this.Yr=new sb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new sA(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){T("MemoryPersistence","Starting transaction:",e);let n=new sR(this.Gr.next());return this.referenceDelegate.Zr(),r(n).next(e=>this.referenceDelegate.Xr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}ei(e,t){return ed.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class sR extends ec{constructor(e){super(),this.currentSequenceNumber=e}}class sO{constructor(e){this.persistence=e,this.ti=new sx,this.ni=null}static ri(e){return new sO(e)}get ii(){if(this.ni)return this.ni;throw C()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),ed.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),ed.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),ed.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ed.forEach(this.ii,r=>{let n=X.fromPath(r);return this.si(e,n).next(e=>{e||t.removeEntry(n,K.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return ed.or([()=>ed.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sP{constructor(e,t){this.persistence=e,this.oi=new r8(e=>eD(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new sh(this,t)}static ri(e,t){return new sP(e,t)}Zr(){}Xr(e){return ed.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return ed.forEach(this.oi,(r,n)=>this.ar(e,r,n).next(e=>e?ed.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.qr(e,n=>this.ar(e,n,t).next(e=>{e||(r++,i.removeEntry(n,K.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),ed.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),ed.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),ed.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),ed.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(t5(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=tW(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return tq(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,tS(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw C()}}(e.data.value)),t}ar(e,t,r){return ed.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return ed.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this.serializer=e}B(e,t,r,n){let i=new ep("createOrUpgrade",t);r<1&&n>=1&&(!function(e){e.createObjectStore(eP)}(e),e.createObjectStore(eM,{keyPath:"userId"}),e.createObjectStore(eF,{keyPath:eU,autoIncrement:!0}).createIndex(eV,eB,{unique:!0}),e.createObjectStore(eq),sM(e),function(e){e.createObjectStore(eO)}(e));let s=ed.resolve();return r<3&&n>=3&&(0!==r&&(e.deleteObjectStore(e0),e.deleteObjectStore(eJ),e.deleteObjectStore(e5),sM(e)),s=s.next(()=>(function(e){let t=e.store(e5),r={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return t.put(e3,r)})(i))),r<4&&n>=4&&(0!==r&&(s=s.next(()=>i.store(eF).G().next(t=>{e.deleteObjectStore(eF),e.createObjectStore(eF,{keyPath:eU,autoIncrement:!0}).createIndex(eV,eB,{unique:!0});let r=i.store(eF),n=t.map(e=>r.put(e));return ed.waitFor(n)}))),s=s.next(()=>{!function(e){e.createObjectStore(e7,{keyPath:"clientId"})}(e)})),r<5&&n>=5&&(s=s.next(()=>this._i(i))),r<6&&n>=6&&(s=s.next(()=>((function(e){e.createObjectStore(eQ)})(e),this.ai(i)))),r<7&&n>=7&&(s=s.next(()=>this.ui(i))),r<8&&n>=8&&(s=s.next(()=>this.ci(e,i))),r<9&&n>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),r<10&&n>=10&&(s=s.next(()=>this.li(i))),r<11&&n>=11&&(s=s.next(()=>{(function(e){e.createObjectStore(e9,{keyPath:"bundleId"})})(e),function(e){e.createObjectStore(te,{keyPath:"name"})}(e)})),r<12&&n>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore(th,{keyPath:td});t.createIndex(tf,tp,{unique:!1}),t.createIndex(tg,tm,{unique:!1})}(e)})),r<13&&n>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore(ez,{keyPath:eG});t.createIndex(e$,eK),t.createIndex(eH,eW)})(e)).next(()=>this.hi(e,i)).next(()=>e.deleteObjectStore(eO))),r<14&&n>=14&&(s=s.next(()=>this.Pi(e,i))),r<15&&n>=15&&(s=s.next(()=>{e.createObjectStore(tt,{keyPath:"indexId",autoIncrement:!0}).createIndex(tr,"collectionGroup",{unique:!1}),e.createObjectStore(tn,{keyPath:ti}).createIndex(ts,ta,{unique:!1}),e.createObjectStore(to,{keyPath:tl}).createIndex(tu,tc,{unique:!1})})),r<16&&n>=16&&(s=s.next(()=>{t.objectStore(tn).clear()}).next(()=>{t.objectStore(to).clear()})),r<17&&n>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(ty,{keyPath:"name"})}(e)})),s}ai(e){let t=0;return e.store(eO).Z((e,r)=>{t+=se(r)}).next(()=>{let r={byteSize:t};return e.store(eQ).put(eY,r)})}_i(e){let t=e.store(eM),r=e.store(eF);return t.G().next(t=>ed.forEach(t,t=>{let n=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return r.G(eV,n).next(r=>ed.forEach(r,r=>{r.userId===t.userId||C();let n=ik(this.serializer,r);return i9(e,t.userId,n).next(()=>{})}))}))}ui(e){let t=e.store(e0),r=e.store(eO);return e.store(e5).get(e3).next(e=>{let n=[];return r.Z((r,i)=>{let s=new Q(r),a=[0,eD(s)];n.push(t.get(a).next(r=>r?ed.resolve():t.put({targetId:0,path:eD(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ed.waitFor(n))})}ci(e,t){e.createObjectStore(e8,{keyPath:e4});let r=t.store(e8),n=new i2,i=e=>{if(n.add(e)){let t=e.lastSegment(),n=e.popLast();return r.put({collectionId:t,parent:eD(n)})}};return t.store(eO).Z({Y:!0},(e,t)=>i(new Q(e).popLast())).next(()=>t.store(eq).Z({Y:!0},([e,t,r],n)=>i(eR(t).popLast())))}li(e){let t=e.store(eJ);return t.Z((e,r)=>{let n=iN(r),i=iD(this.serializer,n);return t.put(i)})}hi(e,t){let r=t.store(eO),n=[];return r.Z((e,r)=>{let i=t.store(ez),s=(r.document?new X(Q.fromString(r.document.name).popFirst(5)):r.noDocument?X.fromSegments(r.noDocument.path):r.unknownDocument?X.fromSegments(r.unknownDocument.path):C()).path.toArray(),a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:r.readTime||[0,0],unknownDocument:r.unknownDocument,noDocument:r.noDocument,document:r.document,hasCommittedMutations:!!r.hasCommittedMutations};n.push(i.put(a))}).next(()=>ed.waitFor(n))}Pi(e,t){let r=t.store(eF),n=new sg(this.serializer),i=new sD(sO.ri,this.serializer.Tt);return r.G().next(e=>{let r=new Map;return e.forEach(e=>{var t;let n=null!==(t=r.get(e.userId))&&void 0!==t?t:ni();ik(this.serializer,e).keys().forEach(e=>n=n.add(e)),r.set(e.userId,n)}),ed.forEach(r,(e,r)=>{let s=new w(r),a=iF.It(this.serializer,s),o=i.getIndexManager(s);return new s_(n,st.It(s,this.serializer,o,i.referenceDelegate),a,o).recalculateAndSaveOverlaysForDocumentKeys(new tE(t,eA.ae),e).next()})})}}function sM(e){e.createObjectStore(e0,{keyPath:e1}).createIndex(e2,e6,{unique:!0}),e.createObjectStore(eJ,{keyPath:"targetId"}).createIndex(eX,eZ,{unique:!0}),e.createObjectStore(e5)}let sF="IndexedDbPersistence",sU="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",sV="main";class sB{constructor(e,t,r,n,i,s,a,o,l,u,c=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=i,this.window=s,this.document=a,this.Ii=l,this.Ei=u,this.di=c,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!sB.D())throw new D(N.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sd(this,n),this.gi=t+sV,this.serializer=new iT(o),this.pi=new eg(this.gi,this.di,new sL(this.serializer)),this.jr=new iU,this.Hr=new ss(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new sg(this.serializer),this.Yr=new iM,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,!1===u&&x(sF,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(N.FAILED_PRECONDITION,sU);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new eA(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tT(e,e7).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(ew(e))return T(sF,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return T(sF,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return tT(e,eP).get(eL).next(e=>ed.resolve(this.Ni(e)))}Bi(e){return tT(e,e7).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,18e5)){this.mi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=tT(e,e7);return t.G().next(e=>{let r=this.qi(e,18e5),n=e.filter(e=>-1===r.indexOf(e));return ed.forEach(n,e=>t.delete(e.clientId)).next(()=>n)})}).catch(()=>[]);if(this.yi)for(let t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?ed.resolve(!0):tT(e,eP).get(eL).next(t=>{if(null!==t&&this.ki(t.leaseTimestampMs,5e3)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new D(N.FAILED_PRECONDITION,sU);return!1}}return!(!this.networkEnabled||!this.inForeground)||tT(e,e7).G().next(e=>void 0===this.qi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,r=!this.inForeground&&e.inForeground,n=this.networkEnabled===e.networkEnabled;if(t||r&&n)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&T(sF,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[eP,e7],e=>{let t=new tE(e,eA.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(e=>this.ki(e.updateTimeMs,t)&&!this.$i(e.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>tT(e,e7).G().next(e=>this.qi(e,18e5).map(e=>e.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return st.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new i5(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return iF.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){var n;let i;T(sF,"Starting transaction:",e);let s=17===(n=this.di)?tb:16===n?t_:15===n?t_:14===n?tI:13===n?tI:12===n?tw:11===n?tv:void C();return this.pi.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,n=>(i=new tE(n,this.Gr?this.Gr.next():eA.ae),"readwrite-primary"===t?this.Fi(i).next(e=>!!e||this.Mi(i)).next(t=>{if(!t)throw x(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new D(N.FAILED_PRECONDITION,eu);return r(i)}).next(e=>this.Oi(i).next(()=>e)):this.ji(i).next(()=>r(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}ji(e){return tT(e,eP).get(eL).next(e=>{if(null!==e&&this.ki(e.leaseTimestampMs,5e3)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(N.FAILED_PRECONDITION,sU)})}Oi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tT(e,eP).put(eL,t)}static D(){return eg.D()}xi(e){let t=tT(e,eP);return t.get(eL).next(e=>this.Ni(e)?(T(sF,"Releasing primary lease."),t.delete(eL)):ed.resolve())}ki(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(x(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground="visible"===this.document.visibilityState)}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ai=()=>{this.Ki();let e=/(?:Version|Mobile)\/1[456]/;(0,d.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{let r=null!==(null===(t=this.yi)||void 0===t?void 0:t.getItem(this.Qi(e)));return T(sF,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(e){return x(sF,"Failed to get zombied client id.",e),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){x("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch(e){}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sj(e,t){let r=e.projectId;return e.isDefaultDatabase||(r+="."+e.database),"firestore/"+t+"/"+r+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=n}static Yi(e,t){let r=ni(),n=ni();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new sq(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sG{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(0,d.isSafari)()?8:em((0,d.getUA)())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new sz;return this._s(e,t,r).next(n=>{if(i.result=n,this.Xi)return this.us(e,t,r,n.size)})}).next(()=>i.result)}us(e,t,r,n){return r.documentReadCount<this.es?(b()<=h.LogLevel.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",r2(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),ed.resolve()):(b()<=h.LogLevel.DEBUG&&T("QueryEngine","Query:",r2(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ts*n?(b()<=h.LogLevel.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",r2(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rQ(t))):ed.resolve())}rs(e,t){if(rK(t))return ed.resolve(null);let r=rQ(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=rQ(t=rZ(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ni(...n);return this.ns.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.cs(t,n);return this.ls(t,s,i,r.readTime)?this.rs(e,rZ(t,null,"F")):this.hs(e,s,t,r)}))})))}ss(e,t,r,n){return rK(t)||n.isEqual(K.min())?ed.resolve(null):this.ns.getDocuments(e,r).next(i=>{let s=this.cs(t,i);return this.ls(t,s,r,n)?ed.resolve(null):(b()<=h.LogLevel.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),r2(t)),this.hs(e,s,t,es(n,-1)).next(e=>e))})}cs(e,t){let r=new tR(r5(e));return t.forEach((t,n)=>{r6(e,n)&&(r=r.add(n))}),r}ls(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}_s(e,t,r){return b()<=h.LogLevel.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",r2(t)),this.ns.getDocumentsMatchingQuery(e,t,eo.min(),r)}hs(e,t,r,n){return this.ns.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s$="LocalStore";class sK{constructor(e,t,r,n){this.persistence=e,this.Ps=t,this.serializer=n,this.Ts=new tk(z),this.Is=new r8(e=>rU(e),rV),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s_(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function sH(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=ni();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function sW(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function sQ(e,t,r){let n=ni(),i=ni();return r.forEach(e=>n=n.add(e)),t.getEntries(e,n).next(e=>{let n=r4;return r.forEach((r,s)=>{let a=e.get(r);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(r)),s.isNoDocument()&&s.version.isEqual(K.min())?(t.removeEntry(r,s.readTime),n=n.insert(r,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),n=n.insert(r,s)):T(s$,"Ignoring outdated watch update for ",r,". Current version:",a.version," Watch version:",s.version)}),{Vs:n,fs:i}})}function sY(e,t){return e.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return e.Hr.getTargetData(r,t).next(i=>i?(n=i,ed.resolve(n)):e.Hr.allocateTargetId(r).next(i=>(n=new iE(t,i,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,n).next(()=>n))))}).then(r=>{let n=e.Ts.get(r.targetId);return(null===n||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function sJ(e,t,r){let n=e.Ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!ew(e))throw e;T(s$,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(n.target)}function sX(e,t,r){let n=K.min(),i=ni();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Is.get(r);return void 0!==n?ed.resolve(e.Ts.get(n)):e.Hr.getTargetData(t,r)})(e,s,rQ(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,r?n:K.min(),r?i:ni())).next(r=>(s1(e,r3(t),r),{documents:r,gs:i})))}function sZ(e,t){let r=e.Hr,n=e.Ts.get(t);return n?Promise.resolve(n.target):e.persistence.runTransaction("Get target data","readonly",e=>r.lt(e,t).next(e=>e?e.target:null))}function s0(e,t){let r=e.Es.get(t)||K.min();return e.persistence.runTransaction("Get new document changes","readonly",n=>e.ds.getAllFromCollectionGroup(n,t,es(r,-1),Number.MAX_SAFE_INTEGER)).then(r=>(s1(e,t,r),r))}function s1(e,t,r){let n=e.Es.get(t)||K.min();r.forEach((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)}),e.Es.set(t,n)}async function s2(e,t,r,n){let i=ni(),s=r4;for(let e of r){let r=t.ps(e.metadata.name);e.document&&(i=i.add(r));let n=t.ys(e);n.setReadTime(t.ws(e.metadata.readTime)),s=s.insert(r,n)}let a=e.ds.newChangeBuffer({trackRemovals:!0}),o=await sY(e,rQ(r$(Q.fromString(`__bundle__/docs/${n}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>sQ(t,a,s).next(e=>(a.apply(t),e)).next(r=>e.Hr.removeMatchingKeysForTargetId(t,o.targetId).next(()=>e.Hr.addMatchingKeys(t,i,o.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,r.Vs,r.fs)).next(()=>r.Vs)))}async function s6(e,t,r=ni()){let n=await sY(e,rQ(iR(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=ie(t.readTime);if(n.snapshotVersion.compareTo(s)>=0)return e.Yr.saveNamedQuery(i,t);let a=n.withResumeToken(tU.EMPTY_BYTE_STRING,s);return e.Ts=e.Ts.insert(a.targetId,a),e.Hr.updateTargetData(i,a).next(()=>e.Hr.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>e.Hr.addMatchingKeys(i,r,n.targetId)).next(()=>e.Yr.saveNamedQuery(i,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s3="firestore_clients";function s5(e,t){return`${s3}_${e}_${t}`}let s8="firestore_mutations";function s4(e,t,r){let n=`${s8}_${e}_${r}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}let s7="firestore_targets";function s9(e,t){return`${s7}_${e}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae="SharedClientState";class at{constructor(e,t,r,n){this.user=e,this.batchId=t,this.state=r,this.error=n}static Ss(e,t,r){let n=JSON.parse(r),i,s="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(i=new D(n.error.code,n.error.message)),s?new at(e,t,n.state,i):(x(ae,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ar{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){let r=JSON.parse(t),n,i="object"==typeof r&&-1!==["not-current","current","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(n=new D(r.error.code,r.error.message)),i?new ar(e,r.state,n):(x(ae,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class an{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){let r=JSON.parse(t),n="object"==typeof r&&r.activeTargetIds instanceof Array,i=ns;for(let e=0;n&&e<r.activeTargetIds.length;++e)n=eN(r.activeTargetIds[e]),i=i.add(r.activeTargetIds[e]);return n?new an(e,i):(x(ae,`Failed to parse client data for instance '${e}': ${t}`),null)}}class ai{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new ai(t.clientId,t.onlineState):(x(ae,`Failed to parse online state: ${e}`),null)}}class as{constructor(){this.activeTargetIds=ns}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class aa{constructor(e,t,r,n,i){var s,a,o;this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new tk(z),this.started=!1,this.Os=[];let l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ns=s5(this.persistenceKey,this.Cs),this.Bs=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.xs=this.xs.insert(this.Cs,new as),this.Ls=RegExp(`^${s3}_${l}_([^_]*)$`),this.ks=RegExp(`^${s8}_${l}_(\\d+)(?:_(.*))?$`),this.qs=RegExp(`^${s7}_${l}_(\\d+)$`),this.Qs=(a=this.persistenceKey,`firestore_online_state_${a}`),this.$s=(o=this.persistenceKey,`firestore_bundle_loaded_v2_${o}`),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.zi())){if(e===this.Cs)continue;let t=this.getItem(s5(this.persistenceKey,e));if(t){let r=an.Ss(e,t);r&&(this.xs=this.xs.insert(r.clientId,r))}}this.Ks();let e=this.storage.getItem(this.Qs);if(e){let t=this.Us(e);t&&this.Ws(t)}for(let e of this.Os)this.Ms(e);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,n)=>{n.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let t=this.storage.getItem(s9(this.persistenceKey,e));if(t){let n=ar.Ss(e,t);n&&(r=n.state)}}return t&&this.Hs.Ds(e),this.Ks(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Ks()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(s9(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(e=>{this.js(e)}),this.currentUser=e,r.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return T(ae,"READ",e,t),t}setItem(e,t){T(ae,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){T(ae,"REMOVE",e),this.storage.removeItem(e)}Ms(e){if(e.storageArea===this.storage){if(T(ae,"EVENT",e.key,e.newValue),e.key===this.Ns)return void x("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Ls.test(e.key)){if(null==e.newValue){let t=this.Xs(e.key);return this.eo(t,null)}{let t=this.no(e.key,e.newValue);if(t)return this.eo(t.clientId,t)}}else if(this.ks.test(e.key)){if(null!==e.newValue){let t=this.ro(e.key,e.newValue);if(t)return this.io(t)}}else if(this.qs.test(e.key)){if(null!==e.newValue){let t=this.so(e.key,e.newValue);if(t)return this.oo(t)}}else if(e.key===this.Qs){if(null!==e.newValue){let t=this.Us(e.newValue);if(t)return this.Ws(t)}}else if(e.key===this.Bs){let t=function(e){let t=eA.ae;if(null!=e)try{let r=JSON.parse(e);"number"==typeof r||C(),t=r}catch(e){x(ae,"Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==eA.ae&&this.sequenceNumberHandler(t)}else if(e.key===this.$s){let t=this._o(e.newValue);await Promise.all(t.map(e=>this.syncEngine.ao(e)))}}}else this.Os.push(e)})}}get Hs(){return this.xs.get(this.Cs)}Ks(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){let n=new at(this.currentUser,e,t,r),i=s4(this.persistenceKey,this.currentUser,e);this.setItem(i,n.bs())}js(e){let t=s4(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){let t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){let n=s9(this.persistenceKey,e),i=new ar(e,t,r);this.setItem(n,i.bs())}Zs(e){let t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){let t=this.Ls.exec(e);return t?t[1]:null}no(e,t){let r=this.Xs(e);return an.Ss(r,t)}ro(e,t){let r=this.ks.exec(e),n=Number(r[1]),i=void 0!==r[2]?r[2]:null;return at.Ss(new w(i),n,t)}so(e,t){let r=Number(this.qs.exec(e)[1]);return ar.Ss(r,t)}Us(e){return ai.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);T(ae,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){let r=t?this.xs.insert(e,t):this.xs.remove(e),n=this.Gs(this.xs),i=this.Gs(r),s=[],a=[];return i.forEach(e=>{n.has(e)||s.push(e)}),n.forEach(e=>{i.has(e)||a.push(e)}),this.syncEngine.lo(s,a).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=ns;return e.forEach((e,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class ao{constructor(){this.ho=new as,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new as,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au="ConnectivityMonitor";class ac{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(T(au,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(T(au,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah=null;function ad(){return null===ah?ah=0x10000000+Math.round(0x80000000*Math.random()):ah++,"0x"+ah.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let af="RestConnection",ap={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ag{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo=this.databaseId.database===tJ?`project_id=${r}`:`project_id=${r}&database_id=${n}`}So(e,t,r,n,i){let s=ad(),a=this.bo(e,t.toUriEncodedString());T(af,`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(o,n,i),this.vo(e,a,o,r).then(t=>(T(af,`Received RPC '${e}' ${s}: `,t),t),t=>{throw S(af,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Co(e,t,r,n,i,s){return this.So(e,t,r,n,i)}Do(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+I,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}bo(e,t){let r=ap[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ay="WebChannelConnection";class av extends ag{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=ad();return new Promise((s,a)=>{let o=new p.XhrIo;o.setWithCredentials(!0),o.listenOnce(p.EventType.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case p.ErrorCode.NO_ERROR:let t=o.getResponseJson();T(ay,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case p.ErrorCode.TIMEOUT:T(ay,`RPC '${e}' ${i} timed out`),a(new D(N.DEADLINE_EXCEEDED,"Request time out"));break;case p.ErrorCode.HTTP_ERROR:let r=o.getStatus();if(T(ay,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(t)>=0?t:N.UNKNOWN}(t.status);a(new D(e,t.message))}else a(new D(N.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new D(N.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{T(ay,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);T(ay,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}Wo(e,t,r){let n=ad(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,p.createWebChannelTransport)(),o=(0,p.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");T(ay,`Creating RPC '${e}' stream ${n}: ${c}`,l);let h=a.createWebChannel(c,l),d=!1,f=!1,g=new am({Fo:t=>{f?T(ay,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(T(ay,`Opening RPC '${e}' stream ${n} transport.`),h.open(),d=!0),T(ay,`RPC '${e}' stream ${n} sending:`,t),h.send(t))},Mo:()=>h.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(h,p.WebChannel.EventType.OPEN,()=>{f||(T(ay,`RPC '${e}' stream ${n} transport opened.`),g.Qo())}),m(h,p.WebChannel.EventType.CLOSE,()=>{f||(f=!0,T(ay,`RPC '${e}' stream ${n} transport closed`),g.Ko())}),m(h,p.WebChannel.EventType.ERROR,t=>{f||(f=!0,S(ay,`RPC '${e}' stream ${n} transport errored:`,t),g.Ko(new D(N.UNAVAILABLE,"The operation could not be completed")))}),m(h,p.WebChannel.EventType.MESSAGE,t=>{var r;if(!f){let s=t.data[0];s||C();let a=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){T(ay,`RPC '${e}' stream ${n} received error:`,a);let t=a.status,r=function(e){let t=i[e];if(void 0!==t)return nB(t)}(t),s=a.message;void 0===r&&(r=N.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),f=!0,g.Ko(new D(r,s)),h.close()}else T(ay,`RPC '${e}' stream ${n} received:`,s),g.Uo(s)}}),m(o,p.Event.STAT_EVENT,t=>{t.stat===p.Stat.PROXY?T(ay,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===p.Stat.NOPROXY&&T(ay,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{g.$o()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(){return"undefined"!=typeof window?window:null}function aI(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(e){return new n8(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=n,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),n=Math.max(0,t-r);n>0&&T("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,n,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aE="PersistentStream";class aT{constructor(e,t,r,n,i,s,a,o){this.Ti=e,this.n_=r,this.r_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new ab(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(x(t.toString()),x("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===N.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.i_===t&&this.V_(e,r)},t=>{e(()=>{let e=new D(N.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{r(()=>this.m_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return T(aE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(T(aE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ax extends aT{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:C(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||C(),tU.fromBase64String(i||"")):(void 0===i||i instanceof m||i instanceof Uint8Array||C(),tU.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new nX(s,a,o,l&&new D(void 0===l.code?N.UNKNOWN:nB(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=ia(e,n.document.name),s=ie(n.document.updateTime),a=n.document.createTime?ie(n.document.createTime):K.min(),o=new rp({mapValue:{fields:n.document.fields}}),l=rg.newFoundDocument(i,s,a,o);r=new nY(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=ia(e,n.document),s=n.readTime?ie(n.readTime):K.min(),a=rg.newNoDocument(i,s);r=new nY([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=ia(e,n.document);r=new nY([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return C();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new nU(n,i);r=new nJ(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return K.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?K.min():t.readTime?ie(t.readTime):K.min()}(e);return this.listener.p_(t,r)}y_(e){let t={};t.database=iu(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=rB(n)?{documents:im(e,n)}:{query:iy(e,n).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=n9(e,t.resumeToken);let n=n4(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(K.min())>0){r.readTime=n7(e,t.snapshotVersion.toTimestamp());let n=n4(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){let t={};t.database=iu(this.serializer),t.removeTarget=e,this.I_(t)}}class aS extends aT{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||C(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&C(),this.listener.D_()}onNext(e){var t,r;e.streamToken||C(),this.lastStreamToken=e.streamToken,this.a_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||C(),t.map(e=>{let t;return(t=e.updateTime?ie(e.updateTime):ie(r)).isEqual(K.min())&&(t=ie(r)),new nI(t,e.transformResults||[])})):[]),i=ie(e.commitTime);return this.listener.v_(i,n)}C_(){let e={};e.database=iu(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>ip(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{}class aC extends aA{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.F_=!1}M_(){if(this.F_)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,n){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,ir(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(N.UNKNOWN,e.toString())})}Co(e,t,r,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,ir(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(N.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class ak{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(x(t),this.N_=!1):T("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aN="RemoteStore";class aD{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{r.enqueueAndForget(async()=>{aB(this)&&(T(aN,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await aO(e),e.j_.set("Unknown"),e.W_.delete(4),await aR(e)}(this))})}),this.j_=new ak(r,n)}}async function aR(e){if(aB(e))for(let t of e.G_)await t(!0)}async function aO(e){for(let t of e.G_)await t(!1)}function aP(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),aV(e)?aU(e):a2(e).c_()&&aM(e,t))}function aL(e,t){let r=a2(e);e.U_.delete(t),r.c_()&&aF(e,t),0===e.U_.size&&(r.c_()?r.P_():aB(e)&&e.j_.set("Unknown"))}function aM(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}a2(e).y_(t)}function aF(e,t){e.H_.Ne(t),a2(e).w_(t)}function aU(e){e.H_=new n0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),a2(e).start(),e.j_.B_()}function aV(e){return aB(e)&&!a2(e).u_()&&e.U_.size>0}function aB(e){return 0===e.W_.size}async function aj(e){e.j_.set("Online")}async function aq(e){e.U_.forEach((t,r)=>{aM(e,t)})}async function az(e,t){e.H_=void 0,aV(e)?(e.j_.q_(t),aU(e)):e.j_.set("Unknown")}async function aG(e,t,r){if(e.j_.set("Online"),t instanceof nX&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.U_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.U_.delete(n),e.H_.removeTarget(n))}(e,t)}catch(r){T(aN,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await a$(e,r)}else if(t instanceof nY?e.H_.We(t):t instanceof nJ?e.H_.Ze(t):e.H_.je(t),!r.isEqual(K.min()))try{let t=await sW(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.H_.ot(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.U_.get(n);i&&e.U_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.U_.get(t);if(!n)return;e.U_.set(t,n.withResumeToken(tU.EMPTY_BYTE_STRING,n.snapshotVersion)),aF(e,t);let i=new iE(n.target,t,r,n.sequenceNumber);aM(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){T(aN,"Failed to raise snapshot:",t),await a$(e,t)}}async function a$(e,t,r){if(!ew(t))throw t;e.W_.add(1),await aO(e),e.j_.set("Offline"),r||(r=()=>sW(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T(aN,"Retrying IndexedDB access"),await r(),e.W_.delete(1),await aR(e)})}function aK(e,t){return t().catch(r=>a$(e,r,t))}async function aH(e){var t;let r=a6(e),n=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;aB(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,n);if(null===t){0===e.K_.length&&r.P_();break}n=t.batchId,function(e,t){e.K_.push(t);let r=a6(e);r.c_()&&r.S_&&r.b_(t.mutations)}(e,t)}catch(t){await a$(e,t)}aW(e)&&aQ(e)}function aW(e){return aB(e)&&!a6(e).u_()&&e.K_.length>0}function aQ(e){a6(e).start()}async function aY(e){a6(e).C_()}async function aJ(e){let t=a6(e);for(let r of e.K_)t.b_(r.mutations)}async function aX(e,t,r){let n=e.K_.shift(),i=nL.from(n,t,r);await aK(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await aH(e)}async function aZ(e,t){t&&a6(e).S_&&await async function(e,t){var r;if(nV(r=t.code)&&r!==N.ABORTED){let r=e.K_.shift();a6(e).h_(),await aK(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await aH(e)}}(e,t),aW(e)&&aQ(e)}async function a0(e,t){e.asyncQueue.verifyOperationInProgress(),T(aN,"RemoteStore received new credentials");let r=aB(e);e.W_.add(3),await aO(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await aR(e)}async function a1(e,t){t?(e.W_.delete(2),await aR(e)):t||(e.W_.add(2),await aO(e),e.j_.set("Unknown"))}function a2(e){var t,r,n;return e.J_||(e.J_=(t=e.datastore,r=e.asyncQueue,n={xo:aj.bind(null,e),No:aq.bind(null,e),Lo:az.bind(null,e),p_:aG.bind(null,e)},t.M_(),new ax(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.J_.h_(),aV(e)?aU(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function a6(e){var t,r,n;return e.Y_||(e.Y_=(t=e.datastore,r=e.asyncQueue,n={xo:()=>Promise.resolve(),No:aY.bind(null,e),Lo:aZ.bind(null,e),D_:aJ.bind(null,e),v_:aX.bind(null,e)},t.M_(),new aS(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.Y_.h_(),await aH(e)):(await e.Y_.stop(),e.K_.length>0&&(T(aN,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new R,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new a3(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new D(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a5(e,t){if(x("AsyncQueue",`${t}: ${e}`),ew(e))return new D(N.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{static emptySet(e){return new a8(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=r9(),this.sortedSet=new tk(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof a8)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new a8;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.Z_=new tk(X.comparator)}track(e){let t=e.doc.key,r=this.Z_.get(t);r?0!==e.type&&3===r.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==r.type?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Z_=this.Z_.remove(t):1===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):C():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class a7{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new a7(e,t,a8.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&r0(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a9{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class oe{constructor(){this.queries=ot(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=ot(),r.forEach((e,r)=>{for(let e of r.ta)e.onError(t)})}(this,new D(N.ABORTED,"Firestore shutting down"))}}function ot(){return new r8(e=>r1(e),r0)}async function or(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.na()&&t.ra()&&(r=2):(i=new a9,r=+!t.ra());try{switch(r){case 0:i.ea=await e.onListen(n,!0);break;case 1:i.ea=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=a5(r,`Initialization of query '${r2(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&oa(e)}async function on(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?n=+!t.ra():!i.na()&&t.ra()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function oi(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(n)&&(r=!0);i.ea=n}}r&&oa(e)}function os(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ta)e.onError(r);e.queries.delete(t)}function oa(e){e.ia.forEach(e=>{e.next()})}(o=a||(a={}))._a="default",o.Cache="cache";class oo{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new a7(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=a7.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==a.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this.serializer=e}ps(e){return ia(this.serializer,e)}ys(e){return e.metadata.exists?id(this.serializer,e.document,!1):rg.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return ie(e)}}class oc{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=oh(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;let r=Q.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){let t=new Map,r=new ou(this.serializer);for(let n of e)if(n.metadata.queries){let e=r.ps(n.metadata.name);for(let r of n.metadata.queries){let n=(t.get(r)||ni()).add(e);t.set(r,n)}}return t}async complete(){let e=await s2(this.localStore,new ou(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(let e of this.queries)await s6(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function oh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.key=e}}class of{constructor(e){this.key=e}}class op{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ni(),this.mutatedKeys=ni(),this.ya=r5(e),this.wa=new a8(this.ya)}get Sa(){return this.fa}ba(e,t){let r=t?t.Da:new a4,n=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),c=r6(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(r.track({type:3,doc:c}),f=!0):this.va(u,c)||(r.track({type:2,doc:c}),f=!0,(o&&this.ya(c,o)>0||l&&0>this.ya(c,l))&&(a=!0)):!u&&c?(r.track({type:0,doc:c}),f=!0):u&&!c&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{wa:s,Da:r,ls:a,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return r(e)-r(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(r),n=null!=n&&n;let a=t&&!n?this.Fa():[],o=0===this.pa.size&&this.current&&!n?1:0,l=o!==this.ga;return(this.ga=o,0!==s.length||l)?{snapshot:new a7(this.query,e.wa,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new a4,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=ni(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new of(e))}),this.pa.forEach(r=>{e.has(r)||t.push(new od(r))}),t}Oa(e){this.fa=e.gs,this.pa=ni();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return a7.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}let og="SyncEngine";class om{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oy{constructor(e){this.key=e,this.Ba=!1}}class ov{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new r8(e=>r1(e),r0),this.qa=new Map,this.Qa=new Set,this.$a=new tk(X.comparator),this.Ka=new Map,this.Ua=new sx,this.Wa={},this.Ga=new Map,this.za=si.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function ow(e,t,r=!0){let n;let i=oY(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Na()):n=await o_(i,t,r,!0),n}async function oI(e,t){let r=oY(e);await o_(r,t,!0,!1)}async function o_(e,t,r,n){let i;let s=await sY(e.localStore,rQ(t)),a=s.targetId,o=e.sharedClientState.addLocalQueryTarget(a,r);return n&&(i=await ob(e,t,a,"current"===o,s.resumeToken)),e.isPrimaryClient&&r&&aP(e.remoteStore,s),i}async function ob(e,t,r,n,i){e.Ha=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ba(r);i.ls&&(i=await sX(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return oM(e,t.targetId,o.Ma),o.snapshot})(e,t,r,n);let s=await sX(e.localStore,t,!0),a=new op(t,s.gs),o=a.ba(s.documents),l=nQ.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);oM(e,r,u.Ma);let c=new om(t,r,a);return e.ka.set(t,c),e.qa.has(r)?e.qa.get(r).push(t):e.qa.set(r,[t]),u.snapshot}async function oE(e,t,r){let n=e.ka.get(t),i=e.qa.get(n.targetId);if(i.length>1)return e.qa.set(n.targetId,i.filter(e=>!r0(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sJ(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&aL(e.remoteStore,n.targetId),oP(e,n.targetId)}).catch(eh)):(oP(e,n.targetId),await sJ(e.localStore,n.targetId,!0))}async function oT(e,t){let r=e.ka.get(t),n=e.qa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),aL(e.remoteStore,r.targetId))}async function ox(e,t,r){let n=oJ(e);try{var i;let e;let s=await function(e,t){let r,n;let i=$.now(),s=t.reduce((e,t)=>e.add(t.key),ni());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=r4,l=ni();return e.ds.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=nc(n.transform,e||null);null!=i&&(null===r&&(r=rp.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nC(e.key,t,function e(t){let r=[];return tS(t.fields,(t,n)=>{let i=new J([t]);if(ro(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new tL(r)}(t.value.mapValue),n_.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:ne(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=n.Wa[n.currentUser.toKey()])||(e=new tk(z)),e=e.insert(i,r),n.Wa[n.currentUser.toKey()]=e,await oU(n,s.changes),await aH(n.remoteStore)}catch(t){let e=a5(t,"Failed to persist write");r.reject(e)}}async function oS(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.ds.newChangeBuffer({trackRemovals:!0});n=e.Ts;let a=[];t.targetChanges.forEach((s,o)=>{var l;let u=n.get(o);if(!u)return;a.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,o)));let c=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?c=c.withResumeToken(tU.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),n=n.insert(o,c),l=c,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&a.push(e.Hr.updateTargetData(i,c))});let o=r4,l=ni();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),a.push(sQ(i,s,t.documentUpdates).next(e=>{o=e.Vs,l=e.fs})),!r.isEqual(K.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(t)}return ed.waitFor(a).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,o,l)).next(()=>o)}).then(t=>(e.Ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ka.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||C(),t.addedDocuments.size>0?n.Ba=!0:t.modifiedDocuments.size>0?n.Ba||C():t.removedDocuments.size>0&&(n.Ba||C(),n.Ba=!1))}),await oU(e,r,t)}catch(e){await eh(e)}}function oA(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ka.forEach((e,r)=>{let n=r.view.sa(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ta)e.sa(t)&&(r=!0)}),r&&oa(n),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function oC(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ka.get(t),i=n&&n.key;if(i){let r=new tk(X.comparator);r=r.insert(i,rg.newNoDocument(i,K.min()));let n=ni().add(i),s=new nW(K.min(),new Map,new tk(z),r,n);await oS(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),oF(e)}else await sJ(e.localStore,t,!1).then(()=>oP(e,t,r)).catch(eh)}async function ok(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=ed.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||C(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ni();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});oO(e,n,null),oR(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await oU(e,i)}catch(e){await eh(e)}}async function oN(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||C(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});oO(e,t,r),oR(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await oU(e,i)}catch(e){await eh(e)}}async function oD(e,t){var r;aB(e.remoteStore)||T(og,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let n=await (r=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>r.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===n)return void t.resolve();let i=e.Ga.get(n)||[];i.push(t),e.Ga.set(n,i)}catch(r){let e=a5(r,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function oR(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function oO(e,t,r){let n=e.Wa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Wa[e.currentUser.toKey()]=n}}function oP(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(n),r&&e.La.Ja(n,r);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||oL(e,t)})}function oL(e,t){e.Qa.delete(t.path.canonicalString());let r=e.$a.get(t);null!==r&&(aL(e.remoteStore,r),e.$a=e.$a.remove(t),e.Ka.delete(r),oF(e))}function oM(e,t,r){for(let n of r)n instanceof od?(e.Ua.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.$a.get(r)||e.Qa.has(n)||(T(og,"New document in limbo: "+r),e.Qa.add(n),oF(e))}(e,n)):n instanceof of?(T(og,"Document no longer in limbo: "+n.key),e.Ua.removeReference(n.key,t),e.Ua.containsKey(n.key)||oL(e,n.key)):C()}function oF(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let r=new X(Q.fromString(t)),n=e.za.next();e.Ka.set(n,new oy(r)),e.$a=e.$a.insert(r,n),aP(e.remoteStore,new iE(rQ(r$(r.path)),n,"TargetPurposeLimboResolution",eA.ae))}}async function oU(e,t,r){let n=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((a,o)=>{s.push(e.Ha(o,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=sq.Yi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>ed.forEach(t,t=>ed.forEach(t.Hi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>ed.forEach(t.Ji,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!ew(e))throw e;T(s$,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function oV(e,t){var r;if(!e.currentUser.isEqual(t)){T(og,"User change. New user:",t.toKey());let n=await sH(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new D(N.CANCELLED,r))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oU(e,n.Rs)}}function oB(e,t){let r=e.Ka.get(t);if(r&&r.Ba)return ni().add(r.key);{let r=ni(),n=e.qa.get(t);if(!n)return r;for(let t of n){let n=e.ka.get(t);r=r.unionWith(n.view.Sa)}return r}}async function oj(e,t){let r=await sX(e.localStore,t.query,!0),n=t.view.Oa(r);return e.isPrimaryClient&&oM(e,t.targetId,n.Ma),n}async function oq(e,t){return s0(e.localStore,t).then(t=>oU(e,t))}async function oz(e,t,r,n){let i=await function(e,t){let r=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",n=>r.Ln(n,t).next(t=>t?e.localDocuments.getDocuments(n,t):ed.resolve(null)))}(e.localStore,t);null!==i?("pending"===r?await aH(e.remoteStore):"acknowledged"===r||"rejected"===r?(oO(e,t,n||null),oR(e,t),function(e,t){e.mutationQueue.qn(t)}(e.localStore,t)):C(),await oU(e,i)):T(og,"Cannot apply mutation batch with id: "+t)}async function oG(e,t){if(oY(e),oJ(e),!0===t&&!0!==e.ja){let t=e.sharedClientState.getAllActiveQueryTargets(),r=await o$(e,t.toArray());for(let t of(e.ja=!0,await a1(e.remoteStore,!0),r))aP(e.remoteStore,t)}else if(!1===t&&!1!==e.ja){let t=[],r=Promise.resolve();e.qa.forEach((n,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):r=r.then(()=>(oP(e,i),sJ(e.localStore,i,!0))),aL(e.remoteStore,i)}),await r,await o$(e,t),e.Ka.forEach((t,r)=>{aL(e.remoteStore,r)}),e.Ua.Dr(),e.Ka=new Map,e.$a=new tk(X.comparator),e.ja=!1,await a1(e.remoteStore,!1)}}async function o$(e,t,r){let n=[],i=[];for(let r of t){let t;let s=e.qa.get(r);if(s&&0!==s.length)for(let r of(t=await sY(e.localStore,rQ(s[0])),s)){let t=e.ka.get(r),n=await oj(e,t);n.snapshot&&i.push(n.snapshot)}else{let n=await sZ(e.localStore,r);t=await sY(e.localStore,n),await ob(e,oK(n),r,!1,t.resumeToken)}n.push(t)}return e.La.p_(i),n}function oK(e){var t,r,n,i,s;return t=e.path,r=e.collectionGroup,n=e.orderBy,i=e.filters,s=e.limit,new rG(t,r,n,i,s,"F",e.startAt,e.endAt)}function oH(e){return e.localStore.persistence.zi()}async function oW(e,t,r,n){if(e.ja)return void T(og,"Ignoring unexpected query state notification.");let i=e.qa.get(t);if(i&&i.length>0)switch(r){case"current":case"not-current":{let n=await s0(e.localStore,r3(i[0])),s=nW.createSynthesizedRemoteEventForCurrentChange(t,"current"===r,tU.EMPTY_BYTE_STRING);await oU(e,n,s);break}case"rejected":await sJ(e.localStore,t,!0),oP(e,t,n);break;default:C()}}async function oQ(e,t,r){let n=oY(e);if(n.ja){for(let e of t){if(n.qa.has(e)&&n.sharedClientState.isActiveQueryTarget(e)){T(og,"Adding an already active target "+e);continue}let t=await sZ(n.localStore,e),r=await sY(n.localStore,t);await ob(n,oK(t),r.targetId,!1,r.resumeToken),aP(n.remoteStore,r)}for(let e of r)n.qa.has(e)&&await sJ(n.localStore,e,!1).then(()=>{aL(n.remoteStore,e),oP(n,e)}).catch(eh)}}function oY(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=oS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oB.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oC.bind(null,e),e.La.p_=oi.bind(null,e.eventManager),e.La.Ja=os.bind(null,e.eventManager),e}function oJ(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oN.bind(null,e),e}class oX{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=a_(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,r;return t=this.persistence,r=new sG,new sK(t,r,e.initialUser,this.serializer)}Xa(e){return new sD(sO.ri,this.serializer)}Za(e){return new ao}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oX.provider={build:()=>new oX};class oZ extends oX{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof sP||C(),new sc(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?i7.withCacheSize(this.cacheSizeBytes):i7.DEFAULT;return new sD(e=>sP.ri(e,t),this.serializer)}}class o0 extends oX{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await oJ(this.ru.syncEngine),await aH(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){var t,r;return t=this.persistence,r=new sG,new sK(t,r,e.initialUser,this.serializer)}tu(e,t){return new sc(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}nu(e,t){let r=new eS(t,this.persistence);return new ex(e.asyncQueue,r)}Xa(e){let t=sj(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=void 0!==this.cacheSizeBytes?i7.withCacheSize(this.cacheSizeBytes):i7.DEFAULT;return new sB(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,aw(),aI(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new ao}}class o1 extends o0{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.ru.syncEngine;this.sharedClientState instanceof aa&&(this.sharedClientState.syncEngine={uo:oz.bind(null,t),co:oW.bind(null,t),lo:oQ.bind(null,t),zi:oH.bind(null,t),ao:oq.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async e=>{await oG(this.ru.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Za(e){let t=aw();if(!aa.D(t))throw new D(N.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=sj(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new aa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class o2{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oA(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=oV.bind(null,this.syncEngine),await a1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oe}createDatastore(e){var t;let r=a_(e.databaseInfo.databaseId),n=new av(e.databaseInfo);return t=e.authCredentials,new aC(t,e.appCheckCredentials,n,r)}createRemoteStore(e){var t,r;return t=this.localStore,r=this.datastore,new aD(t,r,e.asyncQueue,e=>oA(this.syncEngine,e,0),ac.D()?new ac:new al)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new ov(e,t,r,n,i,s);return a&&(o.ja=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){T(aN,"RemoteStore shutting down."),e.W_.add(5),await aO(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function o6(e,t=10240){let r=0;return{async read(){if(r<e.byteLength){let n={value:e.slice(r,r+t),done:!1};return r+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}o2.provider={build:()=>new o2};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):x("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new R,this.buffer=new Uint8Array,this._u=new TextDecoder("utf-8"),this.au().then(e=>{e&&e.Ea()?this.metadata.resolve(e.Ia.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Ia)}`))},e=>this.metadata.reject(e))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){let e=await this.uu();if(null===e)return null;let t=this._u.decode(e),r=Number(t);return isNaN(r)&&this.cu(`length string (${t}) is not valid number`),new ol(JSON.parse(await this.lu(r)),e.length+r)}hu(){return this.buffer.findIndex(e=>123===e)}async uu(){for(;0>this.hu()&&!await this.Pu(););if(0===this.buffer.length)return null;let e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");let t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),Error(`Invalid bundle format: ${e}`)}async Pu(){let e=await this.ou.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o8{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(N.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let r={documents:t.map(t=>is(e.serializer,t))},n=await e.Co("BatchGetDocuments",e.serializer.databaseId,Q.emptyPath(),r,t.length),i=new Map;n.forEach(t=>{var r;let n=(r=e.serializer,"found"in t?function(e,t){t.found||C(),t.found.name,t.found.updateTime;let r=ia(e,t.found.name),n=ie(t.found.updateTime),i=t.found.createTime?ie(t.found.createTime):K.min(),s=new rp({mapValue:{fields:t.found.fields}});return rg.newFoundDocument(r,n,i,s)}(r,t):"missing"in t?function(e,t){t.missing||C(),t.readTime||C();let r=ia(e,t.missing),n=ie(t.readTime);return rg.newNoDocument(r,n)}(r,t):C());i.set(n.key.toString(),n)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());t||C(),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nR(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let r=X.fromPath(t);this.mutations.push(new nO(r,this.precondition(r)))}),await async function(e,t){let r={writes:t.map(t=>ip(e.serializer,t))};await e.So("Commit",e.serializer.databaseId,Q.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw C();t=K.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new D(N.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(K.min())?n_.exists(!1):n_.updateTime(t):n_.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(K.min()))throw new D(N.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return n_.updateTime(t)}return n_.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,t,r,n,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=n,this.deferred=i,this.Tu=r.maxAttempts,this.a_=new ab(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{let e=new o8(this.datastore),t=this.du(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Au(e)}))}).catch(e=>{this.Au(e)})})}du(e){try{let t=this.updateFunction(e);return!eC(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nV(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o7="FirestoreClient";class o9{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=w.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{T(o7,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(T(o7,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new R;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=a5(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function le(e,t){e.asyncQueue.verifyOperationInProgress(),T(o7,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await sH(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lt(e,t){e.asyncQueue.verifyOperationInProgress();let r=await lr(e);T(o7,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>a0(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>a0(t.remoteStore,r)),e._onlineComponents=t}async function lr(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){T(o7,"Using user provided OfflineComponentProvider");try{await le(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;S("Error using user provided cache. Falling back to memory cache: "+t),await le(e,new oX)}}else T(o7,"Using default OfflineComponentProvider"),await le(e,new oZ(void 0))}return e._offlineComponents}async function ln(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T(o7,"Using user provided OnlineComponentProvider"),await lt(e,e._uninitializedComponentsProvider._online)):(T(o7,"Using default OnlineComponentProvider"),await lt(e,new o2))),e._onlineComponents}function li(e){return lr(e).then(e=>e.persistence)}function ls(e){return lr(e).then(e=>e.localStore)}function la(e){return ln(e).then(e=>e.remoteStore)}function lo(e){return ln(e).then(e=>e.syncEngine)}function ll(e){return ln(e).then(e=>e.datastore)}async function lu(e){let t=await ln(e),r=t.eventManager;return r.onListen=ow.bind(null,t.syncEngine),r.onUnlisten=oE.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=oI.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=oT.bind(null,t.syncEngine),r}function lc(e,t,r={}){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new o3({next:o=>{s.su(),t.enqueueAndForget(()=>on(e,a));let l=o.docs.has(r);!l&&o.fromCache?i.reject(new D(N.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&n&&"server"===n.source?i.reject(new D(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new oo(r$(r.path),s,{includeMetadataChanges:!0,Ta:!0});return or(e,a)})(await lu(e),e.asyncQueue,t,r,n)),n.promise}function lh(e,t,r={}){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new o3({next:r=>{s.su(),t.enqueueAndForget(()=>on(e,a)),r.fromCache&&"server"===n.source?i.reject(new D(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new oo(r,s,{includeMetadataChanges:!0,Ta:!0});return or(e,a)})(await lu(e),e.asyncQueue,t,r,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,r){if(!r)throw new D(N.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lg(e,t,r,n){if(!0===t&&!0===n)throw new D(N.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}function lm(e){if(!X.isDocumentKey(e))throw new D(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ly(e){if(X.isDocumentKey(e))throw new D(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":C()}function lw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=lv(e);throw new D(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function lI(e,t){if(t<=0)throw new D(N.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l_="firestore.googleapis.com";class lb{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new D(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=l_,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new D(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ld(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new D(N.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lE{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lb({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new D(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lb(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new P;switch(e.type){case"firstParty":return new U(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new D(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=lf.get(e);t&&(T("ComponentProvider","Removing Datastore"),lf.delete(e),t.terminate())}(this),Promise.resolve()}}function lT(e,t,r,n={}){var i;let s=(e=lw(e,lE))._getSettings(),a=`${t}:${r}`;if(s.host!==l_&&s.host!==a&&S("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=w.MOCK_USER;else{t=(0,d.createMockUserToken)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new D(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new w(s)}e._authCredentials=new L(new O(t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lx(this.firestore,e,this._query)}}class lS{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lA(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lS(this.firestore,e,this._key)}}class lA extends lx{constructor(e,t,r){super(e,t,r$(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lS(this.firestore,null,new X(e))}withConverter(e){return new lA(this.firestore,e,this._path)}}function lC(e,t,...r){if(e=(0,d.getModularInstance)(e),lp("collection","path",t),e instanceof lE){let n=Q.fromString(t,...r);return ly(n),new lA(e,null,n)}{if(!(e instanceof lS||e instanceof lA))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Q.fromString(t,...r));return ly(n),new lA(e.firestore,null,n)}}function lk(e,t){if(e=lw(e,lE),lp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new D(N.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lx(e,null,new rG(Q.emptyPath(),t))}function lN(e,t,...r){if(e=(0,d.getModularInstance)(e),1==arguments.length&&(t=q.newId()),lp("doc","path",t),e instanceof lE){let n=Q.fromString(t,...r);return lm(n),new lS(e,null,new X(n))}{if(!(e instanceof lS||e instanceof lA))throw new D(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Q.fromString(t,...r));return lm(n),new lS(e.firestore,e instanceof lA?e.converter:null,new X(n))}}function lD(e,t){return e=(0,d.getModularInstance)(e),t=(0,d.getModularInstance)(t),(e instanceof lS||e instanceof lA)&&(t instanceof lS||t instanceof lA)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function lR(e,t){return e=(0,d.getModularInstance)(e),t=(0,d.getModularInstance)(t),e instanceof lx&&t instanceof lx&&e.firestore===t.firestore&&r0(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lO="AsyncQueue";class lP{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new ab(this,"async_queue_retry"),this.Su=()=>{let e=aI();e&&T(lO,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=aI();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=aI();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new R;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ew(e))throw e;T(lO,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,x("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let n=a3.createAndSchedule(this,e,t,r,e=>this.Fu(e));return this.fu.push(n),n}Du(){this.gu&&C()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}function lL(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class lM{constructor(){this._progressObserver={},this._taskCompletionResolver=new R,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lF=-1;class lU extends lE{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new lP,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new lP(e),this._firestoreClient=void 0,await e}}}function lV(e,t,r){r||(r=tJ);let n=(0,u._getProvider)(e,"firestore");if(n.isInitialized(r)){let e=n.getImmediate({identifier:r}),i=n.getOptions(r);if((0,d.deepEqual)(i,t))return e;throw new D(N.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new D(N.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new D(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:r})}function lB(e,t){let r="object"==typeof e?e:(0,u.getApp)(),n="string"==typeof e?e:t||tJ,i=(0,u._getProvider)(r,"firestore").getImmediate({identifier:n});if(!i._initialized){let e=(0,d.getDefaultEmulatorHostnameAndPort)("firestore");e&&lT(i,...e)}return i}function lj(e){if(e._terminated)throw new D(N.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||lq(e),e._firestoreClient}function lq(e){var t,r,n,i,s;let a=e._freezeSettings(),o=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new tY(i,s,e._persistenceKey,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,ld(a.experimentalLongPollingOptions),a.useFetchStreams));e._componentsProvider||(null===(r=a.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=a.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),e._firestoreClient=new o9(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function lz(e,t){S("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings();return l$(e,o2.provider,{build:e=>new o0(e,r.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}async function lG(e){S("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let t=e._freezeSettings();l$(e,o2.provider,{build:e=>new o1(e,t.cacheSizeBytes)})}function l$(e,t,r){if((e=lw(e,lU))._firestoreClient||e._terminated)throw new D(N.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new D(N.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:r},lq(e)}function lK(e){if(e._initialized&&!e._terminated)throw new D(N.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new R;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!eg.D())return Promise.resolve();await eg.delete(e+sV)}(sj(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function lH(e){return function(e){let t=new R;return e.asyncQueue.enqueueAndForget(async()=>oD(await lo(e),t)),t.promise}(lj(e=lw(e,lU)))}function lW(e){var t;return(t=lj(e=lw(e,lU))).asyncQueue.enqueue(async()=>{let e=await li(t),r=await la(t);return e.setNetworkEnabled(!0),r.W_.delete(0),aR(r)})}function lQ(e){var t;return(t=lj(e=lw(e,lU))).asyncQueue.enqueue(async()=>{let e=await li(t),r=await la(t);return e.setNetworkEnabled(!1),async function(e){e.W_.add(0),await aO(e),e.j_.set("Offline")}(r)})}function lY(e){return(0,u._removeServiceInstance)(e.app,"firestore",e._databaseId.database),e._delete()}function lJ(e,t){let r=lj(e=lw(e,lU)),n=new lM;return function(e,t,r,n){var i;let s=(i=a_(t),new o5(function(e,t){if(e instanceof Uint8Array)return o6(e,void 0);if(e instanceof ArrayBuffer)return o6(new Uint8Array(e),void 0);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof r?nq().encode(r):r),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,r){(async function(e,t,r){try{var n;let i=await t.getMetadata();if(await function(e,t){let r=ie(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",r=>e.Yr.getBundleMetadata(r,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,i))return await t.close(),r._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);r._updateProgress(oh(i));let s=new oc(i,e.localStore,t.serializer),a=await t.Ya();for(;a;){let e=await s.Aa(a);e&&r._updateProgress(e),a=await t.Ya()}let o=await s.complete();return await oU(e,o.ma,void 0),await (n=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>n.Yr.saveBundleMetadata(e,i)),r._completeWith(o.progress),Promise.resolve(o.Va)}catch(e){return S(og,`Loading bundle failed with ${e}`),r._failWith(e),Promise.resolve(new Set)}})(e,t,r).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await lo(e),s,n)})}(r,e._databaseId,t,n),n}function lX(e,t){var r;return(r=lj(e=lw(e,lU))).asyncQueue.enqueue(async()=>{var e;return(e=await ls(r)).persistence.runTransaction("Get named query","readonly",r=>e.Yr.getNamedQuery(r,t))}).then(t=>t?new lx(e,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lZ{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class l0{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this._byteString=e}static fromBase64String(e){try{return new l1(tU.fromBase64String(e))}catch(e){throw new D(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new l1(tU.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new D(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function l6(){return new l2(H)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l8{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l4=/^__.*__$/;class l7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nC(e,this.data,this.fieldMask,t,this.fieldTransforms):new nA(e,this.data,t,this.fieldTransforms)}}class l9{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nC(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ue(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class ut{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ut(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.$u(e),n}Ku(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.Bu(),n}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return u_(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(ue(this.Lu)&&l4.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ur{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||a_(e)}ju(e,t,r,n=!1){return new ut({Lu:e,methodName:t,zu:r,path:J.emptyPath(),Qu:!1,Gu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function un(e){let t=e._freezeSettings(),r=a_(e._databaseId);return new ur(e._databaseId,!!t.ignoreUndefinedProperties,r)}function ui(e,t,r,n,i,s={}){let a,o;let l=e.ju(s.merge||s.mergeFields?2:0,t,r,i);uy("Data must be an object, but it was:",l,n);let u=ug(n,l);if(s.merge)a=new tL(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=uv(t,n,r);if(!l.contains(i))throw new D(N.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ub(e,i)||e.push(i)}a=new tL(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new l7(new rp(u),a,o)}class us extends l3{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof us}}function ua(e,t,r){return new ut({Lu:3,zu:t.settings.zu,methodName:e._methodName,Qu:r},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class uo extends l3{_toFieldTransform(e){return new nw(e.path,new nh)}isEqual(e){return e instanceof uo}}class ul extends l3{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){let t=ua(this,e,!0),r=new nd(this.Hu.map(e=>up(e,t)));return new nw(e.path,r)}isEqual(e){return e instanceof ul&&(0,d.deepEqual)(this.Hu,e.Hu)}}class uu extends l3{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){let t=ua(this,e,!0),r=new np(this.Hu.map(e=>up(e,t)));return new nw(e.path,r)}isEqual(e){return e instanceof uu&&(0,d.deepEqual)(this.Hu,e.Hu)}}class uc extends l3{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){let t=new nm(e.serializer,nl(e.serializer,this.Ju));return new nw(e.path,t)}isEqual(e){return e instanceof uc&&this.Ju===e.Ju}}function uh(e,t,r,n){let i=e.ju(1,t,r);uy("Data must be an object, but it was:",i,n);let s=[],a=rp.empty();return tS(n,(e,n)=>{let o=uI(t,e,r);n=(0,d.getModularInstance)(n);let l=i.Ku(o);if(n instanceof us)s.push(o);else{let e=up(n,l);null!=e&&(s.push(o),a.set(o,e))}}),new l9(a,new tL(s),i.fieldTransforms)}function ud(e,t,r,n,i,s){let a=e.ju(1,t,r),o=[uv(t,n,r)],l=[i];if(s.length%2!=0)throw new D(N.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(uv(t,s[e])),l.push(s[e+1]);let u=[],c=rp.empty();for(let e=o.length-1;e>=0;--e)if(!ub(u,o[e])){let t=o[e],r=l[e];r=(0,d.getModularInstance)(r);let n=a.Ku(t);if(r instanceof us)u.push(t);else{let e=up(r,n);null!=e&&(u.push(t),c.set(t,e))}}return new l9(c,new tL(u),a.fieldTransforms)}function uf(e,t,r,n=!1){return up(r,e.ju(n?4:3,t))}function up(e,t){if(um(e=(0,d.getModularInstance)(e)))return uy("Unsupported field value:",t,e),ug(e,t);if(e instanceof l3)return function(e,t){if(!ue(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=up(i,t.Uu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,d.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=$.fromDate(e);return{timestampValue:n7(t.serializer,r)}}if(e instanceof $){let r=new $(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:n7(t.serializer,r)}}if(e instanceof l5)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof l1)return{bytesValue:n9(t.serializer,e._byteString)};if(e instanceof lS){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Wu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:it(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof l8)return{mapValue:{fields:{[tZ]:{stringValue:t2},[t6]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return na(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${lv(e)}`)}(e,t)}function ug(e,t){let r={};return tC(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tS(e,(e,n)=>{let i=up(n,t.qu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function um(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof $||e instanceof l5||e instanceof l1||e instanceof lS||e instanceof l3||e instanceof l8)}function uy(e,t,r){if(!um(r)||"object"!=typeof r||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){let n=lv(r);throw"an object"===n?t.Wu(e+" a custom object"):t.Wu(e+" "+n)}}function uv(e,t,r){if((t=(0,d.getModularInstance)(t))instanceof l2)return t._internalPath;if("string"==typeof t)return uI(e,t);throw u_("Field path arguments must be of type string or ",e,!1,void 0,r)}let uw=RegExp("[~\\*/\\[\\]]");function uI(e,t,r){if(t.search(uw)>=0)throw u_(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new l2(...t.split("."))._internalPath}catch(n){throw u_(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function u_(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new D(N.INVALID_ARGUMENT,o+e+l)}function ub(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new uT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ux("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class uT extends uE{data(){return super.data()}}function ux(e,t){return"string"==typeof t?uI(e,t):t instanceof l2?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new D(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uA{}class uC extends uA{}function uk(e,t,...r){let n=[];for(let i of(t instanceof uA&&n.push(t),function(e){let t=e.filter(e=>e instanceof uR).length,r=e.filter(e=>e instanceof uN).length;if(t>1||t>0&&r>0)throw new D(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class uN extends uC{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uN(e,t,r)}_apply(e){let t=this._parse(e);return uQ(e._query,t),new lx(e.firestore,e.converter,rX(e._query,t))}_parse(e){let t=un(e.firestore);return function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new D(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uW(a,s);let t=[];for(let r of a)t.push(uH(n,e,r));o={arrayValue:{values:t}}}else o=uH(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uW(a,s),o=uf(r,t,a,"in"===s||"not-in"===s);return r_.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uD(e,t,r){let n=ux("where",e);return uN._create(n,t,r)}class uR extends uA{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uR(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rb.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())uQ(r,e),r=rX(r,e)}(e._query,t),new lx(e.firestore,e.converter,rX(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function uO(...e){return e.forEach(e=>uY("or",e)),uR._create("or",e)}function uP(...e){return e.forEach(e=>uY("and",e)),uR._create("and",e)}class uL extends uC{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uL(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new D(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new D(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rw(t,r)}(e._query,this._field,this._direction);return new lx(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new rG(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function uM(e,t="asc"){let r=ux("orderBy",e);return uL._create(r,t)}class uF extends uC{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new uF(e,t,r)}_apply(e){return new lx(e.firestore,e.converter,rZ(e._query,this._limit,this._limitType))}}function uU(e){return lI("limit",e),uF._create("limit",e,"F")}function uV(e){return lI("limitToLast",e),uF._create("limitToLast",e,"L")}class uB extends uC{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uB(e,t,r)}_apply(e){var t;let r=uK(e,this.type,this._docOrFields,this._inclusive);return new lx(e.firestore,e.converter,new rG((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt))}}function uj(...e){return uB._create("startAt",e,!0)}function uq(...e){return uB._create("startAfter",e,!1)}class uz extends uC{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uz(e,t,r)}_apply(e){var t;let r=uK(e,this.type,this._docOrFields,this._inclusive);return new lx(e.firestore,e.converter,new rG((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,r))}}function uG(...e){return uz._create("endBefore",e,!1)}function u$(...e){return uz._create("endAt",e,!0)}function uK(e,t,r,n){if(r[0]=(0,d.getModularInstance)(r[0]),r[0]instanceof uE)return function(e,t,r,n,i){if(!n)throw new D(N.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${r}().`);let s=[];for(let r of rW(e))if(r.field.isKeyField())s.push(rr(t,n.key));else{let e=n.data.field(r.field);if(tH(e))throw new D(N.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+r.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=r.field.canonicalString();throw new D(N.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new rm(s,i)}(e._query,e.firestore._databaseId,t,r[0]._document,n);{let i=un(e.firestore);return function(e,t,r,n,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new D(N.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new D(N.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof l}`);if(!rH(e)&&-1!==l.indexOf("/"))throw new D(N.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${l}' contains a slash.`);let r=e.path.child(Q.fromString(l));if(!X.isDocumentKey(r))throw new D(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${r}' is not because it contains an odd number of segments.`);let i=new X(r);o.push(rr(t,i))}else{let e=uf(r,n,l);o.push(e)}}return new rm(o,s)}(e._query,e.firestore._databaseId,i,t,r,n)}}function uH(e,t,r){if("string"==typeof(r=(0,d.getModularInstance)(r))){if(""===r)throw new D(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rH(t)&&-1!==r.indexOf("/"))throw new D(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(Q.fromString(r));if(!X.isDocumentKey(n))throw new D(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return rr(e,new X(n))}if(r instanceof lS)return rr(e,r._key);throw new D(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lv(r)}.`)}function uW(e,t){if(!Array.isArray(e)||0===e.length)throw new D(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function uQ(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new D(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function uY(e,t){if(!(t instanceof uN||t instanceof uR))throw new D(N.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class uJ{convertValue(e,t="none"){switch(t5(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tj(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tq(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw C()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return tS(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new l8(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[t6].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>tj(e.doubleValue)))}convertGeoPoint(e){return new l5(tj(e.latitude),tj(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=tW(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(tQ(e));default:return null}}convertTimestamp(e){let t=tB(e);return new $(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=Q.fromString(e);ib(r)||C();let n=new tX(r.get(1),r.get(3)),i=new X(r.popFirst(5));return n.isEqual(t)||x(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uX(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}class uZ extends uJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new l1(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lS(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(e){return new lZ("sum",uv("sum",e))}function u1(e){return new lZ("avg",uv("average",e))}function u2(){return new lZ("count")}function u6(e,t){var r,n;return e instanceof lZ&&t instanceof lZ&&e.aggregateType===t.aggregateType&&(null===(r=e._internalFieldPath)||void 0===r?void 0:r.canonicalString())===(null===(n=t._internalFieldPath)||void 0===n?void 0:n.canonicalString())}function u3(e,t){return lR(e.query,t.query)&&(0,d.deepEqual)(e.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u8 extends uE{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new u4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ux("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class u4 extends u8{data(e={}){return super.data(e)}}class u7{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new u5(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new u4(this._firestore,this._userDataWriter,r.key,r,new u5(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new D(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new u4(e._firestore,e._userDataWriter,r.doc.key,r.doc,new u5(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new u4(e._firestore,e._userDataWriter,t.doc.key,t.doc,new u5(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function u9(e,t){return e instanceof u8&&t instanceof u8?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof u7&&t instanceof u7&&e._firestore===t._firestore&&lR(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){e=lw(e,lS);let t=lw(e.firestore,lU);return lc(lj(t),e._key).then(r=>cp(t,e,r))}class ct extends uJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new l1(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lS(this.firestore,null,t)}}function cr(e){e=lw(e,lS);let t=lw(e.firestore,lU),r=lj(t),n=new ct(t);return(function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await e.persistence.runTransaction("read document","readonly",r=>e.localDocuments.getDocument(r,t));n.isFoundDocument()?r.resolve(n):n.isNoDocument()?r.resolve(null):r.reject(new D(N.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(n){let e=a5(n,`Failed to get document '${t} from cache`);r.reject(e)}})(await ls(e),t,r)),r.promise})(r,e._key).then(r=>new u8(t,n,e._key,r,new u5(null!==r&&r.hasLocalMutations,!0),e.converter))}function cn(e){e=lw(e,lS);let t=lw(e.firestore,lU);return lc(lj(t),e._key,{source:"server"}).then(r=>cp(t,e,r))}function ci(e){e=lw(e,lx);let t=lw(e.firestore,lU),r=lj(t),n=new ct(t);return uS(e._query),lh(r,e._query).then(r=>new u7(t,n,e,r))}function cs(e){e=lw(e,lx);let t=lw(e.firestore,lU),r=lj(t),n=new ct(t);return(function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await sX(e,t,!0),i=new op(t,n.gs),s=i.ba(n.documents),a=i.applyChanges(s,!1);r.resolve(a.snapshot)}catch(n){let e=a5(n,`Failed to execute query '${t} against cache`);r.reject(e)}})(await ls(e),t,r)),r.promise})(r,e._query).then(r=>new u7(t,n,e,r))}function ca(e){e=lw(e,lx);let t=lw(e.firestore,lU),r=lj(t),n=new ct(t);return lh(r,e._query,{source:"server"}).then(r=>new u7(t,n,e,r))}function co(e,t,r){e=lw(e,lS);let n=lw(e.firestore,lU),i=uX(e.converter,t,r);return cf(n,[ui(un(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,n_.none())])}function cl(e,t,r,...n){e=lw(e,lS);let i=lw(e.firestore,lU),s=un(i);return cf(i,[("string"==typeof(t=(0,d.getModularInstance)(t))||t instanceof l2?ud(s,"updateDoc",e._key,t,r,n):uh(s,"updateDoc",e._key,t)).toMutation(e._key,n_.exists(!0))])}function cu(e){return cf(lw(e.firestore,lU),[new nR(e._key,n_.none())])}function cc(e,t){let r=lw(e.firestore,lU),n=lN(e),i=uX(e.converter,t);return cf(r,[ui(un(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,n_.exists(!1))]).then(()=>n)}function ch(e,...t){var r,n,i;let s,a,o;e=(0,d.getModularInstance)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||lL(t[u])||(l=t[u],u++);let c={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(lL(t[u])){let e=t[u];t[u]=null===(r=e.next)||void 0===r?void 0:r.bind(e),t[u+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof lS)a=lw(e.firestore,lU),o=r$(e._key.path),s={next:r=>{t[u]&&t[u](cp(a,e,r))},error:t[u+1],complete:t[u+2]};else{let r=lw(e,lx);a=lw(r.firestore,lU),o=r._query;let n=new ct(a);s={next:e=>{t[u]&&t[u](new u7(a,n,r,e))},error:t[u+1],complete:t[u+2]},uS(e._query)}return function(e,t,r,n){let i=new o3(n),s=new oo(t,i,r);return e.asyncQueue.enqueueAndForget(async()=>or(await lu(e),s)),()=>{i.su(),e.asyncQueue.enqueueAndForget(async()=>on(await lu(e),s))}}(lj(a),o,c,s)}function cd(e,t){return function(e,t){let r=new o3(t);return e.asyncQueue.enqueueAndForget(async()=>{(await lu(e)).ia.add(r),r.next()}),()=>{r.su(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.ia.delete(t)})(await lu(e),r))}}(lj(e=lw(e,lU)),lL(t)?t:{next:t})}function cf(e,t){return function(e,t){let r=new R;return e.asyncQueue.enqueueAndForget(async()=>ox(await lo(e),t,r)),r.promise}(lj(e),t)}function cp(e,t,r){let n=r.docs.get(t._key),i=new ct(e);return new u8(e,i,t._key,n,new u5(r.hasPendingWrites,r.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(e){return cm(e,{count:u2()})}function cm(e,t){let r=lw(e.firestore,lU),n=lj(r),i=tA(t,(e,t)=>new nF(t,e.aggregateType,e._internalFieldPath));return(function(e,t,r){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>{try{let i=await ll(e);n.resolve(async function(e,t,r){var n;let{request:i,Pt:s,parent:a}=iv(e.serializer,rY(t),r);e.connection.fo||delete i.parent;let o=(await e.Co("RunAggregationQuery",e.serializer.databaseId,a,i,1)).filter(e=>!!e.result);1===o.length||C();let l=null===(n=o[0].result)||void 0===n?void 0:n.aggregateFields;return Object.keys(l).reduce((e,t)=>(e[s[t]]=l[t],e),{})}(i,t,r))}catch(e){n.reject(e)}}),n.promise})(n,e._query,i).then(t=>new l0(e,new ct(r),t))}class cy{constructor(e){this.kind="memory",this._onlineComponentProvider=o2.provider,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new oZ(void 0)}}toJSON(){return{kind:this.kind}}}class cv{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=cA(void 0))._initialize(e),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class cw{constructor(){this.kind="memoryEager",this._offlineComponentProvider=oX.provider}toJSON(){return{kind:this.kind}}}class cI{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new oZ(e)}}toJSON(){return{kind:this.kind}}}function c_(){return new cw}function cb(e){return new cI(null==e?void 0:e.cacheSizeBytes)}function cE(e){return new cy(e)}function cT(e){return new cv(e)}class cx{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=o2.provider,this._offlineComponentProvider={build:t=>new o0(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class cS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=o2.provider,this._offlineComponentProvider={build:t=>new o1(t,null==e?void 0:e.cacheSizeBytes)}}}function cA(e){return new cx(null==e?void 0:e.forceOwnership)}function cC(){return new cS}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ck={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=un(e)}set(e,t,r){this._verifyNotCommitted();let n=cD(e,this._firestore),i=uX(n.converter,t,r),s=ui(this._dataReader,"WriteBatch.set",n._key,i,null!==n.converter,r);return this._mutations.push(s.toMutation(n._key,n_.none())),this}update(e,t,r,...n){let i;this._verifyNotCommitted();let s=cD(e,this._firestore);return i="string"==typeof(t=(0,d.getModularInstance)(t))||t instanceof l2?ud(this._dataReader,"WriteBatch.update",s._key,t,r,n):uh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,n_.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=cD(e,this._firestore);return this._mutations=this._mutations.concat(new nR(t._key,n_.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function cD(e,t){if((e=(0,d.getModularInstance)(e)).firestore!==t)throw new D(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=un(e)}get(e){let t=cD(e,this._firestore),r=new uZ(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return C();let n=e[0];if(n.isFoundDocument())return new uE(this._firestore,r,n.key,n,t.converter);if(n.isNoDocument())return new uE(this._firestore,r,t._key,null,t.converter);throw C()})}set(e,t,r){let n=cD(e,this._firestore),i=uX(n.converter,t,r),s=ui(this._dataReader,"Transaction.set",n._key,i,null!==n.converter,r);return this._transaction.set(n._key,s),this}update(e,t,r,...n){let i;let s=cD(e,this._firestore);return i="string"==typeof(t=(0,d.getModularInstance)(t))||t instanceof l2?ud(this._dataReader,"Transaction.update",s._key,t,r,n):uh(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=cD(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO extends cR{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=cD(e,this._firestore),r=new ct(this._firestore);return super.get(e).then(e=>new u8(this._firestore,r,t._key,e._document,new u5(!1,!1),t.converter))}}function cP(e,t,r){e=lw(e,lU);let n=Object.assign(Object.assign({},ck),r);return!function(e){if(e.maxAttempts<1)throw new D(N.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(e,t,r){let n=new R;return e.asyncQueue.enqueueAndForget(async()=>{let i=await ll(e);new o4(e.asyncQueue,i,r,t,n).Iu()}),n.promise}(lj(e),r=>t(new cO(e,r)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(){return new us("deleteField")}function cM(){return new uo("serverTimestamp")}function cF(...e){return new ul("arrayUnion",e)}function cU(...e){return new uu("arrayRemove",e)}function cV(e){return new uc("increment",e)}function cB(e){return new l8(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cj(e){return lj(e=lw(e,lU)),new cN(e,t=>cf(e,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cq(e,t){let r=lj(e=lw(e,lU));if(!r._uninitializedComponentsProvider||"memory"===r._uninitializedComponentsProvider._offline.kind)return S("Cannot enable indexes when persistence is disabled"),Promise.resolve();let n=function(e){let t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(e){throw new D(N.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}}(e):e,r=[];if(Array.isArray(t.indexes))for(let e of t.indexes){let t=cz(e,"collectionGroup"),n=[];if(Array.isArray(e.fields))for(let t of e.fields){let e=uI("setIndexConfiguration",cz(t,"fieldPath"));"CONTAINS"===t.arrayConfig?n.push(new en(e,2)):"ASCENDING"===t.order?n.push(new en(e,0)):"DESCENDING"===t.order&&n.push(new en(e,1))}r.push(new Z(Z.UNKNOWN_ID,t,n,ei.empty()))}return r}(t);return r.asyncQueue.enqueue(async()=>(async function(e,t){let r=e.indexManager,n=[];return e.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(i=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e,t,r,n,i){t=[...t],(e=[...e]).sort(r),t.sort(r);let s=e.length,a=t.length,o=0,l=0;for(;o<a&&l<s;){let s=r(e[l],t[o]);s<0?i(e[l++]):s>0?n(t[o++]):(o++,l++)}for(;o<a;)n(t[o++]);for(;l<s;)i(e[l++])})(i,t,er,t=>{n.push(r.addFieldIndex(e,t))},t=>{n.push(r.deleteFieldIndex(e,t))})).next(()=>ed.waitFor(n)))})(await ls(r),n))}function cz(e,t){if("string"!=typeof e[t])throw new D(N.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cG{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function c$(e){var t;e=lw(e,lU);let r=cY.get(e);if(r)return r;if("persistent"!==(null===(t=lj(e)._uninitializedComponentsProvider)||void 0===t?void 0:t._offline.kind))return null;let n=new cG(e);return cY.set(e,n),n}function cK(e){cQ(e,!0)}function cH(e){cQ(e,!1)}function cW(e){var t;(t=lj(e._firestore)).asyncQueue.enqueue(async()=>(function(e){let t=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",e=>t.deleteAllFieldIndexes(e))})(await ls(t))).then(e=>T("deleting all persistent cache indexes succeeded")).catch(e=>S("deleting all persistent cache indexes failed",e))}function cQ(e,t){var r;(r=lj(e._firestore)).asyncQueue.enqueue(async()=>{(await ls(r)).Ps.Xi=t}).then(e=>T(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>S(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}let cY=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cJ(e){var t;let r=null===(t=lj(lw(e.firestore,lU))._onlineComponents)||void 0===t?void 0:t.datastore.serializer;return void 0===r?null:iy(r,rQ(e._query)).ht}function cX(e,t){var r;let n=tA(t,(e,t)=>new nF(t,e.aggregateType,e._internalFieldPath)),i=null===(r=lj(lw(e.firestore,lU))._onlineComponents)||void 0===r?void 0:r.datastore.serializer;return void 0===i?null:iv(i,rY(e._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cZ{constructor(){throw Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return c0.instance.onExistenceFilterMismatch(e)}}class c0{constructor(){this.Yu=new Map}static get instance(){return c1||function(e){if(nj)throw Error("a TestingHooksSpi instance is already set");nj=e}(c1=new c0),c1}rt(e){this.Yu.forEach(t=>t(e))}onExistenceFilterMismatch(e){let t=Symbol(),r=this.Yu;return r.set(t,e),()=>r.delete(t)}}let c1=null;!function(e,t=!0){I=u.SDK_VERSION,(0,u._registerComponent)(new(0,c.Component)("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new lU(new M(e.getProvider("auth-internal")),new B(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new D(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tX(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,u.registerVersion)(y,v,void 0),(0,u.registerVersion)(y,v,"esm2017")}()},{"1f357d3d806fe63b":"5QIF0",d0007d14bc1ab93c:"l5Twm","@firebase/app":"3eFbF","@firebase/component":"7Ufrc","@firebase/logger":"2Swcv","@firebase/util":"hGlpW","@firebase/webchannel-wrapper/bloom-blob":"6IEaz","@firebase/webchannel-wrapper/webchannel-blob":"146Zc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5QIF0":[function(e,t,r,n){var i,s,a,o=t.exports={};function l(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(i===setTimeout)return setTimeout(e,0);if((i===l||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:l}catch(e){i=l}try{s="function"==typeof clearTimeout?clearTimeout:u}catch(e){s=u}}();var h=[],d=!1,f=-1;function p(){d&&a&&(d=!1,a.length?h=a.concat(h):f=-1,h.length&&g())}function g(){if(!d){var e=c(p);d=!0;for(var t=h.length;t;){for(a=h,h=[];++f<t;)a&&a[f].run();f=-1,t=h.length}a=null,d=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===u||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new m(e,t)),1!==h.length||d||c(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],l5Twm:[function(e,t,r,n){let i=e("9c62938f1dccc73c"),s=e("aceacb6a4531a9d2"),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return h(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|g(e,t),n=o(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(U(e,Uint8Array)){let t=new Uint8Array(e);return f(t.buffer,t.byteOffset,t.byteLength)}return d(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(U(e,ArrayBuffer)||e&&U(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(U(e,SharedArrayBuffer)||e&&U(e.buffer,SharedArrayBuffer)))return f(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);let i=function(e){if(l.isBuffer(e)){let t=0|p(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?o(0):d(e):"Buffer"===e.type&&Array.isArray(e.data)?d(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return c(e),o(e<0?0:0|p(e))}function d(e){let t=e.length<0?0:0|p(e.length),r=o(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function f(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}function p(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function g(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||U(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return L(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return M(e).length;default:if(i)return n?-1:L(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=V[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return I(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var s,a,o;return s=this,a=t,o=r,0===a&&o===s.length?i.fromByteArray(s):i.fromByteArray(s.slice(a,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r*=1)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let s,a=1,o=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,o/=2,l/=2,r/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let n=-1;for(s=r;s<o;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*a}else -1!==n&&(s-=s-n),n=-1}else for(r+l>o&&(r=o-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function I(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=r){let r,n,o,l;switch(a){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],o=e[i+3],(192&r)==128&&(192&n)==128&&(192&o)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&o)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function _(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function b(e,t,r,n,i,s){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,i){D(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function T(e,t,r,n,i){D(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let a=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function x(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,n,i){return t*=1,r>>>=0,i||x(e,t,r,4,34028234663852886e22,-34028234663852886e22),s.write(e,t,r,n,23,4),r+4}function A(e,t,r,n,i){return t*=1,r>>>=0,i||x(e,t,r,8,17976931348623157e292,-17976931348623157e292),s.write(e,t,r,n,52,8),r+8}r.Buffer=l,r.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},r.INSPECT_MAX_BYTES=50,r.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(c(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},l.allocUnsafe=function(e){return h(e)},l.allocUnsafeSlow=function(e){return h(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(U(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),U(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=l.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(U(t,Uint8Array))i+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(l.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},l.byteLength=g,l.prototype._isBuffer=!0,l.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?I(this,0,e):m.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="",t=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(l.prototype[a]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,i){if(U(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,a=r-t,o=Math.min(s,a),u=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<o;++e)if(u[e]!==c[e]){s=u[e],a=c[e];break}return s<a?-1:+(a<s)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){var i,s,a,o,l,u,c,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let a=t.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){var o;let n=parseInt(t.substr(2*i,2),16);if((o=n)!=o)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,F(L(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return a=t,o=r,F(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,o);case"base64":return l=t,u=r,F(M(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,h=r,F(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,h);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=B(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),l.prototype.readBigUInt64BE=B(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&O(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},l.prototype.readInt8=function(e,t){return(e>>>=0,t||_(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=B(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),l.prototype.readBigInt64BE=B(function(e){R(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&O(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||_(e,4,this.length),s.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||_(e,4,this.length),s.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||_(e,8,this.length),s.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||_(e,8,this.length),s.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;b(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;b(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=B(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=B(function(e,t=0){return T(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);b(this,e,t,r,n-1,-n)}let i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);b(this,e,t,r,n-1,-n)}let i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||b(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=B(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=B(function(e,t=0){return T(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},l.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=l.isBuffer(e)?e:l.from(e,n),a=s.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%a]}return this};let C={};function k(e,t,r){C[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function N(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function D(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new C.ERR_OUT_OF_RANGE("value",n,e)}R(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&O(i,n.length-(s+1))}function R(e,t){if("number"!=typeof e)throw new C.ERR_INVALID_ARG_TYPE(t,"number",e)}function O(e,t,r){if(Math.floor(e)!==e)throw R(e,r),new C.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new C.ERR_BUFFER_OUT_OF_BOUNDS;throw new C.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}k("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),k("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),k("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=N(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=N(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let P=/[^+/0-9A-Za-z-_]/g;function L(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function M(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(P,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function U(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let V=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function B(e){return"undefined"==typeof BigInt?j:e}function j(){throw Error("BigInt not supported")}},{"9c62938f1dccc73c":"6Pb1S",aceacb6a4531a9d2:"6ifNR"}],"6Pb1S":[function(e,t,r,n){r.byteLength=function(e){var t=c(e),r=t[0],n=t[1];return(r+n)*3/4-n},r.toByteArray=function(e){var t,r,n=c(e),i=n[0],o=n[1],l=new a((i+o)*3/4-o),u=0,h=o>0?i-4:i;for(r=0;r<h;r+=4)t=s[e.charCodeAt(r)]<<18|s[e.charCodeAt(r+1)]<<12|s[e.charCodeAt(r+2)]<<6|s[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===o&&(t=s[e.charCodeAt(r)]<<2|s[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===o&&(t=s[e.charCodeAt(r)]<<10|s[e.charCodeAt(r+1)]<<4|s[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},r.fromByteArray=function(e){for(var t,r=e.length,n=r%3,s=[],a=0,o=r-n;a<o;a+=16383)s.push(function(e,t,r){for(var n,s=[],a=t;a<r;a+=3)n=(e[a]<<16&0xff0000)+(e[a+1]<<8&65280)+(255&e[a+2]),s.push(i[n>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return s.join("")}(e,a,a+16383>o?o:a+16383));return 1===n?s.push(i[(t=e[r-1])>>2]+i[t<<4&63]+"=="):2===n&&s.push(i[(t=(e[r-2]<<8)+e[r-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),s.join("")};for(var i=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,u=o.length;l<u;++l)i[l]=o[l],s[o.charCodeAt(l)]=l;function c(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},{}],"6ifNR":[function(e,t,r,n){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(e,t,r,n,i){var s,a,o=8*i-n-1,l=(1<<o)-1,u=l>>1,c=-7,h=r?i-1:0,d=r?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-c)-1,f>>=-c,c+=o;c>0;s=256*s+e[t+h],h+=d,c-=8);for(a=s&(1<<-c)-1,s>>=-c,c+=n;c>0;a=256*a+e[t+h],h+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,n),s-=u}return(f?-1:1)*a*Math.pow(2,s-n)},r.write=function(e,t,r,n,i,s){var a,o,l,u=8*s-i-1,c=(1<<u)-1,h=c>>1,d=5960464477539062e-23*(23===i),f=n?0:s-1,p=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(o=+!!isNaN(t),a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(a++,l/=2),a+h>=c?(o=0,a=c):a+h>=1?(o=(t*l-1)*Math.pow(2,i),a+=h):(o=t*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;e[r+f]=255&o,f+=p,o/=256,i-=8);for(a=a<<i|o,u+=i;u>0;e[r+f]=255&a,f+=p,a/=256,u-=8);e[r+f-p]|=128*g}},{}],"3eFbF":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"FirebaseError",()=>o.FirebaseError),i.export(r,"SDK_VERSION",()=>N),i.export(r,"_DEFAULT_ENTRY_NAME",()=>f),i.export(r,"_addComponent",()=>v),i.export(r,"_addOrOverwriteComponent",()=>w),i.export(r,"_apps",()=>g),i.export(r,"_clearComponents",()=>x),i.export(r,"_components",()=>y),i.export(r,"_getProvider",()=>_),i.export(r,"_isFirebaseApp",()=>E),i.export(r,"_isFirebaseServerApp",()=>T),i.export(r,"_registerComponent",()=>I),i.export(r,"_removeServiceInstance",()=>b),i.export(r,"_serverApps",()=>m),i.export(r,"deleteApp",()=>L),i.export(r,"getApp",()=>O),i.export(r,"getApps",()=>P),i.export(r,"initializeApp",()=>D),i.export(r,"initializeServerApp",()=>R),i.export(r,"onLog",()=>F),i.export(r,"registerVersion",()=>M),i.export(r,"setLogLevel",()=>U);var s=e("@firebase/component"),a=e("@firebase/logger"),o=e("@firebase/util"),l=e("idb");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let c="@firebase/app",h="0.11.1",d=new a.Logger("@firebase/app"),f="[DEFAULT]",p={[c]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},g=new Map,m=new Map,y=new Map;function v(e,t){try{e.container.addComponent(t)}catch(r){d.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function w(e,t){e.container.addOrOverwriteComponent(t)}function I(e){let t=e.name;if(y.has(t))return d.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(y.set(t,e),g.values()))v(r,e);for(let t of m.values())v(t,e);return!0}function _(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function b(e,t,r=f){_(e,t).clearInstance(r)}function E(e){return void 0!==e.options}function T(e){return null!=e&&void 0!==e.settings}function x(){y.clear()}let S=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){let r=(0,o.base64Decode)(e.split(".")[1]);if(null===r){console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);return}if(void 0===JSON.parse(r).exp){console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);return}let n=1e3*JSON.parse(r).exp;n-new Date().getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class k extends A{constructor(e,t,r,n){let i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:r,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,s,n):super(e.options,s,n),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&C(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&C(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,M(c,h,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){L(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw S.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N="11.3.1";function D(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:f,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw S.create("bad-app-name",{appName:String(i)});if(r||(r=(0,o.getDefaultAppConfig)()),!r)throw S.create("no-options");let a=g.get(i);if(a){if((0,o.deepEqual)(r,a.options)&&(0,o.deepEqual)(n,a.config))return a;throw S.create("duplicate-app",{appName:i})}let l=new s.ComponentContainer(i);for(let e of y.values())l.addComponent(e);let u=new A(r,n,l);return g.set(i,u),u}function R(e,t){let r;if((0,o.isBrowser)()&&!(0,o.isWebWorker)())throw S.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),r=E(e)?e.options:e;let n=Object.assign(Object.assign({},t),r);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw S.create("finalization-registry-not-supported",{});let i=""+[...JSON.stringify(n)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0),a=m.get(i);if(a)return a.incRefCount(t.releaseOnDeref),a;let l=new s.ComponentContainer(i);for(let e of y.values())l.addComponent(e);let u=new k(r,t,i,l);return m.set(i,u),u}function O(e=f){let t=g.get(e);if(!t&&e===f&&(0,o.getDefaultAppConfig)())return D();if(!t)throw S.create("no-app",{appName:e});return t}function P(){return Array.from(g.values())}async function L(e){let t=!1,r=e.name;g.has(r)?(t=!0,g.delete(r)):m.has(r)&&0>=e.decRefCount()&&(m.delete(r),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function M(e,t,r){var n;let i=null!==(n=p[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),d.warn(e.join(" "));return}I(new s.Component(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function F(e,t){if(null!==e&&"function"!=typeof e)throw S.create("invalid-log-argument");(0,a.setUserLogHandler)(e,t)}function U(e){(0,a.setLogLevel)(e)}let V="firebase-heartbeat-store",B=null;function j(){return B||(B=(0,l.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(V)}catch(e){console.warn(e)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),B}async function q(e){try{let t=(await j()).transaction(V),r=await t.objectStore(V).get(G(e));return await t.done,r}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{let t=S.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}async function z(e,t){try{let r=(await j()).transaction(V,"readwrite"),n=r.objectStore(V);await n.put(t,G(e)),await r.done}catch(e){if(e instanceof o.FirebaseError)d.warn(e.message);else{let t=S.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});d.warn(t.message)}}}function G(e){return`${e.name}!${e.options.appId}`}class ${constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=K();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){d.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=K(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),W(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),W(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return d.warn(e),""}}}function K(){return new Date().toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await q(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function W(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}I(new s.Component("platform-logger",e=>new u(e),"PRIVATE")),I(new s.Component("heartbeat",e=>new $(e),"PRIVATE")),M(c,h,""),M(c,h,"esm2017"),M("fire-js","")},{"@firebase/component":"7Ufrc","@firebase/logger":"2Swcv","@firebase/util":"hGlpW",idb:"cePoi","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7Ufrc":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"Component",()=>a),i.export(r,"ComponentContainer",()=>u),i.export(r,"Provider",()=>l);var s=e("@firebase/util");class a{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new s.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var r;let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e)===o?void 0:r,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new l(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},{"@firebase/util":"hGlpW","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hGlpW:[function(e,t,r,n){/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"CONSTANTS",()=>o),i.export(r,"DecodeBase64StringError",()=>f),i.export(r,"Deferred",()=>C),i.export(r,"ErrorFactory",()=>H),i.export(r,"FirebaseError",()=>K),i.export(r,"MAX_VALUE_MILLIS",()=>eE),i.export(r,"RANDOM_FACTOR",()=>eT),i.export(r,"Sha1",()=>eh),i.export(r,"areCookiesEnabled",()=>$),i.export(r,"assert",()=>l),i.export(r,"assertionError",()=>u),i.export(r,"async",()=>ep),i.export(r,"base64",()=>d),i.export(r,"base64Decode",()=>m),i.export(r,"base64Encode",()=>p),i.export(r,"base64urlEncodeWithoutPadding",()=>g),i.export(r,"calculateBackoffMillis",()=>ex),i.export(r,"contains",()=>er),i.export(r,"createMockUserToken",()=>k),i.export(r,"createSubscribe",()=>ed),i.export(r,"decode",()=>J),i.export(r,"deepCopy",()=>y),i.export(r,"deepEqual",()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],a=r[s];if(ea(n)&&ea(a)){if(!e(n,a))return!1}else if(n!==a)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}),i.export(r,"deepExtend",()=>v),i.export(r,"errorPrefix",()=>ey),i.export(r,"extractQuerystring",()=>ec),i.export(r,"getDefaultAppConfig",()=>S),i.export(r,"getDefaultEmulatorHost",()=>T),i.export(r,"getDefaultEmulatorHostnameAndPort",()=>x),i.export(r,"getDefaults",()=>E),i.export(r,"getExperimentalSetting",()=>A),i.export(r,"getGlobal",()=>w),i.export(r,"getModularInstance",()=>eA),i.export(r,"getUA",()=>N),i.export(r,"isAdmin",()=>et),i.export(r,"isBrowser",()=>O),i.export(r,"isBrowserExtension",()=>M),i.export(r,"isCloudflareWorker",()=>L),i.export(r,"isElectron",()=>U),i.export(r,"isEmpty",()=>ei),i.export(r,"isIE",()=>V),i.export(r,"isIndexedDBAvailable",()=>z),i.export(r,"isMobileCordova",()=>D),i.export(r,"isNode",()=>R),i.export(r,"isNodeSdk",()=>j),i.export(r,"isReactNative",()=>F),i.export(r,"isSafari",()=>q),i.export(r,"isUWP",()=>B),i.export(r,"isValidFormat",()=>ee),i.export(r,"isValidTimestamp",()=>X),i.export(r,"isWebWorker",()=>P),i.export(r,"issuedAtTime",()=>Z),i.export(r,"jsonEval",()=>Q),i.export(r,"map",()=>es),i.export(r,"ordinal",()=>eS),i.export(r,"promiseWithTimeout",()=>eo),i.export(r,"querystring",()=>el),i.export(r,"querystringDecode",()=>eu),i.export(r,"safeGet",()=>en),i.export(r,"stringLength",()=>eb),i.export(r,"stringToByteArray",()=>e_),i.export(r,"stringify",()=>Y),i.export(r,"validateArgCount",()=>em),i.export(r,"validateCallback",()=>ew),i.export(r,"validateContextObject",()=>eI),i.export(r,"validateIndexedDBOpenable",()=>G),i.export(r,"validateNamespace",()=>ev);var s=arguments[3],a=e("d07263985281b344");let o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},l=function(e,t){if(!e)throw u(t)},u=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},c=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},h=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],a=((7&i)<<18|(63&s)<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),n.push(r[u],r[c],r[h],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(c(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,a=++t<e.length?r[e.charAt(t)]:64,o=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new f;let l=i<<2|s>>4;if(n.push(l),64!==a){let e=s<<4&240|a>>2;if(n.push(e),64!==o){let e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let p=function(e){let t=c(e);return d.encodeByteArray(t,!0)},g=function(e){return p(e).replace(/\./g,"")},m=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=v(e[r],t[r]));return e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I=()=>w().__FIREBASE_DEFAULTS__,_=()=>{if(void 0===a||void 0===a.env)return;let e=void 0;if(e)return JSON.parse(e)},b=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&m(e[1]);return t&&JSON.parse(t)},E=()=>{try{return I()||_()||b()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},T=e=>{var t,r;return null===(r=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},x=e=>{let t=T(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},S=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[g(JSON.stringify({alg:"none",type:"JWT"})),g(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function D(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function R(){var e;let t=null===(e=E())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(s.process)}catch(e){return!1}}function O(){return"undefined"!=typeof window||P()}function P(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function L(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function M(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function F(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function U(){return N().indexOf("Electron/")>=0}function V(){let e=N();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function B(){return N().indexOf("MSAppHost/")>=0}function j(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function q(){return!R()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z(){try{return"object"==typeof indexedDB}catch(e){return!1}}function G(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function $(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class K extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var r,n;let i=t[0]||{},s=`${this.service}/${e}`,a=this.errors[e],o=a?(r=a,n=i,r.replace(W,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new K(s,l,i)}}let W=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=function(e){let t={},r={},n={},i="";try{let s=e.split(".");t=Q(m(s[0])||""),r=Q(m(s[1])||""),i=s[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:i}},X=function(e){let t=J(e).claims,r=Math.floor(new Date().getTime()/1e3),n=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),i=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!i&&r>=n&&r<=i},Z=function(e){let t=J(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},ee=function(e){let t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},et=function(e){let t=J(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function en(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ei(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function es(e,t,r){let n={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n}function ea(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,t=2e3){let r=new C;return setTimeout(()=>r.reject("timeout!"),t),e.then(r.resolve,r.reject),r.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function eu(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function ec(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let r,n;t||(t=0);let i=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)i[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)i[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],a=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^a&(o^l),n=0x5a827999):(r=a^o^l,n=0x6ed9eba1):e<60?(r=a&o|l&(a|o),n=0x8f1bbcdc):(r=a^o^l,n=0xca62c1d6);let t=(s<<5|s>>>27)+r+u+n+i[e]&0xffffffff;u=l,l=o,o=(a<<30|a>>>2)&0xffffffff,a=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+a&0xffffffff,this.chain_[2]=this.chain_[2]+o&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+u&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let r=t-this.blockSize,n=0,i=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}else for(;n<t;)if(i[s]=e[n],++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[r]=this.chain_[t]>>n&255,++r;return e}}function ed(e,t){let r=new ef(e,t);return r.subscribe.bind(r)}class ef{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=eg),void 0===n.error&&(n.error=eg),void 0===n.complete&&(n.complete=eg);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ep(e,t){return(...r)=>{Promise.resolve(!0).then(()=>{e(...r)}).catch(e=>{t&&t(e)})}}function eg(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em=function(e,t,r,n){let i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i)throw Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".")};function ey(e,t){return`${e} failed: ${t} argument `}function ev(e,t,r){if((!r||t)&&"string"!=typeof t)throw Error(ey(e,"namespace")+"must be a valid firebase namespace.")}function ew(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw Error(ey(e,t)+"must be a valid function.")}function eI(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw Error(ey(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){let t=i-55296;l(++n<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(n)-56320)}i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},eb=function(e){let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},eE=144e5,eT=.5;function ex(e,t=1e3,r=2){let n=t*Math.pow(r,e),i=Math.round(eT*n*(Math.random()-.5)*2);return Math.min(eE,n+i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e){return Number.isFinite(e)?e+function(e){let t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";let r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"}(e):`${e}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(e){return e&&e._delegate?e._delegate:e}},{d07263985281b344:"5QIF0","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r,n){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"2Swcv":[function(e,t,r,n){/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i,s,a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"LogLevel",()=>s),a.export(r,"Logger",()=>d),a.export(r,"setLogLevel",()=>f),a.export(r,"setUserLogHandler",()=>p);let o=[];(i=s||(s={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let l={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},u=s.INFO,c={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},h=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=c[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class d{constructor(e){this.name=e,this._logLevel=u,this._logHandler=h,this._userLogHandler=null,o.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?l[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function f(e){o.forEach(t=>{t.setLogLevel(e)})}function p(e,t){for(let r of o){let n=null;t&&t.level&&(n=l[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...i)=>{let a=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:s[r].toLowerCase(),message:a,args:i,type:t.name})}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cePoi:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"unwrap",()=>s.u),i.export(r,"wrap",()=>s.w),i.export(r,"deleteDB",()=>o),i.export(r,"openDB",()=>a);var s=e("./wrap-idb-value.js");function a(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let l=indexedDB.open(e,t),u=(0,s.w)(l);return n&&l.addEventListener("upgradeneeded",e=>{n((0,s.w)(l.result),e.oldVersion,e.newVersion,(0,s.w)(l.transaction),e)}),r&&l.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),u.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),u}function o(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",e=>t(e.oldVersion,e)),(0,s.w)(r).then(()=>void 0)}let l=["get","getKey","getAll","getAllKeys","count"],u=["put","add","delete","clear"],c=new Map;function h(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(c.get(t))return c.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=u.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||l.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return c.set(t,s),s}(0,s.r)(e=>({...e,get:(t,r,n)=>h(t,r)||e.get(t,r,n),has:(t,r)=>!!h(t,r)||e.has(t,r)}))},{"./wrap-idb-value.js":"fB1kC","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fB1kC:[function(e,t,r,n){let i,s;var a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"a",()=>d),a.export(r,"i",()=>o),a.export(r,"r",()=>p),a.export(r,"u",()=>m),a.export(r,"w",()=>g);let o=(e,t)=>t.some(t=>e instanceof t),l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap,f={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){f=e(f)}function g(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),d.set(t,e),t}(e);if(h.has(e))return h.get(e);let t=function(e){if("function"==typeof e)return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),g(l.get(this))}:function(...t){return g(e.apply(m(this),t))}:function(t,...r){let n=e.call(m(this),t,...r);return c.set(n,t.sort?t.sort():[t]),g(n)};return(e instanceof IDBTransaction&&function(e){if(u.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}(e),o(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,f):e}(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}let m=e=>d.get(e)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6IEaz":[function(e,t,r,n){var i,s,a=e("@parcel/transformer-js/src/esmodule-helpers.js");a.defineInteropFlag(r),a.export(r,"Integer",()=>i),a.export(r,"Md5",()=>s),a.export(r,"default",()=>u);var o=arguments[3],l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{},u={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(a<<22&0xffffffff|a>>>10),a=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,a=t+((r=i+(a<<20&0xffffffff|a>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(a<<23&0xffffffff|a>>>9),a=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(a<<21&0xffffffff|a>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,a=0;a<r;){if(0==s)for(;a<=n;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<r;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,i),s=0;break}}else for(;a<r;)if(i[s++]=e[a++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,a={};function o(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=t(e)):new r([0|e],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return c;if(0>e)return g(l(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var c=o(0),h=o(1),d=o(0x1000000);function f(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function p(e){return -1==e.h}function g(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(h)}function m(e,t){return e.add(g(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function v(e,t){this.g=e,this.h=t}function w(e,t){if(f(t))throw Error("division by zero");if(f(e))return new v(c,c);if(p(e))return t=w(g(e),t),new v(g(t.g),g(t.h));if(p(t))return t=w(e,g(t)),new v(g(t.g),t.h);if(30<e.g.length){if(p(e)||p(t))throw Error("slowDivide_ only works with positive integers.");for(var r=h,n=t;0>=n.l(e);)r=I(r),n=I(n);var i=_(r,1),s=_(n,1);for(n=_(n,2),r=_(r,2);!f(n);){var a=s.add(n);0>=a.l(e)&&(i=i.add(r),s=a),n=_(n,1),r=_(r,1)}return t=m(e,i.j(t)),new v(i,t)}for(i=c;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=l(r)).j(t);p(a)||0<a.l(e);)r-=n,a=(s=l(r)).j(t);f(s)&&(s=h),i=i.add(s),e=m(e,a)}return new v(i,e)}function I(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function _(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(p(this))return-g(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(f(this))return"0";if(p(this))return"-"+g(this).toString(e);for(var t=l(Math.pow(e,6)),r=this,n="";;){var i=w(r,t).g,s=((0<(r=m(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(f(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return p(e=m(this,e))?-1:+!f(e)},n.abs=function(){return p(this)?g(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(f(this)||f(e))return c;if(p(this))return p(e)?g(this).j(g(e)):g(g(this).j(e));if(p(e))return g(this.j(g(e)));if(0>this.l(d)&&0>e.l(d))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var a=this.i(i)>>>16,o=65535&this.i(i),u=e.i(s)>>>16,h=65535&e.i(s);n[2*i+2*s]+=o*h,y(n,2*i+2*s),n[2*i+2*s+1]+=a*h,y(n,2*i+2*s+1),n[2*i+2*s+1]+=o*u,y(n,2*i+2*s+1),n[2*i+2*s+2]+=a*u,y(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return w(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,s=u.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=l,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return g(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=l(Math.pow(r,8)),i=c,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),r);8>a?(a=l(Math.pow(r,a)),i=i.j(a).add(l(o))):i=(i=i.j(n)).add(l(o))}return i},i=u.Integer=r}).apply(void 0!==l?l:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"146Zc":[function(e,t,r,n){var i,s,a,o,l,u,c,h,d,f=e("@parcel/transformer-js/src/esmodule-helpers.js");f.defineInteropFlag(r),f.export(r,"ErrorCode",()=>l),f.export(r,"Event",()=>c),f.export(r,"EventType",()=>o),f.export(r,"FetchXmlHttpFactory",()=>s),f.export(r,"Stat",()=>u),f.export(r,"WebChannel",()=>a),f.export(r,"XhrIo",()=>i),f.export(r,"createWebChannelTransport",()=>d),f.export(r,"default",()=>m),f.export(r,"getStatEventTarget",()=>h);var p=arguments[3],g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==p?p:"undefined"!=typeof self?self:{},m={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},f=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof g&&g];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=f;e=e.split(".");for(var i=0;i<e.length-1;i++){var s=e[i];if(!(s in r))break e;r=r[s]}(t=t(i=r[e=e[e.length-1]]))!=i&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var p=p||{},y=this||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function I(e,t,r){return e.call.apply(e.bind,arguments)}function _(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function b(e,t,r){return(b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?I:_).apply(null,arguments)}function E(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function x(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(v(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function A(e){return/^[\s\xa0]*$/.test(e)}function C(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function k(e){return k[" "](e),e}k[" "]=function(){};var N=-1!=C().indexOf("Gecko")&&(-1==C().toLowerCase().indexOf("webkit")||-1!=C().indexOf("Edge"))&&-1==C().indexOf("Trident")&&-1==C().indexOf("MSIE")&&-1==C().indexOf("Edge");function D(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function R(e){let t={};for(let r in e)t[r]=e[r];return t}let O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<O.length;t++)r=O[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var L=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new M,e=>e.reset());class M{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let F,U=!1,V=new class{constructor(){this.h=this.g=null}add(e,t){let r=L.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},B=()=>{let e=y.Promise.resolve(void 0);F=()=>{e.then(j)}};var j=()=>{let e;for(var t;e=null,V.g&&(e=V.g,V.g=V.g.next,V.g||(V.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}L.j(t),100>L.h&&(L.h++,t.next=L.g,L.g=t)}U=!1};function q(){this.s=this.s,this.C=this.C}function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},z.prototype.h=function(){this.defaultPrevented=!0};var G=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};y.addEventListener("test",e,t),y.removeEventListener("test",e,t)}catch(e){}return e}();function $(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(N){e:{try{k(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:K[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}T($,z);var K={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),W=0;function Q(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++W,this.da=this.fa=!1}function Y(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function J(e){this.src=e,this.g={},this.h=0}function X(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Y(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function Z(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}J.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=Z(e,t,n,i);return -1<a?(t=e[a],r||(t.fa=!1)):((t=new Q(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var ee="closure_lm_"+(1e6*Math.random()|0),et={};function er(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=w(i)?!!i.capture:!!i,o=ea(e);if(o||(e[ee]=o=new J(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return es.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)G||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ei(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function en(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[H])X(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(ei(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=ea(t))?(X(r,e),0==r.h&&(r.src=null,t[ee]=null)):Y(e)}}}function ei(e){return e in et?et[e]:et[e]="on"+e}function es(e,t){if(e.da)e=!0;else{t=new $(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&en(e),e=r.call(n,t)}return e}function ea(e){return(e=e[ee])instanceof J?e:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function el(e){return"function"==typeof e?e:(e[eo]||(e[eo]=function(t){return e.handleEvent(t)}),e[eo])}function eu(){q.call(this),this.i=new J(this),this.M=this,this.F=null}function ec(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;P(t=new z(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=eh(a,n,!0,t)&&i}if(i=eh(a=t.g=e,n,!0,t)&&i,i=eh(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=eh(a=t.g=r[s],n,!1,t)&&i}function eh(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==r){var o=a.listener,l=a.ha||a.src;a.fa&&X(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}function ed(e,t,r){if("function"==typeof e)r&&(e=b(e,r));else if(e&&"function"==typeof e.handleEvent)e=b(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:y.setTimeout(e,t||0)}T(eu,q),eu.prototype[H]=!0,eu.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=w(i)?!!i.capture:!!i,n=el(n),t&&t[H])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=Z(a=t.g[r],n,i,s))&&(Y(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=ea(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Z(r,n,i,s)),(n=-1<t?r[t]:null)&&en(n))}(this,e,t,r,n)},eu.prototype.N=function(){if(eu.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Y(r[n]);delete t.g[e],t.h--}}this.F=null},eu.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eu.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ef extends q{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ed(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ep(e){q.call(this),this.h=e,this.g={}}T(ep,q);var eg=[];function em(e){D(e.g,function(e,t){this.g.hasOwnProperty(t)&&en(e)},e),e.g={}}ep.prototype.N=function(){ep.aa.N.call(this),em(this)},ep.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ey=y.JSON.stringify,ev=y.JSON.parse,ew=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function eI(){}function e_(e){return e.h||(e.h=e.i())}function eb(){}eI.prototype.h=null;var eE={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eT(){z.call(this,"d")}function ex(){z.call(this,"c")}T(eT,z),T(ex,z);var eS={},eA=null;function eC(){return eA=eA||new eu}function ek(e){z.call(this,eS.La,e)}function eN(e){let t=eC();ec(t,new ek(t))}function eD(e,t){z.call(this,eS.STAT_EVENT,e),this.stat=t}function eR(e){let t=eC();ec(t,new eD(t,e))}function eO(e,t){z.call(this,eS.Ma,e),this.size=t}function eP(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}function eL(){this.g=!0}function eM(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ey(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eS.La="serverreachability",T(ek,z),eS.STAT_EVENT="statevent",T(eD,z),eS.Ma="timingevent",T(eO,z),eL.prototype.xa=function(){this.g=!1},eL.prototype.info=function(){};var eF={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eU={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eV(){}function eB(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ep(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ej}function ej(){this.i=null,this.g="",this.h=!1}T(eV,eI),eV.prototype.g=function(){return new XMLHttpRequest},eV.prototype.i=function(){return{}},t=new eV;var eq={},ez={};function eG(e,t,r){e.L=1,e.v=ts(te(t)),e.m=r,e.P=!0,e$(e,null)}function e$(e,t){e.F=Date.now(),eH(e),e.A=te(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),tv(r.i,"t",n),e.C=0,r=e.j.J,e.h=new ej,e.g=t3(e.j,r?t:null,!e.m),0<e.O&&(e.M=new ef(b(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(eg[0]=i.toString()),i=eg);for(var s=0;s<i.length;s++){var a=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=el(n),t&&t[H]?t.L(r,n,w(i)?!!i.capture:!!i,s):er(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=el(n),t&&t[H]?t.K(r,n,w(i)?!!i.capture:!!i,s):er(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?R(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eN(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eK(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eH(e){e.S=Date.now()+e.I,eW(e,e.I)}function eW(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eP(b(e.ba,e),t)}function eQ(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function eY(e){0==e.j.G||e.J||tZ(e.j,e)}function eJ(e){eQ(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,em(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eX(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e6(r.h,e))){if(!e.K&&e6(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tX(r),tq(r);else break e}tQ(r),eR(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eP(b(r.Za,r),6e3));if(1>=e2(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t1(r,11)}else if((e.K||r.g==e)&&tX(r),!A(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.T=o[0],o=o[1],2==r.G){if("c"==o[0]){r.K=o[1],r.ia=o[2];let t=o[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=o[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e3(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,ti(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t6(n,n.J?n.ia:null,n.W),e.K){e5(n.h,e);var a=n.L;a&&(e.I=a),e.B&&(eQ(e),eH(e)),n.g=e}else tW(n);0<r.i.length&&tG(r)}else"stop"!=o[0]&&"close"!=o[0]||t1(r,7)}else 3==r.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?t1(r,7):tj(r):"noop"!=o[0]&&r.l&&r.l.ta(o),r.v=0)}}eN(4)}catch(e){}}eB.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tF(e)?t.j():this.Y(e)},eB.prototype.Y=function(e){try{if(e==this.g)e:{let h=tF(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>h)&&(3!=h||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=h||7==t||(8==t||0>=d?eN(3):eN(2)),eQ(this);var r=this.g.Z();this.X=r;t:if(eK(this)){var n=tU(this.g);e="";var i=n.length,s=4==tF(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eJ(this),eY(this);var a="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,h,r),this.o){if(this.T&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(o)){var u=o;break t}}u=null}if(r=u)eM(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eX(this,r);else{this.o=!1,this.s=3,eR(12),eJ(this),eY(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?ez:isNaN(r=Number(t.substring(r,n)))?eq:(n+=1)+r>t.length?ez:(t=t.slice(n,n+r),e.C=n+r,t)}(this,a))==ez){4==h&&(this.s=4,eR(14),r=!1),eM(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eq){this.s=4,eR(15),eM(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}else eM(this.i,this.l,e,null),eX(this,e);if(eK(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=h||0!=a.length||this.h.h||(this.s=1,eR(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tY(c),c.M=!0,eR(11))}}else eM(this.i,this.l,a,"[Invalid Chunked Response]"),eJ(this),eY(this)}else eM(this.i,this.l,a,null),eX(this,a);4==h&&eJ(this),this.o&&!this.J&&(4==h?tZ(this.j,this):(this.o=!1,eH(this)))}else(function(e){let t={};e=(e.g&&2<=tF(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(A(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,eR(12)):(this.s=0,eR(13)),eJ(this),eY(this)}}}catch(e){}finally{}},eB.prototype.cancel=function(){this.J=!0,eJ(this)},eB.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eN(),eR(17)),eJ(this),this.s=2,eY(this)):eW(this,this.S-e)};var eZ=class{constructor(e,t){this.g=e,this.map=t}};function e0(e){this.l=e||10,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e1(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e2(e){return e.h?1:e.g?e.g.size:0}function e6(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e3(e,t){e.g?e.g.add(t):e.h=t}function e5(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e8(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return x(e.i)}function e4(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}e0.prototype.cancel=function(){if(this.i=e8(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e7=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e9(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e9){this.h=e.h,tt(this,e.j),this.o=e.o,this.g=e.g,tr(this,e.s),this.l=e.l;var t=e.i,r=new tp;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tn(this,r),this.m=e.m}else e&&(t=String(e).match(e7))?(this.h=!1,tt(this,t[1]||"",!0),this.o=ta(t[2]||""),this.g=ta(t[3]||"",!0),tr(this,t[4]),this.l=ta(t[5]||"",!0),tn(this,t[6]||"",!0),this.m=ta(t[7]||"")):(this.h=!1,this.i=new tp(null,this.h))}function te(e){return new e9(e)}function tt(e,t,r){e.j=r?ta(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tr(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tn(e,t,r){var n,i;t instanceof tp?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tg(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tm(this,t),tv(this,r,e))},n)),n.j=i):(r||(t=to(t,td)),e.i=new tp(t,e.h))}function ti(e,t,r){e.i.set(t,r)}function ts(e){return ti(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ta(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tl),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tl(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e9.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tu,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tu,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(to(r,"/"==r.charAt(0)?th:tc,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",to(r,tf)),e.join("")};var tu=/[#\/\?@]/g,tc=/[#\?:]/g,th=/[#\?]/g,td=/[#\?@]/g,tf=/#/g;function tp(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tg(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tm(e,t){tg(e),t=tw(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ty(e,t){return tg(e),t=tw(e,t),e.g.has(t)}function tv(e,t,r){tm(e,t),0<r.length&&(e.i=null,e.g.set(tw(e,t),x(r)),e.h+=r.length)}function tw(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tI(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function t_(){this.g=new ew}function tb(e){this.l=e.Ub||null,this.j=e.eb||!1}function tE(e,t){eu.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tx(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tA(e){let t="";return D(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tC(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tA(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):ti(e,t,r))}function tk(e){eu.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=tp.prototype).add=function(e,t){tg(this),this.i=null,e=tw(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tg(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tg(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tg(this);let t=[];if("string"==typeof e)ty(this,e)&&(t=t.concat(this.g.get(tw(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tg(this),this.i=null,ty(this,e=tw(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.V(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")},T(tb,eI),tb.prototype.g=function(){return new tE(this.l,this.j)},tb.prototype.i=(e={},function(){return e}),T(tE,eu),(r=tE.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tx(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tx(this):tS(this),3==this.readyState&&tT(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tx(this))},r.Qa=function(e){this.g&&(this.response=e,tx(this))},r.ga=function(){this.g&&tx(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tE.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),T(tk,eu);var tN=/^https?$/i,tD=["POST","PUT"];function tR(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tO(e),tL(e)}function tO(e){e.A||(e.A=!0,ec(e,"complete"),ec(e,"error"))}function tP(e){if(e.h&&void 0!==p&&(!e.v[1]||4!=tF(e)||2!=e.Z())){if(e.u&&4==tF(e))ed(e.Ea,0,e);else if(ec(e,"readystatechange"),4==tF(e)){e.h=!1;try{let a=e.Z();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===a){var i=String(e.D).match(e7)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!tN.test(i?i.toLowerCase():"")}t=r}if(t)ec(e,"complete"),ec(e,"success");else{e.m=6;try{var s=2<tF(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tO(e)}}finally{tL(e)}}}}function tL(e,t){if(e.g){tM(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ec(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tM(e){e.I&&(y.clearTimeout(e.I),e.I=null)}function tF(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tB(e){this.Aa=0,this.i=[],this.j=new eL,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new e0(e&&e.concurrentRequestLimit),this.Da=new t_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tj(e){if(tz(e),3==e.G){var t=e.U++,r=te(e.I);if(ti(r,"SID",e.K),ti(r,"RID",t),ti(r,"TYPE","terminate"),tK(e,r),(t=new eB(e,e.j,t)).L=2,t.v=ts(te(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&y.Image&&((new Image).src=t.v,r=!0),r||(t.g=t3(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eH(t)}t2(e)}function tq(e){e.g&&(tY(e),e.g.cancel(),e.g=null)}function tz(e){tq(e),e.u&&(y.clearTimeout(e.u),e.u=null),tX(e),e.h.cancel(),e.s&&("number"==typeof e.s&&y.clearTimeout(e.s),e.s=null)}function tG(e){if(!e1(e.h)&&!e.s){e.s=!0;var t=e.Ga;F||B(),U||(F(),U=!0),V.add(t,e),e.B=0}}function t$(e,t){var r;r=t?t.l:e.U++;let n=te(e.I);ti(n,"SID",e.K),ti(n,"RID",r),ti(n,"AID",e.T),tK(e,n),e.m&&e.o&&tC(n,e.m,e.o),r=new eB(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tH(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e3(e.h,r),eG(r,n,t)}function tK(e,t){e.H&&D(e.H,function(e,r){ti(t,r,e)}),e.l&&e4({},function(e,r){ti(t,r,e)})}function tH(e,t,r){r=Math.min(e.i.length,r);var n=e.l?b(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].g,o=i[a].map;if(0>(r-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e4(e,function(e,r){let i=e;w(e)&&(i=ey(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tW(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;F||B(),U||(F(),U=!0),V.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eP(b(e.Fa,e),t0(e,e.v)),e.v++,!0)}function tY(e){null!=e.A&&(y.clearTimeout(e.A),e.A=null)}function tJ(e){e.g=new eB(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=te(e.qa);ti(t,"RID","rpc"),ti(t,"SID",e.K),ti(t,"AID",e.T),ti(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ti(t,"TO",e.ja),ti(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tC(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ts(te(t)),r.m=null,r.P=!0,e$(r,e)}function tX(e){null!=e.C&&(y.clearTimeout(e.C),e.C=null)}function tZ(e,t){var r=null;if(e.g==t){tX(e),tY(e),e.g=null;var n=2}else{if(!e6(e.h,t))return;r=t.D,e5(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ec(n=eC(),new eO(n,r)),tG(e)}else tW(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(e2(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eP(b(e.Ga,e,i),t0(e,e.B)),e.B++,!0)))||2==n&&tQ(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t1(e,5);break;case 4:t1(e,10);break;case 3:t1(e,6);break;default:t1(e,2)}}}function t0(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t1(e,t){if(e.j.info("Error code "+t),2==t){var r=b(e.fb,e),n=e.Xa;let t=!n;n=new e9(n||"//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tt(n,"https"),ts(n),t?function(e,t){let r=new eL;if(y.Image){let n=new Image;n.onload=E(tI,r,"TestLoadImage: loaded",!0,t,n),n.onerror=E(tI,r,"TestLoadImage: error",!1,t,n),n.onabort=E(tI,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=E(tI,r,"TestLoadImage: timeout",!1,t,n),y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eL,n=new AbortController,i=setTimeout(()=>{n.abort(),tI(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tI(r,"TestPingServer: ok",!0,t):tI(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tI(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eR(2);e.G=0,e.l&&e.l.sa(t),t2(e),tz(e)}function t2(e){if(e.G=0,e.ka=[],e.l){let t=e8(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,x(e.i),e.i.length=0),e.l.ra()}}function t6(e,t,r){var n=r instanceof e9?te(r):new e9(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tr(n,n.s);else{var i=y.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e9(null);n&&tt(s,n),t&&(s.g=t),i&&tr(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&ti(n,r,t),ti(n,"VER",e.la),tK(e,n),n}function t3(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tk(e.Ca&&!e.pa?new tb({eb:r}):e.pa)).Ha(e.J),t}function t5(){}function t8(){}function t4(e,t){eu.call(this),this.g=new tB(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!A(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!A(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new re(this)}function t7(e){eT.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t9(){ex.call(this),this.status=1}function re(e){this.g=e}(r=tk.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?e_(this.o):e_(t),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tR(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=y.FormData&&e instanceof y.FormData,!(0<=Array.prototype.indexOf.call(tD,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tR(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ec(this,"complete"),ec(this,"abort"),tL(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tL(this,!0)),tk.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tP(this):this.bb())},r.bb=function(){tP(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tF(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ev(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tB.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eR(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t6(this,null,this.W),tG(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eB(this,this.j,e),s=this.o;if(this.S&&(s?P(s=R(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tH(this,i,t),ti(r=te(this.I),"RID",e),ti(r,"CVER",22),this.D&&ti(r,"X-HTTP-Session-Id",this.D),tK(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tA(s)))+"&"+t:this.m&&tC(r,this.m,s)),e3(this.h,i),this.Ua&&ti(r,"TYPE","init"),this.P?(ti(r,"$req",t),ti(r,"SID","null"),i.T=!0,eG(i,r,null)):eG(i,r,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||e1(this.h)||t$(this))}},r.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eP(b(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eR(10),tq(this),tJ(this))},r.Za=function(){null!=this.C&&(this.C=null,tq(this),tQ(this),eR(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eR(2)):(this.j.info("Failed to ping google.com"),eR(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t5.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t8.prototype.g=function(e,t){return new t4(e,t)},T(t4,eu),t4.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t4.prototype.close=function(){tj(this.g)},t4.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ey(e),e=r);t.i.push(new eZ(t.Ya++,e)),3==t.G&&tG(t)},t4.prototype.N=function(){this.g.l=null,delete this.j,tj(this.g),delete this.g,t4.aa.N.call(this)},T(t7,eT),T(t9,ex),T(re,t5),re.prototype.ua=function(){ec(this.g,"a")},re.prototype.ta=function(e){ec(this.g,new t7(e))},re.prototype.sa=function(e){ec(this.g,new t9)},re.prototype.ra=function(){ec(this.g,"b")},t8.prototype.createWebChannel=t8.prototype.g,t4.prototype.send=t4.prototype.o,t4.prototype.open=t4.prototype.m,t4.prototype.close=t4.prototype.close,d=m.createWebChannelTransport=function(){return new t8},h=m.getStatEventTarget=function(){return eC()},c=m.Event=eS,u=m.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eF.NO_ERROR=0,eF.TIMEOUT=8,eF.HTTP_ERROR=6,l=m.ErrorCode=eF,eU.COMPLETE="complete",o=m.EventType=eU,eb.EventType=eE,eE.OPEN="a",eE.CLOSE="b",eE.ERROR="c",eE.MESSAGE="d",eu.prototype.listen=eu.prototype.K,a=m.WebChannel=eb,s=m.FetchXmlHttpFactory=tb,tk.prototype.listenOnce=tk.prototype.L,tk.prototype.getLastError=tk.prototype.Ka,tk.prototype.getLastErrorCode=tk.prototype.Ba,tk.prototype.getStatus=tk.prototype.Z,tk.prototype.getResponseJson=tk.prototype.Oa,tk.prototype.getResponseText=tk.prototype.oa,tk.prototype.send=tk.prototype.ea,tk.prototype.setWithCredentials=tk.prototype.Ha,i=m.XhrIo=tk}).apply(void 0!==g?g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7mwHT":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var s=e("@firebase/app");i.exportAll(s,r),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,s.registerVersion)("firebase","11.3.1","app")},{"@firebase/app":"3eFbF","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8Nm6e":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var s=e("@firebase/auth");i.exportAll(s,r)},{"@firebase/auth":"gpV6K","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gpV6K:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"ActionCodeOperation",()=>s.A),i.export(r,"ActionCodeURL",()=>s.ai),i.export(r,"AuthCredential",()=>s.L),i.export(r,"AuthErrorCodes",()=>s.I),i.export(r,"EmailAuthCredential",()=>s.M),i.export(r,"EmailAuthProvider",()=>s.V),i.export(r,"FacebookAuthProvider",()=>s.W),i.export(r,"FactorId",()=>s.F),i.export(r,"GithubAuthProvider",()=>s.Y),i.export(r,"GoogleAuthProvider",()=>s.X),i.export(r,"OAuthCredential",()=>s.N),i.export(r,"OAuthProvider",()=>s.Z),i.export(r,"OperationType",()=>s.O),i.export(r,"PhoneAuthCredential",()=>s.Q),i.export(r,"PhoneAuthProvider",()=>s.P),i.export(r,"PhoneMultiFactorGenerator",()=>s.m),i.export(r,"ProviderId",()=>s.p),i.export(r,"RecaptchaVerifier",()=>s.R),i.export(r,"SAMLAuthProvider",()=>s._),i.export(r,"SignInMethod",()=>s.S),i.export(r,"TotpMultiFactorGenerator",()=>s.T),i.export(r,"TotpSecret",()=>s.n),i.export(r,"TwitterAuthProvider",()=>s.$),i.export(r,"applyActionCode",()=>s.a7),i.export(r,"beforeAuthStateChanged",()=>s.x),i.export(r,"browserLocalPersistence",()=>s.b),i.export(r,"browserPopupRedirectResolver",()=>s.k),i.export(r,"browserSessionPersistence",()=>s.a),i.export(r,"checkActionCode",()=>s.a8),i.export(r,"confirmPasswordReset",()=>s.a6),i.export(r,"connectAuthEmulator",()=>s.K),i.export(r,"createUserWithEmailAndPassword",()=>s.aa),i.export(r,"debugErrorMap",()=>s.G),i.export(r,"deleteUser",()=>s.E),i.export(r,"fetchSignInMethodsForEmail",()=>s.af),i.export(r,"getAdditionalUserInfo",()=>s.aq),i.export(r,"getAuth",()=>s.o),i.export(r,"getIdToken",()=>s.an),i.export(r,"getIdTokenResult",()=>s.ao),i.export(r,"getMultiFactorResolver",()=>s.as),i.export(r,"getRedirectResult",()=>s.j),i.export(r,"inMemoryPersistence",()=>s.U),i.export(r,"indexedDBLocalPersistence",()=>s.i),i.export(r,"initializeAuth",()=>s.J),i.export(r,"initializeRecaptchaConfig",()=>s.t),i.export(r,"isSignInWithEmailLink",()=>s.ad),i.export(r,"linkWithCredential",()=>s.a2),i.export(r,"linkWithPhoneNumber",()=>s.l),i.export(r,"linkWithPopup",()=>s.d),i.export(r,"linkWithRedirect",()=>s.g),i.export(r,"multiFactor",()=>s.at),i.export(r,"onAuthStateChanged",()=>s.y),i.export(r,"onIdTokenChanged",()=>s.w),i.export(r,"parseActionCodeURL",()=>s.aj),i.export(r,"prodErrorMap",()=>s.H),i.export(r,"reauthenticateWithCredential",()=>s.a3),i.export(r,"reauthenticateWithPhoneNumber",()=>s.r),i.export(r,"reauthenticateWithPopup",()=>s.e),i.export(r,"reauthenticateWithRedirect",()=>s.h),i.export(r,"reload",()=>s.ar),i.export(r,"revokeAccessToken",()=>s.D),i.export(r,"sendEmailVerification",()=>s.ag),i.export(r,"sendPasswordResetEmail",()=>s.a5),i.export(r,"sendSignInLinkToEmail",()=>s.ac),i.export(r,"setPersistence",()=>s.q),i.export(r,"signInAnonymously",()=>s.a0),i.export(r,"signInWithCredential",()=>s.a1),i.export(r,"signInWithCustomToken",()=>s.a4),i.export(r,"signInWithEmailAndPassword",()=>s.ab),i.export(r,"signInWithEmailLink",()=>s.ae),i.export(r,"signInWithPhoneNumber",()=>s.s),i.export(r,"signInWithPopup",()=>s.c),i.export(r,"signInWithRedirect",()=>s.f),i.export(r,"signOut",()=>s.C),i.export(r,"unlink",()=>s.ap),i.export(r,"updateCurrentUser",()=>s.B),i.export(r,"updateEmail",()=>s.al),i.export(r,"updatePassword",()=>s.am),i.export(r,"updatePhoneNumber",()=>s.u),i.export(r,"updateProfile",()=>s.ak),i.export(r,"useDeviceLanguage",()=>s.z),i.export(r,"validatePassword",()=>s.v),i.export(r,"verifyBeforeUpdateEmail",()=>s.ah),i.export(r,"verifyPasswordResetCode",()=>s.a9);var s=e("./index-dfc2d82f.js");e("@firebase/app"),e("@firebase/util"),e("@firebase/logger"),e("tslib"),e("@firebase/component")},{"./index-dfc2d82f.js":"9lVzW","@firebase/app":"3eFbF","@firebase/util":"hGlpW","@firebase/logger":"2Swcv",tslib:"gBS4y","@firebase/component":"7Ufrc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9lVzW":[function(e,t,r,n){var i,s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"$",()=>tA),s.export(r,"A",()=>g),s.export(r,"B",()=>rw),s.export(r,"C",()=>rI),s.export(r,"D",()=>r_),s.export(r,"E",()=>rb),s.export(r,"F",()=>h),s.export(r,"G",()=>y),s.export(r,"H",()=>v),s.export(r,"I",()=>I),s.export(r,"J",()=>e0),s.export(r,"K",()=>e1),s.export(r,"L",()=>e3),s.export(r,"M",()=>to),s.export(r,"N",()=>tu),s.export(r,"O",()=>p),s.export(r,"P",()=>ni),s.export(r,"Q",()=>tg),s.export(r,"R",()=>r8),s.export(r,"S",()=>f),s.export(r,"T",()=>n2),s.export(r,"U",()=>e_),s.export(r,"V",()=>tv),s.export(r,"W",()=>tb),s.export(r,"X",()=>tE),s.export(r,"Y",()=>tT),s.export(r,"Z",()=>t_),s.export(r,"_",()=>tS),s.export(r,"a",()=>rL),s.export(r,"a0",()=>tD),s.export(r,"a1",()=>tB),s.export(r,"a2",()=>tj),s.export(r,"a3",()=>tq),s.export(r,"a4",()=>tG),s.export(r,"a5",()=>tY),s.export(r,"a6",()=>tJ),s.export(r,"a7",()=>tX),s.export(r,"a8",()=>tZ),s.export(r,"a9",()=>t0),s.export(r,"aA",()=>eO),s.export(r,"aB",()=>T),s.export(r,"aC",()=>k),s.export(r,"aD",()=>nO),s.export(r,"aE",()=>ew),s.export(r,"aF",()=>eb),s.export(r,"aG",()=>nD),s.export(r,"aH",()=>n_),s.export(r,"aI",()=>nI),s.export(r,"aJ",()=>eB),s.export(r,"aK",()=>ey),s.export(r,"aL",()=>eV),s.export(r,"aM",()=>eL),s.export(r,"aN",()=>rF),s.export(r,"aO",()=>nW),s.export(r,"aP",()=>F),s.export(r,"aQ",()=>tx),s.export(r,"aa",()=>t1),s.export(r,"ab",()=>t2),s.export(r,"ac",()=>t6),s.export(r,"ad",()=>t3),s.export(r,"ae",()=>t5),s.export(r,"af",()=>t4),s.export(r,"ag",()=>t7),s.export(r,"ah",()=>t9),s.export(r,"ai",()=>tm),s.export(r,"aj",()=>ty),s.export(r,"ak",()=>rt),s.export(r,"al",()=>rr),s.export(r,"am",()=>rn),s.export(r,"an",()=>er),s.export(r,"ao",()=>en),s.export(r,"ap",()=>tL),s.export(r,"aq",()=>rh),s.export(r,"ar",()=>eh),s.export(r,"as",()=>rx),s.export(r,"at",()=>rk),s.export(r,"au",()=>D),s.export(r,"av",()=>eR),s.export(r,"aw",()=>ek),s.export(r,"ax",()=>E),s.export(r,"ay",()=>nY),s.export(r,"az",()=>nM),s.export(r,"b",()=>rO),s.export(r,"c",()=>nd),s.export(r,"d",()=>np),s.export(r,"e",()=>nf),s.export(r,"f",()=>nT),s.export(r,"g",()=>nC),s.export(r,"h",()=>nS),s.export(r,"i",()=>rX),s.export(r,"j",()=>nN),s.export(r,"k",()=>nX),s.export(r,"l",()=>r9),s.export(r,"m",()=>n1),s.export(r,"n",()=>n3),s.export(r,"o",()=>ir),s.export(r,"p",()=>d),s.export(r,"q",()=>rd),s.export(r,"r",()=>ne),s.export(r,"s",()=>r7),s.export(r,"t",()=>rf),s.export(r,"u",()=>nr),s.export(r,"v",()=>rp),s.export(r,"w",()=>rg),s.export(r,"x",()=>rm),s.export(r,"y",()=>ry),s.export(r,"z",()=>rv);var a=e("@firebase/app"),o=e("@firebase/util"),l=e("@firebase/logger"),u=e("tslib"),c=e("@firebase/component");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h={PHONE:"phone",TOTP:"totp"},d={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},f={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},p={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},g={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let y=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}},v=m,w=new o.ErrorFactory("auth","Firebase",m()),I={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"},_=new l.Logger("@firebase/auth");function b(e,...t){_.logLevel<=l.LogLevel.ERROR&&_.error(`Auth (${a.SDK_VERSION}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,...t){throw C(e,...t)}function T(e,...t){return C(e,...t)}function x(e,t,r){let n=Object.assign(Object.assign({},v()),{[t]:r});return new o.ErrorFactory("auth","Firebase",n).create(t,{appName:e.name})}function S(e){return x(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&E(e,"argument-error"),x(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function C(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return w.create(e,...t)}function k(e,t,...r){if(!e)throw C(t,...r)}function N(e){let t="INTERNAL ASSERTION FAILED: "+e;throw b(t),Error(t)}function D(e,t){e||N(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===P()||"https:"===P()}function P(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.shortDelay=e,this.longDelay=t,D(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,o.isMobileCordova)()||(0,o.isReactNative)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(O()||(0,o.isBrowserExtension)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e,t){D(e.emulator,"Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void N("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void N("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void N("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let U={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},V=new L(3e4,6e4);function B(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,r,n,i={}){return q(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let a=(0,o.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);let u=Object.assign({method:t,headers:l},i);return(0,o.isCloudflareWorker)()||(u.referrerPolicy="no-referrer"),F.fetch()(G(e,e.config.apiHost,r,a),u)})}async function q(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},U),t);try{let t=new $(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw K(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw K(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw K(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw K(e,"user-disabled",s);let a=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw x(e,a,r);E(e,a)}}catch(t){if(t instanceof o.FirebaseError)throw t;E(e,"network-request-failed",{message:String(t)})}}async function z(e,t,r,n,i={}){let s=await j(e,t,r,n,i);return"mfaPendingCredential"in s&&E(e,"multi-factor-auth-required",{_serverResponse:s}),s}function G(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?M(e.config,i):`${e.config.apiScheme}://${i}`}class ${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(T(this.auth,"network-request-failed")),V.get())})}}function K(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=T(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return void 0!==e&&void 0!==e.getResponse}function W(e){return void 0!==e&&void 0!==e.enterprise}class Q{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function J(e,t){return j(e,"GET","/v2/recaptchaConfig",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function Z(e,t){return j(e,"POST","/v1/accounts:update",t)}async function ee(e,t){return j(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t=!1){return(0,o.getModularInstance)(e).getIdToken(t)}async function en(e,t=!1){let r=(0,o.getModularInstance)(e),n=await r.getIdToken(t),i=es(n);k(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:et(ei(i.auth_time)),issuedAtTime:et(ei(i.iat)),expirationTime:et(ei(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}function ei(e){return 1e3*Number(e)}function es(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return b("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,o.base64Decode)(r);if(!e)return b("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return b("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ea(e){let t=es(e);return k(t,"internal-error"),k(void 0!==t.exp,"internal-error"),k(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof o.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=et(this.lastLoginAt),this.creationTime=et(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){var t,r,n;let i=e.auth,s=await e.getIdToken(),a=await eo(e,ee(i,{idToken:s}));k(null==a?void 0:a.users.length,i,"internal-error");let o=a.users[0];e._notifyReloadListener(o);let l=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?ed(o.providerUserInfo):[],u=(r=e.providerData,n=l,[...r.filter(e=>!n.some(t=>t.providerId===e.providerId)),...n]),c=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!(null==u?void 0:u.length);Object.assign(e,{uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new eu(o.createdAt,o.lastLoginAt),isAnonymous:!!c&&h})}async function eh(e){let t=(0,o.getModularInstance)(e);await ec(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ed(e){return e.map(e=>{var{providerId:t}=e,r=(0,u.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(e,t){let r=await q(e,{},async()=>{let r=(0,o.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=G(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function ep(e,t){return j(e,"POST","/v2/accounts:revokeToken",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(void 0!==e.idToken,"internal-error"),k(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):ea(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){k(0!==e.length,"internal-error");let t=ea(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(k(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await ef(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new eg;return r&&(k("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(k("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(k("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eg,this.toJSON())}_performRefresh(){return N("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e,t){k("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ey{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,u.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new el(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new eu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await eo(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return en(this,e)}reload(){return eh(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ey(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,a._isFirebaseServerApp)(this.auth.app))return Promise.reject(S(this.auth));let e=await this.getIdToken();return await eo(this,X(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,a,o,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,g=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:_,stsTokenManager:b}=t;k(v&&b,e,"internal-error");let E=eg.fromJSON(this.name,b);k("string"==typeof v,e,"internal-error"),em(c,e.name),em(h,e.name),k("boolean"==typeof w,e,"internal-error"),k("boolean"==typeof I,e,"internal-error"),em(d,e.name),em(f,e.name),em(p,e.name),em(g,e.name),em(m,e.name),em(y,e.name);let T=new ey({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map(e=>Object.assign({},e))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,r=!1){let n=new eg;n.updateFromServerResponse(t);let i=new ey({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await ec(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];k(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?ed(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length),a=new eg;a.updateFromIdToken(r);let o=new ey({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return Object.assign(o,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new eu(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(null==i?void 0:i.length)}),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev=new Map;function ew(e){D(e instanceof Function,"Expected a class definition");let t=ev.get(e);return t?D(t instanceof e,"Instance stored in cache mismatched with class"):(t=new e,ev.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}eI.type="NONE";let e_=eI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(e,t,r){return`firebase:${e}:${t}:${r}`}class eE{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=eb(this.userKey,n.apiKey,i),this.fullPersistenceKey=eb("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ey._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new eE(ew(e_),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||ew(e_),s=eb(r,e.config.apiKey,e.name),a=null;for(let r of t)try{let t=await r._get(s);if(t){let n=ey._fromJSON(e,t);r!==i&&(a=n),i=r;break}}catch(e){}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new eE(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(eC(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ex(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eN(t))return"Blackberry";if(eD(t))return"Webos";if(eS(t))return"Safari";if((t.includes("chrome/")||eA(t))&&!t.includes("edge/"))return"Chrome";if(ek(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}function ex(e=(0,o.getUA)()){return/firefox\//i.test(e)}function eS(e=(0,o.getUA)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function eA(e=(0,o.getUA)()){return/crios\//i.test(e)}function eC(e=(0,o.getUA)()){return/iemobile/i.test(e)}function ek(e=(0,o.getUA)()){return/android/i.test(e)}function eN(e=(0,o.getUA)()){return/blackberry/i.test(e)}function eD(e=(0,o.getUA)()){return/webos/i.test(e)}function eR(e=(0,o.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eO(e=(0,o.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function eP(e=(0,o.getUA)()){return eR(e)||ek(e)||eD(e)||eN(e)||/windows phone/i.test(e)||eC(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(e,t=[]){let r;switch(e){case"Browser":r=eT((0,o.getUA)());break;case"Worker":r=`${eT((0,o.getUA)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${a.SDK_VERSION}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF(e,t={}){return j(e,"GET","/v2/passwordPolicy",B(e,t))}class eU{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,a;let o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(r=o.meetsMaxPasswordLength)||void 0===r||r),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ej(this),this.idTokenSubscription=new ej(this),this.beforeStateQueue=new eM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=w,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ew(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted){if(this.persistenceManager=await eE.create(this,e),!this._deleted){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await ee(this,{idToken:e}),r=await ey._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if((0,a._isFirebaseServerApp)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ec(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,a._isFirebaseServerApp)(this.app))return Promise.reject(S(this));let t=e?(0,o.getModularInstance)(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ew(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new eU(await eF(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await ep(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ew(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await eE.create(this,[ew(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(k(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eL(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;if((0,a._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){_.logLevel<=l.LogLevel.WARN&&_.warn(`Auth (${a.SDK_VERSION}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eB(e){return(0,o.getModularInstance)(e)}class ej{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,o.createSubscribe)(e=>this.observer=e)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eq={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ez(e){return eq.loadJS(e)}function eG(e){return`__${e}${Math.floor(1e6*Math.random())}`}class e${constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){let r=this.counter;return this._widgets.set(r,new eW(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;let r=e||1e12;null===(t=this._widgets.get(r))||void 0===t||t.delete(),this._widgets.delete(r)}getResponse(e){var t;return(null===(t=this._widgets.get(e||1e12))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;return null===(t=this._widgets.get(e||1e12))||void 0===t||t.execute(),""}}class eK{constructor(){this.enterprise=new eH}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eH{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eW{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};let n="string"==typeof e?document.getElementById(e):e;k(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=function(e){let t=[],r="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let e=0;e<50;e++)t.push(r.charAt(Math.floor(Math.random()*r.length)));return t.join("")}(50);let{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw Error("reCAPTCHA mock was already deleted!")}}let eQ="NO_RECAPTCHA";class eY{constructor(e){this.type="recaptcha-enterprise",this.auth=eB(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{J(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new Q(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;W(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(eQ)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eK().execute("siteKey",{action:"verify"}):new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&W(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=eq.recaptchaEnterpriseScript;0!==t.length&&(t+=r),ez(t).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function eJ(e,t,r,n=!1,i=!1){let s;let a=new eY(e);if(i)s=eQ;else try{s=await a.verify(r)}catch(e){s=await a.verify(r,!0)}let o=Object.assign({},t);if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in o){let e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){let e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function eX(e,t,r,n,i){var s,a;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=e._getRecaptchaConfig())||void 0===s||!s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await eJ(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await eJ(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(null===(a=e._getRecaptchaConfig())||void 0===a?void 0:a.isProviderEnabled("PHONE_PROVIDER")){let i=await eJ(e,t,r);return n(e,i).catch(async i=>{var s;if((null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await eJ(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await eJ(e,t,r,!1,!0);return n(e,i)}}async function eZ(e){let t=eB(e),r=new Q(await J(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new eY(t).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(e,t){let r=(0,a._getProvider)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,o.deepEqual)(n,null!=t?t:{}))return e;E(e,"already-initialized")}return r.initialize({options:t})}function e1(e,t,r){let n=eB(e);k(n._canInitEmulator,n,"emulator-config-failed"),k(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=e2(t),{host:a,port:o}=function(e){let t=e2(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:e6(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:e6(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}function e2(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function e6(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return N("not implemented")}_getIdTokenResponse(e){return N("not implemented")}_linkToIdToken(e,t){return N("not implemented")}_getReauthenticationResolver(e){return N("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t){return j(e,"POST","/v1/accounts:resetPassword",B(e,t))}async function e8(e,t){return j(e,"POST","/v1/accounts:update",t)}async function e4(e,t){return j(e,"POST","/v1/accounts:signUp",t)}async function e7(e,t){return j(e,"POST","/v1/accounts:update",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e9(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",B(e,t))}async function te(e,t){return j(e,"POST","/v1/accounts:sendOobCode",B(e,t))}async function tt(e,t){return te(e,t)}async function tr(e,t){return te(e,t)}async function tn(e,t){return te(e,t)}async function ti(e,t){return te(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}async function ta(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends e3{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new to(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new to(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return eX(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",e9,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ts(e,{email:this._email,oobCode:this._password});default:E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return eX(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e4,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ta(e,{idToken:t,email:this._email,oobCode:this._password});default:E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",B(e,t))}class tu extends e3{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new tu(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,u.__rest)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new tu(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return tl(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tl(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,o.querystring)(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tc(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",B(e,t))}async function th(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t))}async function td(e,t){let r=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,t));if(r.temporaryProof)throw K(e,"account-exists-with-different-credential",r);return r}let tf={USER_NOT_FOUND:"user-not-found"};async function tp(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",B(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),tf)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg extends e3{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tg({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tg({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return th(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return td(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return tp(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new tg({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class tm{constructor(e){var t,r,n,i,s,a;let l=(0,o.querystringDecode)((0,o.extractQuerystring)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);k(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(i=l.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=l.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).link,r=t?(0,o.querystringDecode)((0,o.extractQuerystring)(t)).deep_link_id:null,n=(0,o.querystringDecode)((0,o.extractQuerystring)(e)).deep_link_id;return(n?(0,o.querystringDecode)((0,o.extractQuerystring)(n)).link:null)||n||r||t||e}(e);try{return new tm(t)}catch(e){return null}}}function ty(e){return tm.parseLink(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.providerId=tv.PROVIDER_ID}static credential(e,t){return to._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=tm.parseLink(t);return k(r,"argument-error"),to._fromEmailAndCode(e,r.code,r.tenantId)}}tv.PROVIDER_ID="password",tv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",tv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI extends tw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class t_ extends tI{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),tu._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),tu._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return t_.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return t_.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:n,pendingToken:i,nonce:s,providerId:a}=e;if(!r&&!n&&!t&&!i||!a)return null;try{return new t_(a)._credential({idToken:t,accessToken:r,nonce:s,pendingToken:i})}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb extends tI{constructor(){super("facebook.com")}static credential(e){return tu._fromParams({providerId:tb.PROVIDER_ID,signInMethod:tb.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tb.credentialFromTaggedObject(e)}static credentialFromError(e){return tb.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tb.credential(e.oauthAccessToken)}catch(e){return null}}}tb.FACEBOOK_SIGN_IN_METHOD="facebook.com",tb.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends tI{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tu._fromParams({providerId:tE.PROVIDER_ID,signInMethod:tE.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tE.credentialFromTaggedObject(e)}static credentialFromError(e){return tE.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tE.credential(t,r)}catch(e){return null}}}tE.GOOGLE_SIGN_IN_METHOD="google.com",tE.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT extends tI{constructor(){super("github.com")}static credential(e){return tu._fromParams({providerId:tT.PROVIDER_ID,signInMethod:tT.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tT.credentialFromTaggedObject(e)}static credentialFromError(e){return tT.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tT.credential(e.oauthAccessToken)}catch(e){return null}}}tT.GITHUB_SIGN_IN_METHOD="github.com",tT.PROVIDER_ID="github.com";class tx extends e3{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return tl(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tl(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tl(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){let{providerId:t,signInMethod:r,pendingToken:n}="string"==typeof e?JSON.parse(e):e;return t&&r&&n&&t===r?new tx(t,n):null}static _create(e,t){return new tx(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}class tS extends tw{constructor(e){k(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return tS.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return tS.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){let t=tx.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return tx._create(r,t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA extends tI{constructor(){super("twitter.com")}static credential(e,t){return tu._fromParams({providerId:tA.PROVIDER_ID,signInMethod:tA.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return tA.credentialFromTaggedObject(e)}static credentialFromError(e){return tA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return tA.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(e,t){return z(e,"POST","/v1/accounts:signUp",B(e,t))}tA.TWITTER_SIGN_IN_METHOD="twitter.com",tA.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new tk({user:await ey._fromIdTokenResponse(e,r,n),providerId:tN(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new tk({user:e,providerId:tN(r),_tokenResponse:r,operationType:t})}}function tN(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(e){var t;if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let r=eB(e);if(await r._initializationPromise,null===(t=r.currentUser)||void 0===t?void 0:t.isAnonymous)return new tk({user:r.currentUser,providerId:null,operationType:"signIn"});let n=await tC(r,{returnSecureToken:!0}),i=await tk._fromIdTokenResponse(r,"signIn",n,!0);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR extends o.FirebaseError{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,tR.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new tR(e,t,r,n)}}function tO(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw tR._fromErrorAndOperation(e,r,t,n);throw r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t){let r=(0,o.getModularInstance)(e);await tF(!0,r,t);let{providerUserInfo:n}=await Z(r.auth,{idToken:await r.getIdToken(),deleteProvider:[t]}),i=tP(n||[]);return r.providerData=r.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(r.phoneNumber=null),await r.auth._persistUserIfCurrent(r),r}async function tM(e,t,r=!1){let n=await eo(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return tk._forOperation(e,"link",n)}async function tF(e,t,r){await ec(t),k(tP(t.providerData).has(r)===e,t.auth,!1===e?"provider-already-linked":"no-such-provider")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(e,t,r=!1){let{auth:n}=e;if((0,a._isFirebaseServerApp)(n.app))return Promise.reject(S(n));let i="reauthenticate";try{let s=await eo(e,tO(n,i,t,e),r);k(s.idToken,n,"internal-error");let a=es(s.idToken);k(a,n,"internal-error");let{sub:o}=a;return k(e.uid===o,n,"user-mismatch"),tk._forOperation(e,i,s)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&E(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tV(e,t,r=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n="signIn",i=await tO(e,n,t),s=await tk._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}async function tB(e,t){return tV(eB(e),t)}async function tj(e,t){let r=(0,o.getModularInstance)(e);return await tF(!1,r,t.providerId),tM(r,t)}async function tq(e,t){return tU((0,o.getModularInstance)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tz(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tG(e,t){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let r=eB(e),n=await tz(r,{token:t,returnSecureToken:!0}),i=await tk._fromIdTokenResponse(r,"signIn",n);return await r._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tK._fromServerResponse(e,t):"totpInfo"in t?tH._fromServerResponse(e,t):E(e,"internal-error")}}class tK extends t${constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tK(t)}}class tH extends t${constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new tH(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tW(e,t,r){var n;k((null===(n=r.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),k(void 0===r.dynamicLinkDomain||r.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),k(void 0===r.linkDomain||r.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=r.url,t.dynamicLinkDomain=r.dynamicLinkDomain,t.linkDomain=r.linkDomain,t.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(k(r.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=r.iOS.bundleId),r.android&&(k(r.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=r.android.installApp,t.androidMinimumVersionCode=r.android.minimumVersion,t.androidPackageName=r.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tQ(e){let t=eB(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function tY(e,t,r){let n=eB(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};r&&tW(n,i,r),await eX(n,i,"getOobCode",tr,"EMAIL_PASSWORD_PROVIDER")}async function tJ(e,t,r){await e5((0,o.getModularInstance)(e),{oobCode:t,newPassword:r}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t})}async function tX(e,t){await e7((0,o.getModularInstance)(e),{oobCode:t})}async function tZ(e,t){let r=(0,o.getModularInstance)(e),n=await e5(r,{oobCode:t}),i=n.requestType;switch(k(i,r,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(n.newEmail,r,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(n.mfaInfo,r,"internal-error");default:k(n.email,r,"internal-error")}let s=null;return n.mfaInfo&&(s=t$._fromServerResponse(eB(r),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function t0(e,t){let{data:r}=await tZ((0,o.getModularInstance)(e),t);return r.email}async function t1(e,t,r){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=eB(e),i=eX(n,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tC,"EMAIL_PASSWORD_PROVIDER"),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t}),o=await tk._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}function t2(e,t,r){return(0,a._isFirebaseServerApp)(e.app)?Promise.reject(S(e)):tB((0,o.getModularInstance)(e),tv.credential(t,r)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&tQ(e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t6(e,t,r){let n=eB(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};k(r.handleCodeInApp,n,"argument-error"),r&&tW(n,i,r),await eX(n,i,"getOobCode",tn,"EMAIL_PASSWORD_PROVIDER")}function t3(e,t){let r=tm.parseLink(t);return(null==r?void 0:r.operation)==="EMAIL_SIGNIN"}async function t5(e,t,r){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=(0,o.getModularInstance)(e),i=tv.credentialWithLink(t,r||R());return k(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),tB(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t8(e,t){return j(e,"POST","/v1/accounts:createAuthUri",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(e,t){let r=O()?R():"http://localhost",{signinMethods:n}=await t8((0,o.getModularInstance)(e),{identifier:t,continueUri:r});return n||[]}async function t7(e,t){let r=(0,o.getModularInstance)(e),n={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&tW(r.auth,n,t);let{email:i}=await tt(r.auth,n);i!==e.email&&await e.reload()}async function t9(e,t,r){let n=(0,o.getModularInstance)(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};r&&tW(n.auth,i,r);let{email:s}=await ti(n.auth,i);s!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){return j(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,{displayName:t,photoURL:r}){if(void 0===t&&void 0===r)return;let n=(0,o.getModularInstance)(e),i=await n.getIdToken(),s=await eo(n,re(n.auth,{idToken:i,displayName:t,photoUrl:r,returnSecureToken:!0}));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;let a=n.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}function rr(e,t){let r=(0,o.getModularInstance)(e);return(0,a._isFirebaseServerApp)(r.auth.app)?Promise.reject(S(r.auth)):ri(r,t,null)}function rn(e,t){return ri((0,o.getModularInstance)(e),null,t)}async function ri(e,t,r){let{auth:n}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),r&&(i.password=r);let s=await eo(e,e8(n,i));await e._updateTokensIfNecessary(s,!0)}class rs{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class ra extends rs{constructor(e,t,r,n){super(e,t,r),this.username=n}}class ro extends rs{constructor(e,t){super(e,"facebook.com",t)}}class rl extends ra{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class ru extends rs{constructor(e,t){super(e,"google.com",t)}}class rc extends ra{constructor(e,t,r){super(e,"twitter.com",t,r)}}function rh(e){let{user:t,_tokenResponse:r}=e;return t.isAnonymous&&!r?{providerId:null,isNewUser:!1,profile:null}:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){var t,r;if(!e)return null;let{providerId:n}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){let n=null===(r=null===(t=es(e.idToken))||void 0===t?void 0:t.firebase)||void 0===r?void 0:r.sign_in_provider;if(n)return new rs(s,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new ro(s,i);case"github.com":return new rl(s,i);case"google.com":return new ru(s,i);case"twitter.com":return new rc(s,i,e.screenName||null);case"custom":case"anonymous":return new rs(s,null);default:return new rs(s,n,i)}}(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(e,t){return(0,o.getModularInstance)(e).setPersistence(t)}function rf(e){return eZ(e)}async function rp(e,t){return eB(e).validatePassword(t)}function rg(e,t,r,n){return(0,o.getModularInstance)(e).onIdTokenChanged(t,r,n)}function rm(e,t,r){return(0,o.getModularInstance)(e).beforeAuthStateChanged(t,r)}function ry(e,t,r,n){return(0,o.getModularInstance)(e).onAuthStateChanged(t,r,n)}function rv(e){(0,o.getModularInstance)(e).useDeviceLanguage()}function rw(e,t){return(0,o.getModularInstance)(e).updateCurrentUser(t)}function rI(e){return(0,o.getModularInstance)(e).signOut()}function r_(e,t){return eB(e).revokeAccessToken(t)}async function rb(e){return(0,o.getModularInstance)(e).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new rE("enroll",e,t)}static _fromMfaPendingCredential(e){return new rE("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return rE._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return rE._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){let r=eB(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map(e=>t$._fromServerResponse(r,e));k(n.mfaPendingCredential,r,"internal-error");let s=rE._fromMfaPendingCredential(n.mfaPendingCredential);return new rT(s,i,async e=>{let i=await e._process(r,s);delete n.mfaInfo,delete n.mfaPendingCredential;let a=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":let o=await tk._fromIdTokenResponse(r,t.operationType,a);return await r._updateCurrentUser(o.user),o;case"reauthenticate":return k(t.user,r,"internal-error"),tk._forOperation(t.user,t.operationType,a);default:E(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}function rx(e,t){var r;let n=(0,o.getModularInstance)(e);return k(t.customData.operationType,n,"argument-error"),k(null===(r=t.customData._serverResponse)||void 0===r?void 0:r.mfaPendingCredential,n,"argument-error"),rT._fromError(n,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",B(e,t))}class rA{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>t$._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new rA(e)}async getSession(){return rE._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){let r=await this.getSession(),n=await eo(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,r=await this.user.getIdToken();try{var n,i;let e=await eo(this.user,(n=this.user.auth,i={idToken:r,mfaEnrollmentId:t},j(n,"POST","/v2/accounts/mfaEnrollment:withdraw",B(n,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}let rC=new WeakMap;function rk(e){let t=(0,o.getModularInstance)(e);return rC.has(t)||rC.set(t,rA._fromUser(t)),rC.get(t)}let rN="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(rN,"1"),this.storage.removeItem(rN),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class rR extends rD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(0,o.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}rR.type="LOCAL";let rO=rR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP extends rD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rP.type="SESSION";let rL=rP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new rM(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}rM.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=rF("",20);s.port1.start();let u=setTimeout(()=>{o(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(u),n=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(e.data.response);break;default:clearTimeout(u),clearTimeout(n),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rB(){return void 0!==rV().WorkerGlobalScope&&"function"==typeof rV().importScripts}async function rj(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rq="firebaseLocalStorageDb",rz="firebaseLocalStorage",rG="fbase_key";class r${constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rK(e,t){return e.transaction([rz],t?"readwrite":"readonly").objectStore(rz)}function rH(){let e=indexedDB.open(rq,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(rz,{keyPath:rG})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(rz)?t(r):(r.close(),await new r$(indexedDB.deleteDatabase(rq)).toPromise(),t(await rH()))})})}async function rW(e,t,r){return new r$(rK(e,!0).put({[rG]:t,value:r})).toPromise()}async function rQ(e,t){let r=rK(e,!1).get(t),n=await new r$(r).toPromise();return void 0===n?null:n.value}function rY(e,t){return new r$(rK(e,!0).delete(t)).toPromise()}class rJ{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await rH()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rB()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rM._getInstance(rB()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rj(),!this.activeServiceWorker)return;this.sender=new rU(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await rH();return await rW(e,rN,"1"),await rY(e,rN),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>rW(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>rQ(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rY(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new r$(rK(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rJ.type="LOCAL";let rX=rJ;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rZ(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",B(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r0=eG("rcb"),r1=new L(3e4,6e4);class r2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=rV().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){var r;return(k((r=t).length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r),e,"argument-error"),this.shouldResolveImmediately(t)&&H(rV().grecaptcha))?Promise.resolve(rV().grecaptcha):new Promise((r,n)=>{let i=rV().setTimeout(()=>{n(T(e,"network-request-failed"))},r1.get());rV()[r0]=()=>{rV().clearTimeout(i),delete rV()[r0];let s=rV().grecaptcha;if(!s||!H(s)){n(T(e,"internal-error"));return}let a=s.render;s.render=(e,t)=>{let r=a(e,t);return this.counter++,r},this.hostLanguage=t,r(s)},ez(`${eq.recaptchaV2Script}?${(0,o.querystring)({onload:r0,render:"explicit",hl:t})}`).catch(()=>{clearTimeout(i),n(T(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=rV().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class r6{async load(e){return new e$(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r3="recaptcha",r5={theme:"light",type:"image"};class r8{constructor(e,t,r=Object.assign({},r5)){this.parameters=r,this.type=r3,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=eB(e),this.isInvisible="invisible"===this.parameters.size,k("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");let n="string"==typeof t?document.getElementById(t):t;k(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new r6:new r2,this.validateStartingState()}async verify(){this.assertNotDestroyed();let e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(r=>{let n=e=>{e&&(this.tokenChangeListeners.delete(n),r(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"==typeof e)e(t);else if("string"==typeof e){let r=rV()[e];"function"==typeof r&&r(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){let t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){let e;k(O()&&!rB(),this.auth,"internal-error"),await (e=null,new Promise(t=>{if("complete"===document.readyState){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);let t=await Y(this.auth);k(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){let t=tg._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function r7(e,t,r){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=eB(e);return new r4(await nt(n,t,(0,o.getModularInstance)(r)),e=>tB(n,e))}async function r9(e,t,r){let n=(0,o.getModularInstance)(e);return await tF(!1,n,"phone"),new r4(await nt(n.auth,t,(0,o.getModularInstance)(r)),e=>tj(n,e))}async function ne(e,t,r){let n=(0,o.getModularInstance)(e);return(0,a._isFirebaseServerApp)(n.auth.app)?Promise.reject(S(n.auth)):new r4(await nt(n.auth,t,(0,o.getModularInstance)(r)),e=>tq(n,e))}async function nt(e,t,r){var n;if(!e._getRecaptchaConfig())try{await eZ(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(i="string"==typeof t?{phoneNumber:t}:t,"session"in i){let t=i.session;if("phoneNumber"in i){k("enroll"===t.type,e,"internal-error");let n={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===eQ){k((null==r?void 0:r.type)===r3,e,"argument-error");let n=await nn(e,t,r);return rS(e,n)}return rS(e,t)},a=eX(e,n,"mfaSmsEnrollment",s,"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");let s=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;k(s,e,"missing-multi-factor-info");let a={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===eQ){k((null==r?void 0:r.type)===r3,e,"argument-error");let n=await nn(e,t,r);return rZ(e,n)}return rZ(e,t)},l=eX(e,a,"mfaSmsSignIn",o,"PHONE_PROVIDER");return(await l.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{let t={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"},n=async(e,t)=>{if(t.captchaResponse===eQ){k((null==r?void 0:r.type)===r3,e,"argument-error");let n=await nn(e,t,r);return tc(e,n)}return tc(e,t)},s=eX(e,t,"sendVerificationCode",n,"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).sessionInfo}}finally{null==r||r._reset()}}async function nr(e,t){let r=(0,o.getModularInstance)(e);if((0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));await tM(r,t)}async function nn(e,t,r){k(r.type===r3,e,"argument-error");let n=await r.verify();k("string"==typeof n,e,"argument-error");let i=Object.assign({},t);if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.providerId=ni.PROVIDER_ID,this.auth=eB(e)}verifyPhoneNumber(e,t){return nt(this.auth,e,(0,o.getModularInstance)(t))}static credential(e,t){return tg._fromVerification(e,t)}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?tg._fromTokenResponse(t,r):null}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e,t){return t?ew(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}ni.PROVIDER_ID="phone",ni.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends e3{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return tl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return tl(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function no(e){return tV(e.auth,new na(e),e.bypassAuthState)}function nl(e){let{auth:t,user:r}=e;return k(r,t,"internal-error"),tU(r,new na(e),e.bypassAuthState)}async function nu(e){let{auth:t,user:r}=e;return k(r,t,"internal-error"),tM(r,new na(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return no;case"linkViaPopup":case"linkViaRedirect":return nu;case"reauthViaPopup":case"reauthViaRedirect":return nl;default:E(this.auth,"internal-error")}}resolve(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh=new L(2e3,1e4);async function nd(e,t,r){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(T(e,"operation-not-supported-in-this-environment"));let n=eB(e);A(e,t,tw);let i=ns(n,r);return new ng(n,"signInViaPopup",t,i).executeNotNull()}async function nf(e,t,r){let n=(0,o.getModularInstance)(e);if((0,a._isFirebaseServerApp)(n.auth.app))return Promise.reject(T(n.auth,"operation-not-supported-in-this-environment"));A(n.auth,t,tw);let i=ns(n.auth,r);return new ng(n.auth,"reauthViaPopup",t,i,n).executeNotNull()}async function np(e,t,r){let n=(0,o.getModularInstance)(e);A(n.auth,t,tw);let i=ns(n.auth,r);return new ng(n.auth,"linkViaPopup",t,i,n).executeNotNull()}class ng extends nc{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,ng.currentPopupAction&&ng.currentPopupAction.cancel(),ng.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){D(1===this.filter.length,"Popup operations only handle one event");let e=rF();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(T(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(T(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ng.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(T(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nh.get())};e()}}ng.currentPopupAction=null;let nm=new Map;class ny extends nc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=nm.get(this.auth._key());if(!e){try{let t=await nv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}nm.set(this.auth._key(),e)}return this.bypassAuthState||nm.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nv(e,t){let r=nE(t),n=nb(e);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}async function nw(e,t){return nb(e)._set(nE(t),"true")}function nI(){nm.clear()}function n_(e,t){nm.set(e._key(),t)}function nb(e){return ew(e._redirectPersistence)}function nE(e){return eb("pendingRedirect",e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(e,t,r){return nx(e,t,r)}async function nx(e,t,r){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=eB(e);A(e,t,tw),await n._initializationPromise;let i=ns(n,r);return await nw(i,n),i._openRedirect(n,t,"signInViaRedirect")}function nS(e,t,r){return nA(e,t,r)}async function nA(e,t,r){let n=(0,o.getModularInstance)(e);if(A(n.auth,t,tw),(0,a._isFirebaseServerApp)(n.auth.app))return Promise.reject(S(n.auth));await n.auth._initializationPromise;let i=ns(n.auth,r);await nw(i,n.auth);let s=await nR(n);return i._openRedirect(n.auth,t,"reauthViaRedirect",s)}function nC(e,t,r){return nk(e,t,r)}async function nk(e,t,r){let n=(0,o.getModularInstance)(e);A(n.auth,t,tw),await n.auth._initializationPromise;let i=ns(n.auth,r);await tF(!1,n,t.providerId),await nw(i,n.auth);let s=await nR(n);return i._openRedirect(n.auth,t,"linkViaRedirect",s)}async function nN(e,t){return await eB(e)._initializationPromise,nD(e,t,!1)}async function nD(e,t,r=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));let n=eB(e),i=ns(n,t),s=new ny(n,i,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}async function nR(e){let t=rF(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}class nO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nL(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nL(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(T(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nP(e))}saveEventToCache(e){this.cachedEventUids.add(nP(e)),this.lastProcessedEventTime=Date.now()}}function nP(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nL({type:e,error:t}){return"unknown"===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(e,t={}){return j(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nU=/^https?/;async function nV(e){if(e.config.emulator)return;let{authorizedDomains:t}=await nM(e);for(let e of t)try{if(function(e){let t=R(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!nU.test(r))return!1;if(nF.test(e))return n===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}(e))return}catch(e){}E(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nB=new L(3e4,6e4);function nj(){let e=rV().___jsl;if(null==e?void 0:e.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let nq=null,nz=new L(5e3,15e3),nG={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function nK(e){let t=await (nq=nq||new Promise((t,r)=>{var n,i,s;function a(){nj(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nj(),r(T(e,"network-request-failed"))},timeout:nB.get()})}if(null===(i=null===(n=rV().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(s=rV().gapi)||void 0===s?void 0:s.load)a();else{let t=eG("iframefcb");return rV()[t]=()=>{gapi.load?a():r(T(e,"network-request-failed"))},ez(`${eq.gapiScript}?onload=${t}`).catch(e=>r(e))}}).catch(e=>{throw nq=null,e})),r=rV().gapi;return k(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;k(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?M(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:a.SDK_VERSION},i=n$.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${(0,o.querystring)(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nG,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=T(e,"network-request-failed"),s=rV().setTimeout(()=>{n(i)},nz.get());function a(){rV().clearTimeout(s),r(t)}t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nH={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nW{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let nQ=encodeURIComponent("fac");async function nY(e,t,r,n,i,s){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");let l={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:a.SDK_VERSION,eventId:i};if(t instanceof tw)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,o.isEmpty)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))l[r]=n;if(t instanceof tI){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}for(let t of(e.tenantId&&(l.tid=e.tenantId),Object.keys(l)))void 0===l[t]&&delete l[t];let u=await e._getAppCheckToken(),c=u?`#${nQ}=${encodeURIComponent(u)}`:"";return`${function({config:e}){return e.emulator?M(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,o.querystring)(l).slice(1)}${c}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nJ="webStorageSupport",nX=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rL,this._completeRedirectFn=nD,this._overrideRedirectResult=n_}async _openPopup(e,t,r,n){var i;D(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");let s=await nY(e,t,r,R(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),l="",u=Object.assign(Object.assign({},nH),{width:n.toString(),height:i.toString(),top:s,left:a}),c=(0,o.getUA)().toLowerCase();r&&(l=eA(c)?"_blank":r),ex(c)&&(t=t||"http://localhost",u.scrollbars="yes");let h=Object.entries(u).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=(0,o.getUA)()){var t;return eR(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==l)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",l),new nW(null);let d=window.open(t||"",l,h);k(d,e,"popup-blocked");try{d.focus()}catch(e){}return new nW(d)}(e,s,rF())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=await nY(e,t,r,R(),n),rV().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(D(r,"If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await nK(e),r=new nO(e);return t.register("authEvent",t=>(k(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nJ,{type:nJ},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[nJ];void 0!==i&&t(!!i),E(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return eP()||eS()||eR()}};class nZ{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return N("unexpected MultiFactorSessionType")}}}class n0 extends nZ{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n0(e)}_finalizeEnroll(e,t,r){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class n1{constructor(){}static assertion(e){return n0._fromCredential(e)}}n1.FACTOR_ID="phone";class n2{static assertionForEnrollment(e,t){return n6._fromSecret(e,t)}static assertionForSignIn(e,t){return n6._fromEnrollmentId(e,t)}static async generateSecret(e){var t,r;k(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let n=await j(r=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",B(r,{idToken:e.credential,totpEnrollmentInfo:{}}));return n3._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}n2.FACTOR_ID="totp";class n6 extends nZ{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new n6(t,void 0,e)}static _fromEnrollmentId(e,t){return new n6(t,e)}async _finalizeEnroll(e,t,r){return k(void 0!==this.secret,e,"argument-error"),j(e,"POST","/v2/accounts/mfaEnrollment:finalize",B(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){k(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return j(e,"POST","/v2/accounts/mfaSignIn:finalize",B(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class n3{constructor(e,t,r,n,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n3(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(n5(e)||n5(t))&&(n=!0),n&&(n5(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),n5(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function n5(e){return void 0===e||(null==e?void 0:e.length)===0}var n8="@firebase/auth",n4="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let n9=(0,o.getExperimentalSetting)("authIdTokenMaxAge")||300,ie=null,it=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>n9)return;let i=null==r?void 0:r.token;ie!==i&&(ie=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ir(e=(0,a.getApp)()){let t=(0,a._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=e0(e,{popupRedirectResolver:nX,persistence:[rX,rO,rL]}),n=(0,o.getExperimentalSetting)("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){let t=it(e.toString());rm(r,t,()=>t(r.currentUser)),rg(r,e=>t(e))}}let i=(0,o.getDefaultEmulatorHost)("auth");return i&&e1(r,`http://${i}`),r}eq={loadJS:e=>new Promise((t,r)=>{var n,i;let s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=e=>{let t=T("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},i="Browser",(0,a._registerComponent)(new(0,c.Component)("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;k(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l=new eV(r,n,s,{apiKey:a,authDomain:o,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eL(i)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ew);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,a._registerComponent)(new(0,c.Component)("auth-internal",e=>new n7(eB(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.registerVersion)(n8,n4,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(i)),(0,a.registerVersion)(n8,n4,"esm2017")},{"@firebase/app":"3eFbF","@firebase/util":"hGlpW","@firebase/logger":"2Swcv",tslib:"gBS4y","@firebase/component":"7Ufrc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gBS4y:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"__extends",()=>a),i.export(r,"__assign",()=>o),i.export(r,"__rest",()=>l),i.export(r,"__decorate",()=>u),i.export(r,"__param",()=>c),i.export(r,"__esDecorate",()=>h),i.export(r,"__runInitializers",()=>d),i.export(r,"__propKey",()=>f),i.export(r,"__setFunctionName",()=>p),i.export(r,"__metadata",()=>g),i.export(r,"__awaiter",()=>m),i.export(r,"__generator",()=>y),i.export(r,"__createBinding",()=>v),i.export(r,"__exportStar",()=>w),i.export(r,"__values",()=>I),i.export(r,"__read",()=>_),i.export(r,"__spread",()=>b),i.export(r,"__spreadArrays",()=>E),i.export(r,"__spreadArray",()=>T),i.export(r,"__await",()=>x),i.export(r,"__asyncGenerator",()=>S),i.export(r,"__asyncDelegator",()=>A),i.export(r,"__asyncValues",()=>C),i.export(r,"__makeTemplateObject",()=>k),i.export(r,"__importStar",()=>R),i.export(r,"__importDefault",()=>O),i.export(r,"__classPrivateFieldGet",()=>P),i.export(r,"__classPrivateFieldSet",()=>L),i.export(r,"__classPrivateFieldIn",()=>M),i.export(r,"__addDisposableResource",()=>F),i.export(r,"__disposeResources",()=>V),i.export(r,"__rewriteRelativeImportExtension",()=>B);var s=function(e,t){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function a(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function u(e,t,r,n){var i,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(s<3?i(a):s>3?i(t,r,a):i(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function h(e,t,r,n,i,s){function a(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var o,l=n.kind,u="getter"===l?"get":"setter"===l?"set":"value",c=!t&&e?n.static?e:e.prototype:null,h=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d=!1,f=r.length-1;f>=0;f--){var p={};for(var g in n)p[g]="access"===g?{}:n[g];for(var g in n.access)p.access[g]=n.access[g];p.addInitializer=function(e){if(d)throw TypeError("Cannot add initializers after decoration has completed");s.push(a(e||null))};var m=(0,r[f])("accessor"===l?{get:h.get,set:h.set}:h[u],p);if("accessor"===l){if(void 0===m)continue;if(null===m||"object"!=typeof m)throw TypeError("Object expected");(o=a(m.get))&&(h.get=o),(o=a(m.set))&&(h.set=o),(o=a(m.init))&&i.unshift(o)}else(o=a(m))&&("field"===l?i.unshift(o):h[u]=o)}c&&Object.defineProperty(c,n.name,h),d=!0}function d(e,t,r){for(var n=arguments.length>2,i=0;i<t.length;i++)r=n?t[i].call(e,r):t[i].call(e);return n?r:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function p(e,t,r){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function g(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function m(e,t,r,n){return new(r||(r=Promise))(function(i,s){function a(e){try{l(n.next(e))}catch(e){s(e)}}function o(e){try{l(n.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,o)}l((n=n.apply(e,t||[])).next())})}function y(e,t){var r,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var v=Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function w(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||v(t,e,r)}function I(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function _(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,s=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=s.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(_(arguments[t]));return e}function E(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var s=arguments[t],a=0,o=s.length;a<o;a++,i++)n[i]=s[a];return n}function T(e,t,r){if(r||2==arguments.length)for(var n,i=0,s=t.length;i<s;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function S(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),s=[];return n=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,u)}}),n[Symbol.asyncIterator]=function(){return this},n;function a(e,t){i[e]&&(n[e]=function(t){return new Promise(function(r,n){s.push([e,t,r,n])>1||o(e,t)})},t&&(n[e]=t(n[e])))}function o(e,t){try{var r;(r=i[e](t)).value instanceof x?Promise.resolve(r.value.v).then(l,u):c(s[0][2],r)}catch(e){c(s[0][3],e)}}function l(e){o("next",e)}function u(e){o("throw",e)}function c(e,t){e(t),s.shift(),s.length&&o(s[0][0],s[0][1])}}function A(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:x(e[n](t)),done:!1}:i?i(t):t}:i}}function C(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=I(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,i,(t=e[r](t)).done,t.value)})}}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var N=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},D=function(e){return(D=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r);return t})(e)};function R(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r=D(e),n=0;n<r.length;n++)"default"!==r[n]&&v(t,e,r[n]);return N(t,e),t}function O(e){return e&&e.__esModule?e:{default:e}}function P(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function L(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r}function M(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function F(e,t,r){if(null!=t){var n,i;if("object"!=typeof t&&"function"!=typeof t)throw TypeError("Object expected.");if(r){if(!Symbol.asyncDispose)throw TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(void 0===n){if(!Symbol.dispose)throw TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(i=n)}if("function"!=typeof n)throw TypeError("Object not disposable.");i&&(n=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var U="function"==typeof SuppressedError?SuppressedError:function(e,t,r){var n=Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function V(e){function t(t){e.error=e.hasError?new U(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var r,n=0;return function i(){for(;r=e.stack.pop();)try{if(!r.async&&1===n)return n=0,e.stack.push(r),Promise.resolve().then(i);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return n|=2,Promise.resolve(s).then(i,function(e){return t(e),i()})}else n|=1}catch(e){t(e)}if(1===n)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}function B(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,r,n,i,s){return r?t?".jsx":".js":!n||i&&s?n+i+"."+s.toLowerCase()+"js":e}):e}r.default={__extends:a,__assign:o,__rest:l,__decorate:u,__param:c,__esDecorate:h,__runInitializers:d,__propKey:f,__setFunctionName:p,__metadata:g,__awaiter:m,__generator:y,__createBinding:v,__exportStar:w,__values:I,__read:_,__spread:b,__spreadArrays:E,__spreadArray:T,__await:x,__asyncGenerator:S,__asyncDelegator:A,__asyncValues:C,__makeTemplateObject:k,__importStar:R,__importDefault:O,__classPrivateFieldGet:P,__classPrivateFieldSet:L,__classPrivateFieldIn:M,__addDisposableResource:F,__disposeResources:V,__rewriteRelativeImportExtension:B}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["6JwWS"],"6JwWS","parcelRequire94c2");
//# sourceMappingURL=myBooks.b3cdbaa1.js.map
