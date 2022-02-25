export const sharePost = () => 
  fetch("https://hackclub.com/api/join/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.getElementById("joinslackname").value,
      email: document.getElementById("joinslackemail").value,
      teen: true,
      firstChannel: "C01504DCLVD",
      reason: "Gamelab",
    })
  })
  .then(() => {
      document.getElementById("notifcontent").innerHTML = "Check your email!";
  })
  .catch(console.error);