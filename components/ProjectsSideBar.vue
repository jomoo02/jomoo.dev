<template>
    <nav class="justify-center items-center font-bold">
        <ul class="flex gap-x-4 md:block">
            <li>
                <NuxtLink to="/projects/loltr">
                    <div class="hover:text-emerald-500 py-1.5" :class="check === 1 ? 'text-emerald-600' : 'text-black'">lol.tr</div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/projects/vocabularynote">
                    <div class="hover:text-emerald-500 py-1.5" :class="check === 2 ? 'text-emerald-600' : 'text-black'">vocabulary </div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const route= useRoute();
const check = ref(1);
const routes = route.path.split('/');

if (routes[2]==='loltr') {
    check.value = 1;
}
else if (routes[2]==='vocabularynote') {
    check.value = 2;
}

</script>

