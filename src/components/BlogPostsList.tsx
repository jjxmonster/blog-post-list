import { Author } from "@/types/Author";
import { BlogPostCard } from "../BlogPostCard/BlogPostCard";
import { BlogPost } from "@/types/BlogPost";

interface BlogPostsListProps {
	posts: BlogPost[];
	authors: Author[];
}

export const BlogPostsList: React.FC<BlogPostsListProps> = ({
	posts,
	authors,
}) => {
	return (
		<ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{posts.map(post => (
				<li className="flex flex-col items-center w-full h-full" key={post.id}>
					<BlogPostCard
						post={post}
						author={
							authors.find(author => author.id === post.userId)?.name || ""
						}
					/>
				</li>
			))}
		</ol>
	);
};
