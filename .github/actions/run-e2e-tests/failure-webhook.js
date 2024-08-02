const notifyFailure = async () => {
	await fetch(env.FAILURE_WEBHOOK_URL);
};

await notifyFailure();
