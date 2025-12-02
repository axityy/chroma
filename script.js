const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeModal = document.getElementById("close-modal");
const discordAuth = document.getElementById("discord-auth");

const userInfo = document.getElementById("user-info");
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");

let loggedIn = false;

/* OPEN MODAL from Login button */
loginBtn.onclick = () => {
    openModal();
};

/* OPEN MODAL from Buy buttons */
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.onclick = () => {
        if (!loggedIn) {
            openModal();
        } else {
            alert("Purchase complete! (template)");
        }
    };
});

/* Open modal function */
function openModal() {
    modal.classList.remove("hidden");

    // Restart animation
    const box = document.querySelector(".modal-content");
    box.classList.remove("animate-in");
    void box.offsetWidth;
    box.classList.add("animate-in");
}

/* Close modal */
closeModal.onclick = () => {
    modal.classList.add("hidden");
};

/* Fake Discord Authentication */
discordAuth.onclick = () => {
    loggedIn = true;

    // Fake user info (you can replace these later with real OAuth2 data)
    userAvatar.src = "https://cdn.discordapp.com/embed/avatars/4.png";
    userName.textContent = "ChromaUser";

    userInfo.classList.remove("hidden");
    loginBtn.classList.add("hidden");

    modal.classList.add("hidden");
};
