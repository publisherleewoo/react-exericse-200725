function increase(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result > 10) {
                const e = new Error("NumberTooBig");
                return reject(e);
            }
            resolve(result);
        }, 1000);
    });
    return promise;
}

increase(0)
    .then((number) => {
        console.log(number);
        return increase(number);
    })
    .then((number) => {
        console.log(number);
        return increase(number);
    })
    .then((number) => {
        console.log(number);
        return increase(number);
    })
    .catch((e) => {
        console.log("에러", e);
    });

async function runTasks() {
    try {
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
runTasks();
