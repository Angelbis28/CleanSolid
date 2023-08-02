
// interface Bird {
//   eat(): void;
//   fly(): void;

//   run(): void;
//   swin(): void;
// }


// class Tucan implements Bird {
//   public fly() {}
//   public eat() {}
//   public run() {}
//   public swin() {}
// }

// class Humminbird implements Bird {
//   public fly() {
//     throw new Error('Esta ave no vuela');
//   }
//   public eat() {}
//   public run() {}
//   public swin() {}
// }

// class Ostrich implements Bird {
//   public fly() {}
//   public eat() {}
//   public run() {}
//   public swin() {}
// }

// class Penguin implements Bird {
//   public fly() {
//     throw new Error('Esta ave no vuela');
//   }
//   public eat() {}
//   public run() {}
//   public swin() {}
// }

//Aqui se aplica el principio de segregacion de arriba


interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swin(): void;
}


class Tucan implements Bird, FlyingBird {
  public fly() { return 100; }
  public eat() {}
}

class Humminbird implements Bird, FlyingBird {
  public fly() { return 200; }
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swin() {}
}