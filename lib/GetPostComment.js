export default async function GetPostComments(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  if (!result.ok) {
    throw new Error("Failed to fetch post comments");
  }
  return result.json();
}
