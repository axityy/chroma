// DiamondBet script.js
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 600);
  }, 600);
});

// 1. DISCORD CONFIG (edit these)
const DISCORD_CLIENT_ID = "1443747179138384057";
const REDIRECT_URI = "https://chroma-chi.vercel.app/"; // the URL of your site

// 2. AUTH URL
const OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=token&scope=identify`;

// 3. DOM elements
const loginBtn = document.querySelector(".login-btn");
const header = document.querySelector("header");

// --- LOGIN BUTTON CLICK ---
loginBtn.addEventListener("click", () => {
  window.location.href = OAUTH_URL;
});

// --- CHECK IF DISCORD REDIRECTED BACK WITH ACCESS TOKEN ---
function getAccessTokenFromURL() {
  const fragment = window.location.hash.substring(1);
  const params = new URLSearchParams(fragment);
  return params.get("access_token");
}

async function fetchDiscordUser(token) {
  const res = await fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
}

// --- SAVE + LOAD USER ---
function saveUser(user, token) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
}

function loadUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// --- RENDER USER ---
function renderUser(user) {
  // Remove login button
  document.querySelector(".login-btn").remove();

  const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  const profileDiv = document.createElement("div");
  profileDiv.classList.add("profile-box");

  profileDiv.innerHTML = `
      <img src="${avatarURL}" class="pfp">
      <span class="name">${user.username}</span>
  `;

  header.appendChild(profileDiv);
}

// --- MAIN ---
(async () => {
  // 1. If we already logged in before
  const savedUser = loadUser();
  if (savedUser) {
    renderUser(savedUser);
    return;
  }

  // 2. If Discord redirected with token
  const token = getAccessTokenFromURL();
  if (token) {
    const user = await fetchDiscordUser(token);

    saveUser(user, token);
    renderUser(user);

    // Clear URL fragment
    history.replaceState(null, "", window.location.pathname);
  }
})();
