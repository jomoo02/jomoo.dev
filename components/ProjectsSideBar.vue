<template>
    <nav class="justify-center items-center font-bold">
        <ul class="">
            <li>
                <NuxtLink to="/Projects/loltr">
                    <div class="hover:text-emerald-500 py-1.5" id="loltr">lol.tr</div>
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

        if (routes[2]=='loltr'){
            document.querySelector("#loltr").classList.add('text-emerald-600');
        }
    }
})

</script>

