// Function to calculate the length of days between two dates


export const getDaysLeft = (currentDate, departDate) => {
    return Math.ceil(
      Math.abs(new Date(departDate) - new Date(currentDate)) /
        (1000 * 60 * 60 * 24)
    );
  };
  
//Formatting date
  
  export const reformatDate = (date) => {
    return date.split("-").reverse().join("-").replace(/-/g, "/");
  };
  
  // validate form
  
  export const formValidation = (to, from, departDate, returnDate) => {
    if ((from, to, departDate, returnDate !== "")) return true;
  };