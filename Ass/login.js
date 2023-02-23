function login() {
    // get the input matric number value
    var matricNo = document.getElementById("matricNo").value;

    // check if matric number matches any of the valid students
    if (matricNo === "16/CO/123" || matricNo === "16/CO/124" || matricNo === "16/CO/125" || matricNo === "16/CO/126" || matricNo === "16/CO/127" || matricNo === "16/CO/128" || matricNo === "16/CO/129" || matricNo === "psc/2019/11875" || matricNo === "psc/2019/8034" || matricNo === "Psc/2019/12018") {
        // if matric number matches, redirect to the next page
        window.location.href = "./home-page.html";
    } else {
        // if matric number does not match, display error message
        alert("Invalid Matric number. Please try again...");
        alert("Else Sorry!, You are not among the group member");
    }
}