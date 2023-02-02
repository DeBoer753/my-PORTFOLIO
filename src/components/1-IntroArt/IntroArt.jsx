// CSS:
import styles from './IntroArt.module.css'

// CREATIVE INTRO:
export default function CreativeIntro() {
    return (
        <div className={styles.introArtBackground} id="home">
            <section className={styles.introBackground}>
                <div className={styles.mountain1}>
                    <div className={styles.snow1}></div>
                    <div className={styles.snowJagged1}></div>
                </div>
                <div className={styles.mountainShadow1}>
                    <div className={styles.snowShadow1}></div>
                </div>

                <div className={styles.mountain2}>
                    <div className={styles.snow2}></div>
                    {/* <div className={styles.snowJagged2a}></div> */}
                    <div className={styles.snowJagged2b}></div>
                </div>
                <div className={styles.mountainShadow2}>
                    <div className={styles.snowShadow2}></div>
                </div>

                <div className={styles.mountain3}>
                    <div className={styles.snow3}></div>
                    <div className={styles.snowJagged3}></div>
                </div>
                <div className={styles.mountainShadow3}>
                    <div className={styles.snowShadow3}></div>
                </div>


                <div className={styles.mountain4}>
                    <div className={styles.snow4}></div>
                    <div className={styles.snowJagged4}></div>
                </div>
                <div className={styles.mountainShadow4}>
                    <div className={styles.snowShadow4}></div>
                    <div className={styles.snowJagged4b}></div>
                </div>

                <div className={styles.building1}></div>
            </section>
        </div>
    )
}