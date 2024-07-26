import{d as o,r as u,j as t,P as s,c as S,a as N,u as I,b as l,f as T,H as A,T as D,S as P,e as $,g as V,s as E}from"./index-iYXqHGrO.js";const B="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let g=(e=21)=>{let n="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)n+=B[r[e]&63];return n};const H=o.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,C=o.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
`,W=o.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 20%;
  font-weight: 600;
  @media (min-width: 768px) {
    padding: 12px;
  }
  &:hover {
    background-color: #0056b3;
  }
`,j=o.label`
  font-weight: 500;
`;function w({onSubmit:e}){const[n,r]=u.useState(""),[p,h]=u.useState(""),[c]=u.useState(g()),[m]=u.useState(g()),x=d=>{const{name:i,value:a}=d.currentTarget;switch(i){case"name":if(!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\-; ]{0,30}$/.test(a)){console.log("Invalid name format!");return}r(a);break;case"number":if(!/^[0-9 +()-]{0,15}$/.test(a)){console.log("Invalid phone number format!");return}h(a);break}},b=d=>{d.preventDefault(),e(n,p),r(""),h("")};return t.jsxs(H,{onSubmit:b,children:[t.jsx(j,{htmlFor:c,children:"Name"}),t.jsx(C,{id:c,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:x}),t.jsx(j,{htmlFor:m,children:"Phone number"}),t.jsx(C,{id:m,type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:x}),t.jsx(W,{type:"submit",children:"Add contact"})]})}w.propTypes={onSubmit:s.func.isRequired};const J=o.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
`,M=o.span`
  font-weight: bold;
  color: #333;
  margin-right: 0.25rem;
  width: 100px;

  @media (min-width: 768px) {
  width: 200px;});
`,O=o.span`
  color: #555;
`,U=o.button`
    padding: 4px 6px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 768px) {
      padding: 5px 10px;
    }

    &:hover {
      background-color: darkred;
    }
  `,Z=o.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=o.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 20px;
  }
`,y=({contact:e,deleteContact:n})=>t.jsx(J,{children:t.jsxs(Z,{children:[t.jsxs(z,{children:[t.jsx(M,{children:e.name}),t.jsxs(O,{children:[" ",e.number]})]}),t.jsx(U,{onClick:()=>n(e.id),children:"Delete contact"})]},e.id)});y.propTypes={contact:s.shape({name:s.string.isRequired,number:s.string.isRequired,id:s.string.isRequired}).isRequired,deleteContact:s.func.isRequired};const G=o.ul`
  list-style: none;
  padding: 0;
`,k=({contacts:e,deleteContact:n})=>t.jsx(t.Fragment,{children:t.jsx(G,{children:e.map(r=>t.jsx(y,{contact:r,deleteContact:n},r.id))})});k.propTypes={contacts:s.arrayOf(s.shape({id:s.string.isRequired,name:s.string.isRequired,number:s.string.isRequired})).isRequired,deleteContact:s.func.isRequired};const K=k,Q=o.div`
  margin: 20px 0;
`,X=o.input`
  width: 40%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`,Y=o.label`
  font-weight: 500;
  margin-right: 0.5rem;
  width: 60px;
`,v=({value:e,onChange:n})=>t.jsxs(Q,{children:[t.jsx(Y,{children:"Find contact: "}),t.jsx(X,{type:"text",name:"filter",value:e,onChange:n})]});v.propTypes={value:s.string.isRequired,onChange:s.func.isRequired};const _=v,q=e=>e.phonebook.contacts,ee=e=>e.phonebook.isLoading,R=e=>e.phonebook.filter,te=e=>e.phonebook.error,ne=S([q,R],(e,n)=>n?e.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())):e);function oe(){const e=N(),{token:n}=I(),r=l(q),p=l(R),h=l(ee),c=l(te),m=l(ne);u.useEffect(()=>{n&&e(T())},[n,e]);const x=(i,a)=>{const f={name:i,number:a,id:g()};r.some(F=>F.name.toLowerCase()===i.toLowerCase())?alert(`${i} is already in contacts`):e($(f))},b=i=>{e(V(i))},d=i=>{e(E(i.target.value))};return t.jsxs("div",{children:[t.jsx(A,{children:t.jsx("title",{children:"Contacts"})}),t.jsx(D,{children:"Phonebook"}),t.jsx(w,{onSubmit:x}),t.jsx(P,{children:"Contacts"}),t.jsx(_,{value:p,onChange:d}),t.jsx(K,{contacts:m,deleteContact:b}),h&&t.jsx("p",{children:"Loading..."}),c&&t.jsx("p",{children:c})]})}export{oe as default};
