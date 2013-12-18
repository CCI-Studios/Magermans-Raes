function validateForm(theform) {
	for (var i=0; i<theform.elements.length; i++) {
		var element = theform.elements[i];
		if (element.id == "dujrhk-dujrhk") {
			if (!isFilled(element)) {
				alert("Please enter your email address.");
				element.className = "error";
				element.focus();
				return false;
			} else {
				if (!isEmail(element)) {
					alert("Please enter a valid email address.");
					element.className = "error";
					element.focus();
					return false;
				} else {
					element.className = "";
				}
			}
		}
		if (element.id == "FirstName") {
			if (!isFilled(element)) {
				alert("Please enter your first name.");
				element.className = "error";
				element.focus();
				return false;
			} else {
				element.className = "";
			}
		}
		if (element.id == "LastName") {
			if (!isFilled(element)) {
				alert("Please enter your last name.");
				element.className = "error";
				element.focus();
				return false;
			} else {
				element.className = "";
			}
		}
	}
}
function isFilled(field) {
	if (field.value.length < 1) {
		return false;
	} else {
		return true;
	}
}
function isEmail(field) {
	if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
		return false;
	} else {
		return true;
	}
}
