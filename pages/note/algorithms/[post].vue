<template>
    <div>
        <div class="relative grid grid-cols-10 gap-6 md:gap-8 h-full">
            <div class="col-span-10 md:col-span-2 flex md:sticky md:top-[138px] overflow-y-auto max-h-[calc(100vh-220px)] ">
                <NoteSideBar></NoteSideBar>
            </div>
            <div class="min-w-full col-span-10 md:col-span-8 pb-8" >
                <div class="prose min-w-full"><ContentDoc></ContentDoc></div>
                <div class="flex flex-col gap-2.5 md:flex-row w-full" :class="pageNumber < postStore.algorithmsPosts.length-1 ? 'justify-between':'justify-end'">
                <div v-if="pageNumber < postStore.algorithmsPosts.length-1" class="md:w-1/3">
                    <PostMoveCard :postDirection="BEFORE" :pageNumber="pageNumber+1" dataKind="algorithms"></PostMoveCard>
                </div>
                <div v-if="pageNumber > 0" class="md:w-1/3">
                    <PostMoveCard :postDirection="AFTER" :pageNumber="pageNumber-1" dataKind="algorithms"></PostMoveCard>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
import { useMainStateStore } from '~~/store/mainState';
const mainStore = useMainStateStore();
const postStore = usePostDataStore();
const route = useRoute();
mainStore.defaultLayoutIdx = 1;

const BEFORE = -1;
const AFTER = 1;
const post = await queryContent(route.fullPath).findOne();
const pageNumber = postStore.algorithmsPostsIdx[post.title];
</script>
