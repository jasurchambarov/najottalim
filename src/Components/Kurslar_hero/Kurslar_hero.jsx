import "./Kurslar_hero.css";
import { useState } from "react";
import { useEffect, useRef } from "react";

import { Link } from "react-router-dom";

// images

import Img from "../../Assets/img/img.svg";
import Search from "../../Assets/img/search.svg";
import Noutbook from "../../Assets/img/noutbook.png";
import Dizayn from "../../Assets/img/dizayn.png";
import Market from "../../Assets/img/marketing.png";
import Button from "../../Assets/img/button2.svg";
import Sulaymon from "../../Assets/img/sulaymon.svg";
import Tr from "../../Assets/img/tr.svg";
import data from "./data";

function Kurslar_hero() {
  const [search, setSearch] = useState("");
  return (
    <section className="section__kurslar">
      <div className="container">
        <div className="kurslar__hero">
          <Link to={"/"}>
            <a href="" className="kurslar__link">
              Bosh sahifa <img src={Img} alt="" />
            </a>
          </Link>
          <Link to={"/Kurslar"}>
            <a href="" className="kurslar__link">
              Kurslar{" "}
            </a>
          </Link>
          <h1 className="kurslar__head">Barcha o’quv kurslar </h1>
          <div className="box">
            <button className="box__button">Online</button>
            <button className="box__button2">Offline</button>
          </div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="kurslar__input"
            type="text"
            placeholder="Qidiruv"
          />
          <img className="input__img" src={Search} alt="" />
          <div className="kurslar__main">
            <div className="kurslar__main1">
              <ul className="kurslar__list">
                <li className="kurslar__item">
                  <h3 className="kurslar__item--head">Dasturlash</h3>
                  <p className="kurslar__item--text">12 ta kurs</p>
                  <img className="item__img" src={Noutbook} alt="" />
                </li>
                <li className="kurslar__item">
                  <h3 className="kurslar__item--head">Dizayn</h3>
                  <p className="kurslar__item--text">5 ta kurs</p>
                  <img className="item__img" src={Dizayn} alt="" />
                </li>{" "}
                <li className="kurslar__item">
                  <h3 className="kurslar__item--head">Marketing</h3>
                  <p className="kurslar__item--text">3 ta kurs</p>
                  <img className="item__img2" src={Market} alt="" />
                </li>
              </ul>
              <div className="kurslar__data">
                <h1 className="kurslar__data--head">
                  Marketing kursiga 30% chegirma
                </h1>
                <div className="data1">
                  <p className="yil__text1">Start: 30.09.2021</p>
                  <div className="soat1">14:12:34</div>
                </div>
                <div className="link1">
                  <a className="kurslar__data--link" href="#">
                    Kurslarni boshlash
                    <img
                      className="kurslar__data--link--img"
                      src={Button}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="kurslar__widget">
              <ul className="widget2__list">
                <li className="widget2__item">
                  {data
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.first_name.toLowerCase().includes(search);
                    })
                    .map((item, index) => (
                      <Link to={"/foundation"}>
                        {" "}
                        <li className="item__tr" key={index}>
                          <h1 className="first__name">{item.first_name}</h1>
                          <p className="name">{item.name}</p>
                          <div className="href1">
                            <a href="#" className="last__name">
                              {item.last_name}
                            </a>
                          </div>
                          <div className="href">
                            <a href="#" className="email">
                              {" "}
                              {item.email}
                            </a>
                          </div>
                          <img className="tr__img" src={Sulaymon} alt="" />
                          <abbr
                            title="Flutter - bu Android va iOS uchun mobil
                     dasturlarni, shuningdek Google 
                     korporatsiyasi tomonidan ishlab chiqilgan 
                     va ishlab chiqilgan Dart dasturlash tilidan 
                     foydalanadigan veb-ilovalarni yaratish 
                     uchun ochiq manbali ishlab chiqarish 
                     to'plami va ramkasi."
                          >
                            {" "}
                            <img className="tr__img2" src={Tr} alt="" />
                          </abbr>
                        </li>
                      </Link>
                    ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kurslar_hero;
