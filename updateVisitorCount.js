async function updateVisitorCount() {
    const countElement = document.getElementById('visitor-count');
    const namespace = 'fortnite-cosmetics';
    const key = 'visits';

    try {
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        const data = await response.json();
        if (data.value !== undefined) {
            countElement.textContent = data.value;
        } else {
            countElement.textContent = '0';
        }
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        countElement.textContent = 'N/A';
    }
}

window.onload = updateVisitorCount;
