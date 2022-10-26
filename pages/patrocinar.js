import React from 'react'
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
          @media (max-width: 479px) {
            .patrocinar-html-node {
              align-self: center;
              margin-top: var(--dl-space-space-unit);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 190px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Patrocinar
