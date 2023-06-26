import "./common-styles/App.scss";
import { Routes, Route, Link } from "react-router-dom";

import { MAIN_APP_URLS } from "./Constants/URLConstants/MainAppUrls";
import AdminDashboardRouter from "./components/Dashboard/AdminDashboard/AdminDashboardRouter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { i18n } = useTranslation();
 

  return (
    <div dir={i18n.dir()} className="mainContainer">
      
      {/* <div>
        <Link to={MAIN_APP_URLS.ADMIN_DASHBOARD}>Admin Dashboard</Link>
      </div> */}
      <Routes>
        <Route path={MAIN_APP_URLS.ADMIN_DASHBOARD + "/*"} element={<AdminDashboardRouter />} />
      </Routes>
    </div>
  );
}

export default App;
