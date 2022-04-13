let firstName = (firstName) => {
    return firstName.toUpperCase();
  };
  let lastName = (lastName) => {
    return lastName.toLowerCase();
  };
  console.log(firstName("Ajisa"));
  console.log(lastName("Smajic"));
  
  exports.firstName = firstName;
  exports.lastName = lastName;