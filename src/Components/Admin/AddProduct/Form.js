import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../Redux/products/action";
const initialState = {
  img: "",
  category: "",
  offer_price: 30,
  original_price: 100,
  brand: "",
  desc: "",
};



const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  function handleChange({ target }) {
    let val = target.value;
    if (target.name === "price" || target.name === "stars") {
      val = +target.value;
    }
    setFormData({ ...formData, [target.name]: val });
  }
  function submit() {
    dispatch(addProduct(formData)) ;
    console.log(formData);
  }

  return (
    <FormControl margin="auto" width="90%" bg="white" id="form">
      <Box p={8}>
        <Flex
          gap={{ base: 2, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
            <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Product Name</FormLabel>
            <Input
              mb="15px"
              type="text"
              placeholder="enter product name"
              name="brand"
              onChange={handleChange}
              value={formData.brand}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Image Url</FormLabel>
            <Input
              mb="15px"
              type="url"
              placeholder="Product image url"
              name="img"
              onChange={handleChange}
              value={formData.img}
            />
          </Box>
        </Flex>
        <Flex
          gap={{ base: 2, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Category</FormLabel>
            <Input
              mb="15px"
              type="text"
              placeholder="product category"
              name="category"
              onChange={handleChange}
              value={formData.category}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Description</FormLabel>
            <Input
              mb="15px"
              type="text"
              placeholder="Enter product description"
              name="desc"
              onChange={handleChange}
              value={formData.desc}
            />
          </Box>
        </Flex>
        <Flex
          gap={{ base: 2, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          {/* <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Type</FormLabel>
            <Input
              mb="15px"
              type="text"
              placeholder="Enter product type"
              name="type"
              onChange={handleChange}
              value={formData.type}
            />
          </Box> */}
          
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Offer Price</FormLabel>
            <Input
              mb="15px"
              type="number"
              placeholder="Product price in $"
              name="price"
              onChange={handleChange}
              value={formData.offer_price}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Original Price</FormLabel>
            <Input
              mb="15px"
              type="number"
              placeholder="Product price in $"
              name="price"
              onChange={handleChange}
              value={formData.original_price}
            />
          </Box>
          <Box w={{ base: "100%", md: "50%" }}>
            <FormLabel>Store pickup</FormLabel>
            <Input
              mb="15px"
              type="number"
              placeholder="True or false"
              name="storepickup"
              onChange={handleChange}
              value={formData.store_pickup}
            />
          </Box>
        </Flex>

        <br />
        <Flex justifyContent="center" gap={2}>
          <Button onClick={() => submit()} colorScheme="teal" type="submit">
            submit
          </Button>

          <Button
            colorScheme="red"
            type="button"
            onClick={() => {
              setFormData(initialState);
            }}
          >
            reset
          </Button>
        </Flex>
      </Box>
    </FormControl>
  );
};
export default Form;