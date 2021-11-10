let inputWidth;
let inputHeight;
inputWidth = prompt("Nhập chiều rộng");
inputHeight = prompt("Nhập chiều dài");
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area = width * height;
document.write("Width: " + width);
document.write("<br/>")
document.write("Height: " + height);
document.write("<br/>")
document.write("Area: " + area);