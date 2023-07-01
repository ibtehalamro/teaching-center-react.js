import { Link, useLocation } from "react-router-dom";
import React from "react";
import { studentUrls } from "../../../router/students/StudentUrls";
import { CourseUrls } from '../../../router/courses/CourseUrls';
import { PaymentUrls } from "../../../router/payments/PaymentUrls";
import { TeacherUrls } from './../../../router/teachers/TeacherUrls';
import { useTranslation } from "react-i18next";

export default function SideNavbar() {
  const { t } = useTranslation();
  const location = useLocation();
  function getLinkCLassName(link) {
    return ["link", location.pathname.includes (link) ? "active" : ""].join(" ");
  }
  const navBarLinks = [
    { link: studentUrls.ROUTER, name: t('navBarLinks.students') },
    { link: CourseUrls.ROUTER, name: t('navBarLinks.courses') },
    // { link: SectionUrls.ROUTER, name: t('navBarLinks.section') },
    { link: TeacherUrls.ROUTER, name: t('navBarLinks.teachers') },
    // { link: PaymentUrls.ROUTER, name: t('navBarLinks.payment') },
  ];

  return (
    <nav className="sideNavbar-container">
      <div className="sideNav__links">
        {navBarLinks.map(({ link, name }) => (
          <Link key={name} to={link} className={getLinkCLassName(link)}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
