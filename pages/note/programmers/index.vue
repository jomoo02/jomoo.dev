<template>
    <div class="relative grid grid-cols-10 gap-6 md:gap-8">
        <div class="col-span-10 md:col-span-2 overflow-y-auto max-h-[calc(100vh-64px)]">
            <NoteSideBar></NoteSideBar>
        </div>
        <div class="col-span-10 md:col-span-8">
            <div v-for="programmers in programmerses" :key="programmers">
                <div>
                    <ContentCard :page-link="programmers._path" :description="programmers.description" :title="programmers.title" :date="programmers.date" ></ContentCard>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
const programmerses = await queryContent('note/programmers').only(['title','_path','description','date']).find();
programmerses.reverse();
</script>