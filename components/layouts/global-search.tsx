"use client";

import { useQueryState } from "nuqs";
import { ArrowLeft, Search } from "lucide-react";

type GlobalSearchProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  isActive,
  setIsActive,
}) => {
  const [searchParams, setSearchParams] = useQueryState("search", {
    defaultValue: "",
    clearOnDefault: true,
  });

  return (
    <>
      {isActive ? (
        <div className="flex h-10 w-full items-center gap-4">
          <ArrowLeft
            onClick={() => setIsActive(false)}
            strokeWidth={"2.5"}
            className="size-6 cursor-pointer"
          />

          <div className="relative h-full w-full">
            <Search
              strokeWidth={"3"}
              className="absolute left-3 top-1/2 size-5 -translate-y-1/2"
            />
            <input
              type="search"
              value={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
              className="h-full w-full rounded-lg border border-primary pl-11 pr-3 focus:outline-none"
            />
          </div>
        </div>
      ) : (
        <Search
          onClick={() => setIsActive(true)}
          strokeWidth={"3"}
          className="size-5 cursor-pointer"
        />
      )}
    </>
  );
};
