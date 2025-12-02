document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")
  const nameInput = document.querySelector('.contact-form input[placeholder="Name"]')
  const emailInput = document.querySelector('.contact-form input[placeholder="Email"]')
  const messageInput = document.querySelector(".contact-form textarea")
  const sendButton = document.querySelector(".contact-form button")

  if (contactForm) {
    sendButton.addEventListener("click", (e) => {
      e.preventDefault()

      // Validate form
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showNotification("Please fill in all fields", "error")
        return
      }

      // Submit form data to our backend service
      const result = window.backendService.submitContactForm({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      })

      if (result.success) {
        showNotification("Message sent successfully! We'll get back to you soon.", "success")
        // Clear form
        nameInput.value = ""
        emailInput.value = ""
        messageInput.value = ""
      } else {
        showNotification("Error sending message. Please try again.", "error")
      }
    })
  }

  // Notification function
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
      type === "success" ? "bg-green-500" : "bg-red-500"
    }`
    notification.textContent = message

    // Add to document
    document.body.appendChild(notification)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.add("fade-out")
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 500)
    }, 3000)
  }
})

