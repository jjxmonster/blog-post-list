import { BlogPost } from "@/types/BlogPost";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function filterPosts({
	posts,
	key,
	query,
}: {
	posts: BlogPost[];
	key: keyof BlogPost;
	query: string;
}) {
	if (!query) return posts;

	return posts.filter(post => {
		const value = post[key];
		if (typeof value === "string") {
			return value.toLowerCase().includes(query.toLowerCase());
		}
		return value === Number(query);
	});
}
