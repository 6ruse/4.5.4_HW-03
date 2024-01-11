class Device {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.connected = false;
    }

    devicePower() {
        console.log(`Power is ${this.power}`);
    }

    deviceOn() {
        if (this.connected === false) {
            this.connected = true;
            console.log("Устройство включено");
        } else {
            console.log("Уже включено");
        }
    }

    deviceOff() {
        if (this.connected === true) {
            this.connected = false;
            console.log("Устройство выключено");
        } else {
            console.log("Уже выключен");
        }
    }
}

class PowerTools extends Device {
    constructor(name, power, radiation) {
        super(name, power);
        this.radiation = radiation;
    }
}

const monitor = new Device("Device1", "750Wt");
const microwave = new PowerTools("Device2", "500Wt", "123 param");

monitor.deviceOn();
microwave.deviceOff();
