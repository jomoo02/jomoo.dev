<template>
    <div>
        <div class="mt-8 md:mt-0">
            <div class="text-4xl text-zinc-900 font-extrabold mb-5">programmers</div>
            <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
                <div v-for="idx in 4" class="min-w-full xs:min-w-[187px] md:min-w-[288px] md:w-[288px] md:max-w-[288px]" >
                    <IndexContentCard :category="programmers" :postIdx="idx-1"></IndexContentCard>
                </div>
            </div>
        </div>

        <div class="mt-14">
            <div class="text-4xl text-zinc-900 font-extrabold mb-5">algorithms</div>
            <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
                <div v-for="idx in 1" class="min-w-full xs:min-w-[187px] xs:max-w-[187px] max-w-[290px] md:max-w[288px] md:min-w-[288px] md:w-[288px]" >
                    <IndexContentCard :category="algorithms" :postIdx="idx-1"></IndexContentCard>
                </div>
            </div>
        </div>

        <div class="mt-14">
            <div class="text-4xl text-zinc-900 font-extrabold mb-5">projects</div>
            <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
                <div v-for="idx in 1" class="min-w-full xs:min-w-[187px] xs:max-w-[187px] max-w-[290px] md:max-w[288px] md:min-w-[288px] md:w-[288px]" >
                    <IndexContentCard :category="projects" :postIdx="idx-1"></IndexContentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const programmers = ref("programmers");
const algorithms = ref('algorithms');
const projects = ref('projects');
useHead({
    title: 'jomoo.dev',
    meta:[
        { name: 'description', content: 'jomoo.dev 메인 페이지'}
    ],
})
</script>