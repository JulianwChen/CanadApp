// Backend Service for Canadapp
// This simulates a backend using localStorage for data persistence

class BackendService {
  constructor() {
    this.initializeStorage()
  }

  // Initialize storage with default values if empty
  initializeStorage() {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]))
    }

    if (!localStorage.getItem("contacts")) {
      localStorage.setItem("contacts", JSON.stringify([]))
    }

    if (!localStorage.getItem("applications")) {
      localStorage.setItem("applications", JSON.stringify([]))
    }

    if (!localStorage.getItem("chatHistory")) {
      localStorage.setItem("chatHistory", JSON.stringify({}))
    }

    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify(null))
    }
  }

  // User Management
  registerUser(userData) {
    const users = this.getUsers()

    // Check if email already exists
    if (users.some((user) => user.email === userData.email)) {
      return { success: false, message: "Email already registered" }
    }

    // Add user with generated ID
    const newUser = {
      ...userData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      applications: [],
      hasPaidForChat: userData.plan === "pro" ? true : false,
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("currentUser", JSON.stringify(newUser))

    return { success: true, user: newUser }
  }

  loginUser(email, password) {
    const users = this.getUsers()
    const user = users.find((user) => user.email === email && user.password === password)

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
      return { success: true, user }
    } else {
      return { success: false, message: "Invalid email or password" }
    }
  }

  logoutUser() {
    localStorage.setItem("currentUser", JSON.stringify(null))
    return { success: true }
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"))
  }

  updateUserProfile(userId, profileData) {
    const users = this.getUsers()
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {
      return { success: false, message: "User not found" }
    }

    // Update user data
    users[userIndex] = { ...users[userIndex], ...profileData }
    localStorage.setItem("users", JSON.stringify(users))

    // Update current user if it's the same user
    const currentUser = this.getCurrentUser()
    if (currentUser && currentUser.id === userId) {
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
    }

    return { success: true, user: users[userIndex] }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || []
  }

  // Contact Form
  submitContactForm(contactData) {
    const contacts = this.getContacts()
    const newContact = {
      ...contactData,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      status: "new",
    }

    contacts.push(newContact)
    localStorage.setItem("contacts", JSON.stringify(contacts))

    return { success: true, contact: newContact }
  }

  getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || []
  }

  // Applications
  addApplication(userId, applicationData) {
    const users = this.getUsers()
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {
      return { success: false, message: "User not found" }
    }

    const applications = this.getApplications()
    const newApplication = {
      ...applicationData,
      id: this.generateId(),
      userId,
      createdAt: new Date().toISOString(),
      status: "draft",
      responses: {},
    }

    // Add to global applications
    applications.push(newApplication)
    localStorage.setItem("applications", JSON.stringify(applications))

    // Add reference to user's applications
    users[userIndex].applications.push(newApplication.id)
    localStorage.setItem("users", JSON.stringify(users))

    // Update current user if it's the same user
    const currentUser = this.getCurrentUser()
    if (currentUser && currentUser.id === userId) {
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
    }

    return { success: true, application: newApplication }
  }

  updateApplication(applicationId, updateData) {
    const applications = this.getApplications()
    const appIndex = applications.findIndex((app) => app.id === applicationId)

    if (appIndex === -1) {
      return { success: false, message: "Application not found" }
    }

    // Update application data
    applications[appIndex] = { ...applications[appIndex], ...updateData }
    localStorage.setItem("applications", JSON.stringify(applications))

    return { success: true, application: applications[appIndex] }
  }

  deleteApplication(userId, applicationId) {
    // Remove from global applications
    const applications = this.getApplications()
    const filteredApps = applications.filter((app) => app.id !== applicationId)
    localStorage.setItem("applications", JSON.stringify(filteredApps))

    // Remove reference from user
    const users = this.getUsers()
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex !== -1) {
      users[userIndex].applications = users[userIndex].applications.filter((id) => id !== applicationId)
      localStorage.setItem("users", JSON.stringify(users))

      // Update current user if it's the same user
      const currentUser = this.getCurrentUser()
      if (currentUser && currentUser.id === userId) {
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
      }
    }

    return { success: true }
  }

  getUserApplications(userId) {
    const applications = this.getApplications()
    return applications.filter((app) => app.userId === userId)
  }

  getApplications() {
    return JSON.parse(localStorage.getItem("applications")) || []
  }

  // Chat functionality
  saveChatMessage(userId, message, isUser = true) {
    const chatHistory = this.getChatHistory()

    if (!chatHistory[userId]) {
      chatHistory[userId] = []
    }

    chatHistory[userId].push({
      content: message,
      timestamp: new Date().toISOString(),
      isUser,
    })

    localStorage.setItem("chatHistory", JSON.stringify(chatHistory))

    return { success: true }
  }

  getChatHistory(userId) {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || {}
    return userId ? chatHistory[userId] || [] : chatHistory
  }

  // Payment processing (simulated)
  processPayment(paymentData) {
    // In a real app, this would call a payment gateway API
    // For this demo, we'll simulate a successful payment

    const success = Math.random() > 0.1 // 90% success rate

    if (success) {
      // If payment is for chat access, update user
      if (paymentData.type === "chat_access") {
        const currentUser = this.getCurrentUser()
        if (currentUser) {
          this.updateUserProfile(currentUser.id, { hasPaidForChat: true })
        }
      }

      return {
        success: true,
        transactionId: this.generateId(),
        timestamp: new Date().toISOString(),
      }
    } else {
      return {
        success: false,
        message: "Payment processing failed. Please try again.",
      }
    }
  }

  // AI Chat responses (simulated)
  getAIResponse(message) {
    // Simple keyword-based responses
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("deadline")) {
      return "University deadlines vary. For example, the University of Toronto often sets its application deadline around January 15 for the fall term. Want specifics for another school?"
    } else if (lowerMessage.includes("gpa")) {
      return "GPA requirements differ by program. McGill's Medicine program typically requires a 3.8+, while Waterloo's Engineering might need a 3.5+. Which program are you curious about?"
    } else if (lowerMessage.includes("ranking")) {
      return "Rankings shift annually, but UBC's Computer Science is consistently top 5 in Canada, and U of T often leads in research. What program or university interests you?"
    } else if (lowerMessage.includes("outcome") || lowerMessage.includes("jobs")) {
      return "Graduate outcomes depend on the field. Waterloo Engineering grads often land tech jobs with salaries around $70K CAD starting, while Queen's Commerce grads excel in finance. What career path are you exploring?"
    } else if (lowerMessage.includes("tour") || lowerMessage.includes("campus")) {
      return "Campus tours aren't live here, but I can tell you UBC has a stunning coastal vibe, and U of T's downtown Toronto location is historic. Want details on a specific campus?"
    } else if (lowerMessage.includes("how") && lowerMessage.includes("apply")) {
      return "To apply, select a university and program in the Apply section, fill out the supplemental questions, and submit. Need help with a specific step?"
    } else if (lowerMessage === "hi" || lowerMessage === "hello") {
      return "Hey there! How can I help you with Canadapp today?"
    } else {
      return "I'm here to help with your university application journey. You can ask me about deadlines, requirements, rankings, or how to use Canadapp. What would you like to know?"
    }
  }

  // Utility functions
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
}

// Create a global instance
window.backendService = new BackendService()

