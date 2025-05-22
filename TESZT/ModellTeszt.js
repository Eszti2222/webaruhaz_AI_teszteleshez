import Model from "../PUBLIC/Model.js"

function addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban(){
    /* Ellenőrizd, hogy a termék hozzáadódik-e
    a kosárhoz, és ha már létezik, növeli-e a mennyiséget. */
    /*
        kell egy termék
        példányosítani kell aa modellt
        meg kell nézni, hogy mi lett a kosár tartalma
    */
   const model= new Model();
   const termek = {
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
   }
   model.addKosar(termek);
   termek.mennyiseg =1;
   const kosarbanLevoTermek=model.getKosarLista()[0]
   console.assert(JSON.stringify(termek)===JSON.stringify(kosarbanLevoTermek),termek, kosarbanLevoTermek,"hiba az addkosarTEszt.ben")
   console.log("addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban() lefutott");
}
addKosarTeszt_AzAdottTermekMegNemSzerepelAKosarban();

function addKosarTeszt_AzAdottTermekMarSzerepelAKosarban(){
    const model= new Model();
    const termek = {
     id: 1,
     nev: "Termék 2",
     ar: 1300,
     kep: "./kepek/placeholder.jpg",
     leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    model.addKosar(termek);
    termek.mennyiseg =2;
    const kosarbanLevoTermek=model.getKosarLista()[0]
    console.assert(model.getKosarLista().length===1,"a kosárba többször is belekerült");
    console.assert(JSON.stringify(termek)===JSON.stringify(kosarbanLevoTermek),termek, kosarbanLevoTermek,"hiba az addkosarTEszt.ben")
    console.log("addKosarTeszt_AzAdottTermekMarSzerepelAKosarban() lefutott");
 }
addKosarTeszt_AzAdottTermekMarSzerepelAKosarban();

function removeKosarItemTesztHelyesenTorol(){
/*
Ellenőrizd, hogy a megfelelő termék eltávolításra kerül-e a kosárból.
*/
const model= new Model();
const termek = {
    id: 1,
    nev: "Termék 2",
    ar: 1300,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
   };
    model.addKosar(termek);
    termek.mennyiseg =2;
model.removeKosarItem(termek.id)
const kosarbanLevoTermek=model.getKosarLista()[0]
console.assert(model.getKosarLista().length===0,"a kosárból nem törlődött");
console.log("removeKosarItemTesztHelyesenTorl() lefutott");

}
removeKosarItemTesztHelyesenTorol();


