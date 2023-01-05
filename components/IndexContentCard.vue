<template>
    <div class="border w-full h-64">
        <div>{{ post.title }}</div>
        <div>{{ post.description }}</div>
        <div>{{ post.date }}</div>
    </div>
</template>


<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();
const props = defineProps({
    postIdx: Number,
    category: String,
})
console.log(props.postIdx)
const post = ref();
if (props.category === 'programmers') {
    post.value = postStore.programmersPosts[props.postIdx]
}
</script>