document.querySelector("#tip-form").onchange = function() {
    var bill = Number(document.getElementById("billTotal").value);
    var tip = document.getElementById("tipInput").value;
    document.getElementById("tipOutput").innerHTML = `${tip}%`
    var tipValue = bill * (tip / 100);
    var tipTotal = tipValue + bill;
    var tipAmount = document.getElementById("tipAmount");
    var totalTipAmount = document.getElementById("totalBillWithTip");

    tipAmount.value = tipValue.toFixed(2);
    totalTipAmount.value = tipTotal.toFixed(2);

    document.getElementById("results").style.display = "block";
}