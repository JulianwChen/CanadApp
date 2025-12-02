// Update the script-includes.js file to include university-lookup.js

// Function to add a script to the page
function addScript(src) {
  const script = document.createElement("script")
  script.src = src
  document.head.appendChild(script)
}

// Add page-specific scripts based on current page
const currentPage = window.location.pathname.split("/").pop() || "index.html"

// Common scripts for all pages
addScript("js/chat-widget.js")

// Page-specific scripts
if (currentPage === "contact.html") {
  addScript("js/contact-handler.js")
} else if (currentPage === "signup.html") {
  addScript("js/auth-handler.js")
} else if (currentPage === "dashboard.html") {
  addScript("js/dashboard-handler.js")
} else if (currentPage === "help-desk.html") {
  addScript("js/help-desk.js")
} else if (currentPage === "university-lookup.html") {
  addScript("js/university-data.js")
  addScript("js/university-lookup.js")
}

