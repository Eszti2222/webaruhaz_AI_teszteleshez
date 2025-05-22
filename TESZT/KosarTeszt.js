import Kosar from "../PUBLIC/Kosar.js";
/*
1.Kosár oszt. annyi táblázatsort jelenit meg, ahány eleme van a listának:
2.az oldalon a kosárbana lévő termék név helyesen jelnik-e meg?
*/
function kosarMegjelenitTeszt(){

    const szElem=document.createElement("div");
    const lista= [ {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        mennyiseg:5,
        leiras: "Ez egy példa termék leírása.",
      },
     {
        id: 1,
        nev: "Termék 2",
        ar: 1300,
        kep: "./kepek/placeholder.jpg",
        mennyiseg:2,
        leiras: "Ez egy példa termék leírása.",
      }
    ]
    const tesztKosar=new Kosar(lista,szElem);
    const sorLista = szElem.querySelectorAll("tr") //uerySelectorAll tr tagekből álló listát ad vissza
    console.log(sorLista);
    console.assert(sorLista.length===lista.length+1,"hiba, nem stimmel a tr tagek száma");
    console.log("kosarMegjelenitTeszt() lefutott -tr tagek száma megfelelő");

    /*
    az első nem fejléces tr sor td tagjében ugyanaz szerepel-e?
    */
   const tdNev=szElem.querySelector("table tbody tr:nth-child(1) td:nth-child(2)");
   console.log(tdNev,tdNev.innerHTML)
   console.assert(tdNev.innerHTML===lista[0].nev,"HIba, nem megfelelő név jelenik meg");
   console.log("kosarMegjelenitTeszt() lefutott -név megfelelő")
}
kosarMegjelenitTeszt();

