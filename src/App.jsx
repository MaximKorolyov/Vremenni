import styles from "./App.module.scss";
import { Header } from "./Components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Registration } from "./pages/registration/Registration";
import { ArchDocPageRoute } from "./pages/archive_documents/ArchDocPage";
import { DocumentPageRoute } from "./pages/documents/DocPage";
import { MainPageRoute } from "./pages/components/MainPage";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Pattern /> */}
      {/* <Registration />  */}

    <Router>
      <Routes>
        <Route path="/" element={<MainPageRoute />} />
        <Route path="/regisration" element={<Registration />} />
        {/* <Route path="/about" element={<Pattern />} />
        <Route path="/head" element={<Header />} /> */}
        <Route path="/archive_documents" element={<ArchDocPageRoute/>} />
        <Route path="/documents" element={<DocumentPageRoute/>} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
