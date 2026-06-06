const form = document.querySelector("#ticketForm");
const typeSelect = document.querySelector("#type");
const studentIdContainer = document.querySelector("#studentIdContainer");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const studentId = document.querySelector("#studentId");
const accessCode = document.querySelector("#accessCode");
const output = document.querySelector("#output");

// Show/hide the conditional field based on the selected type
function updateConditionalFields() {
  const value = typeSelect.value;

  if (value === "student") {
    studentIdContainer.hidden = false;
    studentId.required = true;

    accessCodeContainer.hidden = true;
    accessCode.required = false;
    accessCode.value = "";
  } else if (value === "guest") {
    accessCodeContainer.hidden = false;
    accessCode.required = true;

    studentIdContainer.hidden = true;
    studentId.required = false;
    studentId.value = "";
  } else {
    studentIdContainer.hidden = true;
    studentId.required = false;
    studentId.value = "";

    accessCodeContainer.hidden = true;
    accessCode.required = false;
    accessCode.value = "";
  }
}

typeSelect.addEventListener("change", updateConditionalFields);
updateConditionalFields();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.eventDate.value;

  // Student ID must be exactly 9 digits
  if (type === "student") {
    const idValue = studentId.value.trim();
    if (!/^\d{9}$/.test(idValue)) {
      output.textContent = "Student I# must be 9 digits";
      return;
    }
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Type: ${type.charAt(0).toUpperCase() + type.slice(1)}</p>
    <p>Event Date: ${eventDate}</p>
    ${type === "student" ? `<p>Student I#: ${studentId.value.trim()}</p>` : ""}
    ${type === "guest" ? `<p>Access Code: ${accessCode.value.trim()}</p>` : ""}
  `;

  form.reset();
  updateConditionalFields();
});
