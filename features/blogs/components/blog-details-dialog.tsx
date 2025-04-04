import Image from "next/image";
import { useTranslations } from "next-intl";
import { Dot, X } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Blog } from "@/features/blogs/interfaces/blog.interface";

type BlogDetailsDialogProps = React.PropsWithChildren & {
  blog: Blog;
};

export const BlogDetailsDialog: React.FC<BlogDetailsDialogProps> = ({
  children,
  blog,
}) => {
  const t = useTranslations("blogs.card");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="mx-auto max-w-md 768:max-w-lg 1024:max-w-xl"
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-sm font-bold text-quaternary">
              {blog.tags}
            </DialogTitle>
            <DialogClose>
              <X className="size-5" />
            </DialogClose>
          </div>
        </DialogHeader>

        <h3 className="text-2xl font-bold text-primary">{blog.title}</h3>

        <div className="w-full overflow-hidden rounded-lg">
          <Image
            src={blog.img_2x}
            priority
            alt={blog.title}
            width={160}
            height={90}
            className="aspect-[36/23] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-sm text-secondary">{blog.text}</p>

        <div className="flex flex-wrap items-center gap-1">
          <h4 className="text-xs font-medium text-primary">{blog.autor}</h4>
          <Dot strokeWidth={"3"} className="size-4 text-[#D7D7D7]" />
          <h4 className="text-xs text-tertiary">{blog.date}</h4>
          <Dot strokeWidth={"3"} className="size-4 text-[#D7D7D7]" />
          <h4 className="text-xs text-tertiary">
            {t("views", { count: blog.views })}
          </h4>
        </div>
      </DialogContent>
    </Dialog>
  );
};
