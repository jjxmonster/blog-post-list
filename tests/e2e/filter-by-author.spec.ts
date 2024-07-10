import { DUMMY_POSTS } from "tests/data/posts";
import { test, expect } from "../mocks/test";
import { DUMMY_USERS } from "tests/data/users";

test("filtering by author", async ({ page }) => {
	await page.goto("/");
	await page.getByLabel("Author").click();
	await page.getByLabel(DUMMY_USERS[0].name, { exact: true }).click();

	const posts = await page.getByRole("listitem").all();

	expect(posts).toHaveLength(
		DUMMY_POSTS.filter(post => post.userId === DUMMY_USERS[0].id).length
	);
	expect(await posts[0].textContent()).toContain(DUMMY_USERS[0].name);
});
