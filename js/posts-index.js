const gridPosts = [
  {
    tag: "PRIVACY",
    title: "Why You Should Always Use a VPN",
    summary:
      "Explaining the importance of using VPNs these days and recommending some highly trusted VPN providers that are known to be secure and have a strict no-logs policy.",
    link: "/posts/why_use_a_vpn.html",
  },
  {
    tag: "REVIEW",
    title: "My Experience Using OpenSUSE",
    summary:
      "A review on OpenSUSE after 1 week of use. Everything covered about the advantages, disadvantages and what can be improved as an enterprise linux distribution.",
    link: "/posts/opensuse-1week-review.html",
  },
  {
    tag: "ENSHITTIFICATION",
    title: "The Era of Heavy Bloated Web",
    summary:
      "Explaining why modern websites are more bloated and resource hungry.",
    link: "/posts/bloated-web.html",
  },
  {
    tag: "NETWORK",
    title: "DNS: The Telephone Directory of the Internet",
    summary:
      "Explaining how DNS works and why its important to choose a secure DNS provider!",
    link: "/posts/domain-name-system.html",
  },
  {
    tag: "SECURITY",
    title: "How Encryption Powers the Internet.",
    summary:
      "Taking a deep dive into the working of encryption on the modern web.",
    link: "/posts/encryption.html",
  },
  {
    tag: "PRIVACY",
    title: "Fingerprinting: The Hidden Trap on the Modern Web",
    summary:
      "Explained various fingerprinting methods used in the modern web and what to do about it.",
    link: "/posts/fingerprinting.html",
  },
  {
    tag: "RECOMMENDATION",
    title: "Cool and Useful Firefox Add-ons I Use Daily",
    summary: "Recommendation of some cool privacy-respecting Firefox add-ons.",
    link: "/posts/firefox-addons.html",
  },
  {
    tag: "REVIEW",
    title: "Firefox Is Slowly Becoming Bloatware. Seriously...",
    summary: "How Firefox has been slowly becoming bloatware from a goat.",
    link: "/posts/firefox-browser-review.html",
  },
  {
    tag: "ANALYSIS",
    title: "Google Chrome: The Ultimate Weapon of Google Monopoly",
    summary: "A case study on Google Chrome's worst privacy practices.",
    link: "/posts/google-chrome-case-study.html",
  },
  {
    tag: "PRIVACY",
    title: "Beyond GPS: The Hidden Ways Your Phone Tracks You",
    summary:
      "How carriers, governments, and data brokers log your physical movements without your knowledge.",
    link: "/posts/location-tracking.html",
  },
  {
    tag: "REVIEW",
    title: "You Should Stop Using Meta (Facebook) Products at All Costs",
    summary: "Why everyone should stop using Meta products at all costs.",
    link: "/posts/meta-privacy.html",
  },
  {
    tag: "PRIVACY",
    title: "Effective Web Tracking Methods in 2026: Explained",
    summary:
      "Explaining online tracking methods that are still effective in 2026.",
    link: "/posts/online-tracking-methods.html",
  },
  {
    tag: "DIGITAL WELLBEING",
    title: "The Harmful Effects of Watching Short-Form Content.",
    summary:
      "You should prioritize long-form contents over short-form contents. Here's why.",
    link: "/posts/short-form-contents.html",
  },
  {
    tag: "DIGITAL WELLBEING",
    title: "Deleting Social Media Can Be a Good Treat for Your Brain.",
    summary:
      "Why should you consider deleting social media for your mental health? Here is why...",
    link: "/posts/social-media-detox.html",
  },
  {
    tag: "PSYCHOLOGY",
    title:
      "You Aren't Broken: A Clear Guide to Trauma, Overthinking, and Healing",
    summary:
      "Explaining what trauma is, how it changes an individual's brain, and how it can be healed.",
    link: "/posts/trauma.html",
  },
  {
    tag: "REVIEW",
    title: "I Tried Vivaldi on Linux Just to Find Out It's Not for Me",
    summary: "Why vivaldi browser is not that great? What holds it back!",
    link: "/posts/vivaldi-browser-review.html",
  },
  {
    tag: "PHILOSOPHY",
    title: "Nihilism: How I Saw the World",
    summary:
      "My perspective on the philosophical theory 'nihilism' on modern society.",
    link: "/posts/nihilism.html",
  },
];

let allGridCards = "";

for (let i = 0; i < gridPosts.length; i++) {
  allGridCards += `
  <div class="grid-items">
    <span class="pill-tags">${gridPosts[i].tag}</span><br />
          <div class="grid-item-title">
            <a href="${gridPosts[i].link}"
              >${gridPosts[i].title}</a
                >
          </div>
          <p>${gridPosts[i].summary}</p> 
          </div>
    `;
}

/* preview posts */

const previewPosts = gridPosts.slice(0, 4);

let indexPosts = "";

for (let i = 0; i < previewPosts.length; i++) {
  indexPosts += `
  <div class="grid-items">
    <span class="pill-tags">${previewPosts[i].tag}</span><br />
          <div class="grid-item-title">
            <a href="${previewPosts[i].link}"
              >${previewPosts[i].title}</a
                >
          </div>
          <p>${previewPosts[i].summary}</p> 
          </div>
    `;
}

/* posts shelf index */

const gridItems = document.getElementById("postsGrid");

if (gridItems) {
  gridItems.innerHTML = allGridCards;
}

/* index page preview */

const gridPreviewItems = document.getElementById("indexPostsGrid");

if (gridPreviewItems) {
  gridPreviewItems.innerHTML = indexPosts;
}
