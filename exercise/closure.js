function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 1
counter.increment(); // 1
counter.increment(); // 1
counter.decrement(); // 1
// counter.increment(); // 2
