(function () {
    let newUsersList = document.querySelector('.new-users-list');

    // READ THE PDF BEFORE STARTING
    // Step 1-5 is read the pdf.

    // Add your code here
    let newUserForm = document.querySelector('.new-user-form');
    newUserForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let usernameElement = e.target.elements.username;
        let cityElement = e.target.elements.city;
        let provinceElement = e.target.elements.province;

        let username = usernameElement.value;
        let city = cityElement.value;
        let province = provinceElement.value;

        let isFormValid = true;

        // addUser(username, city, province);

        // validate username
        if (!isValueNotEmpty(username) || hasWhiteSpace(username)) {
            isFormValid = false;
            usernameElement.classList.add('is-invalid');
        }
        else {
            usernameElement.classList.remove('is-invalid');
        }

        // validate city
        if (!isValueNotEmpty(city)) {
            isFormValid = false;
            cityElement.classList.add('is-invalid');
        }
        else {
            cityElement.classList.remove('is-invalid');
        }

        // validate province
        if (!isValueNotEmpty(province)) {
            isFormValid = false;
            provinceElement.classList.add('is-invalid');
        } 
        else {
            provinceElement.classList.remove('is-invalid');
        }

        // if all forms are valid, then add useer, reset values
        if (isFormValid) {
            addUser(username, city, province);
            newUserForm.reset();
        }
    })

    

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();