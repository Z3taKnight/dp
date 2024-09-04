/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const blocks = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === '.') continue;

            const blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i].has(val) || cols[j].has(val) || blocks[blockIndex].has(val)) {
                return false;
            }

            rows[i].add(val);
            cols[j].add(val);
            blocks[blockIndex].add(val);
        }
    }

    return true;
};