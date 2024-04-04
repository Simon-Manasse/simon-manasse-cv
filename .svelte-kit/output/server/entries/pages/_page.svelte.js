import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, f as each } from "../../chunks/index.js";
const Hobby = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="bg-white text-black mt-[10rem] snap-center w-[40rem] flex-shrink-0 h-[40rem] border-none rounded-lg flex flex-col items-center text-8xl gap-2 overflow-clip"><div class="w-[100%] h-[100%] hover:first:h-[20rem] transition-all duration-300 "><img class="h-[100%] mt-0 top-0 w-[100%] object-cover rounded-t-lg transition-all duration-75" src="${"src/img/logos/" + escape(image, true)}" alt="">

        <div class="w-[100%] h-[100%] flex flex-col items-center"><hr class="my-[2rem] z-[100] w-[30rem] h-[1px] bg-gradient-to-r from-white via-black to-white border-0 rounded-lg">
            <p class="text-4xl">${escape(title)}</p>
            <p class="text-xl mx-5 text-justify">${escape(description)}</p></div></div></div>`;
});
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Home">
    <div class="SC_inner " id="section_0"><figure></figure>
        <img id="logo" class="h-[20%] flex fixed right-[45%] top-[5rem]" src="/src/img/canvalogo.png" alt="">
        <h1 class="SC_title z-10 text-[6rem] text-white items-center justify-center">Welcome to my webpage</h1>
        <hr id="welcomPageLine" class="SC_content mt-[31rem] w-[60rem] left-[50%] ml-[-30rem] h-[3px] margin-auto z-[100] bg-gradient-to-r from-black via-white to-black border-0 rounded-full ">
        <p class="SC_content justify-center items-center text-4xl mt-[20rem]">Created by Simon Manassé</p></div></section>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Projects">
    <div class="SC_inner bg-zinc-900" id="section_1"><figure></figure>
        <h1 class="SC_title z-10 text-[8rem] text-white justify-center">Projects</h1>
        <div id="cardContainer" class="SC_content top-[50rem] opacity-0 z-[49] px-[38rem] items-center text-4xl gap-[20rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory">${validate_component(Hobby, "Card").$$render(
    $$result,
    {
      imageName: "pco.png",
      projectName: "Program- & Career Orientation",
      description: "I have created my first ever portfolio website where I learned how to express my strenghts and weaknesses, and how to design a website that shows who am I as a person."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Card").$$render(
    $$result,
    {
      imageName: "curiousVillage.jpg",
      projectName: "Curious Village",
      description: "I have created an object oriented game in Typescript with a team, where we taught children about the dangers of digital illiteracy."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Card").$$render(
    $$result,
    {
      imageName: "pzem.jpg",
      projectName: "Dashboard for PZEM",
      description: "I took part in a team that created a dashboard application for PZEM that showed data based on energy creation and sold energy"
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Card").$$render(
    $$result,
    {
      imageName: "safari.png",
      projectName: "Hangout Safari",
      description: "This is a project was made for students who struggle with social anxiety and we made an interactable 3D safari where they can collect animals based on their social interactions."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Card").$$render(
    $$result,
    {
      imageName: "boat.png",
      projectName: "Boat Parking Rent",
      description: "lorem"
    },
    {},
    {}
  )}</div></div></section>`;
});
const EducationCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { image } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  let { classes } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<div${add_attribute("id", id, 0)} class="${escape(classes, true) + " SC_content perspectiveDiv h-[40rem] w-[30rem] bg-white text-black flex flex-col"}"><img src="${"src/img/" + escape(image, true)}" class="mt-5 h-[10rem]" alt="">
    <div class="items-center flex flex-col my-7 text-xl "><h1 class="justify-center items-center">${escape(title)}</h1></div>
    <p class="text-justify">${escape(description)}</p></div>`;
});
const Education = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Education">
    <div class="SC_inner bg-zinc-800" id="section_2"><figure></figure>
        <h2 class="SC_title z-10 text-[8rem] text-white justify-center"><i>Education</i></h2>
        ${validate_component(EducationCards, "EducationCards").$$render(
    $$result,
    {
      id: "hz",
      image: "hz.png",
      title: "HBO ICT HZ university of applied science",
      description: "In the first year at HZ University, I learned foundational web development skills including HTML, CSS, and JavaScript, as well as TypeScript for building scalable applications. Additionally, I gained proficiency in PHP and Laravel for server-side development and learned about containerization using Docker.\n        In the second year, the curriculum expanded to cover advanced topics such as Svelte for building reactive user interfaces, Microservices architecture for developing scalable and resilient applications, and Data Science with Python for analyzing and interpreting large datasets to extract valuable insights.",
      classes: "top-[8rem] left-[42rem] z-50"
    },
    {},
    {}
  )}
        ${validate_component(EducationCards, "EducationCards").$$render(
    $$result,
    {
      id: "faller",
      image: "faller.png",
      title: "Pápai SZC Faller Jenő Technikum",
      description: "\n        During my four years in high school, I specialized in IT, gaining expertise in various areas. I acquired skills in application development using C# and .NET framework, along with proficiency in web development encompassing HTML, JavaScript, CSS, and relevant frameworks. Additionally, I mastered the art of structuring and managing MySQL databases, adept in executing queries for efficient data retrieval. Furthermore, I delved into the Cisco ecosystem, honing my abilities in network design and configuration to ensure optimal security and functionality.",
      classes: "top-[9rem] left-[42rem] z-40"
    },
    {},
    {}
  )}
        <div><div id="nextCard" class="SC_content rounded-full bg-white h-[5rem] w-[10rem] z-[60] items-center justify-center top-[50rem] left-[54rem] text-black">Next card</div></div></div></section>`;
});
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class=""><div class="hex"></div></div></div>`;
});
const Hobbies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Skills">
    <div class="SC_inner bg-zinc-700" id="section_2"><figure></figure>
        <h2 class="SC_title justify-center text-white"><i>Hobbies</i></h2>
        <div class="SC_content h-[35rem] w-[30rem] top-[10rem] left-[44rem] cornerBorder overflow-clip"><div id="skillGrid" class="grid grid-flow-row gap-[30rem] m-3 mt-6 grid-cols-16 ">${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "arch.png",
      title: "Linux based systems",
      description: "I am using arch on as a daily os, so I have a good understanding on linux based systems and how to work with them"
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "bash.png",
      title: "Bash",
      description: "I have wrote my own bash scripts, one of them was a microservice generator, which creates instant access to a supabase database. It also generated the important docker files that are neccessary to dockerize the system."
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "java.png",
      title: "Java",
      description: "I've used java to create an online book store, applying the refactoring principals"
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render($$result, { image: "python.png", title: "python" }, {}, {})}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "svelte.png",
      title: "SvelteKit",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "laravel.png",
      title: "Laravel",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "nodeJs.png",
      title: "NodeJs",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "blender.png",
      title: "Blender",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "docker.png",
      title: "Docker",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "php.png",
      title: "PHP",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "jsTs.png",
      title: "JavaScript & TypeScript",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "cs.png",
      title: "C#",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "git.png",
      title: "Git",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "pandas.png",
      title: "Pandas",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "oop.png",
      title: "OOP",
      description: ""
    },
    {},
    {}
  )}
            ${validate_component(Skill, "Hobby").$$render(
    $$result,
    {
      image: "photoshop.png",
      title: "Photoshop",
      description: ""
    },
    {},
    {}
  )}</div></div>
        <div id="nextSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></div>
        <div id="previousSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></div></div></section>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Hobbies">
    <div class="SC_inner bg-zinc-600" id="section_2"><figure></figure>
        <h2 class="SC_title justify-center text-white"><i>Skills</i></h2>
        <div class="ml-[35rem] SC_content mt-[5rem] flex">${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
          ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
          ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
          ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}</div>
        <div class="SC_content ml-[28.5rem] mt-[16rem] flex">${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}</div>
        <div class="ml-[35rem] SC_content mt-[27rem] flex">${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}</div>
        <div class="SC_content ml-[28.5rem] mt-[38rem] flex">${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}
            ${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}</div>
        <div class="ml-[35rem] SC_content mt-[5rem] flex">${validate_component(Skill, "Skill").$$render($$result, {}, {}, {})}</div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="">
    ${each({ length: 20 }, (_, i) => {
    return `<div class="circle"></div>`;
  })}


    

        <div class="fixed z-50 h-screen flex flex-col right-5 gap-4 justify-center float-right border-none items-center"><a href="#Home" id="1" class="navBar"><div class="w-[30px] h-[30px] z-[555555] bg-white rounded-full"></div></a>
            <a href="#Projects" id="2" class="navBar"><div class="w-[20px] h-[20px] z-[555555] bg-[#e5d9e7] rounded-full"></div></a>
            <a href="#Education" id="3" class="navBar"><div class="w-[18px] h-[18px] z-[555555] bg-[#b3bad9] rounded-full"></div></a>
            <a href="#Skills" id="4" class="navBar"><div class="w-[16px] h-[16px] z-[555555] bg-[#69a2bf] rounded-full"></div></a>
            <a href="#Hobbies" id="5" class="navBar"><div class="w-[14px] h-[14px] z-[555555] bg-[#3d97a8] rounded-full"></div></a></div>
    
        ${validate_component(Welcome, "Welcome").$$render($$result, {}, {}, {})}
        ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
        ${validate_component(Education, "Education").$$render($$result, {}, {}, {})}
        ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}
        ${validate_component(Hobbies, "Hobbies").$$render($$result, {}, {}, {})}
    </div>`;
});
export {
  Page as default
};
