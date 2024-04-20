'use client'

import { useProfile } from '@/hooks/useProfile'

export function Statistics() {
	const { data, isLoading } = useProfile()

	return isLoading ? (
		'Loader'
	) : (
		<div className='grid grid-cols-4 gap-12 mt-7'>
			Dashboard
		</div>
	)
}
