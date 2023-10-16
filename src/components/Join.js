import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Join.css";

function Join() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // 회원가입 메시지 상태

  useEffect(() => {
    if (message) {
      alert(message);
      navigate("/login"); // 로그인 페이지로 이동
    }
  }, [message, navigate]);

  /** 회원가입 폼 내용을 DB에 저장하기 위한 함수 */
  const signUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const id = formData.get("id");
    const password = formData.get("password");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const addr1 = formData.get("addr1");
    const addr2 = formData.get("addr2");
    const office = formData.get("office");

    try {
      const response = await fetch("/Join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          id,
          password,
          phone,
          email,
          addr1,
          addr2,
          office,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(name);
        if (data.success) {
          setMessage(`환영합니다, ${name}님!`);
        } else {
          setMessage("회원가입에 실패했습니다.");
        }
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  // 초기값 세팅 - 아이디, 비밀번호, 비밀번호확인, 이름, 이메일, 전화번호, 주소
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [addressMessage, setAddressMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isAddress, setIsAddress] = useState(false);

  /** 유효성 검사를 통과했을 때 글자색 변경해주는 함수 */
  const ValidMessageColor = (pass) => {
    if (pass) {
      return { color: "green" };
    }
    return { color: "red" };
  };

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4~16자 이내의 대/소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8~16자 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      if (isPassword === false) {
        setPasswordConfirmMessage(
          "[비밀번호] 입력란에 유효한 비밀번호를 입력해주세요."
        );
      } else {
        setPasswordConfirmMessage("비밀번호가 일치합니다!");
        setIsPasswordConfirm(true);
      }
    }
  };
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setIsName(true);
    }
  };
  const onChangePhone = (getNumber) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsPhone(true);
    }
  };
  const addHyphen = (e) => {
    const currentNumber = e.target.value;
    setPhone(currentNumber);
    if (currentNumber.length === 3 || currentNumber.length === 8) {
      setPhone(currentNumber + "-");
      onChangePhone(currentNumber + "-");
    } else {
      onChangePhone(currentNumber);
    }
  };
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };
  const onChangeAddress = (e) => {
    const currentAddress = e.target.value;
    setAddress(currentAddress);
  };

  return (
    <>
      <div className="Join_body">
        <h3>ROBO-CAR</h3>
        <h3>회원가입</h3>
        <br />
        <form className="form" action="/Join" method="post" onSubmit={signUp}>
          {/* 아이디 */}
          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="id">아이디</label> <br />
            <input
              className="id_textbox"
              id="id"
              name="id"
              value={id}
              onChange={onChangeId}
              placeholder="ID"
              required
            />
            <button className="id_confirm">중복확인</button>
            <p className="message" style={ValidMessageColor(isId)}>
              {idMessage}
            </p>
          </div>

          {/* 비밀번호 */}
          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="password">비밀번호</label> <br />
            <input
              type="password"
              className="textbox"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="PASSWORD"
              required
            />
            <p className="message" style={ValidMessageColor(isPassword)}>
              {passwordMessage}
            </p>
          </div>

          {/* 비밀번호 확인 */}
          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="passwordConfirm">비밀번호 확인</label> <br />
            <input
              type="password"
              className="textbox"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
              placeholder="PASSWORD CHECK"
              required
            />
            <p className="message" style={ValidMessageColor(isPasswordConfirm)}>
              {passwordConfirmMessage}
            </p>
          </div>

          {/* 이름 */}
          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="name">이름</label> <br />
            <input
              className="textbox"
              id="name"
              name="name"
              value={name}
              onChange={onChangeName}
              placeholder="NAME"
              required
            />
            <p className="message" style={ValidMessageColor(isName)}>
              {nameMessage}
            </p>
          </div>

          {/* 전화번호 */}
          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="phone">전화번호</label> <br />
            <input
              className="textbox"
              id="phone"
              name="phone"
              value={phone}
              onChange={addHyphen}
              placeholder="01X-0000-0000"
              required
            />
            <p className="message" style={ValidMessageColor(isPhone)}>
              {phoneMessage}
            </p>
          </div>

          {/* 이메일 */}
          <div className="form-el">
            <label htmlFor="email">이메일</label> <br />
            <input
              className="textbox"
              id="email"
              name="email"
              value={email}
              placeholder="example@domain.~"
              onChange={onChangeEmail}
            />
            <p className="message" style={ValidMessageColor(isEmail)}>
              {emailMessage}
            </p>
          </div>

          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="address">주소</label> <br />
            <div className="addr_form">
              <input
                className="addr_input"
                type="text"
                name="addr1"
                required
              ></input>
              <button className="addr_find" type="submit">
                주소찾기
              </button>
              <input
                className="textbox"
                type="text"
                name="addr2"
                required
              ></input>
            </div>
          </div>

          <div className="form-el">
            <label className="red_star">*</label>
            <label htmlFor="office">회사명</label> <br />
            <input className="textbox" id="office" name="office" required />
          </div>
          <br />
          <button className="join" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </>
  );
}

export default Join;
