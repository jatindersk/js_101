let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

let colorsAndSizes = Object.values(obj).map(nestedObj => {
  return (nestedObj.type === "fruit") ? nestedObj.colors.map(color => color[0].toUpperCase() + color.slice(1)) : nestedObj.size.toUpperCase();
});

console.log(colorsAndSizes);