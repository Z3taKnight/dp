/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
    let dQueue = [];
    let rQueue = [];
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] == "D") dQueue.push(i);
        else rQueue.push(i);
    }
    let i = senate.length;
    while (dQueue.length > 0 && rQueue.length > 0) {
        if (dQueue[0] < rQueue[0]) {
            rQueue.shift();
            dQueue.shift();
            dQueue.push(i);
            i++;
        } else {
            dQueue.shift();
            rQueue.shift();
            rQueue.push(i);
            i++;
        }
    }
    return dQueue.length > 0 ? "Dire" : "Radiant";
};
