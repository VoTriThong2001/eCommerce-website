import React from "react";
import { Box, Text, Image, Button, Heading, Input } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import {Link} from "react-router-dom";
import "./Home.css";
import {
  FaBoxOpen,
  FaCar,
  FaDollarSign,
  FaRecycle,
  FaSave,
  FaShuttleVan,
  FaStar,
  FaUser,
} from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const fadeImages = [
  {
    url1: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81lk5oElBwL.jpg",
    caption1: "FFXIV: A Realm Reborn",
    url2: "https://cache-eu.finalfantasy.com/uploads/content/file/2019/05/07/1124/logo_ff14_Heavensward.jpg",
    caption2: "FFXIV: Heavensward",
    url3: "https://img.finalfantasyxiv.com/lds/promo/h/5/jMux8ZqzKMhECxQuhgu4NrbqrA.png",
    caption3: "FFXIV: Stormblood",
    url4: "https://img.finalfantasyxiv.com/lds/promo/h/l/Wpxdd7E1zDgSN7d4ITTbSMymfI.png",
    caption4: "FFXIV: Shadowbringers",
    url5: "https://img.finalfantasyxiv.com/lds/promo/h/M/xRfPaGRwUih5gCM0FcNvQJSevw.png",
    caption5: "FFXIV: Endwalker",
    url6: "https://m.media-amazon.com/images/M/MV5BNGUyMThjNGYtNzViOS00NzVkLTg2YmItMDUyMDk4N2FkMWJjXkEyXkFqcGdeQXVyMTgwOTE5NDk@._V1_.jpg",
    caption6: "FFXIV: Version 1.0",
  },
  {
    url1: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/capsule_616x353.jpg?t=1655449232",
    caption1: "FF7R Intergrade",
    url2: "https://www.godisageek.com/wp-content/uploads/FF7R-Thumb-1-1024x576.jpg",
    caption2: "Final Fantasy VII Remake",
    url3: "https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg",
    caption3: "Final Fantasy XV",
    url4: "https://upload.wikimedia.org/wikipedia/en/a/a7/Ffxboxart.jpg",
    caption4: "Final Fantasy X",
    url5: "https://image.api.playstation.com/vulcan/ap/rnd/202007/1607/7PxHVp3tCaQQkVeHalUtPcND.png",
    caption5: "DRAGON QUEST XI S: Echoes of an Elusive Age",
    url6: "https://upload.wikimedia.org/wikipedia/vi/2/21/Nier_Automata_cover_art.jpg",
    caption6: "Nier Automata",
  },
];

const Home = () => {
  return (
    <Box>
      <Link to={`products/63c8e0e99e184c8cee58a0e4`}> 
      <Box className="Game">
      
        <Box>
             
          <Heading
            fontSize="48px"
            width="600px"
            marginTop="50px"
            marginLeft="20px"
          >
            Get your latest games right here, right now!
          </Heading>
          <Heading
            fontSize="20px"
            marginTop="20px"
            marginLeft="20px"
            width="1000px"
           
          >
           
            Have you heard of the critically acclaimed MMORPG Final Fantasy XIV?
            With an expanded free trial which you can play through the entirety of A Realm Reborn and
            the award-winning Heavensward expansion up to level 60 for free with no restrictions on playtime.
     
          </Heading>
        </Box>
        

        <Box>
          <Image
            src="https://i.ytimg.com/vi/aw3DBEz2emE/maxresdefault.jpg"
            height="320px"
          />
        </Box>
      </Box>
      </Link>

      <Box>
        <Heading marginTop="30px" marginLeft="10px">
          TOP GAMES
        </Heading>
        <Box className="slide-container">
          <Slide>
            {fadeImages.map((fadeImage, index) => (
              <Box className="each-fade" key={index}>
                <Box className="image-container">
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url1} height="170px"/>
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption1}
                    </Heading>
                  </Box>
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url2} height="170px"/>
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption2}
                    </Heading>
                  </Box>
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url3} height="170px" />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption3}
                    </Heading>
                  </Box>
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url4} height="170px"/>
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption4}
                    </Heading>
                  </Box>
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url5} height="170px" />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption5}
                    </Heading>
                  </Box>{" "}
                  <Box
                    width="250px"
                    height="250px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url6} height="170px" />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption6}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slide>
        </Box>
      </Box>

  

      <Heading marginTop="40px" marginLeft="20px">
        HOT MERCHANDISE
      </Heading>

      <Box display="flex" marginLeft="20px" gap="10px" marginTop="20px">
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://cdn-prod.scalefast.com/resize/-x365/public/assets/user/123622/image/77304784c3bb2bff3b1964090dd8dac4.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            FINAL FANTASY XIV FLOCKED FIGURINE - LOLOPORIT
          </Heading>
         
        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://cdn-prod.scalefast.com/resize/-x365/public/assets/user/123622/image/8ec271825dcad33262cdd03d28d603d6.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            FINAL FANTASY XIV Plushie Keychain - Fat Cat
          </Heading>
        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://cdn-prod.scalefast.com/public/assets/img/resized/squareenix-store-v3/0d1ba200dc73a5e2fb29394f4b3ea919_KR_350.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
          FINAL FANTASY XIV Neck Pillow Plushie - Mameshiba
          </Heading>

        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://cdn-prod.scalefast.com/resize/-x365/public/assets/user/123622/image/465e7c00502090bb029f3c6f21e087b9.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
          FINAL FANTASY XIV Mug - Old Sharlayan
          </Heading>

        </Box>
      </Box>

      <Heading marginTop="40px" marginLeft="20px">
        TOP SELLERS
      </Heading>
      <Box className="outline"></Box>

      <Box display="flex" marginTop="20px" gap="20px" marginLeft="20px">
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://upload.wikimedia.org/wikipedia/vi/2/21/Nier_Automata_cover_art.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $59.99
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(30)</Text>
            </Box>
            <Text fontWeight="bold">Nier Automata</Text>
            <Text>The YoRHA edition</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://img.finalfantasyxiv.com/lds/promo/h/M/xRfPaGRwUih5gCM0FcNvQJSevw.png"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $29.29
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(50)</Text>
            </Box>
            <Text fontWeight="bold">Final Fantasy XIV</Text>
            <Text>Endwalker</Text>
          </Box>
        </Box>
      </Box>
 
 <Text color="white" fontSize="15px" marginTop="10px" textAlign="center" >
           © 2023 Vo Tri Thong. 
          </Text>
      <Box
        height="50px"
        border="1px solid"
        marginTop="50px"
        w="97%"
        marginLeft="14px"
        background="#1E1E1E"
        display="flex"
      >
      <Text color="white" fontSize="16px" marginTop="10px" marginLeft="45%" textAlign="center" >
              © 2023 Vo Tri Thong
      </Text>
      </Box>

      <Text fontSize="16px" textAlign="center" marginTop="30px">
        *Restrictions apply: See coupon and promotion offer details
      </Text>

    
    </Box>
  );
};

export default Home;
