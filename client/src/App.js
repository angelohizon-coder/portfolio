import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

// Remove this once the About Section is moved into its separate compartment
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// About Section 

function App() {
  return (
    <div>
    {/* Header */}
      <header>
        <ResponsiveAppBar />
      </header>
      {/* About */}
      <section>
      <Container maxWidth={false}>
        <Box>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8} md={10}>
              <h1>Hi, I'm Angelo.</h1>
              <h1>A Web Developer</h1>
              <h1>Based in the Philippines</h1>
            </Grid>
            <Grid item xs={8} md={6}>
              <h1>Hi</h1>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </section>
      {/* Accomplishments/Works */}
      <section>Accomplishments/Works</section>
      {/* Contact */}
      <section>Contact</section>
      <section>
        <a href="https://www.flaticon.com/free-icons/eyeglass" title="eyeglass icons">Eyeglass icons created by Freepik - Flaticon</a>
      </section>
      {/* Footer */}
      <footer></footer>
    </div>
  );
}

export default App;
