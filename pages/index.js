import axios from "axios";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>BitCoin Prices</h1>
      <p>Check current BitCoin rates.</p>
      <Prices bpi={bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const { data } = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  return {
    bpi: data.bpi
  };
};

// As if JS was php, this index page gets loaded when the browser goes to the root of the url /
export default Index;
