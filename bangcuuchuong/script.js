const container = document.getElementById("container");

function handleCreateTable() {
  const elementInput = document.getElementById("number");
  const input = elementInput.value;
  if (input <= 0) {
    alert("So phai lon hon 0.");
    return;
  }
  createTable(input);
}

function createTable(numberInput) {
  console.log(numberInput)
  let elementDiv = "";
  for (let i = 1; i <= numberInput; i++) {
    for (let j = 1; j <= numberInput; j++) {
      elementDiv += `<span id='column'>${i}*${j}=${Number(i)*Number(j)}</span>`;
    }
    elementDiv += "<br>";
  }
  console.log(elementDiv)
  container.innerHTML = elementDiv;
}
