import type { NextPage } from 'next'

const Home: NextPage = () => {
  class Dog {
    static info = 'dogクラスのクラス変数です'
    age: number
    breed: string
    item: string
    constructor(age: number, breed: string, item = 'uuuu') {
      this.age = age
      this.breed = breed
      this.item = item
    }
    getRelativeAge(this: Dog): number | string {
      return this.age * 7 + ' '
    }
  }
  class Box extends Dog {
    constructor(age: number, breed: string, item?: string) {
      super(age, breed, item)
    }
    getRelativeAge(this: Dog): number | string {
      return this.age * 7
    }
  }

  const dog = new Dog(3, '柴犬', 'gorila')
  const box = new Box(4, 'セントバーナード', 'パレス')

  return (
    <div>
      <p>
        {`${dog.age}歳 ${dog.breed} ${
          dog.item
        } 犬年齢${dog.getRelativeAge()}歳`}
        <br />
        {`${Dog.info}`}
      </p>
      <p>
        {`${box.age}歳 ${box.breed} ${
          box.item
        } 犬年齢${box.getRelativeAge()}歳`}
        <br />
        {`${Box.info}`}
      </p>
    </div>
  )
}

export default Home
