import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/logo.ico" />
        </Head>
        <title>FrognationDaAO</title>
        <body className="bg-body font-nunito">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
