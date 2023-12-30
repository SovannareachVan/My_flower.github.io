onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  function showHelloWorld() {
    var button = document.getElementById("myButton");
    var outputDiv = document.getElementById("output");

    // Hide the button
    button.style.display = "none";

    // Show the output message
    outputDiv.style.display = "block";
  }
















  