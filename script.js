document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

function handleSearch() {
  const query = document.querySelector(".search-bar input").value;
  if (query.trim() === "") {
    alert("Please enter a food item to search.");
  } else {
    alert(`Searching for: ${query}`);
    // Implement search logic here
  }
}

document.querySelectorAll(".add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const title = btn.closest(".menu-card").querySelector("h3").textContent;
    alert(`${title} added to cart`);
  });
});

// Home Kitchen Section JavaScript

// Cart functionality
let cartCount = 0;
let cartItems = [];

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();
});

// Add item to cart function
function addToCart(button, itemName, price) {
  // Increment cart count
  cartCount++;

  // Add item to cart array
  cartItems.push({
    name: itemName,
    price: price,
    id: Date.now(), // Simple ID generation
  });

  // Update cart display
  updateCartDisplay();

  // Add visual feedback to button
  animateAddButton(button);

  // Add bounce animation to cart icon
  animateCartIcon();

  // Optional: Log cart contents (for debugging)
  console.log("Cart updated:", cartItems);
  console.log("Total items:", cartCount);
}

// Update cart count display
function updateCartDisplay() {
  const cartCountElement = document.getElementById("cartCount");
  const cartIcon = document.getElementById("cartIcon");

  if (cartCountElement) {
    cartCountElement.textContent = cartCount;

    // Show/hide cart count badge
    if (cartCount > 0) {
      cartCountElement.classList.remove("hidden");
    } else {
      cartCountElement.classList.add("hidden");
    }
  }
}

// Animate the add button when clicked
function animateAddButton(button) {
  button.classList.add("added");

  // Remove animation class after animation completes
  setTimeout(() => {
    button.classList.remove("added");
  }, 400);
}

// Animate cart icon when item is added
function animateCartIcon() {
  const cartIcon = document.getElementById("cartIcon");

  if (cartIcon) {
    cartIcon.classList.add("bounce");

    // Remove animation class after animation completes
    setTimeout(() => {
      cartIcon.classList.remove("bounce");
    }, 600);
  }
}

// Cart icon click handler (optional - you can expand this)
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cartIcon");

  if (cartIcon) {
    cartIcon.addEventListener("click", function () {
      // You can add functionality here like:
      // - Show cart modal
      // - Navigate to cart page
      // - Show cart summary

      console.log("Cart clicked! Current items:", cartItems);
      console.log("Total items:", cartCount);

      // Example: Simple alert showing cart contents
      if (cartCount > 0) {
        let cartSummary = `Cart (${cartCount} items):\n\n`;
        cartItems.forEach((item, index) => {
          cartSummary += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        });

        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        cartSummary += `\nTotal: ₹${total}`;

        alert(cartSummary);
      } else {
        alert("Your cart is empty!");
      }
    });
  }
});

// Optional: Function to clear cart
function clearCart() {
  cartCount = 0;
  cartItems = [];
  updateCartDisplay();
  console.log("Cart cleared");
}

// Optional: Function to remove specific item from cart
function removeFromCart(itemId) {
  const itemIndex = cartItems.findIndex((item) => item.id === itemId);

  if (itemIndex > -1) {
    cartItems.splice(itemIndex, 1);
    cartCount--;
    updateCartDisplay();
    console.log("Item removed from cart");
  }
}

// Optional: Function to get cart total
function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

// Optional: Function to get cart items count
function getCartItemsCount() {
  return cartCount;
}

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dishesContainer = document.getElementById("dishesContainer");

  const scrollAmount = 320; // Width of one dish card including gap

  nextBtn.addEventListener("click", () => {
    dishesContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    dishesContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dishCards = document.querySelectorAll(".dish-card");

  dishCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove 'active' class from all cards
      dishCards.forEach((c) => c.classList.remove("active"));

      // Add 'active' class to the clicked one
      card.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Quantity +/− button functionality
  const plusBtns = document.querySelectorAll(".qty-btn.plus");
  const minusBtns = document.querySelectorAll(".qty-btn.minus");

  plusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityElement = btn.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = quantity + 1;
    });
  });

  minusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityElement = btn.parentElement.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent, 10);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
      }
    });
  });
});

window.onload = function () {
  const modal = document.getElementById("requestModal");
  const openBtn = document.getElementById("requestDishBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const submitBtn = document.getElementById("submitBtn");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  submitBtn.addEventListener("click", () => {
    modal.style.display = "none";
    // Optional: Add form processing logic
  });
};



document.addEventListener("DOMContentLoaded", function () {
  // === All your video-related JavaScript goes here ===

  const video = document.getElementById("cookingVideo");
  const playButton = document.getElementById("playButton");
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");
  const videoContainer = document.querySelector(".video-container");
  const videoOverlay = document.querySelector(".video-overlay");

  let isPlaying = false;

  function playVideo() {
    video.play();
    isPlaying = true;
    videoContainer.classList.add("playing");
    playIcon.style.display = "none";
    pauseIcon.style.display = "flex";
    addRippleEffect();
  }

  function pauseVideo() {
    video.pause();
    isPlaying = false;
    videoContainer.classList.remove("playing");
    playIcon.style.display = "flex";
    pauseIcon.style.display = "none";
  }

  function toggleVideo() {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  }

  function addRippleEffect() {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.cssText = `
      position: absolute;
      width: 100px;
      height: 100px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out;
      pointer-events: none;
      top: 50%;
      left: 50%;
      margin-top: -50px;
      margin-left: -50px;
    `;
    playButton.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentElement) {
        ripple.parentElement.removeChild(ripple);
      }
    }, 600);
  }

  const style = document.createElement("style");
  style.textContent = `
    @keyframes rippleEffect {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  playButton.addEventListener("click", toggleVideo);

  video.addEventListener("ended", () => {
    pauseVideo();
    video.currentTime = 0;
  });
});

video.addEventListener("loadstart", () => {
  console.log("Video loading started");
});

video.addEventListener("canplay", () => {
  console.log("Video can start playing");
});

video.addEventListener("error", (e) => {
  console.error("Video error:", e);
  // Fallback: show a static image if video fails to load
  const fallbackImage = document.createElement("img");
  fallbackImage.src = "Images\videoAlternatePhoto.avif";
  fallbackImage.alt = "Delicious home cooked food";
  fallbackImage.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;

  video.parentElement.insertBefore(fallbackImage, video);
  video.style.display = "none";
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
  // Space bar or Enter to toggle video (only if video section is in view)
  if (
    (e.code === "Space" || e.code === "Enter") &&
    isElementInViewport(videoContainer)
  ) {
    e.preventDefault();
    toggleVideo();
  }
});

// Function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Double click to toggle fullscreen (optional enhancement)
video.addEventListener("dblclick", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoContainer.requestFullscreen().catch((err) => {
      console.log("Fullscreen not supported:", err);
    });
  }
});

// Handle fullscreen changes
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    videoContainer.style.borderRadius = "0";
  } else {
    videoContainer.style.borderRadius = "20px";
  }
});

// Video progress tracking (optional)
video.addEventListener("timeupdate", () => {
  const progress = (video.currentTime / video.duration) * 100;
  // You can use this to show a progress bar if needed
  console.log(`Video progress: ${progress.toFixed(1)}%`);
});

// Handle visibility change (pause video when tab is not active)
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    pauseVideo();
  }
});

// Smooth scroll into view when section loads
window.addEventListener("load", () => {
  const videoSection = document.querySelector(".video-section");

  // Add intersection observer for animation triggers
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          // Animate ingredients with delay
          const ingredients = entry.target.querySelectorAll(".ingredient");
          ingredients.forEach((ingredient, index) => {
            setTimeout(() => {
              ingredient.style.opacity = "0.7";
              ingredient.style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Initial setup for animation
  videoSection.style.opacity = "0";
  videoSection.style.transform = "translateY(30px)";
  videoSection.style.transition = "all 0.8s ease";

  const ingredients = videoSection.querySelectorAll(".ingredient");
  ingredients.forEach((ingredient) => {
    ingredient.style.opacity = "0";
    ingredient.style.transform = "translateY(20px)";
    ingredient.style.transition = "all 0.6s ease";
  });

  observer.observe(videoSection);
});

// Touch gesture support for mobile
let touchStartY = 0;
let touchStartX = 0;

videoContainer.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
  touchStartX = e.touches[0].clientX;
});

videoContainer.addEventListener("touchend", (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const touchEndX = e.changedTouches[0].clientX;

  const deltaY = touchStartY - touchEndY;
  const deltaX = touchStartX - touchEndX;

  // If it's a tap (minimal movement), toggle video
  if (Math.abs(deltaY) < 10 && Math.abs(deltaX) < 10) {
    toggleVideo();
  }
});

// Preload video for better performance
video.preload = "metadata";

// Set video quality based on connection
if ("connection" in navigator) {
  const connection = navigator.connection;
  if (
    connection.effectiveType === "slow-2g" ||
    connection.effectiveType === "2g"
  ) {
    video.preload = "none";
  }
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");
  const form = this;

  // Change button state
  submitBtn.textContent = "Submitted";
  submitBtn.classList.add("submitted");
  submitBtn.disabled = true;

  // Show success message
  setTimeout(() => {
    successMessage.classList.add("show");
  }, 300);

  // Optional: Reset form after a delay
  setTimeout(() => {
    form.reset();
    submitBtn.textContent = "Submit";
    submitBtn.classList.remove("submitted");
    submitBtn.disabled = false;
    successMessage.classList.remove("show");
  }, 5000);
});

// Add floating animation to form inputs
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "translateY(-2px)";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "translateY(0)";
  });
});