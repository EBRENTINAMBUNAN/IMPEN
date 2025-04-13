const cliInput = document.getElementById("cli-input");
const output = document.getElementById("output");

cliInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const command = cliInput.value.trim();
        printOutput(command);
        cliInput.value = "";
        cliInput.focus();

    }
});

document.addEventListener("DOMContentLoaded", function () {
    typeWriter(`Selamat datang di INGIN MENJADI PROGRAMMER HANDAL NAMUN ENGGAN NGODING\nKetik 'help' untuk melihat daftar command yang tersedia.\n`, showPrompt);
});

function showPrompt() {
    const prompt = document.createElement("div");
    prompt.innerText = "\n$ ";
    output.appendChild(prompt);
}

function typeWriter(text, callback, speed = 30) {
    let i = 0;
    const div = document.createElement("div");
    output.appendChild(div);

    const interval = setInterval(() => {
        if (i < text.length) {
            div.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
            playKeySound();
            i++;
            output.scrollTop = output.scrollHeight;
        } else {
            clearInterval(interval);
            callback && callback();
        }
    }, speed);
}

function playKeySound() {
    const audio = new Audio("https://www.soundjay.com/mechanical/keyboard-1.mp3");
    audio.volume = 0.1;
    audio.play();
}

function printOutput(command) {
    const outputLine = document.createElement("div");
    outputLine.textContent = `$ ${command}`;
    output.appendChild(outputLine);

    const response = document.createElement("div");

    switch (command.toLowerCase()) {
        case "help":
            response.innerHTML = `
📜 <b>Command List:</b><br>
- <code>about</code>: Info grup<br>
- <code>join</code>: Cara bergabung<br>
- <code>ngoding</code>: Simulasi niat<br>
- <code>niat</code>: Cek niat kamu<br>
- <code>tips</code>: Tips ngoding lucu<br>
- <code>meme</code>: Meme kocak<br>
- <code>hack</code>: Mode Elite 🔥<br>
- <code>motivation</code>: Motivasi ala mager<br>
- <code>clear</code>: Bersihkan layar<br>
- <code>Copyright</code>: Copyright<br>
- <code>help</code>: Lihat menu ini
`;
            break;
        case "about":
            response.innerHTML = `Group: INGIN MENJADI PROGRAMER HANDAL NAMUN ENGGAN NGODING<br>Platform: Facebook<br>Anggota: 170,4k`;
            break;
        case "join":
            response.innerHTML = `Cari: <b>INGIN MENJADI PROGRAMER HANDAL NAMUN ENGGAN NGODING</b><br><a href="https://web.facebook.com/groups/1032515944638255/" target="_blank">Join Now</a>`;
            break;
        case "ngoding":
            response.innerHTML = `ERROR: Anda tidak memiliki niat yang cukup untuk menjalankan perintah ini.<br>Silakan coba command: 'niat'`;
            break;
        case "niat":
            response.innerHTML = `Checking niat...<br>Niat: 2%<br>Status: Tidak cukup. Cobalah membuka Fesnuk dulu.`;
            break;
        case "tips":
            response.innerHTML = `💡 Tips Ngoding:<br>1. Jangan takut error, takutlah kalau nggak pernah ngoding.<br>2. StackOverflow adalah sahabat sejati.<br>3. Ngetik sambil nangis adalah bagian dari proses.`;
            break;
        case "meme":
            response.innerHTML = `Memuat meme...<br>"Mau jadi programmer tapi tiap buka VS Code langsung capek."`;
            break;
        case "hack":
            response.innerHTML = `<pre style="color:#0ff;">
[Access granted...]
> Mengakses database...
> Menganalisis niat...
> Niat: 1.2%... gagal total.
</pre>`;
            break;
        case "motivation":
            response.innerHTML = `🚀 Motivasi Hari Ini:<br><i>"Bermimpilah setinggi langit, tapi rebahanlah selama mungkin."</i>`;
            break;
        case "Copyright":
            response.innerHTML = `by EBREN TINAMBUNAN | YT: bendev403 | IG : ebren_tinambunan | FB : Ebren Tinambunan"</i>`;
            break;
        case "clear":
            output.innerHTML = "";
            typeWriter(`Selamat datang di INGIN MENJADI PROGRAMMER HANDAL NAMUN ENGGAN NGODING\nKetik 'help' untuk melihat daftar command yang tersedia.\n`, showPrompt);
            return;
        default:
            response.innerHTML = `<span style="color:red;">Command not found:</span> ${command}`;
    }

    output.appendChild(response);
    output.scrollTop = output.scrollHeight;
}
