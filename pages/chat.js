import React from 'react'
import Head from 'next/head'

const Chat = (props) => {
  return (
    <>
      <div className="chat-container">
        <Head>
          <title>chat - primojúnior</title>
          <meta property="og:title" content="chat - primojúnior" />
        </Head>
        <div className="chat-html-node">
          <span
            dangerouslySetInnerHTML={{
              __html:
                '<script src="//code.tidio.co/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1.js" async></script>',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .chat-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .chat-html-node {
            width: 100%;
            height: 994px;
          }
        `}
      </style>
    </>
  )
}

export default Chat
