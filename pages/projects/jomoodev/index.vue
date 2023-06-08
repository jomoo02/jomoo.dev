<template>
    <div>
        <div class="relative grid grid-cols-10 gap-6 md:gap-8">
            <div class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)] ">
                <ProjectsSideBar></ProjectsSideBar>
            </div>
            <div class="col-span-10 md:col-span-8">
                <div v-for="jomoodev in postStore.jomoodevPosts" :key="jomoodev">
                    <div>
                        <ContentCard :page-link="jomoodev._path" :description="jomoodev.description" :title="jomoodev.title" :date="jomoodev.date" ></ContentCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();

useHead({
    title: 'jomoo.dev',
    meta:[
        { name: 'description', content: 'jomoo.dev project'}
    ],
})
</script>