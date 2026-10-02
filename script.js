// Contact address used by the Say hello button.
const contactEmail = 'mehdiakacem20@gmail.com';

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('email-link').href = `mailto:${contactEmail}`;
