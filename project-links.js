const PROJECT_LINKS = {
    "opengjk-gpu": "https://github.com/vismaychuriwala/OpenGJK-GPU",
    "cuda-path-tracer": "https://github.com/mhedlund7/Project3-CUDA-Path-Tracer",
    "cloud-search-engine": "",
    "procedural-bird-wings": "https://github.com/mhedlund7/procedural-final-project",
    "webgpu-gaussian-splat": "https://github.com/mhedlund7/Project5-WebGPU-Gaussian-Splat-Viewer",
    "webgpu-forward-plus": "https://github.com/mhedlund7/Project4-WebGPU-Forward-Plus-and-Clustered-Deferred",
    "cuda-boids": "https://github.com/mhedlund7/Project1-CUDA-Flocking",
    "cuda-stream-compaction": "https://github.com/mhedlund7/Project2-Stream-Compaction",
    "mini-minecraft": "",
    "multi-agent-playground": "https://github.com/MoodyMarshmallow/multi_agent_playground",
    "ese3060-cifar-nanogpt": "https://github.com/mhedlund7/ese-3060-project",
    "3d-stylization": "https://github.com/mhedlund7/hw02-stylization",
    "pennos": "",
    "music-exploration": "",
  };
  
  function applyProjectLinks() {
    document.querySelectorAll("[data-project]").forEach((el) => {
      const key = el.getAttribute("data-project");
      const url = PROJECT_LINKS[key];
    const hasLink = !!(url && url.trim() !== "");

    // If this project has a working URL, make the whole card open it and add a small link icon.
    if (hasLink) {
      el.setAttribute("href", url);

      if (url.startsWith("http") || url.endsWith(".pdf")) {
        el.setAttribute("target", "_blank");
        if (url.startsWith("http")) {
          el.setAttribute("rel", "noopener noreferrer");
        }
      }

      const titleEl = el.querySelector(".work-title");
      if (titleEl && !titleEl.querySelector(".work-link-icon")) {
        const icon = document.createElement("span");
        icon.className = "work-link-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 13.5L13.5 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M8 12a4 4 0 0 1 4-4h1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 12a4 4 0 0 1-4 4h-1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M14 8h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 8l-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
        titleEl.appendChild(icon);
      }
      return;
    }

    // Otherwise, remove any default link behavior so clicking doesn't jump to the top of the page.
    el.removeAttribute("href");
    el.removeAttribute("target");
    el.removeAttribute("rel");
    el.setAttribute("aria-disabled", "true");
    el.classList.add("is-disabled");
    const card = el.closest(".work-card");
    if (card) card.classList.add("is-disabled-card");

    // Prevent navigation/jump caused by stale "#" links.
    el.addEventListener("click", (e) => e.preventDefault());
    });
  }
  
  document.addEventListener("DOMContentLoaded", applyProjectLinks);
  