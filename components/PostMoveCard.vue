<template>
  <div
    class="w-full border rounded-xl py-2.5 px-3.5 cursor-pointer hover:ring-2 ring-emerald-400"
    @click="movePost"
  >
    <div v-if="props.direction === 'previous'" class="flex items-center gap-x-1.5">
      <div class="md:w-2/12 flex justify-start">
        <Icon name="icon-park:arrow-left" size="32" />
      </div>
      <div class="w-10/12">
        <div class="flex justify-start text-sm font-semibold text-zinc-500">이전 포스트</div>
        <div class="flex items-center">
          <p class="m-0 text-lg font-bold text-zinc-700 truncate">
            {{ props.title }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-end gap-x-1.5">
      <div class="w-10/12">
        <div class="flex justify-end text-sm font-semibold text-zinc-500">이후 포스트</div>
        <div class="flex justify-end items-center">
          <p class="m-0 text-lg font-bold text-zinc-700 truncate">
            {{ props.title }}
          </p>
        </div>
      </div>
      <div class="md:w-2/12 flex justify-end">
        <Icon name="icon-park:arrow-right" size="32" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    required: true,
  },

  path: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
});

const router = useRouter();

function movePost() {
  router.push({ path: props.path });
  // await navigateTo(path);
}
</script>
