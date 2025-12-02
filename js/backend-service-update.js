// Add these methods to the BackendService class in backend-service.js

// University data methods\
getUniversityById(id)
{
  const universities = this.getUniversities()
  return universities.find(uni => uni.id === id);
}

getUniversities()
{
  return JSON.parse(localStorage.getItem('universityData')) || [];
}

setUniversityData(data)
{
  localStorage.setItem("universityData", JSON.stringify(data))
}

searchUniversities((query = ""), (filters = {}))
{
  const universities = this.getUniversities()

  return universities.filter(university => {
    // Search by name or description
    const matchesSearch = !query || 
      university.name.toLowerCase().includes(query.toLowerCase()) ||
      university.description.toLowerCase().includes(query.toLowerCase());
    
    // Filter by province
    const matchesProvince = !filters.province || 
      university.province === filters.province;
    
    // Filter by program
    const matchesProgram = !filters.program || 
      university.programs.some(program => 
        program.toLowerCase().includes(filters.program.toLowerCase())
      );
    
    return matchesSearch && matchesProvince && matchesProgram;
  });
}

// Add university to user's favorites
addUniversityToFavorites(userId, universityId)
{
  const users = this.getUsers()
  const userIndex = users.findIndex((user) => user.id === userId)

  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }

  // Initialize favorites array if it doesn't exist
  if (!users[userIndex].favoriteUniversities) {
    users[userIndex].favoriteUniversities = []
  }

  // Check if already in favorites
  if (users[userIndex].favoriteUniversities.includes(universityId)) {
    return { success: false, message: 'University already in favorites' };
  }

  // Add to favorites
  users[userIndex].favoriteUniversities.push(universityId)
  localStorage.setItem("users", JSON.stringify(users))

  // Update current user if it's the same user
  const currentUser = this.getCurrentUser()
  if (currentUser && currentUser.id === userId) {
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
  }

  return { success: true };
}

// Remove university from user's favorites
removeUniversityFromFavorites(userId, universityId)
{
  const users = this.getUsers()
  const userIndex = users.findIndex((user) => user.id === userId)

  if (userIndex === -1) {
    return { success: false, message: 'User not found' };
  }

  // Check if favorites array exists
  if (!users[userIndex].favoriteUniversities) {
    return { success: false, message: 'No favorites found' };
  }

  // Remove from favorites
  users[userIndex].favoriteUniversities = users[userIndex].favoriteUniversities.filter((id) => id !== universityId)
  localStorage.setItem("users", JSON.stringify(users))

  // Update current user if it's the same user
  const currentUser = this.getCurrentUser()
  if (currentUser && currentUser.id === userId) {
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]))
  }

  return { success: true };
}

// Get user's favorite universities
getUserFavoriteUniversities(userId)
{
  const user = this.getUsers().find((user) => user.id === userId)

  if (!user || !user.favoriteUniversities) {
    return [];
  }

  const universities = this.getUniversities()
  return user.favoriteUniversities.map(id => 
    universities.find(uni => uni.id === id)
  ).filter(uni => uni); // Filter out any undefined values
}

