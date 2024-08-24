/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let map = new Map()
    let ans = text.length
    let chars = ['b', 'a', 'l', 'o', 'n']
    for (let char of text) {
        if (chars.includes(char)) {
            if (map.has(char)) {
                if (char == 'l' || char == 'o') map.set(char, map.get(char) + 0.5)
                else map.set(char, map.get(char) + 1)
            }
            else {
                if (char == 'l' || char == 'o') map.set(char, 0.5)
                else map.set(char, 1)
            }
        }
    }
    if (chars.length != map.size) return 0
    for (let key of map.keys()) {
        ans = Math.min(ans, Math.floor(map.get(key)))
    }
    return ans
};