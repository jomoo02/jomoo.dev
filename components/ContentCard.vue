<template>
    <div>
        <div class="w-full border-b mb-4 flex flex-col h-[150px] max-h-[150px] min-h-[150px] cursor-pointer"
        @click="contentCardDetail(props.pageLink)">
            <div class="font-bold text-3xl py-1.5 truncate">
                {{ props.title }}
            </div>
            <div class="pt-4">
                <div class="text-lg truncate text-zinc-600">            
                    {{ props.description }}
                </div>
                <div class="text-sm pt-4 text-zinc-400">
                    {{ props.date }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    pageLink:String,
    title:String,
    description:String,
    date:String
})
const router= useRouter();
function contentCardDetail(url) {
    // router.push({path:`~/${props.pageLink}`});
    router.push({path:`${url}`})

}

</script>