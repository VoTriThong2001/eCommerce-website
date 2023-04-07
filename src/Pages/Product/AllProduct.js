import "./AllProduct.css";
import { Box, Button, Flex, Spacer, Text, SkeletonText, Grid, Skeleton,AccordionItem,  Accordion,Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/products/action";

const AllProduct = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");
  let [page, setPage] = useState(1);
  const [price, setPrice] = useState([]);
  const [sort, setSort] = useState("offer_price");
  const [orderBy, setOrderBy] = useState("");
  const { data } = useSelector((store) => store.products);
  // console.log(data)
  let length;
  if (query === "") {
    length = 80;
  } else if (query === "preorder") {
    length = 50;
  } else if (query === "game") {
    length = 50;
  } else if (query === "sales") {
    length = 50;
  }
  
  const [prevQuery, setPrevQuery] = useState(query);
  const {
    AllProducts: { loading },
  } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(
      getAllProducts({ category: query, page: page, price, sort, orderBy })
    );
    setPrevQuery(query);
  }, [dispatch, query, page, prevQuery, price, sort, orderBy]);

  if(loading){
    return <Grid
      w={{
        base: "100%",
        md: "90%",
        lg: "80%",
      }}
      m="auto"
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap="10"
      p="10"
    >

      {new Array(40).fill(0).map((e, i) => (
        <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
          <Skeleton size="10" h="180px" />
          <SkeletonText
            w="80%"
            m="auto"
            mb="20px"
            mt="4"
            noOfLines={4}
            spacing="4"
          />
        </Box>
      ))}
    </Grid>
  
      }
 
  return (
    <div>
      <div id="productPage">
        <div id="filterDiv">
          <Box className='so3'>
          <Accordion allowToggle>
            <AccordionItem>
              <Select
                placeholder=" Sort By Price"
                textAlign="center"
                onChange={({ target }) => {
                  if (target.value === "increasing") {
                    setSort("offer_price");
                    setOrderBy("asc");
                  } else {
                    setSort("offer_price");
                    setOrderBy("desc");
                  }
                }}
              >
                <option value="increasing">Low to High</option>
                <option value="decreasing">High to Low</option>
              </Select>
            </AccordionItem>
          </Accordion>
          </Box>
        </div>
        <div id="mainDiv">
          <div id="productList">
          {
          data?.map((item,i) => (
             <div id='singleProduct' key={item._id}>
              <Link to={`/products/${item._id}`}>
                  <img src={item.img} alt="" />
                  <h1 style={{ maxWidth: "35ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap",fontSize: "large", fontWeight:"bolder" }} >{item.brand}</h1>
                    <div id="productPrice">
                      <div id="productMrp">
                        <Text fontSize="xs" as="s" color='tomato'>Original Price:{item.original_price}{" "}</Text> <br />
                        <Text color="black" fontSize="sm" as='b'>Discount Price : ₹{" "} {item.offer_price}</Text> <br />
                      </div>
                    </div>
                      <Text color="teal" fontSize="xs">Free Shipping</Text>
                    <div id="productButton">
                      <Button color="white"  variant='outline' className="btn1" width="100%">SEE DETAILS</Button>
                      
                    </div>
              </Link>
            </div>
          ))
          }
        </div>
        </div>
          <Flex justifyContent="center" gap="30px" marginTop="30px">
            <Button  disabled={page === 1} onClick={() => setPage(page - 1)}  colorScheme=' rgb(0, 0, 0);' color="white">Prev </Button>
            <Button  colorScheme=' rgb(0, 0, 0);' color="white" >{page}</Button>
            <Button  colorScheme=' rgb(0, 0, 0);' color="white"
            disabled={page === Math.ceil(length / 20)}
            onClick={() => setPage(page + 1)}
            > Next</Button>
          </Flex>
      </div>
    </div>
  )
}

export default AllProduct



      
 
 

