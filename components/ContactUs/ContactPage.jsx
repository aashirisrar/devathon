import {
  MainBox,
  HeadingTypography,
  ContentContainer,
  ContentTypography1,
  ContentTypography2,
  ContentTypography3,
  IconContainer,
  FullWidthBox,
  LocationBox,
  EmailBox,
  TypographyLocationAndEmailHeading,
  ContentTypographyLocation,
  ContentTypographyEmail,
  FormContainer,
  FormContainer1,
  FormField,
  SubmitButton,
  FormAlignmentContainer,
  ErrorMessage,
} from "./ContactPageStyle";
import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import Navbar from "../NavBar/nav";
import Footer from "../Footer/footer";

import Nav from "../NavBar/nav";


const ContactPage = () => {
  const defaultValuesOfForm = {
    name: "",
    email: "",
    message: "",
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xl"));

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const templateParams = {
      user_name: values.name,
      to_email: values.email,
      user_message: values.message,
      reply_to: values.email,
      from_email: "careers@analyzinn.com",
    };
    console.log("Template Params:", templateParams);

    emailjs
      .send(
        "service_hkqi1af",
        "template_h1fo326",
        templateParams,
        "ruxMFLz9n_CUClXhn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSnackbar({
            open: true,
            message: "Email sent successfully!",
            severity: "success",
          });
          resetForm();
        },
        (error) => {
          console.error("FAILED...", error);
          setSnackbar({
            open: true,
            message:
              error.text || "Failed to send email. Please try again later.",
            severity: "error",
          });
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Please write your message"),
  });

  return (
    <>
      <Navbar />
      <MainBox>
        <HeadingTypography
          variant="h3"
          component="h1"
          sx={{ paddingLeft: 0 }} // Override any padding if necessary
        >
          Contact
        </HeadingTypography>
        <ContentContainer>
          <ContentTypography1>
            Feel free to contact us for any questions or request a Free
            Consultation
          </ContentTypography1>
          <ContentTypography2>
            We partner with our clients, take full ownership of their business
            needs and devise tailored solutions for their unique requirements.
            Our solutions are result-oriented, technology driven, with
            end-to-end implementations Including Digital Marketing, BI
            frameworks, and strategic consultancy.
          </ContentTypography2>
          <ContentTypography3>CONNECT WITH US</ContentTypography3>
          <IconContainer>
            <IconButton
              href="https://www.facebook.com/analyzinn"
              aria-label="Facebook"
              sx={{ color: "black" }}
            >
              <FacebookIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "2.2rem",
                    xl: "3.5rem",
                  },
                }}
              />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/company/analyzinn/"
              aria-label="LinkedIn"
              sx={{
                color: "black",
              }}
            >
              <LinkedInIcon
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "2.2rem",
                    xl: "3.5rem",
                  },
                }}
              />
            </IconButton>
          </IconContainer>
        </ContentContainer>

        <FormContainer>
          <FormAlignmentContainer>
            <FormContainer1>
              <Formik
                initialValues={defaultValuesOfForm}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field
                      name="name"
                      as={FormField}
                      label={
                        <span>
                          Name <span style={{ color: "red" }}>*</span>
                        </span>
                      }
                      variant="outlined"
                      fullWidth
                    />
                    <FormikErrorMessage name="name" component={ErrorMessage} />

                    <Field
                      name="email"
                      as={FormField}
                      label={
                        <span>
                          Email <span style={{ color: "red" }}>*</span>
                        </span>
                      }
                      variant="outlined"
                      fullWidth
                    />
                    <FormikErrorMessage name="email" component={ErrorMessage} />

                    <Field
                      name="message"
                      as={FormField}
                      label="Comment or Message"
                      variant="outlined"
                      multiline
                      rows={isSmallScreen ? 4 : 8}
                      fullWidth
                    />
                    <FormikErrorMessage
                      name="message"
                      component={ErrorMessage}
                    />

                    <SubmitButton type="submit" disabled={isSubmitting}>
                      SUBMIT
                    </SubmitButton>
                  </Form>
                )}
              </Formik>
            </FormContainer1>
          </FormAlignmentContainer>
        </FormContainer>
      </MainBox>
      <FullWidthBox>
        <LocationBox>
          <LocationOnIcon
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "2.1rem",
                md: "2.1rem",
                lg: "1.6rem",
                xl: "3.3rem",
              },
              color: "blue",
              marginRight: {
                xs: "0.5rem",
                sm: "0.8rem",
                md: "0.8rem",
                lg: "0.5rem",
                xl: "1.5rem",
              },
            }}
          />
          <Box>
            <TypographyLocationAndEmailHeading>
              HEAD OFFICE
            </TypographyLocationAndEmailHeading>
            <ContentTypographyLocation>
              13th Street, Lubbock, Texas, United States
            </ContentTypographyLocation>
          </Box>
        </LocationBox>
        <EmailBox>
          <EmailIcon
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "2.1rem",
                md: "2.1rem",
                lg: "1.6rem",
                xl: "3.3rem",
              },
              color: "blue",
              marginRight: {
                xs: "0.5rem",
                sm: "0.8rem",
                md: "0.8rem",
                lg: "0.5rem",
                xl: "1.5rem",
              },
            }}
          />
          <Box>
            <TypographyLocationAndEmailHeading>
              EMAIL
            </TypographyLocationAndEmailHeading>
            <ContentTypographyEmail>admin@analyzinn.com</ContentTypographyEmail>
          </Box>
        </EmailBox>
      </FullWidthBox>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
};

export default ContactPage;
