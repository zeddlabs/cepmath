const MQ = MathQuill.getInterface(2);
const soalSpan = document.getElementById("soal");
const soalBtn = document.querySelector(".soal-btn");
const hasilBox = document.getElementById("hasil");
const tambahBtn = document.getElementById("tambah");
const kurangBtn = document.getElementById("kurang");
const kaliBtn = document.getElementById("kali");
const bagiBtn = document.getElementById("bagi");
const pangkatDuaBtn = document.getElementById("pangkatDua");
const pangkatBtn = document.getElementById("pangkat");
const akarBtn = document.getElementById("akar");
const akarNthBtn = document.getElementById("akarNth");
const perBtn = document.getElementById("per");
const piBtn = document.getElementById("pi");
const kurungBtn = document.getElementById("kurung");
const sinBtn = document.getElementById("sin");
const cosBtn = document.getElementById("cos");
const tanBtn = document.getElementById("tan");
const cotBtn = document.getElementById("cot");
const cscBtn = document.getElementById("csc");
const secBtn = document.getElementById("sec");

let enteredMath = "";
const soalMathField = MQ.MathField(soalSpan, {
  handlers: {
    edit: function () {
      enteredMath = soalMathField.latex(); // Get entered math in LaTeX format
    },
  },
});

const hasilMathField = MQ.StaticMath(hasilBox);

soalBtn.addEventListener("click", () => {
  const latexStr = latex_to_js(enteredMath);
  const hasil = math.derivative(latexStr, "x").toString();
  let hasilLtx = math.parse(hasil).toTex();
  hasilLtx.replace(/\\/g, "\\\\");
  const hasilFinal = hasilLtx.replace(/\\cdot/g, "");
  console.log(hasilFinal);
  hasilMathField.latex(hasilFinal);
});

const tambahBtnMF = MQ.StaticMath(tambahBtn);
tambahBtnMF.latex("+");
const kurangBtnMF = MQ.StaticMath(kurangBtn);
kurangBtnMF.latex("-");
const kaliBtnMF = MQ.StaticMath(kaliBtn);
kaliBtnMF.latex("\\times");
const bagiBtnMF = MQ.StaticMath(bagiBtn);
bagiBtnMF.latex("\\div");
const pangkatDuaBtnMF = MQ.StaticMath(pangkatDuaBtn);
pangkatDuaBtnMF.latex("☐^{2}");
const pangkatBtnMF = MQ.StaticMath(pangkatBtn);
pangkatBtnMF.latex("x^{☐}");
const akarBtnMF = MQ.StaticMath(akarBtn);
akarBtnMF.latex("\\sqrt{☐}");
const akarNthBtnMF = MQ.StaticMath(akarNthBtn);
akarNthBtnMF.latex("\\sqrt[☐]{☐}");
const perBtnMF = MQ.StaticMath(perBtn);
perBtnMF.latex("\\frac{☐}{☐}");
const piBtnMF = MQ.StaticMath(piBtn);
piBtnMF.latex("\\pi");
const kurungBtnMF = MQ.StaticMath(kurungBtn);
kurungBtnMF.latex("\\left(☐\\right)");
const sinBtnMF = MQ.StaticMath(sinBtn);
sinBtnMF.latex("\\sin");
const cosBtnMF = MQ.StaticMath(cosBtn);
cosBtnMF.latex("\\cos");
const tanBtnMF = MQ.StaticMath(tanBtn);
tanBtnMF.latex("\\tan");
const cotBtnMF = MQ.StaticMath(cotBtn);
cotBtnMF.latex("\\cot");
const cscBtnMF = MQ.StaticMath(cscBtn);
cscBtnMF.latex("\\csc");
const secBtnMF = MQ.StaticMath(secBtn);
secBtnMF.latex("\\sec");

tambahBtn.addEventListener("click", () => {
  soalMathField.cmd("+").focus();
});
kurangBtn.addEventListener("click", () => {
  soalMathField.cmd("-").focus();
});
kaliBtn.addEventListener("click", () => {
  soalMathField.cmd("\\times").focus();
});
bagiBtn.addEventListener("click", () => {
  soalMathField.cmd("\\div").focus();
});
pangkatDuaBtn.addEventListener("click", () => {
  soalMathField.cmd("^{2}").focus();
});
pangkatBtn.addEventListener("click", () => {
  soalMathField.cmd("^").focus();
});
akarBtn.addEventListener("click", () => {
  soalMathField.cmd("\\sqrt").focus();
});
akarNthBtn.addEventListener("click", () => {
  soalMathField.cmd("\\nthroot").focus();
});
perBtn.addEventListener("click", () => {
  soalMathField.cmd("\\frac").focus();
});
piBtn.addEventListener("click", () => {
  soalMathField.cmd("\\pi").focus();
});
kurungBtn.addEventListener("click", () => {
  soalMathField.cmd("(").focus();
});
sinBtn.addEventListener("click", () => {
  soalMathField.cmd("\\sin").focus();
});
cosBtn.addEventListener("click", () => {
  soalMathField.cmd("\\cos").focus();
});
tanBtn.addEventListener("click", () => {
  soalMathField.cmd("\\tan").focus();
});
cotBtn.addEventListener("click", () => {
  soalMathField.cmd("\\cot").focus();
});
cscBtn.addEventListener("click", () => {
  soalMathField.cmd("\\csc").focus();
});
secBtn.addEventListener("click", () => {
  soalMathField.cmd("\\sec").focus();
});
