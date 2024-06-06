import "./Found.css";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// images

import Chegirma from "../../Assets/img/chegirma.png";
import Laptop from "../../Assets/img/Laptop.png";
import Button from "../../Assets/img/button3.svg";
import Img from "../../Assets/img/imgg.png";
import Video from "../../Assets/img/video.png";
import Group from "../../Assets/img/Group177.png";
import Group2 from "../../Assets/img/Group114.svg";
import Group3 from "../../Assets/img/Group178.svg";
import Group4 from "../../Assets/img/Group50.svg";
import Imgg from "../../Assets/img/Group183.png";
import Imgg2 from "../../Assets/img/Group188.png";
import Btn from "../../Assets/img/Group115.svg";
import List from "../../Assets/img/Group149.svg";
import Wrap from "../../Assets/img/Group150.svg";
import Wrap2 from "../../Assets/img/Group151.svg";
import Wrap3 from "../../Assets/img/Group152.svg";
import Wrap4 from "../../Assets/img/Group153.svg";
import Wrap5 from "../../Assets/img/MaskGroup1.png";
import Star from "../../Assets/img/Group465.png";

function Found() {
  const [modal, setModal] = useState(false);

  // const [state, setState] = useState(false);

  return (
    <section className="section__found">
      <div className="container">
        <div className="found__hero">
          <Link to={"/"}>
            <a href="" className="found__link1">
              Bosh sahifa
              <img className="found__link--img" src={Button} alt="" />
            </a>
          </Link>
          <Link to={"/Kurslar"}>
            <a href="" className="found__link2">
              Kurslar <img className="found__link--img" src={Button} alt="" />
            </a>
          </Link>
          <Link to={"/Foundation"}>
            <a href="" className="found__link3">
              Foundation{" "}
            </a>
          </Link>
        </div>
        <div className="found">
          <img className="chegirma" src={Chegirma} alt="" />
          <div className="found__main">
            <h1 className="found__main--head">Foundation</h1>
            <p className="found__main--text">
              Foundationni oʻqish davomida oʻquvchilar dasturlash strukturasi,
              dasturlash mantigʻi, uning algoritmi, dastur yaratilgandan keyin
              uning orqa fonida qanday jarayonlar boʻlishini toʻliq anglab
              yetadi. Yana bir yangilik, oʻquvchilar kurs davomida bonus
              sifatida ingliz tilidan ham bilim olishlari taʼminlanadi.
            </p>
            <img className="laptop" src={Laptop} alt="" />
            <div className="foud__wrap">
              <ul className="foud__wrap--list">
                <li className="foud__wrap--item">
                  Kurs kim uchun mo’ljallangan
                </li>
                <li className="foud__wrap--item">
                  Kursdan qanday bilimlarni olasiz
                </li>
                <li className="foud__wrap--item">
                  Kurs qanday tartibda o’tiladi
                </li>
                <li className="foud__wrap--item">Kurs dasturi</li>
                <li className="foud__wrap--item">Sertifikat</li>
                <li className="foud__wrap--item">Ko‘p so‘raladigan savollar</li>
              </ul>
            </div>

            <div className="found__sidebar">
              <h1 className="found__sidebar--head">
                Kurs kim uchun mo’ljallangan
              </h1>
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <img className="sidebar__item--img" src={Img} alt="" />
                  <h3 className="sidebar__item--head">Asl dasturchi uchun</h3>
                  <p className="sidebar__item--text">
                    Bir platformadan o'ting chegaralarni buzing va bir universal
                    dasturchiga aylaning. Ishlaydigan prototiplarni yaratishni
                    va Flutterda loyihalarini bajarishni o'rganing. Master Dart
                    va portfoliyangizga yangi ilovalarni qo'shing. Android va
                    iOS uchun shaxsiy loyihalarni qayta yozing, o'z
                    kompaniyangizda tizimni amalga oshirishni taklif qiling yoki
                    yangi jamoaga qo'shiling.
                  </p>
                </li>
                <li className="sidebar__item">
                  <img className="sidebar__item--img" src={Img} alt="" />
                  <h3 className="sidebar__item--head">Asl dasturchi uchun</h3>
                  <p className="sidebar__item--text">
                    Bir platformadan o'ting chegaralarni buzing va bir universal
                    dasturchiga aylaning. Ishlaydigan prototiplarni yaratishni
                    va Flutterda loyihalarini bajarishni o'rganing. Master Dart
                    va portfoliyangizga yangi ilovalarni qo'shing. Android va
                    iOS uchun shaxsiy loyihalarni qayta yozing, o'z
                    kompaniyangizda tizimni amalga oshirishni taklif qiling yoki
                    yangi jamoaga qo'shiling.
                  </p>
                </li>
                <ul className="sidebar__list2">
                  <li className="sidebar__item2">
                    <h6 className="sidebar__button--head">Kurs narxi</h6>
                    <p className="sidebar__number">2 400 000 so’m</p>
                    <ul className="sidebar__button--list">
                      <li className="sidebar__button--item">
                        3 ga bo’lim bo’lash imkoni
                      </li>
                      <li className="sidebar__button--item1">
                        Boshlanish vaqti: 30.10.2021
                      </li>
                    </ul>
                    <hr className="sidebar__hr" />
                    <ul className="sidebar__button--list2">
                      <li className="sidebar__button--item2">
                        800 so’m / oyiga
                      </li>
                      <li className="sidebar__button--item2">4 ta joy qoldi</li>
                    </ul>
                    <a className="sidebar__button--link" href="#">
                      <img className="video" src={Video} alt="" />
                      <p className="sidebar__button--link1">Oldindan ko’rish</p>
                    </a>
                    <button
                      onClick={() => setModal(!modal)}
                      className="sidebar__button1"
                    >
                      Sotib olish
                    </button>
                  </li>
                </ul>
              </ul>
              <dialog className="sidebar__dialog" open={modal}>
                <div className="sidebar__hero">
                  <div className="sidebar__hero--link">
                    <img className="sidebar__hero--img" src={Group} alt="" />
                    <a href="#" className="sidebar__hero--link1">
                      Kursni sotib olish
                    </a>
                    <img src={Group2} alt="" className="sidebar__hero--img2" />
                    <img className="sidebar__hero--img3" src={Group3} alt="" />
                    <a href="#" className="sidebar__hero--link2">
                      To’lov tasdiqlash
                    </a>
                  </div>
                </div>
                <div className="sidebar__main">
                  <ul className="sidebar__main--list">
                    <li className="sidebar__main--item">
                      <p className="sidebar__main--text">Kurs nomi</p>
                      <h4 className="sidebar__main--head">
                        Foundation (Husan Musayev):
                      </h4>
                      <hr className="sidebar__main--hr" />
                    </li>
                    <li className="sidebar__main--item">
                      <h4 className="sidebar__main--head">To'lov usuli:</h4>
                      <hr className="sidebar__main--hr" />
                    </li>
                    <li className="sidebar__main--item">
                      <h4 className="sidebar__main--head">
                        Promocode bo'yicha chegirma:
                      </h4>
                      <hr className="sidebar__main--hr" />
                    </li>
                    <li className="sidebar__main--item">
                      <h4 className="sidebar__main--head">Umumiy narx</h4>
                    </li>
                  </ul>
                  <ul className="sidebar__main--list2">
                    <li className="sidebar__main--item2">
                      <h4 className="sidebar__item2--head1">10000000 UZS</h4>
                    </li>
                    <li className="sidebar__main--item2">
                      <h4 className="sidebar__item2--head2">click</h4>
                    </li>
                    <li className="sidebar__main--item2">
                      <h4 className="sidebar__item2--head3">-</h4>
                    </li>
                    <li className="sidebar__main--item2">
                      <h4 className="sidebar__item2--head4">10 000 000 UZS</h4>
                    </li>
                  </ul>
                </div>
                <p className="sidebar__main--text2">
                  Bizni kursimizga chegirma olish uchun, promocode kiriting
                </p>
                <input
                  type="text"
                  className="sidebar__main--input"
                  placeholder="Promocode kiriting"
                />
                <button className="sidebar__main--button">
                  <img className="button__img" src={Group4} alt="" />
                </button>
                <div className="sidebar__widget">
                  <h1 className="sidebar__widget--head">To’lov turi:</h1>
                  <img className="sidebar__widget--img" src={Imgg} alt="" />
                  <img className="sidebar__widget--img2" src={Imgg2} alt="" />
                </div>
                <div className="sidebar__footer">
                  <hr className="sidebar__footer--hr" />
                  <p className="sidebar__footer--text">
                    Tugmani bosish orqali men shaxsiy ma'lumotlarni qayta
                    ishlashga va Platformadan foydalanish shartlariga roziman
                  </p>
                  <button className="sidebar__footer--button">
                    Davom etish <img className="btn__img" src={Btn} alt="" />
                  </button>
                </div>
              </dialog>
            </div>
          </div>
          {/* )} */}
          <div className="found__asida">
            <h1 className="found__asida--head">
              Kursdan qanday bilimlarni olasiz
            </h1>
            <ul className="found__asida--list">
              <li className="found__asida--item">
                <img className="found__asida--img" src={List} alt="" />
                <h3 className="found__asida--head1">
                  Turli platformalar uchun ilovalarni ishlab chiqish
                </h3>
                <p className="found__asida--text1">
                  Siz Android va iOS da bir xil ishlaydigan ilovalarni
                  yaratishingiz mumkin. Har bir platforma uchun bir nechta
                  dasturlash tillarini o'rganishingiz va ilovalarni noldan
                  yaratishingiz shart emas.
                </p>
              </li>
              <li className="found__asida--item">
                <img className="found__asida--img" src={List} alt="" />
                <h3 className="found__asida--head1">
                  Foydalanuvchi tajribasi bilan ishlash
                </h3>
                <p className="found__asida--text1">
                  UX-ni tushuning va chiroyli va qulay foydalanuvchi
                  interfeyslarini yaratishni o'rganing.
                </p>
              </li>
              <li className="found__asida--item">
                <img className="found__asida--img" src={List} alt="" />
                <h3 className="found__asida--head1">
                  Hot reload yuklashdan foydalaning
                </h3>
                <p className="found__asida--text1">
                  Kodni o'zgartirganda, loyihani bir zumda tiklash orqali
                  rivojlanishni tezlashtiradigan, Flutter funksiyasini hot
                  reload bilan ishlashni o'rganing.
                </p>
              </li>
            </ul>
          </div>
          <div className="found__wrap">
            <h1 className="found__wrap--head">Kurs qanday tartibda o’tiladi</h1>
            <ul className="found__wrap--list">
              <li className="found__wrap--item">
                <img src={Wrap} alt="" className="found__wrapp--img" />
                <h4 className="found__wrap--head1">Mavzu o’rganib chiqiladi</h4>
                <p className="found__wrap--text">
                  Video darslarda orqali amaliyot qilinadi.
                </p>
              </li>
              <li className="found__wrap--item">
                <img src={Wrap2} alt="" className="found__wrapp--img" />
                <h4 className="found__wrap--head1">
                  Ustoz bilan birga ishlanadi
                </h4>
                <p className="found__wrap--text">
                  O’zingizga qulay vaqtda uyga vazifalarni bajarasiz
                </p>
              </li>{" "}
              <li className="found__wrap--item">
                <img src={Wrap3} alt="" className="found__wrapp--img" />
                <h4 className="found__wrap--head1">
                  Uyga vazifalar bajariladi
                </h4>
                <p className="found__wrap--text">
                  O’rgangan bilimlarni mustahkamlaysiz va xatolarni to’g’irlash
                </p>
              </li>{" "}
              <li className="found__wrap--item">
                <img src={Wrap4} alt="" className="found__wrapp--img" />
                <h4 className="found__wrap--head1">Dimlop ish himoyasi</h4>
                <p className="found__wrap--text">
                  Qo’shimcha portfoliongiz yana bir ishga ko’payadi
                </p>
              </li>
            </ul>
          </div>
          <div className="foun__app">
            <h1 className="found__app--head">Kurs dasturi</h1>
            <div className="found__app--box">
              <p className="found__app--text">
                Siz dasturlash tajribasiga ega bo'lishingiz va yuqori darajadagi
                tillardan birini bilishingiz kerak. Dastur onlayn ma'ruzalar va
                amaliy topshiriqlarga ega modullarni o'z ichiga oladi.
              </p>
              <ul className="found__app--list">
                <li className="found__app--item">
                  <p className="foud__app--text2">
                    Darslar soni:{" "}
                    <span className="found__app--span">24 ta </span>{" "}
                  </p>
                </li>
                <li className="found__app--item">
                  <p className="foud__app--text2">
                    Online dars:{" "}
                    <span className="found__app--span">20 ta </span>{" "}
                  </p>
                </li>
              </ul>
              <hr className="found__app--hr" />
              <details className="detailist">
                <summary className="summary">1.Kirish</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary">2. Dart 2 asoslari </summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 3. Flutter</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary">
                  {" "}
                  4. StatefulWidget/StatelessWidget
                </summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 5. Cupertino vs Material</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 6. Layout</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
            </div>
          </div>
          <div className="group">
            <img className="group__img2" src={Star} alt="" />
            <h1 className="group__head">Najot Ta’lim diplomi</h1>
            <p className="group__text">
              Siz kursni tugatganingizni tasdiqlaydi va ishga kirishda
              qo'shimcha dalil bo'ladi.
            </p>
            <img className="group__img" src={Wrap5} alt="" />
          </div>
          <div className="group2">
            <h1 className="group2__head">Ko‘p so‘raladigan savollar</h1>
            <div className="group__box">
                   <details className="detailist">
                <summary className="summary">1.Kirish</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary">2. Dart 2 asoslari </summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 3. Flutter</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary">
                  {" "}
                  4. StatefulWidget/StatelessWidget
                </summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 5. Cupertino vs Material</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
              <details className="detailist">
                <summary className="summary"> 6. Layout</summary>
                <p className="summary__text">
                  Flutter dasturini o'rnating va sozlang, loyiha tuzilishi va
                  Codestyling bilan tanishing.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Found;
