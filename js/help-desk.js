document.addEventListener("DOMContentLoaded", () => {
  // Check if we're on the help desk page
  const helpDeskPage = document.querySelector("body > section > div > .help-chat")

  if (helpDeskPage) {
    const chatInput = document.getElementById("chat-input")
    const chatMessages = document.getElementById("chat-messages")

    if (chatInput && chatMessages) {
      // Handle sending messages
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && chatInput.value.trim()) {
          const message = chatInput.value.trim()

          // Add user message to UI
          const userMessage = document.createElement("div")
          userMessage.className = "chat-bubble bg-gray-600 p-3 rounded-lg mb-3 text-lg text-right"
          userMessage.textContent = message
          chatMessages.appendChild(userMessage)

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

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight
          }, 800)
        }
      })
    }
  }
})

