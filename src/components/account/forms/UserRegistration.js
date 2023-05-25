import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

const StyledMain = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  padding: 10,
}));
const StyledForm = styled(Box)(() => ({
  display: "flex",
  padding: "20px 100px",
  border: "solid 1px #2cb34a",
  borderRadius: 10,
  margin: "20px 30px",
}));

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
      <Box>
        <Typography variant="h4">Register Account</Typography>
      </Box>
      <StyledForm>
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
                  <Button variant="contained">Register</Button>
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
