
export async function ulrmBridge() {
    const out = document.getElementById("ulrm-bridge");

    const modules = [
        "https://iki1uc.github.io/BOERSE/",
        "https://iki1uc.github.io/BOERSE-TOOLS/",
        "https://iki1uc.github.io/Scan-Ghost/",
        "https://iki1uc.github.io/ki3KIme/",
        "https://iki1uc.github.io/ECO-MARKT3-EXP168/",
        "https://iki1uc.github.io/Respo-Rotation/"
    ];

    for (let i = 0; i < modules.length; i++) {
        try {
            const res = await fetch(modules[i]);
            out.innerHTML += `
                <div class="step">
                    ULRM POS ${i+1}<br>
                    URL: ${modules[i]}<br>
                    STATUS: ${res.ok ? "ONLINE ✓" : "ERROR ✗"} (${res.status})
                </div>
            `;
        } catch (err) {
            out.innerHTML += `
                <div class="step">
                    ULRM POS ${i+1}<br>
                    URL: ${modules[i]}<br>
                    EXCEPTION ✗<br>${err.message}
                </div>
            `;
        }
    }
}
