module.exports = {
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.js$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!axios).+\\.js$"
    ],
    moduleNameMapper: {
      "\\.(css|less|scss|svg)$": "identity-obj-proxy"
    }
  };
