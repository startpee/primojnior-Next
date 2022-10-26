import React from 'react'
import Head from 'next/head'

const Projetos = (props) => {
  return (
    <>
      <div className="projetos-container">
        <Head>
          <title>projetos - primojúnior</title>
          <meta property="og:title" content="projetos - primojúnior" />
        </Head>
      </div>
      <style jsx>
        {`
          .projetos-container {
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

export default Projetos
