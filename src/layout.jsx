import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box bgcolor="#dfe6e9">
        <Container disableGutters>
          <img src="./root/Fastenal-Logo.svg" width={300} height={50} />
        </Container>
      </Box>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
