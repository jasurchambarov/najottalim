import "./Wrapper.css";

// images

import Yoshlar from "../../Assets/img/yoshlaragent.png";
import Abutech from "../../Assets/img/abutech.png";
import Techjobs from "../../Assets/img/Techjobs.png";
import Kunuz from "../../Assets/img/kunuz.png";
import Edu from "../../Assets/img/Eduaction.png";
import Bolalar from "../../Assets/img/osmon.png";
import Factor from "../../Assets/img/factor.png";
import Milat from "../../Assets/img/Millatumidi.png";
import Cembrij from "../../Assets/img/Cambridge.png";
import Perfect from "../../Assets/img/Perfect.png";
import Dinay from "../../Assets/img/Dinay.png";
import Collage from "../../Assets/img/InternationalCollege.png";
import University from "../../Assets/img/University.png";
import Fido from "../../Assets/img/fido.png";

function Wrapper() {
  return (
    <section className="section7">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper">
            <p className="wrapper__span">Yolg’iz emasmiz</p>
            <h1 className="wrapper__head">Bizning hamkorlar</h1>
            <p className="wrapper__text">
              Yodingizda tuting, biz siz bilan hamkorlik qilishdan doimo
              xursandmiz va sizga o‘z minnatdorchiligimizni bildiramiz!
            </p>
            <img className="yoshlar" height={24.02} width={112.36}  src={Yoshlar} alt="" />
            <img className="abutech" height={24.02} width={114.75}  src={Abutech} alt="" />
            <img className="Techjobs" height={24.02} width={130.93}  src={Techjobs} alt="" />
            <img className="kunuz" height={24.02} width={61.28}  src={Kunuz} alt="" />
            <img className="edu" height={40.03} width={55.6}  src={Edu} alt="" />
            <img className="Bolalar" height={40.03} width={64}  src={Bolalar} alt="" />
            <img className="Factor" height={40.03} width={67.82}  src={Factor} alt="" />
            <img className="Milat" height={43.37} width={48.91}  src={Milat} alt="" />
            <img className="Cembrij" height={50.04} width={56.67}  src={Cembrij} alt="" />
            <img className="Perfect" height={53.38} width={82.91}  src={Perfect} alt="" />
            <img className="Dinay" height={40.03} width={82.74}  src={Dinay} alt="" />
            <img className="Collage" height={86.74} width={154.13}  src={Collage} alt="" />
            <img className="University" height={40.03} width={126.33}  src={University} alt="" />
            <img className="fido" height={30} width={110.62}  src={Fido} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapper;
