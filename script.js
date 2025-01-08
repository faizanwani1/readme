
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #222;
}

.container {
  position: relative;
  width: 400px;
  border-radius: 20px 20px 0 0;
  padding: 30px;
  background: #333;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  border-radius: 1px solid #111;
  gap: 10px;
  padding-bottom: 70px;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, #0005);
}
.container h2 {
  color: #666;
  font-weight: 500;
}

.container .inputArea {
  position: relative;
  width: 100%;
}

.container .inputArea input {
  position: relative;
  width: 100%;
  background: #222;
  border: none;
  outline: none;
  padding: 10px;
  color: aliceblue;
  font-size: 1.1em;
}

.container .strengthMeter {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: #222;
}

.container .strengthMeter::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  transition: 0.5s;
  background: #f00;
}

.container.weak .strengthMeter::before {
  width: 10%;
  background: #f00;
  filter: drop-shadow(0 0 5px #f00) drop-shadow(0 0 10px #f00)
    drop-shadow(0 0 20px #f00);
}

.container.moderate .strengthMeter::before {
  width: 70%;
  background: #eedc3d;
  filter: drop-shadow(0 0 5px #eedc3d) drop-shadow(0 0 10px #eedc3d)
    drop-shadow(0 0 20px #eedc3d);
}

.container.strong .strengthMeter::before {
  width: 100%;
  background: #18e605;
  filter: drop-shadow(0 0 5px #18e605) drop-shadow(0 0 10px #18e605)
    drop-shadow(0 0 20px #18e605);
}

.container .strengthMeter::after {
  position: absolute;
  top: -45px;
  left: 30px;
  transition: 0.5s;
  color: aliceblue;
}

.container.container.weak .strengthMeter::after {
  content: "Weak Password";
  color: #f00;
  filter: drop-shadow(0 0 5px#f00);
}

.container.container.container.moderate .strengthMeter::after {
  content: "Moderate Password";
  color: #eedc3d;
  filter: drop-shadow(0 0 5px#eedc3d);
}

.container.container.container.container.strong .strengthMeter::after {
  content: "Strong Password";
  color: #18e605;
  filter: drop-shadow(0 0 5px#18e605);
}

.show {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 100%;
  background: #333;
  border: 6px solid #222;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
}

.show::before {
  content: "Show";
  font-size: 0.6em;
  color: aliceblue;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.show.hide::before {
  content: "Hide";
}
