import React from "react";




const Home = () => {
  return (
    <>
      <div className="card bg-dark text-white h-100 ">
        <img
          src="./images/img5.jpg"
          className="card-img"
          height={900}
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title text-black ">
            {" "}
            <h1>Shoping App </h1>
          </h5>
          <p className="card-text text-black ">
            This is a wider card with supporting text below as a natural lead-in <br />
            to additional content. This content is a little bit longer Lorem <br />
            ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quod <br />
            reprehenderit optio id rerum odio, ipsa placeat officia expedita, <br />
            magni nesciunt et aspernatur ut! Nobis itaque sapiente debitis harum <br />
            perspiciatis!
          </p> <br />
          <button type="button" class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Home;
