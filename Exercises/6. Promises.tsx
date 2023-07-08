// challenge

export const fetchLukeSkywalker = async (): LukeSkywalker => {
  const data = await fetch('<https://swapi.dev/api/people/1>').then((res) => {
    return res.json()
  })

  return data
}
interface LukeSkywalker {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
}
// error
Type 'LukeSkywalker' is not a valid async function return type in ES5/ES3 because it does not refer to a Promise-compatible constructor value.
// challenge
Your challenge is to figure out how to update the return type annotations to make TypeScript happy.Your challenge is to figure out how to update the return type annotations to make TypeScript happy.

// solution 1
export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {

// solution 2

const data: LukeSkywalker = await fetch(

// solution 3

export const fetchLukeSkywalker = async () => {
  const data = await fetch("<https://swapi.dev/api/people/1>").then((res) => {
    return res.json();
  });

  // cast the data to LukeSkywalker
  return data as LukeSkywalker;
};
