class Person {
  constructor(firstName, lastName, email, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.sex = sex;
  }

  SignUp() {
    console.log(this["firstName"], " SignedUp");
  }
  SignIn() {
    console.log(this["firstName"], " SignedIn");
  }
}

export default Person;
