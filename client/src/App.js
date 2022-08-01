import { Container } from "@mui/system";
import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

// Remove this once the About Section is moved into its separate compartment
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import "./stylesheet/header.css";
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
          <Grid 
            container
            columns={16}
          >
            <Grid item xs={8}>
              <Box>
              {/* Centers the content within the left side of the about page */}
                <Grid 
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: '90vh' }}
                >
                  <Grid item>
                    <h1>Hi, I'm Angelo.</h1>
                    <h1>A Web Developer</h1>
                    <h1>Based in the Philippines</h1>
                    <Grid container spacing={3}>
                      <Grid item>
                        <p>Frontend</p>
                      </Grid>
                      <Grid item>
                        <p>Backend</p>
                      </Grid>
                      <Grid item>
                        <p>Development</p>
                      </Grid>
                    </Grid>
                      <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                        <Button>Got a project?</Button>
                      </ButtonGroup>
                      <ButtonGroup size="large" variant="outlined" aria-label="outlined button group">
                        <Button>Let's Talk</Button>
                      </ButtonGroup>
                  </Grid>
                </Grid>
              </Box>
              
            </Grid>
            <Grid item xs={8}>
              <Box>
              {/* Centers the content within the right side of the about page */}
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: '90vh' }}
                >
                  <Grid item>
                    <h1>Hi</h1>
                  </Grid>
                </Grid>
              </Box>
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
