import "./Header.css";

import { Link } from "react-router-dom";

// images

import Logo from "../../Assets/img/Logo.svg";
import Button from "../../Assets/img/button.svg";
import Star from "../../Assets/img/star.svg";

function Header() {
  return (
    <section className="section1">
      <div className="container">
        <header className="header__section1">
          <Link to={"/"}>
            <a href="">
              <img src={Logo} alt="logo" className="header__logo" />
            </a>
          </Link>
          <ul className="header__item">
            <Link to={"/About"}>
              {" "}
              <a href="">
                <li className="header__list">Biz haqimizda</li>
              </a>
            </Link>
            <Link to={"/Blog"}>
              <a href="">
                <li className="header__list">Blog</li>
              </a>
            </Link>
          </ul>
          <button className="header__button">Kirish</button>
          <a href="">
            <p className="header__text">Ilm va tajriba ulashamiz</p>
          </a>
          <h1 className="header__head">
            Shunchaki <br /> o’quv markazi emas, <br /> haqiqiy{" "}
            <span className="header__head--span"> professionallar </span> <br />{" "}
            makoni
          </h1>
          <p className="header__text2">
            O’zingizga investitiya kiritish vaqti, biz bilan birga boshlang!
          </p>
          <Link to={"/Kurslar"}>
            <button className="header__button2">
              Kursni tanlang{" "}
              <img className="button__img" src={Button} alt="img" />
            </button>
          </Link>
          <div className="star">
            <img src={Star} alt="star" />
            <p className="star__text">Birinchi dars bepul!</p>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header;
