export default {
  layout: "post.liquid",
  tags: ["posts"],
  eleventyComputed: {
    postTags: (data) => {
      return data.tags.filter((tag) => tag !== "posts");
    },
  },
};
