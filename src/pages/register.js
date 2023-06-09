import { Box } from "@mui/material";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import UserRegistration from "../components/account/forms/UserRegistration";
import StepperRegistrationForm from "../components/account/forms/StepperRegistrationForm";

function Register() {
  return (
    <>
      <Head>
        <title>Registration | My-house-help</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <UserRegistration />
        {/* <StepperRegistrationForm /> */}
      </Box>
    </>
  );
}

export default Register;
