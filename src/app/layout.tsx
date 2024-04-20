import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/constants/seo.constants'

import '@/css/globals.scss'
import { Providers } from './providers'

export interface LayoutProps {
  children: React.ReactNode
}

const font = Open_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Best one for planning from RED GROUP [htmllessons.ru]'
}

export default function RootLayout({children}: LayoutProps) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<Providers>
					{children}

					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
			</body>
		</html>
	)
}
