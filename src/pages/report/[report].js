import Head from "next/head";
import React from "react";
import { Box } from "@mui/material";
import UserReport from "@/src/components/Reports/UserReport";

function Report({ report }) {
  return (
    <>
      <Head>
        <title>User-Report | My-house-help</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <UserReport report={report} />
      </Box>
    </>
  );
}

export default Report;

export async function getServerSideProps({ req, query }) {
  const { report } = query;
  console.log("data tesing", report);

  return {
    props: {
      report: report || "",
    },
  };
}
