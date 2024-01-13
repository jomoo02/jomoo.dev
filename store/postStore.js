import { defineStore } from 'pinia';
import { CATEGORIES_DETAILS } from '~~/constants/categoriesDetail';

export const usePostStore = defineStore('post', () => {
  const totalPosts = ref({});

  async function setPost() {
    const queryPost = async ({ category, detail }) => {
      const post = await queryContent(category, detail)
        .only(['title', '_path', 'description', 'date'])
        .find();
      return { key: detail, data: post.reverse() };
    };

    const posts = await Promise.all(CATEGORIES_DETAILS.map(queryPost));

    totalPosts.value = posts.reduce((acc, { key, data }) => {
      acc[key] = data;
      return acc;
    }, {});
  }

  function pickPosts(detail) {
    return totalPosts.value[detail];
  }

  return {
    totalPosts,
    setPost,
    pickPosts,
  };
});
