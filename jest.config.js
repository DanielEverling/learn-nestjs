module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  testEnvironment: "node",
  moduleNameMapper: {
    "@base/(.*)": "<rootDir>/src/$1",
    "@crosscutting/(.*)": "<rootDir>/src/crosscutting/$1",
  },
  testMatch: ["<rootDir>/test/**/*+(spec).+(ts)"],
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
