import {
  Avatar,
  Box,
  Divider,
  Tab,
  Tabs,
  Typography,
  styled,
} from "@mui/material";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import React from "react";

const MainBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "90vw",
  minHeight: "80vh",
  padding: "20px 50px",
  borderRadius: "20px",
  boxShadow:
    "4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#fff",
}));
const UserData = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: 60,
}));

const StyledUserProfile = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: 10,
  border: "solid 1px #2cb34a",
  padding: "10px 10px",
}));
function UserProfile() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <MainBox>
      <UserData>
        <Box
          sx={{
            borderRadius: 100,
            backgroundColor: "red",
            padding: 10,
            marginBottom: 5,
            backgroundImage: `url('/assets/bthairu.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <StyledUserProfile>
          Info:
          <Typography>Name: Boniface Waithaka</Typography>
          <Typography>Gender: Male</Typography>
          <Typography> Nationaliy: Kenyan</Typography>
        </StyledUserProfile>
      </UserData>
      <Divider sx={{ margin: "2px" }} />
      <Box>
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Experience" {...a11yProps(0)} />
              <Tab label="Documents" {...a11yProps(1)} />
              <Tab label="Image Uploads" {...a11yProps(2)} />
              <Tab label="Education Backgound" {...a11yProps(3)} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} dir={theme.direction}>
            Experience
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Documents
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Image Uploads
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Highest Education Level
          </TabPanel>
        </Box>
      </Box>
    </MainBox>
  );
}

export default UserProfile;
