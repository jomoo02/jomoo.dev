<template>
  <div class="max-h-full">
    <div class="fixed top-0 z-20 w-full bg-white">
      <header class="border-b-[1px] border-b-gray-300">
        <div class="mx-auto max-w-7xl px-6 sm:px-4 lg:px-8 relative w-full">
          <nav class="grid grid-cols-6 min-h-16 max-h-20 items-center h-16 lg:h-20 justify-center">
            <div
              class="col-span-1 flex justify-start cursor-pointer md:hidden"
              @click="hiddenMenuOperation"
            >
              <ListIcon />
            </div>
            <div class="flex justify-center md:justify-start col-span-4 md:col-span-1">
              <div class="text-2xl font-extrabold text-stone-800">
                <NuxtLink to="/" @click="home()">JOMOO.DEV</NuxtLink>
              </div>
            </div>
            <ul class="hidden md:flex justify-center gap-x-10 col-span-4 font-semibold">
              <li>
                <NuxtLink to="/note/programmers">
                  <div
                    class="flex p-1.5 text-zinc-600 border-b-[2px] border-b-white hover:text-emerald-500"
                    :class="mainStore.defaultLayoutIdx === 1 ? 'link' : ''"
                    @click="menuSelectNote()"
                  >
                    Note
                  </div>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/projects/vocabularynote">
                  <div
                    class="flex p-1.5 text-zinc-600 border-b-[2px] border-b-white hover:text-emerald-500"
                    :class="mainStore.defaultLayoutIdx === 2 ? 'link' : ''"
                    @click="menuSelectProjects()"
                  >
                    Projects
                  </div>
                </NuxtLink>
              </li>
              <li>
                <div class="p-1.5 cursor-not-allowed text-zinc-600">etc</div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    <div class="mt-16 pt-2.5 md:mt-32">
      <slot />
    </div>
    <Teleport to="body">
      <div v-if="mainStore.modalCheck === true" class="fixed inset-0 z-[999] mt-16 w-full bg-white">
        <div class="flex pt-2.5">
          <ul class="flex-col px-4 justify-center gap-x-10 col-span-4 font-semibold">
            <li>
              <NuxtLink to="/note/programmers">
                <div
                  class="flex p-1.5 text-zinc-600 hover:text-emerald-500"
                  :class="mainStore.defaultLayoutIdx === 1 ? 'link_md' : ''"
                  @click="menuSelectNote()"
                >
                  Note
                </div>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects/vocabularynote">
                <div
                  class="flex p-1.5 text-zinc-600 hover:text-emerald-500"
                  :class="mainStore.defaultLayoutIdx === 2 ? 'link_md' : ''"
                  @click="menuSelectProjects()"
                >
                  Projects
                </div>
              </NuxtLink>
            </li>
            <li class="p-1.5 cursor-not-allowed text-zinc-600">etc</li>
          </ul>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { useMainStateStore } from '~~/store/mainState';

const mainStore = useMainStateStore();
const route = useRoute();
const routes = route.path.split('/');

if (routes[1] === 'note') {
  mainStore.defaultLayoutIdx = 1;
} else if (routes[1] === 'projects') {
  mainStore.defaultLayoutIdx = 2;
}

function overflowYRemove() {
  mainStore.modalCheck = false;
  if (process.client) {
    document.body.classList.remove('overflow-y-hidden');
  }
}

function home() {
  // mainStore.defaultLayoutIdx = 0;
  overflowYRemove();
}

function menuSelectNote() {
  // mainStore.defaultLayoutIdx = 1;
  overflowYRemove();
}

function menuSelectProjects() {
  // mainStore.defaultLayoutIdx = 2;
  overflowYRemove();
}

function hiddenMenuOperation() {
  if (mainStore.modalCheck === true) {
    overflowYRemove();
  } else {
    mainStore.modalCheck = true;
    if (process.client) {
      document.body.classList.add('overflow-y-hidden');
    }
  }
}
</script>
<style scoped>
.link {
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-bottom-color: rgb(5 150 105 / var(--tw-border-opacity));
  color: #047857;
}
.link_md {
  color: #047857;
}
</style>
