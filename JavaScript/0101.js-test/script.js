function log(date) {
    return (importance) => {
        return (message) => {
            console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
        }
    }
}

log(new Date())("DEBUG")("some messages");














// function log(date, importance, message) {
//     console.log(`[${date.getHours()}:date.getMinutes()}] [${importance}] ${message}`);
// }

// log(new Date(), "DEBUG", "some messages");