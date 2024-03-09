import { useParams } from "react-router";

const SearchPage = () => {
  const { city } = useParams();
  return <span>User serached for {city}</span>;
};

export default SearchPage;
