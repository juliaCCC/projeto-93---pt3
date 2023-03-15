const firebaseConfig = {
    apiKey: "AIzaSyDlrXvOyxbl7ODajFLzT9c6yuvYMfQSPyI",
    authDomain: "projeto-93-b69f7.firebaseapp.com",
    databaseURL: "https://projeto-93-b69f7-default-rtdb.firebaseio.com",
    projectId: "projeto-93-b69f7",
    storageBucket: "projeto-93-b69f7.appspot.com",
    messagingSenderId: "857879824894",
    appId: "1:857879824894:web:996a0493f91d23af7cd8af"
  };
  
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("nome");
document.getElementById("usuario").innerHTML = "Bem-Vindo,  " + username + ", ser humano!";


function addsala() {
    roomName = document.getElementById("nomesala").value;

    firebase.database().ref("/").child(roomName).update({
        purpose: "adicionar nome de sala"
    });

    localStorage.setItem("nomesala", roomName);

    window.location = "chat.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log("Nome da Sala - " + roomNames);
            row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("nomesala", name);
    window.location = "chat.html";
}

function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("nomesala");
    window.location = "index.html";
}