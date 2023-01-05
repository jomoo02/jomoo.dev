<template>
    <div>
        <div class="relative grid grid-cols-10 gap-6 md:gap-8">
            <div class="col-span-10 md:col-span-2 overflow-y-auto max-h-[calc(100vh-64px)]">
                <NoteSideBar></NoteSideBar>
            </div>
            <div class="col-span-10 md:col-span-8">
                <div v-for="algorithm in postStore.algorithmsPosts" :key="algorithm">
                    <ContentCard :page-link="algorithm._path" :description="algorithm.description" :title="algorithm.title" :date="algorithm.date"></ContentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();
</script>

<style scoped>
div .router-link-active {
    background-color: pink;
}
</style>