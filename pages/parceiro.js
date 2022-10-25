import React from 'react'
import Head from 'next/head'

const Parceiro = (props) => {
  return (
    <>
      <div className="parceiro-container">
        <Head>
          <title>parceiro - primojúnior</title>
          <meta property="og:title" content="parceiro - primojúnior" />
        </Head>
      </div>
      <style jsx>
        {`
          .parceiro-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-end;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Parceiro
