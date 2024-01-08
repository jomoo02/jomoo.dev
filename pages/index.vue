<template>
  <div>
    <div class="mt-8 md:mt-4">
      <div class="text-4xl text-zinc-900 font-extrabold mb-5">programmers</div>
      <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
        <div
          v-for="idx in 4"
          :key="idx"
          class="min-w-full xs:min-w-[187px] md:min-w-[288px] md:w-[288px] md:max-w-[288px]"
        >
          <IndexContentCard category="programmers" :post-idx="idx - 1" />
        </div>
      </div>
    </div>
    <div class="mt-14">
      <div class="text-4xl text-zinc-900 font-extrabold mb-5">algorithms</div>
      <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
        <div
          v-for="idx in 2"
          :key="idx"
          class="min-w-full xs:min-w-[187px] xs:max-w-[187px] max-w-[290px] md:max-w[288px] md:min-w-[288px] md:w-[288px]"
        >
          <IndexContentCard category="algorithms" :post-idx="idx - 1" />
        </div>
      </div>
    </div>
    <div class="mt-14">
      <div class="text-4xl text-zinc-900 font-extrabold mb-5">projects</div>
      <div class="flex gap-x-2.5 md:gap-x-4 w-full py-1 overflow-x-auto">
        <div
          v-for="idx in 4"
          :key="idx"
          class="flex min-w-full xs:min-w-[187px] xs:max-w-[187px] max-w-[290px] md:max-w[288px] md:min-w-[288px] md:w-[288px]"
        >
          <IndexContentCard category="vocabularynote" :post-idx="idx - 1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'jomoo.dev',
  meta: [
    {
      name: 'description',
      content: 'Nuxt3로 만들어진 블로그, 프로그래머스, 알고리즘 등을 다룹니다',
    },
  ],
});
</script>
