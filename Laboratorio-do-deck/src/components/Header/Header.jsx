import * as C from "./styled";
import Logo from "../../assets/LogoLab.png";
import LogoDeck from "../../assets/steamDeckLogo.png";
import * as Btn from "../Buttons/style";

export const Header = () => {
  return (
    <>
      <C.Container>
        <img id="logo1" src={LogoDeck} alt="" />
        <img id="logo2" src={Logo} alt="" />

        <div className="btn-group">
          <Btn.GreenHeader>
            <button className="button-86" role="button">
              Home
            </button>
          </Btn.GreenHeader>

          <Btn.GreenHeader>
            <button className="button-86" role="button">
              Contato
            </button>
          </Btn.GreenHeader>

          <Btn.GreenHeader>
            <button className="button-86" role="button">
              Sobre
            </button>
          </Btn.GreenHeader>
        </div>
      </C.Container>
    </>
  );
};
