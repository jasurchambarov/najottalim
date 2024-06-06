import "./Asida.css";

import { Link } from "react-router-dom";

// images

import Sertifikat from "../../Assets/img/Sertifikat.png";
import Sertifikat2 from "../../Assets/img/Sertifikat2.png";
import Button from "../../Assets/img/button2.svg";

function Asida() {
  return (
    <section className="section5">
      <div className="container">
        <div className="asida">
          <img className="asida__img" src={Sertifikat} alt="" />
          <img className="asida__img2" src={Sertifikat2} alt="" />
          <p className="asida__span">+20 dan ortiq </p>
          <h1 className="asida__head">Sertifikatlar</h1>
          <p className="asida__text">
            Barcha yo’nalishlarda kursni tugatganlik haqida tasdiqlovchi
            sertifikatlar topshiriladi.{" "}
          </p>
          <div className="asida__link1">
            <Link to={"/kurslar"}>
              {" "}
              <a className="asida__link" href="#">
                Kurslarni tanlash
                <img className="asida__link--img" src={Button} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Asida;
