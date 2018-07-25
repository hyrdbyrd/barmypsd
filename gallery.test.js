const assert = require('assert');
const mockFs = require('mock-fs');

const gallery = require('./gallery');

mockFs({
    public: {
        images: {
            slider: {
                's1.png': '',
                's2.png': ''
            }
        }
    }
});

describe('gallery json generator', () => {
    it('should work fine', () => {
        const expected = [
            'images/slider/s1.png',
            'images/slider/s2.png'
        ];

        return gallery().then(paths => assert.deepStrictEqual(paths, expected));
    });
});
