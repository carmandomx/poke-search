const arr = []
console.log('Comienza el loop')
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)
}
console.log('Acaba el loop')
