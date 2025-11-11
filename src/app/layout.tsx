import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
	title: "Octopus-hair",
	description: "Najlepszy zakład fryzjerski w Piotrkowie-Tribunalskoje",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
