import { Button } from "./ui/button";

interface ErrorComponentProps {
	refetch: () => void;
	text: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
	refetch,
	text,
}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<p>{text}</p>
			<Button onClick={() => refetch()}>Retry</Button>
		</div>
	);
};
