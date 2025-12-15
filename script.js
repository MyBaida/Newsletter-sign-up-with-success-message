function validateEmail() {

    const email = document.getElementById("email").value.trim()

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validEmail.test(email)) {
        localStorage.setItem("subscriberEmail", email);
        window.location.href = "success.html";

    }else {
        document.getElementById("error-text").classList.add("active");
        document.getElementById("email").classList.add("active");
    }
}

function dismiss() {
    localStorage.removeItem("subscriberEmail");
    window.location.href = "index.html";
}