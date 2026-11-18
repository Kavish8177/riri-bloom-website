
// =================================
// RIRI BLOOM - WEBSITE SETTINGS
// =================================

const socialLinks = {
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
    facebook: "https://www.facebook.com/"
};

document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // PRODUCT ENQUIRY LINKS
    // =================================

    document.querySelectorAll(".social-link").forEach(function (button) {
        button.href = socialLinks.instagram;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
    });


    // =================================
    // PRODUCT CATEGORY FILTERING
    // =================================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");
    const noProducts = document.querySelector(".no-products");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;
            let visibleCount = 0;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            products.forEach(function (product) {

                const category = product.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {
                    product.style.display = "";
                    visibleCount++;
                } else {
                    product.style.display = "none";
                }

            });

            if (noProducts) {
                noProducts.hidden = visibleCount !== 0;
            }

        });

    });


    // =================================
    // MOBILE NAVIGATION MENU
    // =================================

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

        });

        // Close menu after selecting a page
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    // =================================
    // BACK TO TOP BUTTON
    // =================================

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.innerHTML = "&#8593;";
    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    // Show button after scrolling down
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });

    // Scroll smoothly to the top
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    console.log("Riri Bloom website loaded successfully!");

});
