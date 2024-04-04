<script>

    import Card from "../Hobby.svelte";

</script>
<section class="ScrollPics " id="Projects">
    <!-- SC=ScrollPics -->
    <div class="SC_inner bg-zinc-900" id="section_1">
        <figure></figure>
        <h1 class="SC_title z-10 text-[8rem] text-white justify-center">Projects</h1>
        <div id="cardContainer" class="SC_content top-[50rem] opacity-0 z-[49] px-[38rem] items-center text-4xl gap-[20rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory">
            <Card
            imageName = "pco.png"
            projectName = "Program- & Career Orientation"
            description = "I have created my first ever portfolio website where I learned how to express my strenghts and weaknesses, and how to design a website that shows who am I as a person."
            />
            <Card 
            imageName = "curiousVillage.jpg"
            projectName = "Curious Village"
            description = "I have created an object oriented game in Typescript with a team, where we taught children about the dangers of digital illiteracy."
            />
            <Card 
            imageName = "pzem.jpg"
            projectName = "Dashboard for PZEM"
            description = "I took part in a team that created a dashboard application for PZEM that showed data based on energy creation and sold energy"
            />
            <Card 
            imageName = "safari.png"
            projectName = "Hangout Safari"
            description = "This is a project was made for students who struggle with social anxiety and we made an interactable 3D safari where they can collect animals based on their social interactions."
            />
            <Card
            imageName ="boat.png"
            projectName = "Boat Parking Rent"
            description = "lorem"
            />
        </div>
    </div>
</section>