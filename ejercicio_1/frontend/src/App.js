import React from "react";
//import { UserContextProvider } from './context/UserContextProvider';
import { HomePage } from "./components/HomePage";
import { HistoryPage } from "./components/HistoryPage";
import { EditVariables } from "./components/EditVariables";
import { SalesForecast } from "./components/SalesForecast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //<UserContextProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/history-page" element={<HistoryPage />} />
        <Route exact path="/sales-forecast" element={<SalesForecast />} />
        <Route exact path="/edit-variables" element={<EditVariables />} />
      </Routes>
    </Router>
    //</UserContextProvider>
  );
}

export default App;
