var converter = {}

converter.float2string = function (num) {
  console.log(typeof String(num))
  return String(num)
}

//**************************************************************

converter.string2float = function (str) {
  console.log(typeof parseFloat(str))
  return parseFloat(str)
}

//************************************************************

converter.int2roman = function (number) {
  if (number < 5000) {
    var arr = String(number).split("")
    var last = arr.length-1
    var string = ""
    var i, k, num
    var roman = [{1: "I", 4: "IV", 5: "V", 9: "IX"},
                {1: "X", 4: "XL", 5: "L", 9: "XC"},
                {1: "C", 4: "CD", 5: "D", 9: "CM"},
                {1: "M", 4: "MMMM"}]

    for (i = last, r = 0; i >= 0; i--, r++) {
      num = parseInt(arr[i])
      if (num >=1 && num < 4) {
        string = roman[r][1].repeat(num) + string
      } else if (num == 4) {
        string = roman[r][4] + string
      } else if (num > 4 && num < 9) {
        string = roman[r][5] + roman[r][1].repeat(num-5) + string
      } else if (num == 9) {
        string = roman[r][9] + string
      }
    }
    return string
  } else {
    return "Your number must be under 5000!"
  }
}

//***********************************************************

converter.roman2int = function (string) {

  var last = string.length
  var number = ""
  var number1 = ""
  var number10 = ""
  var number100 = ""
  var number1000 = ""

  var roman = [
    {VIII:"8", LXXX:"80", DCCC:"800", MMMM:"4000"},
    {III: "3", XXX:"30", CCC:"300", MMM:"3000", VII:"7", LXX: "70", DCC:"700"},
    {II: "2", XX: "20", CC: "200", MM:"2000", IV: "4", XL: "40", CD: "400", VI: "6", LX: "60", DC: "600", IX: "9", XC: "90", CM: "900"},
    {I:"1", X:"10", C:"100", M:"1000", V:"5", L:"50", D:"500"}
  ]

   var keys1 = Object.keys(roman[0])
   var keys2 = Object.keys(roman[1])
   var keys3 = Object.keys(roman[2])
   var keys4 = Object.keys(roman[3])

  for (r = 0; r < 13; r++) {

    if (keys1[r] == string.substring(last-4,last)){
      number1 = roman[0][keys1[r]]
    } else if (keys2[r] == string.substring(last-3,last)){
      number1 = roman[1][keys2[r]]
    } else if (keys3[r] == string.substring(last-2,last)){
      number1 = roman[2][keys3[r]]
    } else if (keys4[r] == string.substring(last-1,last)){
      number1 = roman[3][keys4[r]]
    }

    if (keys1[r] == string.substring(last-8,last-4)){
      number10 = roman[0][keys1[r]]
    } else if (keys2[r] == string.substring(last-6,last-3)){
      number10 = roman[1][keys2[r]]
    } else if (keys3[r] == string.substring(last-4,last-2)){
      number10 = roman[2][keys3[r]]
    } else if (keys4[r] == string.substring(last-2,last-1)){
      number10 = roman[3][keys4[r]]
    }
    console.log("ok",number10, r)

  }
  console.log(number1)
  console.log(number10)
}

//console.log(converter.float2string(9))
//console.log(converter.string2float("5"))
console.log(converter.int2roman(4949))
//console.log(converter.roman2int("MMMMDCCCLXXXVIII"))
