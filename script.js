const facts = [
    "I am 20 years old and passionate about coding.",
    "I enjoy solving complex problems through programming.",
    "I am constantly learning new programming languages and technologies.",
    "I love participating in hackathons and coding competitions.",
    "I am working on building my own software projects in my free time."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
