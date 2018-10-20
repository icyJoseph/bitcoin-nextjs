import Link from "next/link";

const Index = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <h1>BitCoin Prices</h1>
  </div>
);

// As if JS was php, this index page gets loaded when the browser goes to the root of the url /
export default Index;
