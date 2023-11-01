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
        jomoodevPosts: [],
        jomoodevPostsIdx: {},
        wootecoPosts: [],
        wootecoPostsIdx: {},
    }),
    actions:{
        postSet(post) {
            const posts = [...post];
            const postsIdx = {};    
            posts.forEach((post, idx) => {
                const title = post.title;
                postsIdx[title] = idx;
            });
            return { posts, postsIdx };
        },
        programmersPostUpdate(programmers) {
            const { posts, postsIdx } = this.postSet(programmers);
            this.programmersPosts = [...posts];
            this.programmersPostsIdx = { ...postsIdx };
        },
        algorithmsPostsUpdate(algorithms) {
            const { posts, postsIdx } = this.postSet(algorithms);
            this.algorithmsPosts = [...posts];
            this.algorithmsPostsIdx = { ...postsIdx };
        },
        loltrPostsUpdate(loltr) {
            const { posts, postsIdx } = this.postSet(loltr);
            this.loltrPosts = [...posts];
            this.loltrPostsIdx = { ...postsIdx };
        },
        vocaPostsUpdate(voca) {
            const { posts, postsIdx } = this.postSet(voca);
            this.vocaPosts = [...posts];
            this.vocaPostsIdx = { ...postsIdx };
        },
        jomoodevPostsUpdate(jomoodev) {
            const { posts, postsIdx } = this.postSet(jomoodev);
            this.jomoodevPosts = [...posts];
            this.jomoodevPostsIdx = { ...postsIdx };
        },
        wootecoPostsUptae(wooteco) {
            const { posts, postsIdx } = this.postSet(wooteco);
            this.wootecoPosts = [...posts];
            this.wootecoPostsIdx = { ...postsIdx };
        }
    }
})