const colors = ["red", "blue", "green", "yellow", "purple"];
let index = 0;

document.getElementById("changeBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // 끝까지 가면 다시 처음으로
});

function changeMessage() {
  document.getElementById("message").innerText = "버튼을 눌러 메시지가 바뀌었습니다!";
}
