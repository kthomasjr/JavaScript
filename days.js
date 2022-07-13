

function myDate() {
  let a = new Date();
  let r = a.getDay();
  return r;
  //document.getElementById("myId").innerHTML = r;
};

const day = myDate();

// still figuring out switch statements, output number of days until Saturday

switch (day) {
  case 0:
    alert("Six days until Saturday");
    break;

  case 1:
    alert("Five days until Saturday");
    break;

  case 2:
    alert("Four days until Saturday");
    break;

  case 3:
    alert("Three days until Saturday");
    break;

  case 4:
    alert("Two days until Saturday");
    break;

  case 5:
    alert("One day until Saturday");
    break;

  default:
    alert("It is Saturday!");
    break;
}
