// Arrays of sample values for names, character traits, themes, genres, and settings
const names = ["Lian Zhang", "Evelyn Hunter", "Kai Nakamura", "Sophia Garcia", "Xavier Lee", "Amara Patel"];
const traits = ["Brave and headstrong", "Quiet and analytical", "Reckless but charming", "Curious and adventurous", "Stoic with a soft heart", "Ambitious and cunning"];
const themes = ["Redemption", "Betrayal", "Courage vs Fear", "Friendship", "Identity", "Power and Corruption"];
const genres = ["Science Fiction", "Fantasy", "Romance", "Horror", "Mystery", "Historical Fiction"];
const settings = ["A bustling futuristic city", "A small village in the mountains", "A haunted mansion", "A medieval kingdom", "A post-apocalyptic wasteland", "A quiet seaside town"];

// Function to generate random names
function generateName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("name-output").innerText = `Character Name: ${names[randomIndex]}`;
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
