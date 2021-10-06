module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    __BASE_PATH__: ``, 
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 75,
      lines: 68,
      statements: 68,
    },
  },
}
