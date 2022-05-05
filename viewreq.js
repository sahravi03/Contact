let requestContainer = document.getElementById("request-container");
let RequestList = getRequestListFromLocalStorage();

function getRequestListFromLocalStorage() {
  let stringifiedRequestList = localStorage.getItem("RequestList");
  let parsedRequestList = JSON.parse(stringifiedRequestList);
  if (parsedRequestList === null) {
    return [];
  } else {
    return parsedRequestList;
  }
}

function onDeleteRequest(requestId) {
  let requestElement = document.getElementById(requestId);
  requestContainer.removeChild(requestElement);
  let deleteElementIndex = RequestList.findIndex(function (eachRequest) {
    let eachRequestId = "request" + eachRequest.uniqueNo;
    if (eachRequestId === requestId) {
      return true;
    } else {
      return false;
    }
  });
  console.log(deleteElementIndex);
  RequestList.splice(deleteElementIndex, 1);
  console.log(RequestList);
  localStorage.setItem("RequestList", JSON.stringify(RequestList));
}

function createAndAppendRequest(RequestItem) {
  let requestId = "request" + RequestItem.uniqueNo;
  console.log(requestId);

  let detailsContainer = document.createElement("li");
  detailsContainer.classList.add("details-container");
  detailsContainer.id = requestId;
  requestContainer.appendChild(detailsContainer);

  let profileContainer = document.createElement("div");
  profileContainer.classList.add("profile-container");
  detailsContainer.appendChild(profileContainer);

  let nameEl = document.createElement("h1");
  nameEl.textContent = RequestItem.Name;
  nameEl.classList.add("name");
  profileContainer.appendChild(nameEl);

  let contactDetailsContainer = document.createElement("div");
  profileContainer.appendChild(contactDetailsContainer);

  let emailEl = document.createElement("p");
  emailEl.textContent = RequestItem.Email;
  emailEl.classList.add("text-content");
  contactDetailsContainer.appendChild(emailEl);

  let numberEl = document.createElement("p");
  numberEl.textContent = RequestItem.Mobile;
  numberEl.classList.add("text-content");
  contactDetailsContainer.appendChild(numberEl);

  let messageHeading = document.createElement("h1");
  messageHeading.textContent = "Message";
  messageHeading.classList.add("msg-heading");
  detailsContainer.appendChild(messageHeading);

  let messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");
  detailsContainer.appendChild(messageContainer);

  let messageEl = document.createElement("p");
  messageEl.textContent = RequestItem.Message;
  messageEl.classList.add("message");
  messageContainer.appendChild(messageEl);

  let dateEl = document.createElement("p");
  dateEl.textContent = RequestItem.Date;
  dateEl.classList.add("date");
  contactDetailsContainer.appendChild(dateEl);

  let approveBtn = document.createElement("button");
  approveBtn.classList.add("button", "btn", "btn-primary");
  approveBtn.textContent = "Approve";
  contactDetailsContainer.appendChild(approveBtn);

  let dltBtn = document.createElement("button");
  dltBtn.classList.add("button", "btn", "btn-primary");
  dltBtn.textContent = "Delete";
  contactDetailsContainer.appendChild(dltBtn);

  dltBtn.onclick = function () {
    onDeleteRequest(requestId);
  };
}

for (let eachRequest of RequestList) {
  createAndAppendRequest(eachRequest);
  console.log(eachRequest);
}
