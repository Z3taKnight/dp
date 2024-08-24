/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let arr = [];
    for (const a of asteroids) {
        if (a > 0) arr.push(a);
        else {
            while (arr.length && arr[arr.length - 1] > 0 && arr[arr.length - 1] < -a) arr.pop();
            if (arr.length && arr[arr.length - 1] == -a) arr.pop();
            else if (arr.length === 0 || arr[arr.length - 1] < 0) arr.push(a);
        }
    }
    return arr;
};