console.log("🚀 script.js has loaded successfully!");

// Post data
const posts = [
  // nonshoppable factor static
  {
    type: "image",
    username: "factormeals",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/ad-factor-SM-static2.jpg",
    ],
    caption: "Sponsored Content",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/avatar-factor.jpg",
  },
  {
    type: "image",
    username: "factormeals",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/ad-factor-SM-static2.jpg",
    ],
    caption: "Sponsored Content",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/avatar-factor.jpg",
  },
  // shoppable ultima video
  {
    type: "video",
    username: "ultima",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/ad-ultima-SM-video1.mp4",
    ],
    caption: "Sponsored Content",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/avatar-ultima.jpg",
  },
  {
    type: "video",
    username: "ultima",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/ad-ultima-SM-video1.mp4",
    ],
    caption: "Sponsored Content",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/SMShoppable/main/avatar-ultima.jpg",
  },
  // filler posts
  {
    type: "image",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-photo-1.jpg",
    ],
    caption: "Just chilling with my best look! ✨",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-1.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-1.2.jpg",
    ],
    caption: "Swipe to see the full look! 🔄",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.4.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-2.5.jpg",
    ],
    caption: "Hanging out at this cool museum! ˙✧˖°📷 ༘ ⋆｡°",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "video",
    username: "Qelbree® (viloxazine)",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR/main/qelbree-adhd-fullscreenISI.mp4",
    ],
    caption: "Sponsored Content",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/qelbree-avatar.jpg",
  },
  {
    type: "carousel",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.1.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.2.jpg",
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-carouse-20.3.jpg",
    ],
    caption: "🧠❤️🎃",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-20.jpg",
    ],
    caption: "Quality time w. 🐶",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-1.mp4",
    ],
    caption: "Alright, here’s a question.\nGuess what is being used?",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-5.jpg",
    ],
    caption:
      "I was recently in Dubai 🇦🇪🧠.\n\nWorldgovsummit, a summit inviting heads of state from 150 countries. Entrepreneurs, prime ministers and princes of various countries, inventors, etc. It was a really valuable experience and I am grateful for all the wonderful encounters ᘎ🧠.\n\nThe trip made me want to visit more and more countries.\nThe world is still so big🌏",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "image",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-image-6.jpg",
    ],
    caption: "Definitely NOT a summit",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "video",
    username: "imma.gram",
    media: [
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-video-11.mp4",
    ],
    caption:
      "Kyoto trip ⛩️⚡️🌸\nBut Ppl jumped off of here ? 😱⚡️🤨\nLearning about Japanese history is always interesting but sometimes… bizarre facts come out.. I started reading into one of the most famous tourist spots the kiyomizu temple when I visited Kyoto and yeah.. people jumped off here (and mostly survived!) to make a wish 😱 I’m glad I’m alive now when my wish is in a form of the Amazon wish list… 🤭",
    likes: 0,
    liked: false,
    comments: [],
    profilePic:
      "https://raw.githubusercontent.com/Alice-Ji/affordancePSIPSR2/main/imma-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-14.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-14.2.jpg",
    ],
    caption: "Thrilled to be on my next trip already 😆🧡",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-15.3.jpg",
    ],
    caption: "Deep in the forest today to find treasure💎",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-16.4.jpg",
    ],
    caption: "My very first yacht experience⛵🥂🏝",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
  {
    type: "carousel",
    username: "rozy.gram",
    media: [
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.1.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.2.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.3.jpg",
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-carouse-17.4.jpg",
    ],
    caption:
      "First time snorkeling this summer🤿\nA lot of fish here!!🐠🐟🐡🐬",
    likes: 0,
    liked: false,
    comments: [],
    currentIndex: 0, // Track which image is showing in the carousel
    profilePic:
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/rozy-avatar.jpg",
  },
];

//setupVideoAutoplay
function setupVideoAutoplay() {
  // make video play sound
  let userHasInteracted = false; // Track if the user has scrolled

  document.addEventListener("scroll", () => {
    if (!userHasInteracted) {
      document.querySelectorAll(".video-post").forEach((video) => {
        video.muted = false; // 🔊 Unmute all videos once scrolling starts
      });
      userHasInteracted = true; // Prevent further changes
    }
  }); // make video play sound
  const videos = document.querySelectorAll(".video-post");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .play()
            .catch((error) => console.warn("Autoplay prevented:", error));
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 0.9 } // ✅ Only autoplay when 90% visible
  );

  videos.forEach((video) => {
    observer.observe(video);

    const playOverlay = video.parentElement.querySelector(".play-overlay");
    if (playOverlay) playOverlay.classList.remove("hidden"); // ✅ Show play button initially

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (playOverlay) playOverlay.classList.add("hidden"); // ✅ Hide when playing
      } else {
        video.pause();
        if (playOverlay) playOverlay.classList.remove("hidden"); // ✅ Show when paused
      }
    });

    video.addEventListener("play", () => {
      setTimeout(() => {
        if (playOverlay) playOverlay.classList.add("hidden");
      }, 100);
    });

    video.addEventListener("pause", () => {
      if (playOverlay) playOverlay.classList.remove("hidden");
    });
  });
}

// randomize post order
function shufflePosts() {
  for (let i = posts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]]; // Swap elements
  }
}

// Function to render posts
function renderFeed() {
  shufflePosts(); // 🔀 Randomize posts before rendering

  const feed = document.getElementById("feed");
  feed.innerHTML = ""; // Clear existing content

  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    let mediaContent = "";
    if (post.type === "image") {
      mediaContent = `<img src="${post.media[0]}" alt="Post image">`;
    } else if (post.type === "video") {
      mediaContent = `
      <div class="video-container">
      <video class="video-post" muted loop playsinline>
          <source src="${post.media[0]}" type="video/mp4">
          Your browser does not support the video tag.
      </video>
      <div class="play-overlay hidden"></div> <!-- ✅ This is the only play button now -->
  </div>
      `;
    } else if (post.type === "carousel") {
      mediaContent = `
        <div class="carousel-container">
            <button class="carousel-btn left" onclick="prevImage(${index})">&lt;</button>
            <img id="carousel-${index}" src="${post.media[0]}" alt="Carousel Image">
            <button class="carousel-btn right" onclick="nextImage(${index})">&gt;</button>
            <div class="carousel-indicator" id="indicator-${index}">1 / ${post.media.length}</div>
        </div>
      `;
    }

    // ✅ Add "Shop Now" button + record clicks
    if (post.username === "ultima") {
      mediaContent += `
        <button class="shop-now-btn" onclick="window.trackShopNowClick('${post.username}')">
        Shop Now!
        </button>
    `;
    }

    postElement.innerHTML = `
      <div class="post-header">
      <img class="avatar" src="${post.profilePic}" alt="Avatar">
          <span class="username">${post.username}</span>
      </div>
      ${mediaContent}
      <p>${post.caption}</p>
      <div class="post-actions">
          <img id="like-btn-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png" 
               alt="Like" class="action-icon" onclick="window.likePost(${index})">
          <img id="comment-btn-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-comment.png"
               alt="Comment" class="action-icon" onclick="window.toggleComment(${index})">
      </div>
      <div id="comment-section-${index}" class="comment-section hidden">
          <div class="comment-input-container">
              <input type="text" id="comment-input-${index}" placeholder="Add a comment...">
              <img id="send-comment-${index}" src="https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-sendcomment.png" 
                   alt="Send" class="send-icon" onclick="window.addComment(${index})">
          </div>
          <ul id="comments-${index}"></ul>
      </div>
    `;

    feed.appendChild(postElement);
    updateComments(index);
  });

  setupVideoAutoplay(); // ✅ Ensure observer is set up after rendering
}

// Function to switch to the next image in the carousel
window.nextImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex < posts[index].media.length - 1) {
      posts[index].currentIndex++;
      console.log(
        `➡️ Next Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to switch to the previous image in the carousel
window.prevImage = function (index) {
  if (posts[index].type === "carousel") {
    if (posts[index].currentIndex > 0) {
      posts[index].currentIndex--;
      console.log(
        `⬅️ Previous Image: Now showing ${posts[index].currentIndex + 1} / ${
          posts[index].media.length
        }`
      );
      updateCarousel(index);
    }
  }
};

// Function to update the carousel display, including the indicator
function updateCarousel(index) {
  let post = posts[index];

  console.log(
    `🔄 Updating carousel ${index}: Now at ${post.currentIndex + 1} / ${
      post.media.length
    }`
  );

  let imageElement = document.getElementById(`carousel-${index}`);
  let indicatorElement = document.getElementById(`indicator-${index}`);

  if (imageElement) {
    imageElement.src = post.media[post.currentIndex]; // Update the image
  } else {
    console.warn(`❌ Image element "carousel-${index}" not found.`);
  }

  if (indicatorElement) {
    indicatorElement.textContent = `${post.currentIndex + 1} / ${
      post.media.length
    }`; // Fix: Removed extra parentheses
  } else {
    console.warn(`❌ Indicator element "indicator-${index}" not found.`);
  }
}

// Function to like a post (only once)
window.likePost = function (index) {
  let likeBtn = document.getElementById(`like-btn-${index}`);
  if (!posts[index].liked) {
    posts[index].likes++;
    posts[index].liked = true;
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like2.png";
  } else {
    posts[index].likes--;
    posts[index].liked = false;
    likeBtn.src =
      "https://raw.githubusercontent.com/ruochongji/affordancePSIPSR/main/ins-like1.png";
  }
};

// Function to add a comment
window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    posts[index].comments.push(input.value);
    updateComments(index);
    input.value = ""; // Clear input
  }
};

// Function to update comments
function updateComments(index) {
  const commentList = document.getElementById(`comments-${index}`);
  commentList.innerHTML = ""; // Clear and re-add comments

  posts[index].comments.forEach((comment) => {
    const newComment = document.createElement("li");
    newComment.textContent = comment;

    // 🚨 THIS FORCES THE COMMENTS TO BE ON A NEW LINE 🚨
    newComment.style.display = "block";
    newComment.style.width = "100%";
    newComment.style.marginTop = "5px";
    newComment.style.wordWrap = "break-word";
    newComment.style.clear = "both"; // 💥 Ensures no floating elements next to it

    commentList.appendChild(newComment);
  });

  // 🚀 FORCES THE BROWSER TO RERENDER THE COMMENTS 🚀
  commentList.style.display = "none";
  setTimeout(() => (commentList.style.display = "block"), 10);
}

// Load the feed when the page loads
renderFeed();

// Global variable to store all comments
let collectedComments = [];

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = input.value.trim();
    posts[index].comments.push(comment);
    collectedComments.push(comment); // Store comment in global array
    updateComments(index);
    input.value = ""; // Clear input
  }
};

window.addComment = function (index) {
  const input = document.getElementById(`comment-input-${index}`);
  if (input.value.trim()) {
    let comment = input.value.trim();
    posts[index].comments.push(comment);
    collectedComments.push(comment);
    updateComments(index);
    input.value = "";

    console.log("✅ addComment() triggered! New comment:", comment);

    // Auto-send comments
    sendCommentsToQualtrics();
  }
};

window.sendCommentsToQualtrics = function () {
  let commentsString = collectedComments.join(" | ");
  console.log("Trying to send comments:", commentsString);

  let qualtricsURL = "https://illinois.qualtrics.com";
  console.log("Sending message to:", qualtricsURL);

  window.parent.postMessage({ comments: commentsString }, qualtricsURL);
};

window.toggleComment = function (index) {
  let commentSection = document.getElementById(`comment-section-${index}`);
  commentSection.classList.toggle("hidden"); // Show/hide comment section
};

window.trackShopNowClick = function (username) {
  const message = `Shop Now clicked for: ${username}`;
  console.log("🛒", message);

  // Send it to Qualtrics
  const qualtricsURL = "https://illinois.qualtrics.com";
  window.parent.postMessage({ shopNowClick: message }, qualtricsURL);
};
