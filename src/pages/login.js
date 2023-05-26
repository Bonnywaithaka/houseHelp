import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import UserLoginForm from "../components/account/forms/UserLoginForm";

const StyledMainPage = styled(Box)(({ theme }) => ({
  margin: "20px 30px",
}));
function login() {
  return (
    <>
      <Head>
        <title>Login | My-house-help</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMainPage>
        <UserLoginForm />
      </StyledMainPage>
    </>
  );
}

export default login;
