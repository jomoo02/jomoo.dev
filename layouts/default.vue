<template>
    <div class="max-h-full overflow-hidden">
        <ClientOnly>
            <div class="fixed top-0 z-20 w-full bg-white">
                <header class="border-b-[1px] border-b-gray-300">
                    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 relative w-full">
                        <nav class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center">
                            <!--  -->
                            <div class="col-span-1 flex justify-center md:hidden" @click="menuSelect()">
                                <ListIcon></ListIcon>
                            </div>

                            <div class="flex justify-center  md:justify-start col-span-4 md:col-span-1 ">
                                <div class="text-2xl font-extrabold ">
                                    <NuxtLink to="/" @click="home()">JOMOO.DEV</NuxtLink>
                                </div>
                            </div>
                            <ul class="hidden md:flex justify-center gap-x-10 col-span-4 font-semibold">
                                <li class="flex p-1.5  border-b-[2px] border-b-white" id="note">
                                    <NuxtLink to="/note/algorithms">Note</NuxtLink>
                                </li>
                                <li class="flex p-1.5   border-b-[2px] border-b-white"  id="projects" >
                                    <NuxtLink to="/projects/loltr">Projects</NuxtLink>
                                </li>
                                <li class="p-1.5 ">Resume</li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </ClientOnly>
        <div id="" class="flex pt-2.5 overflow-y-scroll mt-16 md:mt-32">
            <ul class="hidden flex-col px-4 justify-center gap-x-10 col-span-4 font-semibold" id="modal">
                <li class="flex p-1.5" id="note_md" @click="menuSelect()">
                    <NuxtLink to="/note/algorithms">Note</NuxtLink>
                </li>
                <li class="flex p-1.5"  id="projects_md" @click="menuSelect()">
                    <NuxtLink to="/projects/loltr">Projects</NuxtLink>
                </li>
                <li class="p-1.5 ">Resume</li>
            </ul>
        </div>
        <div id="content" class="">
            <slot />
        </div>
        
    </div>
</template>

<script setup>
const route= useRoute();

const linkes = ['projects','note']
console.log("updated")
function home() {
    document.querySelector("#note").classList.remove('link');
    document.querySelector("#projects").classList.remove('link');
    document.querySelector("#content").classList.remove('hidden');
    document.querySelector("#modal").classList.add('hidden');

}
function menuSelect() {
    document.querySelector("#content").classList.toggle('hidden');
    document.querySelector("#modal").classList.toggle('hidden');

}

</script>
<style scoped>
.link {
    /* background-color: rgb(244 244 245);
    box-shadow: 0 0 #0000, 0 0 #0000, var(inset 0 2px 4px 0 rgb(0 0 0 / 0.05));
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05), 0 0 #0000, 0 0 #0000; */
    border-bottom-width: 2px;
    --tw-border-opacity: 1;
    border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
    color:#047857;
}
.link_md {
    color:#047857;
}



</style>