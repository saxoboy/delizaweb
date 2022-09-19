import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,400;1,700&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <meta name="copyright" content="Deliza Cake Art" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        <meta name="owner" content="Elizabeth Loyola" />
        <meta
          name="author"
          content="Israel Herrera E., israelherrere@gmail.com"
        />
        <meta name="url" content={`${process.env.NEXT_PUBLIC_HOST_NAME}`} />
        <meta
          name="identifier-URL"
          content={`${process.env.NEXT_PUBLIC_HOST_NAME}`}
        />
        <meta name="target" content="all" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:locale" content="es_EC" />
        <body className="box-content relative antialiased scroll-smooth">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
