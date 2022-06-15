import Head from "next/head";
import { Menu } from "../components/Layout/Navbar";

const withTitle = (
  WrapperComponent: (props?: any) => JSX.Element,
  pageName: Menu,
) => {
  const Component = () => {
    return (
      <>
        <Head>
          <title>{pageName} - 우아!</title>
        </Head>
        <WrapperComponent />
      </>
    );
  };

  return Component;
};

export default withTitle;
