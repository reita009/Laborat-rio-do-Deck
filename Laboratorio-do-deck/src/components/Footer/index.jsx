import * as C from "./style";
import Logo from "../../assets/LogoLab.png";

import FaceBook from "../../assets/logoContatos/faceBook.png";
import Instagram from "../../assets/logoContatos/instagram.png";
import Email from "../../assets/logoContatos/mail.png";
import TikTok from "../../assets/logoContatos/tiktok.png";
import Youtube from "../../assets/logoContatos/youTube.png";

export const Footer = () => {
  return (
    <>
      <C.FooterContainer>
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <p>
            Este é um site que foi feito com o intuito de ajudar as pessoas na
            escolha do console. Um site feito de fãs para fãs.
          </p>
        </div>

        <div className="right">
          <div className="icons-group">
            <img src={FaceBook} alt="" />
            <img src={Instagram} alt="" />
            <img src={TikTok} alt="" />
            <img className="diferent" src={Youtube} alt="" />
            <img className="diferent" src={Email} alt="" />
          </div>
          <div className="info-group">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Tiktok</span>
            <span>Youtube</span>
            <span>E-mail</span>
          </div>

          <div className="name">
            <h4>
              Criado por <span>Julio Santana</span>
            </h4>
          </div>
        </div>
      </C.FooterContainer>
    </>
  );
};
