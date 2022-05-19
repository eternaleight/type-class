import type { NextPage } from 'next'

const Home: NextPage = () => {
  class Dog {
   private static instance: Dog
    static info = 'Dogクラスのstatic変数です'
    age: number
    breed: string
    item: string
    private constructor(_age: number, _breed: string, _item = 'uuuu') {
      this.age = _age
      this.breed = _breed
      this.item = _item
    }
    getRelativeAge(this: Dog): number | string {
      return this.age * 7 + ' '
    }
    static getInstance() {
      if (Dog.instance) return Dog.instance
      Dog.instance = new Dog(3, '柴犬', 'gorila')
      return Dog.instance
    }
  }
  const animals = Dog.getInstance()
  console.log(animals)
  // class Box extends Dog {
  //   constructor(age: number, breed: string, item?: string) {
  //     super(age, breed, item)
  //   }
  //   getRelativeAge(this: Dog): number | string {
  //     return this.age * 7
  //   }
  // }

  // const dog = new Dog(3, '柴犬', 'gorila')
  // const box = new Box(4, 'セントバーナード', 'パレス')

  return (
    <div>
      <p>
        {Dog.info} <br />
        {animals.age + animals.breed + animals.item}
        {/* {`${dog.age}歳 ${dog.breed} ${ */}
        {/*   dog.item */}
        {/* } 犬年齢${dog.getRelativeAge()}歳`} */}
        {/* <br /> */}
        {/* {`${Dog.info}`} */}
        {/* </p> */}
        {/* <p> */}
        {/* {`${box.age}歳 ${box.breed} ${ */}
        {/*   box.item */}
        {/* } 犬年齢${box.getRelativeAge()}歳`} */}
        {/* <br /> */}
        {/* {`${Box.info}`} */}
      </p>
    </div>
  )
}

export default Home
