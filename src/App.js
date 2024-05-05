import StudentUploadDoc from "./pages/StudentUploadDoc";
import StudentMain from "./pages/StudentMain";
import StudentSeminar from "./pages/StudentSeminar";
import StudentRevision from "./pages/StudentRevision";
import AcademicAdministrationMain from "./pages/AcademicAdministrationMain";
import HeadStudyProgramMain from "./pages/HeadStudyProgramMain";
import HeadStudyProgramProposal from "./pages/HeadStudyProgramProposal";
import HeadStudyProgramProposalDetail from "./pages/HeadStudyProgramProposalDetail";
import AcademicAdministrationUserManager from "./pages/AcademicAdministrationUserManager";
import AcademicAdministrationUserManagerSetting from "./pages/AcademicAdministrationUserManagerSetting";
import AcademicAdministrationInvite from "./pages/AcademicAdministrationInvite";
import AcademicAdministrationProposal from "./pages/AcademicAdministrationProposal";
import ExaminerMain from "./pages/ExaminerMain";
import ExaminerProposal from "./pages/ExaminerProposal";
import ExaminerProposalDetail from "./pages/ExaminerProposalDetail";
import ExaminerSeminar from "./pages/ExaminerSeminar";
import CoordinatorMain from "./pages/CoordinatorMain";
import CoordinatorProposal from "./pages/CoordinatorProposal";
import CoordinatorProposalDetail from "./pages/CoordinatorProposalDetail";
import CoordinatorSeminar from "./pages/CoordinatorSeminar";
import SupervisorMain from "./pages/SupervisorMain";
import SupervisorProposal from "./pages/SupervisorProposal";
import SupervisorProposalDetail from "./pages/SupervisorProposalDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secure from "./services/Secure";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/academic-administrations/main" element={<Secure><AcademicAdministrationMain /></Secure>} />
          <Route path="/academic-administrations/proposal" element={<Secure><AcademicAdministrationProposal /></Secure>} />
          <Route path="/academic-administrations/user-manager" element={<Secure><AcademicAdministrationUserManager /></Secure>} />
          <Route path="/academic-administrations/user-manager-setting" element={<Secure><AcademicAdministrationUserManagerSetting /></Secure>} />
          <Route path="/academic-administrations/invite" element={<Secure><AcademicAdministrationInvite /></Secure>} />
          <Route path="/students/main" element={<Secure><StudentMain /></Secure>} />
          <Route path="/students/upload-doc" element={<Secure><StudentUploadDoc /></Secure>} />
          <Route path="/students/revision" element={<Secure><StudentRevision /></Secure>} />
          <Route path="/students/seminar" element={<Secure><StudentSeminar /></Secure>} />
          <Route path="/head-study-programs/main" element={<Secure><HeadStudyProgramMain /></Secure>} />
          <Route path="/head-study-programs/proposal" element={<Secure><HeadStudyProgramProposal /></Secure>} />
          <Route path="/head-study-programs/proposal/:id" element={<Secure><HeadStudyProgramProposalDetail /></Secure>} />
          <Route path="/examiners/main" element={<Secure><ExaminerMain /></Secure>} />
          <Route path="/examiners/proposal" element={<Secure><ExaminerProposal /></Secure>} />
          <Route path="/examiners/proposal/detail" element={<Secure><ExaminerProposalDetail /></Secure>} />
          <Route path="/examiners/seminar" element={<Secure><ExaminerSeminar /></Secure>} />
          <Route path="/coordinators/main" element={<Secure><CoordinatorMain /></Secure>} />
          <Route path="/coordinators/proposal" element={<Secure><CoordinatorProposal /></Secure>} />
          <Route path="/coordinators/proposal/detail" element={<Secure><CoordinatorProposalDetail /></Secure>} />
          <Route path="/coordinators/seminar" element={<Secure><CoordinatorSeminar /></Secure>} />
          <Route path="/supervisors/main" element={<Secure><SupervisorMain /></Secure>} />
          <Route path="/supervisors/proposal" element={<Secure><SupervisorProposal /></Secure>} />
          <Route path="/supervisors/proposal/detail" element={<Secure><SupervisorProposalDetail /></Secure>} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
