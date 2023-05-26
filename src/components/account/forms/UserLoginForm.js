import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

const StyledTitle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

const StyledLoginBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "20px 0px",
  padding: "64px 100px",
  borderRadius: 8,
  boxShadow:
    "4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "10px 20px",
  },
}));
const RegistrationSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
});

function UserLoginForm() {
  return (
    <StyledTitle>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h4" color="primary">
            My House Help
          </Typography>
        </Box>
        <StyledLoginBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 2,
            }}
          >
            <Typography variant="h4" color="#2b34ac">
              Login
            </Typography>
            <Typography variant="body1" color="#2b34ac">
              Welcome Back!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Formik
              initialValues={{
                firstName: "",
                password: "",
              }}
              validationSchema={RegistrationSchema}
            >
              {({
                errors,
                values,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <FormikForm>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        name="email"
                        fullWidth
                        helperText={errors.email || null}
                        type="text"
                        autoFocus
                        label="Email Address"
                        variant="outlined"
                        autoComplete="off"
                        margin="normal"
                        value={values.email || ""}
                        error={!!errors.email && touched.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        name="password"
                        fullWidth
                        helperText={errors.password || null}
                        type="password"
                        autoFocus
                        label="Password"
                        placeholder="Enter password"
                        variant="outlined"
                        autoComplete="off"
                        margin="normal"
                        value={values.password || ""}
                        error={!!errors.password && touched.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <NextLink href="/">
                        <Button variant="contained" fullWidth>
                          Login
                        </Button>
                      </NextLink>
                    </Grid>
                  </Grid>
                </FormikForm>
              )}
            </Formik>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
              padding: 1,
            }}
          >
            <NextLink href="/login">forgot password?</NextLink>
          </Box>
          <NextLink href="/register">
            <Button variant="contained" fullWidth>
              Register
            </Button>
          </NextLink>
        </StyledLoginBox>
      </Box>
    </StyledTitle>
  );
}

export default UserLoginForm;
