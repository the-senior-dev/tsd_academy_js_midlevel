module.exports = {
    verbose: true,
    testMatch: ['**/tests/**/*spec.js'],
    testPathIgnorePatterns: ['node_modules'],
    coveragePathIgnorePatterns: ['node_modules'],
    coverageDirectory: './coverage',
    collectCoverage: true,
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageReporters: ['text', 'html'],
    moduleFileExtensions: ['js']
}