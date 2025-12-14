export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const page = searchParams.get("_page");
  const limit = searchParams.get("_limit");

  const url = userId
    ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_page=${page}&_limit=${limit}`
    : `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch posts" },
        { status: response.status }
      );
    }

    const posts = await response.json();
    const total = response.headers.get("x-total-count");

    return Response.json({
      posts,
      total: total ? parseInt(total, 10) : posts.length,
    });
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
