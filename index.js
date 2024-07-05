function findMatching(drivers, string) {
    let matchingDrivers = [];
  
    for (let driver of drivers) {
      if (driver.toLowerCase() === string.toLowerCase()) {
        matchingDrivers.push(driver);
      }
    }
  
    return matchingDrivers;
  }
  
  let drivers = ['John', 'Mary', 'Mike', 'Sarah', 'Peter', 'Joe'];
  let searchString = 'Mike';
  
  console.log(findMatching(drivers, searchString));

  function fuzzyMatch(drivers, findMatchingLetter) {
    const filteredDrivers = drivers.filter(driver => {
    return driver.startsWith(findMatchingLetter);
    });
    
    return filteredDrivers;
    }

    function matchName(drivers, query) {
        const filteredDrivers = drivers.filter(driver => {
          return driver.name === query;
        });
      
        return filteredDrivers;
      }