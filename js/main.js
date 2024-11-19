const checkboxes = document.querySelectorAll('.inbox input [type= "checkbox"]');

let lastcheckboxes;

function handleCheckbox(e) {
    // Vérifie si la touche maj est enfoncée
    // et vérifie que la clé est bien vérifié
    let inBetween =false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach( checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastchecked) {
                inBetween = !inBetween;
                console.log('starling to check them in between!');
            }
            if (inBetween) {
                checkbox.checked= true;
            }

        });

    }

    lastchecked = this

}

checkboxes.forEach( checkboxes => checkboxes.addEventListener( 'click', handlechecked));