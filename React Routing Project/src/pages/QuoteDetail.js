import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React makes you crazy!" },
  { id: "q2", author: "Maxi", text: "Learning React is insane!" },
  { id: "q3", author: "Maxim", text: "Learning React is not fun!" },
  { id: "q4", author: "Maximil", text: "Learning React will kill you!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
