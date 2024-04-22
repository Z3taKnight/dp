/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    for (const char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }
    for (const char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }
    let map1Key = Array.from(map1.keys());
    map1Key.sort((a, b) => a.localeCompare(b));
    let map2Key = Array.from(map2.keys());
    map2Key.sort((a, b) => a.localeCompare(b));
    if (map1Key.join(".") !== map2Key.join(".")) return false;
    let map1KeyLen = Array.from(map1.values());
    map1KeyLen.sort((a, b) => a - b);
    let map2KeyLen = Array.from(map2.values());
    map2KeyLen.sort((a, b) => a - b);
    if (map1KeyLen.join(".") === map2KeyLen.join(".")) return true;
    return false;
};