import{i as D,k as P,u as N,o as V,r as u,a as d,b as v,d as p,c as o,w as s,f as a,j as b,t as B,e as E,h as j}from"./index-1f0bf087.js";import{S as z}from"./ShowImg-19be15b3.js";import{c as R,d as H,e as M}from"./http-8693272f.js";const Q={id:"userDetail"},T={key:0},$=["onClick"],O={__name:"UserDetail",setup(q){const{upQx:m}=D("qx"),_=P(),I=N();let x=_.query.userID,i=_.query.userKey;V(()=>{C(i),S(i),K(i)});const k=u("1");function L(){I.push({path:"/Home"})}let e=u({marks:[],logon:[],imglist:[],marksLod:!0,logonLod:!0,imglistLod:!0,marksColumns:[{title:"访问时间",dataIndex:"time",key:"time"},{title:"访问IP",dataIndex:"IP",key:"IP"},{title:"访问内容",dataIndex:"title",key:"title"}],logonColumns:[{title:"登录时间",dataIndex:"time",key:"time"},{title:"登录IP",dataIndex:"IP",key:"IP"},{title:"登录状态",dataIndex:"title",key:"title"}],imglistColumns:[{title:"图片名",dataIndex:"name",key:"name"},{title:"图片大小",dataIndex:"size",key:"size"},{title:"操作",dataIndex:"show",key:"show"}]});const y=u(""),r=u(!1),h=l=>{y.value=l,r.value=!0};function C(l){R(l).then(t=>{t.data.code===1?(e.value.marks=t.data.data,e.value.marksLod=!1):m()})}function S(l){H(l).then(t=>{t.data.code===1?(e.value.logon=t.data.data,e.value.logonLod=!1):m()})}function K(l){M(l).then(t=>{t.data.code===1?(e.value.imglist=t.data.data,e.value.imglistLod=!1):m()})}return(l,t)=>{const c=d("a-table"),g=d("a-tab-pane"),f=d("a-button"),w=d("a-tabs");return v(),p("div",Q,[o(w,{activeKey:k.value,"onUpdate:activeKey":t[0]||(t[0]=n=>k.value=n)},{leftExtra:s(()=>[o(f,{type:"text",class:"tabs-extra-demo-button"},{default:s(()=>[b(B(a(x)),1)]),_:1})]),rightExtra:s(()=>[o(f,{class:"tabs-extra-demo-button",onClick:L},{default:s(()=>[b("返回")]),_:1})]),default:s(()=>[o(g,{key:"1",tab:"浏览记录"},{default:s(()=>[o(c,{dataSource:a(e).marks,columns:a(e).marksColumns,loading:a(e).marksLod},null,8,["dataSource","columns","loading"])]),_:1}),o(g,{key:"2",tab:"登录记录"},{default:s(()=>[o(c,{dataSource:a(e).logon,columns:a(e).logonColumns,loading:a(e).logonLod},null,8,["dataSource","columns","loading"])]),_:1}),o(g,{key:"3",tab:"图片"},{default:s(()=>[o(c,{dataSource:a(e).imglist,columns:a(e).imglistColumns,loading:a(e).imglistLod},{bodyCell:s(({column:n,record:U})=>[n.key==="show"?(v(),p("span",T,[E("a",{onClick:A=>h(U.key)},"查看图片",8,$)])):j("",!0)]),_:1},8,["dataSource","columns","loading"])]),_:1})]),_:1},8,["activeKey"]),o(z,{visible:r.value,"onUpdate:visible":t[1]||(t[1]=n=>r.value=n),imgkey:y.value,userKey:a(i)},null,8,["visible","imgkey","userKey"])])}}};export{O as default};