
{
  // indexOf

  let str = "As long as I can remember, I played assasins creed.";

  let target = "as";

  let pos = -1;
  while ((pos = (str).toLowerCase().indexOf(target, pos + 1)) != -1) {
    console.log(pos);
  }
}

{
  console.log("Z".codePointAt(0));
  console.log("A".codePointAt(0));
  console.log("z".codePointAt(0));
  console.log("a".codePointAt(0));
}

{
  console.log(String.fromCodePoint(65));
  console.log(String.fromCodePoint(90));
  console.log(String.fromCodePoint(97));
  console.log(String.fromCodePoint(122));
}