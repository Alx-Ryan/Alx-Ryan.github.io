const printButton = document.getElementById("print-diary");
printButton.hidden = false;
printButton.addEventListener("click", () => window.print());
