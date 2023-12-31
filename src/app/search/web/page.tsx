import { WebSearchResults } from "@/app/components";
import Link from "next/link";

async function WebSearchPage({
  searchParams: { searchTerm, start },
}: {
  searchParams: { searchTerm: string; start: string | "1" };
}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${start}`
  );
  const data = await response.json();
  const results = data?.items;

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg ">
          Try searching for something else or go back to the homepage{" "}
          <Link href={"/"} className="text-blue-500">
            HOME
          </Link>
        </p>
      </div>
    );
  }

  return results && <WebSearchResults results={data} />;
}

export default WebSearchPage;
