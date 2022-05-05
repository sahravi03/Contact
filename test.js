var myFormEl = document.getElementById("myForm");

var nameEl = document.getElementById("name");
var emailEl = document.getElementById("email");
var mobileNumberEl = document.getElementById("number");
var messageEl = document.getElementById("message");

var submitButton = document.getElementById("button");
var RequestList = getRequestListFromLocalStorage();
var requestCount = RequestList.length;

function getRequestListFromLocalStorage() {
  let stringifiedRequestList = localStorage.getItem("RequestList");
  let parsedRequestList = JSON.parse(stringifiedRequestList);
  if (parsedRequestList === null) {
    return [];
  } else {
    return parsedRequestList;
  }
}

submitButton.onclick = function () {
  const d = new Date();
  let newMsgTime = document.createElement("p");
  newMsgTime = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  requestCount = requestCount + 1;

  let detailsObject = {
    Name: nameEl.value,
    Email: emailEl.value,
    Mobile: mobileNumberEl.value,
    Message: messageEl.value,
    Date: newMsgTime,
    uniqueNo: requestCount,
  };

  console.log(detailsObject);
  RequestList.push(detailsObject);
  localStorage.setItem("RequestList", JSON.stringify(RequestList));
  nameEl.value = "";
  emailEl.value = "";
  mobileNumberEl.value = "";
  messageEl.value = "";
};

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
});
