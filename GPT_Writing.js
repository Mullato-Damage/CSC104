// Sample data for generating names, characters, themes, genres, and settings
const maleNames = ["John", "Michael", "David", "James", "Robert"];
const femaleNames = ["Sarah", "Emma", "Olivia", "Sophia", "Emily"];
const neutralNames = ["Taylor", "Jordan", "Riley", "Casey", "Morgan"];
const characterTraits = ["Brave", "Cunning", "Kind", "Ambitious", "Lazy"];
const themes = ["Redemption", "Betrayal", "Love", "Courage", "Loss"];
const genres = ["Fantasy", "Science Fiction", "Mystery", "Romance", "Thriller"];
const settings = ["Post-apocalyptic city", "Medieval village", "Distant planet", "Modern metropolis", "Haunted house"];

// Function to generate a random name based on selected gender
function generateName() {
    const gender = document.getElementById("name-gender").value;
    let name = "";

    // Choose a random name based on gender selection
    if (gender === "male") {
        name = maleNames[Math.floor(Math.random() * maleNames.length)];
    } else if (gender === "female") {
        name = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    } else {
        name = neutralNames[Math.floor(Math.random() * neutralNames.length)];
    }

    // Display the generated name
    document.getElementById("name-output").textContent = name;
}

// Function to add a custom name to the list
function addCustomName() {
    const customName = document.getElementById("custom-name").value;
    const gender = document.getElementById("custom-name-gender").value;

    // Add the custom name to the respective name list
    if (gender === "male") {
        maleNames.push(customName);
    } else if (gender === "female") {
        femaleNames.push(customName);
    } else {
        neutralNames.push(customName);
    }

    // Display confirmation message
    document.getElementById("custom-name-output").textContent = `Added custom name: ${customName}`;
}

// Function to generate random character traits
function generateCharacter() {
    const trait = characterTraits[Math.floor(Math.random() * characterTraits.length)];
    
    // Display the generated character trait
    document.getElementById("character-output").textContent = `Character trait: ${trait}`;
}

// Function to generate a random theme
function generateTheme() {
    const theme = themes[Math.floor(Math.random() * themes.length)];
    
    // Display the generated theme
    document.getElementById("theme-output").textContent = `Theme: ${theme}`;
}

// Function to generate a random genre
function generateGenre() {
    const genre = genres[Math.floor(Math.random() * genres.length)];
    
    // Display the generated genre
    document.getElementById("genre-output").textContent = `Genre: ${genre}`;
}

// Function to generate a random setting
function generateSetting() {
    const setting = settings[Math.floor(Math.random() * settings.length)];
    
    // Display the generated setting
    document.getElementById("setting-output").textContent = `Setting: ${setting}`;
}

// Function to clear all results
function clearResults() {
    document.getElementById("name-output").textContent = "";
    document.getElementById("custom-name-output").textContent = "";
    document.getElementById("character-output").textContent = "";
    document.getElementById("theme-output").textContent = "";
    document.getElementById("genre-output").textContent = "";
    document.getElementById("setting-output").textContent = "";
}
