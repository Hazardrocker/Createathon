document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const train = document.getElementById('train').value.trim();
    const source = document.getElementById('source').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;

    if (!name || !train || !source || !destination || !date || !travelClass) {
        alert('Please fill out all fields!');
        return;
    }

    alert(`Ticket booked successfully!\n
        Name: ${name}\n
        Train: ${train}\n
        From: ${source}\n
        To: ${destination}\n
        Date: ${date}\n
        Class: ${travelClass}`);
    this.reset(); // Reset the form fields
});