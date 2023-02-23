function login() {
  // get the input matric number value
  var matricNo = document.getElementById("matricNo").value;

  // check if matric number matches any of the valid students
  if (matricNo === "16/CO/123" || matricNo === "16/CO/124" || matricNo === "16/CO/125" || matricNo === "16/CO/126" || matricNo === "16/CO/127" || matricNo === "16/CO/128" || matricNo === "16/CO/129" || matricNo === "16/CO/130" || matricNo === "16/CO/131" || matricNo === "16/CO/132") {
    // if matric number matches, redirect to the next page
    window.location.href = "page2.html";
  } else {
    // if matric number does not match, display error message
    alert("Invalid matric number. Please try again.");
  }
}
