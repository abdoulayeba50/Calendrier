// Pour le calendrier
var element = document.querySelector('.Calendrier');
new Calendar(element, {
language : 'fr'
});

// Pour ajouter un evenement
document.addEventListener('DOMContentLoaded', function () {
    const addEventBtn = document.getElementById('addEventBtn');
    const modal = document.getElementById('eventModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const saveEventBtn = document.getElementById('saveEventBtn');
    const eventNameInput = document.getElementById('eventName');
    const eventDateInput = document.getElementById('eventDate');
    const eventsContainer = document.getElementById('events');

    addEventBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    saveEventBtn.addEventListener('click', function () {
        const eventName = eventNameInput.value;
        const eventDate = eventDateInput.value;

        if (eventName && eventDate) {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `<strong class="event-name">${eventName}</strong> - <span class="event-date">${eventDate}</span> <button class="deleteBtn">Supprimer</button> <button class="editBtn">Éditer</button>`;
            eventsContainer.appendChild(eventItem);
            modal.style.display = 'none';
            eventNameInput.value = '';
            eventDateInput.value = '';

            const deleteBtn = eventItem.querySelector('.deleteBtn');
            deleteBtn.addEventListener('click', function () {
                eventsContainer.removeChild(eventItem);
            });

            const editBtn = eventItem.querySelector('.editBtn');
            editBtn.addEventListener('click', function () {
                const eventNameElement = eventItem.querySelector('.event-name');
                const eventDateElement = eventItem.querySelector('.event-date');

                eventNameElement.contentEditable = true;
                eventDateElement.contentEditable = true;

                eventNameElement.focus();
            });
        } 
        else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});
