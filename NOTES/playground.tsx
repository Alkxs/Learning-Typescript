// Types
//Composing types
type MyBool = true | false
type WindowStates = 'open' | 'closed' | 'minimized'

// Functions
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}
function getFavoriteNumber(): number {
  return 26
}
// Arrays
let y = arr[]

// Type aliases
type Point = {
  x: number
  y: number
}
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}
printCoord({ x: 100, y: 100 })

// Union types
let id = number | string
//type alias naming an union type
type ID = number | string

// Interfaces
interface Point {
  x: number
  y: number
}
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x)
  console.log("The coordinate's y value is " + pt.y)
}
printCoord({ x: 100, y: 100 })

//instead of this
const user = {
  name: 'Hayes',
  id: 0,
}
//write this
interface User {
  name: string
  id: number
}
const user: User = {
  name: 'Hayes',
  id: 0,
}
//also with classes
interface User {
  name: string
  id: number
}
class UserAccount {
  name: string
  id: number
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}
const user: User = new UserAccount('Murphy', 1)

// Type Assertions
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement
const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')</HTMLCanvasElement>

// Generics
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

// promises
export const fetchLukeSkywalker = async (): Promise <LukeSkywalker> => {
  const data = await fetch("<https://swapi.dev/api/people/1>").then((res) => {
    return res.json();
  });

  return data;
};

// REACT


// Common to create types folder for specific types and import them where you need them

// Props

type Props {
  name: string;
  age: number;
}

const MyComponent = ({ name, age } : Props) => {
  return <div>{name}, {age}</div>;
}

// Event + useState

type Props = {};

const MyFormComponent = ({}: Props) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(`Button clicked with input: ${inputValue}`);
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Click me</button>
    </form>
  );
}

// useState Example

const [count, setCount] = useState<number>(0);

// Context API