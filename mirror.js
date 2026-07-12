export async function mirrorMA3() {
    const grid = document.getElementById("ma3-mirror");

    const chain = [
        { name: "BOERSE ROOT", url: "https://iki1uc.github.io/BOERSE/" },
        { name: "MARKT", url: "https://raw.githubusercontent.com/iki1uc/BOERSE/main/MARKT/marketData.js" },
        { name: "SCAN81", url: "https://raw.githubusercontent.com/iki1uc/BOERSE/main/MARKT/SCAN81/scanEVO.js" },
        { name: "ID-GATE", url: "https://iki1uc.github.io/BOERSE/ID.html" },
        { name: "TOOLS", url: "https://iki1uc.github.io/BOERSE-TOOLS/" },
        { name: "Scan-Ghost", url: "https://iki1uc.github.io/Scan-Ghost/" },
        { name: "ki3KIme", url: "https://iki1uc.github.io/ki3KIme/" },
        { name: "ECO-MARKT3-EXP168", url: "https://iki1uc.github.io/ECO-MARKT3-EXP168/" },
        { name: "Respo-Rotation", url: "https://iki1uc.github.io/Respo-Rotation/" }
    ];

    chain.forEach((item, i) => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = "mirror-slot-" + i;
        cell.innerHTML = `<div class="title">${item.name}</div>waiting…`;
        grid.appendChild(cell);
    });

    async function scan() {
        for (let i = 0; i < chain.length; i++) {
            const slot = document.getElementById("mirror-slot-" + i);
            const item = chain[i];

            try {
                const res = await fetch(item.url);
                slot.innerHTML =
                    `<div class="title">${item.name}</div>` +
                    `POS: ${i+1}<br>` +
                    `URL: ${item.url}<br>` +
                    (res.ok ? "ONLINE ✓" : "ERROR ✗") +
                    ` (${res.status})`;
            } catch (err) {
                slot.innerHTML =
                    `<div class="title">${item.name}</div>` +
                    `POS: ${i+1}<br>` +
                    `URL: ${item.url}<br>` +
                    `EXCEPTION ✗<br>${err.message}`;
            }
        }
    }

    scan();
    setInterval(scan, 3000);
}
