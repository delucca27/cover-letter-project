import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBehance } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Resume() {
   return (
      <>
      <div className={"written-content typo-defaults"}>
         <h3>Education</h3>
         <hr />

         <div className="box-container">
            <div className="box-container__title">
               <h4>Udemy</h4>
               <span className="timespan">2021 — present</span>
            </div>

            <div className="box-container__content">
               <h5>Javascript Course: <span>by Jonas Schmedtmann</span></h5>
            </div>
         </div>

         <div className="box-container">
            <div className="box-container__title">
               <h4>Dev Ed</h4>
               <span className="timespan">2020</span>
            </div>

            <div className="box-container__content">
               <h5>Full ReactJS Course <span>by Dev Ed</span></h5>
            </div>
         </div>

         <div className="box-container">
            <div className="box-container__title">
               <h4>Instituto Federal Catarinense</h4>
               <span className="timespan">2020 — present</span>
            </div>

            <div className="box-container__content">
               <h5>Highschool &</h5>
               <h5><span>Computer Technician Degree</span></h5>
            </div>
         </div>

         <div className="box-container">
            <div className="box-container__title">
               <h4>Rockfeller English School</h4>
               <span className="timespan">2016 — 2019</span>
            </div>

            <div className="box-container__content">
               <h5>English course <span>diploma</span></h5>
            </div>
         </div>


         <h3>Programming/Design Skills</h3>
         <hr />

         <ul className="traits-list">
            <li>HTML <span>8/10</span></li>
            <li>CSS <span>8/10</span></li>
            <li>Javascript <span>7/10</span></li>
            <li>React JS <span>8/10</span></li>
            <li>Express JS <span>6/10</span></li>
            <li>SCSS <span>8/10</span></li>
            <li>UX/UI <span>8/10</span></li>
            <li>Figma <span>9/10</span></li>
         </ul>

         <h3>Spoken Languages</h3>
         <hr />

         <ul className="traits-list">
            <li>Portuguese <span>(Native)</span></li>
            <li>English <span>(Fluent)</span></li>
         </ul>

         <h3>Contact Me</h3>
         <hr />

         <ul className="social-media-row">
            <li><a href="https://www.instagram.com/_deluccaaa"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.github.com/delucca27"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.behance.net/_deluccaaa"><FontAwesomeIcon icon={faBehance} /></a></li>
         </ul>
         <a href="mailto:dev.pedrolucca@gmail.com" className="email-link">or try my email: dev.pedrolucca@gmail.com</a>
         <br />
         <br />
      </div>
      </>
   )
}
