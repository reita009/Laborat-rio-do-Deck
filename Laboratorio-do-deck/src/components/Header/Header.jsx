import * as C from "./styled";
import Logo from "../../assets/LogoLab.png";
import LogoDeck from "../../assets/steamDeckLogo.png";
import * as Btn from "../Buttons/style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <C.Container>
        <img id="logo1" src={LogoDeck} alt="" />
        <img id="logo2" src={Logo} alt="" />

        <div className="btn-group">
          <Btn.GreenHeader>
            <button className="button-86" role="button">
              <Link to="/">Home</Link>
            </button>
          </Btn.GreenHeader>

          <Btn.GreenHeader>
            <button className="button-86" role="button">
              <Link to="/contact">Contato</Link>
            </button>
          </Btn.GreenHeader>

          <Btn.GreenHeader>
            <button className="button-86" role="button">
              <Link to="/about">Sobre</Link>
            </button>
          </Btn.GreenHeader>
        </div>
      </C.Container>
    </>
  );
};
