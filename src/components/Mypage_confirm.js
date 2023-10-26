import React, { useState } from "react";
import styles from "../style/Mypage_confirm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Mypage_confirm() {
  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);
  const [doRatingClick, setDoRatingClick] = useState(false);

  const toggleAccordion = (index) => {
    // 모든 삼각형 초기화
    setArrowRotated(Array(confirms.length).fill(false));
    // 삼각형 회전 상태를 설정
    setArrowRotated((prevArrowRotated) => {
      const newArrowRotated = [...prevArrowRotated];

      if (openIndex !== index) {
        // 새로운 질문을 클릭하면 해당 질문을 열고 이전 질문을 닫는다.
        newArrowRotated[index] = !newArrowRotated[index];
        setOpenIndex(index);
      } else {
        // 이미 열린 질문을 다시 클릭하면 닫는다.
        setOpenIndex(null);
      }
      return newArrowRotated;
    });
  };

  const doRating = () => {
    if (!doRatingClick) {
      setDoRatingClick(true);
    }
  };

  const confirms = [
    {
      state: "예약완료",
      num: "23523-23424",
      date: "2023-10-10",
      depart: "출발지",
      arrive: "도착지",
      car: "배송차량",
      option: "배송옵션",
      explain: "배송물품설명",
      sendtel: "발송자연락처",
      receitel: "수령인연락처",
      memo: "메모내용",
      cost: "5000원",
    },
    // 다른 리뷰 데이터 추가
    {
      state: "배송완료",
      num: "23523-23424",
      date: "2023-10-10",
      depart: "출발지",
      arrive: "도착지",
      car: "배송차량",
      option: "배송옵션",
      explain: "배송물품설명",
      sendtel: "발송자연락처",
      receitel: "수령인연락처",
      memo: "메모내용",
      cost: "7000원",
    },
    {
      state: "배송완료",
      num: "23523-23424",
      date: "2023-10-10",
      depart: "출발지",
      arrive: "도착지",
      car: "배송차량",
      option: "배송옵션",
      explain: "배송물품설명",
      sendtel: "발송자연락처",
      receitel: "수령인연락처",
      memo: "메모내용",
      cost: "15000원",
    },
  ];
  return (
    <div className={styles.mypageconfcontainer}>
      <div className={styles.myconfcontain}>
        <div className={styles.conftopic}>
          {/* <h1 className={styles.conftopic}>마이페이지</h1>
          <div className={styles.choosebtn}>
            <button className={styles.leftbtn}>개인정보 수정</button>
            <button className={styles.selectbtn}>예약내역</button>
          </div> */}
          <p className={styles.pagetopic}>예약내역</p>
          <div className={styles.hline}></div>
        </div>
        <div className={styles.accordionContainer}>
          {confirms.map((confirm, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <button className={styles.btnstate}>
                  <span className={styles.state}>{confirm.state}</span>
                </button>
                <div className={styles.opennum}>
                  <p>예약번호</p>
                  <span className={styles.author}>{confirm.num}</span>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.opendate}>
                  <p>예약일시</p>
                  <span className={styles.date}>{confirm.date}</span>
                </div>
                <p
                  className={`${styles.triangle} ${
                    arrowRotated[index] ? styles.rotate : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </p>
              </div>
              <div className={styles.openontainer}>
                {openIndex === index && (
                  <div className={styles.content}>
                    <div className={styles.openleft}>
                      <div className={styles.opencontent}>
                        <p>
                          발송지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <span className={styles.rescontent}>
                          {confirm.depart}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>
                          도착지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <span className={styles.rescontent}>
                          {confirm.arrive}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>배송차량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <span className={styles.rescontent}>{confirm.car}</span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>배송옵션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <span className={styles.rescontent}>
                          {confirm.option}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>배송물품설명</p>
                        <span className={styles.rescontent}>
                          {confirm.explain}
                        </span>
                      </div>
                    </div>
                    <div className={styles.openright}>
                      <div className={styles.opencontent}>
                        <p>발송자 연락처</p>
                        <span className={styles.rescontent}>
                          {confirm.sendtel}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>수령인 연락처</p>
                        <span className={styles.rescontent}>
                          {confirm.receitel}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>
                          메모&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                        <span className={styles.rescontent}>
                          {confirm.memo}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <div className={styles.costshow}>
                          <p>
                            결재금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </p>
                          <span className={styles.rescontent}>
                            {confirm.cost}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mypage_confirm;
