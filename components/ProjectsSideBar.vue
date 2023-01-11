<template>
    <nav class="justify-center items-center font-bold">
        <ul>
            <li>
                <NuxtLink to="/Projects/loltr">
                    <div class="hover:text-emerald-500 py-1.5" :class="check === 1 ? 'text-emerald-600' : 'text-black'">lol.tr</div>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const route= useRoute();
const check = ref(1);
const routes = route.path.split('/');

if (routes[2]=='loltr'){
    check.value=1;
}

</script>

