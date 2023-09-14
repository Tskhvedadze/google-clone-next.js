async function WebSearchPage({
  searchParams: { searchTerm },
}: {
  searchParams: { searchTerm: string };
}) {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}`
  );
  const data = await response.json();
  const results = data?.items;

  return (
    <>
      {results &&
        results.map((result: any) => (
          <h1 key={result.title}>{result.title}</h1>
        ))}
    </>
  );
}

export default WebSearchPage;
