document.addEventListener("DOMContentLoaded", () => {
  //fonction nommées, anomymes, isolée, parametrées
  /**
   * 
   */
  const printout = () => {
    const User = {
      login: "Admin",
      psw: 2013
    };
    console.log(`Login : ${User.login} : Password ${User.psw}`);
  };

  //isolée
  (() => {
    let nom = "TOM";
    console.log(nom);
  })();

  //fonction paramétrée
  /**
   * 
   * @param {number} n 
   * @returns 
   */
  let calc = n => {
    return n * n;
  };
  let result = calc(10) / 2;
  console.log(result); /* 100 */
  printout();
  /**
   * 
   * @param {*} nom 
   * @param {*} prenom 
   */
  const users = function (nom, prenom) {
    //constructeur
    this.nom = nom;
    this.prenom = prenom;
  };

  let new_users = new users("Bob", "Taylor"); //instance
  console.log(new_users.nom);
  const table_user = [];
  table_user.push(new_users.nom, new_users.prenom);
  console.table(table_user);
});