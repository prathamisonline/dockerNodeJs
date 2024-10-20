import express from "express"

const app = express();


app.get("/", (req, res) => {
    res.send("Hello from docker node js app")
})

app.listen(9999, () => console.log("server running on port 9999."))