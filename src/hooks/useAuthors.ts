import { useEffect, useState } from "react";
import { Author } from "@/types/Author";
import { API_URL } from "@/lib/constants";

export function useAuthors() {
	const [authors, setAuthors] = useState<Author[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${API_URL}/users`)
			.then(response => response.json())
			.then(data => setAuthors(data || []))
			.catch(error => {
				setError(error);
				console.error("Error fetching data:", error);
			});
	}, []);

	return { authors, error };
}
