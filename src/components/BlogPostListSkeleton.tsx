import { Skeleton } from "./ui/skeleton";

export const BlogPostListSkeleton = () => {
	return (
		<ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
			{Array.from({ length: 12 }).map((_, index) => (
				<li className="flex flex-col items-center w-full h-full" key={index}>
					<Skeleton className="h-[100px] w-full" />
				</li>
			))}
		</ol>
	);
};
