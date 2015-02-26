import minusE from "./ElectronCharge";

/*
  If a current of 1A flows through a copper wire, the number of electrons
  flowing by a cross section of the wire in 1 second is equal to 1C/1s
*/
const oneAmp = 1 / minusE;

const amps = (num = 1) => num * oneAmp;

export {
  amps
}
