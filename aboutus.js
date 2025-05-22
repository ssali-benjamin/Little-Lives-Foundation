
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        
        function rotateSlides() {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }
        
        slides[0].classList.add('active');
        setInterval(rotateSlides, 5000);
        
        // Animated Counter
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            });
        }
        
        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                animateCounters();
            }
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.mission'));