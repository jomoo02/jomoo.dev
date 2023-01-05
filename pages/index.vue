<template>
    <div>
        <div>
            <div>programmers</div>
            <div class="flex">
                <ClientOnly>
                    <div v-for="idx in randomProgrammers" class="w-1/2" >
                        <IndexContentCard :category="text" :postIdx="idx"></IndexContentCard>
                    </div>
                </ClientOnly>
            </div>
        </div>
        <div>
            Projects
        </div>
    </div>
</template>

<script setup>
import { usePostDataStore } from '~~/store/postData';
const postStore = usePostDataStore();
const randomProgrammers = randomProgrammersSelect();
const text = ref("programmers");
console.log(randomProgrammers)
function randomProgrammersSelect() {
    const randomArr = new Array();
    let postRange = postStore.programmersPosts.length;
    console.log(postRange)
    for(let i = 0; i<4; i++) {
        randomArr.push(Math.floor(Math.random()*postRange));
    }
    return randomArr
}
</script>