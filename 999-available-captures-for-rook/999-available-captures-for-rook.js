const numRookCaptures = (b) => {
    const ry = b.findIndex(row => row.includes('R'))
    const rx = b[ry].indexOf('R')
        
    const mvs = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1],
    ]
    
    let captures = 0
    
    for (let m of mvs) {
        let i = 1
        while(b[ry + m[0] * i] && b[ry + m[0] * i][rx + m[1] * i] === '.') {
            i++
        }
        captures += (b[ry + m[0] * i] && b[ry + m[0] * i][rx + m[1] * i] === 'p') ? 1 : 0
    }
    
    return captures
}