function changeMessage() {
  document.getElementById("message").innerText = "버튼을 눌러 메시지가 바뀌었습니다!";
}


function setupButtonCycle() {
  const colors = ["red", "blue", "white"];
  let index = 0;

  const button = document.getElementById("changeBtn");

  button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; // 배열 끝까지 가면 다시 처음으로
  });
}

// 페이지가 로드되면 함수 실행
window.onload = setupButtonCycle;
