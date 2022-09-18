import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { Container, Grid, Typography } from "@mui/material";
import AppBar from "./components/AppBar";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      {/* <AppBar /> */}
      <Container sx={{ marginY: 5 }}>
        <Hero />
        <Typography variant="h4">Projects</Typography>
        <Grid container spacing={5} sx={{ marginY: 2 }}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
