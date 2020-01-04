
async function waitForOneMin() {
    setTimeout(() => {
        console.log("Waiting done for one minute!");
    }, 1000);
}

async function waitForTwoMinutes() {
    setTimeout(() => {
        console.log("Waiting done for two minutes!");
    }, 2000);
}

function noWaiting(args) {
    console.log("I do not want to wait, ", args);
}

(async function () {

    noWaiting(100);

    console.log("Start waiting for one minute... ");
    await waitForOneMin();

    noWaiting(200);

    console.log("Start waiting for two minutes... ");
    await waitForTwoMinutes();

    noWaiting(300);

})();