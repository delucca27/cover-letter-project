import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
   return(
      <>
      <section className="navbar">
         <nav className="navbar__content">
            <button style={{
               fontSize: '36px'
            }}>
               <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <ul className="nav-list">
               <li><button>Works</button></li>
               <li><button>Resume</button></li>
               <li><button>What I do</button></li>
               <li><button>Contact</button></li>
            </ul>
         </nav>
      </section>
      </>
   );
}