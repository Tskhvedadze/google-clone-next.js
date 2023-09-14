"use client";

import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const SearchHeaderOptions = () => {
  const pathName = usePathname();
  const router: AppRouterInstance = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab: "web" | "image") {
    router.push(
      `/search/${tab === "image" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab("web")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>

      <div
        onClick={() => selectTab("image")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathName === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
};
