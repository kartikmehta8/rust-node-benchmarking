const autocannon = require("autocannon");

async function benchmarkAPI(url, title) {
    console.log(`Running benchmark for: ${title}`);

    const result = await autocannon({
        url,             // URL to test.
        connections: 10, // Simulate 10 concurrent users.
        duration: 5,     // Test for 5 seconds.
    });

    console.log(`\nResults for ${title}:`);
    console.log(autocannon.printResult(result));
}

async function runBenchmarks() {
    // Benchmark for Node.js endpoint
    await benchmarkAPI("http://localhost:3000/node-fib?n=35", "Node.js Fibonacci");

    // Benchmark for Rust endpoint
    await benchmarkAPI("http://localhost:3000/rust-fib?n=35", "Rust Fibonacci");
}

runBenchmarks().catch((err) => {
    console.error("Error running benchmarks:", err);
});
