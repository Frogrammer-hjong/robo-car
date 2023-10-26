import React, { useEffect, useState } from "react";
import style from "../style/Mypage_confirm.module.css";
import mys from "../style/Mypage.module.css";
import styled from "styled-components";

import MypageInfo from "./Mypage_info";
import MypageConf from "./Mypage_confirm";

const Btn = styled.button`
  width: 400px;
  height: 50px;
  background: #f5f5f5;
  color: black;
  font-size: 18px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
`;

const Mypage = () => {
  const [activeTab, setActiveTab] = useState("자주 묻는 질문");

  useEffect(() => {
    if (activeTab) {
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={style.mypageconfcontainer}>
      <div className={style.myconfcontain}>
        <div className={style.conftopic}>
          <h1 className={style.conftopic}>마이페이지</h1>
          <div className={style.choosebtn}>
            <Btn
              type="radio"
              name="tab"
              className={` ${mys.btn} ${
                activeTab === "개인정보 수정" ? mys.active : ""
              }`}
              onClick={() => handleTabClick("개인정보 수정")}
            >
              개인정보 수정
            </Btn>
            <Btn
              type="radio"
              name="tab"
              className={` ${mys.btn} ${
                activeTab === "예약내역" ? mys.active : ""
              }`}
              onClick={() => handleTabClick("예약내역")}
            >
              예약내역
            </Btn>
          </div>
        </div>
        {activeTab === "개인정보 수정" ? <MypageInfo /> : <MypageConf />}
      </div>
    </div>
  );
};

export default Mypage;
