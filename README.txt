Ritu Khuman PORTFOLIO — QUICK GUIDE

RUN THE WEBSITE ON YOUR COMPUTER
1. Open this folder in a terminal.
2. Run: python -m http.server 8000
3. Visit http://localhost:8000 in your browser.

ADD YOUR PHOTO
Save your photo in this folder as photo.jpg. The homepage will use it for every visitor. You can also click the portrait card to preview a photo in your own browser.

CONTACT FORM BEFORE LAUNCH
The contact form needs a Web3Forms access key before it can deliver messages. Create a key at web3forms.com using the email address where you want enquiries delivered. Replace YOUR_ACCESS_KEY_HERE in contact.html with that key, then send a test enquiry before publishing.

PUBLISH AND VIEW VISITOR STATS
This is a static website. One straightforward option is Cloudflare Pages:
1. Create/sign in to a Cloudflare account and open Workers & Pages.
2. Choose Create application, then Get started and Drag and drop your files.
3. Give the site a project name, upload this project folder, and select Deploy site. Cloudflare will give you a public pages.dev link. A custom domain can be connected later.
4. Once deployed, open your Pages project, go to Metrics, and enable Web Analytics. Cloudflare adds its analytics snippet on the next deployment.
5. Open Web Analytics in your Cloudflare dashboard to see visits/page views, popular pages and traffic sources.

Analytics show aggregated activity; they do not reveal the names or identities of individual visitors. The site is not published yet, and analytics will start collecting after deployment and activation.

BEFORE SHARING YOUR LIVE LINK
- Replace the contact form placeholder with your real Web3Forms access key and verify delivery.
- Add photo.jpg if you want your portrait visible to all visitors.
- Review the sample project labels and replace concepts with your own finished work as you complete it.
- Keep a copy of this folder so you can update and redeploy the site later.
