<template>
  <div>
    <NuxtLayout :name="name">
      <NuxtPage class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 min-h-screen mb-16" />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const postStore = usePostDataStore();

async function getPosts(title, detail) {
  const posts = await queryContent(title, detail)
    .only(['title', '_path', 'description', 'date'])
    .find();
  return posts.reverse();
}

//
const name = 'default-v2';
//

const postsProgrammers = await getPosts('note', 'programmers');
const postsAlgorithms = await getPosts('note', 'algorithms');
const postsLottr = await getPosts('projects', 'loltr');
const postsVoca = await getPosts('projects', 'vocabularynote');
const postsJomoodev = await getPosts('projects', 'jomoodev');
const postsWooteco = await getPosts('note', 'wooteco');
const postsJs = await getPosts('note', 'js');

postStore.programmersPostUpdate(postsProgrammers);
postStore.algorithmsPostsUpdate(postsAlgorithms);
postStore.loltrPostsUpdate(postsLottr);
postStore.vocaPostsUpdate(postsVoca);
postStore.jomoodevPostsUpdate(postsJomoodev);
postStore.wootecoPostsUptae(postsWooteco);
postStore.jsPostsUpdate(postsJs);
</script>
