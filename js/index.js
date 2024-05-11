//1. Birinci tapşırıq:
// "button.change-color" düyməsinə klik edildikdə <body> elementinin fon rənglərini dəyişən bir
// skript yazın və span.color'da rəng dəyərini göstərin.

// const btn = document.querySelector(".change-color");
// const body = document.querySelector("body");
// const span = document.querySelector(".color");

// btn.addEventListener("click", (event) => {
//   const randomcolor = randomColor();
//   span.textContent = randomcolor;
//   body.style.backgroundColor = randomcolor;
// });

//------------------------------------------------------------------------------------------

// 2. İkinci tapşırıq:
// Sadə bir kalkulyator yaradın ki, onda rəqəmlər və əməliyyatlar üçün düymələr olsun.
// İstifadəçinin klikləri ilə daxil etdiyi rəqəmləri və əməliyyatların nəticəsini göstərin.

// const btns = document.querySelectorAll(".button_list-item");
// const result = document.querySelector(".result");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (btn.textContent === "0") {
//       result.textContent = result.textContent.concat("0");
//     } else if (btn.textContent === "1") {
//       result.textContent = result.textContent.concat("1");
//     } else if (btn.textContent === "2") {
//       result.textContent = result.textContent.concat("2");
//     } else if (btn.textContent === "3") {
//       result.textContent = result.textContent.concat("3");
//     } else if (btn.textContent === "4") {
//       result.textContent = result.textContent.concat("4");
//     } else if (btn.textContent === "5") {
//       result.textContent = result.textContent.concat("5");
//     } else if (btn.textContent === "6") {
//       result.textContent = result.textContent.concat("6");
//     } else if (btn.textContent === "7") {
//       result.textContent = result.textContent.concat("7");
//     } else if (btn.textContent === "8") {
//       result.textContent = result.textContent.concat("8");
//     } else if (btn.textContent === "9") {
//       result.textContent = result.textContent.concat("9");
//     } else if (btn.textContent === "9") {
//       result.textContent = result.textContent.concat("9");
//     } else if (btn.textContent === ".") {
//       result.textContent = result.textContent.concat(".");
//     } else if (btn.textContent === "/") {
//       result.textContent = result.textContent.concat("/");
//     } else if (btn.textContent === "*") {
//       result.textContent = result.textContent.concat("*");
//     } else if (btn.textContent === "-") {
//       result.textContent = result.textContent.concat("-");
//     } else if (btn.textContent === "+") {
//       result.textContent = result.textContent.concat("+");
//     } else if (btn.textContent === "AC") {
//       result.textContent = "";
//     } else if (btn.textContent === "(") {
//       result.textContent = result.textContent.concat("(");
//     } else if (btn.textContent === ")") {
//       result.textContent = result.textContent.concat(")");
//     } else if (btn.id === "icon_btn") {
//       result.textContent = result.textContent.substring(
//         0,
//         result.textContent.length - 1
//       );
//     } else if (btn.textContent === "=") {
//       result.textContent = eval(result.textContent);
//     }
//   });
// });

//----------------------------------------------------------------------------------------------

// 3 -
// Əkrana genişlik və hündürlük bütün sahəni tutan bir futbol meydanı ilə 100x100 piksel
// ölçülərində bir top olan bir HTML səhifə yaradın. Səhifəyə klik etdikdə, topun mərkəzi klik
// edilən yerdə dayansın və top sahənin sərhədlərindən kənarda olmasın.

// const ball = document.querySelector(".ball");
// const staduim = document.querySelector(".staduim");
// staduim.addEventListener("click", (event) => {
//   let x = event.clientX - staduim.offsetLeft;
//   let y = event.clientY - staduim.offsetTop;
//   let max_x = staduim.offsetWidth - ball.offsetWidth / 2;
//   let max_y = staduim.offsetHeight - ball.offsetWidth / 2;

//   if (Number(x) < ball.offsetWidth) {
//     ball.style.left = ball.offsetWidth / 2 + "px";
//   } else if (Number(x) > max_x) {
//     ball.style.left = max_x + "px";
//   } else {
//     ball.style.left = x + "px";
//   }

//   if (Number(y) < ball.offsetHeight) {
//     ball.style.top = "25px";
//   } else if (Number(y) > max_y) {
//     ball.style.top = max_y + "px";
//   } else {
//     ball.style.top = y + "px";
//   }
// });
