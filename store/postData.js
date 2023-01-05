import { defineStore } from 'pinia';
export const usePostDataStore = defineStore('post', {
    state: () => ({
        programmersPosts: ref([]),
        programmersPostsIdx: ref({}),
    }),
    actions:{
        async programmersPostUpdate() {
            let posts = new Array();
            let postIdx = {};
            posts =  await queryContent('note/programmers').only(['title','_path','description','date']).find();
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