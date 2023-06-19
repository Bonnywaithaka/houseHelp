import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ProfileCard from "./card/ProfileCard";
import NextLink from "next/link";
import { useQuery } from "@apollo/client";
import { GET_HOUSE_HELPS } from "../api/queries/GetHouseHelps";


function HomePage() {
  const { data, loading, error } = useQuery(GET_HOUSE_HELPS);
  const houseHelps = data?.houseHelps?.data;
  const houseHelpers = data?.houseHelps?.data?.attributes?.data;
  console.log("houseHelps", houseHelps, houseHelpers);
  if (Array.isArray(houseHelps)) {
    for (const houseHelp of houseHelps) {
      const { dob } = houseHelp.attributes;
      var dateOfBirth = dob;
      console.log("Date of birth:", dob);
    }
  }
  function calculateAge(dateOfBirth) {
    var dobs = new Date(dateOfBirth); // Convert the input to a Date object
    var currentDate = new Date(); // Get the current date
    var age = currentDate.getFullYear() - dobs.getFullYear(); // Calculate the age

    // Check if the birthday has already occurred this year
    if (
      currentDate.getMonth() < dobs.getMonth() ||
      (currentDate.getMonth() === dobs.getMonth() &&
        currentDate.getDate() < dobs.getDate())
    ) {
      age--; // Subtract 1 from the age if the birthday hasn't occurred yet
    }

    return age;
  }

  // Example usage:
  // var dateOfBirth = dob;
  console.log("dateOfBirth", dateOfBirth);
  var age = calculateAge(dateOfBirth);
  console.log(age); // Output: 33 (assuming current date is in 2023)

  return (
    <Box sx={{ width: "100vw", padding: "5px 20px" }}>
      <Grid container spacing={2}>
        <Grid item lg={12} xs={12} sm={12} md={12}>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                {" "}
                <Typography variant="h4" color="#2b34ac">
                  My House Help Web
                </Typography>
              </Box>
              <Box>
                <NextLink href="/login">
                  <Button variant="outlined">Login</Button>
                </NextLink>
                <NextLink href="/register">
                  <Button variant="outlined">Register</Button>
                </NextLink>
              </Box>
            </Box>
            <Box sx={{ width: "90vw", margin: 2 }}>
              <TextField
                label="search"
                placeholder="serach for a house help"
                fullWidth
                maxWidth="md"
              />
            </Box>
          </Box>
          <Divider />
        </Grid>
        <Divider />
        {houseHelps?.map((item) => (
          <Grid item md={2} lg={4} sm={3} xs={12} key={item.id}>
            <ProfileCard
              profileId={item.id}
              name={`${item?.attributes?.firstName} ${item?.attributes?.lastName}`}
              age={` ${item?.attributes?.gender}, ${age} years`}
              phone={item?.attributes?.phone}
              homeTown={item?.attributes?.homeTown}
              nationality={item?.attributes?.nationality}
              profile={item?.attributes?.profilePic?.data?.attributes?.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
