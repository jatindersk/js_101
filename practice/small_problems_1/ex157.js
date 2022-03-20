function domainName(url) {
  if (url.includes('www')) return url.split('.')[1];
  else if (url.includes('//')) return url.split('//')[1].split('.')[0];

  return url.split('.')[0];
}

console.log(domainName("http://github.com/carbonfive/raygun")); // == "github"
console.log(domainName("http://www.zombie-bites.com")); // == "zombie-bites"
console.log(domainName("https://www.cnet.com")); // == "cnet"
console.log(domainName("desk-wt2r6.co/")); // == "desk-wt2r6"