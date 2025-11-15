import React from "react";
import {Contacts} from "@/components/Main/Contacts/Contacts";
import Image from "next/image";
import s from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={ `container ${ s.footer }`}>
			<Contacts className={s.contacts_section} />
			<nav>
				<ul className={s.nav}>
					<li>
						<a href="" className={s.nav_link}>Pro nas</a>
					</li>
					<li>
						<a href="" className={s.nav_link}>Galeria</a>
					</li>
					<li>
						<a href="" className={s.nav_link}>Zapisy</a>
					</li>
					<li>
						<a href="" className={s.nav_link}>Cennik usług</a>
					</li>
					<li>
						<a href="" className={s.nav_link}>Kosmetyki</a>
					</li>
					<li>
						<a href="" className={s.nav_link}>Kontakt</a>
					</li>
				</ul>
			</nav>
			<Image
				src="/images/Footer/Octopus.svg"
				alt="octopus"
				width={108}
				height={108}
				className={s.logo}
				/>
			<a href="https://www.7flows.studio" className={s.studio_link}>
				<Image
					src="/images/Footer/Logo.svg"
					alt="logo web studio"
					width={39}
					height={36}
					/>
				<p>7flows.studio</p>
			</a>
			<p className={s.copyright}>2025 Octopus Studio. All rights reserved  </p>
		</footer>
	)
};
