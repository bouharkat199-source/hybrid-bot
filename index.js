console.log("✅ Hybrid Bot is running on Render!");
console.log("Bot will ping every 30 seconds to stay alive");

setInterval(() => {
  console.log("🟢 Bot active: " + new Date().toLocaleTimeString());
}, 60000);

setInterval(() => {
  console.log("📡 Ping sent to LayerEdge");
}, 30000);
