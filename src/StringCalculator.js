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
    
    if (this.thereAreNumbersToSum()) return this.sumsString(this.testStringArray)
  }
  
  // Private
  
  sumsString(testString) {
    let sumSolved = 0
    testString.forEach(element => {sumSolved += Number(element)})
    return sumSolved
  }
  
  thereAreNegativeNumbers(testString) {
    this.negativeNumbers  = testString.match(/-[0-9]\d*/g)
    return this.negativeNumbers
  }
  
  splitTestStringIntoAnArrayOfNumbers(testCases){
    let expectedDigitsArray = []
    const splitArray = testCases.split(/\n|,/)
    splitArray.forEach(element => {
      if (!isNaN(Number(element)) && Number(element) <= 1000) expectedDigitsArray.push(element)
    })
    this.testStringArray = expectedDigitsArray
    return expectedDigitsArray
  }
  
  thereAreNumbersToSum() {
    return this.testStringArray.length >= this.ENTER_THE_SUM_NULL_VALUE
  }
  
  inputTextIsEmpty(testString) {
    return testString === ""
  }
}