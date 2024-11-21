import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const LessonBreadCrumb = () => {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} maxItems={2}>
      <Link underline="hover" href="/">
        Home
      </Link>
      <Link>Blog</Link>
      <Link underline="none">Web Site</Link>
      <Link underline="none">Web Site 2 </Link>
      <Link underline="none">Web Site 3</Link>
    </Breadcrumbs>
  );
};
