import { html } from "../libs/uhtml.js"
import { sharePost } from "./sharePost.js";

export function view() {
	return html`
    <div id="notifcontent">
      <h2 class="notif-header">
        We'd love to have you share your project in the
        <a target="_blank" href="https://scrapbook.hackclub.com">Scrapbook!</a>
      </h2>
      <div>Start with the form below to begin posting.</div>
      <hr>
      <div class="form-item">
        <span>Full Name</span>
        <input id="joinslackname" type="text" placeholder="Fiona Hackworth"></input>
      </div>

      <div class="form-item">
        <span>Email</span>
        <input id="joinslackemail" type="email" placeholder="fiona@hackclub.com"></input>
      </div>
      <div class="notif-button">
        <button @click=${sharePost}}>LET'S DO THIS</button>
      </div>
    </div>
    <iframe class="scrapbook-embed" src="https://scrapbook.hackclub.com"></iframe>
	`
}

