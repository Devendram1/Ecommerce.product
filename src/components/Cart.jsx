import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>
          <div className="row">
            {data.map((products) => {
              return (
                <div className="col-lg-4 col-md-12 mb-4 ">
                  <div key={products.id} className="card , card1">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img src={products.image} className="w-50" />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body h-100 w-100 " >
                      <a href className="text-reset">
                        <h5 className="card-title mb-3">{products.title}</h5>
                      </a>
                      <h6 className="mb-3"> price ${products.price}</h6>
                      <a href className="text-reset">
                        <p>{`Description: ${products.category}`}</p>
                      </a>
                      <button type="button" class="btn btn-warning">Buy now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
