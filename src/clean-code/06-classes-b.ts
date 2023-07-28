(()=>{

  // No aplicando Principio Responsabilidad Unica mala practica este codigo hace muchas cosas



// Creo un type para definir los tipos de gender
  type Gender = 'M'|'F';

  interface PersonProps {
    name      : string;
    gender    : Gender;
    birthdate : Date;
  }

//  Forma corta de crear una clase
class Person {
  public name     : string;
  public gender   : Gender;
  public birthdate: Date;
  
  constructor( { name, gender, birthdate }: PersonProps ) {
    this.name       = name;
    this.gender     = gender;
    this.birthdate  = birthdate;
  }
}

// Nos ayuda a la hora de crear un constructor con argumento en la linea 44 
interface UserProps {
  email     : string;
  role      : string;
  name      : string;
  gender    : Gender;
  birthdate : Date;
}

// No cumple con el Principio Responsabilidad Unica porque tiene el extends
class User extends Person {
  public email    : string;
  public role     : string;
  public lastAccess: Date;

  constructor( { email, role, name, gender, birthdate, }: UserProps) {

    // Con el super me va a permitir a llamar el constructor del padre Person
    super({name, gender, birthdate});
    this.lastAccess = new Date();
    this.email  = email;
    this.role   = role;
  }

  checkCredentials(){
    return true;
  }
  
}

interface UserSettingsProps {
  workingDirectory : string;
  lastOpenFolder   : string;
  email            : string;
  role             : string;
  name             : string;
  gender           : Gender;
  birthdate        : Date;
}

// No cumple con el Principio Responsabilidad Unica porque tiene el extends
class UserSettings extends User {

    public workingDirectory : string;
    public lastOpenFolder : string;


    constructor( {      
      workingDirectory,
      lastOpenFolder  ,
      email           ,
      role            ,
      name            ,
      gender          ,
      birthdate       ,
    } : UserSettingsProps ){
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;

    }
}

const userSettings = new UserSettings({
  workingDirectory: '/usr/home',
  lastOpenFolder  : '/home',
  email           : 'angelbisfabian@gmail.com',
  role            : 'Admin',
  name            : 'Angelbis',
  gender          : 'M',
  birthdate       : new Date('1977-10-28'),
});

console.log({ userSettings });
console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });



})();