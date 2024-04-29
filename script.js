document.getElementById("goButton").addEventListener("click", function () {
  var inputValue = document.getElementById("myInput").value;
  var data = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  var value = "";
  for (var i = 0; i < inputValue.length; i++) {
    if (data.includes(inputValue[i])) {
      value += inputValue[i];
      document.getElementById("span").innerText = value;
    }
  }
});
