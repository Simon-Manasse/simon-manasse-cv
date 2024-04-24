<script>
    import Hobby from "../Hobby.svelte";

    import dnd from "../../../img/hobbies/dnd.png"
    import drawing from "../../../img/hobbies/drawing.jpg";
    import folkDance from "../../../img/hobbies/folkDance.png";
    import gaming from "../../../img/hobbies/gaming.png";
    import languages from "../../../img/hobbies/languages.png";
    import piano from "../../../img/hobbies/piano.png";
    import psychology from "../../../img/hobbies/psychology.png";
    import reading from "../../../img/hobbies/reading.png";
</script>
<section class="ScrollPics " id="Hobbies">
    <!-- SC=ScrollPics -->
    <div class="SC_inner bg-zinc-600" id="section_2">
        <figure></figure>
        <h2 class="SC_title justify-center text-white"><i>Hobbies</i></h2>
        <div class="SC_content  h-[35rem] w-[30rem] top-[10rem]  left-[44rem] cornerBorder overflow-clip">
        <div  id="skillGrid" class=" grid grid-flow-row gap-[30rem]  m-3 mt-6 grid-cols-16 ">
            <Hobby imageName={dnd} projectName="DnD" description="I often engage in Dungeons & Dragons sessions with my friends where I take on the role of the Dungeon Master. This role requires me to think quickly and accurately to respond to my players' actions and decisions."/>
            <Hobby imageName={drawing} projectName="Drawing" description="I find immense joy in expressing myself through creativity. Drawing is my sanctuary, where I can silence my thoughts and immerse myself in the act of creation, bringing my imagination to life."/>
            <Hobby imageName={folkDance} projectName="Folk Dance" description="During my time in Hungary, I dedicated eight years to dancing. This art form became a passion as it allowed me to not only exercise physically but also to connect deeply with my cultural roots through movement."/>
            <Hobby imageName={gaming} projectName="Gaming" description="Video games have been a part of my life since childhood, igniting my fascination with their immersive worlds. As a dedicated nerd, I found myself captivated by the intricate realms they offered. It was 'Heroes of Might and Magic III,' my inaugural game, that set me on the journey I'm still traveling today."/>
            <Hobby imageName={languages} projectName="Languages" description="I've been passionate about languages since childhood, conversing in English at 8. Despite initial struggles with French, I switched to Swedish and attained conversational fluency in Swedish within four years. Although my Swedish skills have waned somewhat, I still retain understanding. Currently, I'm learning Dutch, driven by the diverse perspectives languages offer on the world."/>
            <Hobby imageName={piano} projectName="Music" description="I began learning the piano at age 7 and continue to play to this day, albeit less frequently due to time constraints. Additionally, I've learned the accordion, recorder, and a Hungarian folk instrument called 'nyenyere.' Music is an essential part of my life; I can't imagine living without it."/>
            <Hobby imageName={psychology} projectName="Psychology" description="As someone on the autism spectrum, socializing was challenging. I found solace in psychology, initially as a coping mechanism, which evolved into a passionate obsession. Unraveling the complexities of the human mind brings me immense joy. I've also learned graphology, often showcasing it as one of my party tricks."/>
            <Hobby imageName={reading} projectName="Reading" description="I find immense joy in immersing myself in new worlds through reading. Whether it's poetry, crime, fantasy, or sci-fi, I indulge in a wide array of literature. Reading allows me to explore the boundless imagination of others, diving into the worlds they've crafted and the stories they long to share. It's a truly awesome experience to journey through someone else's imagination."/>
                
        </div>
    </div>
        <div id="nextSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></div>
        <div id="previousSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></div>
    </div>
</section>