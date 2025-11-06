import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import portrait1 from '~/assets/jpg/portrait-01.jpg'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()

	return (
		<Document nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your journey begins!</h1>
						<p className="text-base text-gray-600 md:text-2xl md:text-pink-400 lg:text-3xl lg:text-blue-500">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>
						<img src={portrait1} alt="Portrait 1" />
					</main>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
