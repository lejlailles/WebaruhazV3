class Kosar {
  constructor() {
    this.kosarTomb = [];

    this.elem = $(".kosar");

    let fizetes = localStorage.getItem("kosar");
    console.log(fizetes);
    let storage = JSON.parse(fizetes);
    if (storage !== null) {
      this.kosarTomb = storage;
      this.megjelenit();
    }
  }

  setujElem(adat) {
    this.kosarTomb.push(adat);
    this.megjelenit();
    const adatok = JSON.stringify(this.kosarTomb);
    localStorage.setItem("kosar", adatok);
  }

  megjelenit() {
    $(".kosar table").html("");

    var txt;

    for (let index = 0; index < this.kosarTomb.length; index++) {
      txt +=
        "<tr><td>" +
        this.kosarTomb[index].nev +
        "</td><td>" +
        this.kosarTomb[index].ar +
        " Ft</td>" +
        "<td><button type='button' class='torles' data-id='" +
        index +
        "'>&#10060;</button></td></tr>";
    }

    $(".kosar table").html(txt);

    var osszeg = 0;
    this.kosarTomb.forEach((elem) => {
      osszeg += elem.ar;
    });

    $(".kosar p").html("Összesen: " + osszeg + " Ft");

    $(".kosar").on("click", ".torles", (event) => this.torles(event));
  }

  torles(event) {
    console.log(event);
    let dataid = $(event.target).attr("data-id");
    this.kosarTomb.splice(dataid, 1);
    const adatok = JSON.stringify(this.kosarTomb);
    localStorage.setItem("kosar", adatok);
    this.megjelenit();
  }
}
