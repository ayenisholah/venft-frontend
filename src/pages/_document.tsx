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
        <body className="bg-body font-nunito mobile:px-4 tablet:px-14 laptop:px-16">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
