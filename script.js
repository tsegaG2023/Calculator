function test(string) {
  return new Function("return (" + string + ")")();
}

console.log(`NEW FUNCTION: ${test("2+9")}`);
