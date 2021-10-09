import Memoji from "../assets/memoji.png";


export default function HeroSection() {
   return(
      <>
      <section className={"typo-defaults hero"}>
         <div className="hero__content">

            <img src={Memoji} alt="" height={'230vh'}/>

            <span>Hey, I am Pedro!</span>
            <h1>
               Frontend developer<br />
               UI/UX designer<br />
               Freelancer<br />
            </h1>

            <button>
               Let's Talk!
            </button>
         </div>
      </section>
      </>
   );
}