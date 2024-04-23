<script>
    import EducationCards from "../EducationCards.svelte";

</script>
<section class="ScrollPics " id="Education">
    <!-- SC=ScrollPics -->
    <div class="SC_inner bg-zinc-800" id="section_2">
        <figure></figure>
        <h2 class="SC_title z-10 text-[8rem] text-white justify-center"><i>Education</i></h2>
        <EducationCards
        id = "hz"
        image="hz.png"
        title="HBO ICT HZ university of applied science"
        description="In the first year at HZ University, I learned foundational web development skills including HTML, CSS, and JavaScript, as well as TypeScript for building scalable applications. Additionally, I gained proficiency in PHP and Laravel for server-side development and learned about containerization using Docker.
        In the second year, the curriculum expanded to cover advanced topics such as Svelte for building reactive user interfaces, Microservices architecture for developing scalable and resilient applications, and Data Science with Python for analyzing and interpreting large datasets to extract valuable insights."
        classes="top-[55rem] left-[42rem] z-50"
        />
        <EducationCards 
        id="faller"
        image="faller.png"
        title="Pápai SZC Faller Jenő Technikum"
        description="
        During my four years in high school, I specialized in IT, gaining expertise in various areas. I acquired skills in application development using C# and .NET framework, along with proficiency in web development encompassing HTML, JavaScript, CSS, and relevant frameworks. Additionally, I mastered the art of structuring and managing MySQL databases, adept in executing queries for efficient data retrieval. Furthermore, I delved into the Cisco ecosystem, honing my abilities in network design and configuration to ensure optimal security and functionality."
        classes="top-[80rem] left-[42rem] z-40"
        />
        <div>
            <div id="nextCard" class="SC_content rounded-full bg-white h-[5rem] w-[10rem] z-[60] items-center justify-center top-[50rem] left-[54rem] text-black">Next card</div>
        </div>
    </div>
</section>