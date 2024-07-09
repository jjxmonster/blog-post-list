import { Author } from "@/types/Author";
import { API_URL } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export const useAuthors = () =>
	useQuery<Author[]>({
		queryKey: ["authors"],
		queryFn: async () => {
			const response = await fetch(`${API_URL}/users`);
			return response.json();
		},
	});
