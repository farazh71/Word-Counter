let text = document.getElementById("text-box");
text.addEventListener("input", function () {
  let val = this.value;
  let len = val.length;
  document.getElementById("charac").innerHTML = len;

  val = val.trim();
  let words = val.split(" ");
  let clean_list = words.filter(function (elm) {
    return elm != "";
  });
  document.getElementById("word").innerHTML = clean_list.length;
});
