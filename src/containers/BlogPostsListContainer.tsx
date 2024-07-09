import { useBlogPosts } from "@/hooks/useBlogPostsData";
import { useAuthors } from "@/hooks/useAuthors";
import { BlogPost } from "@/types/BlogPost";
import { BlogPostListSkeleton } from "@/components/BlogPostListSkeleton";
import { BlogPostsList } from "@/components/BlogPostsList";
import { ErrorComponent } from "@/components/ErrorComponent";

interface BlogPostsListProps {
	posts: BlogPost[];
}

export const BlogPostsListContainer: React.FC<BlogPostsListProps> = ({
	posts,
}) => {
	const { isLoading, isError, refetch, error } = useBlogPosts();
	const { data: authors } = useAuthors();

	if (isError) return <ErrorComponent refetch={refetch} text={error.message} />;

	if (isLoading) {
		return <BlogPostListSkeleton />;
	}

	return <BlogPostsList posts={posts} authors={authors ?? []} />;
};
