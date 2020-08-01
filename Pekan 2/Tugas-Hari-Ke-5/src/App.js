import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <h1>Form Pembelian Buah</h1>
        <div>
          <form action="#">
            <table>
              <tr>
                <td>
                  <strong>Nama Pelanggan</strong>
                </td>
                <td>
                  <input type="text" placeholder="John Connor" />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Daftar Item</strong>
                </td>
                <td>
                  <div>
                    <input type="checkbox" name="dt_item" value="Semangka" />
                    Semangka <br />
                  </div>
                  <div>
                    <input type="checkbox" name="dt_item" value="Jeruk" />
                    Jeruk
                  </div>
                  <div>
                    <input type="checkbox" name="dt_item" value="Nanas" />
                    Nanas
                  </div>
                  <div>
                    <input type="checkbox" name="dt_item" value="Salak" />
                    Salak
                  </div>
                  <div>
                    <input type="checkbox" name="dt_item" value="Anggur" />
                    Anggur
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <button>Kirim</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
