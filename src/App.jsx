import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./pages/registration/Registration";
import { ArchDocPageRoute } from "./pages/archive_documents/ArchDocPage";
import { DocumentPageRoute } from "./pages/documents/DocPage";
import { MainPageRoute } from "./pages/components/MainPage";
import { OrganizatorsRoute } from "./pages/Organizators/Org";
import { PartnersRoute } from "./pages/Partners/Part";
import { QApage } from "./pages/question-answer/QApage";
import { QaOut } from "./pages/question-answer/QaOut";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Pattern /> */}
      {/* <Registration />  */}

      {/* <QApage /> */}

      <Router>
        <Routes>
          <Route path="/" element={<MainPageRoute />} />
          <Route path="/regisration" element={<Registration />} />

          <Route path="/archive_documents" element={<ArchDocPageRoute />} />
          <Route path="/documents" element={<DocumentPageRoute />} />
          <Route path="/Organizators" element={<OrganizatorsRoute />} />
          <Route path="/Partners" element={<PartnersRoute />} />

          <Route path="/Qapage" element={<QaOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

{
  /* <Route path="/about" element={<Pattern />} />
        <Route path="/head" element={<Header />} /> */
}
