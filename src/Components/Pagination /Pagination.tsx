import { PaginationObject } from "@/Types/generic";

import { PaginationContainer, PaginateButton } from "./Pagination.style";

const Pagination: React.FC<{
  paginationLinks: PaginationObject;
  onPaginate: (link?: string) => void;
}> = ({ paginationLinks, onPaginate }) => {
  return (
    <PaginationContainer>
      {Object.keys(paginationLinks).map((key) => {
        const typedKey = key as keyof typeof paginationLinks;
        const val = paginationLinks[typedKey];
        return (
          <PaginateButton onClick={() => onPaginate(val)} key={key}>
            {key}
          </PaginateButton>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;
