import Image from "next/image";
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <section className="container">
            <h2 className="title">Kontakt</h2>
            <div className={s.contacts_wrapper}>
                <ul className={s.contact_list}>
                    <li>
                        <a
                            href="https://www.google.com/maps?q=Piotrków+Trybunalski,+ul.+Wojska+Polskiego+41%2F43"
                            target="_blank"
                            className={s.contact_item}
                        >
                            <Image
                                src="/images/Contacts/location.svg"
                                alt="location"
                                width={32}
                                height={32}
                            />
                            <p className={s.contact_item_text}>
                                Piotrków Trybunalski, ul. Wojska Polskiego 41/43
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            href="tel:+48571059276"
                            className={s.contact_item}
                        >
                            <Image
                                src="/images/Contacts/phone.svg"
                                alt="phone"
                                width={32}
                                height={32}
                            />
                            <p className={s.contact_item_text}>
                                +48 571 059 276
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            href="mailto:octopus.lukasz@gmail.com"
                            target="_blank"
                            className={s.contact_item}
                        >
                            <Image
                                src="/images/Contacts/mail.svg"
                                alt="mail"
                                width={32}
                                height={32}
                            />
                            <p className={s.contact_item_text}>
                                octopus.lukasz@gmail.com
                            </p>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/octopusstudio_piotrkow?igsh=MTMxcTZ1aGt0NWJrYw=="
                            target="_blank"
                            className={s.contact_item}
                        >
                            <Image
                                src="/images/Contacts/instagram.svg"
                                alt="instagram"
                                width={32}
                                height={32}
                            />
                            <p className={s.contact_item_text}>
                                @octopusstudio_piotrkow
                            </p>
                        </a>
                    </li>

                </ul>
                <div className={s.map_frame}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.608013932454!2d19.688719088920774!3d51.41025679905756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47198a8c469d0273%3A0x1a9488503d537612!2zV29qc2thIFBvbHNraWVnbyA0MS80MywgOTctMzAwIFBpb3Rya8OzdyBUcnlidW5hbHNraSwg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2spt!4v1763134128720!5m2!1sru!2spt"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </section>
    )
}