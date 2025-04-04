import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import axiosInstance from "@/lib/api-client";

import { Blog } from "@/features/blogs/interfaces/blog.interface";
import { blogsKeys } from "@/features/blogs/config/blogs-keys.config";

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await axiosInstance.get<Blog[]>("/endpoint/react/data.json");
  return response.data;
};

export const useBlogs = (searchTerm: string) => {
  const { data, ...rest } = useQuery({
    queryKey: blogsKeys.allLists(),
    queryFn: () => getBlogs(),
  });

  const filteredData = useMemo(() => {
    if (!data) return [];
    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerSearchTerm) ||
        blog.text.toLowerCase().includes(lowerSearchTerm),
    );
  }, [data, searchTerm]);

  return { data: filteredData, ...rest };
};
