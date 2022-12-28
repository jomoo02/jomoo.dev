<template>
    <div class="relative grid grid-cols-10 gap-8">
        <div class="col-span-2">
            <AlgorithmsSideBar></AlgorithmsSideBar>
        </div>
        <div class="prose min-w-full col-span-8 pb-8" >
            <ContentDoc></ContentDoc>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

console.log(route.params.id)
</script>
