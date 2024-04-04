<script>
    import Card from "$lib/components/Hobby.svelte";
    import Example from "$lib/components/Example.svelte";
    import { onMount } from "svelte";
    import {  init, navbarAnimation, navbarScrollAnimation, nextCard, nextSkill, scrollOnMouse, } from "../main";
    import Welcome from "$lib/components/pages/Welcome.svelte";
    import Projects from "$lib/components/pages/Projects.svelte";
    import Education from "$lib/components/pages/Education.svelte";
    import Hobbies from "$lib/components/pages/Hobbies.svelte";
    import Skills from "$lib/components/pages/Skills.svelte";

    onMount(()=>{
    init();
    navbarAnimation()
    navbarScrollAnimation()
    scrollOnMouse()
    nextCard()
    nextSkill()
    });
    
</script>

<div class="">
    <!-- Mouse effect -->
    {#each {length: 20} as _, i}
    <div class="circle"></div>
    {/each}


    <!-- Navigation -->

        <div class="  fixed z-50 h-screen  flex flex-col right-5 gap-4 justify-center float-right border-none items-center">
            <a href="#Home" id="1" class="navBar"><div class=" w-[30px] h-[30px]  z-[555555] bg-white rounded-full"></div></a>
            <a href="#Projects" id="2" class="navBar"><div class=" w-[20px] h-[20px]  z-[555555] bg-[#e5d9e7] rounded-full"></div></a>
            <a href="#Education" id="3" class="navBar"><div class=" w-[18px] h-[18px]  z-[555555] bg-[#b3bad9] rounded-full"></div></a>
            <a href="#Skills" id="4" class="navBar"><div class=" w-[16px] h-[16px]  z-[555555] bg-[#69a2bf] rounded-full"></div></a>
            <a href="#Hobbies" id="5" class="navBar"><div class=" w-[14px] h-[14px]  z-[555555] bg-[#3d97a8] rounded-full"></div></a>
        </div>
    
        <Welcome/>
        <Projects/>
        <Education/>
        <Skills/>
        <Hobbies/>
    </div>

<style>
</style>
