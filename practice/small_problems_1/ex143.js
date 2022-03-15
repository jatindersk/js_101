function domainName(url) {
  let charArr = url.split('.');
  // console.log(charArr);
  if (url.includes("www")) {
    return charArr[1];
  } else if (!url.includes("www") && !url.includes("//")) {
    return charArr[0];
  } else {
    return charArr[0].split("//")[1];
  }
}

console.log(domainName("http://github.com/carbonfive/raygun")); // == "github"
console.log(domainName("http://www.zombie-bites.com")); // == "zombie-bites"
console.log(domainName("https://www.cnet.com")); // == "cnet"
console.log(domainName("n1a93jnmo86btveakqp7.tv/default.html"));