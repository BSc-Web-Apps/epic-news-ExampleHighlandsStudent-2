import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, data, useLoaderData } from 'react-router'
import { toTitleCase } from '~/utils/stringUtils.ts'
import { prisma } from '~/utils/db.server.ts'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'

// Server code
export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'No category provided')
	const categoryTitle = toTitleCase(category)

	const filteredArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: category, // Retrieves only articles in the specified category
			},
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true, objectKey: true } },
		},
	})

	return data({ categoryTitle, filteredArticles })
}

// Client code
export default function NewsCategoryPage() {
	const { filteredArticles, categoryTitle } = useLoaderData<typeof loader>()

	return (
		<div className="container py-16">
			<h2 className="text-h2">{categoryTitle}</h2>

			<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
				{filteredArticles.map((article) => (
					<ArticleCard
						key={article.id}
						articleId={article.id}
						title={article.title}
						category={article.category?.name}
						objectKey={article.images[0]?.objectKey}
					/>
				))}
			</div>
		</div>
	)
}
