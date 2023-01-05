import { defineStore } from 'pinia';
export const usePostDataStore = defineStore('post', {
    state: () => ({
        programmersPosts: ref([]),
        programmersPostsIdx: ref({}),
        algorithmsPosts: ref([]),
        algorithmsPostsIdx: ref({}),
        loltrPosts: ref([]),
        loltrPostsIdx: ref([]),
    }),
    actions:{
        programmersPostUpdate(programmers) {
            let posts = new Array();
            let postIdx = {};
            posts = programmers;
    
            posts.forEach((post,idx) => {
                let title = post.title;
                postIdx[title] = idx;
            })
            this.programmersPosts = posts;
            this.programmersPostsIdx = postIdx;
        },
        algorithmsPostsUpdate(algorithms) {
            let posts = new Array();
            let postIdx = {};
            posts = algorithms;
    
            posts.forEach((post,idx) => {
                let title = post.title;
                postIdx[title] = idx;
            })
            this.algorithmsPosts = posts;
            this.algorithmsPostsIdx = postIdx;
        },
        loltrPostsUpdate(loltr) {
            let posts = new Array();
            let postIdx = {};
            posts = loltr;
 
            posts.forEach((post,idx) => {
                let title = post.title;
                postIdx[title] = idx;
            })
            this.loltrPosts = posts;
            this.loltrPostsIdx = postIdx;
        },
    }
})