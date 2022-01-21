function test() {
    const obj1 = {
      id: 1,
      name: 'David',
      location: {
        city: 'Bogota',
        country:'Colombia'  
      },
      pets:[
        {name: 'Greta',animal: 'Cat'},
        {name: 'Lupe',animal: 'Dog'}
      ],
      salary: 0,
      isDev: null,
      hasHungry: undefined
    };
    
    const obj2 = {
      id: 1,
      name: 'David',
      location: {
        city: 'Bogota',
        country:'Colombia'
      },
      pets:[
        {name: 'Greta',animal: 'Cat'},
        {name: 'Lupe',animal: 'Dog'}
      ],
      hasHungry: undefined,
      salary: 0,
      isDev: null,
    };
    const validation = compareObjects(obj1, obj2);
    console.log(`Objects are equals: ${validation}`);
  }
  
  function compareObjects(obj1, obj2) {
    const firstObjectKeys = Object.keys(obj1);
    const secondObjectKeys = Object.keys(obj2);
    
    if (firstObjectKeys.length !== secondObjectKeys.length)
      return false;
    
    return firstObjectKeys.every((key) => {
      if(obj1[key] === null && obj2[key] === null)
        return true;
      
      if(obj1[key] === null || obj2[key] === null)
        return false;
      
      if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object')
        return compareObjects(obj1[key], obj2[key])
      
      return obj1[key] === obj2[key] 
    });
  }
  
  test();