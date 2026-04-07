const { createDefaultEsmPreset } = require("ts-jest");

const presetConfig = createDefaultEsmPreset();

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  ...presetConfig,
};
