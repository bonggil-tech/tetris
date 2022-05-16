var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{C as s,R as c,q as i,$ as p,a as d}from"./vendor.0e29dee6.js";const u=[40,100,300,1200],m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},f=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),g=()=>{const e=["I","J","L","O","S","T","Z"],t=e[Math.floor(Math.random()*e.length)];return m[t]},x=(e,t,{x:r,y:o})=>{for(let l=0;l<e.tetromino.length;l++)for(let a=0;a<e.tetromino[l].length;a++)if(!(0===e.tetromino[l][a]||t[l+e.pos.y+o]&&t[l+e.pos.y+o][a+e.pos.x+r]&&"clear"===t[l+e.pos.y+o][a+e.pos.x+r][1]))return!0;return!1};const y=()=>{const[e,s]=c.useState({}),i=c.useCallback((()=>s({pos:{x:4,y:0},tetromino:g().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:c,collided:i})=>{s((s=>{return p=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&n(e,r,t[r]);return e})({},s),d={pos:{x:s.pos.x+=e,y:s.pos.y+=c},collided:i},t(p,r(d));var p,d}))},resetPlayer:i,playerRotate:t=>{const r=JSON.parse(JSON.stringify(e));var o;r.tetromino=(o=r.tetromino).map(((e,t)=>o.map((e=>e[t])))).map((e=>e.reverse()));const l=r.pos.x;let a=1;for(;x(r,t,{x:0,y:0});)if(r.pos.x+=a,a=-(a+(a>0?1:-1)),a>r.tetromino[0].length)return void(r.pos.x=l);s(r)}}},b=(e,t)=>{var r,o;const[l,a]=c.useState(f()),[n,s]=c.useState(0);return c.useEffect((()=>{if(!e.pos)return;s(0);const r=r=>{const o=r.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((t,r)=>{t.forEach(((t,l)=>{0!==t&&(o[r+e.pos.y][l+e.pos.x]=[t,""+(e.collided?"merged":"clear")])}))})),e.collided?(t(),(e=>e.reduce(((t,r)=>-1===r.findIndex((e=>0===e[0]))?(s((e=>e+1)),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(r),t)),[]))(o)):o};a((e=>r(e)))}),[e.collided,null==(r=e.pos)?void 0:r.x,null==(o=e.pos)?void 0:o.y,e.tetromino]),{stage:l,setStage:a,rowsCleared:n}},v=i.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`;var h=c.memo((({type:e})=>c.createElement(v,{type:e,color:m[e].color})));const E=i.div`
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`,w=({stage:e})=>c.createElement(E,null,e.map((e=>e.map(((e,t)=>c.createElement(h,{key:t,type:e[0]})))))),S=i.div`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${e=>e.gameOver?"red":"#999"};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`,O=({gameOver:e,text:t})=>c.createElement(S,{gameOver:e},t),k=i.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`,$=({callback:e,text:t})=>c.createElement(k,{onClick:e},t),I=i.div`
  position:relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  
  .etc{
    display:flex;
    align-items: center;
  }
`,P=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`,j=()=>{const[e,t]=c.useState(null),[r,o]=c.useState(!0),[l,a]=c.useState(Boolean),n=c.useRef(null);let i=new Audio("./audio/normal.mp3"),p=new Audio("./audio/hell.mp3");const d=()=>{i.load(),p.load(),i.pause(),p.pause()},{player:m,updatePlayerPos:g,resetPlayer:v,playerRotate:h}=y(),{stage:E,setStage:S,rowsCleared:k}=b(m,v),{score:j,setScore:A,rows:J,setRows:L,level:C,setLevel:R}=(e=>{const[t,r]=c.useState(0),[o,l]=c.useState(0),[a,n]=c.useState(1);return c.useEffect((()=>{e>0&&(r((t=>t+u[e-1]*a)),l((t=>t+e)))}),[e]),{score:t,setScore:r,rows:o,setRows:l,level:a,setLevel:n}})(k),T=e=>{x(m,E,{x:e,y:0})||g({x:e,y:0,collided:!1})};return function(e,t){const r=s.exports.useRef(null);s.exports.useEffect((()=>{r.current=e}),[e]),s.exports.useEffect((()=>{if(null!==t){const e=setInterval((function(){r.current&&r.current()}),t);return()=>{clearInterval(e)}}}),[t])}((()=>{J>10*C&&!1===l&&(R((e=>e+1)),t(1e3/C+200)),J>10*C&&!0===l&&(R((e=>e+1)),t(100/C*5)),x(m,E,{x:0,y:1})?(m.pos.y<1&&(console.log("게임끝"),a(!1),o(!0),t(null),d()),g({x:0,y:0,collided:!0})):g({x:0,y:1,collided:!1})}),e),c.createElement(I,{role:"button",tabIndex:0,onKeyDown:({keyCode:e,repeat:o})=>{if(!r)if(37===e)T(-1);else if(39===e)T(1);else if(40===e){if(o)return;t(30)}else if(38===e)h(E);else if(32===e){if(o)return;t(10)}},onKeyUp:({keyCode:e})=>{r||(!1===l&&(32==e||40==e)&&t(1e3/C+200),!0===l&&(32==e||40==e)&&t(100/C*5))},ref:n},c.createElement(P,null,c.createElement("div",{className:"display"},r?c.createElement(c.Fragment,null,c.createElement(O,{gameOver:r,text:`게임끝!   ${j}점`}),c.createElement($,{text:"게임 시작!",callback:()=>{n.current&&n.current.focus(),S(f()),t(1e3),v(),A(0),R(1),L(0),o(!1),a(!1),i.volume=.4,i.loop=!1,i.play()}})):c.createElement(c.Fragment,null,c.createElement(O,{text:`점수: ${j} `}),c.createElement(O,{text:`없앤줄: ${J}`}),c.createElement(O,{text:`레벨: ${C}`}))),c.createElement("div",{className:"etc"},c.createElement(w,{stage:E}),r?c.createElement("span",null,c.createElement($,{text:"민성이 전용모드",callback:()=>{n.current&&n.current.focus(),S(f()),t(100/C*5),v(),A(666),R(1),L(0),o(!1),a(!0),p.volume=.2,p.play()}})):c.createElement("div",null,c.createElement($,{text:"음악 정지(업데이트중)",callback:d}),c.createElement(O,{text:"방향키와 스페이스바로 이동 "})))))};const A=p`
  body {
    margin: 0;
    padding: 0;
    background: url(${"/assets/bg.84894c80.jpg"}) #000;
    background-size: cover;
    background-position: center;
  }
`;d.render(c.createElement(c.Fragment,null,c.createElement(A,null),c.createElement(j,null)),document.getElementById("root"));
