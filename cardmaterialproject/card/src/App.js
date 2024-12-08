import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Course from "./Course";

import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}>Card Project</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            officiis molestias quis quod cumque sunt ad molestiae suscipit velit
            fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit
            itaque."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            officiis molestias quis quod cumque sunt ad molestiae suscipit velit
            fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit
            itaque."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Csharp}
              title="C#"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            officiis molestias quis quod cumque sunt ad molestiae suscipit velit
            fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit
            itaque."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Course
              image={Web}
              title="Web"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            officiis molestias quis quod cumque sunt ad molestiae suscipit velit
            fuga ea ipsa vero nam delectus tenetur praesentium, culpa sit
            itaque."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
