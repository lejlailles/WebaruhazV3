class Termek {
  constructor(elem, adat, index) {
    this.elem = elem;
    this.adat = adat;
    this.adat.index = index;
    this.nev = this.elem.children(".termeknev");

    this.leiras = this.elem.children(".leiras");
    this.ar = this.elem.children(".ar");
    this.kosar = this.elem.children(".kosarGomb");

    //console.log(elem);
  }

  setAdatok(ertekek) {
    this.nev.html(ertekek.nev);
    this.kep.attr("src", ertekek.kep);
    this.leiras.html(ertekek.leiras);
    this.ar.html(ertekek.ar);
  }
}

class TermekAdmin extends Termek {
  constructor(elem, adat) {
    super(elem, adat);

    this.kep = this.elem.children(".kep").children("img");
    this.modosit = this.elem.children(".modositas").children(".modosit");
    this.torol = this.elem.children(".torles").children(".torol");
    console.log(this.modosit);
    this.setAdatok(this.adat);

    this.modosit.on("click", () => {
     
      this.modositTrigger();
    });

    this.torol.on("click", () => {
      this.torolTrigger();
    });
  }

  modositTrigger() {
    let esemeny = new CustomEvent("modosit", { detail: this.adat });

    window.dispatchEvent(esemeny);
  }

  torolTrigger() {
    let esemeny = new CustomEvent("torol", { detail: this.adat });

    window.dispatchEvent(esemeny);
  }
}

class TermekVasarlas extends Termek {
  constructor(elem, adat) {
    super(elem, adat);
    this.kosar = this.elem.children(".kosarGomb");
    this.kep = this.elem.children(".kep");
    this.setAdatok(this.adat);

    this.kosar.on("click", () => {
      this.kosarbaTesz();
    });
  }
  kosarbaTesz() {
    let esemeny = new CustomEvent("termeketValaszt", { detail: this.adat });

    window.dispatchEvent(esemeny);
  }
}
