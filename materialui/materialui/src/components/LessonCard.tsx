import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const LessonCard = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        height="150"
        component="img"
        image="https://picsum.photos/200/300"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          My Title
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cumque
          adipisci error, mollitia, quis numquam a quae quisquam minus esse nisi
          praesentium. Ad beatae harum, omnis quam earum ea dolor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error">Clear</Button>
        <Button>Save</Button>
      </CardActions>
    </Card>
  );
};
