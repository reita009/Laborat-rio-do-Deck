import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/Footer";
import PhotoDeck from "../../assets/photo_deck_01.jpg";
import LibraryDeck from "../../assets/library_deck.jpg";
import Emudeck from "../../assets/emudeck.png";
import * as C from "./style";

export const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <C.ContainerHome>
        <div className="container">
          <C.TitleArea>
            <h1>Vale a pena comprar o Steam Deck?</h1>
          </C.TitleArea>
        </div>
        <C.Banner className="container">
          <img src={PhotoDeck} alt="" />
        </C.Banner>
      </C.ContainerHome>
      <C.ResumeContainer>
        <div className="container">
          <div className="left">
            <h1>O que é o Steam Deck?</h1>
            <p>
              O Steam Deck é um sistema de videogame que pode ser descrito como
              um tipo de computador portátil. Uma das características mais
              interessantes desse dispositivo é o acesso à vasta biblioteca da
              Steam, a maior plataforma de venda de jogos para computador. Por
              exemplo, se você já possui uma conta na Steam, é possível jogar no
              aparelho os títulos que comprou anteriormente através do serviço,
              que está em funcionamento desde 2003. A Steam foi criada pela
              Valve Corporation, uma empresa americana famosa inicialmente por
              desenvolver clássicos como Half-Life, Team Fortress e
              Counter-Strike. Além de vender seus próprios jogos, o serviço
              agora oferece uma ampla seleção de títulos de grandes
              desenvolvedoras de jogos em todo o mundo, incluindo estúdios
              independentes. No entanto, é importante mencionar que nem todos os
              jogos disponíveis na biblioteca da plataforma são compatíveis com
              o console.
            </p>
          </div>
          <div className="right">
            <img src={LibraryDeck} alt="" />
          </div>
        </div>
      </C.ResumeContainer>
      <C.EmulationContainer>
        <div className="container">
          <div className="left">
            <img src={Emudeck} alt="" />
          </div>
          <div className="right">
            <h1>Emudeck</h1>
            <p>
              Jogar em dispositivos portáteis sempre me fascinou de uma forma
              que os consoles nunca conseguiram. A ideia de ter uma experiência
              de jogo enquanto estou em movimento, em qualquer lugar, é
              totalmente nova para mim. É como ter um parque de diversões na
              palma da mão, pronto para ser desfrutado em qualquer jornada. É
              por isso que o Steam Deck se tornou minha principal escolha este
              ano. No entanto, o novo e poderoso dispositivo portátil da Valve
              não só é capaz de lidar com os jogos mais recentes com facilidade,
              mas também oferece uma experiência excepcional ao emular os
              clássicos do passado. Como alguém que tem uma queda por jogos
              retrô, o Steam Deck rapidamente se tornou minha principal
              plataforma de emulação devido à sua simplicidade e flexibilidade.
              Configurar a emulação no Steam Deck é muito mais simples do que no
              meu computador de mesa e geralmente funciona sem problemas. Além
              disso, após explorar e emular sistemas, finalmente parece que os
              desejos de portabilidade da Sony e da Nintendo do passado foram
              concretizados pela Valve com seu novo dispositivo híbrido.
              Deixe-me falar um pouco sobre o Steam Deck e explicar por que
              acredito que este é o melhor dispositivo de emulação disponível.
            </p>
          </div>
        </div>
      </C.EmulationContainer>
      <Footer />
    </>
  );
};
