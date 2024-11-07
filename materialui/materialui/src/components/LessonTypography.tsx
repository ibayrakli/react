import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        a veniam itaque quae adipisci odio, unde fugiat facere nihil similique
        inventore eos incidunt atque suscipit sit, perspiciatis corrupti sint
        velit?
      </Typography>

      <Typography variant="body2">
        Body1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        a veniam itaque quae adipisci odio, unde fugiat facere nihil similique
        inventore eos incidunt atque suscipit sit, perspiciatis corrupti sint
        velit?
      </Typography>

      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="h3">H3</Typography>
      <Typography variant="h4">H4</Typography>
      <Typography variant="h5">H5</Typography>
      <Typography variant="h6">H6</Typography>

      <Typography variant="h1" component="h4">
        H1
      </Typography>

      <Typography variant="h1" component="h4" align="left">
        {" "}
        H1
      </Typography>

      <Typography variant="h1" component="h4" align="right">
        H1
      </Typography>

      <Typography variant="subtitle1">sub title 1</Typography>
      <Typography variant="subtitle2">sub title 2</Typography>
    </div>
  );
};
