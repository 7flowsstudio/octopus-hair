import Image from "next/image";
import s from './PriceList.module.css'

export const PriceList = () => {
    return (
        <section className={`container ${s.price_container}`}>
            <h2 className="title">
                Cennik usług
            </h2>
            <ul className={s.price_list}>
                <li className={s.price_list_item}>
                    <div className={s.item_image}>
                        <Image
                            src="/images/PriceList/scissors.svg"
                            alt="nożyczki"
                            width={62}
                            height={62}
                        />
                    </div>
                    <div className={s.item_description}>
                        <p className={s.service}>Strzyżenie klasyczne</p>
                        <p className={s.price}>40 Zł</p>
                    </div>

                </li>
                <li className={s.price_list_item}>
                    <div className={s.item_image}>
                        <Image
                            src="/images/PriceList/trimmer.svg"
                            alt="przycinarka"
                            width={32}
                            height={78}
                        />
                    </div>
                    <div className={s.item_description}>
                        <p className={s.service}>Strzyżenie maszynka</p>
                        <p className={s.price}>30 Zł</p>
                    </div>
                </li>
                <li className={s.price_list_item}>
                    <div className={s.item_image}>
                        <Image
                            src="/images/PriceList/man.svg"
                            alt="Człowiek"
                            width={56}
                            height={62}
                        />
                    </div>
                    <div className={s.item_description}>
                        <p className={s.service}>Strzyżenie + broda</p>
                        <p className={s.price}>70 Zł</p>
                    </div>
                </li>
                <li className={s.price_list_item}>
                    <div className={s.item_image}>
                        <Image
                            src="/images/PriceList/beard.svg"
                            alt="broda"
                            width={64}
                            height={64}
                        />
                    </div>
                    <div className={s.item_description}>
                        <p className={s.service}>Broda</p>
                        <p className={s.price}>30 Zł</p>
                    </div>
                </li>
                <li className={s.price_list_item}>
                    <div className={s.item_image}>
                        <Image
                            src="/images/PriceList/shampoo.svg"
                            alt="szampon"
                            width={52}
                            height={64}
                        />
                    </div>
                    <div className={s.item_description}>
                        <p className={s.service}>Mycie głowy</p>
                        <p className={s.price}>+10 Zł</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}