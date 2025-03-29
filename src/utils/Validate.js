 export const checkValidData = (email, password) => {
   const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  
   if (!isEmailValid.test(email))
     return "Please enter a valid email or phone number";
   if (!isPasswordValid.test(password)) return "Please enter a valid Password";
   
   return null;
 };