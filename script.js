document.addEventListener("DOMContentLoaded", function() {
  // Animation de présentation
  var logo = document.getElementById('logo');
  var subtitle = document.getElementById('subtitle');
  
  logo.style.opacity = '0';
  subtitle.style.opacity = '0';
  
  setTimeout(function() {
    logo.style.transition = 'opacity 1s ease-in-out';
    subtitle.style.transition = 'opacity 1s ease-in-out';
    logo.style.opacity = '1';
    subtitle.style.opacity = '1';
  }, 500);
  
  // Redirection vers la page d'invitation Discord
  var inviteBtn = document.getElementById('inviteBtn');
  inviteBtn.addEventListener('click', function() {
    window.location.href = 'invite.html'; // Rediriger vers la page d'invitation
  });
});

