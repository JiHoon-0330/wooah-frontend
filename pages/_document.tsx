import Document, { Html, Head, Main, NextScript } from "next/document";
import Pwa from "../components/Tags/Pwa";
import HtmlHead from "../Documents/HtmlHead/HtmlHead";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <HtmlHead />
          <Pwa />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
