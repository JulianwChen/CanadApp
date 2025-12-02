// This file dynamically adds all required script tags to each page
document.addEventListener("DOMContentLoaded", () => {
  // Add backend service first
  const backendScript = document.createElement("script")
  backendScript.src = "js/backend-service.js"
  document.body.appendChild(backendScript)

  // Wait for backend service to load before adding other scripts
  backendScript.onload = () => {
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
    }
  }

  function addScript(src) {
    const script = document.createElement("script")
    script.src = src
    document.body.appendChild(script)
  }
})

