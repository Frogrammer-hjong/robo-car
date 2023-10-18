import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/Main_page";
import ControlMain from "./components/Control_main";
import Login from "./components/Login";
import Join from "./components/Join";
import NoticeMain from "./components/Notice_main";
import NoticeDetail from "./components/Notice_detail";
import CustomerHelp from "./components/Customer_help";

import MyPage from "./components/My_page";
import ReservationPage from "./components/Reservation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/controlMain" element={<ControlMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/noticeMain" element={<NoticeMain />} />
        <Route path="/noticeDetail" element={<NoticeDetail />} />
        <Route path="/serviceCenter" element={<CustomerHelp />} />
        {/* <Route path="/mypage" element={<MyPage />} />
        <Route path="/resv" element={<ReservationPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
