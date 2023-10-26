import React, { useState } from "react";
import styles from "../style/Mypage_info.module.css";

function Mypage_info() {
  return (
    <div className={styles.mypageinfocontainer}>
      <div className={styles.myinfocontain}>
        <div className={styles.infotopic}>
          {/* <h1 className={styles.ratingtopic}>마이페이지</h1>
          <div className={styles.choosebtn}>
            <button className={styles.selectbtn}>개인정보 수정</button>
            <button className={styles.rightbtn}>예약내역</button>
          </div> */}
          <p className={styles.pagetopic}>개인정보 수정</p>
        </div>
        <div className={styles.hline}></div>
        <div className={styles.infocontainer}>
          <div className={styles.infoblock}>
            <p className={styles.infolist}>아이디</p>
            <input className={styles.textbox} />
          </div>
          <br />
          <div className={styles.infoblock}>
            <p className={styles.infolist}>비밀번호</p>
            <input className={styles.textbox} />
          </div>

          <div className={styles.infoblock}>
            <p className={styles.infolist}>이름</p>
            <input className={styles.textbox} />
          </div>

          <div className={styles.infoblock}>
            <p className={styles.infolist}>전화번호</p>
            <input className={styles.textbox} />
          </div>

          <div className={styles.infoblock}>
            <p className={styles.infolist}>이메일</p>
            <input className={styles.textbox} />
          </div>

          <div className={styles.infoblock}>
            <p className={styles.infolist}>주소</p>
            <div className={styles.addr_form}>
              <input
                className={styles.addr_input}
                type="text"
                name="addr1"
                required
              ></input>
              <button className={styles.addrnumfind} type="submit">
                우편번호
              </button>
              <br />
              <input
                className={styles.textbox}
                type="text"
                name="addr2"
                required
              ></input>
            </div>
          </div>
        </div>
        <button className={styles.modify}>수정하기</button>
      </div>
    </div>
  );
}

export default Mypage_info;
