import { defineStore } from 'pinia';
import { CATEGORIES_DETAIL } from '~~/constants/categoriesDetail';

export const usePostStore = defineStore('postt', () => {
  const totalPosts = ref({});

  async function setProjectsPosts(category, detail) {
    const posts = await queryContent(category, detail)
      .only(['title', '_path', 'description', 'date'])
      .find();

    totalPosts.value[detail] = posts.reverse();
  }

  async function setPost() {
    await Promise.all(
      CATEGORIES_DETAIL.map(({ category, detail }) => setProjectsPosts(category, detail)),
    );
  }

  return {
    totalPosts,
    setPost,
  };
});
