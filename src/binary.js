const binary = (max) => {
    let queue = ["1"];
    let result = [];

    for(let i = 1; i <= max; i++) {
        let value = queue.shift();
        result.push(value);

        queue.push(value + "0");
        queue.push(value + "1");
    }

    return result;
};

module.exports = binary;