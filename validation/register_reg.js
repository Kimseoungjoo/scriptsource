// 아이디 유효성 검증
// 영어 대소문자 가능, 숫자만 허용, 6~12자리

function idCheck(userid) {
  let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;

  // userid 사용자 입력값 가져오기

  let flag = regId.test(userid);

  // 유효성 검증 - 메세지 띄우기
  if (!flag) {
    alert("아이디 조건을 확인하세요");
    document.querySelector("#userid").select();
    return;
  }
}

//비밀번호 유효성 검증
// 영어 대소문자, 숫자만 허용, 특문자 허용 8~15
function passwordCheck(password) {
  let regPwd = /^(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@$*])[A-Za-z\d!@$*]{8,15}$/;

  // 비밀번호 가져오기
  return regPwd.test(password);
}
function pwdCheck1(password) {
  //password => <input type=>

  if (!passwordCheck(password.value)) {
    alert(
      "비밀번호는 숫자, 문자, 특수문자를 포함하여 8~15자로 작성해야 합니다."
    );
    password.select();
    return;
  }
}
function pwdCheck2(password) {
  if (!passwordCheck(password.value)) {
    alert(
      "비밀번호는 숫자, 문자, 특수문자를 포함하여 8~15자로 작성해야 합니다."
    );
    password.select();
    return;
  }
  if (document.querySelector("#userpw").value !== password.value) {
    alert("이전 비밀번호와 다릅니다.");
    password.select();
    return;
  }
}
// 성별 둘 중 하나 선택
function genderCheck() {
  // document.querySelector("[name='gender']"); 하면 첫번쨰 gender을 가져온다 .
  // document.querySelectorAll("[name='gender']"); 하면 이름이 gender인 보든 걸 배열로 받아온다. .
  let gender = document.querySelector("[name='gender']");
  if (!gender.checked) {
    alert("성별을 확인해주세요");
  }

  // let genders = document.querySelectorAll("[name='gender']");

  // genders.forEach((element) => {
  //   // console.log(element);
  //   if (!element.checked) {
  //     alert("체크해주세요");
  //   }
  // });
}

// 이메일 :
function emailCheck(email) {
  const reg = /\w+@[a-zA-Z]+\.(com|org|edu|ent|net)/;

  if (!reg.test(email)) {
    alert("이메일 형식이 다릅니다.");
    return;
  }
}

// 핸드폰 번호 :  000-0000-0000 규칙
function telCheck(tel) {
  const regTel = /^\d{3}-\d{4}-\d{4}$/;
  if (!regTel.test(tel)) {
    alert("핸드폰 번호  형식이 확인해 주세요.");
    return;
  }
}
