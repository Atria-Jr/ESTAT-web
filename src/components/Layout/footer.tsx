import Bj from "./../../assets/Logo BJ.png";
import Fejesp from "./../../assets/logo Fejesp.png";
import NUCA from "./../../assets/NUCLEO-CAMPINAS.png";
import Unicamp from "./../../assets/logo unicamp.png";
import Logo from "./../../assets/logo.png";
import Logo_alterna from "./../../assets/logo altenativa footer.png";


function Footer() {
  return (
    <div>

    <div className="flex items-center justify-evenly bg-[#ccd9df] px-4 py-8">
      <img src={Bj}     className="h-10 md:h-20 object-contain" alt="Brasil Júnior" />
      <img src={Fejesp} className="h-10 md:h-20 object-contain" alt="FEJESP" />
      <img src={NUCA}   className="h-10 md:h-20 object-contain" alt="Núcleo Campinas" />
      <img src={Unicamp} className="h-10 md:h-20 object-contain" alt="Unicamp" />
      <img src={Logo}   className="h-10 md:h-20 object-contain" alt="Atria Jr" />
    </div>

    <div className=" bg-[#235F77]  h-100  ">

        <div className="flex justify-center items-center">

        <div className="bg-white h-80">
         <img src={Logo_alterna} className="h-80  object-contain" alt="Brasil Júnior" />
        </div>



        
        </div>


        
    </div>


    </div>
    
  );
}

export default Footer;
