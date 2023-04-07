import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import {Link} from "react-router-dom";
function Footer() {
  return (
    <Box>
      <Box className="Footer2">
        <Box marginLeft="100px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            CUSTOMER SUPPORT
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Contact Us
          </Text>
          <Link to={`/signup`}>
              <Text marginTop="20px" fontSize="16px">Account</Text>
          </Link>
          <Link to={`/`}>
              <Text marginTop="20px" fontSize="16px">Help Center</Text>
          </Link>
        </Box>
        <Box marginLeft="140px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            ABOUT US
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Corporate Information
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            QUICK LINKS
          </Text>
          <Link to={`/products?category=game`}>
              <Text marginTop="20px" fontSize="16px">Games</Text>
          </Link>
          <Link to={`/products?category=merchandise`}>
              <Text marginTop="20px" fontSize="16px">Merchandises</Text>
          </Link>
          <Link to={`/products?category=preorder`}>
              <Text marginTop="20px" fontSize="16px">Pre-orders</Text>
          </Link>
          <Link to={`/products?category=sales`}>
              <Text marginTop="20px" fontSize="16px">Sales</Text>
          </Link>
        </Box>
        <Box marginLeft="120px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            FOLLOW US
          </Text>
          <Box display="flex" gap="10px">
            <FaFacebook className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Facebook
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaTwitter className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Twitter
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaYoutube className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              YouTube
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
