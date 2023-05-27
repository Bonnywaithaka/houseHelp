import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

const StyledMain = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  padding: 10,
}));
const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px 100px",
  border: "solid 1px #2cb34a",
  borderRadius: 10,
  margin: "20px 30px",
  boxShadow:
    "4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));
const StyledHeaderText = styled(Typography)(({theme})=>({
  [theme.breakpoints.down("down")]:{
    
  }
}))

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your first name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  nationality: Yup.string().required("Please select your nationality"),
  phone: Yup.string().required("Please enter your phone number"),
  age: Yup.string().required("Please enter your age"),
});
const Nationalities = [
  {
    id: 1,
    name: "Kenyan",
  },
  {
    id: 2,
    name: "Ugandan",
  },
  {
    id: 3,
    name: "Tanzanian",
  },
  {
    id: 4,
    name: "Ethiopian",
  },
];

function UserRegistration() {
  return (
    <StyledMain>
      <StyledForm>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h4" color="#2b34ac">
            Register Account
          </Typography>
        </Box>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            nationality: "",
            phone: "",
            age: "",
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
              <Grid container spacing={2}>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    fullWidth
                    helperText={errors.firstName || null}
                    type="text"
                    autoFocus
                    label="First Name"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.firstName || ""}
                    error={!!errors.firstName && touched.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    fullWidth
                    helperText={errors.lastName || null}
                    type="text"
                    autoFocus
                    label="Last Name"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.lastName || ""}
                    error={!!errors.lastName && touched.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
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
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="nationality"
                    name="nationality"
                    fullWidth
                    helperText={errors.nationality || null}
                    select
                    autoFocus
                    label="Nationality"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.nationality || ""}
                    error={!!errors.nationality && touched.nationality}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {Nationalities.map((Nationality) => (
                      <MenuItem key={Nationality.id} value={Nationality.id}>
                        {Nationality.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="phone"
                    name="phone"
                    fullWidth
                    helperText={errors.phone || null}
                    type="mobile"
                    autoFocus
                    label="Phone"
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.phone || ""}
                    error={!!errors.phone && touched.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="age"
                    name="age"
                    fullWidth
                    helperText={errors.age || null}
                    type="date"
                    autoFocus
                    label="D.O.B"
                    placeholder=""
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.age || ""}
                    error={!!errors.age && touched.age}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  <NextLink href="/login">
                    <Button variant="contained" fullWidth>
                      Submit
                    </Button>
                  </NextLink>
                </Grid>
              </Grid>
            </FormikForm>
          )}
        </Formik>
      </StyledForm>
    </StyledMain>
  );
}

export default UserRegistration;
