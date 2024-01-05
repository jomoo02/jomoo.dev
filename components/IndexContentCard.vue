<template>
  <div
    class="border-2 border-stone-500 hover:border-4 hover:p-[14px] min-w-full w-full max-w-full min-h-[16rem] h-64 max-h-64 cursor-pointer rounded-xl p-4 relative"
    @click="contentCardDetail(post._path)"
  >
    <div class="font-bold text-2xl truncate h-1/4 py-1">{{ post.title }}</div>
    <div
      class="text-zinc-600 h-[70%] m-0 min-h-[70%] max-h-[70%] text-sm md:text-base overflow-hidden text-ellipsis break-words"
    >
      {{ post.description }}
    </div>
    <div class="w-full">
      <div class="flex justify-end text-sm text-zinc-400 overflow-hidden text-ellipsis">
        {{ post.date }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';

const props = defineProps({
  postIdx: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    default: 'projects',
  },
});

const router = useRouter();
const postStore = usePostDataStore();
const post = ref(null);

function contentCardDetail(url) {
  router.push({ path: `${url}` });
}

if (props.category === 'programmers') {
  post.value = postStore.programmersPosts[props.postIdx];
} else if (props.category === 'algorithms') {
  post.value = postStore.algorithmsPosts[props.postIdx];
} else if (props.category === 'projects') {
  post.value = postStore.loltrPosts[props.postIdx];
} else if (props.category === 'voca') {
  post.value = postStore.vocaPosts[props.postIdx];
}
</script>
