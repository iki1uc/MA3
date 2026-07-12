export async function respoMatrix() {
    const out = document.getElementById("respo-matrix");
    const respo = await fetch("./respo-matrix.json").then(r => r.json());

    for (let i = 0; i < respo.respo.length; i++) {
        const name = respo.respo[i];
        const url = `https://iki1uc.github.io/RESPO-${name}/`;

        try {
            const res = await fetch(url);
            out.innerHTML += `
                <div class="step">
                    RESPO ${name}<br>
                    URL: ${url}<br>
                    STATUS: ${res.ok ? "ONLINE ✓" : "ERROR ✗"} (${res.status})
                </div>
            `;
        } catch (err) {
            out.innerHTML += `
                <div class="step">
                    RESPO ${name}<br>
                    URL: ${url}<br>
                    EXCEPTION ✗<br>${err.message}
                </div>
            `;
        }
    }
}
