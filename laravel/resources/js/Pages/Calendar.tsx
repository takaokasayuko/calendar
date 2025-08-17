import { Link } from '@inertiajs/react'
import React from 'react'

export default function Calendar() {
	return (
		<>
			<div>カレンダー</div>
			<Link href={route('logout')} method="post">ログアウト</Link>
		</>
	)
}
