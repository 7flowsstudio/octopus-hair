import Hero from "@/components/Main/Hero/Hero";
import {PriceList} from "@/components/Main/PriceList/PriceList";
import {Banner} from "@/components/Main/Banner/Banner";
import {Cosmetics} from "@/components/Main/Cosmetics/Cosmetics";
import {Contacts} from "@/components/Main/Contacts/Contacts";

export default function Home() {
	return (
		<>
			<Hero />
			<PriceList />
			<Banner />
			<Cosmetics />
			<Contacts />
		</>
	);
}
