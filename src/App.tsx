import AuthorSelect from "@/components/AuthorSelect";
import { useBlogPosts } from "@/hooks/useBlogPostsData";
import { filterPosts } from "@/lib/utils";
import { useState } from "react";
import { BlogPostsListContainer } from "./containers/BlogPostsListContainer";

function App() {
	const [author, setAuthor] = useState("");
	const { data: posts } = useBlogPosts();

	const filteredPosts = filterPosts({
		posts: posts || [],
		key: "userId",
		query: author,
	});

	return (
		<main className="mx-auto max-w-5xl px-6 pt-10 md:px-0">
			<div className="pt-24" />
			<h1 className="text-2xl text-black text-center">Blog Posts</h1>
			<div className="pt-8" />
			<form className="space-x-4 flex items-end justify-center">
				<AuthorSelect author={author} setAuthor={setAuthor} />
			</form>
			<div className="pt-12" />
			<BlogPostsListContainer posts={filteredPosts} />
			<div className="pt-16" />
		</main>
	);
}

export default App;
