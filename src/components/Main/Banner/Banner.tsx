import Image from "next/image";
import s from './Banner.module.css'

export const Banner = () => {
    return (
        <section className={`container ${s.banner}`}>
            <h2 className="title">
                CO DZIESIĄTE STRZYŻENIE GRATIS!
            </h2>
            <Image
                src="/images/Banner/Gift.svg"
                alt="prezent"
                width={75}
                height={78}
            />
        </section>
    )
}