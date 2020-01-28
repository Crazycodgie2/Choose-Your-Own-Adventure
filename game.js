var name = prompt("Hello. What is your name?")

if (name) {
  alert(`Nice to meet you ${name}.`)
} else {
  alert(`Very well, goodbye.`)
}

var road = confirm(
  "You come to a road. Do you continue down the road (cancel), or turn back (okay)?"
)
if (road) {
  alert(
    "You turn around and head back home. Maybe you just need to sleep some more today."
  )
} else {
  alert(
    "You come upon a large, crystal clear lake, with a light shining in the center of it."
  )
  var lake = confirm(
    "You notice a boat moored to the side of the lake. Do you take it and investigate the light (okay) or do you walk around the lake (cancel)?"
  )
  if (lake) {
    alert(
      "You ride out to the center of the lake in the boat. The boat rocks hard from a sudden wave and you capsize - the water starts to pull you in, and the last thing you see is a shining bulb at the bottom."
    )
  } else {
    var rock = confirm(
      "You walk around the lake, and hear a loud, quaking grumble from the water. A large shadow covers you as a rock is hurled at you from the lake! Do you try to dodge it (cancel) or do you see if it misses you (okay)?"
    )
    if (rock) {
      alert(
        "You stand still, thinking the rock will miss you. Surprise - It doesn't. You're crushed on impact."
      )
    } else {
      alert(
        "You try to dodge the rock, jumping out of the way just before it hits the ground, right where you were standing. You, understandably, run away from the lake."
      )
      var dodge = confirm(
        "You smartly avoided the lake and dodged the rock, leaving you with only one choice left, to get what you came here for - out of this dream! You are finally faced with the demon that put you in this nightmare, and are given a riddle. 'I have rivers, but no water. Mountains, but no earth. Sky, but no air. What am I? Do you answer Map (okay) or Moon (cancel)?"
      )
      if (dodge) {
        alert(
          "You answer with Map, and the demon begrudgingly frees you from the dream with the correct answer. You wake up in a cold sweat - 5 minutes late for work. Oh dear."
        )
      } else {
        alert(
          "You answer with Moon, and the demon grins. You are incorrect, and you find yourself back at the lake - only this time, you're on the boat, and you feel it start to capsize.."
        )
      }
    }
  }
}
