function palindrome(str) {
    let regex = /[^A-Za-z0-9]/g
    let cleansingString = str.replace(regex, "").toLowerCase().split("")
  
    let newString = cleansingString.join("")
    let reverseString = cleansingString.reverse().join("")
    
    if (newString === reverseString) {
      return true
    } else {
      return false
    }
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));