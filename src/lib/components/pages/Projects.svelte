<script>

   import ProjectCards from "../ProjectCards.svelte";
   import boat from "../../../img/boat.png"

</script>
<section class="ScrollPics " id="Projects">
    <!-- SC=ScrollPics -->
    <div class="SC_inner bg-zinc-900" id="section_1">
        <figure></figure>
        <h1 class="SC_title z-10 sm:text-[8rem] text-[4rem] text-white justify-center">Projects</h1>
        <div id="cardContainer" class="SC_content sm:top-[50rem] top-[0rem] opacity-0 z-[49] sm:px-[38rem] items-center sm:text-4xl sm:gap-[20rem] gap-[2rem] flex overflow-x-scroll no-scrollbar snap-x snap-mandatory">
            <ProjectCards
            imageName ="boat.png"
            projectName = "Boat Parking Rent"
            description = "My friends and I have nearly completed a website using PHP. It's designed for renting boat parking spaces. Users can both rent out their own spaces and find available spots to rent. We've deployed the site already, and now we're just adding some final touches."
            />
            <ProjectCards 
            imageName = "curiousVillage.jpg"
            projectName = "Curious Village"
            description = "My team and I developed an object-oriented game using Typescript aimed at educating children about the perils of digital illiteracy. Our efforts paid off as we clinched first place among the participants and our game was acclaimed as the top game of the year."
            />
            <ProjectCards 
            imageName = "safari.jpeg"
            projectName = "Hangout Safari"
            description = 'Our team crafted a project tailored to support students grappling with social anxiety. We built an immersive 3D safari experience where they can engage with various scenarios and collect virtual animals based on their social interactions. Our endeavor caught the attention of a panel of investors, who selected our project for showcasing, considering it as a potential investment opportunity.'
            />
            <ProjectCards 
            imageName = "pzem.jpg"
            projectName = "Dashboard for PZEM"
            description = "I collaborated with a team to develop a dashboard application for PZEM, which provided insights into energy production and sales data. The application offered a comprehensive overview of energy-related metrics, enabling users to track and analyze their energy consumption and sales in real-time."
            />
            <ProjectCards
            imageName ="hackathon.jpeg"
            projectName = "Hackathon"
            description = "During a recent Hackathon, our team innovated by crafting a captivating 3D interactive screensaver for JRCZ. This screensaver featured a luminous globe that dynamically expanded to reveal the facilities of the building whenever triggered by clapping."
            />
            <ProjectCards
            imageName = "pco.png"
            projectName = "PCO"
            description = "I've launched my inaugural portfolio website, marking an exciting step in my journey. Through this project, I've gained valuable insights into articulating my strengths and weaknesses, and honed my skills in crafting a website that authentically represents who I am as an individual."
            />
        </div>
    </div>
</section>