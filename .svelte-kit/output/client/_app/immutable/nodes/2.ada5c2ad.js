import{S as ye,i as be,s as we,k as m,a as u,q as ge,l as g,m as h,c as $,r as ue,h as f,n as a,J as ke,b as ve,D as r,u as De,H as Q,y as k,z as C,A as D,g as z,d as V,B as j,p as ze,K as Le,o as He}from"../chunks/index.8528c4bc.js";function Be(i){let e,t,n,s,l,o,w,d,v,c,x,_,p;return{c(){e=m("div"),t=m("div"),n=m("img"),l=u(),o=m("div"),w=m("hr"),d=u(),v=m("p"),c=ge(i[1]),x=u(),_=m("p"),p=ge(i[2]),this.h()},l(E){e=g(E,"DIV",{class:!0});var S=h(e);t=g(S,"DIV",{class:!0});var L=h(t);n=g(L,"IMG",{class:!0,src:!0,alt:!0}),l=$(L),o=g(L,"DIV",{class:!0});var b=h(o);w=g(b,"HR",{class:!0}),d=$(b),v=g(b,"P",{class:!0});var N=h(v);c=ue(N,i[1]),N.forEach(f),x=$(b),_=g(b,"P",{class:!0});var y=h(_);p=ue(y,i[2]),y.forEach(f),b.forEach(f),L.forEach(f),S.forEach(f),this.h()},h(){a(n,"class","h-[100%] mt-0 top-0 w-[100%] object-cover rounded-t-lg transition-all duration-75"),ke(n.src,s="src/img/logos/"+i[0])||a(n,"src",s),a(n,"alt",""),a(w,"class","my-[2rem] z-[100] w-[30rem] h-[1px] bg-gradient-to-r from-white via-black to-white border-0 rounded-lg"),a(v,"class","text-4xl"),a(_,"class","text-xl mx-5 text-justify"),a(o,"class","w-[100%] h-[100%] flex flex-col items-center"),a(t,"class","w-[100%] h-[100%] hover:first:h-[20rem] transition-all duration-300 "),a(e,"class","bg-white text-black mt-[10rem] snap-center w-[40rem] flex-shrink-0 h-[40rem] border-none rounded-lg flex flex-col items-center text-8xl gap-2 overflow-clip")},m(E,S){ve(E,e,S),r(e,t),r(t,n),r(t,l),r(t,o),r(o,w),r(o,d),r(o,v),r(v,c),r(o,x),r(o,_),r(_,p)},p(E,[S]){S&1&&!ke(n.src,s="src/img/logos/"+E[0])&&a(n,"src",s),S&2&&De(c,E[1]),S&4&&De(p,E[2])},i:Q,o:Q,d(E){E&&f(e)}}}function Te(i,e,t){let{image:n}=e,{title:s}=e,{description:l}=e;return i.$$set=o=>{"image"in o&&t(0,n=o.image),"title"in o&&t(1,s=o.title),"description"in o&&t(2,l=o.description)},[n,s,l]}class Se extends ye{constructor(e){super(),be(this,e,Te,Be,we,{image:0,title:1,description:2})}}const Ne=["#3d97a8","#69a2bf","#b3bad9","#e5d9e7","white","#e5d9e7","#b3bad9","#69a2bf","#3d97a8"],Ve=["14px","16px","18px","20px","30px","20px","18px","16px","14px"],Me=["0.3","0.5","0.6","0.8","1","0.8","0.6","0.5","0.3"],Ae=()=>{const i={x:0,y:0},e=document.querySelectorAll(".circle"),t=["#b7b7b7","#afafaf","#a7a7a7","#9f9f9f","#979797","#8f8f8f","#878787","#7f7f7f","#777777","#707070","#686868","#616161","#5a5a5a","#525252","#4b4b4b","#444444","#3d3d3d","#373737","#303030","#2a2a2a","#232323","#1d1d1d"];e.forEach(function(s,l){s.x=0,s.y=0,s.style.backgroundColor=t[l%t.length]}),window.addEventListener("mousemove",function(s){i.x=s.clientX,i.y=s.clientY});function n(){let s=i.x,l=i.y;e.forEach(function(o,w){o.style.left=s-12+"px",o.style.top=l-12+"px",o.style.transform=`scale(${(e.length-w)/e.length})`,o.x=s,o.y=l;const d=e[w+1]||e[0];s+=(d.x-s)*.3,l+=(d.y-l)*.3}),requestAnimationFrame(n)}n()},Re=()=>{let i=document.getElementsByClassName("navBar");for(let e of i)e.addEventListener("click",()=>{const t=e.id;for(let n=0;n<i.length;n++)Pe(i,t)})};function Ge(){let i=document.getElementsByClassName("navBar");const e=document.getElementById("cardContainer");e.style.transition="all 1s",window.onscroll=()=>{let n=[835,1770,2705,3620].findIndex(s=>window.scrollY<s);Pe(i,n===-1?5:n+1),window.scrollY>700?(e.style.opacity="1",e.style.top="0"):(e.style.opacity="0",e.style.top="50rem")}}function Pe(i,e){for(let t=0;t<i.length;t++){let n=5+t-parseInt(e),s=i[t].firstChild;s.style.transition="all 0.7s",s.style.backgroundColor=Ne[n],s.style.height=Ve[n],s.style.width=Ve[n],s.style.opacity=Me[n]}}const Fe=()=>{let i=!1,e,t,n;const s=document.getElementById("cardContainer"),l=s.style.scrollSnapType;s.addEventListener("mousedown",o=>{i=!0,e=o.pageX-s.offsetLeft,t=s.scrollLeft,s.style.scrollSnapType="none"}),s.addEventListener("mouseup",()=>{i=!1,cancelAnimationFrame(n),s.style.scrollSnapType=l}),s.addEventListener("mouseleave",()=>{i=!1,cancelAnimationFrame(n),s.style.scrollSnapType=l}),s.addEventListener("mousemove",o=>{if(!i)return;o.preventDefault();const d=(o.pageX-s.offsetLeft-e)*1.5;n=requestAnimationFrame(()=>{s.scrollLeft=t-d})})},Oe=()=>{const i=document.getElementById("faller"),e=document.getElementById("hz"),t=document.getElementById("nextCard");let n=50,s=51;const l={before:{left:"70rem",top:"8rem",zIndex:"50"},after:{left:"42rem",top:"8rem",zIndex:"51"}},o={before:{top:"1rem",left:"20rem",zIndex:"51"},after:{top:"9rem",left:"42rem",zIndex:"50"}};t.addEventListener("click",()=>{parseInt(n)<parseInt(s)?(console.log("true"),Ce(i,l),Ce(e,o),n=51,s=50):(Ce(e,l),Ce(i,o),n=50,s=51)})};function Ce(i,e){i.style.transition="all 0.7s",i.style.left=e.before.left,i.style.top=e.before.top,i.style.zIndex=e.before.zIndex,i.addEventListener("transitionend",()=>{i.style.transition="all 0.7s",i.style.left=e.after.left,i.style.top=e.after.top,i.style.zIndex=e.after.zIndex})}const qe=()=>{const i=document.getElementById("skillGrid"),e=document.getElementById("nextSkill"),t=document.getElementById("previousSkill");let n=0;const s="all 1.5s",l="0.75rem",o="30rem",w=30,d=i.childElementCount-1;i.style.transition=s,e.addEventListener("click",()=>{n++,v()}),t.addEventListener("click",()=>{n--,v()});function v(){n>0&&n<=d?(i.style.marginLeft=`-${n*w-1}rem`,n===d?i.style.marginRight=o:i.style.marginRight=""):n===-1?(n=d,i.style.marginLeft=`-${n*w-1}rem`,i.style.marginRight=o):(i.style.marginLeft=l,i.style.marginRight="",n=0)}};function Je(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E;return{c(){e=m("section"),t=m("div"),n=m("figure"),s=u(),l=m("img"),w=u(),d=m("h1"),v=ge("Welcome to my webpage"),c=u(),x=m("hr"),_=u(),p=m("p"),E=ge("Created by Simon Manassé"),this.h()},l(S){e=g(S,"SECTION",{class:!0,id:!0});var L=h(e);t=g(L,"DIV",{class:!0,id:!0});var b=h(t);n=g(b,"FIGURE",{}),h(n).forEach(f),s=$(b),l=g(b,"IMG",{id:!0,class:!0,src:!0,alt:!0}),w=$(b),d=g(b,"H1",{class:!0});var N=h(d);v=ue(N,"Welcome to my webpage"),N.forEach(f),c=$(b),x=g(b,"HR",{id:!0,class:!0}),_=$(b),p=g(b,"P",{class:!0});var y=h(p);E=ue(y,"Created by Simon Manassé"),y.forEach(f),b.forEach(f),L.forEach(f),this.h()},h(){a(l,"id","logo"),a(l,"class","h-[20%] flex fixed right-[45%] top-[5rem]"),ke(l.src,o="/src/img/canvalogo.png")||a(l,"src",o),a(l,"alt",""),a(d,"class","SC_title z-10 text-[6rem] text-white items-center justify-center"),a(x,"id","welcomPageLine"),a(x,"class","SC_content mt-[31rem] w-[60rem] left-[50%] ml-[-30rem] h-[3px] margin-auto z-[100] bg-gradient-to-r from-black via-white to-black border-0 rounded-full "),a(p,"class","SC_content justify-center items-center text-4xl mt-[20rem]"),a(t,"class","SC_inner "),a(t,"id","section_0"),a(e,"class","ScrollPics "),a(e,"id","Home")},m(S,L){ve(S,e,L),r(e,t),r(t,n),r(t,s),r(t,l),r(t,w),r(t,d),r(d,v),r(t,c),r(t,x),r(t,_),r(t,p),r(p,E)},p:Q,i:Q,o:Q,d(S){S&&f(e)}}}class Ze extends ye{constructor(e){super(),be(this,e,null,Je,we,{})}}function Ue(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E,S,L,b,N;return v=new Se({props:{imageName:"pco.png",projectName:"Program- & Career Orientation",description:"I have created my first ever portfolio website where I learned how to express my strenghts and weaknesses, and how to design a website that shows who am I as a person."}}),x=new Se({props:{imageName:"curiousVillage.jpg",projectName:"Curious Village",description:"I have created an object oriented game in Typescript with a team, where we taught children about the dangers of digital illiteracy."}}),p=new Se({props:{imageName:"pzem.jpg",projectName:"Dashboard for PZEM",description:"I took part in a team that created a dashboard application for PZEM that showed data based on energy creation and sold energy"}}),S=new Se({props:{imageName:"safari.png",projectName:"Hangout Safari",description:"This is a project was made for students who struggle with social anxiety and we made an interactable 3D safari where they can collect animals based on their social interactions."}}),b=new Se({props:{imageName:"boat.png",projectName:"Boat Parking Rent",description:"lorem"}}),{c(){e=m("section"),t=m("div"),n=m("figure"),s=u(),l=m("h1"),o=ge("Projects"),w=u(),d=m("div"),k(v.$$.fragment),c=u(),k(x.$$.fragment),_=u(),k(p.$$.fragment),E=u(),k(S.$$.fragment),L=u(),k(b.$$.fragment),this.h()},l(y){e=g(y,"SECTION",{class:!0,id:!0});var J=h(e);t=g(J,"DIV",{class:!0,id:!0});var M=h(t);n=g(M,"FIGURE",{}),h(n).forEach(f),s=$(M),l=g(M,"H1",{class:!0});var Y=h(l);o=ue(Y,"Projects"),Y.forEach(f),w=$(M),d=g(M,"DIV",{id:!0,class:!0});var T=h(d);C(v.$$.fragment,T),c=$(T),C(x.$$.fragment,T),_=$(T),C(p.$$.fragment,T),E=$(T),C(S.$$.fragment,T),L=$(T),C(b.$$.fragment,T),T.forEach(f),M.forEach(f),J.forEach(f),this.h()},h(){a(l,"class","SC_title z-10 text-[8rem] text-white justify-center"),a(d,"id","cardContainer"),a(d,"class","SC_content top-[50rem] opacity-0 z-[49] px-[38rem] items-center text-4xl gap-[20rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"),a(t,"class","SC_inner bg-zinc-900"),a(t,"id","section_1"),a(e,"class","ScrollPics "),a(e,"id","Projects")},m(y,J){ve(y,e,J),r(e,t),r(t,n),r(t,s),r(t,l),r(l,o),r(t,w),r(t,d),D(v,d,null),r(d,c),D(x,d,null),r(d,_),D(p,d,null),r(d,E),D(S,d,null),r(d,L),D(b,d,null),N=!0},p:Q,i(y){N||(z(v.$$.fragment,y),z(x.$$.fragment,y),z(p.$$.fragment,y),z(S.$$.fragment,y),z(b.$$.fragment,y),N=!0)},o(y){V(v.$$.fragment,y),V(x.$$.fragment,y),V(p.$$.fragment,y),V(S.$$.fragment,y),V(b.$$.fragment,y),N=!1},d(y){y&&f(e),j(v),j(x),j(p),j(S),j(b)}}}class Xe extends ye{constructor(e){super(),be(this,e,null,Ue,we,{})}}function We(i){let e,t,n,s,l,o,w,d,v,c,x;return{c(){e=m("div"),t=m("img"),s=u(),l=m("div"),o=m("h1"),w=ge(i[2]),d=u(),v=m("p"),c=ge(i[3]),this.h()},l(_){e=g(_,"DIV",{id:!0,class:!0});var p=h(e);t=g(p,"IMG",{src:!0,class:!0,alt:!0}),s=$(p),l=g(p,"DIV",{class:!0});var E=h(l);o=g(E,"H1",{class:!0});var S=h(o);w=ue(S,i[2]),S.forEach(f),E.forEach(f),d=$(p),v=g(p,"P",{class:!0});var L=h(v);c=ue(L,i[3]),L.forEach(f),p.forEach(f),this.h()},h(){ke(t.src,n="src/img/"+i[1])||a(t,"src",n),a(t,"class","mt-5 h-[10rem]"),a(t,"alt",""),a(o,"class","justify-center items-center"),a(l,"class","items-center flex flex-col my-7 text-xl "),a(v,"class","text-justify"),a(e,"id",i[0]),a(e,"class",x=i[4]+" SC_content perspectiveDiv h-[40rem] w-[30rem] bg-white text-black flex flex-col")},m(_,p){ve(_,e,p),r(e,t),r(e,s),r(e,l),r(l,o),r(o,w),r(e,d),r(e,v),r(v,c)},p(_,[p]){p&2&&!ke(t.src,n="src/img/"+_[1])&&a(t,"src",n),p&4&&De(w,_[2]),p&8&&De(c,_[3]),p&1&&a(e,"id",_[0]),p&16&&x!==(x=_[4]+" SC_content perspectiveDiv h-[40rem] w-[30rem] bg-white text-black flex flex-col")&&a(e,"class",x)},i:Q,o:Q,d(_){_&&f(e)}}}function Ye(i,e,t){let{id:n}=e,{image:s}=e,{title:l}=e,{description:o}=e,{classes:w}=e;return i.$$set=d=>{"id"in d&&t(0,n=d.id),"image"in d&&t(1,s=d.image),"title"in d&&t(2,l=d.title),"description"in d&&t(3,o=d.description),"classes"in d&&t(4,w=d.classes)},[n,s,l,o,w]}class je extends ye{constructor(e){super(),be(this,e,Ye,We,we,{id:0,image:1,title:2,description:3,classes:4})}}function Ke(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E,S,L;return v=new je({props:{id:"hz",image:"hz.png",title:"HBO ICT HZ university of applied science",description:`In the first year at HZ University, I learned foundational web development skills including HTML, CSS, and JavaScript, as well as TypeScript for building scalable applications. Additionally, I gained proficiency in PHP and Laravel for server-side development and learned about containerization using Docker.
        In the second year, the curriculum expanded to cover advanced topics such as Svelte for building reactive user interfaces, Microservices architecture for developing scalable and resilient applications, and Data Science with Python for analyzing and interpreting large datasets to extract valuable insights.`,classes:"top-[8rem] left-[42rem] z-50"}}),x=new je({props:{id:"faller",image:"faller.png",title:"Pápai SZC Faller Jenő Technikum",description:`
        During my four years in high school, I specialized in IT, gaining expertise in various areas. I acquired skills in application development using C# and .NET framework, along with proficiency in web development encompassing HTML, JavaScript, CSS, and relevant frameworks. Additionally, I mastered the art of structuring and managing MySQL databases, adept in executing queries for efficient data retrieval. Furthermore, I delved into the Cisco ecosystem, honing my abilities in network design and configuration to ensure optimal security and functionality.`,classes:"top-[9rem] left-[42rem] z-40"}}),{c(){e=m("section"),t=m("div"),n=m("figure"),s=u(),l=m("h2"),o=m("i"),w=ge("Education"),d=u(),k(v.$$.fragment),c=u(),k(x.$$.fragment),_=u(),p=m("div"),E=m("div"),S=ge("Next card"),this.h()},l(b){e=g(b,"SECTION",{class:!0,id:!0});var N=h(e);t=g(N,"DIV",{class:!0,id:!0});var y=h(t);n=g(y,"FIGURE",{}),h(n).forEach(f),s=$(y),l=g(y,"H2",{class:!0});var J=h(l);o=g(J,"I",{});var M=h(o);w=ue(M,"Education"),M.forEach(f),J.forEach(f),d=$(y),C(v.$$.fragment,y),c=$(y),C(x.$$.fragment,y),_=$(y),p=g(y,"DIV",{});var Y=h(p);E=g(Y,"DIV",{id:!0,class:!0});var T=h(E);S=ue(T,"Next card"),T.forEach(f),Y.forEach(f),y.forEach(f),N.forEach(f),this.h()},h(){a(l,"class","SC_title z-10 text-[8rem] text-white justify-center"),a(E,"id","nextCard"),a(E,"class","SC_content rounded-full bg-white h-[5rem] w-[10rem] z-[60] items-center justify-center top-[50rem] left-[54rem] text-black"),a(t,"class","SC_inner bg-zinc-800"),a(t,"id","section_2"),a(e,"class","ScrollPics "),a(e,"id","Education")},m(b,N){ve(b,e,N),r(e,t),r(t,n),r(t,s),r(t,l),r(l,o),r(o,w),r(t,d),D(v,t,null),r(t,c),D(x,t,null),r(t,_),r(t,p),r(p,E),r(E,S),L=!0},p:Q,i(b){L||(z(v.$$.fragment,b),z(x.$$.fragment,b),L=!0)},o(b){V(v.$$.fragment,b),V(x.$$.fragment,b),L=!1},d(b){b&&f(e),j(v),j(x)}}}class Qe extends ye{constructor(e){super(),be(this,e,null,Ke,we,{})}}function et(i){let e,t,n;return{c(){e=m("div"),t=m("div"),n=m("div"),this.h()},l(s){e=g(s,"DIV",{});var l=h(e);t=g(l,"DIV",{class:!0});var o=h(t);n=g(o,"DIV",{class:!0});var w=h(n);w.forEach(f),o.forEach(f),l.forEach(f),this.h()},h(){a(n,"class","hex"),a(t,"class","")},m(s,l){ve(s,e,l),r(e,t),r(t,n)},p:Q,i:Q,o:Q,d(s){s&&f(e)}}}class A extends ye{constructor(e){super(),be(this,e,null,et,we,{})}}function tt(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E,S,L,b,N,y,J,M,Y,T,le,O,oe,R,K,ne,q,B,G,F,ae,se,Z,W,$e,U,xe,ee,_e,te,he,pe,re,ce,I;return x=new A({props:{image:"arch.png",title:"Linux based systems",description:"I am using arch on as a daily os, so I have a good understanding on linux based systems and how to work with them"}}),p=new A({props:{image:"bash.png",title:"Bash",description:"I have wrote my own bash scripts, one of them was a microservice generator, which creates instant access to a supabase database. It also generated the important docker files that are neccessary to dockerize the system."}}),S=new A({props:{image:"java.png",title:"Java",description:"I've used java to create an online book store, applying the refactoring principals"}}),b=new A({props:{image:"python.png",title:"python"}}),y=new A({props:{image:"svelte.png",title:"SvelteKit",description:""}}),M=new A({props:{image:"laravel.png",title:"Laravel",description:""}}),T=new A({props:{image:"nodeJs.png",title:"NodeJs",description:""}}),O=new A({props:{image:"blender.png",title:"Blender",description:""}}),R=new A({props:{image:"docker.png",title:"Docker",description:""}}),ne=new A({props:{image:"php.png",title:"PHP",description:""}}),B=new A({props:{image:"jsTs.png",title:"JavaScript & TypeScript",description:""}}),F=new A({props:{image:"cs.png",title:"C#",description:""}}),se=new A({props:{image:"git.png",title:"Git",description:""}}),W=new A({props:{image:"pandas.png",title:"Pandas",description:""}}),U=new A({props:{image:"oop.png",title:"OOP",description:""}}),ee=new A({props:{image:"photoshop.png",title:"Photoshop",description:""}}),{c(){e=m("section"),t=m("div"),n=m("figure"),s=u(),l=m("h2"),o=m("i"),w=ge("Hobbies"),d=u(),v=m("div"),c=m("div"),k(x.$$.fragment),_=u(),k(p.$$.fragment),E=u(),k(S.$$.fragment),L=u(),k(b.$$.fragment),N=u(),k(y.$$.fragment),J=u(),k(M.$$.fragment),Y=u(),k(T.$$.fragment),le=u(),k(O.$$.fragment),oe=u(),k(R.$$.fragment),K=u(),k(ne.$$.fragment),q=u(),k(B.$$.fragment),G=u(),k(F.$$.fragment),ae=u(),k(se.$$.fragment),Z=u(),k(W.$$.fragment),$e=u(),k(U.$$.fragment),xe=u(),k(ee.$$.fragment),_e=u(),te=m("div"),he=m("i"),pe=u(),re=m("div"),ce=m("i"),this.h()},l(P){e=g(P,"SECTION",{class:!0,id:!0});var X=h(e);t=g(X,"DIV",{class:!0,id:!0});var ie=h(t);n=g(ie,"FIGURE",{}),h(n).forEach(f),s=$(ie),l=g(ie,"H2",{class:!0});var Ee=h(l);o=g(Ee,"I",{});var fe=h(o);w=ue(fe,"Hobbies"),fe.forEach(f),Ee.forEach(f),d=$(ie),v=g(ie,"DIV",{class:!0});var de=h(v);c=g(de,"DIV",{id:!0,class:!0});var H=h(c);C(x.$$.fragment,H),_=$(H),C(p.$$.fragment,H),E=$(H),C(S.$$.fragment,H),L=$(H),C(b.$$.fragment,H),N=$(H),C(y.$$.fragment,H),J=$(H),C(M.$$.fragment,H),Y=$(H),C(T.$$.fragment,H),le=$(H),C(O.$$.fragment,H),oe=$(H),C(R.$$.fragment,H),K=$(H),C(ne.$$.fragment,H),q=$(H),C(B.$$.fragment,H),G=$(H),C(F.$$.fragment,H),ae=$(H),C(se.$$.fragment,H),Z=$(H),C(W.$$.fragment,H),$e=$(H),C(U.$$.fragment,H),xe=$(H),C(ee.$$.fragment,H),H.forEach(f),de.forEach(f),_e=$(ie),te=g(ie,"DIV",{id:!0,class:!0});var me=h(te);he=g(me,"I",{class:!0,style:!0}),h(he).forEach(f),me.forEach(f),pe=$(ie),re=g(ie,"DIV",{id:!0,class:!0});var Ie=h(re);ce=g(Ie,"I",{class:!0,style:!0}),h(ce).forEach(f),Ie.forEach(f),ie.forEach(f),X.forEach(f),this.h()},h(){a(l,"class","SC_title justify-center text-white"),a(c,"id","skillGrid"),a(c,"class","grid grid-flow-row gap-[30rem] m-3 mt-6 grid-cols-16 "),a(v,"class","SC_content h-[35rem] w-[30rem] top-[10rem] left-[44rem] cornerBorder overflow-clip"),a(he,"class","fa-solid fa-arrow-right"),ze(he,"color","#000000"),a(te,"id","nextSkill"),a(te,"class","SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"),a(ce,"class","fa-solid fa-arrow-left"),ze(ce,"color","#000000"),a(re,"id","previousSkill"),a(re,"class","SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"),a(t,"class","SC_inner bg-zinc-700"),a(t,"id","section_2"),a(e,"class","ScrollPics "),a(e,"id","Skills")},m(P,X){ve(P,e,X),r(e,t),r(t,n),r(t,s),r(t,l),r(l,o),r(o,w),r(t,d),r(t,v),r(v,c),D(x,c,null),r(c,_),D(p,c,null),r(c,E),D(S,c,null),r(c,L),D(b,c,null),r(c,N),D(y,c,null),r(c,J),D(M,c,null),r(c,Y),D(T,c,null),r(c,le),D(O,c,null),r(c,oe),D(R,c,null),r(c,K),D(ne,c,null),r(c,q),D(B,c,null),r(c,G),D(F,c,null),r(c,ae),D(se,c,null),r(c,Z),D(W,c,null),r(c,$e),D(U,c,null),r(c,xe),D(ee,c,null),r(t,_e),r(t,te),r(te,he),r(t,pe),r(t,re),r(re,ce),I=!0},p:Q,i(P){I||(z(x.$$.fragment,P),z(p.$$.fragment,P),z(S.$$.fragment,P),z(b.$$.fragment,P),z(y.$$.fragment,P),z(M.$$.fragment,P),z(T.$$.fragment,P),z(O.$$.fragment,P),z(R.$$.fragment,P),z(ne.$$.fragment,P),z(B.$$.fragment,P),z(F.$$.fragment,P),z(se.$$.fragment,P),z(W.$$.fragment,P),z(U.$$.fragment,P),z(ee.$$.fragment,P),I=!0)},o(P){V(x.$$.fragment,P),V(p.$$.fragment,P),V(S.$$.fragment,P),V(b.$$.fragment,P),V(y.$$.fragment,P),V(M.$$.fragment,P),V(T.$$.fragment,P),V(O.$$.fragment,P),V(R.$$.fragment,P),V(ne.$$.fragment,P),V(B.$$.fragment,P),V(F.$$.fragment,P),V(se.$$.fragment,P),V(W.$$.fragment,P),V(U.$$.fragment,P),V(ee.$$.fragment,P),I=!1},d(P){P&&f(e),j(x),j(p),j(S),j(b),j(y),j(M),j(T),j(O),j(R),j(ne),j(B),j(F),j(se),j(W),j(U),j(ee)}}}class rt extends ye{constructor(e){super(),be(this,e,null,tt,we,{})}}function nt(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E,S,L,b,N,y,J,M,Y,T,le,O,oe,R,K,ne,q,B,G,F,ae,se,Z,W,$e,U,xe,ee,_e,te,he,pe,re,ce;return c=new A({}),_=new A({}),E=new A({}),L=new A({}),y=new A({}),M=new A({}),T=new A({}),O=new A({}),K=new A({}),q=new A({}),G=new A({}),ae=new A({}),W=new A({}),U=new A({}),ee=new A({}),te=new A({}),re=new A({}),{c(){e=m("section"),t=m("div"),n=m("figure"),s=u(),l=m("h2"),o=m("i"),w=ge("Skills"),d=u(),v=m("div"),k(c.$$.fragment),x=u(),k(_.$$.fragment),p=u(),k(E.$$.fragment),S=u(),k(L.$$.fragment),b=u(),N=m("div"),k(y.$$.fragment),J=u(),k(M.$$.fragment),Y=u(),k(T.$$.fragment),le=u(),k(O.$$.fragment),oe=u(),R=m("div"),k(K.$$.fragment),ne=u(),k(q.$$.fragment),B=u(),k(G.$$.fragment),F=u(),k(ae.$$.fragment),se=u(),Z=m("div"),k(W.$$.fragment),$e=u(),k(U.$$.fragment),xe=u(),k(ee.$$.fragment),_e=u(),k(te.$$.fragment),he=u(),pe=m("div"),k(re.$$.fragment),this.h()},l(I){e=g(I,"SECTION",{class:!0,id:!0});var P=h(e);t=g(P,"DIV",{class:!0,id:!0});var X=h(t);n=g(X,"FIGURE",{}),h(n).forEach(f),s=$(X),l=g(X,"H2",{class:!0});var ie=h(l);o=g(ie,"I",{});var Ee=h(o);w=ue(Ee,"Skills"),Ee.forEach(f),ie.forEach(f),d=$(X),v=g(X,"DIV",{class:!0});var fe=h(v);C(c.$$.fragment,fe),x=$(fe),C(_.$$.fragment,fe),p=$(fe),C(E.$$.fragment,fe),S=$(fe),C(L.$$.fragment,fe),fe.forEach(f),b=$(X),N=g(X,"DIV",{class:!0});var de=h(N);C(y.$$.fragment,de),J=$(de),C(M.$$.fragment,de),Y=$(de),C(T.$$.fragment,de),le=$(de),C(O.$$.fragment,de),de.forEach(f),oe=$(X),R=g(X,"DIV",{class:!0});var H=h(R);C(K.$$.fragment,H),ne=$(H),C(q.$$.fragment,H),B=$(H),C(G.$$.fragment,H),F=$(H),C(ae.$$.fragment,H),H.forEach(f),se=$(X),Z=g(X,"DIV",{class:!0});var me=h(Z);C(W.$$.fragment,me),$e=$(me),C(U.$$.fragment,me),xe=$(me),C(ee.$$.fragment,me),_e=$(me),C(te.$$.fragment,me),me.forEach(f),he=$(X),pe=g(X,"DIV",{class:!0});var Ie=h(pe);C(re.$$.fragment,Ie),Ie.forEach(f),X.forEach(f),P.forEach(f),this.h()},h(){a(l,"class","SC_title justify-center text-white"),a(v,"class","ml-[35rem] SC_content mt-[5rem] flex"),a(N,"class","SC_content ml-[28.5rem] mt-[16rem] flex"),a(R,"class","ml-[35rem] SC_content mt-[27rem] flex"),a(Z,"class","SC_content ml-[28.5rem] mt-[38rem] flex"),a(pe,"class","ml-[35rem] SC_content mt-[5rem] flex"),a(t,"class","SC_inner bg-zinc-600"),a(t,"id","section_2"),a(e,"class","ScrollPics "),a(e,"id","Hobbies")},m(I,P){ve(I,e,P),r(e,t),r(t,n),r(t,s),r(t,l),r(l,o),r(o,w),r(t,d),r(t,v),D(c,v,null),r(v,x),D(_,v,null),r(v,p),D(E,v,null),r(v,S),D(L,v,null),r(t,b),r(t,N),D(y,N,null),r(N,J),D(M,N,null),r(N,Y),D(T,N,null),r(N,le),D(O,N,null),r(t,oe),r(t,R),D(K,R,null),r(R,ne),D(q,R,null),r(R,B),D(G,R,null),r(R,F),D(ae,R,null),r(t,se),r(t,Z),D(W,Z,null),r(Z,$e),D(U,Z,null),r(Z,xe),D(ee,Z,null),r(Z,_e),D(te,Z,null),r(t,he),r(t,pe),D(re,pe,null),ce=!0},p:Q,i(I){ce||(z(c.$$.fragment,I),z(_.$$.fragment,I),z(E.$$.fragment,I),z(L.$$.fragment,I),z(y.$$.fragment,I),z(M.$$.fragment,I),z(T.$$.fragment,I),z(O.$$.fragment,I),z(K.$$.fragment,I),z(q.$$.fragment,I),z(G.$$.fragment,I),z(ae.$$.fragment,I),z(W.$$.fragment,I),z(U.$$.fragment,I),z(ee.$$.fragment,I),z(te.$$.fragment,I),z(re.$$.fragment,I),ce=!0)},o(I){V(c.$$.fragment,I),V(_.$$.fragment,I),V(E.$$.fragment,I),V(L.$$.fragment,I),V(y.$$.fragment,I),V(M.$$.fragment,I),V(T.$$.fragment,I),V(O.$$.fragment,I),V(K.$$.fragment,I),V(q.$$.fragment,I),V(G.$$.fragment,I),V(ae.$$.fragment,I),V(W.$$.fragment,I),V(U.$$.fragment,I),V(ee.$$.fragment,I),V(te.$$.fragment,I),V(re.$$.fragment,I),ce=!1},d(I){I&&f(e),j(c),j(_),j(E),j(L),j(y),j(M),j(T),j(O),j(K),j(q),j(G),j(ae),j(W),j(U),j(ee),j(te),j(re)}}}class at extends ye{constructor(e){super(),be(this,e,null,nt,we,{})}}function st(i,e,t){const n=i.slice();return n[0]=e[t],n[2]=t,n}function it(i){let e;return{c(){e=m("div"),this.h()},l(t){e=g(t,"DIV",{class:!0}),h(e).forEach(f),this.h()},h(){a(e,"class","circle")},m(t,n){ve(t,e,n)},p:Q,d(t){t&&f(e)}}}function lt(i){let e,t,n,s,l,o,w,d,v,c,x,_,p,E,S,L,b,N,y,J,M,Y,T,le,O,oe,R,K,ne={length:20},q=[];for(let B=0;B<ne.length;B+=1)q[B]=it(st(i,ne,B));return y=new Ze({}),M=new Xe({}),T=new Qe({}),O=new at({}),R=new rt({}),{c(){e=m("div");for(let B=0;B<q.length;B+=1)q[B].c();t=u(),n=m("div"),s=m("a"),l=m("div"),o=u(),w=m("a"),d=m("div"),v=u(),c=m("a"),x=m("div"),_=u(),p=m("a"),E=m("div"),S=u(),L=m("a"),b=m("div"),N=u(),k(y.$$.fragment),J=u(),k(M.$$.fragment),Y=u(),k(T.$$.fragment),le=u(),k(O.$$.fragment),oe=u(),k(R.$$.fragment),this.h()},l(B){e=g(B,"DIV",{class:!0});var G=h(e);for(let U=0;U<q.length;U+=1)q[U].l(G);t=$(G),n=g(G,"DIV",{class:!0});var F=h(n);s=g(F,"A",{href:!0,id:!0,class:!0});var ae=h(s);l=g(ae,"DIV",{class:!0}),h(l).forEach(f),ae.forEach(f),o=$(F),w=g(F,"A",{href:!0,id:!0,class:!0});var se=h(w);d=g(se,"DIV",{class:!0}),h(d).forEach(f),se.forEach(f),v=$(F),c=g(F,"A",{href:!0,id:!0,class:!0});var Z=h(c);x=g(Z,"DIV",{class:!0}),h(x).forEach(f),Z.forEach(f),_=$(F),p=g(F,"A",{href:!0,id:!0,class:!0});var W=h(p);E=g(W,"DIV",{class:!0}),h(E).forEach(f),W.forEach(f),S=$(F),L=g(F,"A",{href:!0,id:!0,class:!0});var $e=h(L);b=g($e,"DIV",{class:!0}),h(b).forEach(f),$e.forEach(f),F.forEach(f),N=$(G),C(y.$$.fragment,G),J=$(G),C(M.$$.fragment,G),Y=$(G),C(T.$$.fragment,G),le=$(G),C(O.$$.fragment,G),oe=$(G),C(R.$$.fragment,G),G.forEach(f),this.h()},h(){a(l,"class","w-[30px] h-[30px] z-[555555] bg-white rounded-full"),a(s,"href","#Home"),a(s,"id","1"),a(s,"class","navBar"),a(d,"class","w-[20px] h-[20px] z-[555555] bg-[#e5d9e7] rounded-full"),a(w,"href","#Projects"),a(w,"id","2"),a(w,"class","navBar"),a(x,"class","w-[18px] h-[18px] z-[555555] bg-[#b3bad9] rounded-full"),a(c,"href","#Education"),a(c,"id","3"),a(c,"class","navBar"),a(E,"class","w-[16px] h-[16px] z-[555555] bg-[#69a2bf] rounded-full"),a(p,"href","#Skills"),a(p,"id","4"),a(p,"class","navBar"),a(b,"class","w-[14px] h-[14px] z-[555555] bg-[#3d97a8] rounded-full"),a(L,"href","#Hobbies"),a(L,"id","5"),a(L,"class","navBar"),a(n,"class","fixed z-50 h-screen flex flex-col right-5 gap-4 justify-center float-right border-none items-center"),a(e,"class","")},m(B,G){ve(B,e,G);for(let F=0;F<q.length;F+=1)q[F]&&q[F].m(e,null);r(e,t),r(e,n),r(n,s),r(s,l),r(n,o),r(n,w),r(w,d),r(n,v),r(n,c),r(c,x),r(n,_),r(n,p),r(p,E),r(n,S),r(n,L),r(L,b),r(e,N),D(y,e,null),r(e,J),D(M,e,null),r(e,Y),D(T,e,null),r(e,le),D(O,e,null),r(e,oe),D(R,e,null),K=!0},p:Q,i(B){K||(z(y.$$.fragment,B),z(M.$$.fragment,B),z(T.$$.fragment,B),z(O.$$.fragment,B),z(R.$$.fragment,B),K=!0)},o(B){V(y.$$.fragment,B),V(M.$$.fragment,B),V(T.$$.fragment,B),V(O.$$.fragment,B),V(R.$$.fragment,B),K=!1},d(B){B&&f(e),Le(q,B),j(y),j(M),j(T),j(O),j(R)}}}function ot(i){return He(()=>{Ae(),Re(),Ge(),Fe(),Oe(),qe()}),[]}class ft extends ye{constructor(e){super(),be(this,e,ot,lt,we,{})}}export{ft as component};
