import { BlogPost } from "../types/BlogPost";
import { API_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export const useBlogPosts = () =>
	useQuery<BlogPost[]>({
		queryKey: ["posts"],
		queryFn: async () => {
			const response = await fetch(`${API_URL}/posts`);
			if (!response.ok) {
				throw new Error("Failed to fetch blog posts");
			}

			return response.json();
		},
	});
