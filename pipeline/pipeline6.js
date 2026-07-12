export async function pipeline6() {
    const out = document.getElementById("pipeline6");

    const respo = [
        "REAL", "BIL", "DU", "NG"
    ];

    for (let i = 0; i < respo.length; i++) {
        const url = `https://iki1uc.github.io/RESPO-${respo[i]}/`;

        try {
            const res = await fetch(url);
            out.innerHTML += `
                <div class="step">
                    Pipeline‑6: RESPO ${respo[i]}<br>
                    URL: ${url}<br>
                    STATUS: ${res.ok ? "ONLINE ✓" : "ERROR ✗"} (${res.status})
                </div>
            `;
        } catch (err) {
            out.innerHTML += `
                <div class="step">
                    Pipeline‑6: RESPO ${respo[i]}<br>
                    URL: ${url}<br>
                    EXCEPTION ✗<br>${err.message}
                </div>
            `;
        }
    }
}

