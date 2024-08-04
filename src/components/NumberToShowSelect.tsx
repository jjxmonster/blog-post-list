import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface AuthorSelectProps {
	numberToShow: string;
	setNumberToShow: React.Dispatch<React.SetStateAction<string>>;
}

const NumberToShowSelect: React.FC<AuthorSelectProps> = ({
	numberToShow,
	setNumberToShow,
}) => {
	return (
		<>
			<label className="flex flex-col">
				Number of posts to show
				<Select onValueChange={setNumberToShow} value={numberToShow}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Choose number of posts to show" />
					</SelectTrigger>
					<SelectContent>
						{[10, 25, 50, 100]?.map(num => (
							<SelectItem key={num} value={String(num)}>
								{num}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</label>
		</>
	);
};

export default NumberToShowSelect;
