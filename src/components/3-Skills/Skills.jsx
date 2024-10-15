// CSS:
import styles from './Skills.module.css'

// SKILLS: 
export default function Skills() {
    return (
        <div>
            <div className={styles.skillsHeaderBox}>
                <h1 className={styles.skillsHeader}>Skills</h1> 
            </div>
            <section className={styles.skills}>
                <div className={styles.skillsContainer}>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>HTML</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>CSS</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>JavaScript</p> 
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>Typescript</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt="" />
                        <p className={styles.svgTitle}>React.js</p>
                    </div> 
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>Next.js</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>Python</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>Node.js</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} alt="" />
                        <p className={styles.svgTitle}>Express</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} alt="" />
                        <p className={styles.svgTitle}>Git</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} alt="" />
                        <p className={styles.svgTitle}>GitHub</p>
                    </div>
                    <div className={styles.svgContainer}>
                        <img className={styles.svgSizeAndColor} src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"} alt="" />
                        <p className={styles.svgTitle}>Photoshop</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
