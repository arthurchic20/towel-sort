  module.exports = function towelSort (matrix) {
    let res = []
    
    if (matrix === undefined) {
        return res
    } else {
        matrix.forEach((element, index) => {
            if ( index == 0) {
                res = res.concat(element)
            } else if (index > 0  && index % 2 == 0 ) {
                res = res.concat(element)
            } else if (index > 0  && index % 2 != 0) {
                res = res.concat(element.reverse())
            }
        }) 
        return res
    }
}

