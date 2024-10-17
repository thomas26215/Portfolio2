document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('mail').value;
        const phone = document.getElementById('phone').value;
        const subjectForm = document.getElementById('subject').value;
        const message = document.getElementById('message').value;


        // Construire le sujet du message
        const subject = `${subjectForm}`; // Vous pouvez ajouter le nom de famille ici si vous avez un champ pour cela

        // Construire le corps du message
        const body = `${message}\n\n${username}\n${phone}\n${email}`;

        // Encoder les paramètres pour l'URL
        const mailtoLink = `mailto:t.venouil26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Ouvrir le client de messagerie de l'utilisateur
        console.log("Tentative d'ouverture du client de messagerie avec:", mailtoLink);
        window.location.href = mailtoLink;
    });
});