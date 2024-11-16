import { Grid2 as Grid, Box } from "@mui/material";

export const LessonGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 8 }}>8 unit cell</Grid>
        <Grid size={{ xs: 12, md: 4 }}>4 unit cell</Grid>
        <Grid size={{ xs: 12, md: 8 }}>8 unit cell</Grid>
        <Grid size={{ xs: 12, md: 4 }}>4 unit cell</Grid>
      </Grid>
      {/* <Grid container>
        <Grid size={8}>8 unit cell</Grid>
        <Grid size={4}>4 unit cell</Grid>
      </Grid> */}
    </Box>
  );
};
