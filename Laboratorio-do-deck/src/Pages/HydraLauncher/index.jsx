import * as C from "./style";
import * as Btn from "../../components/Buttons/style";
import HydraLogo from "../../assets/hydraLauncherLogo.jpg";
import HydraBannerDesktop from "../../assets/hydraLauncherBanner.jpg";
import SteamVerde from "../../assets/steam_verde.png";
import HydraGit from "../../assets/HydraGitHub.png";

export const HydraLauncher = () => {
  return (
    <>
      <C.ContainerHydraLauncher>
        <C.TitleArea>
          <h1> Hydra Launcher</h1>
        </C.TitleArea>

        <C.Banner>
          <img src={HydraLogo} alt="" />
        </C.Banner>

        <C.ResumeContainer>
          <div className="container">
            <div className="left">
              <h1>O que é HydraLauncher?</h1>
              <p>
                Uma nova plataforma de jogos no Brasil, o Hydra Launcher, está
                provocando debates intensos sobre os limites entre inovação
                tecnológica e atividades piratas. Reconhecido como o 'Steam da
                Paralela', o serviço promete simplificar a vida dos jogadores,
                oferecendo acesso gratuito aos jogos. Isso desafia a estrutura
                tradicional de distribuição digital de jogos e levanta questões
                sobre legalidade e segurança. O Hydra Launcher fornece uma
                interface para gerenciar bibliotecas de jogos e atua como um
                indexador de links para downloads de jogos. Os desenvolvedores
                afirmam que o sistema foi projetado com foco na privacidade do
                usuário e pode funcionar offline, coletando links de torrents
                disponíveis através de técnicas de web scraping, sem hospedar
                diretamente nenhum conteúdo.
              </p>
            </div>
            <div className="right">
              <img src={HydraBannerDesktop} alt="" />
            </div>
          </div>
        </C.ResumeContainer>

        <C.SafeContainer>
          <div className="container">
            <div className="left">
              <img src={SteamVerde} alt="" />
            </div>
            <div className="right">
              <h1>è seguro?</h1>
              <p>
                Essa plataforma pode ser vista como uma ferramenta para acesso a
                jogos para usuários que não têm recursos para pagar preços
                elevados. Contudo, o Hydra Launcher desafia os direitos autorais
                dos jogos, o que prejudica a indústria de games em sua
                capacidade de criar novos títulos. Até agora, a comunidade de
                jogadores está dividida em relação ao Hydra Launcher. Por um
                lado, alguns elogiam a facilidade de acesso aos jogos, enquanto
                outros criticam a promoção de práticas ilegais e a
                desvalorização do trabalho dos criadores. O futuro da plataforma
                dependerá de vários fatores, incluindo a reação da comunidade à
                ética de seu uso e possíveis ações legais dos detentores de
                direitos autorais. Em última análise, a situação do Hydra
                Launcher reflete as tensões entre a velha guarda e a realidade
                do mundo digital. Até o momento, não foi relatado nenhum caso de
                vírus ou coisas do gênero sobre a plataforma, pelo contrário, a
                plataforma foi criada com o intuito de deixar os consumidores
                mais seguros em relação ao acesso a links paralelos.
              </p>
            </div>
          </div>
        </C.SafeContainer>
      </C.ContainerHydraLauncher>

      <C.ResumeContainer>
        <div className="container">
          <div className="left">
            <h1>Onde fazer downlaod?</h1>
            <p>
              A instalação é bem fácil! Basta seguir o botão de download que te
              levará facilmente ao GitHub, "código aberto" do aplicativo, e ele
              é autoexecutável e escolha se sua plataforma é SteamOS ou
              Windowns.
            </p>

            <Btn.Download>
              <button className="button-85" role="button">
                <a href="https://github.com/hydralauncher/hydra/releases">
                  Download
                </a>
              </button>
            </Btn.Download>
          </div>
          <div className="right">
            <img src={HydraGit} alt="" className="hydraGit" />
          </div>
        </div>
      </C.ResumeContainer>
    </>
  );
};
