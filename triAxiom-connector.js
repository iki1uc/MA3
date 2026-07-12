export async function connectTriAxiom() {
    const out = document.getElementById("triAxiom-status");

    const tri = [
        "https://iki1uc.github.io/TriAxiom/axis/",
        "https://iki1uc.github.io/TriAxiom/deck1_root/",
        "https://iki1uc.github.io/TriAxiom/deck2_module/",
        "https://iki1uc.github.io/TriAxiom/deck3_visual/"
    ];

    for (let i = 0; i < tri.length; i++) {
        try {
            const res = await fetch(tri[i]);
            out.innerHTML += `
                <div class="step">
                    TriAxiom POS ${i+1}<br>
                    URL: ${tri[i]}<br>
                    STATUS: ${res.ok ? "ONLINE ✓" : "ERROR ✗"} (${res.status})
                </div>
            `;
        } catch (err) {
            out.innerHTML += `
                <div class="step">
                    TriAxiom POS ${i+1}<br>
                    URL: ${tri[i]}<br>
                    EXCEPTION ✗<br>${err.message}
                </div>
            `;
        }
    }
}
