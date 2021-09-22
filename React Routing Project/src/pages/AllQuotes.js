import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React makes you crazy!" },
  { id: "q2", author: "Maxi", text: "Learning React is insane!" },
  { id: "q3", author: "Maxim", text: "Learning React is not fun!" },
  { id: "q4", author: "Maximil", text: "Learning React will kill you!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
