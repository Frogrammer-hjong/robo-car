/*
  DB 연결 등 서버에 관련된 JS 파일입니다.
*/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000; // 포트번호 지정
const db = require("./config/db_config.js"); // DB 설정파일

// JSON 형식의 요청 데이터 파싱 설정
app.use(express.json());
// URL-encoded 형식의 요청 데이터 파싱 설정
app.use(express.urlencoded({ extended: true }));

/** [차량관제] 차량 주행 기록 요청 */
app.post("/PathReq", (req, res) => {
  console.log("주행기록요청");
  const carId = req.body.target;

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    const sql = `SELECT * FROM car_path WHERE cp_carId = "${carId}"`;

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `주행기록 요청 완료` });
      } else {
        res.status(200).json({
          success: false,
          message: `주행기록 요청 실패`,
        });
      }
    });
    conn.release();
  });
});

/** [마이페이지 - 개인정보수정] 데이터 처리 */
app.post("/MypageModify", (req, res) => {
  console.log("마이페이지 개인정보 수정 요청");

  const body = req.body;

  const id = body.id;
  const name = body.uName;
  const pw = body.uPw;
  const phone = body.uPhone;
  const addr = body.uAddr;
  const office = body.uOffice;

  db.getConnection((err, conn) => {
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    const sql = `UPDATE user SET u_name="${name}",u_pw="${pw}",u_phone="${phone}",u_addr="${addr}",u_office="${office}" WHERE u_id = "${id}"`;

    conn.query(sql, (err, result) => {
      // console.log('실행쿼리: ' + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("개인정보 수정 성공!");
        res.status(200).json({ success: true, message: "개인정보 수정 성공!" });
      } else {
        res.status(500).json({ success: false, message: "개인정보 수정 실패" });
      }
    });

    conn.release();
  });
});

/** [관리자페이지 - Home] 데이터 처리 */
app.post("/ManageHome", (req, res) => {
  console.log("관리자 페이지 상황판 요청");

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    const sql = "SELECT * FROM reservation";

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        const sql2 = "SELECT COUNT(*) as row_count FROM car_list";
        conn.query(sql2, (err, rows2) => {
          res.status(200).json({
            success: true,
            rows,
            rows2,
            message: `Home 데이터 요청 완료`,
          });
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Home 데이터 요청 실패`,
        });
      }
    });
    conn.release();
  });
});

/** [공지사항] 데이터 요청 처리 */
app.post("/Notice", (req, res) => {
  console.log(`공지사항 데이터 요청`);

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    const sql = "SELECT * FROM notice_board";

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `공지사항 요청 완료` });
      } else {
        res.status(200).json({
          success: true,
          message: `공지사항 요청 실패`,
        });
      }
    });
    conn.release();
  });
});

/** [마이페이지] 데이터 요청 */
app.post("/Review", (req, res) => {
  const reqTarget = req.body.reqTarget;

  console.log(`고객센터 ${reqTarget} 데이터 요청`);

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    let sql = "SELECT * FROM review_board";

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `${reqTarget}요청 완료` });
      } else {
        res.status(200).json({
          success: true,
          message: `${reqTarget}요청 실패`,
        });
      }
    });
    conn.release();
  });
});

/** [마이페이지] 데이터 요청 */
app.post("/Mypage", (req, res) => {
  const reqTarget = req.body.reqTarget;
  const userId = req.body.userId;

  console.log(`마이페이지 ${reqTarget} 데이터 요청`);

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    let sql = "";

    if (reqTarget === "개인정보 수정") {
      sql = `SELECT * FROM user WHERE u_id ="${userId}"`;
    } else {
      sql = `SELECT * FROM reservation WHERE resv_subscriber = "${userId}"`;
    }

    conn.query(sql, (err, rows) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `${reqTarget}요청 완료` });
      } else {
        res.status(200).json({
          success: true,
          message: `${reqTarget}요청 실패`,
        });
      }
    });
    conn.release();
  });
});

/** 리뷰 등록 요청 처리 */
app.post("/ReviewAdd", (req, res) => {
  const body = req.body;

  const auth = body.auth;
  const title = body.title;
  const car = body.car;
  const rating = body.rating;
  const content = body.content;
  const resvNo = body.resvNo;

  db.getConnection((err, conn) => {
    console.log("리뷰등록 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");
    const sql = `INSERT INTO review_board(rb_title, rb_auth, rb_content, rb_rating, rb_usedCarId, reservation_resv_no) VALUES (?,?,?,?,?,?)`;
    const params = [title, auth, content, rating, car, resvNo];

    conn.query(sql, params, (err, result, fields) => {
      console.log(params);
      console.log("실행쿼리: " + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("리뷰 등록 성공!");
        res.status(200).json({
          success: true,
          message: "리뷰 등록이 완료 되었습니다!",
        });

        // reservation 테이블 업데이트 쿼리
        const updateSQL =
          "UPDATE reservation SET resv_review_chk = 1 WHERE resv_no = ?";
        conn.query(updateSQL, [resvNo], (err, result, fields) => {
          if (err) {
            console.log("reservation 테이블 업데이트 실패:");
            console.dir(err);
            res.status(500).json({
              success: false,
              message: "reservation 테이블 업데이트 실패",
            });
            return;
          }
          if (result) {
            console.log("reservation 테이블 업데이트 성공!");
          } else {
            res.status(500).json({
              success: false,
              message: "reservation 테이블 업데이트 실패",
            });
          }
        });
      } else {
        res.status(500).json({ success: false, message: "리뷰 등록 실패" });
      }
    });

    conn.release();
  });
});

/** 공지사항 등록 요청 처리 */
app.post("/NotiAdd", (req, res) => {
  const body = req.body;

  const modify = body.modify;
  const targetIdx = body.targetIdx;

  const auth = body.auth;
  const title = body.title;
  const content = body.content;
  const important = body.important;

  if (modify) {
    db.getConnection((err, conn) => {
      console.log("공지 수정 요청");
      if (err) {
        console.log("MySQL 연결 실패:", err);
        res.status(500).json({ success: false, message: "MySQL 연결 실패" });
        return;
      }
      console.log("MySQL 연결 성공");
      const sql = `UPDATE notice_board SET nb_title = ?, nb_content = ?, nb_auth = ?, nb_important = ? WHERE nb_idx = ?`;
      const param = [title, content, auth, important, targetIdx];
      conn.query(sql, param, (err, result, fields) => {
        console.log("실행쿼리: " + sql);
        if (err) {
          console.log("쿼리 실행 실패:");
          console.dir(err);
          res.status(500).json({ success: false, message: "쿼리 실행 실패" });
          return;
        }
        if (result) {
          console.log(result);
          console.log("공지 수정 성공!");
          res.status(200).json({ success: true, message: "예약 성공" });
        } else {
          res.status(500).json({ success: false, message: "예약 실패" });
        }
      });

      conn.release();
    });
  } else {
    db.getConnection((err, conn) => {
      console.log("운송예약 요청");
      if (err) {
        console.log("MySQL 연결 실패:", err);
        res.status(500).json({ success: false, message: "MySQL 연결 실패" });
        return;
      }
      console.log("MySQL 연결 성공");
      const sql = `INSERT INTO notice_board(nb_title,nb_content,nb_auth,nb_important) VALUES (?,?,?,?)`;
      const params = [title, content, auth, important];

      conn.query(sql, params, (err, result, fields) => {
        console.log(params);
        console.log("실행쿼리: " + sql);
        if (err) {
          console.log("쿼리 실행 실패:");
          console.dir(err);
          res.status(500).json({ success: false, message: "쿼리 실행 실패" });
          return;
        }
        if (result) {
          console.log(result);
          console.log("공지 등록 성공!");
          res.status(200).json({ success: true, message: "예약 성공" });
        } else {
          res.status(500).json({ success: false, message: "예약 실패" });
        }
      });

      conn.release();
    });
  }
});

/** 운송 예약 데이터 처리 */
app.post("/Resv", (req, res) => {
  function generateResvNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리로 만듭니다.
    const day = String(now.getDate()).padStart(2, "0"); // 날짜를 2자리로 만듭니다.
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const reservationNumber = `${year}${month}${day}-${hours}${minutes}${seconds}`;

    return reservationNumber;
  }

  const body = req.body;
  const subscriber = body.subscriber;
  const resvNo = generateResvNumber();
  const origin = body.origin;
  const consignorPhone = body.consignorPhone;
  const destination = body.destination;
  const recepiptPhone = body.recepiptPhone;
  const date = body.date;
  const time = body.time;
  const carOpt = body.carOpt;
  const delivOpt1 = body.delivOpt1;
  const delivOpt2 = body.delivOpt2;
  const freightInfo = body.freightInfo;
  const memo = body.memo;
  const price = body.price;

  const mergeDelivOpt = delivOpt1 + "/" + delivOpt2;

  const type = body.type;
  const targetResvNo = body.resvNo;
  const targetResvStat = body.opt.label;

  if (type) {
    console.log(targetResvStat);
    db.getConnection((err, conn) => {
      console.log("예약 수정 요청");
      if (err) {
        console.log("MySQL 연결 실패:", err);
        res.status(500).json({ success: false, message: "MySQL 연결 실패" });
        return;
      }
      console.log("MySQL 연결 성공");

      const sql = "UPDATE reservation SET resv_state = ? WHERE resv_no = ?";
      const params = [targetResvStat, targetResvNo];

      conn.query(sql, params, (err, result, fields) => {
        // console.log('실행쿼리: ' + sql);
        if (err) {
          console.log("쿼리 실행 실패:");
          console.dir(err);
          res.status(500).json({ success: false, message: "쿼리 실행 실패" });
          return;
        }
        if (result) {
          console.log(result);
          console.log("예약 수정 성공!");
          res
            .status(200)
            .json({
              success: true,
              message: "배송현황이 업데이트 되었습니다.",
            });
        } else {
          res.status(500).json({ success: false, message: "예약 수정 실패" });
        }
      });

      conn.release();
    });
  } else {
    db.getConnection((err, conn) => {
      console.log("운송예약 요청");
      if (err) {
        console.log("MySQL 연결 실패:", err);
        res.status(500).json({ success: false, message: "MySQL 연결 실패" });
        return;
      }
      console.log("MySQL 연결 성공");
      const table =
        "reservation(resv_subscriber, resv_no, resv_date, resv_ord_tel, resv_recip_tel, resv_start, resv_destin, resv_carselect, resv_price, resv_state, resv_info, resv_memo, resv_delivopt, car_list_car_id)";
      const sql = `INSERT INTO ${table} VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
      const params = [
        subscriber,
        resvNo,
        date,
        consignorPhone,
        recepiptPhone,
        origin,
        destination,
        carOpt,
        price,
        "예약완료",
        freightInfo,
        memo,
        mergeDelivOpt,
        carOpt,
      ];
      const sql2 =
        "INSERT INTO car_path(cp_origin,cp_destination,cp_carId,cp_resv_no) VALUES(?,?,?,?)";
      const params2 = [origin, destination, carOpt, resvNo];

      conn.query(sql, params, (err, result, fields) => {
        // console.log('실행쿼리: ' + sql);
        if (err) {
          console.log("쿼리 실행 실패:");
          console.dir(err);
          res.status(500).json({ success: false, message: "쿼리 실행 실패" });
          return;
        }
        if (result) {
          console.log(result);
          console.log("예약 성공!");
          res.status(200).json({ success: true, message: "예약 성공" });
        } else {
          res.status(500).json({ success: false, message: "예약 실패" });
        }
      });

      conn.query(sql2, params2, (err, result, fields) => {
        // console.log('실행쿼리: ' + sql);
        if (err) {
          console.log("쿼리 실행 실패:");
          console.dir(err);
          res.status(500).json({ success: false, message: "쿼리 실행 실패" });
          return;
        }
        if (result) {
          console.log(result);
          console.log("차량주행 기록 성공!");
        } else {
          res
            .status(500)
            .json({ success: false, message: "주행기록 저장 실패" });
        }
      });
      conn.release();
    });
  }
});

/** [관리자페이지 - 차량 등록] 데이터 처리 */
app.post("/CarAdd", (req, res) => {
  const body = req.body;

  const clicenseplt = body.clicenseplt || req.query.clicenseplt;
  const cmodel = body.cmodel || req.query.cmodel;
  const cid = body.cid || req.query.cid;
  const cpower = body.cpower;
  const clight = body.clight;
  const cbattery = body.cbattery || req.query.cbattery;

  db.getConnection((err, conn) => {
    console.log("차량등록 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    const sql =
      "INSERT INTO car_list(car_licenseplt,car_model,car_id,car_power,car_light,car_battery) VALUES (?,?,?,?,?,?)";
    const params = [clicenseplt, cmodel, cid, cpower, clight, cbattery];

    conn.query(sql, params, (err, result, fields) => {
      // console.log('실행쿼리: ' + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("차량 등록 성공!");
        res.status(200).json({ success: true, message: "차량 등록 성공" });
      } else {
        res.status(500).json({ success: false, message: "차량 등록 실패" });
      }
    });

    conn.release();
  });
});

/** [관리자페이지] 데이터 요청 처리 */
app.post("/ManageMember", (req, res) => {
  const reqTarget = req.body.reqTarget;
  const carId = req.body.carId;
  const notiIdx = req.body.notiIdx;
  const u_id = req.body.u_id;

  console.log(`관리자 페이지 ${reqTarget} 데이터 요청`);

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    let sql = "";

    if (reqTarget === "Home") {
      sql = "SELECT * FROM reservation";
    } else if (reqTarget === "Member") {
      sql = "SELECT * FROM user";
    } else if (reqTarget === "delMember") {
      sql = `DELETE FROM user WHERE u_id = "${u_id}"`;
    } else if (reqTarget === "Resv") {
      sql = "SELECT * FROM reservation";
    } else if (reqTarget === "Car") {
      sql = "SELECT * FROM car_list";
    } else if (reqTarget === "delCar") {
      sql = `DELETE FROM car_list WHERE car_id = "${carId}"`;
    } else if (reqTarget === "Notice") {
      sql = "SELECT * FROM notice_board";
    } else if (reqTarget === "delNotice") {
      sql = `DELETE FROM notice_board WHERE nb_idx = "${notiIdx}"`;
    } else if (reqTarget === "Review") {
      sql = "SELECT * FROM review_board";
    } else {
      console.log("요청을 처리할 수 없습니다.");
    }

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        if (reqTarget === "delMember") {
          res.status(200).json({
            success: false,
            err,
            message: "예약이 존재하는 계정입니다.",
          });
          return;
        } else {
          res.status(500).json({ success: false, message: "쿼리 실행 오류" });
          return;
        }
      }

      if (rows.length > 0) {
        res
          .status(200)
          .json({ success: true, rows, message: `${reqTarget}요청 완료` });
      } else {
        res.status(200).json({
          success: false,
          rows,
          message: `${reqTarget}요청 실패`,
        });
      }
    });

    conn.release();
  });
});

/** 로그인 요청 처리 */
app.post("/Login", (req, res) => {
  const parId = req.body.id; // 로그인 페이지에서 입력 받은 아이디 받아오기
  const parPw = req.body.password; // 로그인 페이지에서 입력 받은 패스워드 받아오기

  let sql = "";
  if (parId === "admin") {
    sql = `SELECT * FROM admin WHERE admin_id="${parId}"`;
  } else {
    sql = `SELECT u_id,u_pw,u_name FROM user WHERE u_id="${parId}"`;
  }

  db.getConnection((err, conn) => {
    console.log("로그인 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }
      console.log(rows);
      if (rows.length > 0) {
        if (rows[0]["u_pw"] === parPw || rows[0]["admin_pw"] === parPw) {
          console.log("로그인 성공!");
          res.status(200).json({
            success: true,
            u_name: rows[0]["u_name"] || "관리자",
            message: "로그인 성공",
          });
        } else {
          console.log("패스워드 불일치");
          res
            .status(200)
            .json({ success: false, info: "pw", message: "패스워드 불일치" });
        }
      } else {
        console.log("일치하는 사용자 없음");
        console.log(sql);
        res.status(200).json({
          success: false,
          info: "id",
          message: "일치하는 사용자 없음",
        });
      }
    });
    conn.release();
  });
});

/** 회원가입 요청 처리 */
app.post("/Join", (req, res) => {
  const body = req.body;

  const paramName = body.name || req.query.name;
  const paramId = body.id || req.query.id;
  const paramPassword = body.password || req.query.password;
  const paramEmail = body.email || req.query.email;
  const paramPhone = body.phone || req.query.phone;
  const paramAddr1 = body.addr1 || req.query.addr1;
  const paramAddr2 = body.addr2 || req.query.addr2;
  const paramOffice = body.office || req.query.office;
  const paramAddr = paramAddr1 + paramAddr2;

  db.getConnection((err, conn) => {
    console.log("회원가입 요청");
    if (err) {
      console.log("MySQL 연결 실패:", err);
      res.status(500).json({ success: false, message: "MySQL 연결 실패" });
      return;
    }
    console.log("MySQL 연결 성공");

    const sql =
      "INSERT INTO user(u_name, u_id, u_pw, u_phone, u_email, u_addr, u_office) VALUES(?, ?, ?, ?, ?, ?, ?)";
    const params = [
      paramName,
      paramId,
      paramPassword,
      paramPhone,
      paramEmail,
      paramAddr,
      paramOffice,
    ];

    conn.query(sql, params, (err, result, fields) => {
      // console.log('실행쿼리: ' + sql);
      if (err) {
        console.log("쿼리 실행 실패:");
        console.dir(err);
        res.status(500).json({ success: false, message: "쿼리 실행 실패" });
        return;
      }
      if (result) {
        console.log(result);
        console.log("사용자 추가 성공");
        res.status(200).json({ success: true, message: "사용자 추가 성공" });
      } else {
        res.status(500).json({ success: false, message: "사용자 추가 실패" });
      }
    });

    conn.release();
  });
});

/** 아이디 중복 검사 */
app.post("/idChk", (req, res) => {
  console.log("아이디 중복 검사 요청됨");

  let paramId = req.body["ChkId"];
  let sql = `SELECT u_id FROM user WHERE u_id="${paramId}"`;

  db.getConnection((err, conn) => {
    if (err) console.log("MySQL 연결 실패");

    conn.query(sql, (err, rows, fields) => {
      if (err) {
        console.log("쿼리 실행 실패: ", err);
        res.status(500).json({ success: false, message: "쿼리 실행 오류" });
        return;
      }

      if (rows.length > 0) {
        // 입력받은 아이디가 이미 있는 경우
        if (rows[0]["u_id"] === paramId) {
          console.log("중복된 아이디");
          res.status(200).json({
            success: true,
            overlap: false,
            message: "중복된 아이디 입니다.",
          });
        }
      } else {
        // 입력받은 아이디가 DB에 없는 경우
        console.log("사용 가능 아이디");
        res.status(200).json({
          success: true,
          overlap: true,
          message: "사용 가능한 아이디 입니다.",
        });
      }
    });

    conn.release();
  });
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}`);
});
