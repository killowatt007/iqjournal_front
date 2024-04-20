import Link from "next/link";
import { FaVk, FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

interface Props {
  children: React.ReactNode
}

export default function MainLayout({children}: Props) {
	return (<>
		<div className="container">
			<header className="header">
				<div className="top-bar">
					<div className="social">
						<div className="item vk"><FaVk /></div>
						<div className="item facebook"><FaFacebookF/></div>
						<div className="item youtube"><TfiYoutube/></div>
					</div>
				</div>
				<nav className="navbar">
					<div className="brand">
						<img src="/images/LOGO-IQ_IQ.jpeg"/>
					</div>
					<div className="nav">
						<ul>
							<li className="active"><Link href='/'>Главная</Link></li>
							<li>
								<Link href='/category'>Жизнь</Link>
								<div className="sub-menu">
									<ul>
										<li><Link href='/category'>Автобиографии</Link></li>
										<li><Link href='/category'>Правильные мысли</Link></li>
										<li><Link href='/category'>Психология</Link></li>
										<li><Link href='/category'>Наука</Link></li>
										<li><Link href='/category'>Вера</Link></li>
									</ul>
								</div>
							</li>
							<li><Link href='/category'>Свобода</Link></li>
							<li><Link href='/category'>Вдохновение</Link></li>
							<li><Link href='/category'>Творчество</Link></li>
							<li><Link href='/category'>Факты</Link></li>
							<li><Link href='#'><FaSearch/></Link></li>
						</ul>
					</div>
				</nav>
			</header>
			<main className="main">
				<div className="sidebar"></div>
				<div className="content h-96">
					{children}
				</div>
			</main>
			<footer></footer>
		</div>
	</>)
}
