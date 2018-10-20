import Link from "next/link";

const About = () => (
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
    <h1>About This Page</h1>
    <p>You can see BitCoin prices in this page</p>
  </div>
);

// this one gets loaded in /about
export default About;
