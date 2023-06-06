import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import  NextLink  from "next/link";

const StyledProfileCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "10px 10px",
  padding: "10px 0px",
  borderRadius: 8,
  boxShadow:
    "4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#fff",
}));
const StyledTopCard = styled(Box)(() => ({
  display: "flex",
  marginTop: 2,
  backgroundColor: "#fff",
  maxWidth: "100vw",
  justifyContent: "space-evenly",
  alignItems: "center",
}));
const StyledCardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: 20,
  backgroundColor: "#fff",
  maxWidth: "100vw",
}));
const StyledCardActionsArea = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: 20,
  backgroundColor: "#fff",
  maxWidth: "100vw",
}));
function ProfileCard({ name, age, phone, homeTown, nationality, profile }) {
  return (
    <StyledProfileCard sx={{}}>
      <Box>
        <StyledTopCard>
          <Avatar src={profile} alt={name} />
          <Typography variant="body1"> {name}</Typography>
          <Typography variant="body1">{phone}</Typography>
        </StyledTopCard>
        <Divider />
        <StyledCardContent>
          <Typography>{age}</Typography>
          <Typography>{homeTown}</Typography>
          <Typography>Nationality: {nationality}</Typography>
        </StyledCardContent>
        <StyledCardActionsArea>
          <NextLink href="/user/user-account">
            <Button size="small" variant="contained">
              View Profile
            </Button>
          </NextLink>

          <Button size="small" variant="outlined">
            {" "}
            Message
          </Button>
          <Button variant="contained">Call</Button>
        </StyledCardActionsArea>
      </Box>
    </StyledProfileCard>
  );
}

export default ProfileCard;
