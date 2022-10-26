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
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Patrocinar
