import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Assets/styles/GlobalStyle";

import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HabitsPage from "./Pages/HabitsPage";
import TodayPage from "./Pages/TodayPage";
import HistoryPage from "./Pages/HistoryPage"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<SignUpPage/>}/>
        <Route path="/habitos" element={<HabitsPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/historico" element={<HistoryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
