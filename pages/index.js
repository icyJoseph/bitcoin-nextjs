import axios from "axios";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = ({ bpi }) => (
  <Layout>
    <div>
      <h1>BitCoin Price</h1>
      <p>
        Current price of <strong>1 BitCoin</strong>
      </p>
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
