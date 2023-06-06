import React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";

const StyledMain = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  padding: "10px 50px",
  margin: 0,
  backgroundImage: `url("/assets/profilebackground.jpg")`,
  backgroundPosition: `right bottom`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  borderRadius: 5,
  [theme.breakpoints.down("md")]: {
    padding: 5,
  },
}));
function UserAccount() {
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
              <Box
                sx={{
                  minHeight: "70%",
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
                <Divider component="div" role="presentation">
                  <Typography variant="h5" color="#fff">
                    Profile
                  </Typography>
                </Divider>
              </Box>
              <Box sx={{ overflow: "auto", height: "60%", padding: 2 }}>
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
                    <Divider component="div" role="presentation">
                      <Typography variant="h5" color="#fff">
                        Experience
                      </Typography>
                    </Divider>
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
                  <CardContent>
                    <Divider component="div" role="presentation">
                      <Typography variant="h5" color="#fff">
                        Reports
                      </Typography>
                    </Divider>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <Box>
                    <Typography variant="h6" color="#fff">
                      Positive
                    </Typography>
                    <Button variant="contained" size="small" color="primary">
                      20
                    </Button>
                  </Box>
                  <Box>
                    <Typography variant="h6" color="#fff">
                      Negative
                    </Typography>
                    <Button variant="contained" size="small" color="secondary">
                      0
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </StyledMain>
  );
}

export default UserAccount;
