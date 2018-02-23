export class Cipher {
  var number;
  encrypt(str) { return str+number;}
  decrypt(str) { return str-number;}

}

export class CaesarCipher extends Cipher {
  constructor(number){
    this.number = number;
  }
}
