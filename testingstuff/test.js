function answerChecker() {
  var firstword = document.getElementById("generatedOne").innerText;
  var secondword = document.getElementById("generatedTwo").innerText;
  var thirdword = document.getElementById("generatedThree").innerText;
  var svarmulighed1 = document.getElementById("rec_mode1");
  var svarmulighed2 = document.getElementById("rec_mode2");
  var svarmulighed3 = document.getElementById("rec_mode3");

  var svar1 = svarmulighed1.options[svarmulighed1.selectedIndex].text;
  var svar2 = svarmulighed2.options[svarmulighed2.selectedIndex].text;
  var svar3 = svarmulighed3.options[svarmulighed3.selectedIndex].text;

  if ((firstword === svar1) & (secondword === svar2) & (thirdword === svar3)) {
    console.log("CORRECT");
    document.getElementById("wrongOrRight").innerText = "Correct answer";
  } else {
    console.log("WRONG");
    document.getElementById("wrongOrRight").innerText =
      "One or more answers were wrong";
  }
}
