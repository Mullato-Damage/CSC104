// Array of names for the character generator
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Array of themes
const themes = ['Love', 'Loss', 'Revenge', 'Friendship', 'Adventure'];

// Object containing genre information
const genres = {
  fantasy: 'A genre involving magic, mythical creatures, and heroic quests.',
  sciFi: 'A genre exploring scientific concepts, futuristic technology, and space exploration.'
};

// Function to generate a random name
function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

// Function to suggest themes based on keywords
function suggestThemes(keywords) {
  const shuffledThemes = themes.sort(() => Math.random() - 0.5);
  const suggestedThemes = shuffledThemes.filter(theme => theme.includes(keywords.toLowerCase()));
  return suggestedThemes.length > 0 ? suggestedThemes[0] : 'No matching themes found';
}

// Function to get genre details
function getGenreDetails(selectedGenre) {
  return genres[selectedGenre] || 'Genre not found';
}

// Function to suggest settings based on time period and location
function suggestSettings(timePeriod, location) {
  const suggestedSettings = ['Medieval Europe', 'Post-apocalyptic Earth', 'Futuristic City'];
  const shuffledSettings = suggestedSettings.sort(() => Math.random() - 0.5);
  return shuffledSettings;
}

// Function to suggest character traits based on personality type
function suggestTraits(personalityType) {
  const suggestedTraits = ['Brave', 'Intelligent', 'Loyal', 'Funny', 'Compassionate'];
  const shuffledTraits = suggestedTraits.sort(() => Math.random() - 0.5);
  return shuffledTraits[0];
}

// Function to suggest genres based on keywords
function suggestGenres(keywords) {
  const suggestedGenres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Adventure'];
  const shuffledGenres = suggestedGenres.sort(() => Math.random() - 0.5);
  return shuffledGenres.filter(genre => genre.toLowerCase().includes(keywords.toLowerCase()))[0];
}

// Function to generate a random plot twist
function getRandomPlotTwist(keywords) {
  const plotTwists = [
    // Add more plot twists here
    "The main character discovers they are the villain.",
    "A hidden secret is revealed that changes everything.",
    "The protagonist dies and is resurrected.",
    "The love interest turns out to be a traitor.",
    "A time travel paradox occurs.",
    "A character's past actions come back to haunt them.",
    "The world is revealed to be a simulation.",
    "A supernatural entity intervenes in the story."
  ];

  if (keywords) {
    // Filter plot twists based on keywords using regular expressions
    const filteredPlotTwists = plotTwists.filter(twist => {
      const regex = new RegExp(keywords.split(' ').join('|'), 'i');
      return regex.test(twist);
    });

    if (filteredPlotTwists.length > 0) {
      return filteredPlotTwists[Math.floor(Math.random() * filteredPlotTwists.length)];
    }
  }

  // If no keywords or no matching plot twists found, return a random one
  const randomIndex = Math.floor(Math.random() * plotTwists.length);
  return plotTwists[randomIndex];
}

// Event listeners
const characterForm = document.getElementById('character-form');
const themeForm = document.getElementById('theme-form');
const genreForm = document.getElementById('genre-form');
const settingForm = document.getElementById('setting-form');
const traitForm = document.getElementById('character-traits');
const twistForm = document.getElementById('twist-form');

characterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const generatedName = generateRandomName();
  document.getElementById('name').value = name || generatedName;
});

themeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const keywords = document.getElementById('theme-keywords').value;
  const suggestedThemes = suggestThemes(keywords);
  document.getElementById('theme-keywords').value = suggestedThemes;
});

genreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const keywords = document.getElementById('genre-keywords').value;
  const suggestedGenres = suggestGenres(keywords);
  document.getElementById('genre-keywords').value = suggestedGenres;
});

settingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const timePeriod = document.getElementById('time-period').value;
  const location = document.getElementById('location').value;
  const suggestedSettings = suggestSettings(timePeriod, location);

  // Update the input values directly
  document.getElementById('time-period').value = suggestedSettings[0];
  document.getElementById('location').value = suggestedSettings[1];
});

traitForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const personalityType = document.getElementById('personality-type').value;
  const suggestedTraits = suggestTraits(personalityType);
  document.getElementById('personality-type').value = suggestedTraits;
});

twistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const keywords = document.getElementById('twist-keywords').value;
  const randomTwist = getRandomPlotTwist(keywords);
  document.getElementById('twist-keywords').value = randomTwist;
});