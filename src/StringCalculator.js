const NEGATIVE_NUMBERS = /-[0-9]\d*/g
const COMA_AND_LINE_RETURNS = /\n|,/

class StringCalculator{
  constructor(){
    this.NULL_VALUE = 0
    this.ENTER_THE_SUM_NULL_VALUE = 0
    this.testStringArray = []
    this.negativeNumbers = []
  }
  
  add(testString){
    if (this.inputTextIsEmpty(testString)) return this.NULL_VALUE
    if (this.thereAreNegativeNumbers(testString)) return "Negatives not allowed: " + this.negativeNumbers

    this.splitTestStringIntoAnArrayOfNumbers(testString)
    
    if (!this.thereAreNumbersToSum()) return 'There is not numbers to sum'
    
    return this.sumsString(this.testStringArray)
  }
  
  // Private
  
  sumsString(testString) {
    let sumSolved = 0
    testString.forEach(element => {sumSolved += Number(element)})
    return sumSolved
  }
  
  thereAreNegativeNumbers(testString) {
    this.negativeNumbers  = testString.match(NEGATIVE_NUMBERS)
    return this.negativeNumbers
  }
  
  splitTestStringIntoAnArrayOfNumbers(testCases){
    let expectedDigitsArray = []
    const splitArray = testCases.split(COMA_AND_LINE_RETURNS)

    splitArray.forEach(element => {
      if (this.notNumberOrBiggerOneThousand(element)) expectedDigitsArray.push(element)
    })
    
    this.testStringArray = expectedDigitsArray
    return expectedDigitsArray
  }
  
  notNumberOrBiggerOneThousand(element) {
    return !isNaN(Number(element)) && Number(element) <= 1000
  }

  thereAreNumbersToSum() {
    return this.testStringArray.length >= this.ENTER_THE_SUM_NULL_VALUE
  }
  
  inputTextIsEmpty(testString) {
    return testString === ""
  }
}