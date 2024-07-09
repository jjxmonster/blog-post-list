import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/BlogPost";

interface BlogPostCardProps {
	post: BlogPost;
	author: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, author }) => {
	const { title } = post;
	return (
		<Card className="w-full h-full flex flex-col justify-between">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardFooter>
				<span>{author}</span>
			</CardFooter>
		</Card>
	);
};
