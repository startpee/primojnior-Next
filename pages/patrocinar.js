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
              <h1>PRIMOJR</h1>
              <div className="patrocinar-links-container">
                <div className="patrocinar-container2">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link"
                  >
                    Meus projetos
                  </a>
                  <Link href="/patrocinar">
                    <a className="patrocinar-link1">Patrocinar</a>
                  </Link>
                </div>
                <div className="patrocinar-container3">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link2"
                  >
                    Minha história 
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="patrocinar-link3"
                  >
                    Portifolio
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
              <div className="patrocinar-follow-container">
                <span className="patrocinar-text">Me acompanhe nas redes</span>
                <div className="patrocinar-icons-container">
                  <a
                    href="https://www.instagram.com/oprimojunior/"
                    className="patrocinar-link6"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="patrocinar-icon"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCVLuKfabpsJu5zIdv7kGSKg/"
                    className="patrocinar-link7"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/icons8-youtube%20%5B1%5D.svg"
                      className="patrocinar-image"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@oprimojunior"
                    className="patrocinar-link8"
                  >
                    <img
                      alt="image"
                      src="/playground_assets/icons8-tiktok%20%5B1%5D.svg"
                      className="patrocinar-image1"
                    />
                  </a>
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
            width: 100%;
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
          .patrocinar-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-link1 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .patrocinar-container3 {
            display: flex;
            align-items: flex-start;
            margin-left: 100px;
            flex-direction: column;
          }
          .patrocinar-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
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
          .patrocinar-follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .patrocinar-text {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .patrocinar-icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .patrocinar-link6 {
            display: contents;
          }
          .patrocinar-icon {
            fill: var(--dl-color-gray-white);
            width: 35px;
            height: 31px;
          }
          .patrocinar-link7 {
            display: contents;
          }
          .patrocinar-image {
            width: 37px;
            height: 34px;
            object-fit: cover;
            text-decoration: none;
          }
          .patrocinar-link8 {
            display: contents;
          }
          .patrocinar-image1 {
            width: 31px;
            height: 32px;
            object-fit: cover;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .patrocinar-footer {
              height: 265px;
            }
          }
          @media (max-width: 767px) {
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
            .patrocinar-link {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .patrocinar-link1 {
              margin-bottom: var(--dl-space-space-halfunit);
              text-decoration: none;
            }
            .patrocinar-container3 {
              height: 100%;
              align-items: flex-start;
              margin-left: 50px;
            }
            .patrocinar-link2 {
              margin-bottom: var(--dl-space-space-halfunit);
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
            .patrocinar-follow-container {
              margin-left: 0px;
            }
            .patrocinar-image {
              width: 37px;
              height: 31px;
            }
            .patrocinar-image1 {
              width: 31px;
              height: 27px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Patrocinar
