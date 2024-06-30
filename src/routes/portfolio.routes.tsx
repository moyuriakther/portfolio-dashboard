import AddBlog from "../pages/portfolio/AddBlog";
import AddProject from "../pages/portfolio/AddProject";
import AddSkill from "../pages/portfolio/AddSkill";
import AllBlogs from "../pages/portfolio/AllBlogs";
import AllProject from "../pages/portfolio/AllProject"
import AllSkills from "../pages/portfolio/AllSkills";
import Experience from "../pages/portfolio/Experience";


export const portfolioPaths = [
  {
    name: "Projects",
    path: "projects",
    element: <AllProject/>,
  },
  {
    name: "Blogs",
    path: "blogs",
    element: <AllBlogs />,
  },
  {
    name: "Skills",
    path: "skills",
    element: <AllSkills />
  },
  {
    name: "Experience",
    path: "experience",
    element: <Experience />
  },
  {
    name: "Add Project",
    path: "add-project",
    element: <AddProject />
  },
  {
    name: "Add Blog",
    path: "add-blog",
    element: <AddBlog />
  },
  {
    name: "Add Skill",
    path: "add-skill",
    element: <AddSkill />
  },
//   {
//     name: "",
//     path: ":bikeId/edit-product",
//     element: <UpdateProduct />,
//   },
//   {
//     name: "Sales History",
//     path: "sales",
//     element: <SalesHistory />,
//   },
//   {
//     name: "Users",
//     path: "users",
//     element: <Users />,
//   },
];
