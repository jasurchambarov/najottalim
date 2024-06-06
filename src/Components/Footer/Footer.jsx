import "./Footer.css";

// images

import Logo2 from "../../Assets/img/Logo2.svg";
import telegram from "../../Assets/img/telegram.svg";
import facebook from "../../Assets/img/facebook.svg";
import youtube from "../../Assets/img/youtube.svg";
import twitter from "../../Assets/img/twitter.svg";

function Footer() {
  return (
    <section className="section2">
      <div className="container">
        <div className="footer">
          <img src={Logo2} alt="logo" className="footer__logo" />
          <p className="footer__text">
            Saytda ishlatilgan ma’lumotlar, video kontentlar himoyalangan.
            Ularni yozib olish, ko'chirish, tarqatish mumkin emas, aks holda
            javobgarlikka tortilasiz!
          </p>
          <p className="footer__text2">
            © 2021. <br /> All rights reserved
          </p>
          <div className="footer__box">
            <ul className="footer__item">
              <li className="footer__list">
                <h4 className="footer__list--head">KURSLAR</h4>
                <a href="#" className="footer__list--link">
                  Dizayn
                </a>
                <a href="#" className="footer__list--link">
                  Dasturlash
                </a>
                <a href="#" className="footer__list--link">
                  Marketing
                </a>
                <a href="#" className="footer__list--link">
                  Xorijiy Tillar
                </a>
              </li>
              <li className="footer__list">
                <h4 className="footer__list--head">DASTURLASH</h4>
                <a href="#" className="footer__list--link">
                  Foundation
                </a>
                <a href="#" className="footer__list--link">
                  Web Dasturlash
                </a>
                <a href="#" className="footer__list--link">
                  Android Dasturlash
                </a>
                <a href="#" className="footer__list--link">
                  IOS Dasturlash
                </a>
              </li>{" "}
              <li className="footer__list">
                <h4 className="footer__list--head">DIZAYN</h4>
                <a href="#" className="footer__list--link">
                  Bootcamp Grafika Dizayni
                </a>
                <a href="#" className="footer__list--link">
                  Bootcamp UX/UI Dizayn
                </a>
                <a href="#" className="footer__list--link">
                  Grafika Dizayni
                </a>
                <a href="#" className="footer__list--link">
                  Brending
                </a>
              </li>{" "}
              <li className="footer__list">
                <h4 className="footer__list--head">MARKETING</h4>
                <a href="#" className="footer__list--link">
                  Raqamli Marketing
                </a>
                <a href="#" className="footer__list--link">
                  SMM Pro
                </a>
                <a href="#" className="footer__list--link">
                  Youtube
                </a>
                <a href="#" className="footer__list--link">
                  Targeting
                </a>
              </li>
            </ul>
          </div>
          <div className="footer2">
            <hr className="footer__hr" />
            <ul className="footer2__item">
              <li className="footer2__list">
                <h3 className="footer2__head">
                  Toshkent shahri, Xadra maydoni, Sebzor ko'chasi
                </h3>
                <p className="footer2__text">
                  Mo'ljal: O'zbekiston davlat sirkining orqa tarafi, Milliy
                  taomlar yonida.
                </p>
              </li>
              <li className="footer2__list">
                <h3 className="footer2__head">Tarmoqlar:</h3>
                <div className="link">
                  <a href="https://t.me/najottalim" className="footer2__link">
                    <img className="img" src={telegram} alt="" />
                  </a>
                  <a href="" className="footer2__link">
                    <img className="img2" src={facebook} alt="" />
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/@najottalim"
                    className="footer2__link"
                  >
                    <img className="img3" src={youtube} alt="" />
                  </a>{" "}
                  <a href="" className="footer2__link">
                    <img className="img4" src={twitter} alt="" />
                  </a>
                </div>
              </li>
              <li className="footer2__list">
                <h3 className="footer2__head2">Telefon raqam:</h3>
                <a href="tel">
                  <p className="footer2__text2">+998 (71) 200-11-23</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
