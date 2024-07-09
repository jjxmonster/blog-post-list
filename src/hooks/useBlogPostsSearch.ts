import { useEffect, useState } from "react";
import { BlogPost } from "../types/BlogPost";
import { API_URL } from "@/lib/constants";

export function useBlogPostsSearch() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${API_URL}/posts`)
			.then(response => response.json())
			.then(data => setPosts(data || []))
			.catch(error => {
				setError(error);
				console.error("Error fetching data:", error);
			});
	}, []);

	return { posts, error };
}
