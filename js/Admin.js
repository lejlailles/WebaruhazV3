$(function () {
    let fajlnev = "http://localhost:3000/gyertyak";
    const termekek = [];
    const szuloElem = $(".termekek");
    let sablonElem = $(".termek");
    const myAjax=new MyAjax;
    
  
    myAjax.adatotBeolvas(fajlnev, termekek, aruhaz);
  
    sablonElem.remove();
  
 
  
    function aruhaz() {
      szuloElem.empty();
      sablonElem.show();
      console.log(termekek);
      for (let index = 0; index < termekek.length; index++) {
        let ujElem = sablonElem.clone().appendTo(szuloElem);
  
        const ujTermek = new TermekAdmin(ujElem, termekek[index], index);
      }
      sablonElem.hide();
    }
  
    
  
    $(window).on("termeketValaszt", (event) => {
      kosar.setujElem(event.detail);
      console.log(event.detail);
    });

    $("#ujAdatGomb").on("click", () => {
      let ujAdat = {
        nev: $("#nev").val(),
        leiras: $("#leiras").val(),
        ar: $("#ar").val(),
        kep: $("#kep").val(),
      };
      myAjax.postAdat(fajlnev, ujAdat);
    });
  

   
  

  $(window).on("modosit", (event) => {
    
    console.log("MÓDOSÍTÁS");
    console.log(event.detail);
  });



$(window).on("torol", (event) => {
  myAjax.deleteAdat(fajlnev, event.detail.id);
  myAjax.adatotBeolvas(fajlnev, termekek, aruhaz);
  
  });
});

  
  