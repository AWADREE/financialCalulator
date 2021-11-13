let bills = 0;
let media = 0;
let corp = 0;
let team = 0;

let sum = 0;
let unlimitedRewards = 0;
let lifeTimeRewards = 0;

let brex;
let stripe;
let amex;

function calculateSum() {
  if (
    Array.from(document.querySelectorAll("input")).filter(
      (input) => input.value !== ""
    ).length >= 4
  ) {
    bills = parseInt(document.getElementById("bills").value);
    media = parseInt(document.getElementById("media").value);
    corp = parseInt(document.getElementById("corp").value);
    team = parseInt(document.getElementById("team").value);

    sum = bills + media + corp + team;
    brex = sum * 0.3;
    stripe = sum * 2.9;
    amex = sum * 1.3;
    unlimitedRewards = sum * 1.1;
    lifeTimeRewards = sum * 1.2;
    document.getElementById("unlimitedRewards").innerHTML =
      "$" + parseInt(unlimitedRewards);
    document.getElementById("unlimitedRewardsSlider").style.paddingRight =
      (unlimitedRewards / stripe) * 300 + "px";
    document.getElementById("lifeTimeRewards").innerHTML =
      "$" + parseInt(lifeTimeRewards);
    document.getElementById("lifeTimeRewardsSlider").style.paddingRight =
      (lifeTimeRewards / stripe) * 300 + "px";
  }
}
function brexClickHandler() {
  if (brex != null) {
    document.getElementById("businessSlider").style.paddingRight =
      (brex / stripe) * 300 + "px";
    document.getElementById("businessCard").innerHTML = "Brex Business Card";
    document.getElementById("cardBrand").innerHTML = "$" + parseInt(brex);
  }
}
function stripeClickHandler() {
  if (stripe != null) {
    document.getElementById("businessSlider").style.paddingRight =
      (stripe / stripe) * 300 + "px";
    document.getElementById("businessCard").innerHTML = "Stripe Business Card";
    document.getElementById("cardBrand").innerHTML = "$" + parseInt(stripe);
  }
}
function amexClickHandler() {
  if (amex != null) {
    document.getElementById("businessSlider").style.paddingRight =
      (amex / stripe) * 300 + "px";
    document.getElementById("businessCard").innerHTML = "Amex Business Card";
    document.getElementById("cardBrand").innerHTML = "$" + parseInt(amex);
  }
}
