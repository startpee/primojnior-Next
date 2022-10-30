import React from 'react'
import Head from 'next/head'

const Intro = (props) => {
  return (
    <>
      <div className="intro-container">
        <Head>
          <title>intro - primojúnior</title>
          <meta property="og:title" content="intro - primojúnior" />
        </Head>
      </div>
      <style jsx>
        {`
          .intro-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Intro
