<script>
    export let id;
    export let image;
    export let title;
    export let description;
    export let classes;
</script>

<div id="{id}" class="{classes} SC_content perspectiveDiv  h-[40rem] w-[30rem] bg-white text-black flex flex-col">
    <img src="img/{image}" class="mt-5 h-[10rem]" alt="">
    <div  class="items-center flex flex-col my-7 text-xl ">
        <h1 class=" justify-center items-center">{title}</h1>
    </div>
    <p class=" text-justify">{description}</div>