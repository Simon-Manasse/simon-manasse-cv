<script>
    import Hobby from "../Hobby.svelte";

</script>
<section class="ScrollPics " id="Skills">
    <!-- SC=ScrollPics -->
    <div class="SC_inner bg-zinc-700" id="section_2">
        <figure></figure>
        <h2 class="SC_title justify-center text-white"><i>Hobbies</i></h2>
        <div class="SC_content  h-[35rem] w-[30rem] top-[10rem]  left-[44rem] cornerBorder overflow-clip">
        <div  id="skillGrid" class=" grid grid-flow-row gap-[30rem]  m-3 mt-6 grid-cols-16 ">
            <Hobby imageName="arch.png" projectName="Linux based systems" description="I am using arch on as a daily os, so I have a good understanding on linux based systems and how to work with them"/>
            <Hobby imageName="bash.png" projectName="Bash" description="I have wrote my own bash scripts, one of them was a microservice generator, which creates instant access to a supabase database. It also generated the important docker files that are neccessary to dockerize the system."/>
            <Hobby imageName="java.png" projectName="Java" description="I've used java to create an online book store, applying the refactoring principals"/>
            <Hobby imageName="python.png" projectName="python" description=""/>
            <Hobby imageName="svelte.png" projectName="SvelteKit" description=""/>
            <Hobby imageName="laravel.png" projectName="Laravel" description=""/>
            <Hobby imageName="nodeJs.png" projectName="NodeJs" description=""/>
            <Hobby imageName="blender.png" projectName="Blender" description=""/>
            <Hobby imageName="docker.png" projectName="Docker" description=""/>
            <Hobby imageName="php.png" projectName="PHP" description=""/>
            <Hobby imageName="jsTs.png" projectName="JavaScript & TypeScript" description=""/>
            <Hobby imageName="cs.png" projectName="C#" description=""/>
            <Hobby imageName="git.png" projectName="Git" description=""/>
            <Hobby imageName="pandas.png" projectName="Pandas" description=""/>
            <Hobby imageName="oop.png" projectName="OOP" description=""/>
            <Hobby imageName="photoshop.png" projectName="Photoshop" description=""/>
           </div>
    </div>
        <div id="nextSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[90rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-right" style="color: #000000;"></i></div>
        <div id="previousSkill" class="SC_content h-[10rem] w-[10rem] bg-white top-[22rem] left-[20rem] z-50 text-black justify-center items-center rounded-full text-6xl"><i class="fa-solid fa-arrow-left" style="color: #000000;"></i></div>
    </div>
</section>