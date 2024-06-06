import "./Widget.css";

// images

import Images from "../../Assets/img/image.png";
import Images2 from "../../Assets/img/MaskGroup.png";

function Widget() {
  return (
    <section className="section6">
      <div className="container">
        <div className="widget">
          <ul className="widget__list">
            <li className="widget__item">
              <img className="widget__img" src={Images} alt="" />
              <p className="widget__span">Grafik dizayn</p>
              <h2 className="widget__head">Jasur Rashidov</h2>
              <p className="widget__text">
                Yaqinda men Najot ta’limda grafik dizayner sifatida o'qishni
                boshladim. Men darhol ustozlarning yaxshi ishini qayd etishim
                mumkin. Ular barcha boshlanuvchilarga kurs uchun pul to'lashda,
                hujjatlar bilan...
              </p>
              <a href="#" className="widget__link">
                Batafsil
              </a>
            </li>
            <li className="widget__item2">
              <img className="widget__img" src={Images2} alt="" />
              <p className="widget__span">Marketing</p>
              <h2 className="widget__head">Nozima Murodova</h2>
              <p className="widget__text">
                Men barcha o’quv markazlar orasida Najot Ta’limni tanlaganimdan
                chin dildan xursandman. Uzoq vaqt qidirdim va o’ylimanki eng
                yaxshi jamoani topib bilim oldim. Barchaga tavsiya qilaman!
              </p>
              <a href="#" className="widget__link">
                Batafsil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Widget;
