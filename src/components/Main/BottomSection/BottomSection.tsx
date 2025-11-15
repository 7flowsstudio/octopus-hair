import {Cosmetics} from "@/components/Main/Cosmetics/Cosmetics";
import {Footer} from "@/components/Footer/Footer";
import s from './BottomSection.module.css'

export const BottomSection = () => {
    return (
        <div className={s.bottom_section}>
            <Cosmetics />
            <Footer />
        </div>
    )
}