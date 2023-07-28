(() => {

  function getMovieById( movieId: string ) {
      console.log({ movieId });
  }

  function getMovieCastById( id: string ) {
      console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( id: string ) {
      console.log({ id });
  }
  
  // Crear una película
  interface Movie {
    cast:         string[];
    description:  string;
    rating:       number;
    title:        string;
  }
  function createMovie( {title, description, rating, cast}: Movie) {
      console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthdate: Date ): boolean {
      
      // tarea asincrona para verificar nombre
      if( checkFullName(fullName) ) return false;
      // ..
      // ..
      if ( fullName === 'fernando' ) return false;

      console.log('Crear actor', birthdate);
      return true;        
  }

  function checkFullName( fullName: string) {
    console.log({ fullName });
    return true;
    
  }

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    // Buena practica
    if ( isDead ) return 1500;

    if ( isSeparated ) return 2500;
      
    // Esto es un condicional ternario
    return isRetired ? 3000 : 4000;

    //_________________________________
    // Mala practica
    //let result: number;

    // if ( isDead ) {
    //     result = 1500;
    // } else {
    //     if ( isSeparated ) {
    //         result = 2500;
    //     } else {
    //         if ( isRetired ) {
    //             result = 3000;
    //         } else {
    //             result = 4000; 
    //         }
    //     }
    // }
    
    // return result;
}





})();
