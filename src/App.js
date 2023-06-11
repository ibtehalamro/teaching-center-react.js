import "./common-styles/App.scss";
import { Routes, Route, Link } from "react-router-dom";

import { MAIN_APP_URLS } from "./Constants/URLConstants/MainAppUrls";
import AdminDashboardRouter from "./components/Dashboard/AdminDashboard/AdminDashboardRouter";

function App() {
  return (
    <div className="mainContainer">
    <div>
      <Link to={MAIN_APP_URLS.ADMIN_DASHBOARD}>Admin Dashboard</Link></div>
    <Routes>
      <Route path={MAIN_APP_URLS.ADMIN_DASHBOARD + "/*"} element={<AdminDashboardRouter />} />
    </Routes>
  </div>
  );
}

export default App;
