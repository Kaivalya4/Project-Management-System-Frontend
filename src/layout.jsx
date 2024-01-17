import { Box, Container, Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box bgcolor="#0984e3">
        <Container disableGutters>
          <Typography color="white" fontStyle="italic" fontSize={48}>
            Fast.com
          </Typography>
        </Container>
      </Box>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
