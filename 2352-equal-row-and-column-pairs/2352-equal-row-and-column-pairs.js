/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let colGrid = []
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        let arr = []
        for (let j = 0; j < grid[i].length; j++) {
            arr.push(grid[j][i])
        }
        colGrid.push(arr)
    }
    for (let i = 0; i < colGrid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (colGrid[i].join('.') === grid[j].join('.')) count += 1
        }
    }
    return count
};