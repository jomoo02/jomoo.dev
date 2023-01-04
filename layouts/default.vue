<template>
    <div class="max-h-full overflow-hidden">

        <div class="fixed top-0 z-20 w-full bg-white">
            <header class="border-b-[1px] border-b-gray-300">
                <div class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 relative w-full">
                    <nav class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center">
                        <!--  -->
                        <div class="col-span-1 flex justify-start cursor-pointer md:hidden" @click="hiddenMenu()">
                            <ListIcon></ListIcon>
                        </div>

                        <div class="flex justify-center  md:justify-start col-span-4 md:col-span-1 ">
                            <div class="text-2xl font-extrabold ">
                                <NuxtLink to="/" @click="home()">JOMOO.DEV</NuxtLink>
                            </div>
                        </div>
                        <ul class="hidden md:flex justify-center gap-x-10 col-span-4 font-semibold">
                            <li>
                                <NuxtLink to="/note/algorithms">
                                    <div class="flex p-1.5  border-b-[2px] border-b-white" :class="check === 1 ? 'link' : '' "  @click="menuSelect()">Note</div>
                                </NuxtLink>
                            </li>
                            <li >
                                <NuxtLink to="/projects/loltr">
                                    <div class="flex p-1.5  border-b-[2px] border-b-white" :class="check === 2 ? 'link' : '' " @click="menuSelect2()">Projects</div>
                                </NuxtLink>
                            </li>
                            <li><div class="p-1.5">Resume</div></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
     
        <div class="flex pt-2.5 mt-16 md:mt-32">
            <ul class="flex-col px-4 justify-center gap-x-10 col-span-4 font-semibold" :class="hiddenCheck === 1 ? 'hidden' : '' ">
                <li>
                    <NuxtLink to="/note/algorithms">
                        <div class="flex p-1.5" :class="check === 1 ? 'link_md' : '' " @click="menuSelect()">
                            Note
                        </div>
                    </NuxtLink>
                </li>
                <li >
                    <NuxtLink to="/projects/loltr">
                        <div class="flex p-1.5" :class="check === 2 ? 'link_md' : '' " @click="menuSelect2()">
                            Projects
                        </div>
                    </NuxtLink>
                </li>
                <li class="p-1.5 ">Resume</li>
            </ul>
        </div>
        <div :class="hiddenCheck === 2 ? 'hidden' : '' ">
            <slot />
        </div>
        
    </div>
</template>

<script setup>
const route = useRoute();
const linkes = ['projects','note']
const check = ref(1);
const hiddenCheck = ref(1);

console.log("updated")
function home() {
    check.value=1;

}
const routes = route.path.split('/');

if(routes[1] === 'note') {
    check.value=1;
}
else if(routes[1] ==='projects') {
    check.value=2;
}

function menuSelect() {
    check.value=1;
    hiddenCheck.value = 1;
}
function menuSelect2(){
    check.value=2;
    hiddenCheck.value = 1;
}

function hiddenMenu() {
    if (hiddenCheck.value === 1){
        hiddenCheck.value = 2;
    }
    else{
        hiddenCheck.value = 1;
    }
}

</script>
<style scoped>
.link {
    border-bottom-width: 2px;
    --tw-border-opacity: 1;
    border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
    color:#047857;
}
.link_md {
    color:#047857;
}

</style>