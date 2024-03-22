<script>
    export let imageName;
    export let projectName;
    export let description;
</script>

<div
    class="bg-white text-black mt-[10rem] snap-center w-[40rem] flex-shrink-0 h-[40rem] border-none rounded-lg flex flex-col items-center text-8xl gap-2 overflow-clip"
>
    <div
        class="w-[100%] h-[100%] hover:first:h-[20rem] transition-all duration-300 "
    >
        <img
            class="h-[100%] mt-0 top-0 w-[100%] object-cover rounded-t-lg transition-all duration-75"
            src="src/img/{imageName}"
            alt=""
        />

        <div class="w-[100%] h-[100%] flex flex-col items-center">
            <hr
                class=" my-[2rem] z-[100] w-[30rem] h-[1px] bg-gradient-to-r from-white via-black to-white border-0 rounded-lg"
            />
            <p class="text-4xl">{projectName}</p>
            <p class="text-xl mx-5 text-justify">{description}</p>
        </div>
    </div>
</div>