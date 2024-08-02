import { DUMMY_POSTS } from "tests/data/posts";
import { test, expect } from "../mocks/test";

test("display blog posts", async ({ page }) => {
	await page.goto("/");
	const posts = await page.getByRole("listitem").all();

	expect(posts).toHaveLength(DUMMY_POSTS.length);
	expect(await posts[0].textContent()).toContain(DUMMY_POSTS[0].title);
	expect(await posts[1].textContent()).toContain(DUMMY_POSTS[2].title);
});
