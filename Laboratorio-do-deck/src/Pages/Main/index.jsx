import { Header } from "../../components/Header/Header";
import { HydraLauncher } from "../HydraLauncher/index";
import { Footer } from "../../components/Footer";
import { Home } from "../Home";

import { useState } from "react";
import * as C from "./style";

export const Main = () => {
  const [novidadesControl, setNovidades] = useState(true);
  const [hydraLauncherControl, setHydraLauncher] = useState(false);
  const [pluguinsControl, setPluguins] = useState(false);
  const [portProtonControl, setPortProton] = useState(false);
  const [emudeckControl, setEmudeck] = useState(false);

  const changeActive = (on) => {
    switch (on) {
      case "novidades":
        setNovidades(true);
        setHydraLauncher(false);
        setPluguins(false);
        setEmudeck(false);
        setPortProton(false);
        control = "novidades";

        break;
      case "HydraLauncher":
        setNovidades(false);
        setHydraLauncher(true);
        setPluguins(false);
        setEmudeck(false);
        setPortProton(false);
        control = "HydraLauncher";
        break;
      case "pluguins":
        setNovidades(false);
        setHydraLauncher(false);
        setPluguins(true);
        setEmudeck(false);
        setPortProton(false);
        break;
      case "portProton":
        setNovidades(false);
        setHydraLauncher(false);
        setPluguins(false);
        setEmudeck(false);
        setPortProton(true);
        break;
      case "emudeck":
        setNovidades(false);
        setHydraLauncher(false);
        setPluguins(false);
        setEmudeck(true);
        setPortProton(false);
        break;
    }
  };

  return (
    <>
      <Header />
      <C.ContanierNavbar>
        <C.Link
          onClick={() => {
            changeActive("novidades");
          }}
          active={novidadesControl}
          className="flex-sm-fill text-sm-center nav-link"
        >
          Novidades
        </C.Link>

        <C.Link
          active={hydraLauncherControl}
          className="flex-sm-fill text-sm-center nav-link"
          onClick={() => {
            changeActive("HydraLauncher");
          }}
        >
          Hydra Launcher
        </C.Link>

        <C.Link
          active={pluguinsControl}
          onClick={() => {
            changeActive("pluguins");
          }}
          className="flex-sm-fill text-sm-center nav-link"
        >
          Pluguins
        </C.Link>

        <C.Link
          active={portProtonControl}
          onClick={() => {
            changeActive("portProton");
          }}
          className="flex-sm-fill text-sm-center nav-link"
        >
          PortProton
        </C.Link>

        <C.Link
          active={emudeckControl}
          onClick={() => {
            changeActive("emudeck");
          }}
          className="flex-sm-fill text-sm-center nav-link"
        >
          Emudeck
        </C.Link>
      </C.ContanierNavbar>

      {novidadesControl && <Home />}
      {hydraLauncherControl && <HydraLauncher />}
      <Footer />
    </>
  );
};
