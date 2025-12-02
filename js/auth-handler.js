document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the signup page
  const signupForm = document.querySelector(".signup-form")
  const paymentForm = document.getElementById("payment-form")

  if (signupForm && paymentForm) {
    const signupBtn = document.getElementById("signup-btn")

    signupBtn.addEventListener("click", () => {
      if (signupBtn.disabled) return

      // Get form data
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const password = document.getElementById("password").value.trim()

      // Get payment data
      const planTitle = document.getElementById("plan-title").textContent
      const cardNumber = document.getElementById("card-number").value.replace(/\s/g, "")
      const cardFirstName = document.getElementById("card-first-name").value.trim()
      const cardLastName = document.getElementById("card-last-name").value.trim()

      // Process signup
      const result = window.backendService.registerUser({
        name,
        email,
        password,
        plan: planTitle.toLowerCase(),
        paymentInfo: {
          lastFour: cardNumber.slice(-4),
        },
      })

      if (result.success) {
        // Process payment
        const paymentResult = window.backendService.processPayment({
          amount: planTitle === "Pro" ? 19.99 : 9.99,
          currency: "CAD",
          description: `Canadapp ${planTitle} Plan`,
          cardNumber,
          cardName: `${cardFirstName} ${cardLastName}`,
        })

        if (paymentResult.success) {
          showNotification("Account created successfully!", "success")
          // Redirect to dashboard
          setTimeout(() => {
            window.location.href = "dashboard.html"
          }, 1500)
        } else {
          showNotification(paymentResult.message, "error")
        }
      } else {
        showNotification(result.message, "error")
      }
    })
  }

  // Check if we need to handle login (could be added to index.html)
  const loginForm = document.getElementById("login-form")
  if (loginForm) {
    const loginBtn = loginForm.querySelector('button[type="submit"]')

    loginBtn.addEventListener("click", (e) => {
      e.preventDefault()

      const email = loginForm.querySelector('input[type="email"]').value.trim()
      const password = loginForm.querySelector('input[type="password"]').value.trim()

      const result = window.backendService.loginUser(email, password)

      if (result.success) {
        showNotification("Login successful!", "success")
        // Redirect to dashboard
        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1500)
      } else {
        showNotification(result.message, "error")
      }
    })
  }

  // Check if user is logged in on protected pages
  const dashboardPage = document.querySelector("body > nav + section > #home.content")
  if (dashboardPage) {
    const currentUser = window.backendService.getCurrentUser()
    if (!currentUser) {
      // Redirect to login if not logged in
      window.location.href = "index.html"
    }
  }

  // Handle logout
  const logoutBtn = document.querySelector('a[onclick="signOut()"]')
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.backendService.logoutUser()
      window.location.href = "index.html"
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

