import { data, useLoaderData, type MetaFunction } from 'react-router'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true, objectKey: true } },
		},
	})

	return data({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()
	const hasArticles = allArticles.length > 0

	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Epic News</h1>

			<div className="container py-16">
				<h2 className="text-h2">Latest news</h2>

				<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
					{hasArticles ? (
						allArticles.map((article) => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images[0]?.objectKey}
							/>
						))
					) : (
						<div>There are no published articles to show</div>
					)}
				</div>
			</div>
		</main>
	)
}
