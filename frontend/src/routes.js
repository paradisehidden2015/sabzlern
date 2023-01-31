import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
const routes = [
  { path: "/", element: <Index /> },
  { path: "/Course-info/:CourseName", element: <CourseInfo /> },
  { path: "/Category-info/:CategoryName", element: <Category /> },
  { path: "/Article-info/:ArticleName", element: <ArticleInfo /> },
];
export default routes;
