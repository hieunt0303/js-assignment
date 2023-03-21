const inputElement = document.getElementById("input1");
const container = document.getElementById("content");

// mỗi khi tạo ra 1 li sẽ gán id tương ứng,
// để mỗi khi thao tác thì chỉ cần có id t sẽ thao tác đc với tất cả phần tử bên trong bằng câu lệnh querySelector

function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function handleClickBtn() {
  const value = inputElement.value;
  const newELementId = makeid(7);

  console.log(inputElement.value);
  container.innerHTML += `<li id='${newELementId}'>
  <input type='checkbox' onChange='handleCheckboxChange(this.checked,${newELementId})'/>
  <p>${value}</p>
  <button onClick='handleDelete(${newELementId})'> Delete</button>
  </li>`;
}

function handleCheckboxChange(isCheck, containerElement) {
  // t vẫn chưa hiểu vì sao truyền id vào func nhưng vào đây nó lại lấy ra nguyên cái element
  // phần này tự tìm hiểu he
  const idContainerElement = containerElement.id;
  console.log(isCheck,containerElement, containerElement.id);

  // lấy tag p bên trong
  // querySelector : đọc thêm chứ cái này dùng nhiều
  const pElement = document.querySelector(`#${idContainerElement} > p`);

  // nếu checkbox đang check
  // if(check) ~ if(check==true)
  if (isCheck) {
    pElement.style.textDecoration = "line-through";
    // dùng return để khỏi viết else ở dưới vì nó chỉ cần vào 1 trong 2 đk thôi
    return;
  }
  pElement.style.textDecoration = "none";
}

function handleDelete (containerElement){
  // tương tự như cái trên, nó lấy nguyên cái element nên chỉ cần method remove() là đc
  containerElement.remove()
}