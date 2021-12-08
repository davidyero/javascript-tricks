function test() {
  const cars = [
    {model: 2010, brand: 'toyota'},
    {model: 2011, brand: 'mazda'},
    {model: 2012, brand: 'honda'},
    {model: 2020, brand: 'jaguar'},
    {model: 2020, brand: 'bmw'},
    {model: 2020, brand: 'ferrari'},
    {model: 2020, brand: 'audi'},
    {model: 2020, brand: 'mustang'},
  ]
  const prices = [
    {price: 1000, brand: 'toyota'},
    {price: 1200, brand: 'mazda'},
    {price: 1500, brand: 'honda'},
    {price: 2000, brand: 'jaguar'},
    {price: 3000, brand: 'bmw'},
    {price: 3000, brand: 'ferrari'},
    {price: 3000, brand: 'audi'},
    {price: 3000, brand: 'mustang'},
  ]
  
  let count = 0;
  let count2 = 0;
  
  const carsWithPrice = cars.map(car => {
    const price = prices.find((priceMap) => {
      count += 1;
      return priceMap.brand === car.brand
    }).price
    return {
      ...{...car, price}
    }
  });
  
  const newPriceList = prices.reduce((acc, act) => {
    count2 += 1;
    return {
      ...acc,
      [act.brand]: act.price
    };
  }, {})
  
  const newCarsWithPrice = cars.map(car => {
    count2 = count2 + 1;
    const price = newPriceList[car.brand];
    return {
      ...{...car, price}
    }
  })
  console.log(`1: ${count}`)
  console.log(`2: ${count2}`)
}


test();