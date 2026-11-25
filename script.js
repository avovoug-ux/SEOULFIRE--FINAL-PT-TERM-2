tteokbokki = 0;
buldak = 0;
kimchi = 0;
milkis = 0;

function searchFood() {

    search = document.getElementById("search").value.toLowerCase();

    if ("tteokbokki".includes(search) || search == "") {
        document.getElementById("tteok").style.display = "inline-block";
    } else {
        document.getElementById("tteok").style.display = "none";
    }

    if ("buldak".includes(search) || search == "") {
        document.getElementById("buldak").style.display = "inline-block";
    } else {
        document.getElementById("buldak").style.display = "none";
    }

    if ("kimchi jjigae".includes(search) || search == "") {
        document.getElementById("kimchi").style.display = "inline-block";
    } else {
        document.getElementById("kimchi").style.display = "none";
    }

    if ("milkis".includes(search) || search == "") {
        document.getElementById("milkis").style.display = "inline-block";
    } else {
        document.getElementById("milkis").style.display = "none";
    }

}

function showMenu(category) {

    document.getElementById("search").value = "";

    if (category == "all") {
        document.getElementById("tteok").style.display = "inline-block";
        document.getElementById("buldak").style.display = "inline-block";
        document.getElementById("kimchi").style.display = "inline-block";
        document.getElementById("milkis").style.display = "inline-block";
    }

    else if (category == "food") {
        document.getElementById("tteok").style.display = "inline-block";
        document.getElementById("buldak").style.display = "inline-block";
        document.getElementById("kimchi").style.display = "inline-block";
        document.getElementById("milkis").style.display = "none";
    }

    else if (category == "drinks") {
        document.getElementById("tteok").style.display = "none";
        document.getElementById("buldak").style.display = "none";
        document.getElementById("kimchi").style.display = "none";
        document.getElementById("milkis").style.display = "inline-block";
    }

    document.getElementById("home").className = "nav-btn";
    document.getElementById("food").className = "nav-btn";
    document.getElementById("drinks").className = "nav-btn";

    if (category == "all") {
        document.getElementById("home").className = "nav-btn active";
    }

    else if (category == "food") {
        document.getElementById("food").className = "nav-btn active";
    }

    else if (category == "drinks") {
        document.getElementById("drinks").className = "nav-btn active";
    }

}

function addTteokbokki() {
    tteokbokki = tteokbokki + 1;
    updateOrder();
}

function addBuldak() {
    buldak = buldak + 1;
    updateOrder();
}

function addKimchi() {
    kimchi = kimchi + 1;
    updateOrder();
}

function addMilkis() {
    milkis = milkis + 1;
    updateOrder();
}

function removeTteokbokki() {
    if (tteokbokki > 0) {
        tteokbokki = tteokbokki - 1;
    }
    updateOrder();
}

function removeBuldak() {
    if (buldak > 0) {
        buldak = buldak - 1;
    }
    updateOrder();
}

function removeKimchi() {
    if (kimchi > 0) {
        kimchi = kimchi - 1;
    }
    updateOrder();
}

function removeMilkis() {
    if (milkis > 0) {
        milkis = milkis - 1;
    }
    updateOrder();
}

function updateOrder() {

    order = "";
    subtotal = 0;

    if (tteokbokki > 0) {
        order = order + "Tteokbokki x " + tteokbokki +
        " - ₱" + (tteokbokki * 70) +
        " <button onclick='removeTteokbokki()'>×</button><br>";

        subtotal = subtotal + (tteokbokki * 70);
    }

    if (buldak > 0) {
        order = order + "Buldak x " + buldak +
        " - ₱" + (buldak * 60) +
        " <button onclick='removeBuldak()'>×</button><br>";

        subtotal = subtotal + (buldak * 60);
    }

    if (kimchi > 0) {
        order = order + "Kimchi Jjigae x " + kimchi +
        " - ₱" + (kimchi * 75) +
        " <button onclick='removeKimchi()'>×</button><br>";

        subtotal = subtotal + (kimchi * 75);
    }

    if (milkis > 0) {
        order = order + "Milkis x " + milkis +
        " - ₱" + (milkis * 29) +
        " <button onclick='removeMilkis()'>×</button><br>";

        subtotal = subtotal + (milkis * 29);
    }

    if (order == "") {
        order = "Your order is empty.";
    }

    document.getElementById("orderList").innerHTML = order;
    document.getElementById("subtotal").innerHTML = "₱" + subtotal + ".00";
    document.getElementById("total").innerHTML = "₱" + subtotal + ".00";

}


function clearOrder() {

    tteokbokki = 0;
    buldak = 0;
    kimchi = 0;
    milkis = 0;

    updateOrder();

}


function checkout() {

    if (tteokbokki == 0 && buldak == 0 && kimchi == 0 && milkis == 0) {
        alert("Your order is empty!");
    }

    else {
        alert("Thank you for ordering at Seoul Fire!");
        clearOrder();
    }

}


function showOrders() {
    alert("Your current orders are shown on the right side!");
}

function showReport() {
    alert("Sales Report");
}

function showSettings() {
    alert("Settings");
}

