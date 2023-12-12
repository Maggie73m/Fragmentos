
function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'flex';

   
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
}


function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    
    window.onclick = null;
}
