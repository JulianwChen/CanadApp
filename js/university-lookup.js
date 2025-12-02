import { fetchUniversityData, updateUniversityData, simulateWebScraping } from "./university-data.js"

document.addEventListener("DOMContentLoaded", async () => {
  // Import university data (assuming it's in a separate file)
  // You might need to adjust the path depending on your project structure
  // For example: import universities from './universities.js';
  // If you don't have a separate file, you can define the universities array here:
  const universities = [
    {
      name: "University of Toronto",
      ranking: 1,
      city: "Toronto",
      province: "Ontario",
      description:
        "The University of Toronto is a public research university in Toronto, Ontario, Canada, located on the grounds that surround Queen's Park.",
      acceptanceRate: "43%",
      programs: ["Computer Science", "Engineering", "Medicine"],
      founded: 1827,
      studentPopulation: 97000,
      facultyRatio: "6:1",
      location: "Downtown Toronto",
      tuitionDomestic: "$6,100 CAD",
      tuitionInternational: "$60,220 CAD",
      residenceCost: "$15,000 CAD",
      booksCost: "$2,000 CAD",
      admissionInfo: "Apply online through the OUAC.",
      facilities: "Libraries, labs, sports facilities",
      studentLife: "Vibrant campus life with many clubs and events",
      housing: "On-campus residence available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 1" },
      ],
    },
    {
      name: "University of British Columbia",
      ranking: 2,
      city: "Vancouver",
      province: "British Columbia",
      description:
        "The University of British Columbia is a public research university with campuses in Vancouver and Kelowna, British Columbia.",
      acceptanceRate: "54%",
      programs: ["Arts", "Science", "Business"],
      founded: 1908,
      studentPopulation: 66000,
      facultyRatio: "8:1",
      location: "Vancouver",
      tuitionDomestic: "$5,800 CAD",
      tuitionInternational: "$40,000 CAD",
      residenceCost: "$14,000 CAD",
      booksCost: "$1,800 CAD",
      admissionInfo: "Apply online through the UBC website.",
      facilities: "Museums, gardens, research centers",
      studentLife: "Active student community with various activities",
      housing: "On-campus housing options available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 15" },
      ],
    },
    {
      name: "McGill University",
      ranking: 3,
      city: "Montreal",
      province: "Quebec",
      description: "McGill University is a public research university in Montreal, Quebec, Canada.",
      acceptanceRate: "46%",
      programs: ["Law", "Medicine", "Engineering"],
      founded: 1821,
      studentPopulation: 40000,
      facultyRatio: "10:1",
      location: "Montreal",
      tuitionDomestic: "$2,500 CAD",
      tuitionInternational: "$25,000 CAD",
      residenceCost: "$12,000 CAD",
      booksCost: "$1,500 CAD",
      admissionInfo: "Apply online through the McGill website.",
      facilities: "Libraries, museums, research institutes",
      studentLife: "Diverse student body with many clubs and organizations",
      housing: "On-campus residences available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 1" },
      ],
    },
    {
      name: "McMaster University",
      ranking: 4,
      city: "Hamilton",
      province: "Ontario",
      description: "McMaster University is a public research university in Hamilton, Ontario, Canada.",
      acceptanceRate: "60%",
      programs: ["Health Sciences", "Engineering", "Business"],
      founded: 1887,
      studentPopulation: 33000,
      facultyRatio: "12:1",
      location: "Hamilton",
      tuitionDomestic: "$6,000 CAD",
      tuitionInternational: "$35,000 CAD",
      residenceCost: "$13,000 CAD",
      booksCost: "$1,700 CAD",
      admissionInfo: "Apply online through the OUAC.",
      facilities: "Laboratories, libraries, athletic facilities",
      studentLife: "Active student life with various clubs and events",
      housing: "On-campus residence available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 1" },
      ],
    },
    {
      name: "University of Alberta",
      ranking: 5,
      city: "Edmonton",
      province: "Alberta",
      description: "The University of Alberta is a public research university located in Edmonton, Alberta, Canada.",
      acceptanceRate: "65%",
      programs: ["Engineering", "Science", "Arts"],
      founded: 1908,
      studentPopulation: 40000,
      facultyRatio: "11:1",
      location: "Edmonton",
      tuitionDomestic: "$5,500 CAD",
      tuitionInternational: "$30,000 CAD",
      residenceCost: "$12,500 CAD",
      booksCost: "$1,600 CAD",
      admissionInfo: "Apply online through the UAlberta website.",
      facilities: "Research facilities, libraries, sports complex",
      studentLife: "Vibrant campus life with many student groups",
      housing: "On-campus housing options available",
      deadlines: [
        { program: "Undergraduate", date: "March 1" },
        { program: "Graduate", date: "January 15" },
      ],
    },
    {
      name: "University of Waterloo",
      ranking: 6,
      city: "Waterloo",
      province: "Ontario",
      description: "The University of Waterloo is a public research university in Waterloo, Ontario, Canada.",
      acceptanceRate: "53%",
      programs: ["Engineering", "Computer Science", "Mathematics"],
      founded: 1957,
      studentPopulation: 42000,
      facultyRatio: "13:1",
      location: "Waterloo",
      tuitionDomestic: "$6,200 CAD",
      tuitionInternational: "$42,000 CAD",
      residenceCost: "$14,000 CAD",
      booksCost: "$1,900 CAD",
      admissionInfo: "Apply online through the OUAC.",
      facilities: "Innovation centers, research labs, athletic facilities",
      studentLife: "Co-op programs and a strong entrepreneurial spirit",
      housing: "On-campus residence available",
      deadlines: [
        { program: "Undergraduate", date: "February 1" },
        { program: "Graduate", date: "January 1" },
      ],
    },
    {
      name: "Western University",
      ranking: 7,
      city: "London",
      province: "Ontario",
      description: "Western University is a public research university in London, Ontario, Canada.",
      acceptanceRate: "58%",
      programs: ["Business", "Law", "Medicine"],
      founded: 1878,
      studentPopulation: 38000,
      facultyRatio: "14:1",
      location: "London",
      tuitionDomestic: "$6,100 CAD",
      tuitionInternational: "$38,000 CAD",
      residenceCost: "$13,500 CAD",
      booksCost: "$1,800 CAD",
      admissionInfo: "Apply online through the OUAC.",
      facilities: "Libraries, research centers, sports facilities",
      studentLife: "Active campus life with many clubs and events",
      housing: "On-campus residence available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 15" },
      ],
    },
    {
      name: "University of Calgary",
      ranking: 8,
      city: "Calgary",
      province: "Alberta",
      description: "The University of Calgary is a public research university located in Calgary, Alberta, Canada.",
      acceptanceRate: "62%",
      programs: ["Engineering", "Business", "Science"],
      founded: 1966,
      studentPopulation: 35000,
      facultyRatio: "15:1",
      location: "Calgary",
      tuitionDomestic: "$5,600 CAD",
      tuitionInternational: "$32,000 CAD",
      residenceCost: "$13,000 CAD",
      booksCost: "$1,700 CAD",
      admissionInfo: "Apply online through the UCalgary website.",
      facilities: "Research labs, libraries, athletic facilities",
      studentLife: "Vibrant campus life with many student groups",
      housing: "On-campus housing options available",
      deadlines: [
        { program: "Undergraduate", date: "March 1" },
        { program: "Graduate", date: "January 15" },
      ],
    },
    {
      name: "Queen's University",
      ranking: 9,
      city: "Kingston",
      province: "Ontario",
      description: "Queen's University is a public research university in Kingston, Ontario, Canada.",
      acceptanceRate: "55%",
      programs: ["Arts", "Science", "Engineering"],
      founded: 1841,
      studentPopulation: 25000,
      facultyRatio: "16:1",
      location: "Kingston",
      tuitionDomestic: "$6,300 CAD",
      tuitionInternational: "$40,000 CAD",
      residenceCost: "$14,000 CAD",
      booksCost: "$1,800 CAD",
      admissionInfo: "Apply online through the OUAC.",
      facilities: "Libraries, research centers, sports facilities",
      studentLife: "Active campus life with many clubs and events",
      housing: "On-campus residence available",
      deadlines: [
        { program: "Undergraduate", date: "January 15" },
        { program: "Graduate", date: "December 15" },
      ],
    },
    {
      name: "Dalhousie University",
      ranking: 10,
      city: "Halifax",
      province: "Nova Scotia",
      description: "Dalhousie University is a public research university in Halifax, Nova Scotia, Canada.",
      acceptanceRate: "70%",
      programs: ["Law", "Medicine", "Science"],
      founded: 1818,
      studentPopulation: 20000,
      facultyRatio: "17:1",
      location: "Halifax",
      tuitionDomestic: "$7,000 CAD",
      tuitionInternational: "$35,000 CAD",
      residenceCost: "$12,000 CAD",
      booksCost: "$1,500 CAD",
      admissionInfo: "Apply online through the Dalhousie website.",
      facilities: "Libraries, research centers, athletic facilities",
      studentLife: "Vibrant campus life with many student groups",
      housing: "On-campus housing options available",
      deadlines: [
        { program: "Undergraduate", date: "March 15" },
        { program: "Graduate", date: "February 1" },
      ],
    },
  ]

  // DOM elements
  const universitySearch = document.getElementById("university-search")
  const provinceFilter = document.getElementById("province-filter")
  const programFilter = document.getElementById("program-filter")
  const sortFilter = document.getElementById("sort-filter")
  const universityGrid = document.getElementById("university-grid")
  const universityTableBody = document.getElementById("university-table-body")
  const universityTableContainer = document.getElementById("university-table-container")
  const pagination = document.getElementById("pagination")
  const viewToggleBtns = document.querySelectorAll(".view-toggle-btn")
  const universityModal = document.getElementById("university-modal")
  const modalClose = document.getElementById("modal-close")
  const modalApplyBtn = document.getElementById("modal-apply-btn")
  const tabs = document.querySelectorAll(".tab")

  // State
  let currentView = "grid"
  let currentPage = 1
  const itemsPerPage = 9
  let filteredUniversities = []

  // Initialize
  await renderUniversities()
  setupEventListeners()

  // Setup event listeners
  function setupEventListeners() {
    // Search and filters
    universitySearch.addEventListener("input", handleFiltersChange)
    provinceFilter.addEventListener("change", handleFiltersChange)
    programFilter.addEventListener("change", handleFiltersChange)
    sortFilter.addEventListener("change", handleFiltersChange)

    // View toggle
    viewToggleBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        viewToggleBtns.forEach((b) => b.classList.remove("active"))
        this.classList.add("active")
        currentView = this.dataset.view
        toggleView()
      })
    })

    // Modal
    modalClose.addEventListener("click", closeModal)
    universityModal.addEventListener("click", (e) => {
      if (e.target === universityModal) {
        closeModal()
      }
    })

    // Tabs
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"))
        this.classList.add("active")

        const tabContents = document.querySelectorAll(".tab-content")
        tabContents.forEach((content) => content.classList.remove("active"))

        const activeContent = document.querySelector(`.tab-content[data-tab-content="${this.dataset.tab}"]`)
        if (activeContent) activeContent.classList.add("active")
      })
    })

    // Apply button
    modalApplyBtn.addEventListener("click", () => {
      const universityName = document.getElementById("modal-university-name").textContent
      closeModal()

      // Check if user is logged in
      const currentUser = window.backendService?.getCurrentUser()

      if (currentUser) {
        window.location.href = "dashboard.html?apply=" + encodeURIComponent(universityName)
      } else {
        window.location.href = "signup.html?university=" + encodeURIComponent(universityName)
      }
    })

    // Add a new button for simulating web scraping
    const updateDataBtn = document.getElementById("update-data")
    updateDataBtn.addEventListener("click", async () => {
      updateDataBtn.disabled = true
      updateDataBtn.textContent = "Updating..."
      await simulateWebScraping()
      await renderUniversities()
      updateDataBtn.disabled = false
      updateDataBtn.textContent = "Update Data"
    })
  }

  // Handle filters change
  function handleFiltersChange() {
    currentPage = 1
    filterUniversities()
    renderUniversities()
  }

  // Filter universities based on search and filters
  function filterUniversities() {
    const searchTerm = universitySearch.value.toLowerCase()
    const provinceValue = provinceFilter.value
    const programValue = programFilter.value
    const sortValue = sortFilter.value

    filteredUniversities = universities.filter((university) => {
      // Search filter
      const matchesSearch =
        university.name.toLowerCase().includes(searchTerm) || university.description.toLowerCase().includes(searchTerm)

      // Province filter
      const matchesProvince = !provinceValue || university.province === provinceValue

      // Program filter
      const matchesProgram =
        !programValue ||
        university.programs.some((program) => program.toLowerCase().includes(programValue.replace("-", " ")))

      return matchesSearch && matchesProvince && matchesProgram
    })

    // Sort universities
    sortUniversities(sortValue)
  }

  // Sort universities based on selected sort option
  function sortUniversities(sortValue) {
    switch (sortValue) {
      case "name":
        filteredUniversities.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "tuition-asc":
        filteredUniversities.sort((a, b) => {
          const aValue = Number.parseInt(a.tuitionDomestic.replace(/[^0-9]/g, ""))
          const bValue = Number.parseInt(b.tuitionDomestic.replace(/[^0-9]/g, ""))
          return aValue - bValue
        })
        break
      case "tuition-desc":
        filteredUniversities.sort((a, b) => {
          const aValue = Number.parseInt(a.tuitionDomestic.replace(/[^0-9]/g, ""))
          const bValue = Number.parseInt(b.tuitionDomestic.replace(/[^0-9]/g, ""))
          return bValue - aValue
        })
        break
      case "acceptance":
        filteredUniversities.sort((a, b) => {
          const aValue = Number.parseInt(a.acceptanceRate)
          const bValue = Number.parseInt(b.acceptanceRate)
          return bValue - aValue
        })
        break
      default: // rank
        filteredUniversities.sort((a, b) => a.ranking - b.ranking)
    }
  }

  // Toggle between grid and table views
  function toggleView() {
    if (currentView === "grid") {
      universityGrid.style.display = "grid"
      universityTableContainer.style.display = "none"
    } else {
      universityGrid.style.display = "none"
      universityTableContainer.style.display = "block"
    }
    renderUniversities()
  }

  // Render universities based on current view, filters, and pagination
  async function renderUniversities() {
    const universities = await fetchUniversityData()
    filteredUniversities = universities // Update global variable

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const paginatedUniversities = filteredUniversities.slice(startIndex, endIndex)

    if (currentView === "grid") {
      renderGridView(paginatedUniversities)
    } else {
      renderTableView(paginatedUniversities)
    }

    renderPagination()
  }

  // Render grid view
  function renderGridView(universities) {
    universityGrid.innerHTML = ""

    if (universities.length === 0) {
      universityGrid.innerHTML =
        '<div class="col-span-full text-center text-xl">No universities found matching your criteria.</div>'
      return
    }

    universities.forEach((university) => {
      const card = document.createElement("div")
      card.className = "university-card fade-in-up"
      card.innerHTML = `
        <div class="header">
          <h3 class="text-xl font-semibold">${university.name}</h3>
          <span class="badge">#${university.ranking}</span>
        </div>
        <div class="content">
          <p class="text-sm text-gray-300 mb-4">${university.city}, ${university.province}</p>
          <p class="mb-4">${university.description.substring(0, 120)}...</p>
          <div class="stats">
            <div class="stat">
              <div class="stat-value">${university.acceptanceRate}</div>
              <div class="stat-label">Acceptance</div>
            </div>
            <div class="stat">
              <div class="stat-value">${university.programs.length}</div>
              <div class="stat-label">Programs</div>
            </div>
            <div class="stat">
              <div class="stat-value">${university.founded}</div>
              <div class="stat-label">Founded</div>
            </div>
          </div>
        </div>
      `

      card.addEventListener("click", () => openUniversityModal(university))
      universityGrid.appendChild(card)
    })
  }

  // Render table view
  function renderTableView(universities) {
    universityTableBody.innerHTML = ""

    if (universities.length === 0) {
      universityTableBody.innerHTML =
        '<tr><td colspan="7" class="text-center text-xl py-4">No universities found matching your criteria.</td></tr>'
      return
    }

    universities.forEach((university) => {
      const row = document.createElement("tr")
      row.innerHTML = `
        <td>
          <div class="ranking">${university.ranking}</div>
        </td>
        <td>
          <div class="font-semibold">${university.name}</div>
          <div class="text-sm text-gray-400">${university.city}, ${university.province}</div>
        </td>
        <td>${university.city}, ${university.province}</td>
        <td>${university.programs.length} programs</td>
        <td>${university.tuitionDomestic}</td>
        <td>${university.acceptanceRate}</td>
        <td>
          <button class="view-details-btn bg-gradient-to-r from-indigo-600 to-cyan-600 px-3 py-1 rounded text-sm">
            View Details
          </button>
        </td>
      `

      row.querySelector(".view-details-btn").addEventListener("click", () => openUniversityModal(university))
      universityTableBody.appendChild(row)
    })
  }

  // Render pagination
  function renderPagination() {
    pagination.innerHTML = ""

    const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage)

    if (totalPages <= 1) {
      return
    }

    // Previous button
    if (currentPage > 1) {
      const prevBtn = document.createElement("div")
      prevBtn.className = "pagination-item"
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>'
      prevBtn.addEventListener("click", () => {
        currentPage--
        renderUniversities()
      })
      pagination.appendChild(prevBtn)
    }

    // Page numbers
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("div")
      pageBtn.className = `pagination-item ${i === currentPage ? "active" : ""}`
      pageBtn.textContent = i
      pageBtn.addEventListener("click", () => {
        currentPage = i
        renderUniversities()
      })
      pagination.appendChild(pageBtn)
    }

    // Next button
    if (currentPage < totalPages) {
      const nextBtn = document.createElement("div")
      nextBtn.className = "pagination-item"
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>'
      nextBtn.addEventListener("click", () => {
        currentPage++
        renderUniversities()
      })
      pagination.appendChild(nextBtn)
    }
  }

  // Open university modal
  async function openUniversityModal(university) {
    // Set modal content
    document.getElementById("modal-university-name").textContent = university.name
    document.getElementById("modal-university-description").textContent = university.description
    document.getElementById("modal-university-founded").textContent = university.founded
    document.getElementById("modal-university-population").textContent = university.studentPopulation.toLocaleString()
    document.getElementById("modal-university-ratio").textContent = university.facultyRatio
    document.getElementById("modal-university-ranking").textContent = `#${university.ranking} in Canada`
    document.getElementById("modal-university-location").textContent = university.location
    document.getElementById("modal-university-tuition-domestic").textContent = university.tuitionDomestic
    document.getElementById("modal-university-tuition-international").textContent = university.tuitionInternational
    document.getElementById("modal-university-residence").textContent = university.residenceCost
    document.getElementById("modal-university-books").textContent = university.booksCost
    document.getElementById("modal-university-admission-info").textContent = university.admissionInfo
    document.getElementById("modal-university-acceptance").textContent = university.acceptanceRate
    document.getElementById("modal-university-facilities").textContent = university.facilities
    document.getElementById("modal-university-student-life").textContent = university.studentLife
    document.getElementById("modal-university-housing").textContent = university.housing

    // Populate programs
    const programsContainer = document.getElementById("modal-university-programs")
    programsContainer.innerHTML = ""
    university.programs.forEach((program) => {
      const programItem = document.createElement("div")
      programItem.className = "program-item"
      programItem.textContent = program
      programsContainer.appendChild(programItem)
    })

    // Populate deadlines
    const deadlinesContainer = document.getElementById("modal-university-deadlines")
    deadlinesContainer.innerHTML = ""
    university.deadlines.forEach((deadline) => {
      const deadlineItem = document.createElement("li")
      deadlineItem.innerHTML = `<span class="font-semibold">${deadline.program}:</span> ${deadline.date}`
      deadlinesContainer.appendChild(deadlineItem)
    })

    // Add a save button to the modal
    const saveBtn = document.createElement("button")
    saveBtn.textContent = "Save Changes"
    saveBtn.className = "bg-blue-500 text-white px-4 py-2 rounded mt-4"
    saveBtn.addEventListener("click", async () => {
      // Get updated values from modal inputs
      const updatedUniversity = {
        ...university,
        name: document.getElementById("modal-university-name").textContent,
        description: document.getElementById("modal-university-description").textContent,
        // ... (add more fields as needed)
      }

      // Update the university data
      await updateUniversityData(
        filteredUniversities.map((u) => (u.id === updatedUniversity.id ? updatedUniversity : u)),
      )

      // Re-render universities
      await renderUniversities()
      closeModal()
    })

    document.querySelector(".university-modal-content").appendChild(saveBtn)

    // Show modal
    universityModal.classList.add("active")
    document.body.style.overflow = "hidden" // Prevent scrolling
  }

  // Close university modal
  function closeModal() {
    universityModal.classList.remove("active")
    document.body.style.overflow = "" // Re-enable scrolling
  }

  // Add to backend service
  if (window.backendService) {
    // Add university data to backend
    window.backendService.setUniversityData = (data) => {
      localStorage.setItem("universityData", JSON.stringify(data))
    }

    window.backendService.getUniversityData = () => JSON.parse(localStorage.getItem("universityData")) || universities

    // Initialize university data if not already set
    if (!localStorage.getItem("universityData")) {
      window.backendService.setUniversityData(universities)
    }
  }

  // New function to fetch universities from API
  async function fetchUniversities() {
    try {
      const response = await fetch("/api/universities")
      const universities = await response.json()
      return universities
    } catch (error) {
      console.error("Error fetching universities:", error)
      return []
    }
  }

  // Call renderUniversities on page load
  renderUniversities()
})

