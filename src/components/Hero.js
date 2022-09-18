import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Stack,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 5,
        pb: 8,
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hello, I am Carlos!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              I am an experienced developer based in NY. Here are some of the
              projects I have been working on.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <IconButton aria-label="twitter">
                <Twitter />
              </IconButton>
              <IconButton aria-label="github">
                <GitHub />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Avatar
              src="Profile_low.jpg"
              alt="Carlos Cabrera"
              sx={{ width: 256, height: 256 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
