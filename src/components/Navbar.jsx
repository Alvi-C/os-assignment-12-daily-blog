'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation'
const Navbar = () => {
    let currentPath = usePathname()

    return (
			<div className='container mx-auto'>
				<Link href='/'>
					<h1 className='text-center text-3xl font-bold mt-6'>Daily Blog</h1>
				</Link>
				<div className='flex justify-center gap-6 mt-6'>
					<Link href='/'>
						<span
							className={
								currentPath === '/'
									? 'text-base text-blue-600 underline underline-offset-4'
									: 'text-gray-600 text-base'
							}
						>
							Home
						</span>
					</Link>
					<Link href='/blog'>
						<span
							className={
								currentPath === '/blog'
									? 'text-base text-blue-600 underline underline-offset-4'
									: 'text-gray-600 text-base'
							}
						>
							Blog
						</span>
					</Link>
					<Link href='/about'>
						<span
							className={
								currentPath === '/about'
									? 'text-base text-blue-600 underline underline-offset-4'
									: 'text-gray-600 text-base'
							}
						>
							About us
						</span>
					</Link>

					<Link href='/contact'>
						<span
							className={
								currentPath === '/contact'
									? 'text-base text-blue-600 underline underline-offset-4'
									: 'text-gray-600 text-base'
							}
						>
							Contact us
						</span>
					</Link>
				</div>
			</div>
		)
};

export default Navbar;

