function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function updateTopBarTime() {
    const top_bar_time_show = formatAMPM(new Date);
    document.getElementById("top-bar-time-show").innerHTML = top_bar_time_show;

}
updateTopBarTime();
setInterval(updateTopBarTime, 1000);


$("form").on("submit", messageSubmit);


const recMsg = `  <div class="message received">
<p>
Hey there,I am <b>EDITH </b> personal Assistant of Ridhu,he is busy with his works so he assigned me to take care of you !,Welcome :)
<span class="metadata"><span class="time">${formatAMPM(new Date)}</span></span>
</p>

</div>`;
const recMsg1 = `  <div class="message received">
you have access to some of Ridhu's protocol :
<ul>
    <li>About</li>
    <li>Contact </li>
    <li>Resume</li>
    <li>who are you ?</li>
<ul>
<span class="metadata">
    <span class="time">${formatAMPM(new Date)}</span>
</span>
</div>`;

AppendMsg(recMsg);
AppendMsg(recMsg1);

function reply(msg) {
    msg = (msg.toUpperCase());
    var t = 0;
    var content;
    if (msg.includes("ABOUT")) {
        content = `Ridhu,a undergrad at NIT Tiruchirappalli.`;
        speakNow("ridhu , undergrad at NIT-Trichy ");

    } else if (msg.includes("CONTACT")) {
        content = `<p>
        you have access to some of contact protocol
            <ul>
                <li>mail</li>
                <li>instagram</li>
                <li>linkedin </li>
                <li>github</li>
            </ul>
        </p> 
        `

        ;
        speakNow("you have access to some of contact protocol");

    } else if (msg.includes("WHO") || msg === "WHO ARE YOU") {
        content = `hey,I am Edith,Even Dead I'm The Hero ,
        a fictional artificial intelligence that  appeared in the Marvel Cinematic Universe .
        
        
        `;
        speakNow(`hey,I am Edith,Even Dead I'm The Hero ,
        a fictional artificial intelligence that  appeared in the Marvel Cinematic Universe .`);

    } else if (msg.includes("RESUME")) {
        content = `lol,Ridhu is too lazy to type his resume `;
        speakNow("Ridhu is too lazy to type his resume ");
    } else if (msg.includes("LINKEDIN")) {
        window.open('https://www.linkedin.com/in/ridhuridhu/', '_blank');
    } else if (msg.includes("INSTAGRAM")) {
        window.open('https://www.instagram.com/_ridhu_ridhu_/', '_blank');
    } else if (msg.includes("MAIL")) {
        window.open('mailto:ridhuridhu05@gmail.com', '_blank');
    } else if (msg.includes("HI")) {
        content = "Hi!";
        speakNow("..........hi");
    } else if (msg.includes("GITHUB")) {
        window.open('https://github.com/ridhuridhu', '_blank');
    } else {
        var t = 5;
        var content = "I'm smart enough to know not to answer that command ";
        speakNow("I'm smart enough to know not to answer that command");
        speakNow(`you have access to some of Ridhu's protocol `);

    }

    if (content) {
        const replyMsg = `  <div class="message received">
        <p>${content}
         <span class="metadata"><span class="time">${formatAMPM(new Date)}</span></span>
        </p>

</div>`;
        AppendMsg(replyMsg);
    }

    if (t == 5) {
        AppendMsg(recMsg1);
    }


}

const EdithFullForm = "Even dead,I'm the hero. ";

function AppendMsg(msg) {
    const msgContainer = document.getElementsByClassName("conversation-container");
    $(".conversation-container").append(msg);


}





function messageSubmit(e) {


    e.preventDefault();
    const input_msg = document.getElementById("input-msg");
    if (input_msg.value) {
        const sentMsg =
            `<div class="message sent">
        ${input_msg.value}
        <span class="metadata">
            <span class="time">${formatAMPM(new Date)}</span><span class="tick">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg></span>
        </span>
        </div>`


        AppendMsg(sentMsg);
        reply(input_msg.value);
        input_msg.value = "";

        //console.log( document.querySelector(".conversation-container").scrollHeight);
        document.querySelector(".conversation-container").scrollTop = document.querySelector(".conversation-container").scrollHeight;

    }

}