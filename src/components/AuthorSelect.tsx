import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SelectSeparator } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { useAuthors } from "@/hooks/useAuthors";

interface AuthorSelectProps {
	author: string;
	setAuthor: React.Dispatch<React.SetStateAction<string>>;
}

const AuthorSelect: React.FC<AuthorSelectProps> = ({ author, setAuthor }) => {
	const { data: authors } = useAuthors();
	return (
		<>
			<label className="flex flex-col">
				Author
				<Select onValueChange={setAuthor} value={author}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Choose Author" />
					</SelectTrigger>
					<SelectContent>
						{authors?.map(author => (
							<SelectItem key={author.id} value={String(author.id)}>
								{author.name}
							</SelectItem>
						))}
						<SelectSeparator />
						<Button
							disabled={!author}
							className="w-full px-2"
							variant="secondary"
							size="sm"
							onClick={e => {
								e.stopPropagation();
								setAuthor("");
							}}
						>
							Clear selection
						</Button>
					</SelectContent>
				</Select>
			</label>
		</>
	);
};

export default AuthorSelect;
