import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Radio,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_HOUSE_HELPS } from "../api/queries/GetHouseHelps";

const StyledMain = styled(Box)(({ theme }) => ({
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  padding: "10px 50px",
  margin: 0,
  backgroundImage: `url("/assets/profilebackground.jpg")`,
  backgroundPosition: `right bottom`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  borderRadius: 5,
  overflow: "visible",
  [theme.breakpoints.down("md")]: {
    padding: 5,
  },
}));
const StyledCardMedia = styled(CardMedia)(() => ({
  backgroundImage: `url("/assets/profilebackground.jpg")`,
  backgroundPosition: `right bottom`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
}));
const StyledEducationBox = styled(Box)(() => ({
  padding: 5,
  border: "1px solid #2cb34a",
  backgroundColor: "#fff",
}));
function UserAccount({ singleUser }) {
  console.log("single user", singleUser);
  const { data, error, loading } = useQuery(GET_HOUSE_HELPS, {
    variables: {
      filters: {
        id: {
          eq: singleUser,
        },
      },
    },
  });
  console.log("single user data", data?.houseHelps?.data);
  const houseHelp = data?.houseHelps?.data[0];
  const imageUrl = houseHelp?.attributes?.profilePic?.data?.attributes?.url;
  const backgroundImageUrl =
    houseHelp?.attributes?.backgroundImage?.data?.attributes?.url;
  const hostLink = "http://localhost:1337";

  return (
    <StyledMain>
      <Grid container spacing={2}>
        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
          <Box sx={{ height: "100%" }}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                height: "100%",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    src={`${hostLink}${imageUrl}`}
                    alt={
                      houseHelp?.attributes?.profilePic?.data?.attributes
                        ?.alternativeText
                    }
                    sx={{ width: 60, height: 60 }}
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={
                  <>
                    <Box>
                      <Typography variant="h3" fontSize={20} color="#fff">
                        {` ${houseHelp?.attributes?.firstName}
                        ${houseHelp?.attributes?.lastName}`}
                      </Typography>
                    </Box>
                  </>
                }
                subheader={
                  <Box>
                    <Typography color="#fff">
                      {houseHelp?.attributes?.emailAddress}
                    </Typography>
                  </Box>
                }
              />
              <StyledCardMedia
                component="img"
                height="350"
                image={`${hostLink}${backgroundImageUrl}`}
                alt="Add a photo"
              />
              <CardContent>
                <Box sx={{ overflow: "auto", height: "60%", padding: 2 }}>
                  <Box>
                    <Typography color="#fff">
                      Phone: {houseHelp?.attributes?.phone}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography color="#fff">Age: 20 Years</Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography color="#fff">
                      Gender: {houseHelp?.attributes?.gender}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography color="#fff">
                      Nationality: {houseHelp?.attributes?.nationality}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
          <Box
            sx={{
              height: "100%",
              backgroundColor: "unset",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid item md={12} xs={12}>
              <Box
                sx={{ width: "100%", height: "100%", backgroundColor: "unset" }}
              >
                <Card
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100%" }}
                >
                  <CardContent>
                    <Divider component="div" role="presentation">
                      <Typography variant="h5" color="#fff">
                        Experience
                      </Typography>
                    </Divider>
                    <Box>
                      <Typography color="#fff">
                        Highest Education Level
                      </Typography>
                      <StyledEducationBox>University</StyledEducationBox>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item md={12} xs={12}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "10px 0px 0px 0px",
                }}
              >
                <Card
                  sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100%" }}
                >
                  <CardContent>
                    <Divider component="div" role="presentation">
                      <Typography variant="h5" color="#fff">
                        Reports
                      </Typography>
                    </Divider>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" color="#fff">
                        Positive
                      </Typography>
                      <NextLink href={`/report/${singleUser}`}>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                        >
                          20
                        </Button>
                      </NextLink>
                    </Box>
                    <Box>
                      <Typography variant="h6" color="#fff">
                        Negative
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        0
                      </Button>
                    </Box>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </StyledMain>
  );
}

export default UserAccount;
