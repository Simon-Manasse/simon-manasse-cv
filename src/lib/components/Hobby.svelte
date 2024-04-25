<script>
    export let imageName;
    export let projectName;
    export let description;
</script>

<div class=" w-[25rem]">
    <div class=" h-[15rem] flex justify-center items-center">
        <!-- <img class="h-[15rem] " src="src/img/hobbies/{imageName}" alt="" /> -->
        <img class="h-[15rem]" src="img/hobbies/{imageName}" alt="" />
    </div>

    <div class="flex justify-center items-center">
        <p class=" text-4xl py-4">{projectName}</p>
    </div>
        <p class="">{description}</p>
</div>
