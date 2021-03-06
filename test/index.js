"use strict";

// Expect module.
const expect = require("chai").expect;

// Import source.
const md5 = require("../src/index");

// apache-md5 tests.
describe("apache-md5", () => {
  // Test for valid password.
  it("valid password", () => {
    const encrypted = md5(
      "su/P3R%se#ret!",
      "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/"
    );
    expect(encrypted).to.equal("$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/");
  });

  // Test for valid short password.
  it("valid short password", () => {
    const encrypted = md5("123456", "$1$VV5.4y5.$JbhytGQBPmDHBbrSjF2i7.");
    expect(encrypted).to.equal("$1$VV5.4y5.$JbhytGQBPmDHBbrSjF2i7.");
  });

  // Test for invalid password.
  it("invalid password", () => {
    const encrypted = md5(
      "invalidPass",
      "$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/"
    );
    expect(encrypted).to.not.equal("$apr1$cF.rAvCe$YlzjmK4qu/ia6hC8CNfnm/");
  });

  // Test for invalid short password.
  it("invalid short password", () => {
    const encrypted = md5(
      "passw0rdpa55wore",
      "$1$VV5.4y5.$9981ZZhKTHmeXFKQur4cV0"
    );
    expect(encrypted).to.not.equal("$1$VV5.4y5.$9981ZZhKTHmeXFKQur4cV0");
  });
});
