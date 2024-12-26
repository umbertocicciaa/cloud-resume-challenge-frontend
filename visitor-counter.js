async function updateVisitorCounter() {
    const response = await fetch('https://cloud-resume-gateway-cors-8yv80jb4.ew.gateway.dev/update-visitor', {
        method: 'POST'
    });
    if (!response.ok) {
        console.error('Errore durante l\'aggiornamento del contatore dei visitatori');
    }
}

async function getVisitorCounter() {
    const response = await fetch('https://cloud-resume-gateway-cors-8yv80jb4.ew.gateway.dev/read');
    if (response.ok) {
        const visitors = await response.json();
        const visitorCount = visitors[0].counter;
        document.getElementById('visitor-counter').innerText = visitorCount;
    } else {
        console.error('Errore durante l\'ottenimento del contatore dei visitatori');
    }
}

updateVisitorCounter();
getVisitorCounter();