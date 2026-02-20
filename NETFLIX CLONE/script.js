const faqs = document.querySelectorAll(".faqbox");

    faqs.forEach(faq => {
        const btn = faq.querySelector(".faq-question");

        btn.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });