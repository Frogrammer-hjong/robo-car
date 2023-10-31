import React, { useState } from "react";
import styles from "../style/Manager_reserv.module.css";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function ManagerReserv({ resvData }) {
  const CATEGORY_LIST = [
    { label: "특급", value: null },
    { label: "일반", value: "0001" },
  ];
  const formatOptionLabel = ({ label, value }) => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span style={{ color: "black" }}>
        {value === "0001" ? "특급 배송" : "일반 배송"}
      </span>
    </div>
  );
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 0 1px #333" : null,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#ddd" : null,
      color: state.isSelected ? "#333" : null,
    }),
  };

  let reserve = "";
  if (!resvData) {
    reserve = [
      // 예약 데이터...
      {
        num: "05.",
        reservnum: "23523-232424",
        reservid: "gildong12",
        reservtime: "2023-10-10",
        depart: "서울고속버스터미널",
        arrive: "국립중앙도서관",
        car: "1톤 트럭",
        option: CATEGORY_LIST[0],
        sendtel: "010-2453-0000",
        receitel: "010-8565-0000",
        thing: "중고서적 200권",
        memo: "중고서적 200권",
        cost: "55000",
      },
    ];
  } else {
    reserve = resvData;
  }

  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);

  const handleItemClick = (index) => {
    // 모든 삼각형 초기화
    setArrowRotated(Array(reserve.length).fill(false));
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

  const [selectedOption, setSelectedOption] = useState(CATEGORY_LIST[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className={styles.reservcontainer}>
      <div className={styles.listcontainer}>
        {/* 제목 테이블 */}
        <div className={styles.titlecontainer}>
          <p className={styles.tablenum}>배송현황</p>
          <p className={styles.thnum}>예약번호</p>
          <p className={styles.thid}>예약자 아이디</p>
          <p className={styles.thdate}>예약일시</p>
          <div></div>
        </div>

        {/* 예약 아이템들 */}
        <div className={styles.accordionContainer}>
          {reserve.map((reserve, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => handleItemClick(index)}
              >
                <span className={styles.num}>{reserve.resv_state}</span>
                <span className={styles.reservnum}>{reserve.resv_no}</span>
                <div className={styles.person}>
                  <span className={styles.reservid}>
                    {reserve.resv_subscriber}
                  </span>
                </div>
                <span className={styles.reservtime}>{reserve.resv_date}</span>
                <div className={styles.triangleContainer}>
                  <p
                    className={`${styles.triangle} ${
                      arrowRotated[index] ? styles.rotate : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </p>
                </div>
              </div>

              <div className={styles.openlist}>
                {openIndex === index && (
                  <div className={styles.conaiainercontent}>
                    <div className={styles.leftlist}>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          출발지 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>
                          {reserve.resv_start}
                        </span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          도착지 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>
                          {reserve.resv_destin}
                        </span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          배송 차량 &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>
                          {reserve.resv_carselect}
                        </span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          배송 옵션 &nbsp; &nbsp; &nbsp;
                        </p>
                        <Select
                          className={styles.categoryitem}
                          options={CATEGORY_LIST}
                          value={CATEGORY_LIST.find(
                            (option) => option.value === selectedOption.value
                          )}
                          onChange={handleSelectChange}
                          styles={customStyles} // customStyles 변수 전달
                          formatOptionLabel={formatOptionLabel}
                        />
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>발송인 연락처 </p>
                        <span className={styles.item}>
                          {reserve.resv_ord_tel}
                        </span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>수령인 연락처 </p>
                        <span className={styles.item}>
                          {reserve.resv_recip_tel}
                        </span>
                      </div>
                    </div>
                    <div className={styles.rightlist}>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>배송물품설명</p>
                        <span className={styles.item}>{reserve.resv_info}</span>
                      </div>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>메모</p>
                        <span className={styles.item}>{reserve.resv_memo}</span>
                      </div>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>결재금액</p>
                        <span className={styles.item}>
                          {parseInt(reserve.resv_price).toLocaleString()}원
                        </span>
                      </div>
                    </div>
                    <button className={styles.btncomp}>수정 완료</button>
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

export default ManagerReserv;
