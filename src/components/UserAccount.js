import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

function UserAccount() {
  return (
    <Box
      sx={{
        width: "90vw",
        height: "90vh",
        backgroundColor: "white",
        display: "flex",
        padding: 5,
        backgroundImage: `url("/assets/profilebackground.jpg")`,
        backgroundPosition: `right bottom`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        borderRadius: 5,
        overlay: "rgba(0, 0, 0, 1)",
      }}
    >
      <Grid container spacing={0.5}>
        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
          <Box sx={{ height: "100%", margin: 2 }}>
            <Card
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100%" }}
            >
              <Box
                sx={{
                  height: "70%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  backgroundImage: `url("/assets/user.jpg")`,
                  backgroundPosition: `center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `cover`,
                }}
              >
                <Avatar
                  src="/assets/redwolf.jpg"
                  alt="user"
                  sx={{ width: 60, height: 60 }}
                />
                <Typography variant="h4">Profile</Typography>
              </Box>
              <Box>
                <Typography variant="h3" fontSize={20} color="#fff">
                  Boniface Onyango
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography color="#fff">
                  Email: bonnywaithaka@outlook.com
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Typography color="#fff">Phone: +254700 000 000</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography color="#fff">Age: 20 Years</Typography>
              </Box>
              <Divider />
              <Box>
                <Typography color="#fff">Gender: Male</Typography>
              </Box>
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
              margin: 2,
            }}
          >
            <Box
              sx={{ width: "100%", height: "50%", backgroundColor: "unset" }}
            >
              <Card
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100%" }}
              >
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="250"
                    image="/assets/redwolf.jpg"
                    alt="green iguana"
                  /> */}
                  <CardContent>
                    <Typography variant="h5" color="#fff">
                      Experience
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Box
              sx={{ width: "100%", height: "50%", padding: "10px 0px 0px 0px" }}
            >
              <Card
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", height: "100%" }}
              >
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    height="250"
                    image="/assets/redwolf.jpg"
                    alt="green iguana"
                  /> */}
                  <CardContent>
                    <Typography variant="h5" color="#fff">
                      Reports
                    </Typography>
                    <Box>
                      <Typography variant="h6" color="#fff">
                        Positive
                      </Typography>
                      <Button variant="contained" size="small">
                        0
                      </Button>
                    </Box>
                    <Box>
                      <Typography variant="h6" color="#fff">
                        Negative
                      </Typography>
                      <Button variant="contained" size="small">
                        0
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserAccount;
