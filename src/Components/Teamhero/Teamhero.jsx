import "./Teamhero.css";

import { Link } from "react-router-dom";

import Button from "../../Assets/img/button3.svg";
import Group from "../../Assets/img/Group63.png";

function Teamhero() {
  return (
    <section className="team__section">
      <div className="container">
        <div className="teamhero">
          <Link to={"/"}>
            <a href="" className="team__link">
              Bosh sahifa
              <img className="team__link--img" src={Button} alt="" />
            </a>
          </Link>
          <Link to={"/About"}>
            <a href="" className="team__link">
              Biz haqimizda
            </a>
          </Link>
          <div className="team__asida">
            <h1 className="team__asida--head">Najot Ta’lim</h1>
            <div className="team__box">
              <Link to={"/About"}>
                <button className="team__box--button">Biz haqimizda</button>
              </Link>
              <Link to={"/Bizningjamoa"}>
                <button className="team__box--button2">Bizning jamoa</button>
              </Link>
            </div>
          </div>
          <div className="team__main">
            <ul className="team__main--list">
              <li className="team__main--item">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Veb dasturchi</p>
                <h6 className="team__main--head">Muhammadxon Najimov</h6>
              </li>
              <li className="team__main--item">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Veb dasturchi</p>
                <h6 className="team__main--head">Muhammadjavohir Sur'atov</h6>
              </li>
              <li className="team__main--item">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Veb dasturchi</p>
                <h6 className="team__main--head">Saud <br /> Abdulwahed</h6>
              </li>
              <li className="team__main--item2">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Designer</p>
                <h6 className="team__main--head">Muhammadxon Najimov</h6>
              </li>
              <li className="team__main--item2">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Marketolog</p>
                <h6 className="team__main--head">Muhammadxon Najimov</h6>
              </li>
              <li className="team__main--item2">
                <img src={Group} alt="" className="team__main--img" />
                <p className="team__main--text">Backend dasturchi</p>
                <h6 className="team__main--head">Saud <br /> Abdulvahed</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamhero;
