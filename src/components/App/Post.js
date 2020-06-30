import moment from 'moment'
import React from 'react'
import Link from 'next/link'
import Avatar from './Avatar'
import useFormat from '../../hooks/format'

const Post = ({ post, shouldLink = true, showReplyIndicator = true }) => {
	let postContent = useFormat(post.content)

	const Wrapper = shouldLink ? Link : 'div'
	const ChildWrapper = shouldLink ? 'a' : 'div'

	moment.updateLocale('en', {
		relativeTime: {
			future: 'in %s',
			past: '%s ago',
			s: '%ds',
			ss: '%ds',
			m: '%dm',
			mm: '%dm',
			h: '%dh',
			hh: '%dh',
			d: '%dd',
			dd: '%dd',
		},
	})

	return (
		<div className="flex">
			<Wrapper href="[profile]/posts/[post]" as={`/${post.author_handle}/posts/${post.id}`}>
				<ChildWrapper className={`border-b px-2 py-4 w-full ${shouldLink ? 'cursor-pointer' : ''}`}>
					{post.reply_to && showReplyIndicator && (
						<Link href="[profile]/posts/[post]" as={`/${post.parent.author_handle}/posts/${post.parent.id}`}>
							<a className="flex items-center text-gray-400">
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
								<span className="ml-2">Replying to @{post.parent.author_handle}'s post</span>
							</a>
						</Link>
					)}
					<div className="flex items-center">
						<Link href="/[profile]" as={`/${post.author_handle}`}>
							<a>
								<Avatar src={post.author.avatar} className="mr-2 mt-1" sizeClasses="h-10 w-10" />
							</a>
						</Link>
						<div className="flex-1 flex items-center justify-between whitespace-no-wrap overflow-hidden mr-1">
							<div>
								<Link href="/[profile]" as={`/${post.author_handle}`}>
									<a className="font-bold text-gray-800 mr-2">{post.author.name}</a>
								</Link>
								<Link href="/[profile]" as={`/${post.author_handle}`}>
									<a className="text-gray-600">@{post.author_handle}</a>
								</Link>
							</div>
							<span className="text-gray-400">{moment.unix(post.created_at).fromNow(true)}</span>
						</div>
					</div>
					<div className="mt-3 leading-normal text-lg">{postContent}</div>
				</ChildWrapper>
			</Wrapper>
		</div>
	)
}

export default Post