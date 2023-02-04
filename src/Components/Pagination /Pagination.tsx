import { PaginationObject } from "@/Types/generic";

import { PaginationContainer } from "./Pagination.style";

const Pagination: React.FC<{
  paginationLinks: PaginationObject;
  onPaginate: (link: string) => void;
}> = ({ paginationLinks, onPaginate }) => {
  return (
    <PaginationContainer>
      {Object.keys(paginationLinks).map((key) => {
        return (
          <button onClick={() => onPaginate(paginationLinks[key])} key={key}>
            {key}
          </button>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;
