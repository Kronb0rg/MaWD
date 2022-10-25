// this script generates takes a random word from the list and inserts it into the span
function gentext() {
  var word = [
    "Cow",
    "Cat",
    "Dog",
    "Horse",
    "Bunny",
    "Chicken",
    "Monkey",
    "Lion",
    "Tiger",
    "Whale",
  ];
  var para1 = document.getElementById("generatedOne");
  var para2 = document.getElementById("generatedTwo");
  var para3 = document.getElementById("generatedThree");
  para1.innerHTML = word[Math.floor(Math.random() * word.length)];
  para2.innerHTML = word[Math.floor(Math.random() * word.length)];
  para3.innerHTML = word[Math.floor(Math.random() * word.length)];
}

// the script that creates the list of options an inserts it into the drop down menus
function createDropdownOptions() {
  let optionList1 = document.getElementById("rec_mode1").options;
  let optionList2 = document.getElementById("rec_mode2").options;
  let optionList3 = document.getElementById("rec_mode3").options;
  let options = [
    {
      text: "Cat",
      value: "Value 1",
    },
    {
      text: "Cow",
      value: "Value 2",
    },
    {
      text: "Dog",
      value: "Value 3",
    },
    {
      text: "Horse",
      value: "Value 4",
    },
    {
      text: "Bunny",
      value: "Value 5",
    },
    {
      text: "Chicken",
      value: "Value 6",
    },
    {
      text: "Monkey",
      value: "Value 7",
    },
    {
      text: "Lion",
      value: "Value 8",
    },
    {
      text: "Whale",
      value: "Value 9",
    },
    {
      text: "Tiger",
      value: "Value 10",
    },
  ];
  options.forEach((option) =>
    optionList1.add(new Option(option.text, option.value, option.selected))
  );

  options.forEach((option) =>
    optionList2.add(new Option(option.text, option.value, option.selected))
  );
  options.forEach((option) =>
    optionList3.add(new Option(option.text, option.value, option.selected))
  );
}

//Scrip that verifies the answers
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
