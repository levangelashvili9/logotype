import Image from "next/image";
import { useTranslations } from "next-intl";
import { Dot } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

import { Blog } from "@/features/blogs/interfaces/blog.interface";
import { BlogDetailsDialog } from "@/features/blogs/components/blog-details-dialog";

type BlogCardProps = {
  blog: Blog;
};

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const t = useTranslations("blogs.card");

  return (
    <BlogDetailsDialog blog={blog}>
      <div className="cursor-pointer space-y-4 duration-200 hover:scale-[1.02]">
        <Image
          src={blog.img_2x}
          priority
          alt="logo"
          width={160}
          height={90}
          className="aspect-[36/23] w-full"
        />

        <h4 className="text-sm font-bold text-quaternary">{blog.tags}</h4>

        <h3 className="text-2xl font-bold text-primary">{blog.title}</h3>

        <div className="flex items-center gap-1">
          <h4 className="text-xs font-medium text-primary">{blog.autor}</h4>
          <Dot strokeWidth={"3"} className="size-4 text-[#D7D7D7]" />
          <h4 className="text-xs text-tertiary">{blog.date}</h4>
          <Dot strokeWidth={"3"} className="size-4 text-[#D7D7D7]" />
          <h4 className="text-xs text-tertiary">
            {t("views", { count: blog.views })}
          </h4>
        </div>

        <p className="line-clamp-4 text-sm text-secondary">{blog.text}</p>
      </div>
    </BlogDetailsDialog>
  );
};

export const BlogCardSkeleton = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="aspect-[36/23] w-full"></Skeleton>
      <Skeleton className="h-4 w-full"></Skeleton>
      <Skeleton className="h-10 w-full"></Skeleton>

      <div className="flex gap-2">
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
      </div>

      <div className="space-y-1.5">
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
      </div>
    </div>
  );
};
