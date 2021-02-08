const {median, mode, mean} = require('./helpers')

describe('Shud test median', function() {
    test('should get the number in the midle of the array', function() {
        const n = median(['1','2','3'])
        expect(n).toEqual(2)
    })
    test('should return NaN if there is empty string', function() {
        const n = median('')
        expect(isNaN(n)).toEqual(true)
    })
    test('should check if values is a string', function() {
        const n = median(['1','b','3'])
        expect(typeof n).toEqual('string')
    })
})

describe('Shud test mean', function() {
    test('should get the average of the array', function() {
        const n = mean(['1','3','5', '7'])
        expect(n).toEqual(4)
    })
    test('should return NaN if there is empty string', function() {
        const n = mean([''])
        expect(isNaN(n)).toEqual(true)
    })
    test('should check if there is a string int the array', function() {
        const n = mean(['1','b','3'])
        expect(typeof n).toEqual('string')
    })
})

describe('Shud test mode', function() {
    test('should get the most freaquent number of the array', function() {
        const n = mode(['1','3','5', '7','3'])
        expect(n).toEqual(3)
    })
    test('should return NaN if there is empty string', function() {
        const n = mode([''])
        expect(isNaN(n)).toEqual(true)
    })
    test('should check if values is a string in the array', function() {
        const n = mode(['1','3','5','b','7','3'])
        expect(typeof n).toEqual('string')
    })
})