<script setup>
const route = useRoute();
const { fullPath } = route;
const query = await queryContent(fullPath).only(['body']).findOne();
const filterdQuery = query.body.children.filter(({ tag }) => tag === 'h4' || tag === 'h3');
console.log(await queryContent(fullPath).findOne());
</script>

<template>
  <div class="md:sticky md:top-[6.5rem] overflow-y-auto max-h-[calc(100vh-4rem)] px-4">
    <div>목차</div>
    <nav>
      <ul>
        <li v-for="item in filterdQuery" :key="item" class="flex">
          <div v-if="item.tag === 'h3'" class="flex truncate">
            <div class="text-red-200">{{ item.tag }}</div>
            <NuxtLink :to="`${fullPath}#${item.props.id}`" class="truncate">
              {{ item.props.id }}
            </NuxtLink>
          </div>
          <div v-else class="flex pl-2 truncate">
            <div class="text-red-200">{{ item.tag }}</div>
            <NuxtLink :to="`${fullPath}#${item.props.id}`" class="truncate">
              {{ item.props.id }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
