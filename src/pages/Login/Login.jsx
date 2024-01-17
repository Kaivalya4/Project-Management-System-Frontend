import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import useUserContext from "../../elements/common/context/UserContext/UseUserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const inititalValues = { empID: "" };
  const { currentEmp, setCurrentEmp } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setCurrentEmp({
        empID: values.empID,
        role: "employee",
      });
      setSubmitting(false);
      navigate("/employee");
    }, 400);
  };

  if (currentEmp.empID === null) {
    return (
      <Box
        sx={{
          background: "linear-gradient(185deg, #0984e3 60%, white 40%);",
        }}
      >
        <Box my={20} width="100%" display="flex" justifyContent="center">
          <Formik initialValues={inititalValues} onSubmit={onSubmit}>
            {({ handleSubmit, isSubmitting, handleChange, values }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  borderRadius={4}
                  boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
                  pt={2}
                  pb={8}
                  px={8}
                  textAlign="center"
                  bgcolor="white"
                  sx={{
                    "@keyframes left-to-right": {
                      "0%": {
                        opacity: 0,
                        transform: "translatex(-200%)",
                      },
                      "100%": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                    animation: "left-to-right 3s ease",
                  }}
                >
                  <Typography
                    component="h1"
                    fontSize={36}
                    mb={1}
                    color="#0984e3"
                    fontWeight={700}
                    fontStyle="italic"
                  >
                    Login
                  </Typography>
                  <Typography component="h1" fontSize={28} mb={4}>
                    Performance Management System
                  </Typography>
                  <Typography fontSize={20}>Enter Employee Code</Typography>
                  <TextField
                    type="text"
                    placeholder="Employee ID"
                    size="small"
                    name="empID"
                    onChange={handleChange}
                    value={values.empID}
                  ></TextField>
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    );
  } else {
    return <Navigate to={`/${currentEmp.role}`} />;
  }
};

export default Login;
