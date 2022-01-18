//class to store characters of morse code translator
// let input = document.getElementById("input").innerHTML;

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
            case ".-":
                return "A";
                break;
            case "-...":
                return "B";
        
        }
    }
}

const translator = new Morse("-...");

console.log(translator.findCharacter())

//function to find if a character is included in the array and store it in a new array

//function that converts the new array into the matching characters

//function that splits the new array for form a proper string

//function that displays the new array to the DOM