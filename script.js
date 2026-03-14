//A crime suspect is been investigated for a chain of robbery that happened at different locations in Ikeja. The suspects visit to to some of these location over the past month is been tracked. To further help this on going investigation, Write a script that counts the frequency of a given item/element in an array and returns its frequency. For instance given an array of places visited by the crime suspect in a month:


// ["market", "church", "office", "mall","gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", market", "office", "mall", eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", eatery", "gym", "bank", "saloon", "airport", "gym","eatery" ]. For this array the function will return frequency of 3 for the word "market".

// Happy Hacking!!!

// Note: Push your code to git when done. Integrating html to allow investigator input place and you display the frequency on the page would be a plus but not a must criteria.

const visited_places = ["market", "church", "office", "mall", "gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", "market", "office", "mall", "eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", "eatery", "gym", "bank", "saloon", "airport", "gym", "eatery"];

const place_visited_input = document.getElementById("place_visited");
const button = document.getElementById("button");
const outcome = document.getElementById("outcome");


button.addEventListener("click", ()=> {const place_visited = place_visited_input.value; frequency(place_visited)})

function frequency(place_visited) {
    let freq = 0;

    for (let i = 0; i < visited_places.length; i++) {

        if (visited_places[i] === place_visited) {
            freq++;
        }

    } 
    console.clear; console.log("The suspect visited " + place_visited + " " + freq + " times.")
    
    outcome.innerHTML = `The suspect visited <u>${place_visited}</u> ${freq} times.`
}


