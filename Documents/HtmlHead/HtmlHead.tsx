const HtmlHead = () => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
      />
      <link rel="favicon" href="./favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="description" content="우아!" />
      <meta name="keywords" content="우아, 우아!, wooah, woo!ah!" />
      <link
        rel="preload"
        href="/fonts/NotoSansKR/noto-sans-kr-v27-korean-700.woft2"
        as="font"
        type="font/woft2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/NotoSansKR/noto-sans-kr-v27-korean-500.woft2"
        as="font"
        type="font/woft2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/NotoSansKR/noto-sans-kr-v27-korean-400.woft2"
        as="font"
        type="font/woft2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/NotoSansKR/noto-sans-kr-v27-korean-300.woft2"
        as="font"
        type="font/woft2"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://api.wooah.shop" />
      <link rel="preconnect" href="https://twemoji.maxcdn.com" />
    </>
  );
};

export default HtmlHead;
