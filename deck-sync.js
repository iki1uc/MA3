export async function syncDecks() {
    const decks = [
        { name: "Deck1 ROOT", url: "https://iki1uc.github.io/TriAxiom/deck1_root/" },
        { name: "Deck2 MODULE", url: "https://iki1uc.github.io/TriAxiom/deck2_module/" },
        { name: "Deck3 VISUAL", url: "https://iki1uc.github.io/TriAxiom/deck3_visual/" }
    ];

    const out = document.getElementById("deck-sync");

    for (let i = 0; i < decks.length; i++) {
        try {
            const res = await fetch(decks[i].url);
            out.innerHTML += `
                <div class="step">
                    ${decks[i].name}<br>
                    URL: ${decks[i].url}<br>
                    STATUS: ${res.ok ? "ONLINE ✓" : "ERROR ✗"} (${res.status})
                </div>
            `;
        } catch (err) {
            out.innerHTML += `
                <div class="step">
                    ${decks[i].name}<br>
                    URL: ${decks[i].url}<br>
                    EXCEPTION ✗<br>${err.message}
                </div>
            `;
        }
    }
}

