document.addEventListener("DOMContentLoaded", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("data-test", "todo-input");
  document.body.appendChild(input);

  const button = document.createElement("button");
  button.setAttribute("data-test", "todo-add");
  button.textContent = "Dodaj";
  document.body.appendChild(button);

  input.value = "hello";

  function addTodoElem() {
    const inputValue = input.value;

    const postData = { value: inputValue };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((response) => {
        console.log("Odpowiedź serwera:", response.data);
      })
      .catch((error) => {
        console.error("Błąd podczas wykonywania requestu:", error);
      });
  }

  button.addEventListener("click", addTodoElem);
});
