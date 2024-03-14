import { NavLink } from "react-router-dom";

type PropsType = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ city, total }: PropsType) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in {city}
        <NavLink
          to="/"
          className="ml-1 text-sm font-semibold underline cursor-pointer text-blue-500"
        >
          Change Loacation
        </NavLink>
      </span>
    </div>
  );
};

export default SearchResultInfo;
