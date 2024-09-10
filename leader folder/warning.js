window.onload = function () {
    // now we create blur so we make more aura 'OHH I GOTTA CHECK THIS COOL WEBSITE OMG IT'S BLUREDD'
    const blurOverlay = document.createElement("div");
    blurOverlay.id = "blur-overlay";
    blurOverlay.style.position = "fixed";
    blurOverlay.style.top = "0";
    blurOverlay.style.left = "0";
    blurOverlay.style.width = "100%";
    blurOverlay.style.height = "100%";
    blurOverlay.style.backdropFilter = "blur(10px)";
    blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    blurOverlay.style.zIndex = "9998"; 

    // Create the warning popup for our very special website user heheheha
    const warningDiv = document.createElement("div");
    warningDiv.id = "warning-popup";
    warningDiv.innerHTML = `
        <h1>WARNING</h1>
        <p>Before you continiue Browising Just Want to tell 
        you that this website has documented internets darkest
        moments people with weak heart are adviced to leave before you can!!!!!!!</p>
        <button id="close-btn">I Understand</button>
    `;

    // desining goofy ah type shi
    warningDiv.style.position = "fixed";
    warningDiv.style.top = "50%";
    warningDiv.style.left = "50%";
    warningDiv.style.transform = "translate(-50%, -50%)";
    warningDiv.style.width = "400px";
    warningDiv.style.padding = "30px";
    warningDiv.style.backgroundColor = "#440000"; //gore muehhehehe
    warningDiv.style.boxShadow = "0 0 30px rgba(255, 0, 0, 0.7), 0 0 60px rgba(255, 0, 0, 0.4)";
    warningDiv.style.border = "2px solid #ff0000";
    warningDiv.style.borderRadius = "10px";
    warningDiv.style.textAlign = "center";
    warningDiv.style.zIndex = "9999";
    warningDiv.style.color = "#fff";
    warningDiv.style.fontFamily = "'Montserrat', sans-serif";
    warningDiv.style.animation = "fadeIn 0.5s ease"; //more goffy animation

    // stylining header
    const h1 = warningDiv.querySelector("h1");
    h1.style.fontSize = "2.5rem";
    h1.style.color = "#ff1a1a"; 
    h1.style.textShadow = "0 0 10px #ff0000, 0 0 20px #ff0000";

    // goofy animation for text
    const p = warningDiv.querySelector("p");
    p.style.fontSize = "1.2rem";
    p.style.marginTop = "15px";
    p.style.color = "#ff6666"; 
    p.style.textShadow = "0 0 5px #990000";

    // very very scary button 
    const btn = warningDiv.querySelector("button");
    btn.style.padding = "10px 20px";
    btn.style.marginTop = "20px";
    btn.style.backgroundColor = "#ff6666";
    btn.style.color = "#440000";
    btn.style.fontSize = "1rem";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.transition = "background-color 0.3s ease";

    // when aiming (hover) button go crazy cool
    btn.onmouseover = function () {
        btn.style.backgroundColor = "#ff3333"; // more red cause why not
    };
    btn.onmouseout = function () {
        btn.style.backgroundColor = "#ff6666";
    };

    // we need our pop op to close ?? i dont know why more cool if it just froze there
    btn.onclick = function () {
        document.body.removeChild(blurOverlay);
        document.body.removeChild(warningDiv);
    };

    // overlay to very baddass
    document.body.appendChild(blurOverlay);
    document.body.appendChild(warningDiv);
};

// key animation for more cool
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
