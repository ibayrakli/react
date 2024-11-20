import { Link, Box } from "@mui/material";

export const LessonLink = () => {
  return (
    <Box>
      {/* <Link href="https://www.google.com.tr/">Go to Google</Link>
      <Link href="https://www.google.com.tr/" color="error">
        Go to Google
      </Link>
      <Link href="https://www.google.com.tr/" color="error" variant="body2">
        Go to Google
      </Link>
      <Link href="https://www.google.com.tr/" underline="none">
        Go to Google
      </Link>
      <Link href="https://www.google.com.tr/" underline="hover">
        Go to Google
      </Link>
      <Link href="https://www.google.com.tr/" underline="always">
        Go to Google
      </Link> */}
      <Link
        component="button"
        onClick={() => {
          console.log("Test");
          window.open("https://www.google.com.tr/", "_blank");
        }}
      >
        Go to Google
      </Link>
    </Box>
  );
};
