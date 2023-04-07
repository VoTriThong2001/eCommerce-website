import {
  VStack,
  Flex,
  FormLabel,
  Input,
  useToast,
  Box,
  Button,
  FormControl,
  Select
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "./AlertPop";
import Stats from "./Stats";

export default function Builder() {
  const toast = useToast();
  const [data, setData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    toast({
      title: "Submitted",
      status: "success",
      duration: 3000,
      isClosable: true
    });
    setData(data);
  };
  //console.log(data);
  return (
    <Box p='15px'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              isRequired
              type="text"
              placeholder="First name"
              {...register("firstname", {
                required: "Please enter first name",
                minLength: 3,
                maxLength: 80
              })}
            />
          </FormControl>
          <FormControl ml="5">
            <FormLabel>Last Name</FormLabel>
            <Input
              isRequired
              type="text"
              placeholder="Last name"
              {...register("lastname", {
                required: "Please enter Last name",
                minLength: 3,
                maxLength: 100
              })}
            />
          </FormControl>
        </Flex>
        <FormLabel>Email Address</FormLabel>
        <Input
          isRequired
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Please enter Email Address",
            minLength: 3,
            maxLength: 100
          })}
        />
        <FormLabel>Mobile Number</FormLabel>
        <Input
          isRequired
          type="Number"
          maxlength="10"
          placeholder="10 digit Mobile Number"
          {...register("mobile", {
            required: "Please enter 10 digit mobile Number",

            minLength: { value: 10, message: "Too short" },
            maxLength: { value: 10, message: "Too long" }
          })}
        />
        {errors.mobile && <AlertPop title={errors.mobile.message} />}
        {/* <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter Password2",
              minLength: { value: 8, message: "Too short" }
            })}
          />
          {errors.password && <AlertPop title={errors.password.message} />} */}
        <FormLabel>Address</FormLabel>
        <Input
          isRequired
          type="text"
          placeholder="Address"
          {...register("address", {
            required: "Please enter ",
            minLength: 3,
            maxLength: 100
          })}
        />
        <FormLabel>City</FormLabel>
        <Input
          isRequired
          type="text"
          placeholder="City"
          {...register("city", {
            required: "Please enter ",
            minLength: 3,
            maxLength: 100
          })}
        />

        <Flex gap="20px">
          <FormControl>
            <FormLabel>State</FormLabel>
            <Select
              isRequired
              placeholder="Select option"
              name="state"
              id="state"
              className="form-control"
              {...register("state", {
                required: "Please enter"
              })}
            >
              <option value="Ho Chi Minh">Ho Chi Minh</option>
              <option value="Ha Noi">
                Ha Noi
              </option>
              <option value="Nha Trang">Nha Trang</option>
              <option value="Vung Tau">Vung Tau</option>
              <option value="Nghe An">Nghe An</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Zip Code</FormLabel>
            <Input
              isRequired
              type="tel"
              maxlength="6"
              placeholder="6 digit Zip Code"
              {...register("zip", {
                required: "Please enter zip code",
                minLength: 6,
                maxLength: 6
              })}
            />
          </FormControl>
        </Flex>
        <Box textAlign='center' >
          <Button
            h='50px'
            mt='20px'
            maxWidth={"400px"}
            borderRadius="md"
            bg="rgb(255, 204, 0)"
            _hover={{ bg: "rgb(255, 204, 0)" }}
            variant="ghost"
            type="submit"

            fontWeight={"bold"}
          >
            Update Billing Address
          </Button>
        </Box>

      </form >
      {data && (
        <Stats
          Firstname={data.firstname}
          Lastname={data.lastname}
          Email={data.email}
          Mobile={data.mobile}
          Address={data.address}
          City={data.city}
          state={data.state}
          zip={data.zip}
        />
      )
      }
    </Box >
  );
}
