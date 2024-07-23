import AuthorSelect from "@/components/AuthorSelect";
import { useBlogPosts } from "@/hooks/useBlogPostsData";
import { filterPosts } from "@/lib/utils";
import { useState } from "react";
import { BlogPostsListContainer } from "./BlogPostsListContainer";

export const BlogPostSearchContainer = () => {
	const [author, setAuthor] = useState("");
	const { data: posts } = useBlogPosts();

	const filteredPosts = filterPosts({
		posts: posts || [],
		key: "userId",
		query: author,
	});
	return (
		<>
			<div className="pt-24" />
			<h1 className="text-4xl text-black font-medium text-center">
				Blog Posts List
			</h1>
			<div className="pt-8" />
			<form className="space-x-4 flex items-end justify-center">
				<AuthorSelect author={author} setAuthor={setAuthor} />
			</form>
			<div className="pt-12" />
			<BlogPostsListContainer posts={filteredPosts} />
			<div className="pt-16" />
		</>
	);
};
