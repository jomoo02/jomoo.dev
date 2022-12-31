<template>
    <div class="relative grid grid-cols-10 gap-6 md:gap-8">
        <div class="col-span-10 md:col-span-2 overflow-y-auto max-h-[calc(100vh-64px)]">
            <NoteSideBar></NoteSideBar>
        </div>
        <div class="prose min-w-full col-span-10 md:col-span-8 pb-8" >
            <ContentDoc></ContentDoc>
        </div>
    </div>
</template>

<script setup>
const { data: page } = await useAsyncData('my-page', queryContent('/').findOne)

useContentHead(page)

</script>
