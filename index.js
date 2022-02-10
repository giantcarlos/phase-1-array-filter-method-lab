function findMatching(drivers, name) {
    return drivers.filter(names => names.toLowerCase() === name.toLowerCase());
}    

function fuzzyMatch(drivers, letter) {
    return drivers.filter(names => names[0].toLowerCase() === letter[0].toLowerCase());
}

function matchName (drivers, name) {
    return drivers.filter(names => names.name.toLowerCase() === name.toLowerCase());
}