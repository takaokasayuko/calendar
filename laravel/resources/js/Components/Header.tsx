import { Link } from '@inertiajs/react';
import MaterialSymbolsCalendarMonthOutline from './MaterialSymbolsCalendarMonthOutline';

function Header() {
	return (
		<header className="text-5xl bg-black text-white p-2" >
			<Link href="/" className="flex ">
				<MaterialSymbolsCalendarMonthOutline />
        calendar
			</Link>
		</header>
	)
}

export default Header;