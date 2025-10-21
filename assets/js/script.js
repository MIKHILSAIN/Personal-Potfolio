'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// EmailJS Integration - Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded, initializing EmailJS...");
  
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init("kDoNAFZjCvQBPO8hi");
    console.log("EmailJS initialized successfully");
  } else {
    console.error("EmailJS not loaded!");
    return;
  }

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  // Function to show status message
  function showStatus(message, isError = false) {
    if (formStatus) {
      formStatus.textContent = message;
      formStatus.style.display = "block";
      formStatus.style.color = isError ? "#ff6b6b" : "#4caf50";
      formStatus.style.backgroundColor = isError ? "#ffe6e6" : "#e6ffe6";
      formStatus.style.border = isError ? "1px solid #ff6b6b" : "1px solid #4caf50";
      formStatus.style.padding = "12px";
      formStatus.style.borderRadius = "8px";
      formStatus.style.marginTop = "15px";
      formStatus.style.fontSize = "14px";
      
      setTimeout(() => {
        formStatus.style.display = "none";
      }, 5000);
    }
  }

  // Form submission handler
  if (contactForm) {
    console.log("Contact form found, attaching event listener...");
    
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      console.log("Form submitted");
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        from_name: formData.get("fullname") || '',
        from_email: formData.get("email") || '',
        message: formData.get("message") || '',
        to_email: "nmikhilsai@gmail.com",
        reply_to: formData.get("email") || ''
      };
      
      console.log("Form data:", data);
      
      // Validate required fields
      if (!data.from_name || !data.from_email || !data.message) {
        showStatus("Please fill in all required fields.", true);
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.from_email)) {
        showStatus("Please enter a valid email address.", true);
        return;
      }
      
      // Disable submit button
      const submitBtn = contactForm.querySelector("[type='submit']");
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Sending...</span>';
      
      try {
        console.log("Attempting to send email via EmailJS...");
        console.log("Service ID:", 'service_hcz15qw');
        console.log("Template ID:", 'template_25nvat8');
        
        // Send email using EmailJS
        const response = await emailjs.send(
          'service_hcz15qw',
          'template_25nvat8',
          {
            from_name: data.from_name,
            from_email: data.from_email,
            message: data.message,
            to_email: data.to_email,
            reply_to: data.reply_to
          }
        );
        
        console.log("EmailJS response:", response);
        
        if (response.status === 200) {
          showStatus("✅ Message sent successfully! I'll get back to you soon.", false);
          contactForm.reset();
          
          // Re-disable the form button after success
          if (formBtn) {
            formBtn.setAttribute("disabled", "");
          }
        }
      } catch (error) {
        console.error("EmailJS Full Error:", error);
        console.error("Error status:", error.status);
        console.error("Error text:", error.text);
        
        // More specific error handling
        if (error.status === 412) {
          showStatus("❌ Template error. Please check your EmailJS template configuration.", true);
        } else if (error.status === 400) {
          showStatus("❌ Invalid request. Please check your form data.", true);
        } else {
          showStatus("❌ Failed to send message. Please try again later.", true);
        }
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  } else {
    console.error("Contact form not found!");
  }
});