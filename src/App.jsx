import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import TeacherSignUp from "./pages/TeacherSignUp";
import AllStudent from "./pages/AllStudent";
import AllTeachers from "./pages/AllTeachers";
import Notice from "./pages/Notice";
import ClassRoomInfo from "./pages/ClassRoomInfo";
import UpdateTeacher from "./pages/UpdateTeacher";
import UpdateStudent from "./pages/UpdateStudent";
import UpdateRoll from "./pages/UpdateRoll";
import SuperAdmin from "./pages/SuperAdmin";
import SignIn from "./pages/SignIn";
import ExamRoom from "./pages/ExamRoom";
import StudentSignUp from "./pages/StudentSignUp";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import AllAdminProfile from "./pages/AllAdminProfile";
import UpdateAdmin from "./pages/UpdateAdmin";
import HomePage from "./pages/HomePage";
import PersonalAdmin from "./pages/PersonalAdmin";
import Chart from "./pages/Chart";
import Invoice from "./pages/Invoice";
import BuyCourses from "./pages/BuyCourses";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}>
        <Route path="/S-signUp" element={< StudentSignUp/>}></Route>
        <Route path="/" element={< HomePage/>}></Route>
        <Route path="/T-signUp" element={<TeacherSignUp />}></Route>
        <Route path="/all-student" element={<AllStudent />}></Route>
        <Route path="/all-teacher" element={<AllTeachers />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/class" element={<ClassRoomInfo />}></Route>
        <Route path="/exam-room" element={<ExamRoom />}></Route>
        <Route path="/update-teacher" element={<UpdateTeacher />}></Route>
        <Route path="/update-student" element={<UpdateStudent />}></Route>
        <Route path="/update-roll" element={<UpdateRoll />}></Route>
        <Route path="/super-xyz" element={<SuperAdmin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={< Chart/>}></Route>
        <Route path="/adminProfile/:id" element={<AllAdminProfile />}></Route>
        <Route path="/updateAdminProfile/:id" element={<UpdateAdmin />}></Route>
        <Route path="/PersonalAdminProfile" element={<PersonalAdmin />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
        <Route path="/byCourse" element={<BuyCourses />}></Route>
      </Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/forgot" element={<ForgotPassword />}></Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
