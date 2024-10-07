// Expanded arrays with more sample data
const names = {
    male: ["Kai Nakamura", "Xavier Lee", "Elijah Brown", "Noah Miller", "Mateo Chen"],
    female: ["Lian Zhang", "Sophia Garcia", "Amara Patel", "Evelyn Hunter", "Harper Liu"],
    neutral: ["Alex Jordan", "Taylor Morgan", "Jordan Quinn", "Casey Avery", "Drew Blake"]
};

const traits = ["Brave and headstrong", "Quiet and analytical", "Reckless but charming", "Curious and adventurous", "Stoic with a soft heart", "Ambitious and cunning", "Kind-hearted but naive"];
const themes = ["Redemption", "Betrayal", "Courage vs Fear", "Friendship", "Identity", "Power and Corruption", "Love and Sacrifice", "Survival"];
const genres = ["Science Fiction", "Fantasy", "Romance", "Horror", "Mystery", "Historical Fiction", "Thriller", "Drama"];
const settings = ["A bustling futuristic city", "A small village in the mountains", "A haunted mansion", "A medieval kingdom", "A post-apocalyptic wasteland", "A quiet seaside town", "A distant planet", "An underground bunker"];

// Function to generate names with filter by gender
function generateName() {
    const gender = document.getElementById("name-gender").value;
    const nameList = names[gender]; // Access the selected gender category
    const randomIndex = Math.floor(Math.random() * nameList.length);
    document.getElementById("name-output").innerText = `Character Name: ${nameList[randomIndex]}`;
}

// Function to add a custom name to the name list
function addCustomName() {
    const customName = document.getElementById("custom-name").value;
    const gender = document.getElementById("custom-name-gender").value;
    if (customName) {
        names[gender].push(customName);
        document.getElementById("custom-name-output").innerText = `Added custom name: ${customName} to the ${gender} list.`;
        document.getElementById("custom-name").value = ''; // Clear input
    }
}

// Function to generate random character traits
function generateCharacter() {
    const randomIndex = Math.floor(Math.random() * traits.length);
    document.getElementById("character-output").innerText = `Character Traits: ${traits[randomIndex]}`;
}

// Function to generate random themes
function generateTheme() {
    const randomIndex = Math.floor(Math.random() * themes.length);
    document.getElementById("theme-output").innerText = `Story Theme: ${themes[randomIndex]}`;
}

// Function to generate random genres
function generateGenre() {
    const randomIndex = Math.floor(Math.random() * genres.length);
    document.getElementById("genre-output").innerText = `Story Genre: ${genres[randomIndex]}`;
}

// Function to generate random settings
function generateSetting() {
    const randomIndex = Math.floor(Math.random() * settings.length);
    document.getElementById("setting-output").innerText = `Story Setting: ${settings[randomIndex]}`;
}

// Function to clear generated content
function clearResults() {
    document.getElementById("name-output").innerText = '';
    document.getElementById("character-output").innerText = '';
    document.getElementById("theme-output").innerText = '';
    document.getElementById("genre-output").innerText = '';
    document.getElementById("setting-output").innerText = '';
    document.getElementById("custom-name-output").innerText = '';
}
