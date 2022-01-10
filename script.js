/**
 * OK: Create a keydown listener to track what keys are hit
 * OK: Create a Beat class to represent the beat object in utils.js
 * OK: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * OK: Button pt1: Initialize color and element values
 * OK: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * OK: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * OK: Button pt4: Call the select() function upon key press ;)
 * OK: Button pt5: Add transition for button selection
 * OK: Button pt6: Remove the button style upon transition end | Use deselect function
 * OK: Complete all button instances with the following colors
 * OK: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe",65),
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe",83),
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe",68),
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF",70),
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#FF00FF",71),
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF",72),
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF",74),
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#FFFFFF",75),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#FFFFFF",76),
    },
    "77": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF",77),
    },
    "78": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#FF00FF",78),
    },
    "79": {
        beat: new Beat("./assets/Thoda Thoda Pyar Hua Tumse.mp3"),
        button: new Button("#FF00FF",79),
    }
}

/**
 * Function to play the beat upon a press of key
 * use the keyCode
 */
triggerBeat = (event) => {

    // console.log(event);
    // console.log(beats[event.keyCode]);
    const keyCode = event.keyCode;
    if(keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
    }
    
}

/**
 * Keydown listener to fire triggerBeat function
 * Log the keyCode of the key
 */
document.addEventListener('keydown',triggerBeat);
