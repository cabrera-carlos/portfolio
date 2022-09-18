import logo from "../logo.svg";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  Rating,
  Chip,
} from "@mui/material";
import { AccessTime, Build, Code, OpenInNew } from "@mui/icons-material";

function ProjectCard() {
  return (
    <Grid item xs={4}>
      <Paper elevation={4}>
        <img src={logo} alt="react" className="img" />
        <Box paddingX={1}>
          <Typography variant="subtitle">Project Title</Typography>
          <Typography variant="body2">Project description here</Typography>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant="body2" marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Rating defaultValue={4.5} precision={0.5} readOnly />
            <Typography variant="subtitle2" marginLeft={0.5}>
              4.5
            </Typography>
            <Typography variant="caption" component="p" marginLeft={0.5}>
              (245 reviews)
            </Typography>
          </Box> */}
          <Box
            padding={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop={2}
          >
            <Chip label="React" />
            <Chip label="JavaScript" />
          </Box>
        </Box>
        <Box
          padding={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
        >
          <Stack direction="row" spacing={5}>
            <Button variant="outlined" startIcon={<Code />} size="small">
              Details
            </Button>
            <Button
              variant="outlined"
              marginLeft={0.5}
              startIcon={<OpenInNew />}
            >
              Demo
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ProjectCard;
