validate = () => {
    let firstNameInput = document.getElementById('first-name-input').value
    let lastNameInput = document.getElementById('last-name-input').value
    let emailInput = document.getElementById('email-input').value
    let phoneInput = document.getElementById('phone-input').value
    let batchInput = document.getElementById('batch-input').value
    let moduleInput = document.getElementById('module-input').value
    let tNcInput = document.getElementById('terms-conditions').checked

    let error = false

    if (firstNameInput.length >= 3) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastNameInput.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    if (phoneInput.length === 10) {
        document.getElementById('valid-phone').style.display = 'block'
        document.getElementById('invalid-phone').style.display = 'none'
    } else {
        document.getElementById('invalid-phone').style.display = 'block'
        document.getElementById('valid-phone').style.display = 'none'
        error = true
    }

    if (batchInput) {
        document.getElementById('batch-valid').style.display = "block";
        document.getElementById('batch-invalid').style.display = "none";
    } else {
        document.getElementById('batch-invalid').style.display = "block";
        document.getElementById('batch-valid').style.display = "none";
        error = true
    }
    if (moduleInput) {
        document.getElementById('module-valid').style.display = "block";
        document.getElementById('module-invalid').style.display = "none";
    } else {
        document.getElementById('module-invalid').style.display = "block";
        document.getElementById('module-valid').style.display = "none";
        error = true
    }
    if(tNcInput) {
		document.getElementById("invalid-check").style.display = "none";
	} else {
		document.getElementById("invalid-check").style.display = "block";
		error = true
	}

    if(!error) {
        alert('Your details have been saved successfully!')

        document.getElementById('first-name-input').value = '';
        document.getElementById('last-name-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('phone-input').value = '';
        document.getElementById('batch-input').value = '';
        document.getElementById('module-input').value = '';
        document.getElementById('terms-conditions').checked = false
    
        document.getElementById('first-name-valid').style.display = 'none';
        document.getElementById('last-name-valid').style.display = 'none';
        document.getElementById("email-valid").style.display = 'none';
        document.getElementById('valid-phone').style.display = 'none';
        document.getElementById("batch-valid").style.display = 'none';
        document.getElementById("module-valid").style.display = 'none';
    }

}
