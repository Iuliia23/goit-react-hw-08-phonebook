"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[647],{3647:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,a,i,o,c=e(9439),s=e(2791),l=e(9434),d=e(5162),x=e(5206),u=e(3736),f=e(7426),h=e(4554),m=e(890),v=function(n){return n.contacts.contacts},j=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},Z=function(n){return n.filter},g=e(184),y=function(){var n=(0,s.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,s.useState)(""),i=(0,c.Z)(a,2),o=i[0],j=i[1],Z=(0,l.v9)(v),y=(0,l.v9)(p),b=function(n){var t=n.target,e=t.name,a=t.value;"name"===e?r(a):j(a)},C=(0,l.I0)(),w=function(){r(""),j("")};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h.Z,{sx:{marginTop:"1rem",display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"400px",margin:"0 auto"},children:[y&&(0,g.jsx)(m.Z,{variant:"body2",color:"error",gutterBottom:!0,children:"Failed to load contacts. Please try again later."}),(0,g.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""!==e.trim()&&""!==o.trim()){if(Z.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return void x.Am.error("".concat(e," is already in contacts"));if(y)return void x.Am.error("Failed to load contacts. Please try again later.");C((0,d.uK)({name:e,number:o})),x.Am.success("".concat(e," added to contacts.")),w()}},style:{width:"100%"},children:[(0,g.jsx)(f.Z,{type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:e,onChange:b,required:!0,fullWidth:!0,margin:"normal"}),(0,g.jsx)(f.Z,{type:"tel",name:"number",label:"Number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",value:o,onChange:b,required:!0,fullWidth:!0,margin:"normal"}),(0,g.jsx)(u.Z,{type:"submit",variant:"contained",color:"error",sx:{width:"40%"},children:"Add Contact"})]})]})})},b=e(3457),C=e(168),w=e(6487),k=w.ZP.div(r||(r=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),z=w.ZP.div(a||(a=(0,C.Z)(["\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n"]))),A=w.ZP.div(i||(i=(0,C.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n"]))),L=(w.ZP.button(o||(o=(0,C.Z)(["\n  margin-left: 20px;\n"]))),(0,b.Z)(A)({justifyContent:"flex-end"})),I=(0,b.Z)(u.Z)({marginLeft:"10px"}),P=function(n){var t=n.contact,e=n.onCancel,r=(0,l.I0)();return(0,g.jsx)(k,{children:(0,g.jsxs)(z,{children:[(0,g.jsx)(m.Z,{variant:"body1",children:"Are you sure you want to delete this contact?"}),(0,g.jsxs)(L,{children:[(0,g.jsx)(I,{variant:"contained",color:"error",onClick:function(){r((0,d.GK)(t.id)),d.GK&&x.Am.success("".concat(t.name," deleted")),e()},children:"Delete"}),(0,g.jsx)(I,{variant:"contained",onClick:e,children:"Cancel"})]})]})})},_=e(501),S=e(2716),D=e(7247),B=function(n){var t=n.contact,e=(0,s.useState)(!1),r=(0,c.Z)(e,2),a=r[0],i=r[1];return(0,g.jsxs)(h.Z,{sx:{marginBottom:"20px",display:"flex"},children:[(0,g.jsxs)(h.Z,{sx:{flex:"1",display:"flex",alignItems:"center"},children:[(0,g.jsx)(_.Z,{sx:{marginRight:"20px"}}),(0,g.jsx)(m.Z,{variant:"h6",children:t.name})]}),(0,g.jsxs)(h.Z,{sx:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,g.jsx)(S.Z,{sx:{marginRight:"20px"}}),(0,g.jsx)(m.Z,{variant:"body1",children:t.number})]}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(u.Z,{variant:"contained",color:"error",startIcon:(0,g.jsx)(D.Z,{}),onClick:function(){i(!0)},style:{position:"relative"},children:"Delete"})}),a&&(0,g.jsx)(P,{contact:t,onCancel:function(){i(!1)}})]})},F=e(7225),M=e(3239),W=e(5403),K=function(){var n=(0,l.I0)(),t=(0,l.v9)(v),e=(0,l.v9)(Z),r=(0,l.v9)(j);if((0,s.useEffect)((function(){n((0,d.yF)())}),[n]),!t)return(0,g.jsx)(M.Z,{});var a=t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,g.jsxs)(h.Z,{sx:{padding:"20px"},children:[(0,g.jsxs)(m.Z,{variant:"h5",sx:{marginBottom:"20px"},children:[(0,g.jsx)(W.Z,{sx:{marginRight:"20px"}}),"Contact List"]}),(0,g.jsx)(F.Z,{children:a.map((function(n){return(0,g.jsx)(B,{contact:n},n.id)}))}),r&&(0,g.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"center",marginTop:"20px"},children:[(0,g.jsx)(M.Z,{size:20}),(0,g.jsx)(m.Z,{variant:"body2",sx:{marginLeft:"20px"},children:"Updating list..."})]})]})},R=e(7574),T=function(){var n=(0,l.I0)();return(0,g.jsxs)(h.Z,{sx:{marginBottom:"1rem",maxWidth:"300px"},children:[(0,g.jsx)(m.Z,{variant:"body1",gutterBottom:!0,children:"Find contacts by name:"}),(0,g.jsx)(f.Z,{type:"text",onChange:function(t){var e=t.target.value;n((0,R.Tv)(e))},placeholder:"search...",margin:"normal"})]})},V=function(){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:[(0,g.jsx)("section",{children:(0,g.jsx)(y,{})}),(0,g.jsx)("section",{children:(0,g.jsx)(T,{})}),(0,g.jsx)("section",{children:(0,g.jsx)(K,{})})]})}},7247:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},501:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=o},2716:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");t.Z=o},5403:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=o}}]);
//# sourceMappingURL=647.15b15619.chunk.js.map