import "@fontsource/noto-sans-jp"
import "./src/styles/base.css"
import "./src/styles/blog-contents-style.css"

export const onRouteUpdate = () => {
    if (typeof document !== "undefined") {
        const elements = document.querySelectorAll(".fadeInUp, .fadeIn");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("on");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }
};

export const onClientEntry = () => {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("js");
  }
};