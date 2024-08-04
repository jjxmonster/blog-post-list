import AuthorSelect from "@/components/AuthorSelect";
import { useBlogPosts } from "@/hooks/useBlogPostsData";
import { filterPosts } from "@/lib/utils";
import { useState } from "react";
import { BlogPostsListContainer } from "./BlogPostsListContainer";
import NumberToShowSelect from "@/components/NumberToShowSelect";
import { useFlag } from "@featurevisor/react";

export const BlogPostSearchContainer = () => {
	const [author, setAuthor] = useState("");
	const [numberToShow, setNumberToShow] = useState("10");
	const { data: posts } = useBlogPosts();
	const params = window.location.search;
	const isNumberToShowSelectEnabled = useFlag("numberOfPostsToDisplay", {
		country: new URLSearchParams(params).get("country"),
	});

	const filteredPosts = filterPosts({
		posts: posts || [],
		key: "userId",
		query: author,
	}).slice(0, Number(numberToShow));

	return (
		<>
			<div className="pt-24" />
			<h1 className="text-4xl text-black font-medium text-center">
				Blog Posts List
			</h1>
			<div className="pt-8" />
			<form className="space-x-4 flex items-end justify-center">
				<AuthorSelect author={author} setAuthor={setAuthor} />
				{isNumberToShowSelectEnabled && (
					<NumberToShowSelect
						numberToShow={numberToShow}
						setNumberToShow={setNumberToShow}
					/>
				)}
			</form>
			<div className="pt-12" />
			<BlogPostsListContainer posts={filteredPosts} />
			<div className="pt-16" />
		</>
	);
};
