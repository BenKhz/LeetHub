/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const invert = (img) => {
        return img.map(row => {
            return row.map( bit => {
                return bit === 1 ? 0:1;
            })
        })
    }
    const flip = (image) =>{
        image.forEach( row => {
            let i = 0,
                j = row.length-1;
            while(i<j) {
                [row[i], row[j]] = [row[j], row[i]]
                i++;
                j--;
            }
        })
        return image
    }
    return invert(flip(image));
};