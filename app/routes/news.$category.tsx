import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import { toTitleCase } from '~/utils/stringUtils.ts'

// Server code
export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	const categoryTitle = toTitleCase(category)

	return data({ categoryTitle })
}

const WireframeBlock = () => {
	return (
		<div className="h-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
	)
}

// Client code
export default function NewsCategoryPage() {
	const { categoryTitle } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2">{categoryTitle}</h2>

			<div className="grid grid-cols-5 gap-6">
				<WireframeBlock />
				<WireframeBlock />
				<WireframeBlock />
				<WireframeBlock />
				<WireframeBlock />
			</div>
		</div>
	)
}
