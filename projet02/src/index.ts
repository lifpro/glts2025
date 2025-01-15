interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
}

async function fetchUser(id: number) {
  const apiurl = "https://jsonplaceholder.typicode.com/users/" + id;
  try {
    const response = await fetch(apiurl);
    if (!response.ok) {
      throw new Error(`Erreur Http : ${response.status}`);
    }
    const user: User = await response.json();
    console.log("Utilisateur recupere : " + user.name);
  } catch (error) {
    console.error("Erreur lors de la recuperation des utilisateurs");
  }
}

fetchUser(1);
