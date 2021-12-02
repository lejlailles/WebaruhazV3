class MyAjax {
  constructor() {}

  adatotBeolvas(fajlnev, tomb, myCallback) {
    tomb.splice(0, tomb.length);
    $.ajax({
      url: fajlnev,
      type: "GET",
      success: function (result) {
        result.forEach((elem) => {
          tomb.push(elem);
        });

        myCallback(tomb);
      },
    });
  }

  deleteAdat(fajlnev, id) {
    $.ajax({
      url: fajlnev + "/" + id,
      type: "DELETE",

      success: function (result) {},
    });
  }

  postAdat(fajlnev, adat) {
    $.ajax({
      url: fajlnev,
      type: "POST",
      data: adat,
      success: function (result) {},
    });
  }

  putAdat(fajlnev, adat, id) {
    $.ajax({
      url: fajlnev + "/" + id,
      type: "PUT",
      data: adat,
      success: function (result) {},
    });
  }
}
