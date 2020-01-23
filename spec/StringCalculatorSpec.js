describe("String Calculator test", ()=> {
  it('returns 0 for a empty string',()=>{
    const newStringCalculator = new StringCalculator()
    const emptyString = ''
    const emptyStringResult = 0
    
    const result = newStringCalculator.add(emptyString)
    
    expect(emptyStringResult).toEqual(result)
  })
  
  it('returns the number for a single number string',()=>{
    const newStringCalculator = new StringCalculator()
    const testString = '1'
    const stringResult = 1
    
    const result = newStringCalculator.add(testString)
    
    expect(stringResult).toEqual(result)
  })
  
  it('returns the sum of the numbers of the given string',()=>{
    const newStringCalculator = new StringCalculator()

    const { firstStringResult, firstResult } = twoNumbersString(newStringCalculator);
    const { secondStringResult, secondResult } = twoDistinctNumbersString(newStringCalculator);
    const { thirdStringResult, thirdResult } = threeNumbersString(newStringCalculator);
    const { fourthStringResult, fourthResult } = includedNegativeNumbersString(newStringCalculator);

    expect(firstStringResult).toEqual(firstResult)
    expect(secondStringResult).toEqual(secondResult)
    expect(thirdStringResult).toEqual(thirdResult)
    expect(fourthStringResult).toEqual(fourthResult)
  })
  
  it('returns an array of numbers for a mixed number and symbols string',()=>{
    const newStringCalculator = new StringCalculator()
    const testCases = ["1\n2,3", "0", "", "//;\n1;2"]
    const testResults = [6, 0, 0, 0]
    
    for (let i=0; i<testCases.length; i++){
      let result = newStringCalculator.add(testCases[i])
      expect(testResults[i]).toEqual(result)
    }
  })
  
  it('Unity test that splits by coma or line return', ()=>{
    const newStringCalculator = new StringCalculator()
    const testCases = "1\n2,3"
    const testResults = [ '1', '2', '3' ]
    
    let result = newStringCalculator.splitTestStringIntoAnArrayOfNumbers(testCases)
    
    expect(testResults).toEqual(result)
  })
  
  it('returns only the sum of numbers smaller 1000', ()=>{
    const newStringCalculator = new StringCalculator()
    const testCases = "1,2000,1000,3"
    const testResults = 1004
    
    let result = newStringCalculator.add(testCases)
    
    expect(testResults).toEqual(result)
  })
});

// Helpers

function includedNegativeNumbersString(newStringCalculator) {
  const testStringFourthValue = '674-435-6\n782';
  const fourthStringResult = 'Negatives not allowed: -435,-6';
  const fourthResult = newStringCalculator.add(testStringFourthValue);
  return { fourthStringResult, fourthResult };
}

function threeNumbersString(newStringCalculator) {
  const testStringThirdValue = '672';
  const thirdStringResult = 672;
  const thirdResult = newStringCalculator.add(testStringThirdValue);
  return { thirdStringResult, thirdResult };
}

function twoDistinctNumbersString(newStringCalculator) {
  const testStringSecondValue = '2,3';
  const secondStringResult = 5;
  const secondResult = newStringCalculator.add(testStringSecondValue);
  return { secondStringResult, secondResult };
}

function twoNumbersString(newStringCalculator) {
  const testStringFirstValue = '1,1';
  const firstStringResult = 2;
  const firstResult = newStringCalculator.add(testStringFirstValue);
  return { firstStringResult, firstResult };
}

