var strStr = function (haystack, needle) {
  let substr;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack.charAt(i) === needle.charAt(0)) {
      substr = haystack.slice(i, i + Number(needle.length));
      if (substr === needle) return i;
    }
  }

  return -1;
};

console.log(strStr("GeekForGeek", "Geek"));
