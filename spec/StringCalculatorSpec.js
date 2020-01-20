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
    const testStringFirstValue = '1,1'
    const testStringSecondValue = '2,2'
    const testStringThirdValue = '672'
    const testStringFourthValue = '674-435-6\n782'
    const firstStringResult = 2
    const secondStringResult = 4
    const thirdStringResult = 672
    const fourthStringResult = 'Negatives not allowed: -435,-6'

    const firstResult = newStringCalculator.add(testStringFirstValue)
    const secondResult = newStringCalculator.add(testStringSecondValue)
    const thirdResult = newStringCalculator.add(testStringThirdValue)
    const fourthResult = newStringCalculator.add(testStringFourthValue)

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
