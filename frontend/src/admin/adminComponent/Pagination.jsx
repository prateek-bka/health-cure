import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

const Pagination = ({ handlePagination }) => {
  const [page, setPage] = useState(1);
  const handlePrevButton = () => {
    setPage(page - 1);
    handlePagination(page - 1);
  };

  const handleNextButton = () => {
    setPage(page + 1);
    handlePagination(page + 1);
  };
  return (
    <>
      <ButtonGroup>
        <Button isDisabled={page === 1} onClick={handlePrevButton}>
          Previous
        </Button>
        <Button>{page}</Button>
        <Button onClick={handleNextButton}>Next</Button>
      </ButtonGroup>
    </>
  );
};

export default Pagination;
