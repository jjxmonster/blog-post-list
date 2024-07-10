import { defineConfig } from "@playwright/test";

const BASE_URL = "http://localhost:5173/";

export default defineConfig({
	testDir: "tests/e2e",
	fullyParallel: true,
	retries: 0,
	reporter: [["html", { outputFolder: "playwright/html-report" }]],
	use: {
		baseURL: BASE_URL,
		trace: "on",
		actionTimeout: 5000,
		navigationTimeout: 15000,
	},
	outputDir: "playwright/test-results",
});
