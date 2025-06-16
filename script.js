document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada! Em breve entraremos em contato.");
        this.reset();
    });
