import "./Main_widget.css";

// images

import Najottalim from "../../Assets/img/najottalim.png";
import Button from "../../Assets/img/button2.svg";
import Restangle from "../../Assets/img/Rectangle.png";
import ImgStar from "../../Assets/img/group.png";

function Main_widget() {
  return (
    <section className="section8">
      <div className="container">
        <div className="main__widget">
          <div className="main__widget--box">
            <img className="main__widget--img" src={Najottalim} alt="" />
            <h1 className="main__widget--head">Najot ta’lim</h1>
            <p className="main__widget--text">
              Zamonaviy kasbni biz bilan o’rganing va o’z faoliyatingizni
              boshlang
            </p>
            <div className="main_widget--link">
              <a className="main__widget--link" href="#">
                Batafsil
                <img className="main__widget--link--img" src={Button} alt="" />
              </a>
            </div>
            <ul className="main__widget--item">
              <li className="main__widget--list">
                <h3 className="list__head">Bitiruvchilarimiz</h3>
                <p className="list__text">+400</p>
              </li>
              <li className="main__widget--list">
                <h3 className="list__head">O‘quvchilarimiz</h3>
                <p className="list__text">+800</p>
              </li>{" "}
              <li className="main__widget--list">
                <h3 className="list__head">Ustozlarimiz</h3>
                <p className="list__text">+30</p>
              </li>
            </ul>
          </div>
          <div className="main__widget--box2">
            <img className="box__img" src={Restangle} alt="" />
            <img className="box__img--star" src={ImgStar} alt="" />
            <p className="box__text">
              Agar siz bizning oilamizga qo'shilish istagida bo‘lsangiz, bizning
              eshigimiz siz uchun doimo ochiq
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main_widget;
