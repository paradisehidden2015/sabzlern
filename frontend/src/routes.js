import Index from "./pages/Index/Index";
import CourseInfo from "./pages/CourseInfo/CourseInfo";
import Category from "./pages/Category/Category";
import ArticleInfo from "./pages/ArticleInfo/ArticleInfo";
import Courses from "./pages/Courses/Courses";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/Course-info/:CourseName", element: <CourseInfo /> },
  { path: "/Category-info/:CategoryName", element: <Category /> },
  { path: "/Article-info/:ArticleName", element: <ArticleInfo /> },
  { path: "/Courses", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routes;
