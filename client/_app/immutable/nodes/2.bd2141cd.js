import{S as ne,i as ae,s as se,k as m,a as w,q as W,l as f,m as g,h as c,c as x,r as Y,n as s,J as oe,b as te,D as n,u as de,H as J,y as H,z as M,A,g as R,d as F,B as U,p as Ie,K as Be,o as ze}from"../chunks/index.8528c4bc.js";function Le(r){let e,t,a,i,o,l,y,d,v,h,E;return{c(){e=m("div"),t=m("div"),a=m("img"),o=w(),l=m("div"),y=m("p"),d=W(r[1]),v=w(),h=m("p"),E=W(r[2]),this.h()},l(b){e=f(b,"DIV",{class:!0});var u=g(e);t=f(u,"DIV",{class:!0});var _=g(t);a=f(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(c),o=x(u),l=f(u,"DIV",{class:!0});var I=g(l);y=f(I,"P",{class:!0});var j=g(y);d=Y(j,r[1]),j.forEach(c),I.forEach(c),v=x(u),h=f(u,"P",{class:!0});var p=g(h);E=Y(p,r[2]),p.forEach(c),u.forEach(c),this.h()},h(){s(a,"class","h-[15rem]"),oe(a.src,i=r[0])||s(a,"src",i),s(a,"alt",""),s(t,"class","h-[15rem] flex justify-center items-center"),s(y,"class","text-4xl py-4"),s(l,"class","flex justify-center items-center"),s(h,"class",""),s(e,"class","w-[25rem]")},m(b,u){te(b,e,u),n(e,t),n(t,a),n(e,o),n(e,l),n(l,y),n(y,d),n(e,v),n(e,h),n(h,E)},p(b,[u]){u&1&&!oe(a.src,i=b[0])&&s(a,"src",i),u&2&&de(d,b[1]),u&4&&de(E,b[2])},i:J,o:J,d(b){b&&c(e)}}}function Ve(r,e,t){let{imageName:a}=e,{projectName:i}=e,{description:o}=e;return r.$$set=l=>{"imageName"in l&&t(0,a=l.imageName),"projectName"in l&&t(1,i=l.projectName),"description"in l&&t(2,o=l.description)},[a,i,o]}class le extends ne{constructor(e){super(),ae(this,e,Ve,Le,se,{imageName:0,projectName:1,description:2})}}const He=["#3d97a8","#69a2bf","#b3bad9","#e5d9e7","white","#e5d9e7","#b3bad9","#69a2bf","#3d97a8"],_e=["14px","16px","18px","20px","30px","20px","18px","16px","14px"],Me=["0.3","0.5","0.6","0.8","1","0.8","0.6","0.5","0.3"],Ae=()=>{const r={x:0,y:0},e=document.querySelectorAll(".circle"),t=["#b7b7b7","#afafaf","#a7a7a7","#9f9f9f","#979797","#8f8f8f","#878787","#7f7f7f","#777777","#707070","#686868","#616161","#5a5a5a","#525252","#4b4b4b","#444444","#3d3d3d","#373737","#303030","#2a2a2a","#232323","#1d1d1d"];e.forEach(function(i,o){i.x=0,i.y=0,i.style.backgroundColor=t[o%t.length]}),window.addEventListener("mousemove",function(i){r.x=i.clientX,r.y=i.clientY});function a(){let i=r.x,o=r.y;e.forEach(function(l,y){l.style.left=i-12+"px",l.style.top=o-12+"px",l.style.transform=`scale(${(e.length-y)/e.length})`,l.x=i,l.y=o;const d=e[y+1]||e[0];i+=(d.x-i)*.3,o+=(d.y-o)*.3}),requestAnimationFrame(a)}a()},Re=()=>{let r=document.getElementsByClassName("navBar");for(let e of r)e.addEventListener("click",()=>{const t=e.id;for(let a=0;a<r.length;a++)Ne(r,t)})};let Ce=!1,$e=!1;function Fe(){let r=document.getElementsByClassName("navBar");const e=document.getElementById("cardContainer");e.style.transition="all 1s",window.onscroll=()=>{let a=[835,1770,2705,3620].findIndex(i=>window.scrollY<i);Ne(r,a===-1?5:a+1),window.scrollY>700?(e.style.opacity="1",e.style.top="0"):(e.style.opacity="0",e.style.top="50rem"),window.scrollY>1770&&!$e&&(Ue(),$e=!0),window.scrollY>2800&&!Ce&&We()}}function Ue(){const r=document.getElementById("hz"),e=document.getElementById("faller");r.style.transition="all 1.5s",e.style.transition="all 1.5s",r.style.top="8rem",e.style.top="9rem",r==null||r.addEventListener("transitionend",()=>{r.style.transition="all 0.7s",e.style.transition="all 0.7s"})}function Ne(r,e){for(let t=0;t<r.length;t++){let a=5+t-parseInt(e),i=r[t].firstChild;i.style.transition="all 0.7s",i.style.backgroundColor=He[a],i.style.height=_e[a],i.style.width=_e[a],i.style.opacity=Me[a]}}const Ge=()=>{let r=!1,e,t,a;const i=document.getElementById("cardContainer"),o=i.style.scrollSnapType;i.addEventListener("mousedown",l=>{r=!0,e=l.pageX-i.offsetLeft,t=i.scrollLeft,i.style.scrollSnapType="none"}),i.addEventListener("mouseup",()=>{r=!1,cancelAnimationFrame(a),i.style.scrollSnapType=o}),i.addEventListener("mouseleave",()=>{r=!1,cancelAnimationFrame(a),i.style.scrollSnapType=o}),i.addEventListener("mousemove",l=>{if(!r)return;l.preventDefault();const d=(l.pageX-i.offsetLeft-e)*1.5;a=requestAnimationFrame(()=>{i.scrollLeft=t-d})})},qe=()=>{const r=document.getElementById("faller"),e=document.getElementById("hz"),t=document.getElementById("nextCard");let a=50,i=51;const o={before:{left:"70rem",top:"8rem",zIndex:"50"},after:{left:"42rem",top:"8rem",zIndex:"51"}},l={before:{top:"1rem",left:"20rem",zIndex:"51"},after:{top:"9rem",left:"42rem",zIndex:"50"}};t.addEventListener("click",()=>{parseInt(a)<parseInt(i)?(console.log("true"),ve(r,o),ve(e,l),a=51,i=50):(ve(e,o),ve(r,l),a=50,i=51)})};function ve(r,e){r.style.transition="all 0.7s",r.style.left=e.before.left,r.style.top=e.before.top,r.style.zIndex=e.before.zIndex,r.addEventListener("transitionend",()=>{r.style.transition="all 0.7s",r.style.left=e.after.left,r.style.top=e.after.top,r.style.zIndex=e.after.zIndex})}const Oe=()=>{const r=document.getElementById("skillGrid"),e=document.getElementById("nextSkill"),t=document.getElementById("previousSkill");let a=0;const i="all 1.5s",o="0.75rem",l="30rem",y=30,d=r.childElementCount-1;r.style.transition=i,e.addEventListener("click",()=>{a++,v()}),t.addEventListener("click",()=>{a--,v()});function v(){a>0&&a<=d?(r.style.marginLeft=`-${a*y-1}rem`,a===d?r.style.marginRight=l:r.style.marginRight=""):a===-1?(a=d,r.style.marginLeft=`-${a*y-1}rem`,r.style.marginRight=l):(r.style.marginLeft=o,r.style.marginRight="",a=0)}};let ue=0,Pe=100,Te=!1;const ke="Skills",Ze="├── docker5├── git5│   └── versionControl.experience 5├── linux5│   ├── bash5│   │   └── microserviceGenerator.sh 5│   ├── c5│   │   └── linuxTweeking.c 5│   └── daily.os 5├── nodeJs5├── oop5│   ├── cSharp5│   ├── java5│   └── typeScript5│       └── curiousVillage.ts 5└── pandas5    └── python5        └── dataScience.py",Je="├── blender5│   ├── hackathon.blend 5│   └──wineProject.blend 5├── canva5│   └──slideShow.presentation 5├── figma5│   └──webDesigns.fig 5├── frameworks5│   ├── laravel5│   │   └── php5│   │       └── boatParking.php5│   └── svelteKit5│       └── javaScript5│           └── +ThisPage.svelte 5└── photoshop5    └── hobby.png",We=()=>{Ce=!0;const r=document.getElementById("firstSkillSpan"),e=document.getElementById("secondSkillSpan"),t=document.getElementById("backEndTree"),a=document.getElementById("frontEndTree"),i=document.getElementById("backEndP"),o=document.getElementById("frontEndP");Se(r,56.5,.9,ke,i,()=>{ye(i),setTimeout(()=>{Ye(),je(Ze,t)},500)}),setTimeout(()=>{const l=document.getElementById("secondDiv");l.style.display="block",Se(e,86.5,.6,ke,o,()=>{ye(o),Xe(),setTimeout(()=>{Ke(),je(Je,a)},500)})},4800)};function Se(r,e,t,a,i,o){const l=document.getElementById("skillIntelisense");l.style.display="flex",ue=0;function y(){ue<a.length?(r.innerHTML+=a.charAt(ue),l.style.left=e+ue*t+"rem",ue++,setTimeout(y,Pe)):(Te=!0,l.style.display="none",o&&o())}y()}function ye(r){if(Te){const e=document.createElement("span");e.innerHTML=".",r.appendChild(e);const t=document.getElementById("intelisense");t.style.display="flex"}else setTimeout(()=>ye(r),Pe)}function Ye(){const r=document.getElementById("backEndP"),e=document.getElementById("intelisense"),t=document.createElement("span"),a=document.createElement("span");a.innerHTML="()",t.className="text-yellow-200",t.innerHTML="displayBackEnd",r.appendChild(t),r.appendChild(a),e.style.display="none"}function Xe(){const r=document.getElementById("intelisense"),e=document.getElementById("displayBack"),t=document.getElementById("displayFront");e.style.backgroundColor="black",t.style.backgroundColor="#6b7280",r.style.display="flex",r.style.left="90.5rem"}function Ke(){const r=document.getElementById("frontEndP"),e=document.getElementById("intelisense"),t=document.createElement("span"),a=document.createElement("span");a.innerHTML="()",t.className="text-yellow-200",t.innerHTML="displayBackEnd",r.appendChild(t),r.appendChild(a),e.style.display="none"}function je(r,e){let t=0;function a(){t<r.length&&(r.charAt(t)=="5"?e.innerHTML+="<br>":e.innerHTML+=r.charAt(t),t++,setTimeout(a,10))}a()}function Qe(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_;return{c(){e=m("section"),t=m("div"),a=m("figure"),i=w(),o=m("img"),y=w(),d=m("h1"),v=W("Welcome to my webpage"),h=w(),E=m("hr"),b=w(),u=m("p"),_=W("Created by Simon Manassé"),this.h()},l(I){e=f(I,"SECTION",{class:!0,id:!0});var j=g(e);t=f(j,"DIV",{class:!0,id:!0});var p=g(t);a=f(p,"FIGURE",{}),g(a).forEach(c),i=x(p),o=f(p,"IMG",{id:!0,class:!0,src:!0,alt:!0}),y=x(p),d=f(p,"H1",{class:!0});var P=g(d);v=Y(P,"Welcome to my webpage"),P.forEach(c),h=x(p),E=f(p,"HR",{id:!0,class:!0}),b=x(p),u=f(p,"P",{class:!0});var S=g(u);_=Y(S,"Created by Simon Manassé"),S.forEach(c),p.forEach(c),j.forEach(c),this.h()},h(){s(o,"id","logo"),s(o,"class","h-[20%] flex fixed right-[45%] top-[5rem]"),oe(o.src,l="/src/img/canvalogo.png")||s(o,"src",l),s(o,"alt",""),s(d,"class","SC_title z-10 text-[6rem] text-white items-center justify-center"),s(E,"id","welcomPageLine"),s(E,"class","SC_content mt-[34rem] w-[60rem] left-[50%] ml-[-30rem] h-[3px] margin-auto z-[100] bg-gradient-to-r from-black via-white to-black border-0 rounded-full "),s(u,"class","SC_content justify-center items-center text-4xl mt-[20rem]"),s(t,"class","SC_inner "),s(t,"id","section_0"),s(e,"class","ScrollPics "),s(e,"id","Home")},m(I,j){te(I,e,j),n(e,t),n(t,a),n(t,i),n(t,o),n(t,y),n(t,d),n(d,v),n(t,h),n(t,E),n(t,b),n(t,u),n(u,_)},p:J,i:J,o:J,d(I){I&&c(e)}}}class et extends ne{constructor(e){super(),ae(this,e,null,Qe,se,{})}}function tt(r){let e,t,a,i,o,l,y,d,v,h,E,b,u;return{c(){e=m("div"),t=m("div"),a=m("img"),o=w(),l=m("div"),y=m("hr"),d=w(),v=m("p"),h=W(r[1]),E=w(),b=m("p"),u=W(r[2]),this.h()},l(_){e=f(_,"DIV",{class:!0});var I=g(e);t=f(I,"DIV",{class:!0});var j=g(t);a=f(j,"IMG",{class:!0,src:!0,alt:!0}),o=x(j),l=f(j,"DIV",{class:!0});var p=g(l);y=f(p,"HR",{class:!0}),d=x(p),v=f(p,"P",{class:!0});var P=g(v);h=Y(P,r[1]),P.forEach(c),E=x(p),b=f(p,"P",{class:!0});var S=g(b);u=Y(S,r[2]),S.forEach(c),p.forEach(c),j.forEach(c),I.forEach(c),this.h()},h(){s(a,"class","h-[100%] mt-0 top-0 w-[100%] object-cover rounded-t-lg transition-all duration-75"),oe(a.src,i="src/img/"+r[0])||s(a,"src",i),s(a,"alt",""),s(y,"class","my-[2rem] z-[100] w-[30rem] h-[1px] bg-gradient-to-r from-white via-black to-white border-0 rounded-lg"),s(v,"class","text-4xl"),s(b,"class","text-xl mx-5 text-justify"),s(l,"class","w-[100%] h-[100%] flex flex-col items-center"),s(t,"class","w-[100%] h-[100%] hover:first:h-[20rem] transition-all duration-300 "),s(e,"class","bg-white text-black mt-[10rem] snap-center w-[40rem] flex-shrink-0 h-[40rem] border-none rounded-lg flex flex-col items-center text-8xl gap-2 overflow-clip")},m(_,I){te(_,e,I),n(e,t),n(t,a),n(t,o),n(t,l),n(l,y),n(l,d),n(l,v),n(v,h),n(l,E),n(l,b),n(b,u)},p(_,[I]){I&1&&!oe(a.src,i="src/img/"+_[0])&&s(a,"src",i),I&2&&de(h,_[1]),I&4&&de(u,_[2])},i:J,o:J,d(_){_&&c(e)}}}function nt(r,e,t){let{imageName:a}=e,{projectName:i}=e,{description:o}=e;return r.$$set=l=>{"imageName"in l&&t(0,a=l.imageName),"projectName"in l&&t(1,i=l.projectName),"description"in l&&t(2,o=l.description)},[a,i,o]}class ce extends ne{constructor(e){super(),ae(this,e,nt,tt,se,{imageName:0,projectName:1,description:2})}}function at(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_,I,j,p,P,S,q;return v=new ce({props:{imageName:"boat.png",projectName:"Boat Parking Rent",description:"My friends and I have nearly completed a website using PHP. It's designed for renting boat parking spaces. Users can both rent out their own spaces and find available spots to rent. We've deployed the site already, and now we're just adding some final touches."}}),E=new ce({props:{imageName:"curiousVillage.jpg",projectName:"Curious Village",description:"My team and I developed an object-oriented game using Typescript aimed at educating children about the perils of digital illiteracy. Our efforts paid off as we clinched first place among the participants and our game was acclaimed as the top game of the year."}}),u=new ce({props:{imageName:"safari.jpeg",projectName:"Hangout Safari",description:"Our team crafted a project tailored to support students grappling with social anxiety. We built an immersive 3D safari experience where they can engage with various scenarios and collect virtual animals based on their social interactions. Our endeavor caught the attention of a panel of investors, who selected our project for showcasing, considering it as a potential investment opportunity."}}),I=new ce({props:{imageName:"pzem.jpg",projectName:"Dashboard for PZEM",description:"I collaborated with a team to develop a dashboard application for PZEM, which provided insights into energy production and sales data. The application offered a comprehensive overview of energy-related metrics, enabling users to track and analyze their energy consumption and sales in real-time."}}),p=new ce({props:{imageName:"hackathon.jpeg",projectName:"Hackathon",description:"During a recent Hackathon, our team innovated by crafting a captivating 3D interactive screensaver for JRCZ. This screensaver featured a luminous globe that dynamically expanded to reveal the facilities of the building whenever triggered by clapping."}}),S=new ce({props:{imageName:"pco.png",projectName:"Program- & Career Orientation",description:"I've launched my inaugural portfolio website, marking an exciting step in my journey. Through this project, I've gained valuable insights into articulating my strengths and weaknesses, and honed my skills in crafting a website that authentically represents who I am as an individual."}}),{c(){e=m("section"),t=m("div"),a=m("figure"),i=w(),o=m("h1"),l=W("Projects"),y=w(),d=m("div"),H(v.$$.fragment),h=w(),H(E.$$.fragment),b=w(),H(u.$$.fragment),_=w(),H(I.$$.fragment),j=w(),H(p.$$.fragment),P=w(),H(S.$$.fragment),this.h()},l($){e=f($,"SECTION",{class:!0,id:!0});var L=g(e);t=f(L,"DIV",{class:!0,id:!0});var C=g(t);a=f(C,"FIGURE",{}),g(a).forEach(c),i=x(C),o=f(C,"H1",{class:!0});var Z=g(o);l=Y(Z,"Projects"),Z.forEach(c),y=x(C),d=f(C,"DIV",{id:!0,class:!0});var N=g(d);M(v.$$.fragment,N),h=x(N),M(E.$$.fragment,N),b=x(N),M(u.$$.fragment,N),_=x(N),M(I.$$.fragment,N),j=x(N),M(p.$$.fragment,N),P=x(N),M(S.$$.fragment,N),N.forEach(c),C.forEach(c),L.forEach(c),this.h()},h(){s(o,"class","SC_title z-10 text-[8rem] text-white justify-center"),s(d,"id","cardContainer"),s(d,"class","SC_content top-[50rem] opacity-0 z-[49] px-[38rem] items-center text-4xl gap-[20rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"),s(t,"class","SC_inner bg-zinc-900"),s(t,"id","section_1"),s(e,"class","ScrollPics "),s(e,"id","Projects")},m($,L){te($,e,L),n(e,t),n(t,a),n(t,i),n(t,o),n(o,l),n(t,y),n(t,d),A(v,d,null),n(d,h),A(E,d,null),n(d,b),A(u,d,null),n(d,_),A(I,d,null),n(d,j),A(p,d,null),n(d,P),A(S,d,null),q=!0},p:J,i($){q||(R(v.$$.fragment,$),R(E.$$.fragment,$),R(u.$$.fragment,$),R(I.$$.fragment,$),R(p.$$.fragment,$),R(S.$$.fragment,$),q=!0)},o($){F(v.$$.fragment,$),F(E.$$.fragment,$),F(u.$$.fragment,$),F(I.$$.fragment,$),F(p.$$.fragment,$),F(S.$$.fragment,$),q=!1},d($){$&&c(e),U(v),U(E),U(u),U(I),U(p),U(S)}}}class st extends ne{constructor(e){super(),ae(this,e,null,at,se,{})}}function rt(r){let e,t,a,i,o,l,y,d,v,h,E;return{c(){e=m("div"),t=m("img"),i=w(),o=m("div"),l=m("h1"),y=W(r[2]),d=w(),v=m("p"),h=W(r[3]),this.h()},l(b){e=f(b,"DIV",{id:!0,class:!0});var u=g(e);t=f(u,"IMG",{src:!0,class:!0,alt:!0}),i=x(u),o=f(u,"DIV",{class:!0});var _=g(o);l=f(_,"H1",{class:!0});var I=g(l);y=Y(I,r[2]),I.forEach(c),_.forEach(c),d=x(u),v=f(u,"P",{class:!0});var j=g(v);h=Y(j,r[3]),j.forEach(c),u.forEach(c),this.h()},h(){oe(t.src,a="src/img/"+r[1])||s(t,"src",a),s(t,"class","mt-5 h-[10rem]"),s(t,"alt",""),s(l,"class","justify-center items-center"),s(o,"class","items-center flex flex-col my-7 text-xl "),s(v,"class","text-justify"),s(e,"id",r[0]),s(e,"class",E=r[4]+" SC_content perspectiveDiv h-[40rem] w-[30rem] bg-white text-black flex flex-col")},m(b,u){te(b,e,u),n(e,t),n(e,i),n(e,o),n(o,l),n(l,y),n(e,d),n(e,v),n(v,h)},p(b,[u]){u&2&&!oe(t.src,a="src/img/"+b[1])&&s(t,"src",a),u&4&&de(y,b[2]),u&8&&de(h,b[3]),u&1&&s(e,"id",b[0]),u&16&&E!==(E=b[4]+" SC_content perspectiveDiv h-[40rem] w-[30rem] bg-white text-black flex flex-col")&&s(e,"class",E)},i:J,o:J,d(b){b&&c(e)}}}function it(r,e,t){let{id:a}=e,{image:i}=e,{title:o}=e,{description:l}=e,{classes:y}=e;return r.$$set=d=>{"id"in d&&t(0,a=d.id),"image"in d&&t(1,i=d.image),"title"in d&&t(2,o=d.title),"description"in d&&t(3,l=d.description),"classes"in d&&t(4,y=d.classes)},[a,i,o,l,y]}class De extends ne{constructor(e){super(),ae(this,e,it,rt,se,{id:0,image:1,title:2,description:3,classes:4})}}function lt(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_,I,j;return v=new De({props:{id:"hz",image:"hz.png",title:"HBO ICT HZ university of applied science",description:`In the first year at HZ University, I learned foundational web development skills including HTML, CSS, and JavaScript, as well as TypeScript for building scalable applications. Additionally, I gained proficiency in PHP and Laravel for server-side development and learned about containerization using Docker.
        In the second year, the curriculum expanded to cover advanced topics such as Svelte for building reactive user interfaces, Microservices architecture for developing scalable and resilient applications, and Data Science with Python for analyzing and interpreting large datasets to extract valuable insights.`,classes:"top-[55rem] left-[42rem] z-50"}}),E=new De({props:{id:"faller",image:"faller.png",title:"Pápai SZC Faller Jenő Technikum",description:`
        During my four years in high school, I specialized in IT, gaining expertise in various areas. I acquired skills in application development using C# and .NET framework, along with proficiency in web development encompassing HTML, JavaScript, CSS, and relevant frameworks. Additionally, I mastered the art of structuring and managing MySQL databases, adept in executing queries for efficient data retrieval. Furthermore, I delved into the Cisco ecosystem, honing my abilities in network design and configuration to ensure optimal security and functionality.`,classes:"top-[80rem] left-[42rem] z-40"}}),{c(){e=m("section"),t=m("div"),a=m("figure"),i=w(),o=m("h2"),l=m("i"),y=W("Education"),d=w(),H(v.$$.fragment),h=w(),H(E.$$.fragment),b=w(),u=m("div"),_=m("div"),I=W("Next card"),this.h()},l(p){e=f(p,"SECTION",{class:!0,id:!0});var P=g(e);t=f(P,"DIV",{class:!0,id:!0});var S=g(t);a=f(S,"FIGURE",{}),g(a).forEach(c),i=x(S),o=f(S,"H2",{class:!0});var q=g(o);l=f(q,"I",{});var $=g(l);y=Y($,"Education"),$.forEach(c),q.forEach(c),d=x(S),M(v.$$.fragment,S),h=x(S),M(E.$$.fragment,S),b=x(S),u=f(S,"DIV",{});var L=g(u);_=f(L,"DIV",{id:!0,class:!0});var C=g(_);I=Y(C,"Next card"),C.forEach(c),L.forEach(c),S.forEach(c),P.forEach(c),this.h()},h(){s(o,"class","SC_title z-10 text-[8rem] text-white justify-center"),s(_,"id","nextCard"),s(_,"class","SC_content rounded-full bg-white h-[5rem] w-[10rem] z-[60] items-center justify-center top-[50rem] left-[54rem] text-black"),s(t,"class","SC_inner bg-zinc-800"),s(t,"id","section_2"),s(e,"class","ScrollPics "),s(e,"id","Education")},m(p,P){te(p,e,P),n(e,t),n(t,a),n(t,i),n(t,o),n(o,l),n(l,y),n(t,d),A(v,t,null),n(t,h),A(E,t,null),n(t,b),n(t,u),n(u,_),n(_,I),j=!0},p:J,i(p){j||(R(v.$$.fragment,p),R(E.$$.fragment,p),j=!0)},o(p){F(v.$$.fragment,p),F(E.$$.fragment,p),j=!1},d(p){p&&c(e),U(v),U(E)}}}class ot extends ne{constructor(e){super(),ae(this,e,null,lt,se,{})}}const ct=""+new URL("../assets/dnd.e49313c2.png",import.meta.url).href,dt=""+new URL("../assets/drawing.d0760674.jpg",import.meta.url).href,mt=""+new URL("../assets/folkDance.6df9c66d.png",import.meta.url).href,ft=""+new URL("../assets/gaming.6ebc4c49.png",import.meta.url).href,ut=""+new URL("../assets/languages.88a4ed83.png",import.meta.url).href,gt=""+new URL("../assets/piano.88c7ce7f.png",import.meta.url).href,ht=""+new URL("../assets/psychology.c80c671e.png",import.meta.url).href,pt=""+new URL("../assets/reading.e291d95f.png",import.meta.url).href;function vt(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_,I,j,p,P,S,q,$,L,C,Z,N,X,O,V,K,z,D,T;return E=new le({props:{imageName:ct,projectName:"DnD",description:"I often engage in Dungeons & Dragons sessions with my friends where I take on the role of the Dungeon Master. This role requires me to think quickly and accurately to respond to my players' actions and decisions."}}),u=new le({props:{imageName:dt,projectName:"Drawing",description:"I find immense joy in expressing myself through creativity. Drawing is my sanctuary, where I can silence my thoughts and immerse myself in the act of creation, bringing my imagination to life."}}),I=new le({props:{imageName:mt,projectName:"Folk Dance",description:"During my time in Hungary, I dedicated eight years to dancing. This art form became a passion as it allowed me to not only exercise physically but also to connect deeply with my cultural roots through movement."}}),p=new le({props:{imageName:ft,projectName:"Gaming",description:"Video games have been a part of my life since childhood, igniting my fascination with their immersive worlds. As a dedicated nerd, I found myself captivated by the intricate realms they offered. It was 'Heroes of Might and Magic III,' my inaugural game, that set me on the journey I'm still traveling today."}}),S=new le({props:{imageName:ut,projectName:"Languages",description:"I've been passionate about languages since childhood, conversing in English at 8. Despite initial struggles with French, I switched to Swedish and attained conversational fluency in Swedish within four years. Although my Swedish skills have waned somewhat, I still retain understanding. Currently, I'm learning Dutch, driven by the diverse perspectives languages offer on the world."}}),$=new le({props:{imageName:gt,projectName:"Music",description:"I began learning the piano at age 7 and continue to play to this day, albeit less frequently due to time constraints. Additionally, I've learned the accordion, recorder, and a Hungarian folk instrument called 'nyenyere.' Music is an essential part of my life; I can't imagine living without it."}}),C=new le({props:{imageName:ht,projectName:"Psychology",description:"As someone on the autism spectrum, socializing was challenging. I found solace in psychology, initially as a coping mechanism, which evolved into a passionate obsession. Unraveling the complexities of the human mind brings me immense joy. I've also learned graphology, often showcasing it as one of my party tricks."}}),N=new le({props:{imageName:pt,projectName:"Reading",description:"I find immense joy in immersing myself in new worlds through reading. Whether it's poetry, crime, fantasy, or sci-fi, I indulge in a wide array of literature. Reading allows me to explore the boundless imagination of others, diving into the worlds they've crafted and the stories they long to share. It's a truly awesome experience to journey through someone else's imagination."}}),{c(){e=m("section"),t=m("div"),a=m("figure"),i=w(),o=m("h2"),l=m("i"),y=W("Hobbies"),d=w(),v=m("div"),h=m("div"),H(E.$$.fragment),b=w(),H(u.$$.fragment),_=w(),H(I.$$.fragment),j=w(),H(p.$$.fragment),P=w(),H(S.$$.fragment),q=w(),H($.$$.fragment),L=w(),H(C.$$.fragment),Z=w(),H(N.$$.fragment),X=w(),O=m("div"),V=m("i"),K=w(),z=m("div"),D=m("i"),this.h()},l(k){e=f(k,"SECTION",{class:!0,id:!0});var Q=g(e);t=f(Q,"DIV",{class:!0,id:!0});var G=g(t);a=f(G,"FIGURE",{}),g(a).forEach(c),i=x(G),o=f(G,"H2",{class:!0});var re=g(o);l=f(re,"I",{});var ee=g(l);y=Y(ee,"Hobbies"),ee.forEach(c),re.forEach(c),d=x(G),v=f(G,"DIV",{class:!0});var ie=g(v);h=f(ie,"DIV",{id:!0,class:!0});var B=g(h);M(E.$$.fragment,B),b=x(B),M(u.$$.fragment,B),_=x(B),M(I.$$.fragment,B),j=x(B),M(p.$$.fragment,B),P=x(B),M(S.$$.fragment,B),q=x(B),M($.$$.fragment,B),L=x(B),M(C.$$.fragment,B),Z=x(B),M(N.$$.fragment,B),B.forEach(c),ie.forEach(c),X=x(G),O=f(G,"DIV",{id:!0,class:!0});var me=g(O);V=f(me,"I",{class:!0,style:!0}),g(V).forEach(c),me.forEach(c),K=x(G),z=f(G,"DIV",{id:!0,class:!0});var fe=g(z);D=f(fe,"I",{class:!0,style:!0}),g(D).forEach(c),fe.forEach(c),G.forEach(c),Q.forEach(c),this.h()},h(){s(o,"class","SC_title justify-center text-white"),s(h,"id","skillGrid"),s(h,"class","grid grid-flow-row gap-[30rem] m-3 mt-6 grid-cols-16 "),s(v,"class","SC_content h-[35rem] w-[30rem] top-[10rem] left-[44rem] cornerBorder overflow-clip"),s(V,"class","fa-solid fa-arrow-right"),Ie(V,"color","#000000"),s(O,"id","nextSkill"),s(O,"class","SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"),s(D,"class","fa-solid fa-arrow-left"),Ie(D,"color","#000000"),s(z,"id","previousSkill"),s(z,"class","SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"),s(t,"class","SC_inner bg-zinc-600"),s(t,"id","section_2"),s(e,"class","ScrollPics "),s(e,"id","Hobbies")},m(k,Q){te(k,e,Q),n(e,t),n(t,a),n(t,i),n(t,o),n(o,l),n(l,y),n(t,d),n(t,v),n(v,h),A(E,h,null),n(h,b),A(u,h,null),n(h,_),A(I,h,null),n(h,j),A(p,h,null),n(h,P),A(S,h,null),n(h,q),A($,h,null),n(h,L),A(C,h,null),n(h,Z),A(N,h,null),n(t,X),n(t,O),n(O,V),n(t,K),n(t,z),n(z,D),T=!0},p:J,i(k){T||(R(E.$$.fragment,k),R(u.$$.fragment,k),R(I.$$.fragment,k),R(p.$$.fragment,k),R(S.$$.fragment,k),R($.$$.fragment,k),R(C.$$.fragment,k),R(N.$$.fragment,k),T=!0)},o(k){F(E.$$.fragment,k),F(u.$$.fragment,k),F(I.$$.fragment,k),F(p.$$.fragment,k),F(S.$$.fragment,k),F($.$$.fragment,k),F(C.$$.fragment,k),F(N.$$.fragment,k),T=!1},d(k){k&&c(e),U(E),U(u),U(I),U(p),U(S),U($),U(C),U(N)}}}class yt extends ne{constructor(e){super(),ae(this,e,null,vt,se,{})}}function bt(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_,I,j,p,P,S,q,$,L,C,Z,N,X,O,V,K,z,D,T;return{c(){e=m("section"),t=m("div"),a=m("figure"),i=w(),o=m("h2"),l=W("Skills"),y=w(),d=m("div"),v=m("div"),h=W("Skills"),E=w(),b=m("div"),u=m("div"),_=m("p"),I=W("displayBackEnd"),j=w(),p=m("div"),P=m("p"),S=W("displayFrontEnd"),q=w(),$=m("div"),L=m("div"),C=m("p"),Z=m("span"),N=w(),X=m("p"),O=w(),V=m("div"),K=m("p"),z=m("span"),D=w(),T=m("p"),this.h()},l(k){e=f(k,"SECTION",{class:!0,id:!0});var Q=g(e);t=f(Q,"DIV",{class:!0,id:!0});var G=g(t);a=f(G,"FIGURE",{}),g(a).forEach(c),i=x(G),o=f(G,"H2",{class:!0});var re=g(o);l=Y(re,"Skills"),re.forEach(c),y=x(G),d=f(G,"DIV",{class:!0});var ee=g(d);v=f(ee,"DIV",{id:!0,class:!0});var ie=g(v);h=Y(ie,"Skills"),ie.forEach(c),E=x(ee),b=f(ee,"DIV",{id:!0,class:!0});var B=g(b);u=f(B,"DIV",{id:!0,class:!0});var me=g(u);_=f(me,"P",{});var fe=g(_);I=Y(fe,"displayBackEnd"),fe.forEach(c),me.forEach(c),j=x(B),p=f(B,"DIV",{id:!0,class:!0});var be=g(p);P=f(be,"P",{});var Ee=g(P);S=Y(Ee,"displayFrontEnd"),Ee.forEach(c),be.forEach(c),B.forEach(c),q=x(ee),$=f(ee,"DIV",{class:!0});var ge=g($);L=f(ge,"DIV",{});var he=g(L);C=f(he,"P",{id:!0,class:!0});var we=g(C);Z=f(we,"SPAN",{id:!0,class:!0}),g(Z).forEach(c),we.forEach(c),N=x(he),X=f(he,"P",{id:!0,class:!0}),g(X).forEach(c),he.forEach(c),O=x(ge),V=f(ge,"DIV",{id:!0,class:!0});var pe=g(V);K=f(pe,"P",{id:!0,class:!0});var xe=g(K);z=f(xe,"SPAN",{id:!0,class:!0}),g(z).forEach(c),xe.forEach(c),D=x(pe),T=f(pe,"P",{id:!0,class:!0}),g(T).forEach(c),pe.forEach(c),ge.forEach(c),ee.forEach(c),G.forEach(c),Q.forEach(c),this.h()},h(){s(o,"class","SC_title justify-center text-white"),s(v,"id","skillIntelisense"),s(v,"class","hidden absolute left-[30rem] top-[12rem] w-[20rem] h-[3rem] bg-gray-500 bg-opacity-50 py-1 text-4xl"),s(u,"id","displayBack"),s(u,"class","py-1 bg-gray-500"),s(p,"id","displayFront"),s(p,"class","py-1"),s(b,"id","intelisense"),s(b,"class","hidden absolute left-[61.5rem] top-[12rem] w-[20rem] h-[7rem] bg-black bg-opacity-50 flex-col gap-2 text-4xl"),s(Z,"id","firstSkillSpan"),s(Z,"class","text-green-500"),s(C,"id","backEndP"),s(C,"class","text-4xl"),s(X,"id","backEndTree"),s(X,"class","text-3xl mt-[1rem] ml-[8rem]"),s(z,"id","secondSkillSpan"),s(z,"class","text-green-500"),s(K,"id","frontEndP"),s(K,"class","text-4xl"),s(T,"id","frontEndTree"),s(T,"class","text-3xl mt-[1rem] ml-[8rem]"),s(V,"id","secondDiv"),s(V,"class","hidden"),s($,"class","flex flex-row mt-[10rem] gap-[14rem]"),s(d,"class","SC_content justify-center"),s(t,"class","SC_inner bg-zinc-700"),s(t,"id","section_2"),s(e,"class","ScrollPics"),s(e,"id","Skills")},m(k,Q){te(k,e,Q),n(e,t),n(t,a),n(t,i),n(t,o),n(o,l),n(t,y),n(t,d),n(d,v),n(v,h),n(d,E),n(d,b),n(b,u),n(u,_),n(_,I),n(b,j),n(b,p),n(p,P),n(P,S),n(d,q),n(d,$),n($,L),n(L,C),n(C,Z),n(L,N),n(L,X),n($,O),n($,V),n(V,K),n(K,z),n(V,D),n(V,T)},p:J,i:J,o:J,d(k){k&&c(e)}}}class Et extends ne{constructor(e){super(),ae(this,e,null,bt,se,{})}}function wt(r,e,t){const a=r.slice();return a[0]=e[t],a[2]=t,a}function xt(r){let e;return{c(){e=m("div"),this.h()},l(t){e=f(t,"DIV",{class:!0}),g(e).forEach(c),this.h()},h(){s(e,"class","circle")},m(t,a){te(t,e,a)},p:J,d(t){t&&c(e)}}}function It(r){let e,t,a,i,o,l,y,d,v,h,E,b,u,_,I,j,p,P,S,q,$,L,C,Z,N,X,O,V,K={length:20},z=[];for(let D=0;D<K.length;D+=1)z[D]=xt(wt(r,K,D));return S=new et({}),$=new st({}),C=new ot({}),N=new Et({}),O=new yt({}),{c(){e=m("div");for(let D=0;D<z.length;D+=1)z[D].c();t=w(),a=m("div"),i=m("a"),o=m("div"),l=w(),y=m("a"),d=m("div"),v=w(),h=m("a"),E=m("div"),b=w(),u=m("a"),_=m("div"),I=w(),j=m("a"),p=m("div"),P=w(),H(S.$$.fragment),q=w(),H($.$$.fragment),L=w(),H(C.$$.fragment),Z=w(),H(N.$$.fragment),X=w(),H(O.$$.fragment),this.h()},l(D){e=f(D,"DIV",{class:!0});var T=g(e);for(let B=0;B<z.length;B+=1)z[B].l(T);t=x(T),a=f(T,"DIV",{class:!0});var k=g(a);i=f(k,"A",{href:!0,id:!0,class:!0});var Q=g(i);o=f(Q,"DIV",{class:!0}),g(o).forEach(c),Q.forEach(c),l=x(k),y=f(k,"A",{href:!0,id:!0,class:!0});var G=g(y);d=f(G,"DIV",{class:!0}),g(d).forEach(c),G.forEach(c),v=x(k),h=f(k,"A",{href:!0,id:!0,class:!0});var re=g(h);E=f(re,"DIV",{class:!0}),g(E).forEach(c),re.forEach(c),b=x(k),u=f(k,"A",{href:!0,id:!0,class:!0});var ee=g(u);_=f(ee,"DIV",{class:!0}),g(_).forEach(c),ee.forEach(c),I=x(k),j=f(k,"A",{href:!0,id:!0,class:!0});var ie=g(j);p=f(ie,"DIV",{class:!0}),g(p).forEach(c),ie.forEach(c),k.forEach(c),P=x(T),M(S.$$.fragment,T),q=x(T),M($.$$.fragment,T),L=x(T),M(C.$$.fragment,T),Z=x(T),M(N.$$.fragment,T),X=x(T),M(O.$$.fragment,T),T.forEach(c),this.h()},h(){s(o,"class","w-[30px] h-[30px] z-[555555] bg-white rounded-full"),s(i,"href","#Home"),s(i,"id","1"),s(i,"class","navBar"),s(d,"class","w-[20px] h-[20px] z-[555555] bg-[#e5d9e7] rounded-full"),s(y,"href","#Projects"),s(y,"id","2"),s(y,"class","navBar"),s(E,"class","w-[18px] h-[18px] z-[555555] bg-[#b3bad9] rounded-full"),s(h,"href","#Education"),s(h,"id","3"),s(h,"class","navBar"),s(_,"class","w-[16px] h-[16px] z-[555555] bg-[#69a2bf] rounded-full"),s(u,"href","#Skills"),s(u,"id","4"),s(u,"class","navBar"),s(p,"class","w-[14px] h-[14px] z-[555555] bg-[#3d97a8] rounded-full"),s(j,"href","#Hobbies"),s(j,"id","5"),s(j,"class","navBar"),s(a,"class","fixed z-50 h-screen flex flex-col right-5 gap-4 justify-center float-right border-none items-center"),s(e,"class","")},m(D,T){te(D,e,T);for(let k=0;k<z.length;k+=1)z[k]&&z[k].m(e,null);n(e,t),n(e,a),n(a,i),n(i,o),n(a,l),n(a,y),n(y,d),n(a,v),n(a,h),n(h,E),n(a,b),n(a,u),n(u,_),n(a,I),n(a,j),n(j,p),n(e,P),A(S,e,null),n(e,q),A($,e,null),n(e,L),A(C,e,null),n(e,Z),A(N,e,null),n(e,X),A(O,e,null),V=!0},p:J,i(D){V||(R(S.$$.fragment,D),R($.$$.fragment,D),R(C.$$.fragment,D),R(N.$$.fragment,D),R(O.$$.fragment,D),V=!0)},o(D){F(S.$$.fragment,D),F($.$$.fragment,D),F(C.$$.fragment,D),F(N.$$.fragment,D),F(O.$$.fragment,D),V=!1},d(D){D&&c(e),Be(z,D),U(S),U($),U(C),U(N),U(O)}}}function _t(r){return ze(()=>{Ae(),Re(),Fe(),Ge(),qe(),Oe()}),[]}class kt extends ne{constructor(e){super(),ae(this,e,_t,It,se,{})}}export{kt as component};
