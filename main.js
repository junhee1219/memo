const saveButton = document.getElementById("save-button");
const memoTextarea = document.getElementById("memo");

saveButton.addEventListener("click", function () {
  const memo = memoTextarea.value;
  localStorage.setItem("memo", memo);
  alert("Your memo has been saved!");
});

const memo = localStorage.getItem("memo");
if (memo !== null) {
  memoTextarea.value = memo;
}
