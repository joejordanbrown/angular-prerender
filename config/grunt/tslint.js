module.exports = {
    src: {
        files: {
            src: [ 'src/**/*.ts', '!src/browser/browsernizr.ts' ]
        },
        options: {
            configuration: 'config/tslint/src.json'
        }
    },
    test: {
        files: {
            src: [ 'test/**/*.ts' ]
        },
        options: {
            configuration: 'config/tslint/test.json'
        }
    }
};
