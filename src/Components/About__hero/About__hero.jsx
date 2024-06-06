import "./About__hero.css";

import { Link } from "react-router-dom";


import Button from "../../Assets/img/button3.svg";
import Logo from "../../Assets/img/3DLogo.png";
import Timur from "../../Assets/img/Ellipse28.png";
import Google from "../../Assets/img/Group200.svg";
import Instagram from "../../Assets/img/Group201.svg";
import Twitter from "../../Assets/img/group202.svg";
import Facebook from "../../Assets/img/group203.svg";
import Group from "../../Assets/img/Group268.png";
import Dasturlash from "../../Assets/img/Dasturlash.svg";
import Dizayn from "../../Assets/img/Dizayn.svg";
import Marketing from "../../Assets/img/Marketing.svg";
import Group1 from "../../Assets/img/Group227.png";
import Button2 from "../../Assets/img/Group116.svg";




function About__hero() {






  return (
    <section className="section__about">
      <div className="container">
        <div className="about">
          <Link to={"/"}>
            <a href="" className="about__link1">
              Bosh sahifa
              <img className="about__link--img" src={Button} alt="" />
            </a>
          </Link>
          <Link to={"/About"}>
            <a href="" className="about__link1">
              Biz haqimizda
            </a>
          </Link>
          <div className="about__asida">
            <h1 className="about__asida--head">Najot Ta’lim</h1>
            <div className="about__box">
              <button className="about__box--button">Biz haqimizda</button>
              <Link to={"/Bizningjamoa"}>
                <button className="about__box--button2">Bizning jamoa</button>
              </Link>
            </div>
            <div className="about__main">
              <ul className="about__list">
                <li className="about__item">
                  <img src={Logo} alt="" className="about__item--img" />
                  <span className="about__item--span">Markaz haqida</span>
                  <h2 className="about__item--head">
                    Hammasi 2018-yildan boshlangan
                  </h2>
                  <p className="about__item--text">
                    2018-yil 1-oktabr Najot Ta’limga asos solingan kun. Dastlab
                    markazimiz o'z faoliyatini boshlaganida kurslarda guruhlar
                    toʻlishi uch oylab kutilgan davrlar ham bo'lgan edi. Bugun
                    esa guruhlar soni bir necha barobar ortib, ikkinchi filial
                    ham ish boshladi.
                  </p>
                  <p className="about__item--text2">
                    Quvonarlisi, markazimiz bitiruvchilari yurtimizning turli
                    xil tashkilotlarida, IT korxonalarda oʻz oʻrnini topdi.
                  </p>{" "}
                  <p className="about__item--text3">
                    Maqsadimiz, bir necha yillardan soʻng ham bosib oʻtilgan
                    yoʻlning qiymati va qimmati qalblarimizni faqat va faqat
                    faxr va shukronaga toʻldirsin!
                  </p>
                </li>
                <li className="about__item">
                  <img src={Timur} alt="" className="about__item--img" />
                  <span className="about__item--span">Markaz asoschisi</span>
                  <h2 className="about__item--head2">Temurbek Adhamov</h2>
                  <p className="about__item--text">
                    1994-yil 31-avgustda Farg’ona viloyatining Quva tumanida
                    tavallud topgan. 2015-2019-yillarda Toshkent shahridagi Imom
                    Al-Buxoriy nomidagi Islom institutini tamomlagan.
                  </p>
                  <p className="about__item--text2">
                    2018-yil 1-oktyabrda Najot Ta’limga asos solgan. Hozirgi
                    kunga kelib filiallar soni 2 taga yetdi. Undan tashqari,
                    Abutech digital kompaniyasi, Osmondagi bolalar loyihasini
                    ham asoschisi hisoblanadi.
                  </p>{" "}
                  <span className="about__item--span2">Ijtimoiy tarmoqlar</span>
                  <div className="about__link">
                    <a href="">
                      <img className="about__link--img" src={Google} alt="" />
                    </a>
                    <a href="">
                      <img
                        className="about__link--img"
                        src={Instagram}
                        alt=""
                      />
                    </a>
                    <a href="">
                      <img className="about__link--img" src={Twitter} alt="" />
                    </a>
                    <a href="">
                      <img className="about__link--img" src={Facebook} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about__widget">
              <h1 className="about__widget--head">Maqsadimiz yuqori</h1>
              <ul className="about__widget--list">
                <li className="about__widget--item">
                  <img className="about__widget--img" src={Group} alt="" />
                  <h3 className="about__item--headd">
                    Qiziquvchi yoshlarni topamiz
                  </h3>
                  <p className="about__item--textt">
                    Hozirgi kunga kelib yurtimizda IT sohasiga bo’lgan talab
                    juda ham ortib ketdi. Sababi, IT sohasida yoshlarning
                    diplomsiz ham o’z mustahkam o’rniga ega bo’lishi, asosiy
                    omillardan biri. Shu sababli, biz IT sohasiga qiziqqan
                    yoshlarni qidirib topamiz.
                  </p>
                </li>
                <li className="about__widget--item">
                  <img className="about__widget--img" src={Group} alt="" />
                  <h3 className="about__item--headd">O’qitamiz</h3>
                  <p className="about__item--textt">
                    Eng yaxshi investitsiya - bu ta’limga kiritilgan
                    investitsiyadir. Hozirgi texnologiya asrida IT sohasini
                    o’rganish “must have” hisoblanadi. Oliygohda 4 yil davomida
                    o’rganishi kerak bo’lgan narsani 1 yil ichida ham mukammal
                    o’rgansa bo’ladi va biz ishni amalga oshirish uchun harakat
                    qilamiz.
                  </p>
                </li>{" "}
                <li className="about__widget--item">
                  <img className="about__widget--img" src={Group} alt="" />
                  <h3 className="about__item--headd">
                    Ishga joylashishga yordam beramiz
                  </h3>
                  <p className="about__item--textt">
                    6-10 oy davomida chuqurlashtirilgan ta’limni olgandan so’ng,
                    o’quvchida keng imkoniyatlar eshigi ochiladi. Asosiysi,
                    diplomsiz, hech qanday tanish-bilishsiz katta kompaniyalarda
                    faoliyat olib borishi mumkin bo’ladi va biz bu yo’lda
                    o’quvchilarimizga ko’mak bo’lamiz.
                  </p>
                </li>
              </ul>
            </div>
            <div className="about__wrap">
              <h1 className="about___wrap--head">Raqamlar statistikasida</h1>
              <ul className="about__wrap--list">
                <li className="about__wrap--item">
                  <img src={Dasturlash} alt="" />
                  <h4 className="about__item--head3">Dasturlash</h4>
                </li>
                <li className="about__wrap--item">
                  <img src={Dizayn} alt="" />
                  <h4 className="about__item--head3">Dizayn</h4>
                </li>
                <li className="about__wrap--item">
                  <img src={Marketing} alt="" />
                  <h4 className="about__item--head3">Marketing</h4>
                </li>
              </ul>
              <ul className="about__wrap--list2">
                <li className="about__wrap--item2">
                  <h3 className="about__list--head">Talabalar</h3>
                  <img className="about__list--img" src={Group1} alt="" />
                </li>
                <li className="about__wrap--item2">
                  <h3 className="about__list--head">Bitiruvchilar</h3>
                  <img className="about__list--img" src={Group1} alt="" />
                </li>
                <li className="about__wrap--item2">
                  <h3 className="about__list--head">Ishga joylashganlar</h3>
                  <img className="about__list--img" src={Group1} alt="" />
                </li>
              </ul>
            </div>
            <div className="about__sidebar">
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
                <a className="about__box2--link" href="tel:+998 (99) 828-00-11">
                  +998 (99) 828-00-11
                </a>
                <span className="about__box2--span">08:00 dan 20:00 gacha</span>
                <button className="about__box2--button2">
                  Qo’ng’iroq qiling
                </button>
              </div>
            </div>
            <div className="about__iframe">
              <h1 className="about__iframe--head">Biz bilan bog’laning</h1>
              <hr className="about__iframe--hr" />
              <ul className="about__iframe--list">
                <li className="about__iframe--item">
                  <p className="abut__iframe--text">Bizning raqam</p>
                  <a
                    className="about__iframe--link"
                    href="tel:+998 (71) 123-45-67"
                  >
                    +998 (71) 123-45-67
                  </a>
                  <hr className="about__iframe--hr2" />
                </li>
                <li className="about__iframe--item">
                  <p className="abut__iframe--text">Ish vaqti</p>
                  <a className="about__iframe--link" href="#">
                    08:00 dan 20:00 gacha
                  </a>
                  <hr className="about__iframe--hr2" />
                </li>{" "}
                <li className="about__iframe--item">
                  <p className="abut__iframe--text">Elektron pochta</p>
                  <a className="about__iframe--link" href="#">
                    najot-talim@gmail.com
                  </a>
                  <hr className="about__iframe--hr2" />
                  <li className="about__iframe--item">
                    <p className="abut__iframe--text">Ijtimoiy tarmoqlar</p>
                    <div className="about__ifame__link">
                      <a href="">
                        <img
                          className="about__iframe--img"
                          src={Google}
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          className="about__iframe--img"
                          src={Instagram}
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          className="about__iframe--img"
                          src={Twitter}
                          alt=""
                        />
                      </a>
                      <a href="">
                        <img
                          className="about__iframe--img"
                          src={Facebook}
                          alt=""
                        />
                      </a>
                    </div>
                    <button className="about__iframe--button">
                      Istalgan paytda bog’laning
                    </button>
                  </li>
                </li>
              </ul>
              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25307.294257186622!2d67.21610519839234!3d37.54536104709957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f354e235f942b75%3A0xe0b3965bad8274b5!2zRHpoYXJrdXJnYW4sINCh0YPRgNGF0LDQvdC00LDRgNGM0Y8sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1715420178968!5m2!1sru!2s"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="about__app">
              <ul className="about__app--list">
                <li className="about__app--item">
                  <h3 className="about__app--head">
                    Toshkent shahar, Xadra filiali
                  </h3>
                  <p className="about__app--text">
                    +998 (71) 123-45-67 08:00 dan 20:00 gacha
                  </p>
                  <p className="about__app--text2">
                    najot-talim@gmail.com Ijtimoiy tarmoqlar:
                  </p>{" "}
                  <p className="about__app--text3">t.me/najot_talim</p>
                  <button className="about__app--button">
                    Istalgan paytda bog’laning
                  </button>
                </li>
                <li className="about__app--item2">
                  <h3 className="about__app--head">
                    Toshkent shahar, Chimboy filiali
                  </h3>
                  <p className="about__app--text">
                    +998 (71) 123-45-67 08:00 dan 20:00 gacha
                  </p>
                  <p className="about__app--text2">
                    najot-talim@gmail.com Ijtimoiy tarmoqlar:
                  </p>{" "}
                  <p className="about__app--text3">t.me/najot_talim</p>
                  <button className="about__app--button">
                    Istalgan paytda bog’laning
                  </button>
                </li>{" "}
                <li className="about__app--item3">
                  <h3 className="about__app--head">
                    Toshkent shahar, Chilonzor filiali
                  </h3>
                  <p className="about__app--text">
                    +998 (71) 123-45-67 08:00 dan 20:00 gacha
                  </p>
                  <p className="about__app--text2">
                    najot-talim@gmail.com Ijtimoiy tarmoqlar:
                  </p>{" "}
                  <p className="about__app--text3">t.me/najot_talim</p>
                  <button className="about__app--button">
                    Istalgan paytda bog’laning
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About__hero;
