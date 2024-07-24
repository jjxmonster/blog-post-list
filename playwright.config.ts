import { defineConfig } from "@playwright/test";

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000";

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
		extraHTTPHeaders: {
			"x-vercel-protection-bypass":
				process.env.VERCEL_AUTOMATION_BYPASS_SECRET!,
		},
	},
	outputDir: "playwright/test-results",
});
