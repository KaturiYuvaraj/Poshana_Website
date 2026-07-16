import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccountPolicy from "./pages/DeleteAccountPolicy";
import Disclaimer from "./pages/Disclaimer";
import Support from "./pages/Support";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";

function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account-policy" element={<DeleteAccountPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;