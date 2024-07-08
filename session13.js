// let n = +prompt("Mời bạn nhập vào số n!!!");
// let count = 0;

// //Biến đếm số lượng số nguyên tố
// let num = 2; // Số nguyên tố đầu tiên trong dãy số nguyên tố
// while (count < n) {
//   //Phải tìm ra được số nguyên tố thì
//   //biến count mới tăng lên 1 đơn vị
//   let check = false;
//   for (let i = 2; i < num - 1; i++) {
//     if (num % i === 0) {
//       check = true;
//     }
//   }
//   if (check === false) {
//     console.log(num);
//     count = count + 1;
//   }
//   num = num + 1;
// }

// let n = +prompt("Nhập vào số n:");
// let dem = 0;
// let num = 2;
// while (dem < n) {
//   let check = true;
//   for (let i = 2; i < n; i++) {
//     if (num % i === 0) {
//       check = false;
//     }
//   }
//   if (check == true) {
//     console.log(num);
//     dem = dem + 1;
//   }
//   num = num + 1;
// }

//Session 13: Chuỗi đảo ngược

// let randomString = `Hello World`; // 0- Độ dài của chuỗi -1

// "Hello World"[0]; // Lấy ra chữ H;
// "Hello World"[6]; // Lấy ra chữ W;
// let Str = "";
// console.log(randomString[randomString.length - 1]); //

// for (let i = randomString.length - 1; i >= 0; i--) {
//   Str = Str + randomString[i];
// }
// console.log(Str);

// //Viết chương trình nhập vào số nguyên dương:
// let n = +prompt("Nhập vào số nguyên dương từ 0-100");

// for (let j = 1; j <= n; j++) {
//   let Str = "";

//   for (let i = j; i <= n + j; i = i + 1) {
//     Str = Str + `${i} `;
//   }
//   console.log(Str.trim());
// }

// ĐÂY LÀ NHÀ HÀNG - QUÁN BIA CỦA YẾN
//

// let mon1 = "Tiết canh dê";
// let mon2 = "Lòng xách dê xào";
// let mon3 = "Cánh đắng";
// let mon4 = "Dê xào lăn";
// let mon5 = " Dê xào xả ớt";

// //...Nồi hấp bị hỏng
// let mon80 = "Dê xông hơi";
// let mon81 = "Dê chao dầu";

// //......
// let mon100 = "Nầm dê nướng";

// let menu = [mon1, mon2, mon3, mon4, mon5, mon80, mon81, mon100];

// //Thêm vào đầu mảng
// menu.unshift("a");
// console.log(menu);

// //Push: Thêm vào cuối mảng
// menu.push("bún đậu");
// console.log(menu);

// //Read-Lấy ra
// //Sử dụng vị trí trong mảng
// console.log(`Mời Dương xơi ${menu[6]}`);

// //In ra tất cả các phần tử trong mảng
// Str = "";
// for (let i = 1; i <= menu.length - 1; i++) {
//   Str = Str + ` , ${menu[i]}`;
// }
// console.log(Str);

// //U Update - Cập nhật
// menu[7] = "Nầm dê hấp";
// console.log(menu);

// //Delete
// //Xóa đầu
// menu.shift();
// console.log(menu);

// //Xóa phần từ cuối
// menu.pop();

// //Xóa phần tử tại vị trí bất ky
// menu.splice(5, 2);
// console.log(menu);

// //Thêm mới vào vị trí bất kỳ
// menu.splice(1, 0, "Đậu lướt ván", "Dê xào lăn");
// console.log(menu);

//ĐẢO NGƯỢC PHẦN TỬ TRONG MẢNG

// let A = [-3, 5, 1, 3, 2, 10];
// let B = [];
// for (i = A.length - 1; i >= 0; i--) {
//   B = B + ` ${A[i]},`;
// }
// console.log(B);

//THỰC HÀNH TÌM GIÁ TRỊ TRONG MẢNG
// let a = +prompt("Nhập vào giá trị bất kỳ");
// let numbers = [-3, 5, 1, 3, 2, 10];

// for (i = 0; i < numbers.length; i++) {
//   if (a == numbers[i]) {
//     console.log(i);
//   } else{
//     console.log("Không có phần tử trong mảng")
//   }
// }

//[Thực hành] LUYỆN TẬP VÀ THAO TÁC MẢNG
// let A = [];
// for (i = 0; i < 6; i++) {
//   A.push(i);
// }
// A.unshift("a");
// A.pop();
// A[2] = 10;
// A.splice(3, 0, 15);
// console.log(A);

// [Thực hành] TÌM GIÁ TRỊ TRONG MẢNG
// let a = +prompt("Nhập số bất kỳ");
// let A = [1, 2, 3, 4, 5, 6, 7, 8];
// let check = false;
// for (i = 0; i <= A.length - 1; i++) {
//   if (a === A[i]) {
//     check = true;
//     console.log("Bingo");
//   }
// }
// if (!check) {
//   console.log("Chúc bạn may mắn lần sau");
// }

//[Thực hành] ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG
// let n = prompt("Tôi là Ronaldo");
// let convert = n.split(",");
// console.log("Chuyển đổi String => Array", convert);
// let A = [];
// for (i = convert.length - 1; i >= 0; i--) {
//   A.push(convert[i]);
// }
// console.log(A);

// [Thực hành] TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG
// VD: -89,57,-20,36,24,75
// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log("Chuyển đổi string sang array", convert); // convert=[-89,57,-20,36,24,75]

// let max = Number(convert[0]);
// for (let i = 0; i < convert.length; i++) {
//   if (Number(convert[i]) > max) {
//     max = Number(convert[i]);
//   }
// }
// console.log(max);

// let A = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// B = "";
// for (i = 0; i <= A.length - 1; i++) {
//   B = B + ` ${A[i]}, `;
// }
// console.log(B);

// let A = "Keep Calm And Code On";
// let B = "";
// for (let i = 0; i <= A.length - 1; i++) {
//   if (A[i].toUpperCase() === A[i]) {
//     B = B + A[i].toLowerCase();
//   } else {
//     B = B + A[i].toUpperCase();
//   }
// }
// console.log(B);

// Nối giữa 2 số chẵn bằng dấu "-"
// let A = "245468";

// let convert = A.split("");
// for (let i = 0; i <= convert.length - 1; i++) {
//   if (convert[i] % 2 == 0 && convert[i + 1] % 2 == 0) {
//     convert.splice(i + 1, 0, "-");
//   }
// }
// console.log(convert.join(""));

//BAI 8
// let english = ["apple", "lady", "baby", "crazy", "may", "lazy"];
// let viet = ["táo", "quý cô", "em bé", "điên", "tháng năm", "lười"];

// let nhap = prompt("hãy nhập từ bạn muốn tra");
// let check = false;
// let daura = "";
// for (i = 0; i <= english.length - 1; i++) {
//   if (nhap == english[i]) {
//     check = true;
//     daura = viet[i];
//   }
// }
// if ((check == true)) {
//   console.log(`Chữ bạn cần tìm là: ${daura}`);
// } else {
//   console.log("không tìm thấy ");
// }

// Bài 9:
// let todoList = ["go to bed at 11pm", "do homework at 8pm"];
// let CRUD = prompt("nhập mã bạn muốn");
// if (CRUD == "C") {
//   let nhap = prompt("NHẬP phần bạn muốn thêm");
//   todoList.push(nhap);
//   console.log(todoList);
// }

// if (CRUD == "R") {
//   console.log(todoList);
// }

// if (CRUD == "U") {
//   let a = +prompt("vị trí phần tử muốn update");
//   let b = prompt("nội dung muốn update ");
//   todoList.splice(a, 1, b);
//   console.log(todoList);
// }

// if (CRUD == "D") {
//   let a = +prompt("vị trí phần tử muốn xóa");
//   todoList.splice(a, 1);
//   console.log(todoList);
// }
// if (CRUD !== "C" || CRUD !== "R" || CRUD !== "U" || CRUD !== "D") {
//   alert("vui lòng nhập lại");
// }
