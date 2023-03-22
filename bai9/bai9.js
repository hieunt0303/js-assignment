// bài này t làm chung chung thôi nha, chứ chưa nghỉ ra cách làm tổng quát
// lấy hết các tag a mà đề yêu cầu
const aElements = document.querySelectorAll(".js_toogle_menu > ul > li > a");
console.log(aElements);

// lặp để gán event click cho mỗi tag
for (const aElement of aElements) {
  console.log(aElement);

  aElement.addEventListener("click", () => {
    // lấy cái element li bọc ngay phía ngoài
    const liElementOfA = aElement.closest("li");
    console.log(liElementOfA);

    // nhìn trong css thì thấy nếu có class active thì nó sẽ extend và thay đổi dấu + -> -
    // nên t sẽ dựa vào đó để làm

    // xem thử có class active hay chưa, nếu chưa thì add và ngược lại
    const isHaveClassActive = liElementOfA.classList.contains("active");
    if (isHaveClassActive) {
      liElementOfA.classList.remove("active");
    } else {
      liElementOfA.classList.add("active");
    }
  });
}
