<script>
    import Card from "$lib/components/Card.svelte";
    import Example from "$lib/components/Example.svelte";
    import { onMount } from "svelte";
    import { init, navbarAnimation } from "../main";

    onMount(()=>{
    init();
    navbarAnimation()
    });
    
</script>

<div class="">
    <!-- Mouse effect -->
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>


    <!-- Navigation -->

        <div class="  fixed z-50 h-screen  flex flex-col right-5 gap-4 justify-center float-right border-none">
            <a href="#Home" id="1" class="navBar"><div class=" w-5 h-5  z-[555555] bg-white rounded-full"></div></a>
            <a href="#Projects" id="2" class="navBar"><div class=" w-5 h-5  z-[555555] bg-gray-200 rounded-full"></div></a>
            <a href="#Education" id="3" class="navBar"><div class=" w-5 h-5  z-[555555] bg-gray-300 rounded-full"></div></a>
            <a href="#Skills" id="4" class="navBar"><div class=" w-5 h-5  z-[555555] bg-gray-400 rounded-full"></div></a>
            <a href="#Hobbies" id="5" class="navBar"><div class=" w-5 h-5  z-[555555] bg-gray-500 rounded-full"></div></a>
        </div>
    
    <div class="">
        <section class="ScrollPics" id="Home">
            <!-- SC=ScrollPics -->
            <div class="SC_inner" id="section_0">
                <figure></figure>
                <h1 class="SC_title z-10">Welcome to my webpage</h1>
                <img class="h-[30%] flex fixed right-[42%]" src="/src/img/canvalogo.png" alt="">
                <!-- <img class="bottom-0 right-[38%] flex fixed" src="/src/img/wave.gif" alt=""> -->
            </div>
        </section>
        <section class="ScrollPics" id="Projects">
            <!-- SC=ScrollPics -->
            <div class="SC_inner bg-zinc-900" id="section_1">
                <figure></figure>
                <h2 class="SC_title">Projects</h2>
            </div>
        </section>
        <section class="ScrollPics" id="Education">
            <!-- SC=ScrollPics -->
            <div class="SC_inner bg-zinc-800" id="section_2">
                <figure></figure>
                <h2 class="SC_title"><i>Education</i></h2>
            </div>
        </section>
        <section class="ScrollPics" id="Skills">
            <!-- SC=ScrollPics -->
            <div class="SC_inner bg-zinc-700" id="section_2">
                <figure></figure>
                <h2 class="SC_title"><i>Skills</i></h2>
            </div>
        </section>
        <section class="ScrollPics bg-zinc-600" id="Hobbies">
            <!-- SC=ScrollPics -->
            <div class="SC_inner" id="section_2">
                <figure></figure>
                <h2 class="SC_title"><i>Hobbies</i></h2>
            </div>
        </section>
    </div>

    <!-- <div class="snap-y snap-mandatory h-screen flex flex-col flex-nowrap overflow-y-scroll no-scrollbar">
        <div id="Home" class=" bg-gray-400 text-black snap-center h-screen  flex-shrink-0 flex items-center justify-center text-8xl">Home</div>
        <div id="Projects" class="bg-white text-black snap-center h-screen flex-shrink-0  flex items-center justify-center text-8xl">Projects</div>
        <div id="Education" class="bg-white text-black snap-center h-screen flex-shrink-0  flex items-center justify-center text-8xl">Education</div>
        <div id="Skills" class="bg-white text-black snap-center h-screen flex-shrink-0  flex items-center justify-center text-8xl">Skills</div>
        <div id="Hobbies" class="bg-white text-black snap-center h-screen flex-shrink-0 flex items-center justify-center text-8xl">Hobbies</div>
</div> -->
        <!-- <div
            class="snap-x snap-mandatory h-screen flex gap-10 flex-nowrap overflow-scroll mx-[2rem]"
        >
            {#each { length: 10 } as _, i}
                <Card />
            {/each}
        </div> -->
</div>

<style>
</style>
