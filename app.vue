<template>
  <div>
    <NuxtLayout>
      <NuxtPage class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 min-h-full mb-16">
      </NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();
postStore.programmersPostUpdate();
// postStore.programmersPosts.value = await queryContent('note/programmers').only(['title','_path','description','date']).find();
// postStore.programmersPosts.value.reverse();

// // console.log( (postStore.programmersPosts.value.length))
// // postStore.programmersPosts.value.foreach((post, idx) => {
// //   let title = post.title;
// //   postStore.programmersPostsIdx.value[title] = idx;
// // });

// for(let i = 0; i<postStore.programmersPosts.value.length; i++) {
//   let title = postStore.programmersPosts.value[i].title;
//   console.log(title)
//   postStore.programmersPostsIdx[title] = i;
// }

// console.log(postStore.programmersPostsIdx);
</script>