<template>
    <nav class="justify-center items-center font-bold ">
        <ul class="flex gap-x-4 md:block ">
            <li>
                <NuxtLink to="/note/programmers">
                    <div class="hover:text-emerald-500 py-1.5" :class="check === 1 ? 'text-emerald-600' : 'text-black'">
                        프로그래머스
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/note/algorithms">
                    <div class="hover:text-emerald-500 py-1.5" :class="check === 2 ? 'text-emerald-600' : 'text-black'" >
                        알고리즘
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
const route= useRoute();
const check = ref(0);


const routes = route.path.split('/');


if (routes[2] == 'programmers'){
    check.value = 1;
}
else if (routes[2] == 'algorithms'){
    check.value = 2;
}
    
</script>