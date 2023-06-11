import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminDashboardLayout from "../AdminDashboard/AdminDashboardLayout";
import Loader from '../../Layout/Components/Loader';
import { studentUrls } from '../../../router/students/StudentUrls';
import { CourseUrls } from '../../../router/courses/CourseUrls';
import { SectionUrls } from '../../../router/sections/SectionUrls';
import { TeacherUrls } from '../../../router/teachers/TeacherUrls';
import { PaymentUrls } from '../../../router/payments/PaymentUrls';

export default function AdminDashboardRouter() {
    const LazyStudentComponent = React.lazy(() => import("../../../router/students/StudentRouter"));
    const LazyCourseComponent = React.lazy(() => import("../../../router/courses/CourseRouter"));
    const LazySectionComponent = React.lazy(() => import("../../../router/sections/SectionRouter"));
    const LazyTeacherComponent = React.lazy(() => import("../../../router/teachers/TeacherRouter"));
    const LazyPaymentComponent = React.lazy(() => import("../../../router/payments/PaymentRouter"));


    return (
        <>
            <AdminDashboardLayout >
                <React.Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path={studentUrls.ROUTER + "/*"} element={<LazyStudentComponent />} />
                       <Route path={CourseUrls.ROUTER + "/*"} element={<LazyCourseComponent />} />
                         <Route path={SectionUrls.ROUTER + "/*"} element={<LazySectionComponent />} />
                        <Route exact path={TeacherUrls.ROUTER + "/*"} element={<LazyTeacherComponent />} />
                        <Route exact path={PaymentUrls.ROUTER + "/*"} element={<LazyPaymentComponent />} /> 
           
                    </Routes>
                </React.Suspense>
            </AdminDashboardLayout>
        </>
    )
}
