(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e){e.exports=JSON.parse('{"education":[{"course":"Bacharelado em Ci\xeancia da Computa\xe7\xe3o","institution":{"name":"Universidade Federal Rural de Pernambuco"},"location":{"city":"Recife","country":"Brasil","state":"Pernambuco"},"start_date":"2016-08-09"}],"header":{"address":"Recife, PE","birthday":"1998-05-28","email":"christianlira98@gmail.com","github":"christianlira98","name":"Christian Soares de Lira","phone":"+55 81 98482-0387"},"language":[{"language":"Portugu\xeas","level":"Nativo"},{"language":"Ingl\xeas","level":"B1"}],"skill":[{"skill_name":"Java, Javascript, C, SQL","skill_type":"Linguagens"},{"skill_name":"Node JS, CSS, HTML, React JS","skill_type":"Estudo em andamento"}],"work":[{"description":"Estagi\xe1rio em um projeto que consistiu no apoio ao desenvolvimento de uma ferramenta de planejamento de redes \xf3pticas. No qual era utilizada a linguagem Orientada a Objetos Java, para o desenvolvimento dos requisitos funcionais no backend. Al\xe9m disso, ocasionalmente era realizada a atualiza\xe7\xe3o e/ou cria\xe7\xe3o de novas entidades na base de dados relacional SQL.","end_date":"2019-12-27","institution":{"name":"Padtec - FADE/UFPE"},"location":{"city":"Recife","country":"Brasil","state":"Pernambuco"},"role":"Estagi\xe1rio em Programa\xe7\xe3o","start_date":"2019-02-18"}]}')},39:function(e,a,t){e.exports=t.p+"static/media/self.5b2a4f24.jpg"},41:function(e,a,t){e.exports=t(82)},46:function(e,a,t){},47:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),l=t.n(r),c=t(11),i=t(14),s=t(33),o=t.n(s),u=t(3),m=t(5),d=t(4),h=t(6),p=t(83),E=t(84),f=t(85),b=(t(46),function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).handleUrlChange=function(){var e=window.location.pathname;document.querySelectorAll(".header-nav a").forEach((function(a){void 0!==a&&void 0!==a.getAttribute("href")&&(a.getAttribute("href")===e?a.style.color="#2077be":a.style.color="#000000")}))},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(){this.handleUrlChange()}},{key:"componentDidMount",value:function(){this.handleUrlChange()}},{key:"render",value:function(){return l.a.createElement(p.a,{fluid:!0},l.a.cloneElement(this.props.header,{hideSideBar:this.props.hideSideBar}),l.a.createElement(E.a,{className:"main-content"},l.a.createElement(f.a,null,l.a.createElement("main",null,this.props.main))),l.a.createElement(E.a,{className:"about-me"},l.a.createElement(f.a,null,this.props.about)))}}]),a}(r.Component)),v=(t(47),function(e){function a(e){var t,r=this;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleOnClick=function(){null==t.state.sideMenu?t.setState({sideMenu:l.a.createElement(r.props.sideMenu,null)}):t.setState({sideMenu:null})},t.state={hideSideBar:e.hideSideBar,sideMenu:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(){this.state.hideSideBar&&this.setState({sideMenu:null})}},{key:"render",value:function(){return l.a.createElement(E.a,{className:"main-header"},l.a.createElement(f.a,{sm:12,md:6},l.a.createElement("div",{className:"pseudo-logo"},l.a.createElement(c.b,{to:"/"},"Christian Lira."),l.a.createElement("button",{onClick:this.handleOnClick,className:"menu-toggle"},l.a.createElement("i",{className:"fa fa-lg fa-bars"}))),l.a.createElement("aside",{className:"aside-menu"},this.state.sideMenu)),l.a.createElement(f.a,{md:6},l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/publications"},"Publications")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/cv"},"CV"))))))}}]),a}(r.Component)),g=(t(53),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).handleUrlChange=function(){var e=window.location.pathname;document.querySelectorAll(".main-nav a").forEach((function(a){void 0!==a&&void 0!==a.getAttribute("href")&&a.getAttribute("href")===e&&(a.style.color="#2077be")}))},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.handleUrlChange()}},{key:"render",value:function(){return l.a.createElement("span",null,l.a.createElement("nav",{className:"main-nav"},l.a.createElement("div",null,l.a.createElement(c.b,{to:"/",className:"link"},"Home"),l.a.createElement(c.b,{to:"/publications",className:"link"},"Publications"),l.a.createElement(c.b,{to:"/cv",className:"link"},"CV"))))}}]),a}(r.Component)),k=(t(54),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"home-main"},l.a.createElement("article",{className:"article"},l.a.createElement("section",{className:"animation"},l.a.createElement("section",{className:"sec-hello"},l.a.createElement("p",{id:"hello"},"Hello World! My name is")),l.a.createElement("section",{className:"sec-nome"},l.a.createElement("p",{id:"nome"},l.a.createElement("mark",null,"Christian Lira"))),l.a.createElement("section",{className:"sec-descricao"},l.a.createElement("p",{id:"descricao"},"I am a ",l.a.createElement("mark",null,"Software Developer"))),l.a.createElement("div",{className:"social-medias"},l.a.createElement("a",{href:"https://www.facebook.com/christian.lira.798",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook fa-2x","aria-hidden":"true"})),l.a.createElement("a",{href:"mailto: christianlira98@gmail.com",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-envelope-o fa-2x","aria-hidden":"true"})),l.a.createElement("a",{href:"https://github.com/christianlira98",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-github fa-2x","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/christianlira98",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin fa-2x","aria-hidden":"true"}))),l.a.createElement("span",{id:"button-radius"},l.a.createElement("a",{href:"https://www.github.com/christianlira98",rel:"noopener noreferrer",target:"_blank"},"My github")))))}}]),a}(r.Component)),j=(t(55),function(e){function a(){return Object(n.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("article",{className:"about-article"},l.a.createElement("img",{src:"https://images.vexels.com/media/users/3/138177/isolated/preview/2bdc342341743e8e460582eb7891c2bb---cone-de-transporte-pessoa-by-vexels.png",alt:"me"}),l.a.createElement("aside",{className:"about-content"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"My name is Christian Lira, I am in my college fourth year taking a computer science course at UFRPE - Brazil. During this time in the IT world I managed to discover the wonderful feeling of being a developer. Because of this, i've decided to create this web site, a portal where people can get to know me a little better.")))}}]),a}(r.Component)),O=(t(56),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={sideMenu:l.a.createElement(e.sideMenu,null)},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"publication-main-div"},this.state.sideMenu,l.a.createElement("aside",{className:"publication-content"},l.a.createElement("h3",null,l.a.createElement("span",null,l.a.createElement("mark",null,"Publi"),"cations")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("h4",null,l.a.createElement("strong",null,"Redes Neurais Artificiais para Predi\xe7\xe3o de Toler\xe2ncia a Falhas em Redes \xd3pticas")),l.a.createElement("p",null,"Publicado em ",l.a.createElement("i",null,"Anais do XVI Encontro Nacional de Intelig\xeancia Artificial e Computacional,")," 2020"),l.a.createElement("p",null,"Lira, C., Barros, J., Ara\xfajo, P., & Ara\xfajo, D. Redes Neurais Artificiais para Predi\xe7\xe3o de Toler\xe2ncia a Falhas em Redes \xd3pticas. ",l.a.createElement("br",null),"DOI: ",l.a.createElement("a",{href:"https://doi.org/10.5753/eniac.2019.9299"},"https://doi.org/10.5753/eniac.2019.9299"),".")),l.a.createElement("hr",null))))}}]),a}(r.Component)),N=t(12),y=t(18),w=t.n(y),S=t(22),_=t(37),C=t.n(_).a.create({baseURL:"http://localhost:3003"}),M=t(38),x=(t(75),function(e){function a(e){var t,r=this;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).generateSizeGrid=function(e){var a=[];a.push("150px");for(var t=0;t<e-1;t++)a.push("auto");return a.join(" ")},t.getResume=Object(S.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/resume");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),t.componentDidMount=Object(S.a)(w.a.mark((function e(){var a,n,c,i,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=0,n=0,c=Object.entries(M);n<c.length;n++)i=Object(N.a)(c[n],2),s=i[0],o=i[1],a++,"header"===s?t.setState({cvheader:l.a.createElement(r.props.cvheader,o)}):"work"===s?t.setState({cvexperience:l.a.createElement(r.props.cvexperience,o)}):"education"===s?t.setState({cveducation:l.a.createElement(r.props.cveducation,o)}):"language"===s?t.setState({cvlanguage:l.a.createElement(r.props.cvlanguage,o)}):"skill"===s&&t.setState({cvskills:l.a.createElement(r.props.cvskills,o)});document.querySelector(".cv-grid").style["grid-template-rows"]=t.generateSizeGrid(a);case 4:case"end":return e.stop()}}),e)}))),t.state={sideMenu:l.a.createElement(e.sideMenu,null),cvheader:null,cvexperience:null,cveducation:null,cvlanguage:null,cvskills:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"cv-main"},this.state.sideMenu,l.a.createElement("div",{className:"cv-content"},l.a.createElement("div",{className:"cv-grid"},this.state.cvheader,this.state.cvexperience,this.state.cveducation,this.state.cvlanguage,this.state.cvskills)))}}]),a}(r.Component)),D=t(39),P=t.n(D),A=(t(76),function(e){function a(){return Object(n.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("aside",{className:"publication-sidemenu"},l.a.createElement("div",{className:"publication-photo"},l.a.createElement("img",{src:P.a,alt:"christian lira"})),l.a.createElement("div",{className:"my-content"},l.a.createElement("h1",null,"Christian Lira"),l.a.createElement("p",null,"Computer Science Student at UFRPE - Brazil"),l.a.createElement("div",{className:"location"},l.a.createElement("i",{className:"fa fa-fw fa-map-marker","aria-hidden":"true"}," Recife, Brazil"))),l.a.createElement("div",{className:"social-medias"},l.a.createElement("a",{href:"https://www.facebook.com/christian.lira.798",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}," Facebook")),l.a.createElement("a",{href:"mailto: christianlira98@gmail.com",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}," E-mail")),l.a.createElement("a",{href:"https://github.com/christianlira98",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}," Github")),l.a.createElement("a",{href:"https://www.linkedin.com/in/christianlira98",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}," Linkedin"))))}}]),a}(r.Component)),B=(t(77),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).state={address:e.address,birthday:e.birthday,email:e.email,github:e.github,name:e.name.split(" "),phone:e.phone},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"cv-header"},l.a.createElement("h1",null,this.state.name.slice(0,1),l.a.createElement("mark",null,this.state.name.slice(1).join(" "))),l.a.createElement("h5",null," ",l.a.createElement("i",null,this.state.address," ")," "),l.a.createElement("div",{className:"contact"},l.a.createElement("a",null,l.a.createElement("i",{"border-right":"",className:"fa fa-mobile","aria-hidden":"true"}," ","".concat(this.state.phone))),l.a.createElement("a",{href:"mailto: ".concat(this.state.email),rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{"border-right":"",className:"fa fa-envelope","aria-hidden":"true"}," ","".concat(this.state.email))),l.a.createElement("a",{href:"https://github.com/".concat(this.state.github),rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}," ","".concat(this.state.github)))))}}]),a}(r.Component)),R=function(e){var a=new Intl.DateTimeFormat("en-us",{month:"short"}),t={startDate:null,endDate:null};if(void 0!==e.start_date){var n=new Date(e.start_date),r=a.format(n);t.startDate="".concat(n.getFullYear(),", ").concat(r)}if(void 0!==e.end_date){var l=new Date(e.end_date),c=a.format(l);t.endDate="".concat(l.getFullYear(),", ").concat(c)}else t.endDate="Present";return t},L=(t(78),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).createWorks=function(){for(var e=[],a=0,n=Object.entries(t.props);a<n.length;a++){var r=Object(N.a)(n[a],2),c=r[0],i=r[1],s=R(i),o=l.a.createElement("li",{key:"".concat(c)},l.a.createElement("span",{className:"institution"},l.a.createElement("h4",null,i.institution.name),l.a.createElement("i",null," ",l.a.createElement("h5",null,"".concat(i.location.city,", ").concat(i.location.country))," ")),l.a.createElement("span",{className:"role"},l.a.createElement("h4",null,i.role),l.a.createElement("h5",null,l.a.createElement("i",null,"".concat(s.startDate," - ").concat(s.endDate)))),l.a.createElement("span",{className:"description"},l.a.createElement("p",null,i.description)));e.push(o)}t.setState({works:e})},t.state={works:[]},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.createWorks()}},{key:"render",value:function(){return l.a.createElement("div",{className:"experience"},l.a.createElement("h2",null,l.a.createElement("span",null,l.a.createElement("mark",null,"Exp"),"erience")),l.a.createElement("ul",{className:"experience-entries entries"},this.state.works))}}]),a}(r.Component)),F=(t(79),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).createEducation=function(){for(var e=[],a=0,n=Object.entries(t.props);a<n.length;a++){var r=Object(N.a)(n[a],2),c=r[0],i=r[1],s=R(i),o=l.a.createElement("li",{key:"".concat(c)},l.a.createElement("span",{className:"institution"},l.a.createElement("h4",null,i.institution.name),l.a.createElement("i",null," ",l.a.createElement("h5",null,"".concat(i.location.city,", ").concat(i.location.country))," ")),l.a.createElement("span",{className:"course"},l.a.createElement("h4",null,i.course),l.a.createElement("h5",null,l.a.createElement("i",null,"".concat(s.startDate," - ").concat(s.endDate)))));e.push(o)}t.setState({education:e})},t.state={education:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.createEducation()}},{key:"render",value:function(){return l.a.createElement("div",{className:"education"},l.a.createElement("h2",null,l.a.createElement("span",null,l.a.createElement("mark",null,"Edu"),"cation")),l.a.createElement("ul",{className:"education-entries entries"},this.state.education))}}]),a}(r.Component)),U=(t(80),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).createLanguage=function(){for(var e=[],a=[],n=0,r=Object.entries(t.props);n<r.length;n++){var c=Object(N.a)(r[n],2),i=c[0],s=c[1],o=l.a.createElement("h4",{key:"".concat(i)},s.language),u=l.a.createElement("h5",{key:"".concat(i)},"".concat(s.level));e.push(o),a.push(u)}t.setState({language_value:e,language_level:a})},t.state={language_value:null,language_level:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.createLanguage()}},{key:"render",value:function(){return l.a.createElement("div",{className:"language"},l.a.createElement("h2",null,l.a.createElement("span",null,l.a.createElement("mark",null,"Lan"),"guages")),l.a.createElement("ul",{className:"language-entries entries"},l.a.createElement("li",null,l.a.createElement("span",{className:"language-content"},l.a.createElement("span",{className:"language-value"},this.state.language_value),l.a.createElement("span",{className:"language-level"},this.state.language_level)))))}}]),a}(r.Component)),I=(t(81),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).createSkills=function(){for(var e=[],a=[],n=0,r=Object.entries(t.props);n<r.length;n++){var c=Object(N.a)(r[n],2),i=c[0],s=c[1],o=l.a.createElement("h4",{key:"".concat(i)},s.skill_name),u=l.a.createElement("h5",{key:"".concat(i)},"".concat(s.skill_type));e.push(o),a.push(u)}t.setState({skill_names:e,skill_types:a})},t.state={skill_names:null,skill_types:null},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.createSkills()}},{key:"render",value:function(){return l.a.createElement("div",{className:"skills"},l.a.createElement("h2",null,l.a.createElement("span",null,l.a.createElement("mark",null,"Ski"),"lls")),l.a.createElement("ul",{className:"skills-entries entries"},l.a.createElement("li",null,l.a.createElement("span",{className:"skills-content"},l.a.createElement("span",{className:"skills-names"},this.state.skill_types),l.a.createElement("span",{className:"skills-types"},this.state.skill_names)))))}}]),a}(r.Component));new function e(a){var t=this;Object(n.a)(this,e),this._render=function(){o.a.render(l.a.createElement(c.a,{basename:"/my-website"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,render:function(e){return l.a.createElement(b,Object.assign({},e,{hideSideBar:!0,header:t.state.header,main:t.state.home,about:t.state.about}))}}),l.a.createElement(i.a,{path:"/publications",exact:!0,render:function(e){return l.a.createElement(b,Object.assign({},e,{hideSideBar:!0,header:t.state.header,main:t.state.publication}))}}),l.a.createElement(i.a,{path:"/cv",exact:!0,render:function(e){return l.a.createElement(b,Object.assign({},e,{hideSideBar:!0,header:t.state.header,main:t.state.cv}))}}))),document.getElementById("root"))},this.state={header:a.header,home:a.home,about:a.about,publication:a.publication,cv:a.cv}}({header:l.a.createElement(v,{sideMenu:g}),home:l.a.createElement(k,null),about:l.a.createElement(j,null),publication:l.a.createElement(O,{sideMenu:A}),cv:l.a.createElement(x,{sideMenu:A,cvheader:B,cvexperience:L,cveducation:F,cvlanguage:U,cvskills:I})})._render()}},[[41,1,2]]]);
//# sourceMappingURL=main.6146c60c.chunk.js.map