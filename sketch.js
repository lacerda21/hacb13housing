// Data variable
var data;

// For automatically playing the song
var index = 0;
var trigger = 0;
var autoplay = true;

// set a total length of 1 minute (60000 millis)
var total_length = 50000;
var tick;
var osc;

// min/max
var price_min;
var price_max;
var delinquent_min;
var delinquent_max;
var sold_min;
var sold_max;

function preload() {
  var url = 'data/housing_bubble.csv';
}

function setup() {

  // TODO: count the rows

  // TODO: compute the note duation (total_length / row count)

  // TODO: find the minimum and maximum house_price_index

  // TODO: find the minimum and maximum delinquency

  // TODO: find the minimum and maximum houses_sold

  // debugging statements
  // console.log('Total Duration: ' + tick);
  // console.log('Price Min: ' + price_min);
  // console.log('Price Max: ' + price_max);
  //
  // console.log('Delinquent Min: ' + delinquent_min);
  // console.log('Delinquent Max: ' + delinquent_max);
  //
  // console.log('Sold Max: ' + sold_max);
  // console.log('Sold Min: ' + sold_min);

  // A Sin oscillator
  osc1 = new p5.SinOsc();

  // TODO: Create a second oscillator

  // Start the oscillators silent
  osc1.start();
  osc1.amp(0);
}


// A function to play a note
function playNote(position, duration, osc, lower, upper) {
  
  // TODO: map the data point to a corresponding midi note
  // http://newt.phys.unsw.edu.au/jw/notes.html
  midi = 69;

  // TODO: sets the oscillator frequency to play the midi note

  // Fade in the amplitude
  osc.fade(0.5,0.2);

  // Fade out after duration
  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}


function draw() {

  // If we are autoplaying and it's time for the next note
  if (autoplay && (millis() > trigger)){

    // TODO: play a note with the `house_price_index` column value

    // TODO: play a second voicing according to the `delinquency` rate

    // TODO: Modulate the (master) volume according to the `houses_sold` column
 
    // advance trigger by 'duration'
    trigger = millis() + tick;
    
    // TODO: drop the bassssssss....... When the market crashes 
  
    
    // TODO: Advance the index by one to the next note/data point

  } else if (index >= data.getRowCount()) {
    // We're at the end, stop autoplaying.
    autoplay = false;
    osc1.stop()
    osc2.stop()
  }
}
