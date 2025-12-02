document.addEventListener("DOMContentLoaded", () => {
  const universityList = document.getElementById("university-list")
  const addUniversityButton = document.getElementById("add-university")

  async function fetchUniversities() {
    const response = await fetch("/api/universities")
    return await response.json()
  }

  async function renderUniversities() {
    const universities = await fetchUniversities()
    universityList.innerHTML = ""

    universities.forEach((university) => {
      const universityElement = document.createElement("div")
      universityElement.className = "bg-white p-4 rounded shadow"
      universityElement.innerHTML = `
        <h2 class="text-xl font-bold">${university.name}</h2>
        <p>${university.description}</p>
        <button class="edit-university bg-yellow-500 text-white px-2 py-1 rounded mt-2" data-id="${university._id}">Edit</button>
        <button class="delete-university bg-red-500 text-white px-2 py-1 rounded mt-2" data-id="${university._id}">Delete</button>
      `
      universityList.appendChild(universityElement)
    })
  }

  addUniversityButton.addEventListener("click", async () => {
    const name = prompt("Enter university name:")
    const description = prompt("Enter university description:")

    if (name && description) {
      await fetch("/api/admin/universities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description }),
      })
      renderUniversities()
    }
  })

  universityList.addEventListener("click", async (e) => {
    if (e.target.classList.contains("edit-university")) {
      const id = e.target.dataset.id
      const name = prompt("Enter new university name:")
      const description = prompt("Enter new university description:")

      if (name && description) {
        await fetch(`/api/admin/universities/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, description }),
        })
        renderUniversities()
      }
    } else if (e.target.classList.contains("delete-university")) {
      const id = e.target.dataset.id
      if (confirm("Are you sure you want to delete this university?")) {
        await fetch(`/api/admin/universities/${id}`, {
          method: "DELETE",
        })
        renderUniversities()
      }
    }
  })

  renderUniversities()
})

