<template>
    <nav class="justify-center items-center font-bold ">
        <ul class="flex gap-x-4 md:block">
            <li>
                <NuxtLink to="/note/algorithms">
                    <div class="hover:text-emerald-500 py-1.5" id="algorithms">
                        알고리즘
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/note/programmers">
                    <div class=" hover:text-emerald-500 py-1.5" id="programmers">
                        프로그래머스
                    </div>
                </NuxtLink>
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