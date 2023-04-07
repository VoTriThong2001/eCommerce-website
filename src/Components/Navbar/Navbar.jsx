import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  Center,
  Button,
  FormControl,
  FormLabel
  
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import { FaCar,FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import {RiAdminFill} from "react-icons/ri"
import {Link} from "react-router-dom"
import {  useSelector } from "react-redux";



function Navbar() {
  const {carts} = useSelector((state) => state.carts)
  return (
    <Box>
      <Box className="Top-Bar">
        <Text id="Top-Bar-Text">SAVE 15% ONLINE ONLY</Text>
      </Box>
      <Box className="Navigation">
        <Box>
          <Link to={"/"}><Image className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square_Enix_logo.svg/2560px-Square_Enix_logo.svg.png" /></Link>
        </Box>
        <Box className="searchBar">
          {/* TODO needs search to work */}
          <Box className="searchBox">
          <FormControl>
          <Input
                placeholder="Search up games!"
                width="755px"
                marginTop="5px"
                border="1px solid"
                borderColor="black"
                type="search"
                formAction=""
              />
          </FormControl>
              

             
          </Box>
          <Box background="white" display="flex" width="390px">
        
          <Box display="flex" className="chooseStore">
          <Box>
              <FaUser className="iconU" />
            </Box>
            <Box>
              <Link to={"/signup"}>
              <Text color="white" marginTop="8px" fontSize="15px">Account</Text>
              </Link>
            </Box>
          </Box>
          <Link to={"/cart"}>
          <Box display="flex" className="cart">
          
            <Box>
               <FaCartPlus className="iconC" />
            </Box>
            <Box>
              {/* <Text color="white" >0</Text> */}
              <div style={{backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '0 5px',position: 'absolute', margin:'0 55px 20px 0', fontSize: '12px'}}>{carts?.length}</div>
            </Box>
          </Box>
          
          </Link>
          <Box display="flex" className="admin">
            <Box>
              <Link to={"/admin/dashboard"}>
              <RiAdminFill className="iconD"/>
              </Link>
            </Box>
          </Box>
          </Box>
        </Box>
      </Box>

      <Box className="hoverLine">
        <HamburgerIcon className="iconHam" />
        <Box marginTop="10px" >
        <Link to={`/products?category=`}>
                 All
              </Link></Box>

        <Box className="divider"></Box>

        <Box marginTop="10px">
        <Link to={`/products?category=game`}>Games
        </Link></Box>
        <Box className="divider"></Box>

        <Box marginTop="10px">
        <Link to={`/products?category=merchandise`}>Merchandise
        </Link></Box>
        <Box className="divider"></Box>

        <Box marginTop="10px">
        <Link to={`/products?category=preorder`}>Pre-orders
        </Link></Box>
        <Box className="divider"></Box>

        <Box marginTop="10px">
        <Link to={`/products?category=sales`}>Sales
        </Link></Box>
        <Box className="divider"></Box>       
      </Box>
    </Box>
  );
}

export default Navbar;
