import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Patrocinar = (props) => {
  return (
    <>
      <div className="patrocinar-container">
        <Head>
          <title>patrocinar - primojúnior</title>
          <meta property="og:title" content="patrocinar - primojúnior" />
        </Head>
        <div className="patrocinar-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script src="https://fast.wistia.com/embed/medias/dhlouaqaol.jsonp" async></script>\r\n<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>\r\n<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">\r\n    <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">\r\n        <span class="wistia_embed wistia_async_dhlouaqaol popover=true popoverAnimateThumbnail=true videoFoam=true" style="display:inline-block;height:100%;position:relative;width:100%">&nbsp;</span>\r\n    </div>\r\n</div>',
            }}
          />
        </div>
        <div className="patrocinar-container1">
          <div className="patrocinar-footer">
            <div className="patrocinar-menu">
              <Link href="/">
                <a className="patrocinar-link">
                  <h1 className="patrocinar-logo">PRIMOJR</h1>
                </a>
              </Link>
              <div className="patrocinar-links-container">
                <div className="patrocinar-container2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link1"
                  >
                    Meus projetos
                  </a>
                  <a
                    href="https://primojunior.com/patrocinar"
                    className="patrocinar-link2"
                  >
                    Portfólio exemplo
                  </a>
                </div>
                <div className="patrocinar-container3">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link3"
                  >
                    Minha história 
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link4"
                  >
                    Politica de privacidade
                  </a>
                  <Link href="/chat">
                    <a className="patrocinar-link5">Contato</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .patrocinar-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .patrocinar-html-node {
            width: 799px;
            height: 411px;
            align-self: center;
            margin-bottom: 270px;
          }
          .patrocinar-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .patrocinar-footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 229px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: #4028a0;
          }
          .patrocinar-menu {
            width: 100%;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .patrocinar-link {
            display: contents;
          }
          .patrocinar-logo {
            text-decoration: none;
          }
          .patrocinar-links-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .patrocinar-container2 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .patrocinar-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-container3 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .patrocinar-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-link5 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .patrocinar-html-node {
              width: 735px;
              height: 375px;
            }
            .patrocinar-footer {
              height: 265px;
            }
          }
          @media (max-width: 767px) {
            .patrocinar-html-node {
              width: 767px;
              height: 415px;
            }
            .patrocinar-menu {
              height: auto;
              flex-direction: column;
            }
            .patrocinar-links-container {
              margin-top: var(--dl-space-space-tripleunit);
              margin-bottom: var(--dl-space-space-tripleunit);
              justify-content: space-between;
            }
            .patrocinar-container2 {
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .patrocinar-html-node {
              width: 479px;
              height: 259px;
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 190px;
            }
            .patrocinar-footer {
              width: 479px;
              height: 338px;
              padding-top: var(--dl-space-space-tripleunit);
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
              padding-bottom: var(--dl-space-space-tripleunit);
            }
            .patrocinar-links-container {
              margin-top: 20px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .patrocinar-link1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .patrocinar-link2 {
              margin-bottom: var(--dl-space-space-halfunit);
              text-decoration: none;
            }
            .patrocinar-container3 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .patrocinar-link3 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .patrocinar-link4 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .patrocinar-link5 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Patrocinar
