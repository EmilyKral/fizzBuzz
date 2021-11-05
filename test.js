const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", () => {
	let fizzBuzz = fizzbuzz.fizzBuzz;
	test("function exists", () => {
		expect(fizzBuzz).toBeDefined();
	});

	test("a multiple of 3 and 5 returns fizzbuzz", () => {
		expect(fizzBuzz(15)).toEqual("FizzBuzz");
	});

	test("a multiple of 3 returns fizz", () => {
		expect(fizzBuzz(9)).toEqual("Fizz");
	});

	test("a multiple of 5 returns buzz", () => {
		expect(fizzBuzz(10)).toEqual("Buzz");
	});

	test("not a multiple of 3 or 5 returns the number itself", () => {
		expect(fizzBuzz(8)).toEqual(8);
	});
});
