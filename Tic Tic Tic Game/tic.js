    let box = document.querySelectorAll(".box");
    let btn = document.querySelector(".btn");
    let turn = "X", win = false;

    box.forEach((b) => {
      b.onclick = () => {
        if (b.textContent === "" && !win) {
          b.textContent = turn;
          b.style.color = turn === "X" ? "red" : "blue";
          turn = turn === "X" ? "O" : "X";

          let c = [...box].map(x => x.textContent);
          let p = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
          ];

          for (let i = 0; i < p.length; i++) {
            let [a,b1,c1] = p[i];
            if (c[a] && c[a] === c[b1] && c[b1] === c[c1]) {
              win = true;
              alert(c[a] + " wins!");
              break;
            }
          }
        }
      };
    });

    btn.onclick = () => {
      box.forEach(x => x.textContent = "");
      win = false;
      turn = "X";
    };
