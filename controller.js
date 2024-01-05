

class Controller {
    init(model) {
        this.model = Controller.model;
    }
    model = Controller;
    static changeBrightness(brightnessLevel) {
        if (isNumber(brightnessLevel)) {
            let brightness = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x01, 0x00, 0xAA, 0xFF, 0x5A];
            brightness[brightness.length - 3] = brightnessLevel;
            if (brightnessLevel > 170) {
                brightness[brightness.length - 2] = brightnessLevel + 85 - 256;
                brightness[brightness.length - 1] = 0x5B;
            } else {
                brightness[brightness.length - 2] = brightnessLevel + 85;
                brightness[brightness.length - 1] = 0x5A;
            }
            si9n.displayMessage({ raw: brightness });
            si9n.on('message', function () {

            });
        };
    };
}

function getControllerByName(controllerName) {
    for (let key in Controller) {
        if (Controller.hasOwnProperty(key)) {
            const controller = Controller[key];
            if (controller.name === controllerName) {
                console.log(controller);
                return controller;
            }
        }
    }
    return null; // or any appropriate default value or error handling
}

//TODO: test these commands!
const Resolutions = {
    R1920x1080: [0x55, 0xAA, 0x00, 0x59, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x39, 0xF6, 0x05, 0x04, 0x15, 0x01, 0x19, 0x00, 0x10, 0x17, 0x01, 0x03, 0x81, 0x1E, 0x17, 0xB4, 0xEA, 0xC1, 0xE5, 0xA3, 0x57, 0x4E, 0x9C, 0x23, 0x1D, 0x50, 0x54, 0x21, 0x08, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x5B, 0x36, 0x80, 0xA0, 0x70, 0x38, 0x23, 0x40, 0x30, 0x20, 0x36, 0x00, 0xCB, 0x28, 0x11, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x4E, 0x4F, 0x56, 0x41, 0x53, 0x54, 0x41, 0x52, 0x4D, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFC, 0x00, 0x4E, 0x4F, 0x56, 0x41, 0x20, 0x48, 0x44, 0x20, 0x43, 0x41, 0x52, 0x44, 0x00, 0x00, 0x00, 0x00, 0xFD, 0x00, 0x30, 0x7B, 0x1C, 0xC8, 0x11, 0x00, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x01, 0xAA, 0x02, 0x03, 0x3D, 0x41, 0x4D, 0x82, 0x05, 0x04, 0x04, 0x10, 0x11, 0x14, 0x13, 0x1F, 0x06, 0x15, 0x03, 0x12, 0x3E, 0x0F, 0x7F, 0x01, 0x17, 0x1F, 0x38, 0x1F, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x83, 0x4F, 0x00, 0x00, 0x67, 0x03, 0x0C, 0x00, 0x10, 0x00, 0xB8, 0x2D, 0x01, 0x1D, 0x00, 0x72, 0x00, 0xD0, 0x1E, 0x00, 0x6E, 0x28, 0x00, 0x00, 0x81, 0x49, 0x00, 0x00, 0x00, 0x1E, 0xD6, 0x09, 0x80, 0xA0, 0x00, 0xE0, 0x2D, 0x00, 0x10, 0x60, 0x00, 0x00, 0x81, 0x60, 0x00, 0x08, 0x08, 0x18, 0x8C, 0x0A, 0xD0, 0x90, 0x00, 0x40, 0x31, 0x00, 0x0C, 0x40, 0x00, 0x00, 0x81, 0x60, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0xB6, 0x86],
    R1440x900: [0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x39, 0xF6, 0x05, 0x04, 0x13, 0x06, 0x28, 0x00, 0x10, 0x17, 0x01, 0x03, 0x81, 0x1E, 0x17, 0xB4, 0xEA, 0xC1, 0xE5, 0xA3, 0x57, 0x4E, 0x9C, 0x23, 0x1D, 0x50, 0x54, 0x21, 0x08, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x10, 0x23, 0xA0, 0xA0, 0x50, 0x84, 0x23, 0x30, 0x30, 0x20, 0x36, 0x00, 0xCB, 0x28, 0x11, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x4E, 0x4F, 0x56, 0x41, 0x53, 0x54, 0x41, 0x52, 0x4D, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFC, 0x00, 0x4D, 0x41, 0x52, 0x53, 0xA3, 0x44, 0x49, 0x53, 0x50, 0x4C, 0x41, 0x59, 0x00, 0x00, 0x00, 0x00, 0xFD, 0x00, 0x30, 0x7B, 0x1C, 0xC8, 0x11, 0x00, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x00, 0xE9],
    R1280x720: [],
    R1280x1600: [0x55, 0xAA, 0x00, 0x4F, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x39, 0xF6, 0x05, 0x04, 0x15, 0x01, 0x19, 0x00, 0x10, 0x17, 0x01, 0x03, 0x81, 0x1E, 0x17, 0xB4, 0xEA, 0xC1, 0xE5, 0xA3, 0x57, 0x4E, 0x9C, 0x23, 0x1D, 0x50, 0x54, 0x21, 0x08, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x2E, 0x37, 0x00, 0xA0, 0x50, 0x40, 0x23, 0x60, 0x30, 0x20, 0x36, 0x00, 0xCB, 0x28, 0x11, 0x00, 0x00, 0x1E, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x4E, 0x4F, 0x56, 0x41, 0x53, 0x54, 0x41, 0x52, 0x4D, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFC, 0x00, 0x4E, 0x4F, 0x56, 0x41, 0x20, 0x48, 0x44, 0x20, 0x43, 0x41, 0x52, 0x44, 0x00, 0x00, 0x00, 0x00, 0xFD, 0x00, 0x30, 0x7B, 0x1C, 0xC8, 0x11, 0x00, 0x0A, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x01, 0x4E, 0x02, 0x03, 0x3D, 0x41, 0x4D, 0x82, 0x05, 0x04, 0x04, 0x10, 0x11, 0x14, 0x13, 0x1F, 0x06, 0x15, 0x03, 0x12, 0x3E, 0x0F, 0x7F, 0x01, 0x17, 0x1F, 0x38, 0x1F, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x83, 0x4F, 0x00, 0x00, 0x67, 0x03, 0x0C, 0x00, 0x10, 0x00, 0xB8, 0x2D, 0x01, 0x1D, 0x00, 0x72, 0x00, 0xD0, 0x1E, 0x00, 0x6E, 0x28, 0x00, 0x00, 0x81, 0x49, 0x00, 0x00, 0x00, 0x1E, 0xD6, 0x09, 0x80, 0xA0, 0x00, 0xE0, 0x2D, 0x00, 0x10, 0x60, 0x00, 0x00, 0x81, 0x60, 0x00, 0x08, 0x08, 0x18, 0x8C, 0x0A, 0xD0, 0x90, 0x00, 0x40, 0x31, 0x00, 0x0C, 0x40, 0x00, 0x00, 0x81, 0x60, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0xAC, 0x85]

}
const saveCommand = '55 AA 00 15 FE 00 01 FF FF FF 01 00 11 00 00 01 01 00 11 8B 59';

const Patterns = {
    Red: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x02, 0xDA, 0x58],
    Green: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x03, 0xDB, 0x58],
    Blue: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x04, 0xDC, 0x58],
    White: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x05, 0xDD, 0x58],
    Horizontal: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x06, 0xDE, 0x58],
    Vertical: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x07, 0xDF, 0x58],
    Diagonal: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x08, 0xE0, 0x58],
    GrayScale: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x09, 0xE1, 0x58],
    AgingAll: [0x55, 0xAA, 0x00, 0x80, 0xFE, 0x00, 0x01, 0x00, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x01, 0x00, 0x02, 0x01, 0x00, 0x0A, 0xE2, 0x58]
};

const DisplayModes = {
    Normal: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x50, 0x00, 0x20, 0x02, 0x01, 0x00, 0x00, 0xC7, 0x56],
    Freeze: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x50, 0x00, 0x20, 0x02, 0x01, 0x00, 0x01, 0xC8, 0x56],
    Black: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x50, 0x00, 0x20, 0x02, 0x01, 0x00, 0x02, 0xC9, 0x56]
};

const DisplayModes_VX1000 = {
    Normal: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x02, 0x00, 0x03, 0x00, 0x70, 0x56],
    Freeze: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x02, 0x00, 0x04, 0x00, 0x71, 0x56],
    Black: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x02, 0x00, 0x05, 0x00, 0x72, 0x56]
};

const DisplayModes_VX6s = {
    Normal: [0x55, 0xAA, 0x00, 0x38, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x01, 0x00, 0x03, 0xA7, 0x56],
    Freeze: [0x55, 0xAA, 0x00, 0x35, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x01, 0x00, 0x03, 0xA5, 0x56],
    Black: [0x55, 0xAA, 0x00, 0x37, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00, 0x00, 0x13, 0x01, 0x00, 0x03, 0xA2, 0x56]
};

const Layers_VX1000 = {
    MainLayer: [0x00],
    Layer1: [0x01],
    Layer2: [0x02]
};

const Inputs_VX1000 = {
    Layer1HDMI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x56],
    Layer1HDMI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0x7F, 0x56],
    Layer1DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0x80, 0x56],
    Layer1DVI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x00, 0x00, 0x81, 0x56],
    Layer1SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0x82, 0x56],
    Layer1OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0x83, 0x56],
    Layer1OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0x84, 0x56],
    Layer2HDMI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0xaE, 0x56],
    Layer2HDMI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0xaF, 0x56],
    Layer21DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0xb0, 0x56],
    Layer2DVI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x00, 0x00, 0xb1, 0x56],
    Layer2SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0xb2, 0x56],
    Layer2OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0xb3, 0x56],
    Layer2OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0xb4, 0x56],
    Layer3HDMI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0xDE, 0x56],
    Layer3HDMI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0xDF, 0x56],
    Layer31DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0xE0, 0x56],
    Layer3DVI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x00, 0x00, 0XE1, 0x56],
    Layer3SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0xE2, 0x56],
    Layer3OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0xE3, 0x56],
    Layer3OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0xE4, 0x56]
};

const PipOnOff = {
    OFF: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x30, 0x00, 0x20, 0x02, 0x01, 0x00, 0x00, 0xA6, 0x57],
    ON: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x30, 0x00, 0x20, 0x02, 0x01, 0x00, 0x01, 0xA7, 0x57]
};

const Inputs_VX6s = {
    Window1HDMI1: [0x55, 0xAA, 0x00, 0x88, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x11, 0x17, 0x57],
    Window1HDMI2: [0x55, 0xAA, 0x00, 0xA8, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x12, 0x39, 0x57],
    Window1SDI1: [0x55, 0xAA, 0x00, 0xC4, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x31, 0x75, 0x57],
    Window1SDI2: [0x55, 0xAA, 0x00, 0xD4, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x00, 0x32, 0x87, 0x57],
    Window1DVI1: [0x55, 0xAA, 0x00, 0xD6, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x01, 0x59, 0x57],
    Window1DVI2: [0x55, 0xAA, 0x00, 0xD7, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x02, 0x5D, 0x57],
    Window1USB: [0x55, 0xAA, 0x00, 0xD9, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x00, 0xA0, 0xFE, 0x57],

    Window2HDMI1: [0x55, 0xAA, 0x00, 0x47, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x01, 0x11, 0x07, 0x57],
    Window2HDMI2: [0x55, 0xAA, 0x00, 0x55, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x01, 0x12, 0x17, 0x57],
    Window2SDI1: [0x55, 0xAA, 0x00, 0x56, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x01, 0x31, 0x38, 0x57],
    Window2SDI2: [0x55, 0xAA, 0x00, 0x58, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x01, 0x32, 0x3C, 0x57],
    Window2DVI1: [0x55, 0xAA, 0x00, 0x59, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x01, 0x01, 0x0D, 0x57],
    Window2DVI2: [0x55, 0xAA, 0x00, 0x5A, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x01, 0x02, 0x11, 0x57],
    Window2USB: [0x55, 0xAA, 0x00, 0x5C, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x01, 0xA0, 0xB2, 0x57],

    Window3HDMI1: [0x55, 0xAA, 0x00, 0xA2, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x02, 0x11, 0x93, 0x57],
    Window3HDMI2: [0x55, 0xAA, 0x00, 0xA3, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x02, 0x12, 0x96, 0x57],
    Window3SDI1: [0x55, 0xAA, 0x00, 0xA5, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x02, 0x31, 0xB8, 0x57],
    Window3SDI2: [0x55, 0xAA, 0x00, 0xA6, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x03, 0x02, 0x32, 0xBB, 0x57],
    Window3DVI1: [0x55, 0xAA, 0x00, 0xA7, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x02, 0x01, 0x8C, 0x57],
    Window3DVI2: [0x55, 0xAA, 0x00, 0xA9, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x02, 0x02, 0x91, 0x57],
    Window3USB: [0x55, 0xAA, 0x00, 0xAA, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x02, 0xA0, 0x31, 0x58]
};

const Inputs_VX4s = {
    DVI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x10, 0xB4, 0x56],
    HDMI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0xA0, 0x44, 0x57],
    VGA1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x01, 0xA5, 0x56],
    VGA2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x02, 0xA6, 0x56],
    CVBS1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x71, 0x15, 0x57],
    CVBS2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x72, 0x16, 0x57],
    SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x40, 0xE4, 0x56],
    DisplayPort: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2D, 0x00, 0x20, 0x02, 0x01, 0x00, 0x90, 0x34, 0x57]
};

const Inputs_NovaProHD = {
    SDI: [0x55, 0xAA, 0x00, 0x2B, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1A, 0xDE, 0x56],
    DVI: [0x55, 0xAA, 0x00, 0x34, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1C, 0xE9, 0x56],
    HDMI: [0x55, 0xAA, 0x00, 0x3F, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1B, 0xF3, 0x56],
    DisplayPort: [0x55, 0xAA, 0x00, 0x51, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1E, 0x08, 0x57],
    VGA: [0x55, 0xAA, 0x00, 0x48, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x17, 0xF8, 0x56],
    CVBS: [0x55, 0xAA, 0x00, 0x5A, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x02, 0xF5, 0x56]
};

const Inputs_MCTRL4K = {
    DVI: [0x55, 0xAA, 0x00, 0x3E, 0xFE, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x23, 0x00, 0x00, 0x02, 0x01, 0x00, 0x61, 0x18, 0x58],
    HDMI: [0x55, 0xAA, 0x00, 0x8A, 0xFE, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x23, 0x00, 0x00, 0x02, 0x01, 0x00, 0x05, 0x08, 0x58],
    DisplayPort: [0x55, 0xAA, 0x00, 0x9D, 0xFE, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x23, 0x00, 0x00, 0x02, 0x01, 0x00, 0x5F, 0x75, 0x58]
};

const Inputs_VX600 = {
    Layer1HDMI1m: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0x7E, 0x56],
    Layer1HDMI2m: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0x7F, 0x56],
    Layer1DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0x80, 0x56],
    Layer1SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0x82, 0x56],
    Layer1OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0x83, 0x56],
    Layer1OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0x84, 0x56],
    Layer1Mosaic: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x00, 0x00, 0x85, 0x56],
    Layer2HDMI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0xaE, 0x56],
    Layer2HDMI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0xaF, 0x56],
    Layer2DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0xb0, 0x56],
    Layer2SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0xb2, 0x56],
    Layer2OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0xb3, 0x56],
    Layer2OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0xb4, 0x56],
    Layer2Mosaic: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x42, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x00, 0x00, 0xb5, 0x56],
    Layer3HDMI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x00, 0x00, 0x00, 0xDE, 0x56],
    Layer3HDMI2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x01, 0x00, 0x00, 0xDF, 0x56],
    Layer3DVI1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x02, 0x00, 0x00, 0xE0, 0x56],
    Layer3SDI: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x04, 0x00, 0x00, 0xE2, 0x56],
    Layer3OPT1: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x05, 0x00, 0x00, 0xE3, 0x56],
    Layer3OPT2: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x06, 0x00, 0x00, 0xE4, 0x56],
    Layer3Mosaic: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x72, 0x00, 0x02, 0x13, 0x03, 0x00, 0x07, 0x00, 0x00, 0XE5, 0x56]
}

const Inputs_NovaProUHDJr = {
    SDI: [0x55, 0xAA, 0x00, 0x2B, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1A, 0xDE, 0x56],
    DVI: [0x55, 0xAA, 0x00, 0x34, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1C, 0xE9, 0x56],
    HDMI: [0x55, 0xAA, 0x00, 0x3F, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1B, 0xF3, 0x56],
    DisplayPort: [0x55, 0xAA, 0x00, 0x51, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x22, 0x00, 0x20, 0x02, 0x01, 0x00, 0x1E, 0x08, 0x57]
}

const WorkingMode_VX6s = {
    Direct: [0x55, 0xAA, 0x00, 0xEC, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2C, 0x00, 0x00, 0x13, 0x01, 0x00, 0x00, 0x80, 0x57],
    Switcher: [0x55, 0xAA, 0x00, 0x1E, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2C, 0x00, 0x00, 0x13, 0x01, 0x00, 0x01, 0xB3, 0x56]

}

const WorkingMode_J6 = {
    SplicerMode: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2C, 0x00, 0x00, 0x13, 0x01, 0x00, 0x00, 0x94, 0x56],
    SwitcherMode: [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x2C, 0x00, 0x00, 0x13, 0x01, 0x00, 0x01, 0x95, 0x56]
}

const mappingCommands = {
    ON: [0x55, 0xAA, 0x00, 0x6B, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x88, 0x00, 0x00, 0x01, 0x01, 0x00, 0x05, 0x4B, 0x5B],
    OFF: [0x55, 0xAA, 0x00, 0x6A, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x88, 0x00, 0x00, 0x01, 0x01, 0x00, 0x01, 0x46, 0x5B]
    //ON NEW COMMAND: 0x55,0xaa,0x00,0x61,0xfe,0xff,0x01,0xff,0xff,0xff,0x01,0x00,0x88,0x00,0x00,0x01,0x01,0x00,0x05,0x41,0x5b
    //OFF new command: 0x55,0xaa,0x00,0x40,0xfe,0xff,0x01,0xff,0xff,0xff,0x01,0x00,0x88,0x00,0x00,0x01,0x01,0x00,0x01,0x1c,0x5b
}

Controller.VX4s = {
    name: "VX4s",
    hasBrightness: true,
    inputs: Inputs_VX4s,
    displayMode: DisplayModes,
    presets: 10,
    layers: 0,
    PiP: PipOnOff,
    workingMode: 0
};

Controller.VX6s = {
    name: "VX6s",
    hasBrightness: true,
    inputs: Inputs_VX6s,
    displayMode: DisplayModes_VX6s,
    presets: 16,
    layers: 0,
    PiP: 0,
    WorkingMode: WorkingMode_VX6s
};

Controller.NovaProHD = {
    name: "NovaProHD",
    hasBrightness: true,
    inputs: Inputs_NovaProHD,
    displayMode: DisplayModes,
    presets: 0,
    layers: 0,
    PiP: 0,
    workingMode: 0
};

Controller.NovaProUHDJr = {
    name: "NovaProUHDJr",
    hasBrightness: true,
    inputs: Inputs_NovaProUHDJr,
    displayMode: DisplayModes_VX1000,
    presets: 10,
    layers: false,
    PiP: 0,
    workingMode: 0
};

Controller.VX16s = {
    name: "VX16S",
    hasBrightness: true,
    inputs: 0,
    displayMode: DisplayModes_VX1000,
    presets: 10,
    layers: 0,
    PiP: 0,
    workingMode: 0
};

Controller.MCTRL4K = {
    name: "MCTRL4K",
    hasBrightness: true,
    inputs: Inputs_MCTRL4K,
    displayMode: DisplayModes,
    presets: 0,
    layers: 0,
    PiP: 0,
    workingMode: 0
};

Controller.VX1000 = {
    name: "VX1000",
    hasBrightness: true,
    inputs: Inputs_VX1000,
    presets: 10,
    displayMode: DisplayModes_VX1000,
    layers: Layers_VX1000,
    PiP: 0,
    workingMode: 0
};

Controller.VX600 = {
    name: "VX600",
    hasBrightness: true,
    inputs: Inputs_VX600,
    presets: 10,
    layers: Layers_VX1000,
    displayMode: DisplayModes_VX1000,
    PiP: 0,
    workingMode: 0
}

Controller.J6 = {
    name: "J6",
    hasBrightness: false,
    inputs: 0,
    presets: 32,
    layers: 0,
    displayMode: DisplayModes_VX1000,
    PiP: 0,
    workingMode: WorkingMode_J6
};

Controller.MCTRL300 = {
    name: "MCTRL300",
    hasBrightness: false,
    inputs: 0,
    presets: 32,
    layers: 0,
    displayMode: DisplayModes_VX1000,
    PiP: 0,
    workingMode: WorkingMode_J6
}

Controller.MCTRL300PRO = {
    name: "JMCTRL300PRO",
    hasBrightness: false,
    inputs: 0,
    presets: 32,
    layers: 0,
    displayMode: DisplayModes_VX1000,
    PiP: 0,
    workingMode: WorkingMode_J6
}

/* Create default initial page for VX4S */
var currentController = Controller.VX4s;
var currentId = "brightnessMenu";
loadControllerContent();

const getAllControllerModels = () => {
    return Object.values(Controller).filter(value => typeof value === 'object');
};

const modelPicker = document.getElementById('modelPicker');

getAllControllerModels().forEach(controller => {
    const option = document.createElement('option');
    option.value = controller.name;
    option.textContent = controller.name;
    modelPicker.appendChild(option);
});

// Function to update the content area
function updateContent(content) {
    document.querySelector('.content').innerHTML = content;
}

// Function to load controller-specific content
function loadControllerContent() {
    // Build and update the content based on currentControllerConfig
    // Build your content here
    console.log(currentId);
    var content = "";
    const brightnessH = '<br><h2>Brightness</h2><br><input type="range" min="0" max="255" value="0" id="brightnessLevel"><span id="brightnessLevelSpan">0</span><button id="setBrightness">Set Brightness</button><button id="saveBrightness">Save Brightness</button>';
    const noBrightnessH = '<br><h2>This controller cannot control brightness</h2>';
    const patternH = '<div id="patterns">Patterns: </div>';
    const presetH = '<br> <div>Presets: <select id="presetPicker"></select><button id="presetSet">Set Preset</button></div>';
    const inputsH = '<br><div id="inputs">Inputs:</div>';
    const noInputsH = '<br><h2>This controller cannot control inputs</h2>';
    const PiPH = '<br> <div id="PiP">PiP:</div>';
    const displayModeH = '<br> <div id="displaymode">Display Modes: </div>';
    const resolutionH = '<br> <div id="resolutions"> Resolution: </div>';
    const layersH = '<br><div id="layers">Layers: </div>';
    const workingModeH = '<br> <div id="workingMode">Working Mode:</div>';
    const mappingH = '<br> <div id = "mapping">Mapping: </div>';
    const increasedBrightnessH = '<br> <button id="graduallyIncreaseBrightness">Gradually increase Brightness</button> '
    if (currentId === "brightnessMenu") {
        if (currentController.hasBrightness) {
            content += brightnessH;
        } else {
            content += noBrightnessH;
        }
    }
    if (currentId === "inputMenu") {
        if (currentController.inputs != 0) {
            content += inputsH;
        } else {
            content += noInputsH;
        }
        content += resolutionH;
    }
    if (currentId === "screenMenu") {
        content += patternH;
        content += displayModeH;
        console.log(content);
    }

    if (currentId === "advancedMenu") {
        if (currentController.PiP != 0) {
            content += PiPH;
        }
        if (currentController.presets > 0) {
            content += presetH;
        }
        if (currentController.layers != 0) {
            content += layersH;
        }
        if (currentController.workingMode != 0) {
            content += workingModeH;
        }
        if (currentController.hasBrightness) {
            content += increasedBrightnessH;
        }
    }
    if (currentId === "prestoreMenu") {
        content += mappingH;
    }

    updateContent(content);

    if (currentId === "brightnessMenu") {
        addBrightnessEventListener();
    }
    if (currentId === "inputMenu") {
        createButtons("inputs", currentController.inputs);
        createButtons("resolutions", Resolutions);
    }
    if (currentId === "screenMenu") {
        createButtons("patterns", Patterns);
        createButtons("displaymode", currentController.displayMode);
    }
    if (currentId === "advancedMenu") {
        if (currentController.PiP != 0) {
            createButtons("PiP", currentController.PiP);
        }
        if (currentController.presets > 0) {
            createPresetsPicker(currentController.presets);
            PresetEventListener();
        }
        if (currentController.layers != 0) {
            createButtons("layers", currentController.layers);
        }
        if (currentController.workingMode != 0) {
            createButtons("workingMode", currentController.workingMode);
        }
        if (currentController.hasBrightness) {
            addGradualBrightnessEventListener();
        }
    }
    if (currentId == "prestoreMenu") {
        createButtons("mapping", mappingCommands);
    }
}

// Select all <li> elements inside the <div> with class "menu"
const menuItems = document.querySelectorAll('.menu ul li');

modelPicker.addEventListener('change', () => {
    currentController = getControllerByName(modelPicker.value);
    loadControllerContent();
});

menuItems.forEach(item => {
    if (item.id == "controllerMenu" || item.id == "saveMenuButton") {

    } else {
        item.addEventListener('click', () => {
            currentId = item.id;
            loadControllerContent();
        });
    }
});

document.getElementById("saveMenuButton").addEventListener('click', function () {
    si9n.displayMessage({ raw: saveCommand });
});

function addBrightnessEventListener() {
    document.getElementById("brightnessLevel").addEventListener("change", function () {
        document.getElementById("brightnessLevelSpan").innerText = this.value

    });
    document.getElementById('setBrightness').addEventListener('click', function () {
        var brightness = parseInt(document.getElementById('brightnessLevel').value);
        Controller.changeBrightness(brightness);
    });

    document.getElementById('saveBrightness').addEventListener('click', function () {
        si9n.displayMessage({ raw: saveCommand });
    });
}
function isNumber(number) {
    return typeof (number) === 'number';
}

function createButtons(elementId, commands) {
    const container = document.getElementById(elementId);
    Object.keys(commands).forEach(command => {
        const button = document.createElement('button');
        button.textContent = command;
        button.addEventListener('click', () => {
            //console.log(commands[command]);
            si9n.displayMessage({ raw: commands[command] });
        });
        container.appendChild(button);
    });
}

function createPresetsPicker(presets) {
    if (isNumber(presets) && presets > 1) {
        const container = document.getElementById('presetPicker');
        for (var x = 1; x <= presets; x++) {
            const option = document.createElement('option');
            option.textContent = "Preset " + x;
            container.appendChild(option);
        }
    };
}

function PresetEventListener() {
    var presetButton = document.getElementById("presetSet");
    presetButton.addEventListener('click', () => {
        const presetDropdown = document.getElementById("presetPicker");
        var preset = parseInt(presetDropdown.options[presetDropdown.selectedIndex].text.split(' ')[1]);
        switch (currentController) {
            case Controller.VX6s:

                console.log("VX6s");
                preset_VX6s(preset);
                break;
            case Controller.VX4s:

                console.log("VX4s");
                preset_VX4s(preset);
                break;
            case Controller.VX1000:
            case Controller.VX600:
            case Controller.VX16s:

                console.log("VX1000");
                preset_VX1000(preset);
                break;
            case Controller.novaProUHDJr:

                console.log("NovaProUHDJr");
                preset_NovaProUHDJr(preset);
                break;
            case Controller.J6:

                console.log("J6");
                preset_J6(preset);
                break;
            default:
                console.log("Controller model not found!");
                break;
        }
    });
}


function preset_VX4s(preset) {
    if (isNumber(preset)) {
        var presetHex = [0x55, 0xAA, 0x00, 0x2E, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x70, 0x00, 0x20, 0x02, 0x01, 0x00, 0x00, 0x15, 0x57]//21;
        if (preset > 0 && preset <= 10) {
            presetHex[18] = preset - 1;

            if (preset < 6) {
                presetHex[3] = 0x2E;
                presetHex[19] = 20 + preset
            } else {
                presetHex[3] = 0x95
                presetHex[19] = 176 + preset;
            }

            si9n.displayMessage({ raw: presetHex });
        }
    }
}

function preset_VX1000(preset) {

    if (isNumber(preset)) {
        console.log(1);
        var presetHex = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x00, 0xBA, 0x56]//21;
        if (preset > min && preset <= max) {
            presetHex[18] = preset - 1;
            presetHex[19] = 185 + preset;
            console.log(presetHex);
            si9n.displayMessage({ raw: presetHex });
        }
    }
}


function preset_VX6s(preset) {
    var presetHex = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x00, 0x05, 0x16]//21;

    presetHex[18] = preset - 1;
    if (preset < 12) {
        presetHex[19] = 5 + preset - 1;
    } else {
        presetHex[19] = 186 + preset;
    }

    if (preset > 6) {
        presetHex[20] = 0x56;
    }
    si9n.displayMessage({ raw: presetHex });
}

function preset_NovaProUHDJr(preset) {
    const presets = [
        [0x55, 0xAA, 0x00, 0x35, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x00, 0xEF, 0x56],
        [0x55, 0xAA, 0x00, 0x2F, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x01, 0xEA, 0x56],
        [0x55, 0xAA, 0x00, 0x30, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x02, 0xEC, 0x56],
        [0x55, 0xAA, 0x00, 0x2E, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x03, 0xEB, 0x56],
        [0x55, 0xAA, 0x00, 0x48, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x04, 0x06, 0x57],
        [0x55, 0xAA, 0x00, 0x4D, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x05, 0x0C, 0x57],
        [0x55, 0xAA, 0x00, 0x49, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x06, 0x09, 0x57],
        [0x55, 0xAA, 0x00, 0x46, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x07, 0x07, 0x57],
        [0x55, 0xAA, 0x00, 0x4D, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x08, 0x0F, 0x57],
        [0x55, 0xAA, 0x00, 0x4C, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x09, 0x0F, 0x57]
    ];
    si9n.displayMessage({ raw: presets[preset - 1] });
}

function preset_J6(preset) {
    var presetHex = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x01, 0x51, 0x13, 0x01, 0x00, 0x00, 0xBA, 0x56];
    presetHex[18] = preset - 1;
    if (preset > 8) {
        presetHex[19] = 0xC3;
    } else {
        preset[19] = 185 + preset;
    }
    console.log(presetHex);
    si9n.displayMessage({ raw: presetHex });
}
//used to increase the brightness from 0% to 100% over 24 hours
const graduallyIncreaseBrightness = () => {
    let currentValue = 1;
    const maxValue = 255;
    const duration = 24 * 60 * 60 * 1000;
    const interval = duration / (maxValue - currentValue);

    const changeBrightness = (brightnessLevel) => {
        console.log("changeBrightness");
        let brightness = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x01, 0x00, 0xAA, 0xFF, 0x5A];
        brightness[brightness.length - 3] = brightnessLevel;
        if (brightnessLevel > 170) {
            brightness[brightness.length - 2] = brightnessLevel + 85 - 256;
            brightness[brightness.length - 1] = 0x5B;
        } else {
            brightness[brightness.length - 2] = brightnessLevel + 85;
            brightness[brightness.length - 1] = 0x5A;
        }
        si9n.displayMessage({ raw: brightness });
    }

    const incrementValue = () => {
        console.log("Increment Value");
        if (currentValue < maxValue) {
            currentValue++;
            console.log(currentValue);
            changeBrightness(currentValue);
        } else {
            clearInterval(intervalId);
            console.log("Reached maximum brightness");
        }
    }

    const intervalId = setInterval(incrementValue, interval)
}

function addGradualBrightnessEventListener() {
    var button = document.getElementById("graduallyIncreaseBrightness");
    button.addEventListener('click', () => {
        graduallyIncreaseBrightness();
        console.log("Button Pressed");
    })
}

//potentially used to change the id of the command so that the system doesn't get overwhelmed
//according to some docs, the first comamnd with a specific id has to finish before another one can be sent to the hardware

let commandId = 0;

const sendCommand = (command) => {
    if (commandId == 254) {
        commandId = 0
    }
    //command[]
    console.log()
}

// document.addEventListener('DOMContentLoaded', async () => {
//     let devices = await navigator.usb.getDevices();
//     devices.forEach(device => {
//         console.log(device);
//     });
// });
const checksum = bytes => {
    const checksum = bytes.reduce((acc, byte, idx) => {
        if (idx < 3) return acc;
        acc += byte;
        return acc;
    }, 0x5555).toString(16);
    return [parseInt(checksum.substr(2), 16), parseInt(checksum.substr(0, 2), 16)];
};

var temp = [0x55, 0xAA, 0x00, 0x32, 0xFE, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0A, 0x02, 0x00];
var receivingCard = [0x55, 0xAA, 0x00, 0x15, 0xFE, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00];

const forCard = (idx, cmd) => {
    const hex = idx.toString(16).padStart(4, '0');
    const bytes = [...cmd];
    bytes[8] = parseInt(hex.substr(2), 16);
    bytes[9] = parseInt(hex.substr(0, 2), 16);
    console.log("here");
    console.log(bytes);
    return bytes;
};



const call = bytes => {
    return new Promise((resolve) => {
        si9n.displayMessage({ raw: bytes });

        const responseHandler = event => {
            console.log(event);
            console.log(event.data.response);
            console.log(new TextEncoder().encode(event.data.response));
            resolve(event.data.response);
        }
        si9n.on('message', responseHandler);
    });

};

const check = () => {
    let p = Promise.resolve()
    for (let idx = 0; idx < 1; idx++) {
        var cmd = forCard(idx, receivingCard);
        p = p.then(() => call(cmd).then(res => {
            console.log(res[res.lenght - 3])
        }));
    }
};

check();