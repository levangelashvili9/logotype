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
    <section className="flex flex-wrap gap-10">
      {blogs.map((blog) => (
        <div
          key={blog.title}
          className="w-full 768:basis-[calc((100%-40px)/2)] 1024:basis-[calc((100%-80px)/3)]"
        >
          <BlogCard blog={blog} />
        </div>
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
