/* =========================================================
   MEGODOGGY JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* ================= WAITLIST ================= */

const waitlistForm = document.getElementById("waitlistForm");
const formMessage = document.getElementById("formMessage");

if (waitlistForm) {

    waitlistForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const formData = new FormData(waitlistForm);

        try {

            const response = await fetch(
                waitlistForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {

                formMessage.textContent =
                    "You're on the list! 🐾";

                waitlistForm.reset();

            } else {

                formMessage.textContent =
                    "Something went wrong. Please try again.";

            }

        } catch (error) {

            formMessage.textContent =
                "Something went wrong. Please try again.";

        }

    });

}


/* ================= LANGUAGE SWITCH ================= */

const enBtn = document.getElementById("enBtn");
const kaBtn = document.getElementById("kaBtn");

const translatedElements =
    document.querySelectorAll("[data-en][data-ka]");

const languageInput =
    document.getElementById("email");


function setLanguage(language) {

    translatedElements.forEach((element) => {

        element.textContent =
            element.getAttribute(`data-${language}`);

    });


    /* Change email placeholder */

    if (languageInput) {

        if (language === "ka") {

            languageInput.placeholder =
                languageInput.getAttribute("data-placeholder-ka");

        } else {

            languageInput.placeholder =
                languageInput.getAttribute("data-placeholder-en");

        }

    }


    /* Update active button */

    if (language === "ka") {

        kaBtn.classList.add("active");
        enBtn.classList.remove("active");

        document.documentElement.lang = "ka";

    } else {

        enBtn.classList.add("active");
        kaBtn.classList.remove("active");

        document.documentElement.lang = "en";

    }


    /* Remember selected language */

    localStorage.setItem("megodoggyLanguage", language);

}


/* English button */

if (enBtn) {

    enBtn.addEventListener("click", () => {
        setLanguage("en");
    });

}


/* Georgian button */

if (kaBtn) {

    kaBtn.addEventListener("click", () => {
        setLanguage("ka");
    });

}


/* ================= LOAD SAVED LANGUAGE ================= */

const savedLanguage =
    localStorage.getItem("megodoggyLanguage");

if (savedLanguage === "ka") {

    setLanguage("ka");

} else {

    setLanguage("en");

}
