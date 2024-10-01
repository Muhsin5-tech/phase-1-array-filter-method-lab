// Code your solution here
function findMatching(drivers, name) {
    // Returns all drivers that match the passed in name (case-insensitive)
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    // Returns drivers whose names begin with the provided substring
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  function matchName(drivers, name) {
    // Returns all objects whose 'name' property matches the passed in name
    return drivers.filter(driver => driver.name === name);
  }
  