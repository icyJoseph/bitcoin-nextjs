import Head from "next/head";
import NavBar from "./NavBar";

const Layout = props => (
  <div>
    <Head>
      <title>BitCoin Prices</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cyborg/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    {props.children}
  </div>
);

export default Layout;
