import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute, f as each } from "../../chunks/index.js";
const Hobby = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageName } = $$props;
  let { projectName } = $$props;
  let { description } = $$props;
  if ($$props.imageName === void 0 && $$bindings.imageName && imageName !== void 0)
    $$bindings.imageName(imageName);
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="w-[25rem]"><div class="h-[15rem] flex justify-center items-center"><img class="h-[15rem] " src="${"src/img/hobbies/" + escape(imageName, true)}" alt=""></div>

    <div class="flex justify-center items-center"><p class="text-4xl py-4">${escape(projectName)}</p></div>
        <p class="">${escape(description)}</p></div>`;
});
const Welcome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Home">
    <div class="SC_inner " id="section_0"><figure></figure>
        <img id="logo" class="h-[20%] flex fixed right-[45%] top-[5rem]" src="/src/img/canvalogo.png" alt="">
        <h1 class="SC_title z-10 text-[6rem] text-white items-center justify-center">Welcome to my webpage</h1>
        <hr id="welcomPageLine" class="SC_content mt-[34rem] w-[60rem] left-[50%] ml-[-30rem] h-[3px] margin-auto z-[100] bg-gradient-to-r from-black via-white to-black border-0 rounded-full ">
        <p class="SC_content justify-center items-center text-4xl mt-[20rem]">Created by Simon Manassé</p></div></section>`;
});
const ProjectCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageName } = $$props;
  let { projectName } = $$props;
  let { description } = $$props;
  if ($$props.imageName === void 0 && $$bindings.imageName && imageName !== void 0)
    $$bindings.imageName(imageName);
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="bg-white text-black mt-[10rem] snap-center w-[40rem] flex-shrink-0 h-[40rem] border-none rounded-lg flex flex-col items-center text-8xl gap-2 overflow-clip"><div class="w-[100%] h-[100%] hover:first:h-[20rem] transition-all duration-300 "><img class="h-[100%] mt-0 top-0 w-[100%] object-cover rounded-t-lg transition-all duration-75" src="${"src/img/" + escape(imageName, true)}" alt="">

        <div class="w-[100%] h-[100%] flex flex-col items-center"><hr class="my-[2rem] z-[100] w-[30rem] h-[1px] bg-gradient-to-r from-white via-black to-white border-0 rounded-lg">
            <p class="text-4xl">${escape(projectName)}</p>
            <p class="text-xl mx-5 text-justify">${escape(description)}</p></div></div></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Projects">
    <div class="SC_inner bg-zinc-900" id="section_1"><figure></figure>
        <h1 class="SC_title z-10 text-[8rem] text-white justify-center">Projects</h1>
        <div id="cardContainer" class="SC_content top-[50rem] opacity-0 z-[49] px-[38rem] items-center text-4xl gap-[20rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory">${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "boat.png",
      projectName: "Boat Parking Rent",
      description: "My friends and I have nearly completed a website using PHP. It's designed for renting boat parking spaces. Users can both rent out their own spaces and find available spots to rent. We've deployed the site already, and now we're just adding some final touches."
    },
    {},
    {}
  )}
            ${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "curiousVillage.jpg",
      projectName: "Curious Village",
      description: "My team and I developed an object-oriented game using Typescript aimed at educating children about the perils of digital illiteracy. Our efforts paid off as we clinched first place among the participants and our game was acclaimed as the top game of the year."
    },
    {},
    {}
  )}
            ${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "safari.jpeg",
      projectName: "Hangout Safari",
      description: "Our team crafted a project tailored to support students grappling with social anxiety. We built an immersive 3D safari experience where they can engage with various scenarios and collect virtual animals based on their social interactions. Our endeavor caught the attention of a panel of investors, who selected our project for showcasing, considering it as a potential investment opportunity."
    },
    {},
    {}
  )}
            ${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "pzem.jpg",
      projectName: "Dashboard for PZEM",
      description: "I collaborated with a team to develop a dashboard application for PZEM, which provided insights into energy production and sales data. The application offered a comprehensive overview of energy-related metrics, enabling users to track and analyze their energy consumption and sales in real-time."
    },
    {},
    {}
  )}
            ${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "hackathon.jpeg",
      projectName: "Hackathon",
      description: "During a recent Hackathon, our team innovated by crafting a captivating 3D interactive screensaver for JRCZ. This screensaver featured a luminous globe that dynamically expanded to reveal the facilities of the building whenever triggered by clapping."
    },
    {},
    {}
  )}
            ${validate_component(ProjectCards, "ProjectCards").$$render(
    $$result,
    {
      imageName: "pco.png",
      projectName: "Program- & Career Orientation",
      description: "I've launched my inaugural portfolio website, marking an exciting step in my journey. Through this project, I've gained valuable insights into articulating my strengths and weaknesses, and honed my skills in crafting a website that authentically represents who I am as an individual."
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
      classes: "top-[55rem] left-[42rem] z-50"
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
      classes: "top-[80rem] left-[42rem] z-40"
    },
    {},
    {}
  )}
        <div><div id="nextCard" class="SC_content rounded-full bg-white h-[5rem] w-[10rem] z-[60] items-center justify-center top-[50rem] left-[54rem] text-black">Next card</div></div></div></section>`;
});
const Hobbies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics " id="Hobbies">
    <div class="SC_inner bg-zinc-600" id="section_2"><figure></figure>
        <h2 class="SC_title justify-center text-white"><i>Hobbies</i></h2>
        <div class="SC_content h-[35rem] w-[30rem] top-[10rem] left-[44rem] cornerBorder overflow-clip"><div id="skillGrid" class="grid grid-flow-row gap-[30rem] m-3 mt-6 grid-cols-16 ">${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "dnd.png",
      projectName: "DnD",
      description: "I often engage in Dungeons & Dragons sessions with my friends where I take on the role of the Dungeon Master. This role requires me to think quickly and accurately to respond to my players' actions and decisions."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "drawing.jpg",
      projectName: "Drawing",
      description: "I find immense joy in expressing myself through creativity. Drawing is my sanctuary, where I can silence my thoughts and immerse myself in the act of creation, bringing my imagination to life."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "folkDance.png",
      projectName: "Folk Dance",
      description: "During my time in Hungary, I dedicated eight years to dancing. This art form became a passion as it allowed me to not only exercise physically but also to connect deeply with my cultural roots through movement."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "gaming.png",
      projectName: "Gaming",
      description: "Video games have been a part of my life since childhood, igniting my fascination with their immersive worlds. As a dedicated nerd, I found myself captivated by the intricate realms they offered. It was 'Heroes of Might and Magic III,' my inaugural game, that set me on the journey I'm still traveling today."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "languages.png",
      projectName: "Languages",
      description: "I've been passionate about languages since childhood, conversing in English at 8. Despite initial struggles with French, I switched to Swedish and attained conversational fluency in Swedish within four years. Although my Swedish skills have waned somewhat, I still retain understanding. Currently, I'm learning Dutch, driven by the diverse perspectives languages offer on the world."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "piano.png",
      projectName: "Music",
      description: "I began learning the piano at age 7 and continue to play to this day, albeit less frequently due to time constraints. Additionally, I've learned the accordion, recorder, and a Hungarian folk instrument called 'nyenyere.' Music is an essential part of my life; I can't imagine living without it."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "psychology.png",
      projectName: "Psychology",
      description: "As someone on the autism spectrum, socializing was challenging. I found solace in psychology, initially as a coping mechanism, which evolved into a passionate obsession. Unraveling the complexities of the human mind brings me immense joy. I've also learned graphology, often showcasing it as one of my party tricks."
    },
    {},
    {}
  )}
            ${validate_component(Hobby, "Hobby").$$render(
    $$result,
    {
      imageName: "reading.png",
      projectName: "Reading",
      description: "I find immense joy in immersing myself in new worlds through reading. Whether it's poetry, crime, fantasy, or sci-fi, I indulge in a wide array of literature. Reading allows me to explore the boundless imagination of others, diving into the worlds they've crafted and the stories they long to share. It's a truly awesome experience to journey through someone else's imagination."
    },
    {},
    {}
  )}</div></div>
        <div id="nextSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></div>
        <div id="previousSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></div></div></section>`;
});
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="ScrollPics" id="Skills">
    <div class="SC_inner bg-zinc-700" id="section_2"><figure></figure>
        <h2 class="SC_title justify-center text-white">Skills</h2>
        <div class="SC_content justify-center"><div id="skillIntelisense" class="hidden absolute left-[30rem] top-[12rem] w-[20rem] h-[3rem] bg-gray-500 bg-opacity-50 py-1 text-4xl">Skills</div>
            <div id="intelisense" class="hidden absolute left-[61.5rem] top-[12rem] w-[20rem] h-[7rem] bg-black bg-opacity-50 flex-col gap-2 text-4xl"><div id="displayBack" class="py-1 bg-gray-500"><p>displayBackEnd</p></div>
                <div id="displayFront" class="py-1"><p>displayFrontEnd</p></div></div>

            <div class="flex flex-row mt-[10rem] gap-[14rem]"><div><p id="backEndP" class="text-4xl"><span id="firstSkillSpan" class="text-green-500"></span></p>
                    <p id="backEndTree" class="text-3xl mt-[1rem] ml-[8rem]"></p></div>

                <div id="secondDiv" class="hidden"><p id="frontEndP" class="text-4xl"><span id="secondSkillSpan" class="text-green-500"></span></p>
                   <p id="frontEndTree" class="text-3xl mt-[1rem] ml-[8rem]"></p></div></div></div></div></section>`;
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
