import "./Head.css";

import { Link } from "react-router-dom";

// images

import Logo from "../../Assets/img/Logo.svg";

function Head() {
  return (
    <section className="section10">
      <div className="container">
        <div className="head__section1">
          <Link>
            {" "}
            <a href="/">
              <img src={Logo} alt="logo" className="header__logo" />
            </a>
          </Link>
          <ul className="header__item">
            <Link to={"/About"}>
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
        </div>
      </div>
    </section>
  );
}

export default Head;
