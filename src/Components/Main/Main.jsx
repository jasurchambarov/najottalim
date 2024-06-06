import "./Main.css";

import { Link } from "react-router-dom";

// images

import Dasturlash from "../../Assets/img/Dasturlash.svg";
import Dizayn from "../../Assets/img/Dizayn.svg";
import Marketing from "../../Assets/img/Marketing.svg";
import Button from "../../Assets/img/button2.svg";

function Main() {
  return (
    <section className="section4">
      <div className="container">
        <div className="main">
          <p className="main__span">Kelajak kasblari</p>
          <h1 className="main__head">
            Kategoriyalar bo'yicha tanlangan mavzular
          </h1>
          <ul className="main__list">
            <li className="main__item">
              <img className="main__img" src={Dasturlash} alt="" />
              <h3 className="main__item--head">Dasturlash</h3>
            </li>
            <li className="main__item">
              <img className="main__img" src={Dizayn} alt="" />
              <h3 className="main__item--head">Dizayn</h3>
            </li>{" "}
            <li className="main__item">
              <img className="main__img" src={Marketing} alt="" />
              <h3 className="main__item--head">Marketing</h3>
            </li>
          </ul>
          <div className="main2">
            <ul className="main__list2">
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Python
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 30.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Bootcamp
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 21.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Foundation
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 25.09.2021
                </p>
              </li>
            </ul>
            <ul className="main__list2">
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Brending
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 28.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Grafik dizayn
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 22.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Bootcamp UX/UI Dizayn
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 23.09.2021
                </p>
              </li>
            </ul>
            <ul className="main__list2">
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Raqamli Marketing
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 27.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  SMM Pro
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 19.09.2021
                </p>
              </li>
              <li className="main__item2">
                <a href="#" className="main__item2--link">
                  Targeting
                </a>
                <p className="main__item2--text">
                  Boshlanish vaqti: 21.09.2021
                </p>
              </li>
            </ul>
          </div>
          <Link to={"/kurslar"}>
            <a className="main__data--link" href="#">
              Barcha kurslarni ko'rish
              <img className="main__data--link--img" src={Button} alt="" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Main;
