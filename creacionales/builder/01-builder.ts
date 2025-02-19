import { COLORS } from '../../helpers/colors.ts';
class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfigutation(): void {
    console.log(`Configuracion de la computadora:
        - CPU: ${this.cpu}
        - RAM: ${this.ram}
        - Almacenamiento: ${this.storage}
        - GPU: ${this.gpu ?? 'No tiene GPU'}
        `);
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const computer = new ComputerBuilder()
    .setCPU('Intel i7')
    .setRAM('16 GB')
    .setStorage('1 TB')
    .build();

  console.log('%Computadora basica', COLORS.orange);
  computer.displayConfigutation();
}

main();
