import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'
import { type MetaFunction } from 'react-router'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import headshot from '~/assets/jpg/portrait-01.jpg'
import headshot2 from '~/assets/jpg/portrait-02.jpg'
import headshot3 from '~/assets/jpg/portrait-03.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

interface TeamMemberCardProps {
	name: string
	role: string
	imageSrc: string
}

export function TeamMemberCard({ name, role, imageSrc }: TeamMemberCardProps) {
	return (
		<div className="w-fit rounded-lg bg-slate-800 p-8">
			<img
				src={imageSrc}
				alt="An employee"
				className="mx-auto h-64 w-64 rounded-full"
			/>

			<div className="pt-6">
				<h3 className="font-semi-bold text-center text-white">{name}</h3>
				<p className="pt-1 text-center text-slate-400">{role}</p>

				<div className="flex justify-center gap-4 pt-6 text-slate-400">
					<RiTwitterXFill />
					<RiLinkedinBoxFill />
				</div>
			</div>
		</div>
	)
}

export default function Index() {
	return (
		<main className="grid h-full place-items-center">
			<h1 className="text-mega">Epic News</h1>

			<div className="w-full py-16">
				<HeroCallToAction
					image="https://www.helpguide.org/wp-content/uploads/2020/01/Social-Media-and-Mental-Health.webp"
					imageRight={true}
				>
					<div className="flex flex-col gap-8 px-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
				</HeroCallToAction>
			</div>

			<div className="m-4 flex gap-4">
				<TeamMemberCard
					name="Leonard Krasner"
					role="Senior Designer"
					imageSrc={headshot}
				/>
				<TeamMemberCard
					name="John Smith"
					role="Lead Developer"
					imageSrc={headshot2}
				/>
				<TeamMemberCard
					name="Jane Doe"
					role="Marketing Manager"
					imageSrc={headshot3}
				/>
			</div>
		</main>
	)
}
