import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function ReportDialog({ index, title, description }) {
  const localLink = "http://localhost:1337";
  return (
    <Box>
      <Box>
        <Typography>{index?.attributes?.title}</Typography>
      </Box>
      <Box>
        <Typography>{index?.attributes?.description}</Typography>
      </Box>
      <Box>
        <Avatar
          src={`${localLink}${index?.attributes?.photos?.data[0]?.attributes?.url}`}
          alt={index?.attributes?.title}
          width={200}
          height={200}
        />
      </Box>
    </Box>
  );
}

export default ReportDialog;
