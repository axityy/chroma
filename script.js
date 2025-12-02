const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("login-btn");
const closeModal = document.getElementById("close-modal");
const discordAuth = document.getElementById("discord-auth");

const userInfo = document.getElementById("user-info");
const userAvatar = document.getElementById("user-avatar");
const userName = document.getElementById("user-name");

let loggedIn = false;

// Your actual Discord OAuth link goes here
const OAUTH_URL = "YOUR_DISCORD_OAUTH_URL_HERE";

/* ------------------------
   SIGN IN button (nav)
   ------------------------ */
loginBtn.onclick = () => {
    openModal();
};

/* ------------------------
   BUY buttons
   ------------------------ */
document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.onclick = () => {
        if (!loggedIn) {
            openModal();
        } else {
            alert("Purchase Complete!");
        }
    };
});

/* ------------------------
   OPEN MODAL
   ------------------------ */
function openModal() {
    modal.classList.remove("hidden");

    // Animation
    const box = document.querySelector(".modal-content");
    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";

    setTimeout(() => {
        box.style.transition = "all 0.25s ease";
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
    }, 10);
}

/* ------------------------
   CLOSE MODAL
   ------------------------ */
closeModal.onclick = () => {
    modal.classList.add("hidden");
};

/* ------------------------
   Login inside modal
   ------------------------ */
discordAuth.onclick = () => {
    window.location.href = OAUTH_URL;
};
