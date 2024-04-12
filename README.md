# Robo-car

![logo_background.png](Robo-car%20a7a209a126914fd0b5a47e75f6f554a7/logo_background.png)

## 프론트엔드 개발자 취업 캠프 (React) 2회차_4조 팀 프로젝트


> 무인 운송차량 관제 및 충전소 위치정보 제공 시스템
> 
- 개발 기간: 2023.10 ~ 2023.11 ( 약 6주 )
- 개발 인원: 5명

## 프로젝트 소개

로보카는 무인 운송차량의 관제 및 충전소 위치를 제공하는 서비스 입니다.

무인 차량을 이용한 물류 운송 예약, 실시간 차량 위치 확인 등의 서비스를 통해 새로운 물류 시스템을 제안합니다.

## 시작 가이드

> **요구 사항 (Requirements)**
> 

For building and running the application you need:

- Node.js v18.17.1
- npm v9.6.7
- nodemon v3.0.1


> 설치 (Installation)
> 

```bash
> https://github.com/Frogrammer-hjong/robo-car.git
> npm i
```

> 실행 (Run)
> 

**Back-end**

```bash
> cd src/server
> nodemon server
```

**Front-end**

```bash
> npm start
```

## 개발 환경 및 기술 스택

> 개발 환경 (Environment)
> 
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![windows11](https://img.shields.io/badge/windows11-007ACC?style=for-the-badge&logo=windows11&logoColor=white)
> 기술 스택 (Stack)
> 

**Front-end**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![html5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![styledcomponents](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![cssmodules](https://img.shields.io/badge/css%20modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white)

**Back-end**

![express](https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white)
![node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![nodemon](https://img.shields.io/badge/nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![mysql](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)


**협업 (Communication)**

![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![figma](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![zoom](https://img.shields.io/badge/zoom-0B5CFF?style=for-the-badge&logo=zoom&logoColor=white)
![discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
 
## 주요 기능

✅ **차량 관제**
- 운행 중인 차량의 위치 조회 가능
- 충전소 위치 조회 가능

✅ **회원가입/로그인**
 - 이름, 연락처, 주소 등을 기입 받아 회원가입
 - 가입 된 아이디와 패스워드로 로그인 가능

✅ **마이 페이지**
- 로그인 된 사용자의 정보 확인 가능
- 해당 페이지에서 아이디를 제외한 개인 정보 수정 가능
- 해당 계정으로 운송예약한 정보 확인 가능

✅ **운송 예약**
- 운송차량, 시간 등을 기입 받아 운송 예약 가능

✅ **고객센터**
- 자주 묻는 질문 확인 가능
- 진행된 예약 건에 대한 사용자 리뷰 확인 가능


## 디렉토리 구조

```bash
📦robo-car
 ┣ 📂public
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜car.png
 ┃ ┃ ┣ 📜chargingMarker.png
 ┃ ┃ ┣ 📜keyimage_01.jpg
 ┃ ┃ ┣ 📜keyimage_02.jpg
 ┃ ┃ ┣ 📜selectedStn.png
 ┃ ┃ ┗ 📜step_keyimage.jpg
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂assets # 페이지 컴포넌트에서 사용되는 이미지 파일 폴더
 ┃ ┃ ┣ 📜answer.png
 ┃ ┃ ┣ 📜arrow.png
 ┃ ┃ ┣ 📜calendar.png
 ┃ ┃ ┣ 📜controlimage.jpg
 ┃ ┃ ┣ 📜controlmain.png
 ┃ ┃ ┣ 📜delivery-truck.png
 ┃ ┃ ┣ 📜effectimage_01.jpg
 ┃ ┃ ┣ 📜effectimage_02.jpg
 ┃ ┃ ┣ 📜fast-forward.png
 ┃ ┃ ┣ 📜footer_logo.png
 ┃ ┃ ┣ 📜info.png
 ┃ ┃ ┣ 📜infomark.png
 ┃ ┃ ┣ 📜keyimage_01.jpg
 ┃ ┃ ┣ 📜laptop.png
 ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┣ 📜lorry.png
 ┃ ┃ ┣ 📜notes.png
 ┃ ┃ ┣ 📜outlineimage_01.jpg
 ┃ ┃ ┣ 📜outlineimage_02.jpg
 ┃ ┃ ┣ 📜packagepick.png
 ┃ ┃ ┣ 📜racing.png
 ┃ ┃ ┣ 📜reser_keyimage.jpg
 ┃ ┃ ┣ 📜right.png
 ┃ ┃ ┣ 📜step_keyimage.jpg
 ┃ ┃ ┣ 📜tick_mark.png
 ┃ ┃ ┣ 📜truck_01.png
 ┃ ┃ ┗ 📜truck_02.png
 ┃ ┣ 📂components # 페이지 컴포넌트 파일(.js , .jsx) 폴더
 ┃ ┃ ┣ 📜About_us.js
 ┃ ┃ ┣ 📜Batterystatus.js
 ┃ ┃ ┣ 📜Confirm_func.jsx
 ┃ ┃ ┣ 📜Control_main.js
 ┃ ┃ ┣ 📜Currenttime.js
 ┃ ┃ ┣ 📜Customer_FAQ.js
 ┃ ┃ ┣ 📜Customer_help_center.jsx
 ┃ ┃ ┣ 📜Customer_rating.js
 ┃ ┃ ┣ 📜Customer_review_list.jsx
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┣ 📜Image_slider.js
 ┃ ┃ ┣ 📜Img_slider.js
 ┃ ┃ ┣ 📜Join.js
 ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┣ 📜Main_page.js
 ┃ ┃ ┣ 📜Manager_header.js
 ┃ ┃ ┣ 📜Manager_main.js
 ┃ ┃ ┣ 📜Manager_member.js
 ┃ ┃ ┣ 📜Manager_member_detail.js
 ┃ ┃ ┣ 📜Manager_notice.js
 ┃ ┃ ┣ 📜Manager_notice_add.js
 ┃ ┃ ┣ 📜Manager_notice_modify.js
 ┃ ┃ ┣ 📜Manager_page.js
 ┃ ┃ ┣ 📜Manager_reserv.js
 ┃ ┃ ┣ 📜Manager_review.js
 ┃ ┃ ┣ 📜Manager_vehicle.js
 ┃ ┃ ┣ 📜Manager_vehicle_add.js
 ┃ ┃ ┣ 📜Marker.js
 ┃ ┃ ┣ 📜Mypage.jsx
 ┃ ┃ ┣ 📜Mypage_confirm.js
 ┃ ┃ ┣ 📜Mypage_info.js
 ┃ ┃ ┣ 📜Notice_detail.js
 ┃ ┃ ┣ 📜Notice_main.js
 ┃ ┃ ┣ 📜Reservation.js
 ┃ ┃ ┣ 📜Scroll_top.js
 ┃ ┃ ┗ 📜Sidebar.jsx
 ┃ ┣ 📂server # DB 연결과 관련된 서버 폴더
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┗ 📜db_config.js
 ┃ ┃ ┗ 📜server.js
 ┃ ┣ 📂style # 페이지 디자인을 위한 css, module.css 파일 폴더
 ┃ ┃ ┣ 📜About_us.module.css
 ┃ ┃ ┣ 📜Confirm_func.css
 ┃ ┃ ┣ 📜Control_main.module.css
 ┃ ┃ ┣ 📜Customer_faq.module.css
 ┃ ┃ ┣ 📜Customer_help_center.module.css
 ┃ ┃ ┣ 📜Customer_rating.module.css
 ┃ ┃ ┣ 📜Customer_review_list.module.css
 ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┣ 📜Image_slider.module.css
 ┃ ┃ ┣ 📜Join.module.css
 ┃ ┃ ┣ 📜Login.module.css
 ┃ ┃ ┣ 📜Main_page.module.css
 ┃ ┃ ┣ 📜Manager_header.module.css
 ┃ ┃ ┣ 📜Manager_main.module.css
 ┃ ┃ ┣ 📜Manager_member.module.css
 ┃ ┃ ┣ 📜Manager_member_detail.module.css
 ┃ ┃ ┣ 📜Manager_notice.module.css
 ┃ ┃ ┣ 📜Manager_notice_add.module.css
 ┃ ┃ ┣ 📜Manager_notice_modify.module.css
 ┃ ┃ ┣ 📜Manager_page.module.css
 ┃ ┃ ┣ 📜Manager_reserv.module.css
 ┃ ┃ ┣ 📜Manager_review.module.css
 ┃ ┃ ┣ 📜Manager_vehicle.module.css
 ┃ ┃ ┣ 📜Manager_vehicle_add.module.css
 ┃ ┃ ┣ 📜Mypage.module.css
 ┃ ┃ ┣ 📜Mypage_confirm.module.css
 ┃ ┃ ┣ 📜Mypage_info.module.css
 ┃ ┃ ┣ 📜Notice_detail.css
 ┃ ┃ ┣ 📜Notice_detail.module.css
 ┃ ┃ ┣ 📜Notice_main.module.css
 ┃ ┃ ┣ 📜Reservation.module.css
 ┃ ┃ ┣ 📜Sidebar.module.css
 ┃ ┃ ┗ 📜Toast.css
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.test.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┃ ┣ 📜logo.svg
 ┃ ┣ 📜reportWebVitals.js
 ┃ ┣ 📜setupProxy.js
 ┃ ┗ 📜setupTests.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock

```
