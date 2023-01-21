import { defineStore } from 'pinia';
export const usePostDataStore = defineStore('post', {
    state: () => ({
        programmersPosts: [],
        programmersPostsIdx: {},
        algorithmsPosts: [],
        algorithmsPostsIdx: {},
        loltrPosts: [],
        loltrPostsIdx: {},
        vocaPosts: [],
        vocaPostsIdx: {},
    }),
    actions:{
        postSet(post) {
            const posts = [...post];
            const postIdx = {};    
            posts.forEach((post, idx) => {
                const title = post.title;
                postIdx[title] = idx;
            });
            return {posts, postIdx};
        },
        programmersPostUpdate(programmers) {
            const {posts, postIdx} = this.postSet(programmers);
            this.programmersPosts = [...posts];
            this.programmersPostsIdx = {...postIdx};
        },
        algorithmsPostsUpdate(algorithms) {
            const {posts, postIdx} = this.postSet(algorithms);
            this.algorithmsPosts = [...posts];
            this.algorithmsPostsIdx = {...postIdx};
        },
        loltrPostsUpdate(loltr) {
            const {posts, postIdx} = this.postSet(loltr);
            this.loltrPosts = [...posts];
            this.loltrPostsIdx = {...postIdx};
        },
        vocaPostsUpdate(voca) {
            const {posts, postIdx} = this.postSet(voca);
            this.vocaPosts = [...posts];
            this.vocaPostsIdx = {...postIdx};
        }
    }
})