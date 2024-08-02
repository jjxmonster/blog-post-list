const notifyFailure = async () => {
	await fetch(process.env.FAILURE_WEBHOOK_URL);
};

await notifyFailure();
