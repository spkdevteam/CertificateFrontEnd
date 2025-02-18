import './App.css'

import { lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import AuthLayout from './layout/AuthLayout';

const Layout = lazy(() => import("./layout/Layout"));
import useDarkmode from './Hooks/useDarkMode';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import OtpVerify from './pages/OtpVerify/OtpVerify';
import ResetPassword from './pages/ResetPassword/ResetPassword';
// import TableComponent from './components/TableComponent/TableComponent';
// import ModalPatients from './components/modal/ModalPatients';
// import ModalBranch from './components/modal/ModalBranch';
// import ModalChairs from './components/modal/ModalChairs';
// import ModalEmployee from './components/modal/ModalEmployee';
// import ModalDepartment from './components/modal/ModalDepartment';
// import ModalAllServices from './components/modal/ModalAllServices';
// import ModalAllProcedure from './components/modal/ModalAllProcedure';
// import ModalAppointments from './components/modal/ModalAppointments';
// import ProfileOverView from './components/ProfileOverView/ProfileOverView';
// import NestedTable from './components/ProfileOverView/NestedTable';
// import PatientActivity from './components/PatientActivity/PatientActivity';
// import ActivityProfile from './components/PatientActivity/ActivityProfile';
// import PatientNavMenu from './components/PatientNavMenu/PatientNavMenu';
// import MedicalHistory from './components/MedicalHistory/MedicalHistory';
// import Taggify from './components/Taggify/Taggify';
// import MyTaggify from './components/Taggify/MyTaggify';
// import ServiceAndProcedure from './components/Card/ServiceAndProcedure';
// import Notes from './components/Card/Notes';
// import MedicalHistoryCard from './components/Card/MedicalHistoryCard';
// import OtherAttachments from './components/Card/OtherAttachments';
// import Investigation from './components/Card/Investigation';
import Dashboard from './components/NavMenu/Dashbord/Dashboard';
import PublicRoutes from './pages/PublicRoute/PublicRoutes';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
// import RolesAndPerMission from './components/NavMenu/RolesAndPerMission/RolesAndPerMission';
// import RolesAndPerMissionAssignPage from './components/NavMenu/RolesAndPerMissionAssignPage/RolesAndPerMissionAssignPage';
// import Employee from './pages/employee/Employee';
// import Branch from './pages/Branch/Branch';
// import Chair from './pages/chair/Chair';
// import Department from './pages/Department/Department';
// import Services from './pages/AllServices/Services';
// import Procedure from './pages/Procedure/Procedure';
// import DailyAppointMent from './pages/Calender/DailyAppointMent';
// import MonthlyCalender from './pages/Calender/MonthlyCalender';
// import Patients from './pages/Patients/Patients';
// import Appointment from './pages/Appointment/Appointment';
// import Profile from './pages/profile/Profile';
// import ViewProfile from './pages/viewProfile/ViewProfile';
//import Priscription from './components/Card/Priscription';

// import StartTretment from './pages/PatientDetail/StartTreatment/StartTreatment';

// import AppointmentCalender from './pages/Calender/Calender';
// import { Toaster } from 'react-hot-toast';
// import DentalChart from './pages/DentalChart/DentalChart';
// import MyModal from './components/modal/MyModal';
// import EditPriscription from './components/editPriscreption/EditPriscription';

// import CreatePatient from './pages/Patients/CreatePatient';
// import InvoicePage from './components/Invoice/Invoice';
// import InvoiceList from './pages/invoice/InvoiceList';
// import EditInvoice from './components/Invoice/EditInvoice';
// import ViewInvoice from './components/Invoice/ViewInvoice';
// import PrintInvoice from './components/Invoice/PrintInvoice';
// import SPKCMPPayment from './components/accounts/SPKCMPPayment';
// import SPKPaymentReceipt from './components/accounts/SPKPaymentReceipt';
// import ColourThemeSelector from './components/theme/ColourThemeSelector';

import StaffLogin from './pages/Staff-Login/StaffLogin';
import StaffForgotPassword from './pages/Staff-ForgotPassword/StaffForgotPassword';
import StaffResetPassword from './pages/Staff-ResetPassword/StaffResetPassword';
import StaffOtpVerify from './pages/Staff-OtpVerify/StaffOtpVerify';
// import PatientAppointment from './pages/PatientDetail/PatientInvoice/patientAppointment/PatientAppointment';
import DashboardTwo from './pages/DashboardTwo/DashboardTwo';
import { ToastContainer } from 'react-toastify';
import ForgotPasswordForm from './pages/forgotPassword/ForgotPasswordForm';
// import ChairDashBoard from './pages/ChairDashBoard/ChairDashBoard';
// import Priscription from './components/priscription/Priscription';

// import Invoice from './components/Card/Invoice';
// const PatientDetailLayout = lazy(() => import("./pages/PatientDetail/PatientDetailLayout"));
// const PatientOverview = lazy(() => import("./pages/PatientDetail/PatientOverview/PatientOverview"));
// const PatientMedicalHistory = lazy(() => import("./pages/PatientDetail/PatientMedicalHistory/PatientMedicalHistory"));
// const PatientPrescription = lazy(() => import("./pages/PatientDetail/PatientPrescription/PatientPrescription"));
// const PatientInvoice = lazy(() => import("./pages/PatientDetail/PatientInvoice/PatientInvoice"));
// const CreateCaseSheet = lazy(() => import("./pages/PatientDetail/CreateCaseSheet/CreateCaseSheet"));
// const PatientCases = lazy(() => import("./pages/PatientDetail/PatientCases/PatientCases"));
// const ViewCaseSheet = lazy(() => import("./pages/PatientDetail/ViewCaseSheet/ViewCaseSheet"));
// const StartTretment = lazy(() => import("./pages/PatientDetail/StartTreatment/StartTreatment"));
// const Patients = lazy(() => import("./pages/Patients/Patients"));
// const AllCases = lazy(() => import("./pages/AllCases/AllCases"));
// const EditCaseSheet = lazy(() => import("./pages/PatientDetail/CreateCaseSheet/editCaseSheet"))
// const UpdateCaseSheet = lazy(() => import("./pages/PatientDetail/CreateCaseSheet/updateCaseSheet"));
// const ViewCaseDetail = lazy(() => import("./pages/PatientDetail/caseDetail/ViewCaseDetail"));
// const PreviewCaseDetails = lazy(() => import("./pages/PatientDetail/caseDetail/PrintCaseDetail"))
// const PreviewPrescription = lazy(() => import("./components/priscription/printPriscription"))
// const ViewCaseSheet2 = lazy(() => import("./pages/PatientDetail/ViewCaseSheet/ViewCaseSheet2"))

// import PatientDetailLayout from './pages/PatientDetail/PatientDetailLayout';
// import PatientOverview from './pages/PatientDetail/PatientOverview/PatientOverview';
import Modal from "react-modal";

Modal.setAppElement("#root");  // Add this


function App() {
  // const [isDark] = useDarkmode()
  const isDark = false
  // const vieModal = useSelector((state) => state?.modalSlice?.showModal) || false
   


  return (
    <>
      <main className={`${isDark ? "bg-darkBody text-white" : "bg-lightBody"}  `} style={{ width: "100vw", height: "100vh", overflowX: "hidden", overflowY: "hidden" }}>
        <ToastContainer position='top-center' />
      {/* {vieModal && <MyModal DisplayPage='newAppointment' />} */}
        <Routes>
            
          <Route path="/" element={<AuthLayout />}>
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<StaffLogin />} />
              <Route path="/signIn" element={<Login />} />
              <Route path="/staff/login" element={<StaffLogin />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/staff/forgotpassword" element={<StaffForgotPassword />} />
              <Route path="/signinbyotp" element={<OtpVerify />} />
              <Route path="/staff/signinbyotp" element={<StaffOtpVerify />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/staff/resetpassword" element={<StaffResetPassword />} />
              <Route path='/forgotpassword' element={<ForgotPasswordForm/>}/>
            </Route>

            <Route element={<PrivateRoute />}>
            {/* <Route path="/previewCaseDetails" element={<PreviewCaseDetails />} />
            <Route path="/previewPrescription" element={<PreviewPrescription />} />
            <Route path="/patientPrescription" element={<Priscription />} />
            <Route path="/patientAppointment" element={<PatientAppointment />} /> */}

              <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<DashboardTwo />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                
                {/* <Route path="/profile" element={<Profile />} />
                <Route path="/ViewProfile" element={<ViewProfile />} />
                <Route path="/rolesAndPermission" element={<RolesAndPerMission />} />
                <Route path="/rolesAndPerMissionAssignPage" element={<RolesAndPerMissionAssignPage />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/branch" element={<Branch />} />
                <Route path="/appointmentCalander" element={<AppointmentCalender />} />
                <Route path="/chair" element={<Chair />} />
                <Route path="/caseSheet" element={<AllCases />} />
                <Route path="/department" element={<Department />} />
                <Route path="/services" element={<Services />} />
                <Route path="/procedure" element={<Procedure />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/patients" element={<Patients />} /> */}
                {/* <Route path="/createPatient" element={<CreatePatient />} /> */}
                {/* <Route path="/invoices" element={<InvoiceList />} />
                <Route path="/chairdashboard" element={<ChairDashBoard />} /> */}
                

                
                {/* <Route path="/editPriscription" element={<EditPriscription />} />
                <Route path="/editInvoice" element={<EditInvoice />} />
                <Route path="/viewInvoice" element={<PrintInvoice />} />
                <Route path="/myModal" element={<MyModal />} />
                <Route path="prescription" element={<PatientPrescription />} />
                <Route path="/receipt" element={<SPKPaymentReceipt />} />
                <Route path="/theme" element={<ColourThemeSelector />} /> */}

                {/* <Route path="/patientDetail" element={<PatientDetailLayout />} >


                  <Route index element={<PatientOverview />} />
                  <Route path="overview" element={<PatientOverview />} />
                  <Route path="cases" element={<PatientCases />} />
                  <Route path="medicalHistory" element={<PatientMedicalHistory />} />
                  <Route path="prescription" element={<PatientPrescription />} />
                  <Route path="editPriscription" element={<EditPriscription />} />
                  <Route path="invoice" element={<PatientInvoice />} />
                  <Route path="createCaseSheet" element={<CreateCaseSheet />} />
                  <Route path="editCaseSheet" element={<EditCaseSheet />} />
                  <Route path="updateCaseSheet" element={<UpdateCaseSheet />} />
                  <Route path="viewCaseSheet" element={<ViewCaseSheet2 />} />
                  <Route path="treatment" element={<StartTretment />} />
                  <Route path="viewCaseDetails" element={<ViewCaseDetail />} />
                  <Route path="editInvoice" element={<EditInvoice />} />
                  <Route path="appointment" element={<PatientAppointment />} />
                   
                </Route>
                <Route path="/appointment" element={<Appointment />} />
              </Route> */}

              {/* <Route path="/table" element={<TableComponent />} />
              <Route path="/modalPatients" element={<ModalPatients />} />
              <Route path="/modalAppointments" element={<ModalAppointments />} />
              <Route path="/modalBranch" element={<ModalBranch />} />
              <Route path="/modalChair" element={<ModalChairs />} />
              <Route path="/modalEmployee" element={<ModalEmployee />} />
              <Route path="/modalDepartment" element={<ModalDepartment />} />
              <Route path="/modalAllServices" element={<ModalAllServices />} />
              <Route path="/modalAllProcedure" element={<ModalAllProcedure />} />
              <Route path="/profileOverView" element={<ProfileOverView />} />
              <Route path="/nestedTable" element={<NestedTable />} />
              <Route path="/patientActivity" element={<PatientActivity />} />
              <Route path="/patientNavMenu" element={<PatientNavMenu />} />
              <Route path="/medicalHistory" element={<MedicalHistory />} />
              <Route path="/taggify" element={<Taggify />} />
              <Route path="/myTaggify" element={<MyTaggify />} />
              <Route path="/serviceAndProcedure" element={<ServiceAndProcedure />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/medicalHistoryCard" element={<MedicalHistoryCard />} />
              <Route path="/otherAttachments" element={<OtherAttachments />} />
              <Route path="/investigation" element={<Investigation />} />
              <Route path='/monthViewCalender' element={<MonthlyCalender />} />
              <Route path='/DailyAppointMent' element={<DailyAppointMent />} />
              <Route path='/dentalChart' element={<DentalChart />} />
              <Route path='/invoiceDesign' element={<Invoice />} /> */}

              {/* <Route path="/activityProfile"  element={<ActivityProfile />}/> */}


            </Route>
            </Route>
            </Route>
          <Route path="*" element={<Dashboard />} />

        </Routes>


      </main>

    </>
  )
}

export default App
