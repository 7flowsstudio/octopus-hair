import Image from "next/image";
import s from './Cosmetics.module.css'

export const Cosmetics = () => {
    return (
        <section className={`container ${s.cosmetics}`}>
            <h2 className="title">
                Kosmetyki do pielęgnacji
            </h2>
            <p className={s.cosmetics_desc}>
                Tutaj możesz kupić profesjonalne produkty do włosów i brody, których używamy w naszej pracy.
            </p>
            <ul className={s.cosmetics_list}>
                <li className={s.cosmetics_item}>
                    <Image
                        src="/images/Cosmetics/gloss.jpg"
                        alt="gloss"
                        width={343}
                        height={256}
                        className={s.cosmetics_item_image}
                        />
                    <p className={s.cosmetics_item_desc}>
                        Wosk stylizujący NEW FIX X Shaping Gloss — nadaje połysk i wyraźny kształt fryzurze.
                    </p>
                </li>
                <li className={s.cosmetics_item}>
                    <Image
                        src="/images/Cosmetics/styler.jpg"
                        alt="Krem do stylizacji"
                        width={343}
                        height={256}
                        className={s.cosmetics_item_image}
                    />
                    <p className={s.cosmetics_item_desc}>
                        Żel o silnym utrwaleniu NEW FIX Stone Style Extra Strong — zapewnia długotrwałe utrwalenie fryzury.
                    </p>
                </li>
                <li className={s.cosmetics_item}>
                    <Image
                        src="/images/Cosmetics/shampoo.jpg"
                        alt="Szampon"
                        width={343}
                        height={256}
                        className={s.cosmetics_item_image}
                    />
                    <p className={s.cosmetics_item_desc}>
                        Linia szamponów GREEN CARE ESSENCE od bbcos — do różnych rodzajów włosów, z naturalnymi ekstraktami.
                    </p>
                </li>
            </ul>
        </section>
    )
}