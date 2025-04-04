"use client";

import { useQueryState } from "nuqs";

import { useBlogs } from "@/features/blogs/api/get-blogs";
import {
  BlogCard,
  BlogCardSkeleton,
} from "@/features/blogs/components/blog-card";

export const BlogsList = () => {
  const [searchParams] = useQueryState("search", {
    defaultValue: "",
  });

  const { data: blogs, isLoading } = useBlogs(searchParams);

  if (isLoading) return <BlogsListSkeleton />;

  if (!blogs) return null;

  return (
    <section className="grid grid-cols-1 gap-10 768:grid-cols-2 1024:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.title} blog={blog} />
      ))}
    </section>
  );
};

const BlogsListSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-10 768:grid-cols-2 1024:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </section>
  );
};
