import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Author } from "@/types/Author";

interface AuthorSelectProps {
	author: string;
	setAuthor: React.Dispatch<React.SetStateAction<string>>;
	authors: Author[];
}

const AuthorSelect: React.FC<AuthorSelectProps> = ({
	author,
	setAuthor,
	authors,
}) => {
	return (
		<label className="flex flex-col">
			Author
			<Select onValueChange={setAuthor} value={author}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Choose Author" />
				</SelectTrigger>
				<SelectContent>
					{authors.map(author => (
						<SelectItem key={author.id} value={String(author.id)}>
							{author.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</label>
	);
};

export default AuthorSelect;
