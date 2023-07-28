(()=>{

  // No aplicando Principio Responsabilidad Unica mala practica este codigo hace muchas cosas



// Creo un type para definir los tipos de gender
  type Gender = 'M'|'F';

  //Forma larga de crear una clases
  // class Person {
  //   // Propíedades
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date) {
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

//  Forma corta de crear una clase
class Person {
  constructor(
    public name: string,
    public gender: Gender,
    public birthdate: Date,
  ) {}
}

  //Instancia
  // const newPerson = new Person('Angelbis','M', new Date('1977-10-28'));
  // console.log({ newPerson });
// Creo una clase User que extiende todas las propiedades de la clase Person
class User extends Person {

  public lastAccess: Date;

  constructor(
    public email: string,
    public role: string,
    name: string,
    gender: Gender,
    birthdate: Date,
  ){
    // Con el super me va a permitir a llamar el constructor del padre Person
    super(name, gender, birthdate);
    this.lastAccess = new Date();
  }

  checkCredentials(){
    return true;
  }
  
}

class UserSettings extends User {
    constructor(
      public workingDirectory : string,
      public lastOpenFolder   : string,
      email                   : string,
      role                    : string,
      name                    : string,
      gender                  : Gender,
      birthdate               : Date,
    ){
      super(email, role, name, gender, birthdate)
    }
}

const userSettings = new UserSettings(
  '/usr/home',
  '/home',
  'angelbisfabian@gmail.com',
  'Admin',
  'Angelbis',
  'M',
  new Date('1977-10-28'),
);

console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });



})();