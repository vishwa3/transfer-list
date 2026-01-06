import "./styles.css";

const leftUL = document.querySelector(".left_container ul");
const rightUL = document.querySelector(".right_container ul");

const leftLeftButton = document.querySelector("#leftLeft");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const rightRightButton = document.querySelector("#rightRight");

function updateButtonStates() {
  const leftCount = leftUL.querySelectorAll("li").length;
  const rightCount = rightUL.querySelectorAll("li").length;

  const leftAnyChecked =
    leftUL.querySelectorAll('input[type="checkbox"]:checked').length > 0;
  const rightAnyChecked =
    rightUL.querySelectorAll('input[type="checkbox"]:checked').length > 0;

  rightButton.disabled = !leftAnyChecked;
  rightRightButton.disabled = leftCount === 0;
  leftButton.disabled = !rightAnyChecked;
  leftLeftButton.disabled = rightCount === 0;
}

leftUL.addEventListener("change", (e) => {
  if (e.target && e.target.matches('input[type="checkbox"]')) {
    updateButtonStates();
  }
});

rightUL.addEventListener("change", (e) => {
  if (e.target && e.target.matches('input[type="checkbox"]')) {
    updateButtonStates();
  }
});

rightButton.addEventListener("click", () => {
  const checkedItems = leftUL.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  checkedItems.forEach((inp) => {
    const li = inp.closest("li");
    rightUL.appendChild(li);
  });
  updateButtonStates();
});

rightRightButton.addEventListener("click", () => {
  const leftListItems = leftUL.querySelectorAll("li");
  leftListItems.forEach((li) => {
    rightUL.appendChild(li);
  });
  updateButtonStates();
});

leftButton.addEventListener("click", () => {
  const checkedItems = rightUL.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  checkedItems.forEach((inp) => {
    const li = inp.closest("li");
    leftUL.appendChild(li);
  });
  updateButtonStates();
});

leftLeftButton.addEventListener("click", () => {
  const rightListItems = rightUL.querySelectorAll("li");
  rightListItems.forEach((li) => {
    leftUL.appendChild(li);
  });
  updateButtonStates();
});
