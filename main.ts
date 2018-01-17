/**
 * The pins used by SparkFun gamer:bit
 */
//%
enum GamerBitPin {
    //% block="P1 (X button)"
    P1 = <number>DAL.MICROBIT_ID_IO_P1,
    //% block="P2 (Y button)"
    P2 = <number>DAL.MICROBIT_ID_IO_P2,
    //% block="P8 (D-PAD up)"
    P8 = <number>DAL.MICROBIT_ID_IO_P8,
    //% block="P13 (D-PAD down)"
    P13 = <number>DAL.MICROBIT_ID_IO_P13,
    //% block="P14 (D-PAD left)"
    P14 = <number>DAL.MICROBIT_ID_IO_P14,
    //% block="P15 (D-PAD right)"
    P15 = <number>DAL.MICROBIT_ID_IO_P15,
}

/**
 * The event raised by the SparkFun gamer:bit pins
 */
//%
enum GamerBitEvent {
    //% block="down"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="up"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions to operate the SparkFun gamer:bit
 */
//% weight=10 color=#FFB400 icon="\uf286" block="gamePad"
namespace gamePad { 
    export enum Vibrator { 
        //% blockId="V0" block="停止"
        V0 = 0,
        //% blockId="V1" block="震动"
        V1 = 1,     
    }

    export enum Intensity { 
        //% blockId="I0" block="停止"
        I0 = 0,
        //% blockId="I1" block="弱"
        I1 = 1,
        //% blockId="I2" block="中"
        I2 = 2,
        //% blockId="I3" block="强"
        I3 = 3
    }

    export enum Led {
        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="ON" block="亮"
        ON = 1
    }

	/**
	 * 
	 */
    //% shim=gamerpad::init
    function init(): void {
        return;
    }

    //% weight=70
    //% blockId=gamePad_keyState block="gamerpad:bit|%button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function keyState(button: GamerBitPin): boolean {
        let num = false;
        switch (button) {
            case GamerBitPin.P1: { 
                pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P1)) {
                    num = true;
                }
                break;
            }
            case GamerBitPin.P2: { 
                pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P2)) {
                    num = true;
                }
                break;
            } 
            case GamerBitPin.P8: { 
                pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P8)) {
                    num = true;
                }
                break;
            } 
            case GamerBitPin.P13: { 
                pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P13)) {
                    num = true;
                }
                break;
            }
            case GamerBitPin.P14: { 
                pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P14)) {
                    num = true;
                }
                break;
            } 
            case GamerBitPin.P15: { 
                pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
                if (0 == pins.digitalReadPin(DigitalPin.P15)) {
                    num = true;
                }
                break;
            }      
        }
        pins.setPull(DigitalPin.P16, PinPullMode.PullNone);     


        return num;
    }

	/**
	 * Registers code to run when a gamerpad:bit event is detected.
	 */
    //% weight=60
    //% blockGap=50
    //% blockId=gamePad_onEvent block="gamerpad:bit on %button|%event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: GamerBitPin, event: GamerBitEvent, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler); // register handler
    }

    //% weight=50
    //% blockId=gamePad_vibratorMotor block="Vibrator motor|%index|"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1
    export function vibratorMotor(index: Vibrator): void {
        switch (index) { 
            case Vibrator.V0: { 
                vibratorMotorSpeed(0);
                break;
            }
            case Vibrator.V1: {
                vibratorMotorSpeed(255);
                break;
            }    
        }
        return;
    }

    //% weight=40
    //% blockId=gamePad_vibratorMotorIntensity block="Vibrator motor intensity|%index|"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1
    export function vibratorMotorIntensity(index: Intensity): void {
        switch (index) { 
            case Intensity.I0: { 
                vibratorMotorSpeed(0);
                break;
            }
            case Intensity.I1: {
                vibratorMotorSpeed(100);
                break;
            }
            case Intensity.I2: {
                vibratorMotorSpeed(150);
                break;
            }
            case Intensity.I3: {
                vibratorMotorSpeed(255);
                break;
            }    
        }
        return;
    }

    //% weight=30
    //% blockGap=50
    //% blockId=gamePad_vibratorMotorSpeed block="Vibrator motor speed|intension %degree"
    //% degree.min=0 degree.max=255
    export function vibratorMotorSpeed(degree: number): void {
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp);
        let num = degree * 4;
        pins.analogWritePin(AnalogPin.P12, num);
        return;
    }

    //% weight=20
    //% blockId=gamePad_led block="LED |%index|"
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=1
    export function led(index: Led): void {
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp);
        if (index) {
            pins.digitalWritePin(DigitalPin.P16, 1);
        } else {
            pins.digitalWritePin(DigitalPin.P16, 0);
        } 
    }
}