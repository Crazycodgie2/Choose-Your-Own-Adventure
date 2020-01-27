var name = prompt("Hello. What is your name?")

if (name) {
  prompt(
    `Nice to meet you ${name}. Your adventure starts at a crossroads. There is a path to the left, right, and backwards. Which way do you go?`
  )
} else {
  alert("Very well, goodbye.")
}
