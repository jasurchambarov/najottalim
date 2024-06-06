import "./Xaptic.css";

import { Link } from "react-router-dom";

import Button from "../../Assets/img/button3.svg";
import Main from "../../Assets/img/Rectangle4396.png";
import Telegram from "../../Assets/img/telegram.svg";
import Facebook from "../../Assets/img/facebook.svg";
import Youtube from "../../Assets/img/youtube.svg";
import Twitter from "../../Assets/img/twitter.svg";
import Muallif from "../../Assets/img/Group262.svg";
import Image from "../../Assets/img/image33.png";
import List from "../../Assets/img/Rectangle4389.png";
import List2 from "../../Assets/img/Rectangle43891.png";
import List3 from "../../Assets/img/Rectangle43892.png";
import List4 from "../../Assets/img/Rectangle43893.png";
import List5 from "../../Assets/img/Rectangle43894.png";
import List6 from "../../Assets/img/Rectangle43895.png";
import Group from "../../Assets/img/Group121.png";
import Button2 from "../../Assets/img/button2.svg";

function Xaptic() {
  return (
    <section className="xaptic__section">
      <div className="container">
        <div className="xaptic">
          <ul className="xaptic__item">
            <Link to={"/About"}>
              {" "}
              <a href="">
                <li className="xaptic__list">Biz haqimizda</li>
              </a>
            </Link>
            <Link to={"/Blog"}>
              <img className="xaptic__list--img" src={Button} alt="" />
              <a href="">
                <li className="xaptic__list2">Blog</li>
              </a>
            </Link>
            <Link to={"/Xaptic"}>
              <img className="xaptic__list--img2" src={Button} alt="" />
              <a href="">
                <li className="xaptic__list3">
                  Haptic UX - sensorli interfeysning taktil tajribasini
                  loyihalash
                </li>
              </a>
            </Link>
          </ul>
          <div className="xaptic__main">
            <img className="xaptic__main--img" src={Main} alt="" />
          </div>
          <div className="xaptic__widget">
            <ul className="xaptic__widget--list">
              <li className="xaptic__widget--item">
                <a href="">
                  <img src={Telegram} alt="" className="xaptic__widget--img" />
                </a>
              </li>
              <li className="xaptic__widget--item">
                <a href="">
                  <img src={Facebook} alt="" className="xaptic__widget--img" />
                </a>
              </li>{" "}
              <li className="xaptic__widget--item">
                <a href="">
                  <img src={Youtube} alt="" className="xaptic__widget--img" />
                </a>
              </li>{" "}
              <li className="xaptic__widget--item">
                <a href="">
                  <img src={Twitter} alt="" className="xaptic__widget--img" />
                </a>
              </li>
            </ul>
            <button className="xaptic__widget--button">Dizayn</button>
            <h1 className="xaptic__widget--head">
              Haptic UX - sensorli interfeysning taktil tajribasini loyihalash
            </h1>
            <ul className="xaptic__widget--list2">
              <li className="xaptic__widget--item2">
                <img src={Muallif} alt="" />
                <h3 className="xaptic__item2--head">
                  Muallif: Jamshid Xoliqulov
                </h3>
              </li>
              <li className="xaptic__widget--item2">
                <img src={Muallif} alt="" />
                <h3 className="xaptic__item2--head">1-oktyabr</h3>
              </li>
              <li className="xaptic__widget--item2">
                <img src={Muallif} alt="" />
                <h3 className="xaptic__item2--head">3 soat oldin</h3>
              </li>
              <li className="xaptic__widget--item2">
                <img src={Muallif} alt="" />
                <h3 className="xaptic__item2--head">546 ko’rildi</h3>
              </li>
            </ul>
            <p className="xaptic__widget--text">
              Yangi avlod interaktiv mahsulotlarini yaratish uchun hissiy
              tajribalarni loyihalash.
            </p>
            <p className="xaptic__widget--text2">
              Keling, teginish dunyosini o'rganamiz! Dizaynerlar va ishlab
              chiquvchilar bizning teginish sezgimizdan foydalanadigan
              tajribalarni yaratishi mumkin.
            </p>
            <p className="xaptic__widget--text3">
              Tegish sezuvchanlik sohasi eng tez rivojlanayotgan, lekin ayni
              paytda foydalanuvchilar tajribasining kam o'rganilgan sohalaridan
              biridir. Qurilmalar bilan kundalik aloqalarimiz klaviatura va
              sichqonchadan telefonga, avtomobil ichidagi ko'ngilochar
              tizimlarga va kundalik narsalarga o'tayotgani sayin, biz qanday
              aloqa qilishimiz va jismoniy dunyodan fikr-mulohazalarni qabul
              qilishimiz muhimroq bo'ladi.
            </p>
          </div>
          <div className="xaptic__sidebar">
            <img src={Image} alt="" className="xaptic__sidebar--img" />
            <h2 className="xaptic__sidebar--head">1. Taktiv sezish nima?</h2>
            <p className="xaptic__sidebar--text">
              Taktil sezish deganda teginish aloqasiga aloqa shakli sifatida
              e'tibor qaratadigan kinestetik aloqa sohasi tushuniladi. Taktik
              sezgilar hamma joyda mavjud va jonli tuyg'u beradi. Tasavvur
              qiling -a, chaqalog'ingizni birinchi marta ushlab turing, uzoq
              vaqt ko'rmagan do'stingizni quchoqlang yoki cho'ntagingizda
              telefoningiz tez tebranayotganini his eting. Bu his -tuyg'ular
              bizda qoladigan haqiqiy his -tuyg'ularni keltirib chiqaradi.
            </p>
            <div className="xaptic__sidebar--box">
              <p className="xaptic__box--text">
                Тактильный пользовательский опыт (Haptic UX) использует
                тактильный фидбек, чтобы через прикосновение передать
                пользователю своевременную и полезную информацию.
              </p>
            </div>
          </div>
          <div className="xaptic__app">
            <h3 className="xaptic__app--head2">
              Mana, teginish sezgilarini ishlatishga misollar:
            </h3>
            <ul className="xaptic__app--list2">
              <li className="xaptic__app--item2">
                Qisqa muddatli tebranishni keltirib chiqaradigan mobil qurilmada
                muvaffaqiyatli to'lov.
              </li>
              <li className="xaptic__app--item2">
                Noto'g'ri parolni kiritishda xato sharti.
              </li>{" "}
              <li className="xaptic__app--item2">
                Funktsiyani ochish uchun maxsus imo -ishora.
              </li>{" "}
              <li className="xaptic__app--item2">
                Mobil poyga o'yinidagi tebranishlar.
              </li>
            </ul>
          </div>
          <div className="xaptic__asida">
            <h3 className="xaptic__asida--head">Mavzuga doir maqolalar</h3>
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
        </div>
      </div>
    </section>
  );
}

export default Xaptic;
