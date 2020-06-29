import Head from 'next/head'
import EarlyAccessForm from '../components/Marketing/EarlyAccessForm'
import ConfirmationModal from '../components/Marketing/ConfirmationModal'

export default function Home() {
	return (
		<>
			<Head>
				<title>Auralite</title>
				<meta name="description" content="A social network for the future" />
				<meta name="og:type" content="website" />
				<meta name="og:url" content="https://auralite.io/" />
				<meta name="og:title" content="Auralite" />
				<meta name="og:description" content="A social network for the future" />
				<meta name="og:image" content="https://auralite.io/img/card.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@goauralite" />
				<meta name="twitter:title" content="Auralite" />
				<meta name="twitter:description" content="A social network for the future." />
				<meta name="twitter:image" content="https://auralite.io/img/card.jpg" />
				<meta name="twitter:creator" content="@m1guelpf" />
				<link rel="stylesheet" href="/css/app.css" />
				<link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
				<link rel="manifest" href="/img/icons/site.webmanifest" />
				<link rel="mask-icon" href="/img/icons/safari-pinned-tab.svg" color="#6875f5" />
				<link rel="shortcut icon" href="/img/icons/favicon.ico" />
				<meta name="msapplication-TileColor" content="#603cba" />
				<meta name="msapplication-config" content="/img/icons/browserconfig.xml" />
				<meta name="theme-color" content="#6875f5" />
			</Head>

			<div className="font-screen text-black antialiased leading-tight bg-gray-200">
				<ConfirmationModal />
				<div className="relative bg-white overflow-x-hidden">
					<div role="presentation" className="h-8 bg-top bg-repeat bg-top-pattern" />
					<div className="max-w-screen-md mx-auto px-8 pt-16 text-xl text-gray-600 leading-normal">
						<div role="presentation" className="absolute inset-0 hidden sm:block">
							<div className="absolute top-0 right-0 p-24 translate-r-full">
								<svg className="block h-48 w-48 transform rotate-180 text-indigo-300" viewBox="0 0 184 184" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M182 184a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 80a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM22 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
										fill="currentColor"
										fillRule="evenodd"
									/>
								</svg>
							</div>
							<div className="absolute top-1/4 left-0 translate-l-full opacity-25 xl:opacity-100">
								<svg className="text-indigo-200" width="404" height="784" fill="none" viewBox="0 0 404 784">
									<defs>
										<pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
											<circle cx="8" cy="8" r="2.5" fill="currentColor" />
										</pattern>
									</defs>
									<rect width="404" height="784" fill="url(#pattern)" />
								</svg>
							</div>
							<div className="absolute top-1/2 right-0 translate-r-full opacity-25 xl:opacity-100">
								<svg className="text-indigo-200" width="404" height="784" fill="none" viewBox="0 0 404 784">
									<defs>
										<pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
											<circle cx="8" cy="8" r="2.5" fill="currentColor" />
										</pattern>
									</defs>
									<circle r="300" cx="400" cy="300" fill="url(#pattern)" />
								</svg>
							</div>
							<div className="absolute top-3/4 left-0 p-24 translate-l-full">
								<svg className="block h-48 w-48" viewBox="0 0 184 184" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M182 184a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-20 80a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM22 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 144a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-60a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
										fill="#4E68D0"
										fillRule="evenodd"
										opacity=".503"
									/>
								</svg>
							</div>
						</div>
						<div className="relative">
							<h2 className="sm:-mx-12 block text-center text-black text-5xl sm:text-6xl font-display font-bold leading-tight mb-10 tracking-tighter z-10 relative">
								A new{' '}
								<span className="inline-block text-indigo-500 bg-indigo-100 rounded-lg -mx-2 sm:-mx-8 px-2 sm:px-8 relative" style={{ zIndex: '-1' }}>
									social network
								</span>{' '}
								for the future
							</h2>

							<p className="mb-6 z-10 relative">
								Social networks are great. They are a place for{' '}
								<span className="bg-yellow-100 font-bold text-yellow-500 rounded-lg px-2 -mx-2 relative" style={{ zIndex: '-1' }}>
									connecting
								</span>{' '}
								with like-minded individuals and{' '}
								<span className="bg-yellow-100 text-yellow-500 font-bold rounded-lg px-2 -mx-2 relative" style={{ zIndex: '-1' }}>
									sharing
								</span>{' '}
								knowledge.
							</p>

							<p className="mb-6">
								For{' '}
								<a href="https://twitter.com/m1guelpf" target="_blank" rel="noreferrer" className="rounded-full pr-2 ml-2 w-7 text-white" style={{ background: 'linear-gradient(90deg, #f2709c, #ff9472)' }}>
									<img src="/img/avatar.jpg" alt="Miguel Piedrafita" className="inline -mt-1 -ml-1 w-8 h-8 rounded-full shadow" /> me
								</a>
								, they've enabled building an audience of people interested in my journey as a maker and helped me{' '}
								<a href="https://twitter.com/mijustin/status/1155874456062943237" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									meet
								</a>{' '}
								<a href="https://twitter.com/m1guelpf/status/1167594024158605314" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									amazing
								</a>{' '}
								<a href="https://twitter.com/christophrumpel/status/1167361583397449729" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									people
								</a>
								. Others have{' '}
								<a href="https://twitter.com/frankdilo/status/1274753091028619265" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									met their business partners
								</a>{' '}
								or{' '}
								<a href="https://twitter.com/amrith/status/1273877935745691648" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									given people jobs
								</a>
								.
							</p>

							<p className="mb-6">
								But, in the last few years, they've become a source of{' '}
								<a href="https://www.cjr.org/the_media_today/disinformation-facebook.php" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									disinformation
								</a>
								,{' '}
								<a href="https://decoders.amnesty.org/projects/troll-patrol/findings" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									anonymous harassment
								</a>
								,{' '}
								<a href="https://www.washingtonpost.com/technology/2020/01/28/off-facebook-activity-page/" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									privacy concerns
								</a>
								, and{' '}
								<a href="https://www.psychologytoday.com/intl/blog/digital-world-real-world/202002/anxiety-and-social-media-use" target="_blank" rel="noreferrer" className="underline font-bold text-indigo-500">
									anxiety
								</a>
								, while the platforms focused only on growing their engagement and revenue.
							</p>

							<p className="mb-6 z-10 relative">
								<span className="bg-indigo-100 text-indigo-500 font-bold rounded-lg px-2 -mx-2 relative" style={{ zIndex: '-1' }}>
									It's time for a new platform
								</span>
								, one that <span className="text-indigo-500 font-bold">respects your privacy</span>, that <span className="text-indigo-500 font-bold">doesn't try to get you addicted</span>, and that <span className="text-indigo-500 font-bold">protects you from hate and harassment</span>. A platform{' '}
								<span className="bg-indigo-100 text-indigo-500 font-bold rounded-lg px-2 -mx-2 relative" style={{ zIndex: '-1' }}>
									made for users, not for advertisers
								</span>
								.
							</p>

							<p className="mb-6">And, while we're at it, let's also include everything we've been asking those other platforms for ages.</p>

							<h2 className="text-black text-3xl font-display font-semibold leading-tight mb-6">Meet Auralite.</h2>

							<p className="mb-6">Auralite is a social network built for people, starting with its revenue model. Instead of making money off ads, Auralite is user-funded, ensuring the focus is always on providing the best experience for our users.</p>

							<p className="mb-6">
								With no ads, there's also no need for any tracking or selling of your data. We're the first <span className="text-indigo-500 font-bold">privacy-first social network</span>.
							</p>

							<p className="mb-6">Control is a big element of Auralite. Aside from complete control over your data, you can also choose who can see each post you make or interact with it, from everyone to mutual followers or even a small hand-picked selection.</p>

							<p className="mb-6">
								While we believe this should help prevent harassment, we also require each user to verify their identity before posting to Auralite, deterring abuse, and making our network <span className="text-indigo-500 font-bold">more about people and less about profiles</span>.
							</p>

							<p className="mb-6">
								Auralite is also built to be open and extendable, <span className="text-indigo-500 font-bold">embracing open standards</span> like RSS and webmentions and empowering developers with an <span className="text-indigo-500 font-bold">open API</span> and a <span className="text-indigo-500 font-bold">powerful bot platform</span>.
							</p>

							<p className="mb-6">
								These are just some of the things we've planned for Auralite. If you want to <span className="text-indigo-500 font-bold">learn more about what we're building</span>, <span className="text-indigo-500 font-bold">have a voice in the development</span> on the platform, and <span className="text-indigo-500 font-bold">be the first one to get access</span> when we open the gates, leave your email below.
							</p>
						</div>
					</div>
					<EarlyAccessForm />
				</div>
				<div className="bg-gray-700">
					<div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
						<h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">Frequently asked questions</h2>
						<div className="mt-6 border-t-2 border-gray-600 pt-6">
							<dl>
								<div className="md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">What is your policy going to be regarding usernames?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">When we start inviting those in the early-access list, they'll be able to reserve their usernames on a first come first served basis. Your username must be two characters minimum and unique across Auralite. Usernames will be redistributed on account deletion.</p>
									</dd>
								</div>
								<div className="mt-8 border-t border-gray-600 pt-6 md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">How will you verify the users' identity?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">
											We'll be using Stripe Identity to verify user's identities before they can start posting. Stripe Identity brings{' '}
											<a href="https://stripe.com/docs/security/stripe" target="_blank" className="text-indigo-200 font-bold underline">
												Stripe's security practices
											</a>{' '}
											to identity verification, ensuring we can verify you are a real person without accessing any personal information.
										</p>
									</dd>
								</div>
								<div className="mt-8 border-t border-gray-600 pt-6 md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">What platforms will Auralite be available on?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">While the Auralite private beta is currently only running on web, we plan to roll out Android and iOS apps before the public launch.</p>
									</dd>
								</div>
								<div className="mt-8 border-t border-gray-600 pt-6 md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">How much will Auralite cost?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">We're currently considering a yearly $99 payment or monthly $10 payments, but these numbers could change before launch. If they do, we'll make sure to let you know via the early-access list.</p>
									</dd>
								</div>
								<div className="mt-8 border-t border-gray-600 pt-6 md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">Who's building Auralite?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">
											<span role="img" aria-label="wave">
												👋
											</span>{' '}
											Hi! I'm Miguel Piedrafita, an 18-year-old maker. You can learn more about me{' '}
											<a className="text-indigo-200 font-bold underline" href="https://miguelpiedrafita.com" target="_blank">
												on my website
											</a>{' '}
											or{' '}
											<a href="https://twitter.com/m1guelpf" target="_blank" rel="noreferrer" className="text-indigo-200 font-bold underline">
												follow me on Twitter
											</a>
											, where I regularly share Auralite updates.
										</p>
									</dd>
								</div>
								<div className="mt-8 border-t border-gray-600 pt-6 md:grid md:grid-cols-12 md:gap-8">
									<dt className="text-base leading-6 font-bold text-white md:col-span-5">Did we miss your question?</dt>
									<dd className="mt-2 md:mt-0 md:col-span-7">
										<p className="text-base leading-6 text-indigo-300 font-semibold">
											If your question isn't answered here, feel free to{' '}
											<a href="mailto:miguel@auralite.io" target="_blank" rel="noreferrer" className="text-indigo-200 font-bold underline">
												email us
											</a>
											. We'll do our best to get back to you as soon as possible with a helpful answer. We'll also try to keep this page updated with questions we get.
										</p>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {},
	}
}
