const express = require("express");
const { rust_fib } = require("./index.node");

const app = express();
const PORT = 3000;

function nodeFib(n) {
    if (n <= 1) return n;
    return nodeFib(n - 1) + nodeFib(n - 2);
}

app.get("/node-fib", (req, res) => {
    const n = parseInt(req.query.n || "10", 10);
    const start = Date.now();
    const result = nodeFib(n);
    const end = Date.now();

    console.log({ method: "Node.js", input: n, result, timeTaken: `${end - start}ms` });

    res.json({
        method: "Node.js",
        input: n,
        result,
        timeTaken: `${end - start}ms`,
    });
});

app.get("/rust-fib", (req, res) => {
    const n = parseInt(req.query.n || "10", 10);
    const start = Date.now();
    const result = rust_fib(n);
    const end = Date.now();

    console.log({ method: "Rust", input: n, result, timeTaken: `${end - start}ms` });

    res.json({
        method: "Rust",
        input: n,
        result,
        timeTaken: `${end - start}ms`,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
