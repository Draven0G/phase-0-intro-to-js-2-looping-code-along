// Code your solutions in this file
function countDown(num) {
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please provide a positive integer.");
        return;
    }

    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage:
countDown(10);
