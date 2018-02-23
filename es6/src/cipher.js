export class Cipher {
  encrypt(str) { return str+this.number;}
  decrypt(str) { return str-this.number;}

}

export class CaesarCipher extends Cipher {
  constructor(number){
    this.number = number;
  }
}
