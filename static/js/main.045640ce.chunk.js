(this.webpackJsonpreact_act1=this.webpackJsonpreact_act1||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(7),r=n.n(c),l=(n(14),n(1)),o=n(2),s=n(4),u=n(3),d=n(5),h=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),this.props.loadContent()}.bind(this)},i.a.createElement("h1",null,this.props.title)))}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=[],t=this.props.data,n=0;n<t.length;n++)e.push(i.a.createElement("li",{key:t[n].id},i.a.createElement("a",{href:"/content/"+t[n].id,"data-id":t[n].id,onClick:function(e){e.preventDefault(),this.props.readContent(e.target.dataset.id)}.bind(this)},t[n].title)));return i.a.createElement("nav",null,i.a.createElement("ul",null,e))}}]),t}(a.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/create",onClick:function(e){e.preventDefault(),this.props.controlMode("create")}.bind(this)},"create")),i.a.createElement("li",null,i.a.createElement("a",{href:"/update",onClick:function(e){e.preventDefault(),this.props.controlMode("update")}.bind(this)},"update")),i.a.createElement("li",null,i.a.createElement("input",{type:"button",value:"delete",onClick:function(e){e.preventDefault(),this.props.deleteContent()}.bind(this)})))}}]),t}(a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,this.props.title),this.props.desc)}}]),t}(a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("form",{access:"create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.desc.value)}.bind(this)},i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",placeholder:"title"})),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"desc",placeholder:"description"})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),j=n(8),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).propsHandler=function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))},n.state={id:n.props.data.id,title:n.props.data.title,desc:n.props.data.desc},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("form",{access:"create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc)}.bind(this)},i.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",value:this.state.title,placeholder:"title",onChange:this.propsHandler.bind(this)})),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"desc",value:this.state.desc,placeholder:"description",onChange:this.propsHandler.bind(this)})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),v=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).getReadContent=function(){for(var e=null,t=0;t<this.state.object.length;t++)if(this.state.select_id===this.state.object[t].id){e=this.state.object[t];break}return e},n.onChangeMode=function(){var e,t,n,a=null,c=this.state.main,r=this.state.object,l=this.state.mode;return"home"===l?(e=c.title,t=c.desc,n=i.a.createElement(b,{title:e,desc:t})):"read"===l?(a=this.getReadContent(),n=i.a.createElement(b,{title:a.title,desc:a.desc})):"create"===l?n=i.a.createElement(f,{onSubmit:function(e,t){var n=Array.from(r);this.last_object_id++,n.push({id:this.last_object_id,title:e,desc:t}),this.setState({object:n,mode:"read",select_id:this.last_object_id})}.bind(this)}):"update"===l&&(a=this.getReadContent(),n=i.a.createElement(E,{data:a,onSubmit:function(e,t,n){for(var a=Array.from(r),i=0;i<a.length;i++)if(a[i].id===e){a[i]={id:e,title:t,desc:n};break}this.setState({object:a,mode:"read"})}.bind(this)})),n},n.last_object_id=3,n.state={mode:"home",select_id:1,main:{title:"WEBn-React",desc:"It`s WEBn - React section :)"},object:[{id:1,title:"HTML",desc:"HyperText Markup Language"},{id:2,title:"CSS",desc:"Casecade Style Sheet"},{id:3,title:"Javascript",desc:"More Interactive"}]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{loadContent:function(){this.setState({mode:"home"})}.bind(this),title:this.state.main.title}),i.a.createElement(p,{data:this.state.object,readContent:function(e){this.setState({mode:"read",select_id:Number(e)})}.bind(this)}),i.a.createElement(m,{controlMode:function(e){this.setState({mode:e})}.bind(this),deleteContent:function(){if(window.confirm("Really??")){for(var e=this.getReadContent(),t=[],n=0,a=0;a<this.state.object.length;a++)e.id!==this.state.object[a].id&&(t[n]=this.state.object[a],n++);this.setState({mode:"home",object:t}),alert("Content Delete success.")}else alert("Delete cancel.")}.bind(this)}),this.onChangeMode())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.045640ce.chunk.js.map