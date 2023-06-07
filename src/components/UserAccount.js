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
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";

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
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" src="/assets/redwolf.jpg">
                    R
                  </Avatar>
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
                        Boniface Onyango
                      </Typography>
                    </Box>
                  </>
                }
                subheader={
                  <Box>
                    <Typography color="#fff">
                      Email: bonnywaithaka@outlook.com
                    </Typography>
                  </Box>
                }
              />
              <CardMedia
                component="img"
                height="350"
                image="/assets/user.jpg"
                alt="Paella dish"
              />
              {/* <Box
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
              </Box> */}
              <CardContent>
                <Box sx={{ overflow: "auto", height: "60%", padding: 2 }}>
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
                  <Divider />
                  <Box>
                    <Typography color="#fff">Nationality: Ethiopian</Typography>
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
                  <CardActionArea>
                    <CardContent>
                      <Divider component="div" role="presentation">
                        <Typography variant="h5" color="#fff">
                          Experience
                        </Typography>
                      </Divider>
                      <Box>
                        <Typography>Test card</Typography>
                      </Box>
                     
                    </CardContent>
                  </CardActionArea>
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
                      <Button variant="contained" size="small" color="primary">
                        20
                      </Button>
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
