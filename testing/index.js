function validForm() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  const nicknameInput = document.getElementById("nickname"); //닉네임 class를 가져와서 객체를 받음
  const nickname = nicknameInput.value;

  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const emailRule = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const blank = /\s/g;

  const passwordcheckInput = document.getElementById("passwordcheck");
  const passwordcheck = passwordcheckInput.value;

  if (!name) {
    document.getElementById("nameError").textContent = "필수 입력 항목입니다!";
    document.getElementById("nameError").style.color = "red";
    count++;
  } else {
    document.getElementById("nameError").textContent = "멋진 이름이네요!";
    document.getElementById("nameError").style.color = "green";
  }

  if (nickname.length < 2 || nickname.length > 5) {
    //박스에 2~5글자 제한
    document.getElementById("nicknameError").textContent =
      "닉네임은 2~5글자로 구성해주세요";
    document.getElementById("nicknameError").style.color = "red";
    count++;
  } else {
    document.getElementById("nicknameError").textContent = "멋진 닉메임이군요!";
    document.getElementById("nicknameError").style.color = "green";
  }

  if (!emailRule.test(email)) {
    document.getElementById("emailError").textContent =
      "올바른 이메일 형식을 지켜주세요.";
    document.getElementById("emailError").style.color = "red";
    count++;
  } else {
    document.getElementById("emailError").textContent =
      "올바른 이메일 형식입니다!";
    document.getElementById("emailError").style.color = "green";
  }

  if (!password || blank.test(password)) {
    document.getElementById("passwordError").textContent =
      "영문, 숫자, 특수 문자 이외의 것이 작성되었습니다.";
    document.getElementById("passwordError").style.color = "red";
    count++;
  } else {
    document.getElementById("passwordError").textContent =
      "안전한 비밀번호입니다!";
    document.getElementById("passwordError").style.color = "green";
  }

  if (!password || password != passwordcheck) {
    //password가 공백이거나 일치하지 않으면
    document.getElementById("passwordcheckError").textContent =
      "비밀번호가 일치하지 않습니다.";
    document.getElementById("passwordcheckError").style.color = "red";
    count++;
  } else {
    document.getElementById("passwordcheckError").textContent =
      "비밀번호가 일치합니다.";
    document.getElementById("passwordcheckError").style.color = "green";
  }
}

document.getElementById("submitBtn").addEventListener("click", function () {
  validForm();
});
