import "./Bloghero.css";

import { Link } from "react-router-dom";

// images
import Button from "../../Assets/img/button3.svg";
import List from "../../Assets/img/Rectangle4389.png";
import List2 from "../../Assets/img/Rectangle43891.png";
import List3 from "../../Assets/img/Rectangle43892.png";
import List4 from "../../Assets/img/Rectangle43893.png";
import List5 from "../../Assets/img/Rectangle43894.png";
import List6 from "../../Assets/img/Rectangle43895.png";
import Group from "../../Assets/img/Group121.png";
import Button2 from "../../Assets/img/button2.svg";

function Bloghero() {
  return (
    <section className="blog__section">
      <div className="container">
        <div className="bloghero">
          <ul className="bloghero__item">
            <Link to={"/About"}>
              {" "}
              <a href="">
                <li className="bloghero__list">Biz haqimizda</li>
              </a>
            </Link>
            <Link to={"/Blog"}>
              <img className="bloghero__list--img" src={Button} alt="" />
              <a href="">
                <li className="bloghero__list2">Blog</li>
              </a>
            </Link>
          </ul>
          <div className="blog__main">
            <p className="blog__main--text">
              Vimeo, Dropbox, Youtube va boshqalardan misollar yordamida Bottom
              sheets loyihalashni o'rganing.
            </p>
            <div className="blog__main2">
              <p className="blog__main2--text">
                Kino marketing - sotuvlaringizni oshiring
              </p>
            </div>
            <div className="blog__main3">
              <p className="blog__main3--text">
                Instagramda biznes hisoblarini moderatsiya qilish: brend nomidan
                tomoshabinlar bilan qanday muloqot qilish
              </p>
              <div className="blog__main3--span"></div>
            </div>
          </div>
          <div className="blog__button">
            <button className="blog__btn">Barcha maqolalar</button>
            <button className="blog__btn2">Dasturlash</button>
            <button className="blog__btn2">Dizayn</button>
            <button className="blog__btn2">Marketing</button>
          </div>
          <div className="blog__widget">
            <ul className="blog__widget--list">
              <Link to={"/Xaptic"}>
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>
              </Link>
              <Link to={"/Xaptic"}>
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List2} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>{" "}
              </Link>
              <Link to={"/Xaptic"}>
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List3} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>{" "}
              </Link>
            </ul>
            <ul className="blog__widget--list2">
            <Link to={"/Xaptic"}>
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List4} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>{" "}
              </Link>
              <Link to={"Xaptic"}>
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List5} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>{" "}
              </Link>
              <Link to={"/Xaptic"}> 
              <li className="blog__widget--item">
                <img className="blog__widget--img" src={List6} alt="" />
                <h6 className="blog__widget--head">
                  Dizayn naqshlari. Mukammal akkordeon yaratish
                </h6>
                <img className="blog__widget--img2" src={Group} alt="" />
              </li>
              </Link>
            </ul>
          </div>
          <div className="blog__sidebar">
            <div className="about__sidebar--box">
              <h1 className="about__box--head">Kuchlilar bilan bo’ling!</h1>
              <p className="about__box--text">
                Bizda o’z sohasining mutaxassislari faoliyat olib borishadi.
                Sizni o’z safimizda ko’rishdan mamnun bo’lamiz.
              </p>
              <button className="about__box2--button">
                Hamkorlik qiling
                <img className="about__box--img" src={Button2} alt="" />
              </button>
            </div>
            <div className="about__sidebar--box2">
              <h1 className="about__box2--head">Aloqa markazi</h1>
              <p className="about__box2--text">
                O’zingizni qiziqtirgan savollarga javob oling!
              </p>
              <a className="blog__box2--link" href="tel:+998 (99) 828-00-11">
                +998 (99) 828-00-11
              </a>
              <span className="blog__box2--span">08:00 dan 20:00 gacha</span>
              <button className="about__box2--button2">
                Qo’ng’iroq qiling
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bloghero;
