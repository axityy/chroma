import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // allow your browser to call this server
app.use(express.json());

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1466362286951104643/Jsm9HpSe-2vh2eDLjFcoQLdug_4Fe-iOd5rSCNWIZPVGdisDj_gZl9M9fH_yWErJVwph"; // replace with your webhook

app.post("/send-ip", async (req, res) => {
  const ip = req.body.ip || req.socket.remoteAddress;

  try {
    await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "IP Test",
        content: `Public IP: \`${ip}\``
      })
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
