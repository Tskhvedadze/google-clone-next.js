import { SearchHeader } from "../components";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
