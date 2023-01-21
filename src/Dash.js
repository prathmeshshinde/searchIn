import React from "react";

const Dash = () => {
  return (
    <div>
      <div className="main-page">
        <div className="ham">
          <div className="logo">
            <img
              style={{
                width: "35px",
                height: "35px",
                padding: "10px 30px 10px 30px",
              }}
              src="./bag.png"
              alt="bag"
            />
            <p>Search-In</p>
          </div>
          <div className="dash-menu">
            <p className="menu-item">Dashboard</p>
            <p className="menu-item">Dispatch</p>
            <p className="menu-item">Inventory Management</p>
            <p className="menu-item">Live Update</p>
            <p className="menu-item">Employee Admin</p>
            <p className="menu-item">Formulate</p>
            <p className="menu-item">POS Panel</p>
            <p className="menu-item">Ledger Management</p>
            <p className="menu-item items4">Barcode List</p>
          </div>
        </div>
        <div>
          <div className="bar">
            <div className="search-nav">
              <div className="search-bar">
                <input className="input-bar" placeholder="Search for..." />
                <div>
                  <img className="search" src="search.png" alt="search" />
                </div>
              </div>

              <div className="user-not">
                <div className="notifi">
                  <img src="notifi.png" alt="notifi" />
                </div>
                <div className="user">
                  <img src="user.png" alt="user" style={{ width: "40px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="total-order">
            <div>
              <h1>Dispatch</h1>
            </div>
            <div className="user-list">
              <div className="order-list">
                <table>
                  <tr>
                    <th className="checkout-add">Order Id</th>
                    <th className="checkout-add">Mobile Number</th>
                    <th className="checkout-add">Date/Time</th>
                    <th className="checkout-add">Landmark</th>
                    <th className="checkout-add">Address</th>
                    <th className="checkout-add">Status</th>
                    <th className="checkout-add">Employee Name</th>
                    <th className="checkout-add"></th>
                  </tr>
                  <tr>
                    <td className="add-data">163</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">167</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">161</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">159</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">Pune</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">165</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">166</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="add-data">164</td>
                    <td className="add-data">7209862456</td>
                    <td className="add-data">2022-12-08, 14:02</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">Akurdi</td>
                    <td className="add-data">
                      <img
                        style={{ width: "25px", paddingLeft: "10px" }}
                        src="./tick.png"
                        alt="tick"
                      />
                    </td>
                    <td className="add-data">
                      <select id="cars" name="cars">
                        <option value="volvo">Ashish Patil</option>
                        <option value="saab">Ashish Patil</option>
                        <option value="fiat">Ashish Patil</option>
                        <option value="audi">Ashish Patil</option>
                      </select>
                    </td>
                    <td className="add-data">
                      <button className="add-data-button">Assign</button>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="print-section">
                <div className="add-section">
                  <div className="address-section">
                    <p className="date">
                      Date:<span>2022-12-08</span>
                    </p>
                    <p className="order">
                      Order Id:<span>165</span>
                    </p>
                    <p className="name">
                      Customer Name:<span>Ankit Patil</span>
                    </p>
                    <p className="address">
                      Address:
                      <span>51A,wing C, phase-2,Sai Puja Baug,Akurdi</span>
                    </p>
                  </div>
                  <div className="checkout-section">
                    <table>
                      <tr>
                        <th className="checkout-add">Product Name</th>
                        <th className="checkout-add">Quantity</th>
                        <th className="checkout-add">Price</th>
                        <th className="checkout-add">Total</th>
                      </tr>
                      <tr>
                        <td className="add-data">
                          Paper Boat Chilli Guava 150ML
                        </td>
                        <td className="add-data">1</td>
                        <td className="add-data">20.00</td>
                        <td className="add-data">20.00</td>
                      </tr>
                      <tr>
                        <td className="add-data">Paper Boat Aampanna 150ML</td>
                        <td className="add-data">1</td>
                        <td className="add-data">20.00</td>
                        <td className="add-data">20.00</td>
                      </tr>
                      <tr className="total-section">
                        <td className=" data1">Total:</td>
                        <td className="add-data">4</td>
                        <td className=" data1"></td>
                        <td className="add-data">₹40.00</td>
                      </tr>
                    </table>
                  </div>
                  <div className="print-button-button">
                    <button className="print-button">Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
