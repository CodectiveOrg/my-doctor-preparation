type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.org/posts", {
    cache: "no-store",
  });

  const posts: Post[] = await res.json();

  return (
    <>
      <h1>سلام، رفیق! قطعاً</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
