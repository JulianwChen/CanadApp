document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the dashboard page
  const dashboardPage = document.querySelector("body > nav + section > #home.content")

  if (dashboardPage) {
    const currentUser = window.backendService.getCurrentUser()

    if (!currentUser) {
      // Redirect to login if not logged in
      window.location.href = "index.html"
      return
    }

    // Update welcome message
    const welcomeHeading = document.querySelector("#home h2")
    if (welcomeHeading) {
      welcomeHeading.textContent = `Welcome to Your Canadapp Journey, ${currentUser.name}!`
    }

    // Load user's profile data
    const nameInput = document.getElementById("name")
    const birthdayInput = document.getElementById("birthday")
    const emailInput = document.getElementById("email")
    const provinceSelect = document.getElementById("province")
    const gradesTextarea = document.getElementById("grades")

    if (nameInput) nameInput.value = currentUser.name || ""
    if (emailInput) emailInput.value = currentUser.email || ""
    if (birthdayInput && currentUser.birthday) birthdayInput.value = currentUser.birthday
    if (provinceSelect && currentUser.province) provinceSelect.value = currentUser.province
    if (gradesTextarea && currentUser.grades) gradesTextarea.value = currentUser.grades

    // Handle profile save
    const saveProfileBtn = document.querySelector("#profile .btn-gradient")
    if (saveProfileBtn) {
      saveProfileBtn.addEventListener("click", () => {
        const profileData = {
          name: nameInput.value.trim(),
          birthday: birthdayInput.value.trim(),
          province: provinceSelect.value,
          grades: gradesTextarea.value.trim(),
        }

        const result = window.backendService.updateUserProfile(currentUser.id, profileData)

        if (result.success) {
          showNotification("Profile updated successfully!", "success")
        } else {
          showNotification("Error updating profile. Please try again.", "error")
        }
      })
    }

    // Load user's applications
    loadUserApplications()

    // Handle adding new program
    const addProgramBtn = document.querySelector("#apply .btn-gradient")
    if (addProgramBtn) {
      addProgramBtn.addEventListener("click", () => {
        const university = document.getElementById("university").value
        const program = document.getElementById("program").value

        // Check for duplicates
        const applications = window.backendService.getUserApplications(currentUser.id)
        const isDuplicate = applications.some((app) => app.university === university && app.program === program)

        if (isDuplicate) {
          showNotification("This program is already added!", "error")
          return
        }

        // Add application
        const result = window.backendService.addApplication(currentUser.id, {
          university,
          program,
          status: "Draft",
        })

        if (result.success) {
          showNotification("Program added successfully!", "success")
          loadUserApplications()
        } else {
          showNotification("Error adding program. Please try again.", "error")
        }
      })
    }

    // Handle chat access
    updateChatAccess()

    // Handle unlocking chat
    const unlockChatBtn = document.querySelector(".paywall-btn")
    if (unlockChatBtn) {
      unlockChatBtn.addEventListener("click", () => {
        const paymentResult = window.backendService.processPayment({
          amount: 10.0,
          currency: "CAD",
          description: "Canadapp Chat Access",
          type: "chat_access",
        })

        if (paymentResult.success) {
          showNotification("Chat access unlocked successfully!", "success")
          setTimeout(() => {
            updateChatAccess()
          }, 1500)
        } else {
          showNotification(paymentResult.message, "error")
        }
      })
    }

    // Handle sending chat messages
    const chatInput = document.getElementById("chat-input")
    const sendChatBtn = document.querySelector(".chat-input-area .btn-gradient")

    if (sendChatBtn) {
      sendChatBtn.addEventListener("click", sendChatMessage)
    }

    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendChatMessage()
        }
      })
    }
  }

  // Function to load user applications
  function loadUserApplications() {
    const currentUser = window.backendService.getCurrentUser()
    if (!currentUser) return

    const applications = window.backendService.getUserApplications(currentUser.id)

    // Update application lists
    const homeList = document.getElementById("selected-programs")
    const applyList = document.getElementById("current-programs")

    if (homeList) {
      homeList.innerHTML = ""

      if (applications.length === 0) {
        homeList.innerHTML = '<li class="text-lg">No applications added yet.</li>'
      } else {
        applications.forEach((app, index) => {
          const li = document.createElement("li")
          li.innerHTML = `<a onclick="showSchoolPage(${index})">${app.program} at ${app.university} (${app.status})</a>`
          homeList.appendChild(li)
        })
      }
    }

    if (applyList) {
      applyList.innerHTML = ""

      applications.forEach((app, index) => {
        const li = document.createElement("li")
        li.innerHTML = `${app.program} at ${app.university} <button class="delete-btn" onclick="deleteProgram('${app.id}')">Delete</button> <a onclick="customizeProgram('${app.id}')" class="ml-4">Customize</a>`
        applyList.appendChild(li)
      })
    }

    // Add global functions for application management
    window.deleteProgram = (appId) => {
      const currentUser = window.backendService.getCurrentUser()
      if (!currentUser) return

      const result = window.backendService.deleteApplication(currentUser.id, appId)

      if (result.success) {
        showNotification("Program deleted successfully!", "success")
        loadUserApplications()
      } else {
        showNotification("Error deleting program. Please try again.", "error")
      }
    }

    window.customizeProgram = (appId) => {
      const currentUser = window.backendService.getCurrentUser()
      if (!currentUser) return

      const applications = window.backendService.getUserApplications(currentUser.id)
      const app = applications.find((a) => a.id === appId)

      if (!app) return

      // Generate questions based on university
      let questions = []
      if (app.university === "University of Toronto") {
        questions = [
          "Tell us about a personal goal you have set for yourself, and how long you have been working to achieve this goal.",
          "Describe an example of a situation where you took on a leadership role.",
          "What is a big or unexpected challenge you have faced?",
        ]
      } else if (app.university === "McMaster University") {
        questions = [
          "Tell us about a time management strategy you used.",
          "Give us an example of a time you acted with integrity.",
          "How do you create a balance for yourself when working in a stressful environment?",
        ]
      } else if (app.university === "Queen's University") {
        questions = [
          "Why are you interested in this program at Queen's?",
          "Describe a significant extracurricular activity and its impact on you.",
          "What skills do you bring to this program?",
        ]
      } else if (app.university === "University of British Columbia (UBC)") {
        questions = [
          "Tell us about who you are. How would your family or friends describe you?",
          "Tell us more about one activity that is important to you and what you learned.",
          "Describe the kind of community you want to be part of at UBC.",
        ]
      } else {
        questions = [
          "Why are you interested in this program?",
          "Describe a challenge you've overcome.",
          "What are your career goals?",
        ]
      }

      const schoolPage = document.getElementById("school-page")

      if (app.status === "Submitted") {
        schoolPage.innerHTML = `
          <h2 class="text-3xl font-semibold mb-6">${app.program} at ${app.university}</h2>
          <h3 class="text-2xl font-semibold mb-4">Your Responses</h3>
          <label class="text-lg">${questions[0]}</label>
          <p class="text-lg p-2 bg-gray-700 rounded">${app.responses?.q1 || "Not answered"}</p>
          <label class="text-lg">${questions[1]}</label>
          <p class="text-lg p-2 bg-gray-700 rounded">${app.responses?.q2 || "Not answered"}</p>
          <label class="text-lg">${questions[2]}</label>
          <p class="text-lg p-2 bg-gray-700 rounded">${app.responses?.q3 || "Not answered"}</p>
          <div class="btn-container mt-6">
            <p class="text-red-500 text-lg">This application is locked (Submitted).</p>
          </div>
        `
      } else {
        schoolPage.innerHTML = `
          <h2 class="text-3xl font-semibold mb-6">${app.program} at ${app.university}</h2>
          <h3 class="text-2xl font-semibold mb-4">Requirements</h3>
          <ul class="text-lg">
            <li>Minimum GPA: 3.0 (varies by program)</li>
            <li>Prerequisite Courses: e.g., Math 12, English 12</li>
            <li>Application Fee: $150 CAD</li>
          </ul>
          <h3 class="text-2xl font-semibold mt-6 mb-4">Supplemental Questions</h3>
          <label class="text-lg">${questions[0]}</label>
          <textarea id="q1" placeholder="Your answer...">${app.responses?.q1 || ""}</textarea>
          <label class="text-lg">${questions[1]}</label>
          <textarea id="q2" placeholder="Your answer...">${app.responses?.q2 || ""}</textarea>
          <label class="text-lg">${questions[2]}</label>
          <textarea id="q3" placeholder="Your answer...">${app.responses?.q3 || ""}</textarea>
          <div class="btn-container mt-6">
            <button class="save-btn" onclick="saveAndExit('${app.id}')">Save & Exit</button>
            <button class="submit-btn" onclick="submitProgram('${app.id}')">Submit Application</button>
          </div>
        `
      }

      // Show school page
      document.querySelectorAll(".content").forEach((page) => page.classList.remove("active"))
      schoolPage.classList.add("active")
    }

    window.saveAndExit = (appId) => {
      const currentUser = window.backendService.getCurrentUser()
      if (!currentUser) return

      const q1 = document.getElementById("q1").value
      const q2 = document.getElementById("q2").value
      const q3 = document.getElementById("q3").value

      const result = window.backendService.updateApplication(appId, {
        status: "Saved",
        responses: { q1, q2, q3 },
      })

      if (result.success) {
        showNotification("Responses saved successfully!", "success")
        setTimeout(() => {
          document.querySelectorAll(".content").forEach((page) => page.classList.remove("active"))
          document.getElementById("apply").classList.add("active")
          loadUserApplications()
        }, 1500)
      } else {
        showNotification("Error saving responses. Please try again.", "error")
      }
    }

    window.submitProgram = (appId) => {
      const currentUser = window.backendService.getCurrentUser()
      if (!currentUser) return

      const q1 = document.getElementById("q1").value
      const q2 = document.getElementById("q2").value
      const q3 = document.getElementById("q3").value

      // Validate responses
      if (!q1.trim() || !q2.trim() || !q3.trim()) {
        showNotification("Please answer all supplemental questions.", "error")
        return
      }

      const result = window.backendService.updateApplication(appId, {
        status: "Submitted",
        responses: { q1, q2, q3 },
        submittedAt: new Date().toISOString(),
      })

      if (result.success) {
        showNotification("Application submitted successfully!", "success")
        setTimeout(() => {
          document.querySelectorAll(".content").forEach((page) => page.classList.remove("active"))
          document.getElementById("apply").classList.add("active")
          loadUserApplications()
        }, 1500)
      } else {
        showNotification("Error submitting application. Please try again.", "error")
      }
    }

    window.showSchoolPage = (index) => {
      const currentUser = window.backendService.getCurrentUser()
      if (!currentUser) return

      const applications = window.backendService.getUserApplications(currentUser.id)
      if (applications[index]) {
        window.customizeProgram(applications[index].id)
      }
    }
  }

  // Function to update chat access
  function updateChatAccess() {
    const currentUser = window.backendService.getCurrentUser()
    if (!currentUser) return

    const paywallDiv = document.getElementById("chat-paywall")
    const interfaceDiv = document.getElementById("chat-interface")

    if (!paywallDiv || !interfaceDiv) return

    if (currentUser.hasPaidForChat) {
      paywallDiv.style.display = "none"
      interfaceDiv.style.display = "flex"

      // Load chat history
      const chatMessages = document.getElementById("chat-messages")
      if (chatMessages) {
        const history = window.backendService.getChatHistory(currentUser.id)

        chatMessages.innerHTML = ""

        if (history.length === 0) {
          chatMessages.innerHTML =
            '<div class="chat-bubble bg-indigo-500 p-3 rounded-lg mb-3 text-lg fade-in">Ask me anything about Canadian universities and programs!</div>'
        } else {
          history.forEach((msg) => {
            const messageDiv = document.createElement("div")
            messageDiv.className = msg.isUser
              ? "chat-bubble bg-gray-600 p-3 rounded-lg mb-3 text-lg text-right"
              : "chat-bubble bg-indigo-500 p-3 rounded-lg mb-3 text-lg"
            messageDiv.textContent = msg.content
            chatMessages.appendChild(messageDiv)
          })
        }

        chatMessages.scrollTop = chatMessages.scrollHeight
      }
    } else {
      paywallDiv.style.display = "block"
      interfaceDiv.style.display = "none"
    }
  }

  // Function to send chat message
  function sendChatMessage() {
    const currentUser = window.backendService.getCurrentUser()
    if (!currentUser) return

    const chatInput = document.getElementById("chat-input")
    const chatMessages = document.getElementById("chat-messages")

    if (!chatInput || !chatMessages) return

    const message = chatInput.value.trim()
    if (!message) return

    // Add user message to UI
    const userMessage = document.createElement("div")
    userMessage.className = "chat-bubble bg-gray-600 p-3 rounded-lg mb-3 text-lg text-right"
    userMessage.textContent = message
    chatMessages.appendChild(userMessage)

    // Save user message
    window.backendService.saveChatMessage(currentUser.id, message, true)

    // Clear input
    chatInput.value = ""

    // Get AI response
    const aiResponse = window.backendService.getAIResponse(message)

    // Add AI response after a short delay
    setTimeout(() => {
      const aiMessage = document.createElement("div")
      aiMessage.className = "chat-bubble bg-indigo-500 p-3 rounded-lg mb-3 text-lg"
      aiMessage.textContent = aiResponse
      chatMessages.appendChild(aiMessage)

      // Save AI message
      window.backendService.saveChatMessage(currentUser.id, aiResponse, false)

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight
    }, 800)
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

