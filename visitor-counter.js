async function updateVisitorCounter() {
    const response = await fetch('https://cloud-resume-gateway-8yv80jb4.ew.gateway.dev/update-visitor', {
        method: 'POST'
    });
    if (!response.ok) {
        console.error('Errore durante l\'aggiornamento del contatore dei visitatori');
    }
}

async function getVisitorCounter() {
    const response = await fetch('https://cloud-resume-gateway-8yv80jb4.ew.gateway.dev/read');
    if (response.ok) {
        const data = await response.json();
        document.getElementById('visitor-counter').innerText = data.count;
    } else {
        console.error('Errore durante l\'ottenimento del contatore dei visitatori');
    }
}

updateVisitorCounter();
getVisitorCounter();