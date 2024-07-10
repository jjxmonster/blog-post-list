import { API_URL } from "@/lib/constants";
import { HttpResponse, http } from "msw";
import { DUMMY_POSTS } from "tests/data/posts";
import { DUMMY_USERS } from "tests/data/users";

export const watchHandlers = [
	http.get(`${API_URL}/posts`, async () => {
		return HttpResponse.json(DUMMY_POSTS);
	}),

	http.get(`${API_URL}/users`, async () => {
		return HttpResponse.json(DUMMY_USERS);
	}),
];
