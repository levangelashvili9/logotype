export const blogsKeys = {
  all: () => ["blogs"],

  allLists: () => [...blogsKeys.all(), "list"],
};
