// IMGS:
import metatower from '../../imgs/metatower.png'
import portfolio from '../../imgs/portfolio.png'
import sheltr from '../../imgs/sheltr.png'
import bloodBank from '../../imgs/bloodBank.png'
import bashscape from '../../imgs/bashscape.png'
import weatherBox from '../../imgs/weatherBox.png'
import bugsly from '../../imgs/bugsly.png'

// CSS:
import styles from './Projects.module.css'

// PROJECTS:
export default function Projects() {
    return (

        <div>
            <div className={styles.projectsHeaderBox}>
                <h1 className={styles.projectsHeader} id="projects">Projects</h1>
            </div>
            <section className={styles.projects}>
                <div className={styles.project}>
                    <img src={metatower} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Metatower Media LLC</h5>
                        <p>A website showcasing my services in web development, photography, videography, and graphic design for small businesses.</p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: Next.js, Typescript, Chakra UI, Framer Motion, and Photoshop</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop, tablet, and smartphone</p>
                        <p>
                            <a href="https://splendid-conkies-26e4a0.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.projectButtons}>Live
                                Site</button></a>
                            <a href="https://github.com/DeBoer753/myllc-APP" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={portfolio} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Portfolio</h5>
                        <p>A portfolio based website displaying my background in visual detail to learn more about who I am, the
                            skills I've developed, and projects I have either created personally or in collaboration with
                            teammates. </p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: HTML, CSS, JavaScript, React.js, and Photoshop</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop, tablet, and smartphone</p>
                        <p>
                            <a href='https://github.com/DeBoer753/my-portfolio' target="_blank" rel="noreferrer"><button className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={bugsly} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Bugsly</h5>
                        <p>A group bug tracking project that gives users an opportunity to list issues while collaborating with teammates to tackle problems firsthand. Users can 
                            input issue priority, the status of the issue, and assign certain issues to those with certain development strengths. Bugsly is simple, 
                            useful, and easy to use all in one. 
                        </p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: HTML, CSS, Chakra, JavaScript, React.js, Redux, Sequelize, PostgreSQL, and Photoshop</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop and tablet</p>
                        <p>
                            {/* <a href="https://bugsly.herokuapp.com/login" target="_blank" rel="noreferrer"><button className={styles.projectButtons}>Live
                                Site</button></a> */}
                            <a href="https://github.com/DeBoer753/bug-tracker-PROJECT" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={weatherBox} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Weather Box</h5>
                        <p>Weather Box is an interactive weather application where users can input a name of a city which then displays 
                            the city's forecast. The theme is based around unpacking a box with weather related contents inside. Upon each 
                            city inputted, and depending on the daily and weekly forecast given, images will appear that represent activities
                            of what is suited best for the selected forecast.</p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: HTML, CSS, JavaScript, React.js, Redux, and Photoshop</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop and tablet</p>
                        <p>
                            <a href="https://www.deboer753-weatherbox.com/" target="_blank" rel="noreferrer"><button className={styles.projectButtons}>Live
                                Site</button></a>
                            <a href="https://github.com/DeBoer753/weather-box-PROJECT" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={sheltr} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Sheltr</h5>
                        <p>A group project that extends a helping hand by providing a platform of collected data from
                            multiple API sources of local shelters integrated with google maps. The three given cities are some
                            of the most affected cities in the U.S to experience homelessness. Sheltr was created using HTML,
                            CSS, JavaScript, and open source API’s.</p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: HTML, CSS, and JavaScript</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop, tablet, and smartphone</p>
                        <p>
                            <a href="https://sheltr.netlify.app/" target="_blank" rel="noreferrer"><button className={styles.projectButtons}>Live
                                Site</button></a>
                            <a href="https://github.com/ChaseChilders/Sheltr" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}> 
                    <img src={bloodBank} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>Donor Health App</h5>
                        <p>A group project aimed towards medical professionals to allow them access to patient donor data.
                            This app was created to pack down the concepts of what is backend and the relationships involved
                            in sending data from one point to another using PostgreSQL. We also added user authentication to
                            simulate profile ownership as a medical professional.</p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: HTML, CSS, JavaScript, ES6 Template Engine, Node.js,
                            Express, and PostgreSQL/Sequelize</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop, tablet, and smartphone</p>
                        <p>
                            {/* <a href="https://bloodbathproject.herokuapp.com/" target="_blank" rel="noreferrer"><button className={styles.projectButtons}>Live
                                Site</button></a> */}
                            <a href="https://github.com/rlmcmillan12/Project_Bloodbath" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={bashscape} alt="" border="0" />
                    <div className={styles.projectInfo}>
                        <h5>BashScape</h5>
                        <p>An RPG game based on the classic MMORPG, RuneScape, built entirely on Python where players can level
                            up their stats, experience quests, and unlock milestones.</p>
                        <p className={styles.projectInfoLanguagesUsed}>Tools Used: Python</p>
                        <p className={styles.projectInfoLanguagesUsed}>Compatible Devices: desktop</p>
                        <p>
                            <a href="https://github.com/DeBoer753/bashscape-PROJECT" target="_blank" rel="noreferrer"><button
                                className={styles.projectButtons}>View Code on Github</button></a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
