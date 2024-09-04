/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let currLine = board[i].filter(item => item != '.')
        let currSet = new Set(currLine)
        if (currSet.size != currLine.length) return false
    }
    let eachBlock = Array.from({ length: 9 }, () => [])
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            eachBlock[i][j] = board[j][i]
        }
    }
    for (let i = 0; i < 9; i++) {
        let currLine = eachBlock[i].filter(item => item != '.')
        let currSet = new Set(currLine)
        if (currSet.size != currLine.length) return false
    }
    eachBlock = Array.from({ length: 9 }, () => [])
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            eachBlock[blockIndex].push(board[i][j]);
        }
    }
    for (let i = 0; i < 9; i++) {
        let currLine = eachBlock[i].filter(item => item != '.')
        let currSet = new Set(currLine)
        if (currSet.size != currLine.length) return false
    }
    return true
};