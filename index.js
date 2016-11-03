const app = "I don't do much."

function kittens(){
  const kittens = ["Milo", "Otis", "Garfield"]
  return kittens
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

function appendKitten(name){
  var kittensnew
  kittensnew = [...kittens, name]
  return kittensnew
}

function prependKitten(name){
  var kittensnew
  kittensnew = [name, ...kittens]
  return kittensnew
}

function removeFirstKitten(){
  var kittensnew = kittens.slice(1)
  return kittensnew

}

function removeLastKitten(){
  var kittensnew = kittens.slice(0, 2)
  return kittensnew

}
