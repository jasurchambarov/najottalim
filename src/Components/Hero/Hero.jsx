import "./Hero.css";
import { Link } from "react-router-dom";

// images

import Illus from "../../Assets/img/illus.png";
import Button from "../../Assets/img/button2.svg";
import Img from "../../Assets/img/baground.png";
import Img2 from "../../Assets/img/baground2.png";

function Hero() {
  return (
    <section className="section3">
      <div className="container">
        <div className="hero">
          <div className="hero__box">
            <img src={Illus} alt="" className="hero__box--img" />
            <p className="hero__span">Yangi +3 ta kurs</p>
            <h1 className="hero__head">Dasturlash</h1>
            <p className="hero__text">
              Sodda til bilan tushuntirilganda, insonlarga baxt eltuvchi, ularni
              muammolariga qulay yechim ko’rsatuvchi soha.
            </p>
            <Link to={"/kurslar"}>
              {" "}
              <a className="hero__link" href="#">
                Kurslarni tanlash
                <img className="hero__link--img" src={Button} alt="" />
              </a>
            </Link>
          </div>
          <div className="hero__data">
            <h1 className="hero__data--head">Marketing kursiga 30% chegirma</h1>
            <div className="yil__textt">
            <p className="yil__text">Start: 30.09.2021</p>
            </div>
            <div className="soat">14:12:34</div>
            <p className="soat__text"> daqiqa qoldi</p>
            <div className="linkk">
              <Link to={"/Kurslar"}>
                {" "}
                <a className="hero__data--link" href="#">
                  Kurslarni boshlash
                  <img className="hero__data--link--img" src={Button} alt="" />
                </a>
              </Link>
            </div>
          </div>
          <ul className="hero__item">
            <li className="hero__list">
              <p className="hero__list--span">Yangi +2 ta kurs</p>
              <h1 className="hero__list--head">Dizayn</h1>
              <p className="hero__list--text">
                Doimiy ravishda rivojlanib boruvchi va tobora ko'proq raqobatni
                keltirib chiqaradigan jahon bozorida mahsulotni targ'ib
                qilishning eng samarali vositalaridan biri.
              </p>
              <Link to={"/kurslar"}>
                {" "}
                <a className="hero__list--link" href="#">
                  Kurslarni tanlash
                  <img className="hero__list--link--img" src={Button} alt="" />
                </a>
              </Link>
              <img className="hero__list--img" src={Img} alt="" />
            </li>
            <li className="hero__list">
              <p className="hero__list--span">Yangi +4 ta kurs</p>
              <h1 className="hero__list--head">Marketing</h1>
              <p className="hero__list--text">
                Jamiyat uchun qadr-qiymati bor boʻlgan narsalarni yetkazish va
                ular bilan kommunikatsiya qilish uchun harakatlar yigʻindisi.
              </p>
              <Link to={"/kurslar"}>
                <a className="hero__list--link" href="#">
                  Kurslarni tanlash
                  <img className="hero__list--link--img" src={Button} alt="" />
                </a>
              </Link>
              <img className="hero__list--img" src={Img2} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
