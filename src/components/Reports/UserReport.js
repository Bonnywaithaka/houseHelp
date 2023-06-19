import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Dialog from "../../Dialog";
import { useQuery } from "@apollo/client";
import { GET_REPORTS } from "@/src/api/queries/GetReports";
import ReportDialog from "./ReportDialog";

function UserReport({ report }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState("");
  const { data, loading, error } = useQuery(GET_REPORTS, {
    variables: {
      filters: {
        houseHelpId: { eq: Number(report) },
        // status: { eq: "positive" },
      },
    },
  });
  const reportData = data?.reports?.data;
  console.log("Reports data", reportData);
  console.log("Reports data repo", report);
  console.log("Reports data index", index);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: 3,
        height: "100vh",
      }}
    >
      <Grid container spacing={6}>
        {reportData?.map((report) => (
          <Grid item md={3} lg={4} xs={4} sm={4} key={report.id}>
            <Box
              sx={{
                border: `${report?.attributes?.status === "negative"}`
                  ? "1px solid red"
                  : "1px solid blue",
                maxHeight: 300,
                padding: 2,
                borderRadius: 3,
                overflow: "auto",
              }}
            >
              <Typography variant="h6">{report?.attributes?.title}</Typography>
              <Divider />
              {report?.attributes?.status}
              <Box sx={{ minHeight: 200, textAlign: "start" }}>
                <Typography>{report?.attributes?.description}</Typography>
              </Box>

              <Box>
                <Button
                  onClick={() => {
                    setOpen(true);
                    setIndex(report);
                  }}
                >
                  Read More..
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        disableBackdropClose
        modalHeader={
          <Box>
            <Typography>{reportData?.attributes?.title}</Typography>
            <Button onClick={handleClose}>close</Button>
          </Box>
        }
        modalContent={
          <Box>
            {reportData?.map((item) => (
              <Box key={item.id}>
                <ReportDialog
                  index={index}
                  title={item?.attributes?.title}
                  description={item?.attributes?.description}
                  photos={item?.attributes?.photos}
                />
              </Box>
            ))}
          </Box>
        }
        // handleClose={handleClose}
      />
    </Box>
  );
}

export default UserReport;
