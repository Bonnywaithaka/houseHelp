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

const availability = [
  {
    id: 1,
    name: "Ivy Wambui",
    gender: "female",
    age: 20,
    Nationality: "Kenyan",
    idNumber: 33223322,
    homeTown: "Nakuru",
    Phone: +254700123123,
    profile: "/assets/bthairu.png",
  },
  {
    id: 2,
    name: "Ivy Wambui",
    gender: "female",
    age: 20,
    Nationality: "Ethiopian",
    idNumber: 33223322,
    homeTown: "Addis Ababa",
    Phone: +254700123123,
    profile: "/assets/bthairu.jpg",
  },
  {
    id: 3,
    name: "Ivy Wambui",
    gender: "female",
    age: 20,
    Nationality: "Tanzanian",
    idNumber: 33223322,
    homeTown: "Arusha",
    Phone: +254700123123,
    profile: "/assets/cat.jpg",
  },
  {
    id: 4,
    name: "Ivy Wambui",
    gender: "female",
    age: 20,
    Nationality: "Ugandan",
    idNumber: 33223322,
    homeTown: "Kampala",
    Phone: +254700123123,
    profile: "/assets/me.jpg",
  },
];

function HomePage() {
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
        {availability.map((item) => (
          <Grid item md={2} lg={4} sm={3} xs={12} key={item.id}>
            <ProfileCard
              name={item.name}
              age={` ${item.gender}, ${item.age} years`}
              phone={item.Phone}
              homeTown={item.homeTown}
              nationality={item.Nationality}
              profile={item.profile}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
