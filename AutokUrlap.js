//tipus, rendszam, kerüljön gey listába

class AutokUrlap {
  list = {};
  constructor(lista, szuloElem) {
    this.lista = lista
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.tipusElem = this.szuloElem.children("form").children("#tipus");
    this.rendszElem = this.szuloElem.children("form").children("#rendsz");
    this.gombElem = this.szuloElem.children("form").children("#sub");
    this.gombElem.on("click", (event) => {
      event.preventDefault();
      this.adatGyujtes();
      this.esemenyTrigger("gyujtes");
    });
  }

  megjelenit() {
    let txt = `<form>
                <label for="tipus">Típus: </label>
                <input type="text" id="tipus" name="tipus"><br><br>
                <label for="rendsz">Rendszám: </label>
                <input type="text" id="rendsz" name="rendsz"><br><br>
                <input type="submit" value="Submit" id="sub">
            </form>`;
    this.szuloElem.append(txt);
  }

  adatGyujtes() {
    this.list = {
      tipus: this.tipusElem.val(),
      rendszam: this.rendszElem.val(),
    };
  }

  esemenyTrigger(esemenynev) {
    const gyujtes = new CustomEvent(esemenynev, { detail: this.list });
    window.dispatchEvent(gyujtes);
  }
}

export default AutokUrlap;
