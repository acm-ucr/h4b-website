const Page = ({ params }) => {
  const PAGES = {
    fall: "Alice",
    winter: "Bob",
    spring: "Charlie",
    past: "Dana",
  };
  if (!PAGES[params.type]) {
    return <div className="text-7xl">404 Not Found</div>;
  }

  return <div className="text-7xl">{PAGES[params.type]}</div>;
};

export default Page;
