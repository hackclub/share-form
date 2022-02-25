import { html } from "./uhtml.js"
import { sharePost } from "./sharePost.js";

export function view() {
	return html`
    <div id="notifcontent">
      <h2 class="notif-header">
        We'd love to have you share your project in the
        <a href="https://scrapbook.hackclub.com/gamelab">scrapbook!</a>
      </h2>
      <hr>
      <div class="form-item">
        <span>Full Name</span>
        <input style="margin:5px;" id="joinslackname" type="text" placeholder="Fiona Hackworth"></input>
      </div>

      <div class="form-item">
        <span>Email</span>
        <input style="margin:5px;" id="joinslackemail" type="email" placeholder="fiona@hackclub.com"></input>
      </div>
      <div style="display:flex;justify-content:center;">
        <button style="margin:3px;" @click=${sharePost}}>LET'S DO THIS</button>
        <button style="margin:3px;" @click=${()=>open('https://app.slack.com/client/T0266FRGM/C01504DCLVD')}>Sign back in</button>
      </div>
    </div>
	`
}

