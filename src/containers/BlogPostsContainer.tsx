import AuthorSelect from "@/components/AuthorSelect";
import { BlogPostsList } from "@/components/BlogPostsList";
import { useAuthors } from "@/hooks/useAuthors";
import { useBlogPostsSearch } from "@/hooks/useBlogPostsSearch";
import { filterPosts } from "@/lib/utils";
import { useState } from "react";

export function BlogPostsContainer() {
	const [author, setAuthor] = useState("");
	const { authors, error: authors_error } = useAuthors();
	const { posts, error: posts_error } = useBlogPostsSearch();

	if (authors_error || posts_error) {
		return <div className="text-black">Error loading authors</div>;
	}

	const filteredPosts = filterPosts({
		posts,
		key: "userId",
		query: author,
	});

	return (
		<>
			<div className="pt-24" />
			<h1 className="text-2xl text-black text-center">Blog Posts</h1>
			<div className="pt-8" />
			<form className="space-x-4 flex items-end justify-center">
				<AuthorSelect authors={authors} author={author} setAuthor={setAuthor} />
			</form>
			<div className="pt-12" />
			<BlogPostsList authors={authors} posts={filteredPosts} />
			<div className="pt-16" />
		</>
	);
}
