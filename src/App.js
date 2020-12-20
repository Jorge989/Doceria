import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import { useSpring, animated as a, config } from "react-spring";

import Stand from "./assets/stand.png";
function App() {
  
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 300, friction: 80 },
  });

  return (
    <>
      <head>
        <title>Doceria Single Page</title>
      </head>
      <body>
        <div className="container">
          <div id="sidebar">
            <div className="sidebar-container">
              <img className="logo-doceria" src={Stand} alt="Logo Doceria" />
              <h1>Doceria</h1>
              <nav>
                <ul>
                  <li>
                    <a href="#sessao-bemvindo">Bem vindo</a>
                  </li>
                  <li>
                    <a href="#sessao-sobre">Sobre nós</a>
                  </li>
                  <li>
                    <a href="#sessao-doces1">Doces 1</a>
                  </li>
                  <li>
                    <a href="#sessao-doces2">Doces 2</a>
                  </li>
                  <li>
                    <a href="#sessao-doces3">Doces 3</a>
                  </li>
                  <li>
                    <a href="#sessao-contato">Entre em contato</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="content">
            <main>
              <section id="sessao-bemvindo">
                <div className="banner">
                  <div onClick={() => set((state) => !state)}>
                    <a.div
                      class="c back"
                      style={{
                        opacity: opacity.interpolate((o) => 1 - o),
                        transform,
                      }}
                    />
                    <a.div
                      class="c front"
                      style={{
                        opacity,
                        transform: transform.interpolate(
                          (t) => `${t} rotateX(180deg)`
                        ),
                      }}
                    />
                  </div>{" "}
                </div>
                <div className="sessao-bemvindo-content">
                  <h1>Seja bem vindo a Doceria</h1>
                  <div className="sessao-minibanner"></div>
                  <div className="sessao-descricao">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="sessao-bemvindo-btn">
                      Leia mais
                    </a>
                  </div>
                </div>
              </section>
              <section id="sessao-sobre">
                <div className="sessao-content">
                  <h1 className="sobre">Sobre nós</h1>
                  <div className="sessao-minibanner"></div>
                  <div className="sessao-descricao">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </section>
              <section id="sessao-doces1">
                <h2>Doces 1</h2>
                <div className="doces1-img banner-galeria" id="img1"></div>
                <div className="doces1-img banner-galeria" id="img2"></div>
                <div className="doces1-img banner-galeria" id="img3"></div>
                <div className="doces1-img banner-galeria" id="img4"></div>
                <div className="doces1-img banner-galeria" id="img5"></div>
              </section>
              <section id="sessao-doces2">
                <h2>Doces 2</h2>
                <div className="doces2-img banner-galeria" id="img6"></div>
                <div className="doces2-img banner-galeria" id="img7"></div>
                <div className="doces2-img banner-galeria" id="img8"></div>
              </section>
              <section id="sessao-doces3">
                <h2>Doces 3</h2>
                <div className="doces3-img banner-galeria" id="img9"></div>
                <div className="doces3-img banner-galeria" id="img10"></div>
                <div className="doces3-img banner-galeria" id="img11"></div>
                <div className="doces3-img banner-galeria" id="img12"></div>
              </section>
              <section id="sessao-contato">
                <h2>Entre em contato</h2>
                <form id="form-contato">
                  <input type="text" name="name" placeholder="Nome"></input>
                  <input type="email" name="email" placeholder="E-mail"></input>
                  <textare
                    anem="message"
                    palceholder="Escreva sua mensagem.."
                  ></textare>
                  <input type="submit" value="Enviar"></input>
                </form>
              </section>
              <footer>
                <p>horadeCodar @ 2019</p>
              </footer>
            </main>
          </div>
        </div>

        <footer>Rodapé</footer>
      </body>
    </>
  );
}

export default App;
