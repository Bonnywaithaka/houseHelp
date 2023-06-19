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
import { useMutation } from "@apollo/client";
import { CREATE_HOUSE_HELP } from "@/src/api/mutations/CreateHouseHelp";
import { passwordRegex } from "@/src/utils/constants";

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
const StyledHeaderText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("down")]: {},
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
  gender: Yup.string().required("Please select your gender"),
  homeTown: Yup.string().required("Please enter your Home Town"),
  password: Yup.string()
    .required("New password is required")
    .min(8, "Password is too short - should be at least 8 characters minimum.")
    .matches(
      passwordRegex,
      "Please ensure the password contains at least one number, one uppercase, a special character and lowercase letter"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
const Nationalities = [
  {
    id: "Kenyan",
    name: "Kenyan",
  },
  {
    id: "Ugandan",
    name: "Ugandan",
  },
  {
    id: "Tanzanian",
    name: "Tanzanian",
  },
  {
    id: "Ethiopian",
    name: "Ethiopian",
  },
];
const gender = [
  {
    id: "Male",
    name: "Male",
  },
  {
    id: "Female",
    name: "Female",
  },
];
function UserRegistration() {
  const [createHouseHelpMutation] = useMutation(CREATE_HOUSE_HELP);
  const handleCreateHouseHelp = (value) => {
    createHouseHelpMutation({
      variables: {
        firstName: value.firstName,
        lastName: value.lastName,
        emailAddress: value.email,
        nationality: value.nationality,
        phone: value.phone,
        dob: value.age,
        gender: value.gender,
        homeTown: value.homeTown,
        password: value.password,
      },
      // success? :redirect to login page
    })
      .then((response) => {
        // loadingStatus(false);
        const {
          data: {
            createHouseHelp: { status, message },
          },
        } = response;
        responseMessage({
          open: true,
          state: status ? "success" : "error",
          title: status ? "Password Updated" : "Error",
          message,
          element: status ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                with: "100%",
                margin: "10px 20px",
              }}
            >
              <NextLink href="/">
                <Button
                  disabled={!status}
                  variant="contained"
                  color="primary"
                  size="medium"
                  sx={{
                    padding: "10px 50px",
                    margin: "10px 0px 10px 20px",
                  }}
                  onClick={() => {
                    responseMessage({
                      open: false,
                    });
                  }}
                >
                  Ok
                </Button>
              </NextLink>
            </Box>
          ) : (
            ""
          ),
        });
      })
      .catch((res) => {
        // loadingStatus(false);
        responseMessage({
          open: true,
          state: "error",
          title: "Pasword Creation Failed!",
          message: errorHandler(res || res.graphQLErrors[0].message),
        });
      });
  };
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
            gender: "",
            homeTown: "",
            password: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={(values) => {
            handleCreateHouseHelp(values);
          }}
        >
          {({
            errors,
            values,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <FormikForm onSubmit={handleSubmit}>
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
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="homeTown"
                    name="homeTown"
                    fullWidth
                    helperText={errors.homeTown || null}
                    type="text"
                    label="Home Town"
                    placeholder=""
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.homeTown || ""}
                    error={!!errors.homeTown && touched.homeTown}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="gender"
                    name="gender"
                    fullWidth
                    select
                    helperText={errors.gender || null}
                    type="text"
                    label="Gender"
                    placeholder=""
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.gender || ""}
                    error={!!errors.gender && touched.gender}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {" "}
                    {gender.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="password"
                    name="password"
                    fullWidth
                    helperText={errors.password || null}
                    type="text"
                    label="Password"
                    placeholder=""
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.password || ""}
                    error={!!errors.password && touched.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    fullWidth
                    helperText={errors.confirmPassword || null}
                    type="text"
                    label="Confirm Password"
                    placeholder=""
                    variant="outlined"
                    autoComplete="off"
                    margin="normal"
                    value={values.confirmPassword || ""}
                    error={!!errors.confirmPassword && touched.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} lg={12} md={12}>
                  {/* <NextLink href="/login"> */}
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    onClick={() => handleCreateHouseHelp()}
                  >
                    Submit
                  </Button>
                  {/* </NextLink> */}
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
