// University data for Canadapp
const universities = [
  {
    id: 1,
    name: "University of Toronto",
    shortName: "U of T",
    province: "ON",
    city: "Toronto",
    ranking: 1,
    founded: 1827,
    description: "The University of Toronto is a globally top-ranked public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for influential movements and curricula in literary criticism and communication theory.",
    studentPopulation: 93081,
    facultyRatio: "20:1",
    tuitionDomestic: "$6,100 - $14,180",
    tuitionInternational: "$54,900 - $64,810",
    residenceCost: "$8,500 - $16,500",
    booksCost: "$1,000 - $1,500",
    acceptanceRate: "43%",
    location: "St. George (Downtown Toronto), Mississauga (West), and Scarborough (East) campuses, offering urban settings with excellent transit access.",
    facilities: "World-class libraries, athletic facilities, research centers, and modern classrooms. The Robarts Library is one of the most prominent academic libraries in North America.",
    studentLife: "Over 1,000 student organizations, vibrant campus life, diverse cultural events, and a strong sense of community despite the large size.",
    housing: "Guaranteed first-year housing for students who apply by the deadline. Various residence styles from traditional dormitories to apartment-style units.",
    admissionInfo: "Highly competitive admission process based on academic achievement, supplementary applications for some programs, and English language proficiency.",
    programs: [
      "Computer Science",
      "Engineering",
      "Commerce",
      "Life Sciences",
      "Humanities",
      "Social Sciences",
      "Architecture",
      "Medicine",
      "Law",
      "Music",
      "Education",
      "Kinesiology"
    ],
    deadlines: [
      { program: "General", date: "January 15" },
      { program: "Engineering", date: "January 15" },
      { program: "Architecture", date: "January 10" },
      { program: "Music", date: "December 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 2,
    name: "University of British Columbia",
    shortName: "UBC",
    province: "BC",
    city: "Vancouver",
    ranking: 2,
    founded: 1908,
    description: "The University of British Columbia is a global centre for teaching, learning and research, consistently ranked among the top 20 public universities in the world. Since 1915, UBC's West Coast spirit has embraced innovation and challenged the status quo. UBC encourages a global perspective and has a reputation for research excellence.",\
    studentPopulation: 66,512,
    facultyRatio: "18:1",
    tuitionDomestic: "$5,399 - $12,681",
    tuitionInternational: "$42,584 - $55,617",
    residenceCost: "$9,500 - $15,000",
    booksCost: "$1,000 - $1,500",
    acceptanceRate: "52%",
    location: "Two main campuses: Vancouver campus offers a stunning coastal setting, while the Okanagan campus in Kelowna provides a more intimate learning environment.",
    facilities: "State-of-the-art research facilities, one of Canada's largest libraries, modern recreation centers, and sustainable buildings surrounded by natural beauty.",
    studentLife: "Over 350 clubs, strong athletics programs, and a diverse international community. The campus offers breathtaking views of mountains and ocean.",
    housing: "First-year housing guarantee for eligible students. Various housing options from traditional dormitories to townhouses and apartments.",
    admissionInfo: "Competitive admissions based on academic achievement, personal profile, and supplementary applications for select programs.",
    programs: [
      "Computer Science",
      "Engineering",
      "Commerce",
      "Forestry",
      "Land & Food Systems",
      "Medicine",
      "Law",
      "Education",
      "Arts",
      "Science",
      "Kinesiology",
      "Pharmaceutical Sciences"
    ],
    deadlines: [
      { program: "General", date: "January 15" },
      { program: "Engineering", date: "January 15" },
      { program: "Commerce", date: "January 15" },
      { program: "Music", date: "December 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 3,
    name: "McGill University",
    shortName: "McGill",
    province: "QC",
    city: "Montreal",
    ranking: 3,
    founded: 1821,
    description: "McGill University is one of Canada's best-known institutions of higher learning and one of the leading universities in the world. With students coming from over 150 countries, McGill's reputation for excellence is strong around the globe.",
    studentPopulation: 40,27,
    facultyRatio: "16:1",
    tuitionDomestic: "$2,725 - $9,729",
    tuitionInternational: "$23,472 - $52,313",
    residenceCost: "$9,000 - $15,500",
    booksCost: "$800 - $1,500",
    acceptanceRate: "46%",
    location: "Located in the heart of downtown Montreal, with a second campus in Sainte-Anne-de-Bellevue. Offers a vibrant urban experience in a bilingual city.",
    facilities: "Historic buildings alongside modern facilities, extensive library system, cutting-edge research centers, and excellent athletic facilities.",
    studentLife: "Over 300 student clubs, strong athletics tradition, and a vibrant arts scene. The university offers a unique blend of Canadian and international cultures.",
    housing: "Guaranteed housing for first-year students who apply by the deadline. Various residence options from traditional dormitories to apartment-style units.",
    admissionInfo: "Highly competitive admissions based primarily on academic achievement. Quebec students follow a different application process due to the CEGEP system.",
    programs: [
      "Medicine",
      "Law",
      "Engineering",
      "Management",
      "Arts",
      "Science",
      "Music",
      "Education",
      "Dentistry",
      "Agriculture",
      "Architecture",
      "Computer Science"
    ],
    deadlines: [
      { program: "General", date: "January 15" },
      { program: "Medicine", date: "November 1" },
      { program: "Law", date: "November 1" },
      { program: "Music", date: "December 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 4,
    name: "University of Waterloo",
    shortName: "Waterloo",
    province: "ON",
    city: "Waterloo",
    ranking: 4,
    founded: 1957,
    description: "The University of Waterloo is a leading comprehensive university with a reputation for innovation and entrepreneurship. Known for its co-operative education programs and connections to industry, Waterloo is a global leader in research and teaching.",
    studentPopulation: 42,0,
    facultyRatio: "21:1",
    tuitionDomestic: "$6,875 - $16,000",
    tuitionInternational: "$40,900 - $65,100",
    residenceCost: "$5,800 - $9,500",
    booksCost: "$1,000 - $1,500",
    acceptanceRate: "53%",
    location: "Main campus in Waterloo, Ontario with satellite campuses in Cambridge, Kitchener, and Stratford. Located in Canada's technology hub.",
    facilities: "Modern research facilities, extensive library system, innovative learning spaces, and the largest co-operative education program in the world.",
    studentLife: "Over 250 student clubs, strong athletics programs, and a vibrant entrepreneurial ecosystem. The university is known for its tech-focused culture.",
    housing: "First-year housing guarantee for students who apply by the deadline. Various residence options from traditional dormitories to suite-style units.",
    admissionInfo: "Competitive admissions based on academic achievement, with additional requirements for specific programs. Known for rigorous math and engineering programs.",
    programs: [
      "Computer Science",
      "Engineering",
      "Mathematics",
      "Accounting",
      "Architecture",
      "Health Sciences",
      "Environment",
      "Arts",
      "Science",
      "Recreation & Leisure",
      "Optometry",
      "Pharmacy"
    ],
    deadlines: [
      { program: "General", date: "February 1" },
      { program: "Engineering", date: "February 1" },
      { program: "Architecture", date: "January 15" },
      { program: "Accounting", date: "February 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 5,
    name: "McMaster University",
    shortName: "McMaster",
    province: "ON",
    city: "Hamilton",
    ranking: 5,
    founded: 1887,
    description: "McMaster University is a public research university in Hamilton, Ontario. The main campus is on 121 hectares of land near the residential neighborhoods of Ainslie Wood and Westdale, adjacent to the Royal Botanical Gardens.",
    studentPopulation: 36,0,
    facultyRatio: "20:1",
    tuitionDomestic: "$6,042 - $10,882",
    tuitionInternational: "$30,000 - $57,000",
    residenceCost: "$7,500 - $12,000",
    booksCost: "$800 - $1,200",
    acceptanceRate: "58%",
    location: "Located in Hamilton, Ontario on a beautiful campus that combines natural settings with modern facilities. Close to Toronto with more affordable living costs.",
    facilities: "Modern research facilities, extensive library system, state-of-the-art health sciences center, and excellent athletic facilities.",
    studentLife: "Over 300 student clubs, strong athletics programs, and a diverse community. The university is known for its innovative approach to education.",
    housing: "First-year housing guarantee for students who apply by the deadline. Various residence options from traditional dormitories to apartment-style units.",
    admissionInfo: "Competitive admissions based on academic achievement, with additional requirements for specific programs. Known for its innovative medical school.",
    programs: [
      "Medicine",
      "Engineering",
      "Business",
      "Health Sciences",
      "Humanities",
      "Science",
      "Social Sciences",
      "Nursing",
      "Kinesiology",
      "Arts & Science",
      "Computer Science",
      "Biochemistry"
    ],
    deadlines: [
      { program: "General", date: "January 15" },
      { program: "Medicine", date: "October 1" },
      { program: "Health Sciences", date: "January 15" },
      { program: "Engineering", date: "January 15" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 6,
    name: "University of Alberta",
    shortName: "U of A",
    province: "AB",
    city: "Edmonton",
    ranking: 6,
    founded: 1908,
    description: "The University of Alberta is a top 5 Canadian university and one of the top 150 in the world, home to more than 40,000 students in nearly 400 undergraduate, graduate and professional programs.",
    studentPopulation: 40,43,
    facultyRatio: "22:1",
    tuitionDomestic: "$5,321 - $9,100",
    tuitionInternational: "$29,500 - $40,000",
    residenceCost: "$4,400 - $9,800",
    booksCost: "$750 - $1,500",
    acceptanceRate: "65%",
    location: "Five campuses, with the main North Campus located in Edmonton, Alberta. The campus features a mix of historic and modern buildings along the North Saskatchewan River valley.",
    facilities: "World-class research facilities, one of Canada's largest library systems, modern recreation centers, and extensive laboratory spaces.",
    studentLife: "Over 450 student groups, strong athletics programs, and a diverse international community. The university offers a supportive environment with many services.",
    housing: "Various housing options from traditional dormitories to apartment-style units. First-year students who apply early have priority.",
    admissionInfo: "Admissions based on academic achievement, with specific requirements varying by faculty. Some programs require supplementary applications.",
    programs: [
      "Engineering",
      "Business",
      "Science",
      "Arts",
      "Education",
      "Medicine",
      "Law",
      "Pharmacy",
      "Nursing",
      "Agriculture",
      "Kinesiology",
      "Computing Science"
    ],
    deadlines: [
      { program: "General", date: "March 1" },
      { program: "Medicine", date: "November 1" },
      { program: "Law", date: "December 1" },
      { program: "Business", date: "March 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 7,
    name: "Queen's University",
    shortName: "Queen's",
    province: "ON",
    city: "Kingston",
    ranking: 7,
    founded: 1841,
    description: "Queen's University is a public research university in Kingston, Ontario, Canada. Queen's holds more than 1,400 hectares of land throughout Ontario and owns Herstmonceux Castle in East Sussex, England.",
    studentPopulation: 28,500,
    facultyRatio: "24:1",
    tuitionDomestic: "$6,153 - $13,958",
    tuitionInternational: "$28,000 - $48,000",
    residenceCost: "$8,000 - $15,000",
    booksCost: "$800 - $1,500",
    acceptanceRate: "42%",
    location: "Located in Kingston, Ontario, on Lake Ontario. The historic campus features limestone buildings and modern facilities in a mid-sized city setting.",
    facilities: "Historic buildings alongside modern facilities, extensive library system, state-of-the-art athletic center, and specialized research facilities.",
    studentLife: "Strong school spirit, over 300 student clubs, and a tight-knit community. The university is known for its traditions and supportive environment.",
    housing: "First-year housing guarantee for students who apply by the deadline. Various residence options from traditional dormitories to apartment-style units.",
    admissionInfo: "Competitive admissions based on academic achievement, with additional requirements for specific programs. Known for its commerce and engineering programs.",
    programs: [
      "Commerce",
      "Engineering",
      "Arts",
      "Science",
      "Computing",
      "Health Sciences",
      "Law",
      "Medicine",
      "Education",
      "Nursing",
      "Kinesiology",
      "Fine Art"
    ],
    deadlines: [
      { program: "General", date: "February 1" },
      { program: "Commerce", date: "February 1" },
      { program: "Engineering", date: "February 1" },
      { program: "Nursing", date: "February 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 8,
    name: "Western University",
    shortName: "Western",
    province: "ON",
    city: "London",
    ranking: 8,
    founded: 1878,
    description: "Western University is a public research university in London, Ontario, Canada. The university was founded in 1878 as The Western University of London Ontario and has since grown to become a leading institution in Canada.",
    studentPopulation: 31,0,
    facultyRatio: "20:1",
    tuitionDomestic: "$6,050 - $11,500",
    tuitionInternational: "$31,042 - $43,500",
    residenceCost: "$8,000 - $14,000",
    booksCost: "$800 - $1,500",
    acceptanceRate: "58%",
    location: "Located in London, Ontario on a beautiful 481-hectare campus with Gothic-style buildings and modern facilities along the Thames River.",
    facilities: "Modern research facilities, extensive library system, state-of-the-art recreation center, and specialized medical and business facilities.",
    studentLife: "Over 200 student clubs, strong athletics programs, and a vibrant social scene. The university is known for its school spirit and supportive community.",
    housing: "First-year housing guarantee for students who apply by the deadline. Various residence options from traditional dormitories to suite-style units.",
    admissionInfo: "Competitive admissions based on academic achievement, with additional requirements for specific programs. Known for its business and medical schools.",
    programs: [
      "Business",
      "Engineering",
      "Medical Sciences",
      "Arts & Humanities",
      "Science",
      "Social Science",
      "Law",
      "Medicine",
      "Education",
      "Music",
      "Health Sciences",
      "Information Technology"
    ],
    deadlines: [
      { program: "General", date: "March 1" },
      { program: "Business", date: "January 15" },
      { program: "Engineering", date: "March 1" },
      { program: "Music", date: "January 15" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 9,
    name: "University of Calgary",
    shortName: "UCalgary",
    province: "AB",
    city: "Calgary",
    ranking: 9,
    founded: 1966,
    description: "The University of Calgary is a public research university located in Calgary, Alberta, Canada. The University of Calgary started in 1944 as the Calgary branch of the University of Alberta, founded in 1908, before being instituted into a separate university in 1966.",
    studentPopulation: 33,0,
    facultyRatio: "25:1",
    tuitionDomestic: "$5,593 - $12,700",
    tuitionInternational: "$18,338 - $27,000",
    residenceCost: "$3,800 - $8,400",
    booksCost: "$750 - $1,500",
    acceptanceRate: "68%",
    location: "Located in Calgary, Alberta on a 213-hectare main campus with four satellite campuses. The city offers a dynamic urban environment with proximity to the Rocky Mountains.",
    facilities: "Modern research facilities, extensive library system, Olympic-standard athletic facilities, and specialized engineering and business facilities.",
    studentLife: "Over 300 student clubs, strong athletics programs, and a diverse community. The university offers many opportunities for outdoor activities due to its location.",
    housing: "First-year housing available but not guaranteed. Various residence options from traditional dormitories to apartment-style units.",
    admissionInfo: "Admissions based on academic achievement, with specific requirements varying by faculty. Some programs require supplementary applications.",
    programs: [
      "Engineering",
      "Business",
      "Science",
      "Arts",
      "Education",
      "Medicine",
      "Law",
      "Nursing",
      "Kinesiology",
      "Social Work",
      "Veterinary Medicine",
      "Computer Science"
    ],
    deadlines: [
      { program: "General", date: "March 1" },
      { program: "Medicine", date: "October 1" },
      { program: "Law", date: "December 1" },
      { program: "Business", date: "March 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  },
  {
    id: 10,
    name: "Dalhousie University",
    shortName: "Dal",
    province: "NS",
    city: "Halifax",
    ranking: 10,
    founded: 1818,
    description: "Dalhousie University is one of Canada's oldest universities, founded in 1818. It's widely recognized as one of the top universities in Atlantic Canada, with strengths in marine sciences, law, medicine, and engineering.",
    studentPopulation: 20,0,
    facultyRatio: "18:1",
    tuitionDomestic: "$8,983 - $11,700",
    tuitionInternational: "$21,180 - $23,000",
    residenceCost: "$8,000 - $12,000",
    booksCost: "$800 - $1,500",
    acceptanceRate: "70%",
    location: "Located in Halifax, Nova Scotia with multiple campuses throughout the city. The coastal location offers unique research opportunities and a vibrant maritime culture.",
    facilities: "Historic buildings alongside modern facilities, extensive library system, specialized marine research facilities, and excellent medical and law schools.",
    studentLife: "Over 200 student clubs, strong athletics programs, and a diverse community. The university benefits from Halifax's vibrant cultural scene and coastal location.",
    housing: "First-year housing guarantee for students who apply by the deadline. Various residence options from traditional dormitories to apartment-style units.",
    admissionInfo: "Admissions based on academic achievement, with specific requirements varying by faculty. Some programs require supplementary applications.",
    programs: [
      "Medicine",
      "Law",
      "Engineering",
      "Computer Science",
      "Marine Biology",
      "Oceanography",
      "Commerce",
      "Arts",
      "Science",
      "Health Professions",
      "Architecture",
      "Planning"
    ],
    deadlines: [
      { program: "General", date: "March 15" },
      { program: "Medicine", date: "August 15" },
      { program: "Law", date: "February 28" },
      { program: "Dentistry", date: "December 1" }
    ],
    image: "/placeholder.svg?height=200&width=400"
  }
];

// Initial university data
const initialUniversities = [
  {
    id: 1,
    name: "University of Toronto",
    shortName: "U of T",
    province: "ON",
    city: "Toronto",
    ranking: 1,
    founded: 1827,
    description:
      "The University of Toronto is a globally top-ranked public research university in Toronto, Ontario, Canada. Founded in 1827, it is known for influential movements and curricula in literary criticism and communication theory.",
    studentPopulation: 93081,
    facultyRatio: "20:1",
    tuitionDomestic: "$6,100 - $14,180",
    tuitionInternational: "$54,900 - $64,810",
    residenceCost: "$8,500 - $16,500",
    booksCost: "$1,000 - $1,500",
    acceptanceRate: "43%",
    location:
      "St. George (Downtown Toronto), Mississauga (West), and Scarborough (East) campuses, offering urban settings with excellent transit access.",
    facilities:
      "World-class libraries, athletic facilities, research centers, and modern classrooms. The Robarts Library is one of the most prominent academic libraries in North America.",
    studentLife:
      "Over 1,000 student organizations, vibrant campus life, diverse cultural events, and a strong sense of community despite the large size.",
    housing:
      "Guaranteed first-year housing for students who apply by the deadline. Various residence styles from traditional dormitories to apartment-style units.",
    admissionInfo:
      "Highly competitive admission process based on academic achievement, supplementary applications for some programs, and English language proficiency.",
    programs: [
      "Computer Science",
      "Engineering",
      "Commerce",
      "Life Sciences",
      "Humanities",
      "Social Sciences",
      "Architecture",
      "Medicine",
      "Law",
      "Music",
      "Education",
      "Kinesiology",
    ],
    deadlines: [
      { program: "General", date: "January 15" },
      { program: "Engineering", date: "January 15" },
      { program: "Architecture", date: "January 10" },
      { program: "Music", date: "December 1" },
    ],
    image: "/placeholder.svg?height=200&width=400",
  },
  // ... (add more universities here)
]

// Function to simulate fetching university data
function fetchUniversityData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedData = localStorage.getItem("universityData")
      if (storedData) {
        resolve(JSON.parse(storedData))
      } else {
        localStorage.setItem("universityData", JSON.stringify(initialUniversities))
        resolve(initialUniversities)
      }
    }, 500) // Simulate network delay
  })
}

// Function to simulate updating university data
function updateUniversityData(newData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("universityData", JSON.stringify(newData))
      resolve({ success: true })
    }, 500) // Simulate network delay
  })
}

// Function to simulate web scraping and updating data
function simulateWebScraping() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const storedData = JSON.parse(localStorage.getItem("universityData"))
      const updatedData = storedData.map((university) => ({
        ...university,
        lastUpdated: new Date().toISOString(),
        // Simulate some data changes
        acceptanceRate: `${Math.floor(Math.random() * 20) + 40}%`,
        studentPopulation: university.studentPopulation + Math.floor(Math.random() * 1000) - 500,
      }))
      localStorage.setItem("universityData", JSON.stringify(updatedData))
      resolve({ success: true, message: "University data updated successfully" })
    }, 2000) // Simulate longer process
  })
}

export { fetchUniversityData, updateUniversityData, simulateWebScraping }

