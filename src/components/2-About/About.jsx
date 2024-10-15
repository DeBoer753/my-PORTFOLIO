// IMGS:
import aboutPhoto from '../../imgs/aboutPhoto.png'

// CSS: 
import styles from './About.module.css'

// ABOUT ME: 
export default function About() {
    return (
        <div>
            <div className={styles.aboutMeHeaderBox}>
                <h1 className={styles.aboutMeHeader} id="about">About Me</h1> {/*AUTO SCROLL ON CLICK FROM NAVABAR*/}
            </div>
            <section className={styles.aboutMeBackground}>
                <div className={styles.aboutMeContent}>
                    <div className={styles.aboutMePortrait}>
                        <img src={aboutPhoto} alt="" />
                    </div>
                    <div className={styles.aboutMeText}>
                        <h2>Software Engineer</h2>
                        <p>Throughout my life as a creative, I have always chased the attraction of
                            the “double take”. Most people look once if it has been done before; but when it has not, they
                            tend to stick around a bit longer. I strive to be this individual.</p>
                        <p>Before my journey as a web developer, I graduated from Academy of Art
                            University with a Multimedia Technologies degree. Upon graduating, I continued to use my
                            creativity with occasional freelancing jobs and personal hobbies. In 2021, I revisited an old
                            class subject of mine online, web design, where I realized that I was implementing my love
                            for creativity and problem solving all with code. This new discovery strengthened my creative pursuit and
                            appreciation towards the tech industry more than ever. Because of it, I am eager to be fully part of the community.</p>
                        <p>My biggest goal is to work as a web developer at a company that
                            prioritizes growth for their employees. I look forward to implementing my current skills and
                            adding to the existing talent showcased within those establishments. Thank you for visiting and
                            I hope you may find my skills and experience of interest.</p>
                        <p>Below are two of my old college animation projects and my photography account that add on to my way of creative thinking when developing websites. 
                            [<a href="https://www.youtube.com/watch?v=E1IA18rUHAY" target="_blank" rel='noreferrer'>thingsiluv</a>, 
                            <a href="https://www.youtube.com/watch?v=3HpOfMvHv9A" target="_blank" rel='noreferrer'> Pixel Tree feat. Leonardo Dicaprio</a>, 
                            <a href="https://www.instagram.com/myles_deboer/?theme=dark" target="_blank" rel='noreferrer'> Photography</a>]
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}