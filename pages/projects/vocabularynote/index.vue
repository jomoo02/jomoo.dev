<template>
    <div>
        <div class="relative grid grid-cols-10 gap-6 md:gap-8">
            <div class="col-span-10 md:col-span-2 flex md:sticky top-[138px] overflow-y-auto max-h-[calc(100vh-220px)] ">
                <ProjectsSideBar></ProjectsSideBar>
            </div>
            <div class="col-span-10 md:col-span-8">
                <div v-for="voca in postStore.vocaPosts" :key="voca">
                    <div>
                        <ContentCard :page-link="voca._path" :description="voca.description" :title="voca.title" :date="voca.date" ></ContentCard>
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
    title: 'vocabulary note',
    meta:[
        { name: 'description', content: '토이 프로젝트 vocabulary note'}
    ],
})
</script>