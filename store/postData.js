import { defineStore } from 'pinia';
export const usePostDataStore = defineStore('post', {
    state: () => ({
        programmersPosts: ref([]),
        programmersPostsIdx: ref({}),
    }),
    actions:{
        programmersPostUpdate(programmers) {
            let posts = new Array();
            let postIdx = {};
            posts = programmers;
            posts.reverse();
            posts.forEach((post,idx) => {
                let title = post.title;
                postIdx[title] = idx;
            })
            this.programmersPosts = posts;
            this.programmersPostsIdx = postIdx;
        }
    }
})