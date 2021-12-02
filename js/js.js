$(function () {
  //apivégpont
  let fajlnev = "http://localhost:3000/gyertyak";
  // saját tömb
  const termekek = [];

  const szuloElem = $(".termekek");
  let sablonElem = $("footer .termek");
  //Kosár osztály példányosítása
  const kosar = new Kosar();

  //myAjax osztály példányosítása
  const myAjax = new MyAjax();

  // adatok megjelenítése ajax-al az Ajax osztály segítségével
  myAjax.adatotBeolvas(fajlnev, termekek, aruhaz);

  //rendezes

  $("#rendezes").on("change", function () {
    let apivegpont = "http://localhost:3000/gyertyak";
    switch ($("#rendezes").val()) {
      case "arnov":
        apivegpont += "?_sort=ar&_order=asc";
console.log(apivegpont);
        myAjax.adatotBeolvas(apivegpont, termekek, aruhaz);

        break;
      case "arcsok":
        apivegpont += "?_sort=ar&_order=desc";
        myAjax.adatotBeolvas(apivegpont, termekek, aruhaz);

        break;
      case "nevnov":
        apivegpont += "?_sort=nev&_order=asc";
        //console.log(apivegpont);
        myAjax.adatotBeolvas(apivegpont, termekek, aruhaz);
        break;
      case "nevcsok":
        apivegpont += "?_sort=nev&_order=desc";
        //console.log(apivegpont);
        myAjax.adatotBeolvas(apivegpont, termekek, aruhaz);
        break;
    }
  });

  //kereses
  $("#kereses").on("keyup", () => {
    let vegpont = "http://localhost:3000/gyertyak";
    vegpont += "?q=" + $("#kereses").val();
    myAjax.adatotBeolvas(vegpont, termekek, aruhaz);
  });

  // megjelenítés
  function aruhaz() {
    szuloElem.empty();
    sablonElem.show();
    console.log(termekek);
    for (let index = 0; index < termekek.length; index++) {
      let ujElem = sablonElem.clone().appendTo(szuloElem);

      const ujTermek = new TermekVasarlas(ujElem, termekek[index], index);
    }
    //sablonelem elrejtes
    sablonElem.hide();
  }

  //saját esemény

  $(window).on("termeketValaszt", (event) => {
    kosar.setujElem(event.detail);
    console.log(event.detail);
  });
});
