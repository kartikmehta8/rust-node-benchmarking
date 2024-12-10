# Rust & Node.js Benchmark Project

This project demonstrates the use of **Rust bindings in Node.js** to perform a CPU-intensive task (calculating Fibonacci numbers) and benchmarks the performance difference between a **pure Node.js implementation** and a **Rust-powered implementation**. The benchmarking is conducted using the `autocannon` library.

## Project Structure

```
project/
├── src/
│   └── lib.rs          # Rust implementation of Fibonacci calculation.
├── target/             # Compiled Rust artifacts.
├── index.node          # Compiled Neon bindings for Node.js.
├── index.js            # Node.js server with endpoints.
├── benchmark.js        # Benchmark script using autocannon.
├── package.json        # Node.js dependencies.
├── Cargo.toml          # Rust dependencies and project configuration.
└── README.md           # Documentation.
```

## Running the Project

### Start the Server
Run the Node.js server:
```bash
node index.js
```
The server will start at `http://localhost:3000`.

### API Endpoints
- **Node.js Endpoint**:
  ```
  GET http://localhost:3000/node-fib?n=<number>
  ```
  Example: `http://localhost:3000/node-fib?n=35`

- **Rust Endpoint**:
  ```
  GET http://localhost:3000/rust-fib?n=<number>
  ```
  Example: `http://localhost:3000/rust-fib?n=35`

---

## Benchmarking

The benchmarking script uses `autocannon` to test the performance of the two endpoints under load.

### Run Benchmark
Run the benchmarking script:
```bash
node benchmark.js
```

### Example Output

```js
// For Rust Endpoint
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '29ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '27ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '27ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '28ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '30ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '35ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '35ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '32ms' }
{ method: 'Rust', input: 35, result: 9227465, timeTaken: '28ms' }

// For Node Endpoint
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '97ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '88ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '87ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '79ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '99ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '96ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '90ms' }
{ method: 'Node.js', input: 35, result: 9227465, timeTaken: '88ms' }
```

## Advantages of Offloading Tasks to Rust

1. **Performance**:
   - Rust is a systems programming language optimized for performance and memory efficiency.
   - For CPU-intensive tasks, Rust can outperform Node.js by an order of magnitude due to its compiled nature.

2. **Concurrency**:
   - Rust handles concurrency efficiently with zero-cost abstractions and safety guarantees, making it ideal for multi-threaded workloads.

3. **Memory Safety**:
   - Rust guarantees memory safety at compile time, reducing the risk of bugs like segmentation faults and buffer overflows.

4. **Reuse of Existing Code**:
   - You can integrate high-performance Rust libraries into your Node.js project, leveraging the best of both ecosystems.

## Use Case
This project is ideal for scenarios where:
- You need to process large amounts of data or perform complex computations (e.g., image processing, cryptography, simulations).
- The performance of pure JavaScript is insufficient for the workload.
- You want to optimize resource-intensive parts of your Node.js application without rewriting the entire project.

