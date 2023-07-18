import { Button, Heading, Spinner, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import prod from "../Assets/prod.png";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(30);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const getData = () => {
    fetch("https://filthy-bee-dirndl.cyclic.app/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res);
      })
      .catch((err) => console.log(err));
  };

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.getAll("order") && "price1",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    getData(obj);
  }, [location.search]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageButtons = () => {
    let buttons = [];
    if (pageNumbers.length <= 6) {
      buttons = pageNumbers;
    } else {
      if (currentPage < 3) {
        buttons = [1, 2, "...", pageNumbers.length];
      } else if (currentPage >= pageNumbers.length - 2) {
        buttons = [
          1,
          "...",
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ];
      } else {
        buttons = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          pageNumbers.length,
        ];
      }
    }
    return buttons;
  };

  return (
    <>
      <Box w="100%" mt="10px" mb="20px">
        <Image w="98%" src={prod} borderRadius={"5px"} />
      </Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, max-content))",
          gridTemplateRows: "repeat(auto-fill)",
          gridGap: "10px 0px",
          width: "100%",
          // border:'1px solid red'
        }}
      >
        {currentProducts.length ? (
          currentProducts.map((element) => (
            <ProductCard key={element.id} data={element} />
          ))
        ) : (
          <div style={{ display: "flex" }}>
            <Heading>Loading...</Heading>
            <Spinner
              margin="auto"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </div>
        )}
      </div>
      <Box
        display={"flex"}
        w={["100%", "80%", "20%"]}
        gap={"10px"}
        m="auto"
        mt={"40px"}
        mb="40px"
      >
        <Button
          bgColor={"skyblue"}
          borderRadius={"full"}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </Button>
        {getPageButtons().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <Button
                bgColor={"skyblue"}
                borderRadius={"full"}
                key={index}
                disabled
              >
                ...
              </Button>
            ) : (
              <Button
                bgColor={"skyblue"}
                borderRadius={"full"}
                key={index}
                onClick={() => paginate(pageNumber)}
                isActive={currentPage === pageNumber}
              >
                {pageNumber}
              </Button>
            )}
          </React.Fragment>
        ))}
        <Button
          bgColor={"skyblue"}
          borderRadius={"full"}
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
        >
          {">"}{" "}
        </Button>
      </Box>
    </>
  );
};

export default ProductList;
