let result = (document.getElementById("display").style.display = "none");

function gettingValue() {
  let value1 = Number(document.getElementById("web").value);
  let value2 = Number(document.getElementById("maths").value);
  let value3 = Number(document.getElementById("java").value);
  let value4 = Number(document.getElementById("python").value);
  let percent = (value1 + value2 + value3 + value4) / 4;
  console.log(percent);
  document.getElementById("display").style.display = "block";
  document.getElementById("percentage").innerHTML = percent;
  if (100>=percent && percent>=90) {
    document.getElementById("grade").innerHTML = "A";
  } else if (90 > percent && percent>=80) {
    document.getElementById("grade").innerHTML = "B";
  } else if (80 > percent && percent>= 70) {
    document.getElementById("grade").innerHTML = "C";
  } else if (70 > percent && percent >= 60) {
    document.getElementById("grade").innerHTML = "D";
  } else {
    document.getElementById("grade").innerHTML = "E";
  }
}

function percentage() {
  gettingValue();
}