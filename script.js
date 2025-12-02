const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeModal = document.getElementById("close-modal");
const discordAuth = document.getElementById("discord-auth");

const userInfo = document.getElementById("user-info");
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");

let loggedIn = false;

/* ------------------------
   LOGIN BUTTON (NAVBAR)
   ------------------------ */
loginBtn.onclick = () => {
    // Redirect to Discord OAuth (REAL REDIRECT)
    window.location.href = "YOUR_DISCORD_OAUTH_URL_HERE";
};

/* ------------------------
   BUY BUTTON → show modal
   ONLY IF not logged in
   ------------------------ */
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.onclick = () => {
        if (!loggedIn) {
            openModal();
        } else {
            alert("Purchase complete! (template)");
        }
    };
});

/* ------------------------
   OPEN MODAL
   ------------------------ */
function openModal() {
    modal.classList.remove("hidden");

    const box = document.querySelector(".modal-content");
    box.classList.remove("animate-in");
    void box.offsetWidth; // restart animation
    box.classList.add("animate-in");
}

/* ------------------------
   CLOSE MODAL
   ------------------------ */
closeModal.onclick = () => {
    modal.classList.add("hidden");
};

/* ------------------------
   MODAL "Login With Discord"
   (same redirect as navbar)
   ------------------------ */
discordAuth.onclick = () => {
    window.location.href = "YOUR_DISCORD_OAUTH_URL_HERE";
};
