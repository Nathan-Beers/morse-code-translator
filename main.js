//class to store characters of morse code translator
let input = document.getElementById("input").innerHTML;

class Morse {
    constructor(character) {
        this.character = character;
        this.A = ".-";
        this.B = "-...";
        this.C = "-.-.";
        this.D = "-..";
        this.E = ".";
        this.F = "..-.";
        this.G = "--.";
        this.H = "....";
        this.I = "..";
        this.J = ".---";
        this.K = "-.-";
        this.L = ".-..";
        this.M = "--";
        this.N = "-.";
        this.O = "---";
        this.P = ".--.";
        this.Q = "--.-";
        this.R = ".-.";
        this.S = "...";
        this.T = "-";
        this.U = "..-";
        this.V = "...-";
        this.W = ".--";
        this.X = "-..-";
        this.Y = "-.--";
        this.Z = "--..";
    }

    findCharacter() {
        switch(this.character){
            case this.A:
                return "A";
            case this.B:
                return "B";
            case this.C:
                return "C";
            case this.D:
                return "D";
            case this.E:
                return "E";
            case this.F:
                return "F";
            case this.G:
                return "G";
            case this.H:
                return "H";
            case this.I:
                return "I";
            case this.J:
                return "J";
            case this.K:
                return "K";
            case this.L:
                return "L";
            case this.M:
                return "M";
            case this.N:
                return "N";
            case this.O:
                return "O";
            case this.P:
                return "P";
            case this.Q:
                return "Q";
            case this.R:
                return "R";
            case this.S:
                return "S";
            case this.T:
                return "T";
            case this.U:
                return "U";
            case this.V:
                return "V";
            case this.W:
                return "W";
            case this.X:
                return "X";
            case this.Y:
                return "Y";
            case this.Z:
                return "Z";
        }
    }

}

const translator = new Morse(input);

console.log(translator.findCharacter())

//function to find if a character is included in the array and store it in a new array

//function that converts the new array into the matching characters

//function that splits the new array for form a proper string

//function that displays the new array to the DOM