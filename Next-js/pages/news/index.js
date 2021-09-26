// Our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  //jsx

  return (
    <Fragment>
      <h1> The News Page</h1>
      <ul>
        <li>
          <Link href='/news/latestnews'>The Latest News</Link>
        </li>

        <li>The Old News</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
