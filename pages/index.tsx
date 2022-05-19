import type { NextPage } from 'next'

const Home: NextPage = () => {

  class Dog {
    age: number
    breed: string
    item: string
    constructor(age: number, breed: string, item  = 'uuuu') {
      this.age = age
      this.breed = breed
      this.item = item
    }

    getRelativeAge(this: Dog): number {
      return this.age * 7
    }
  }
  
  const dog = new Dog(3,'柴犬')

  return (
    <div>
      {`${dog.age} ${dog.breed} ${dog.item}`}
    </div>
  )
}

export default Home
