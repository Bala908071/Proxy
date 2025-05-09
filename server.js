const express = require("express");
const request = require("request");
const app = express();

app.get("/proxy", (req, res) => {
    const url = req.query.url;
    if (!url) return res.status(400).send("Missing URL");

    request({ url, headers: { 'User-Agent': 'Chrome' } }).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
