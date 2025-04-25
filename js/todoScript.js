// 스타일 적용할거 ID 가져옴
const newTodoInput = document.getElementById("new-todo");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 할 일 추가하는 펑션션
function addTodo() {
  const text = newTodoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  // 완료 토글
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // 삭제 버튼
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "✕";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // li 클릭 방지
    todoList.removeChild(li);
  });
  li.appendChild(removeBtn);

  todoList.appendChild(li);
  newTodoInput.value = "";
}

// 이벤트 리스너 등록
addBtn.addEventListener("click", addTodo);
newTodoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addTodo();
});
