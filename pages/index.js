import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page-container">
        <Head>
          <title>primojúnior</title>
          <meta property="og:title" content="primojúnior" />
        </Head>
        <div className="landing-page-top-container">
          <nav data-role="Header" className="landing-page-navbar">
            <Link href="/">
              <a className="landing-page-link">
                <h1 className="landing-page-logo">PRIMOJR</h1>
              </a>
            </Link>
            <div className="landing-page-right-side">
              <div className="landing-page-links-container">
                <span className="landing-page-text">Inicio</span>
                <span className="landing-page-text01">Sobre</span>
                <span className="landing-page-text02">projetos</span>
                <a
                  href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                  className="landing-page-link01"
                >
                  Contato
                </a>
              </div>
              <a
                href="https://primojunior.com/patrocinar"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link02"
              >
                <SolidButton
                  button="Patrocinar"
                  className="landing-page-component"
                ></SolidButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="landing-page-burger-menu">
              <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="landing-page-mobile-menu">
              <div className="landing-page-nav">
                <div className="landing-page-top">
                  <h1 className="landing-page-logo1">PRIMOJR</h1>
                  <div
                    data-role="CloseMobileMenu"
                    className="landing-page-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="landing-page-icon03"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <div className="landing-page-right-side1">
                  <div className="landing-page-links-container1">
                    <Link href="/">
                      <a className="landing-page-link03">Pagina inicial</a>
                    </Link>
                    <span className="landing-page-text03">Quem eu sou</span>
                    <span className="landing-page-text04">Projetos</span>
                    <span>Contato</span>
                  </div>
                  <a
                    href="https://primojunior.com/patrocinar"
                    className="landing-page-link04"
                  >
                    <SolidButton
                      button="Patrocinar"
                      className="landing-page-component1"
                    ></SolidButton>
                  </a>
                </div>
              </div>
              <div className="landing-page-follow-container">
                <span className="landing-page-text06">Segui o primo</span>
                <div className="landing-page-icons-container">
                  <a
                    href="https://www.instagram.com/oprimojunior/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link05"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="landing-page-icon05"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="landing-page-link06"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="landing-page-icon09"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="landing-page-hero">
            <div className="landing-page-content-container">
              <h1 className="landing-page-text07">Seja uma pessoa ilimitada</h1>
              <span className="landing-page-text08 subheading">
                Estou escrevendo um e-book que vai te ajudar a descobrir o seu
                Dom.
              </span>
              <SolidButton
                button="Eu quero"
                rootClassName="solid-button-root-class-name"
              ></SolidButton>
            </div>
          </div>
        </div>
        <div className="landing-page-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-49065/widget/custom/6949">\r\n</storifyme-collection>',
            }}
          />
        </div>
        <h1 className="landing-page-logo2">
          Episodio recente do Podcast
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <div className="landing-page-html-node1">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/0LzVGwtBYHnWAByDNLNn3b?utm_source=generator"\r\n    width="100%" height="352" frameBorder="0" allowfullscreen=""\r\n    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
            }}
          />
        </div>
        <a
          href="https://open.spotify.com/show/0LzVGwtBYHnWAByDNLNn3b"
          className="landing-page-link07"
        >
          <h1 className="landing-page-text09">
            <span className="landing-page-text10">Ver todos</span>
            <span> os episodios</span>
          </h1>
        </a>
        <div className="landing-page-footer">
          <div className="landing-page-menu">
            <h1>PRIMOJR</h1>
            <div className="landing-page-links-container2">
              <div className="landing-page-container1">
                <a
                  href="https://blog.startpee.site/category/projeto/"
                  className="landing-page-link08"
                >
                  Meus projetos
                </a>
                <a
                  href="https://blog.startpee.site/category/portfolio/"
                  className="landing-page-link09"
                >
                  Portifolio Exemplos
                </a>
                <a
                  href="https://primojunior.com/patrocinar"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link10"
                >
                  Patrocinar
                </a>
              </div>
              <div className="landing-page-container2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link11"
                >
                  Minha história 
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link12"
                >
                  Politica de privacidade
                </a>
                <Link href="/chat">
                  <a className="landing-page-link13">Contato</a>
                </Link>
              </div>
            </div>
            <div className="landing-page-follow-container1">
              <div className="landing-page-follow-container2">
                <span className="landing-page-text12">
                  Acompanhe o primo nas redes
                </span>
                <div className="landing-page-container3">
                  <div className="landing-page-container4">
                    <div className="landing-page-icons-container1">
                      <a
                        href="https://www.instagram.com/oprimojunior/"
                        className="landing-page-link14"
                      >
                        <svg
                          viewBox="0 0 877.7142857142857 1024"
                          className="landing-page-icon11"
                        >
                          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/@oprimojunior"
                        className="landing-page-link15"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-tiktok%20%5B1%5D.svg"
                          className="landing-page-image"
                        />
                      </a>
                      <a
                        href="https://twitter.com/oprimojunior"
                        className="landing-page-link16"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-twitter.svg"
                          className="landing-page-image1"
                        />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCVLuKfabpsJu5zIdv7kGSKg/"
                        className="landing-page-link17"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-youtube%20%5B1%5D.svg"
                          className="landing-page-image2"
                        />
                      </a>
                      <a
                        href="https://br.pinterest.com/oprimojunior/"
                        className="landing-page-link18"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-pinterest.svg"
                          className="landing-page-image3"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/oprimojunior.oficial"
                        className="landing-page-link19"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-facebook.svg"
                          className="landing-page-image4"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/oprimojunior/"
                        className="landing-page-link20"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/icons8-linkedin-circled.svg"
                          className="landing-page-image5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://startpee.site/"
          target="_blank"
          rel="noreferrer noopener"
          className="landing-page-link21"
        >
          <span>
            Site criado pela 
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="landing-page-text14">Startpee</span>
        </a>
      </div>
      <style jsx>
        {`
          .landing-page-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-page-top-container {
            width: 100%;
            height: 600px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/photo-1484627147104-f5197bcd6651%20%5B3%5D-1500w.webp');
            background-position: 0% 40%;
          }
          .landing-page-navbar {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link {
            display: contents;
          }
          .landing-page-logo {
            text-decoration: none;
          }
          .landing-page-right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-text {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-text01 {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-text02 {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .landing-page-link01 {
            font-style: normal;
            font-weight: 700;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .landing-page-link02 {
            display: contents;
          }
          .landing-page-component {
            text-decoration: none;
          }
          .landing-page-burger-menu {
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-burger-menu {
            width: 24px;
            height: 24px;
          }
          .landing-page-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100%;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .landing-page-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .landing-page-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            margin-left: 70px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: 20px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .landing-page-icon03 {
            height: 24px;
            align-self: flex-end;
          }
          .landing-page-right-side1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-link03 {
            margin-bottom: 8px;
            text-decoration: none;
          }
          .landing-page-text03 {
            margin-bottom: 8px;
          }
          .landing-page-text04 {
            margin-bottom: 8px;
          }
          .landing-page-link04 {
            display: contents;
          }
          .landing-page-component1 {
            text-decoration: none;
          }
          .landing-page-follow-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text06 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .landing-page-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link05 {
            display: contents;
          }
          .landing-page-icon05 {
            width: 24px;
            height: 24px;
          }
          .landing-page-icon07 {
            width: 24px;
            height: 24px;
          }
          .landing-page-link06 {
            display: contents;
          }
          .landing-page-icon09 {
            width: 24px;
            height: 24px;
          }
          .landing-page-hero {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .landing-page-content-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .landing-page-text07 {
            font-size: 3rem;
            align-self: center;
            font-family: Poppins;
            font-weight: 700;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .landing-page-text08 {
            color: #ffffff;
            font-style: normal;
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .landing-page-html-node {
            width: 100%;
            height: 100%;
            margin-top: 40px;
          }
          .landing-page-logo2 {
            font-size: 3rem;
            font-family: Poppins;
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: 4px;
            text-transform: none;
            text-decoration: none;
          }
          .landing-page-html-node1 {
            width: 100%;
          }
          .landing-page-link07 {
            display: contents;
          }
          .landing-page-text09 {
            color: rgb(255, 255, 255);
            margin-top: 10px;
            text-align: center;
            margin-bottom: 10px;
            text-decoration: none;
            background-color: rgb(64, 40, 160);
          }
          .landing-page-text10 {
            text-decoration: underline;
          }
          .landing-page-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #4028a0;
          }
          .landing-page-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-links-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-container1 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .landing-page-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .landing-page-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link12 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .landing-page-link13 {
            text-decoration: none;
          }
          .landing-page-follow-container1 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-follow-container2 {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .landing-page-text12 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .landing-page-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .landing-page-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .landing-page-icons-container1 {
            width: 424px;
            height: 39px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .landing-page-link14 {
            display: contents;
          }
          .landing-page-icon11 {
            fill: var(--dl-color-gray-white);
            width: 35px;
            height: auto;
            margin-left: 3px;
            margin-right: 3px;
          }
          .landing-page-link15 {
            display: contents;
          }
          .landing-page-image {
            width: 35px;
            height: auto;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link16 {
            display: contents;
          }
          .landing-page-image1 {
            width: 35px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link17 {
            display: contents;
          }
          .landing-page-image2 {
            width: 35px;
            height: 27px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link18 {
            display: contents;
          }
          .landing-page-image3 {
            width: 35px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link19 {
            display: contents;
          }
          .landing-page-image4 {
            width: 36px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link20 {
            display: contents;
          }
          .landing-page-image5 {
            width: 36px;
            object-fit: cover;
            margin-left: 3px;
            margin-right: 3px;
            text-decoration: none;
          }
          .landing-page-link21 {
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .landing-page-text14 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .landing-page-hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .landing-page-text08 {
              align-self: center;
              text-align: center;
            }
            .landing-page-text12 {
              text-align: center;
            }
            .landing-page-icon11 {
              width: 28px;
              height: 28px;
            }
            .landing-page-image {
              width: 31px;
              height: 29px;
              padding-top: 0px;
            }
            .landing-page-link21 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .landing-page-right-side {
              display: none;
            }
            .landing-page-burger-menu {
              display: flex;
            }
            .landing-page-logo1 {
              align-self: center;
              text-align: center;
            }
            .landing-page-icon03 {
              align-self: flex-end;
            }
            .landing-page-hero {
              justify-content: center;
            }
            .landing-page-content-container {
              align-items: center;
            }
            .landing-page-text07 {
              font-size: 2.5rem;
            }
            .landing-page-text08 {
              text-align: center;
              padding-top: 4px;
              padding-bottom: 4px;
            }
            .landing-page-menu {
              flex-direction: column;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .landing-page-container1 {
              margin-left: 0px;
            }
            .landing-page-icons-container1 {
              width: 127px;
            }
            .landing-page-icon11 {
              width: 36px;
              height: 31px;
            }
            .landing-page-image {
              width: 34px;
              height: 33px;
            }
          }
          @media (max-width: 479px) {
            .landing-page-mobile-menu {
              display: none;
            }
            .landing-page-text07 {
              font-size: 2rem;
              text-align: center;
            }
            .landing-page-logo2 {
              font-size: 1.5rem;
              text-align: center;
              font-family: Poppins;
              font-weight: 700;
              line-height: 1.55;
              text-transform: none;
              text-decoration: none;
            }
            .landing-page-text09 {
              font-size: 1em;
            }
            .landing-page-links-container2 {
              margin-top: var(--dl-space-space-doubleunit);
              align-items: flex-start;
              justify-content: flex-start;
            }
            .landing-page-link08 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link09 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link10 {
              margin-bottom: var(--dl-space-space-halfunit);
              text-decoration: none;
            }
            .landing-page-container2 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .landing-page-link11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-link13 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .landing-page-follow-container1 {
              margin-left: 0px;
            }
            .landing-page-follow-container2 {
              margin-left: 0px;
            }
            .landing-page-icons-container1 {
              width: 255px;
            }
            .landing-page-icon11 {
              width: 24%;
              height: auto;
              margin-left: 3px;
              margin-right: 3px;
            }
            .landing-page-image {
              width: 41px;
              height: 33px;
            }
            .landing-page-image1 {
              width: 40px;
            }
            .landing-page-image2 {
              width: 30%;
            }
            .landing-page-image3 {
              width: 30%;
            }
            .landing-page-image5 {
              margin-left: 3px;
              margin-right: 3px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LandingPage
