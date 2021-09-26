import { useRouter } from "next/router";
// Our-domain.com/news/latest

function LastestNewsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backen API
  // to fetch the news item with newsId

  return <h1> The Latest News Page</h1>;
}

export default LastestNewsPage;
