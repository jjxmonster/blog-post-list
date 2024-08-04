import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createInstance } from "@featurevisor/sdk";
import { FeaturevisorProvider } from "@featurevisor/react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
		},
	},
});

const envName = import.meta.env.VITE_ENV_NAME || "preview";

const featurevisor = createInstance({
	datafileUrl: `https://d9f0wbtdbs2sh.cloudfront.net/${envName}/datafile-tag-all.json`,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<FeaturevisorProvider instance={featurevisor}>
				<App />
			</FeaturevisorProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
