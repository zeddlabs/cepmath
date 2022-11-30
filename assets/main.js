const alertBox = document.querySelector('.alert');
const alertBtn = document.getElementById('alertBtn');
alertBtn.addEventListener('click', () => {
  alertBox.classList.add('hidden');
})

const MQ = MathQuill.getInterface(2);

const soalSpan = document.getElementById("soal");
const soalBtn = document.querySelector(".soal-btn");
const hasilBox = document.getElementById("hasil");

const alert1 = document.getElementById("alert1");
const alert2 = document.getElementById("alert2");

const xBtn = document.getElementById("x");
const satuBtn = document.getElementById("satu");
const duaBtn = document.getElementById("dua");
const tigaBtn = document.getElementById("tiga");
const empatBtn = document.getElementById("empat");
const limaBtn = document.getElementById("lima");
const enamBtn = document.getElementById("enam");
const tujuhBtn = document.getElementById("tujuh");
const delapanBtn = document.getElementById("delapan");
const sembilanBtn = document.getElementById("sembilan");
const nolBtn = document.getElementById("nol");
const komaBtn = document.getElementById("koma");
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
  const hasil = math.derivative(latexStr, "x", {simplify: true}).toString();
  let hasilLtx = math.parse(hasil).toTex();
  hasilLtx.replace(/\\/g, "\\\\");
  const hasilFinal = hasilLtx.replace(/\\cdot/g, "");
  hasilMathField.latex(hasilFinal);
});

const alert1MF = MQ.StaticMath(alert1);
alert1MF.latex("4x^{2}");
const alert2MF = MQ.StaticMath(alert2);
alert2MF.latex("4\\left(x\\right)^{2}");

const xBtnMF = MQ.StaticMath(xBtn);
xBtnMF.latex("x");
const satuBtnMF = MQ.StaticMath(satuBtn);
satuBtnMF.latex("1");
const duaBtnMF = MQ.StaticMath(duaBtn);
duaBtnMF.latex("2");
const tigaBtnMF = MQ.StaticMath(tigaBtn);
tigaBtnMF.latex("3");
const empatBtnMF = MQ.StaticMath(empatBtn);
empatBtnMF.latex("4");
const limaBtnMF = MQ.StaticMath(limaBtn);
limaBtnMF.latex("5");
const enamBtnMF = MQ.StaticMath(enamBtn);
enamBtnMF.latex("6");
const tujuhBtnMF = MQ.StaticMath(tujuhBtn);
tujuhBtnMF.latex("7");
const delapanBtnMF = MQ.StaticMath(delapanBtn);
delapanBtnMF.latex("8");
const sembilanBtnMF = MQ.StaticMath(sembilanBtn);
sembilanBtnMF.latex("9");
const nolBtnMF = MQ.StaticMath(nolBtn);
nolBtnMF.latex("0");
const komaBtnMF = MQ.StaticMath(komaBtn);
komaBtnMF.latex(".");
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

xBtn.addEventListener("click", () => {
  soalMathField.write("x").focus();
});
satuBtn.addEventListener("click", () => {
  soalMathField.write("1").focus();
});
duaBtn.addEventListener("click", () => {
  soalMathField.write("2").focus();
});
tigaBtn.addEventListener("click", () => {
  soalMathField.write("3").focus();
});
empatBtn.addEventListener("click", () => {
  soalMathField.write("4").focus();
});
limaBtn.addEventListener("click", () => {
  soalMathField.write("5").focus();
});
enamBtn.addEventListener("click", () => {
  soalMathField.write("6").focus();
});
tujuhBtn.addEventListener("click", () => {
  soalMathField.write("7").focus();
});
delapanBtn.addEventListener("click", () => {
  soalMathField.write("8").focus();
});
sembilanBtn.addEventListener("click", () => {
  soalMathField.write("9").focus();
});
nolBtn.addEventListener("click", () => {
  soalMathField.write("0").focus();
});
komaBtn.addEventListener("click", () => {
  soalMathField.write(".").focus();
});
tambahBtn.addEventListener("click", () => {
  soalMathField.write("+").focus();
});
kurangBtn.addEventListener("click", () => {
  soalMathField.write("-").focus();
});
kaliBtn.addEventListener("click", () => {
  soalMathField.cmd("\\times").focus();
});
bagiBtn.addEventListener("click", () => {
  soalMathField.cmd("\\div").focus();
});
pangkatDuaBtn.addEventListener("click", () => {
  soalMathField.write("^{2}").focus();
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
