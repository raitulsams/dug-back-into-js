console.log("Start");

function longTask() {
    const start = Date.now();  // Get current time
    while (Date.now() - start < 4000) {
        // Do nothing for 4 seconds (Blocking the main thread)
    }
    console.log("Long task finished");
}

longTask(); // Function is called and runs for 4 seconds

for (let i = 0; i < 3; i++) {
    console.log(i); // Runs only after the function completes
}

console.log("End");
