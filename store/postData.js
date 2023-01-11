import { defineStore } from 'pinia';
export const usePostDataStore = defineStore('post', {
    state: () => ({
        programmersPosts: [],
        programmersPostsIdx: {},
        algorithmsPosts: [],
        algorithmsPostsIdx: {},
        loltrPosts: [],
        loltrPostsIdx: [],
    }),
    actions:{
        programmersPostUpdate(programmers) {
            const posts = [...programmers];
            const postIdx = {};    
            posts.forEach((post, idx) => {
                const title = post.title;
                postIdx[title] = idx;
            })
            this.programmersPosts = [...posts];
            this.programmersPostsIdx = {...postIdx};
        },
        algorithmsPostsUpdate(algorithms) {
            const posts = [...algorithms];
            const postIdx = {};
            
            posts.forEach((post, idx) => {
                const title = post.title;
                postIdx[title] = idx;
            })
            this.algorithmsPosts = [...posts];
            this.algorithmsPostsIdx = {...postIdx};
        },
        loltrPostsUpdate(loltr) {
            const posts = [...loltr];
            const postIdx = {};
 
            posts.forEach((post, idx) => {
                const title = post.title;
                postIdx[title] = idx;
            })
            this.loltrPosts = [...posts];
            this.loltrPostsIdx = {...postIdx};
        },
    }
})