document.addEventListener("DOMContentLoaded", () => {
      let userValue = document.querySelector(".value")
      let resultValue = document.querySelector(".result")

      document.querySelectorAll('button').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const buttonValue = e.target.value;
                if (buttonValue !== undefined) {
                    userValue.value += buttonValue;
                }
            })
        })
        
      document.querySelector('.last').addEventListener('click', () => {
            if (!userValue.value) {
                  resultValue.value = "Enter Value"
            } else {
                  try {
                        resultValue.value = (eval(userValue.value)).toFixed(3)
                  } catch (error) {
                        resultValue.value = "Invalid Value"
                        userValue.value = ''
                  }
            }
            userValue.value = ''
      })

      document.querySelector('.sqaure').addEventListener('click', () => {
            if (!userValue.value) {
                  resultValue.value = "Enter Value"
            } else {
                  try {
                        resultValue.value = (Math.sqrt(userValue.value)).toFixed(3)
                  } catch (error) {
                        resultValue.value = "Invalid Value"
                        userValue.value = ''
                  }
            }
            userValue.value = ''
      })

      document.querySelector('.del').addEventListener('click', () => {
            if (userValue.value) {
                  userValue.value =  userValue.value.slice(0,-1)
            }
      })
      
      document.querySelector('.clear').addEventListener('click', () => {
            userValue.value = ''
            resultValue.value = ''
      })

      document.addEventListener('keydown',(e)=>{
            console.log(e.key);
            switch (e.key) {
                  case "+":
                        userValue.value += e.key;
                        break;
                  case ".":
                        userValue.value += e.key;
                        break;
                  case "%":
                        userValue.value += e.key;
                        break;
                  case "-":
                        userValue.value += e.key;
                        break;
                  case "*":
                        userValue.value += e.key;
                        break;
                  case "/":
                        userValue.value += e.key;
                        break;
                  case "1":
                        userValue.value += e.key;
                        break;
                  case "2":
                        userValue.value += e.key;
                        break;
                  case "3":
                        userValue.value += e.key;
                        break;
                  case "4":
                        userValue.value += e.key;
                        break;
                  case "5":
                        userValue.value += e.key;
                        break;
                  case "6":
                        userValue.value += e.key;
                        break;
                  case "7":
                        userValue.value += e.key;
                        break;
                  case "8":
                        userValue.value += e.key;
                        break;
                  case "9":
                        userValue.value += e.key;
                        break;
                  case "0":
                        userValue.value += e.key;
                        break;
                  case "Delete":
                        userValue.value  = '';
                        resultValue.value  = '';
                        break;
                  case "Enter":
                        if (!userValue.value) {
                              resultValue.value = "Enter Value"
                        } else {
                              try {
                                    resultValue.value = (eval(userValue.value)).toFixed(2)
                              } catch (error) {
                                    resultValue.value = "Invalid Value"
                                    userValue.value = ''
                              }
                        }
                        userValue.value = ''
                        break;
                  case "=":
                        if (!userValue.value) {
                              resultValue.value = "Enter Value"
                        } else {
                              try {
                                    resultValue.value = (eval(userValue.value)).toFixed(2)
                              } catch (error) {
                                    resultValue.value = "Invalid Value"
                                    userValue.value = ''
                              }
                        }
                        userValue.value = ''
                        break;
                  case "(":
                        userValue.value += e.key;
                        break;
                  case ")":
                        userValue.value += e.key;
                        break;
                  case "Backspace":
                        userValue.value =  userValue.value.slice(0,-1)
                        break;
                  default:
                        break;
            }
      })

})