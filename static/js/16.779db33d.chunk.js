(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[16],{129:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(36),r=a(76),s=a(89),c=a(25),o=a(77),d=a(20),l=a(18),p=a(37),h=a(86),u=a(11),x=a(5);const m=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`,b=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,j=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`,g=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,y=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,w=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,O=r.a.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
`,v=Object(r.a)(w)`
  width: 45%;
`,T=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,E=Object(r.a)(o.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${c.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,k=(r.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,r.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 30px;
`,r.a.p`
  color: red;
  margin-top: -20px;
`),U=r.a.p`
  font-size: 20px;
`;t.default=()=>{const e=Object(u.g)(),[t,a]=Object(i.useState)(),r=Object(l.b)();return Object(x.jsxs)(n.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(x.jsx)(s.a,{}),Object(x.jsxs)(m,{children:[Object(x.jsx)(g,{children:"Sign-up"}),Object(x.jsxs)(y,{id:"signUpForm",children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(v,{type:"text",placeholder:"First Name",name:"first","data-test":"first-name",required:!0}),Object(x.jsx)(v,{type:"text",placeholder:"Last Name",name:"last","data-test":"last-name",required:!0})]}),Object(x.jsx)(w,{type:"email","data-test":"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(w,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(x.jsx)(w,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm","data-test":"confirm-password",required:!0}),Object(x.jsx)(U,{style:{marginTop:"-20px"},children:"I am a:"}),Object(x.jsxs)(f,{children:[Object(x.jsx)(O,{type:"radio",name:"accountType",value:"teacher","data-test":"teacher",required:!0}),Object(x.jsx)(U,{children:"Teacher"}),Object(x.jsx)(O,{type:"radio",name:"accountType",value:"student","data-test":"student",required:!0}),Object(x.jsx)(U,{children:"Student"})]}),Object(x.jsx)(k,{children:t}),Object(x.jsxs)(b,{children:[Object(x.jsx)(E,{"data-test":"submit",onClick:()=>{a();const t=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var i in t)if(""===t[i])return void a("Please fill out all fields");t.password===t.passwordConfirm?d.a.createUserWithEmailAndPassword(t.email,t.password).then((()=>{d.a.currentUser.updateProfile({displayName:`${t.first} ${t.last}`}).then((()=>{const a="teacher"===t.accountType?{email:d.a.currentUser.email,uid:d.a.currentUser.uid,classList:[],displayName:`${t.first} ${t.last}`,accountType:t.accountType,moduleList:[]}:{email:d.a.currentUser.email,uid:d.a.currentUser.uid,classList:[],displayName:`${t.first} ${t.last}`,accountType:t.accountType};r(Object(p.a)(a)),r(Object(h.a)(null)),d.d.doc(d.a.currentUser.uid).set(a),e.push(`/${t.accountType}/home`)}))})).catch((e=>{a(e.message)})):a("Passwords must match")},children:"SIGN-UP"}),Object(x.jsx)(T,{"data-test":"sign-up",onClick:()=>e.push("signin"),children:"Already have an account? Don\u2019t worry! Sign in here"})]})]})]})]})}},77:function(e,t,a){"use strict";var i=a(25);const n=a(76).a.div`
  background-color: ${i.a.COLOR.LIGHT_GREEN};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-weight: bold;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;t.a=n},78:function(e,t,a){"use strict";t.a=a.p+"static/media/white mtn.bb2904a1.png"},86:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(20);const i=e=>({type:"SET_CURRENT_CLASS",payload:e})},89:function(e,t,a){"use strict";a(2);var i=a(76),n=a(25),r=a(77),s=a(78),c=a(11),o=a(5);const d=i.a.header`
  display: flex;
  background-color: ${n.a.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
  height: ${n.a.HEADER_HEIGHT};
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,l=i.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,p=i.a.div`
  font-family: Playball;
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`,h=i.a.img`
  margin-left: 3%;
  width: 130px;
  :hover {
    cursor: pointer;
  }
`,u=i.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,x=Object(i.a)(r.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>{const e=Object(c.g)();return Object(o.jsxs)(d,{id:"header",children:[Object(o.jsxs)(u,{children:[Object(o.jsx)(h,{onClick:()=>e.push("/home"),src:s.a}),Object(o.jsx)(p,{onClick:()=>e.push("/home"),children:"Ancient Path Adventures"})]}),Object(o.jsx)(l,{children:Object(o.jsx)(x,{children:"HELP"})})]})}}}]);
//# sourceMappingURL=16.779db33d.chunk.js.map