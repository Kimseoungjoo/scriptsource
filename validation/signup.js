$(function () {
  $("#signupForm").validate({
    // 검증 규칙 명시 -rules에 추가
    // 규칙을 적용할 요소는 이름을 사용
    rules: {
      userid: {
        required: true,
        validId: true,
      },
      username: {
        required: true,
        minlength: 2,
        maxlength: 4,
      },
      password: {
        required: true,
        rangelength: [8, 15],
      },
      confirm_password: {
        required: true,
        rangelength: [8, 15],
        equalTo: "#password",
      },
      email: {
        required: true,
        email: true,
      },
      policy: {
        required: true,
      },
      topic: {
        required: "#newsletter:checked",
        minlength: 2,
      },
    },
    // 검증규칙과 맞지 않는 경우 보여줄 메세지 작성
    messages: {
      userid: {
        required: "아이디는 필수요소입니다.",
      },
      username: {
        required: "이름은 필수요소입니다.",
        minlength: "이름은 최소 2자리여야 합니다.",
        maxlength: "이름은 최대 4자리여야합니다.",
      },
      password: {
        required: "비밀번호를 입력해주세요",
        rangelength: "비밀번호는 8~15자리입니다.",
      },
      confirm_password: {
        required: "비밀번호를 재입력해주세요",
        rangelength: "비밀번호는 8~15자리입니다.",
        equalTo: "비밀번호가 서로 다릅니다.",
      },
      email: {
        required: "이메일은 필수요소입니다.",
        email: "이메일 형식이 다릅니다.",
      },
      policy: {
        required: "우리 사이트 정책에 동의를 필요로 합니다. ",
      },
      topic: "관심사를 적어도  2개는 선택해야해요~ ",
    },
  });

  $("#newsletter").click(function () {
    let topics = $("#newsletter_topics");

    if (topics.css("display") == "none") {
      topics.css("display", "block");
    } else {
      topics.css("display", "none");
    }
  });
});
// 사용자 지정 규칙명시
$.validator.addMethod(
  "validId",
  function (value) {
    let regId = /^(?=.*[A-Za-z])(?=.*[\d])[A-Za-z\d]{6,12}$/;
    return regId.test(value); // true or false
  },
  "아이디는 영대소문자, 숫자의 조합으로 6~12자리로 만들어야 합니다."
);
