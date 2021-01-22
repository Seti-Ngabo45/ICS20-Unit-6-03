document.getElementById('submit').addEventListener('click',age)
function age () {
  const m = document.getElementById('answer').value
  if (m >= 17) {
    alert('You can see an R movie alone.')
  } else if (m >= 13) {
    alert('You can see a PG-13 movie alone.')
  } else if (m >= 5) {
    alert('You can see a G or PG movie alone.')
  } else {
    alert('Uh. You are too young for most things.')
  }
  alert('Thanks for verifying your age!')
}
