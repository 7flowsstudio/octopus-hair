import Hero from "@/components/Main/Hero/Hero";
import {PriceList} from "@/components/Main/PriceList/PriceList";
import {Banner} from "@/components/Main/Banner/Banner";

export default function Home() {
	return (
		<>
			<Hero />
			<PriceList />
			<Banner />
		</>
	);
}
