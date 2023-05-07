import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Common/Header/Header";
import Footer from "./Common/Footer/Footer";
import InterviewSheet from "./Pages/InterviewSheet/InterviewSheet";
import InterviewSheetSubmitted from "./Pages/InterviewSheet/InterviewSheetSubmitted";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<InterviewSheet />} />
          <Route
            path="/interview-sheet-submitted"
            element={<InterviewSheetSubmitted />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
