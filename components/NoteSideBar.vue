<template>
    <nav class="justify-center items-center font-bold ">
        <ul class="flex gap-x-4 md:block">
            <li class="hover:text-emerald-500 py-1.5" id="algorithms">
                <NuxtLink to="/note/algorithms">알고리즘</NuxtLink>
            </li>
            <li class=" hover:text-emerald-500 py-1.5" id="programmers">
                <NuxtLink to="/note/programmers">프로그래머스</NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
const route= useRoute();
onMounted(() => {
    const routes = route.path.split('/');
    if(process.client) {
        if (routes[2]=='algorithms'){
            document.querySelector("#algorithms").classList.add('text-emerald-600');
        }
        else if (routes[2]=='programmers'){
            document.querySelector("#programmers").classList.add('text-emerald-600');
        }
    }
})
</script>