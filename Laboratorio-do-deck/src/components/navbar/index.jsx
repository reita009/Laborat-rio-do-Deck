import * as C from "./style";
import { useState } from "react";

export const Navbar = () => {
  const [novidades, setNovidades] = useState(true);
  const [hydraLauncher, setHydraLauncher] = useState(false);
  const [pluguins, setPluguins] = useState(false);
  const [portProton, setPortProton] = useState(false);
  const [emudeck, setEmudeck] = useState(false);

  const changeActive = (on) => {
    switch (on) {
      case "novidades":
        setNovidades(true);
        setHydraLauncher(false);
        setPluguins(false);
        setEmudeck(false);
        setPortProton(false);
        break;
      case "HydraLauncher":
        setNovidades(false);
        setHydraLauncher(true);
        setPluguins(false);
        setEmudeck(false);
        setPortProton(false);
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
      <C.ContanierNavbar>
        <nav className="nav nav-pills flex-column flex-sm-row">
          <C.Link
            active={novidades}
            onClick={() => {
              changeActive("novidades");
            }}
            className="flex-sm-fill text-sm-center nav-link"
          >
            Novidades
          </C.Link>

          <C.Link
            active={hydraLauncher}
            onClick={() => {
              changeActive("HydraLauncher");
            }}
            className="flex-sm-fill text-sm-center nav-link"
          >
            Hydra Launcher
          </C.Link>

          <C.Link
            active={pluguins}
            onClick={() => {
              changeActive("pluguins");
            }}
            className="flex-sm-fill text-sm-center nav-link"
          >
            Pluguins
          </C.Link>

          <C.Link
            active={portProton}
            onClick={() => {
              changeActive("portProton");
            }}
            className="flex-sm-fill text-sm-center nav-link"
          >
            PortProton
          </C.Link>

          <C.Link
            active={emudeck}
            onClick={() => {
              changeActive("emudeck");
            }}
            className="flex-sm-fill text-sm-center nav-link"
          >
            Emudeck
          </C.Link>
        </nav>
      </C.ContanierNavbar>
    </>
  );
};
