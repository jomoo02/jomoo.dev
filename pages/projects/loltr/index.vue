<template>
    <div class="relative grid grid-cols-10 gap-6 md:gap-8">
        <div class="col-span-10 md:col-span-2 overflow-y-auto max-h-[calc(100vh-64px)]">
            <ProjectsSideBar></ProjectsSideBar>
        </div>
        <div class="col-span-10 md:col-span-8">
            <div v-for="loltr in loltrs" :key="loltr">
                <div>
                    <ContentCard :page-link="loltr._path" :description="loltr.description" :title="loltr.title" :date="loltr.date" ></ContentCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const loltrs = await queryContent('projects/loltr').only(['title','_path','description','date']).find();
loltrs.reverse();

useHead({
    title: 'jomoo.dev',
    meta:[
        { name: 'description', content: '프로젝트 lol.tr 노트'}
    ],
})
</script>