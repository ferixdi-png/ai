// AI Aggregator Landing — static JS (no build)
(function(){
  const $ = (id) => document.getElementById(id);

  function clampNum(v){
    const n = Number(v);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  }

  // Hero mini price
  const buy = $('buyPrice');
  const sell = $('sellPrice');
  const buyLabel = $('buyPriceLabel');
  const sellLabel = $('sellPriceLabel');
  const profitLabel = $('profitLabel');

  function updateHero(){
    const b = clampNum(buy?.value);
    const s = clampNum(sell?.value);
    const p = Math.max(0, s - b);

    if(buyLabel) buyLabel.textContent = String(Math.round(b));
    if(sellLabel) sellLabel.textContent = String(Math.round(s));
    if(profitLabel) profitLabel.textContent = String(Math.round(p));
  }
  buy?.addEventListener('input', updateHero);
  sell?.addEventListener('input', updateHero);
  updateHero();

  // Calculator
  const cBuy = $('cBuy');
  const cSell = $('cSell');
  const cReq = $('cReq');
  const cDays = $('cDays');

  const rProfit = $('rProfit');
  const rDay = $('rDay');
  const rMonth = $('rMonth');

  const format = (n) => new Intl.NumberFormat('ru-RU').format(Math.round(n));

  function updateCalc(){
    const b = clampNum(cBuy?.value);
    const s = clampNum(cSell?.value);
    const req = clampNum(cReq?.value);
    const days = Math.max(1, clampNum(cDays?.value));

    const p = Math.max(0, s - b);
    const day = p * req;
    const month = day * days;

    if(rProfit) rProfit.textContent = format(p);
    if(rDay) rDay.textContent = format(day);
    if(rMonth) rMonth.textContent = format(month);
  }

  [cBuy,cSell,cReq,cDays].forEach(el => el?.addEventListener('input', updateCalc));
  updateCalc();

  // Sticky CTA appears after scroll
  const sticky = $('stickyCta');
  function onScroll(){
    if(!sticky) return;
    const show = window.scrollY > 520;
    sticky.classList.toggle('show', show);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();