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
        const icon = document.createElement("img");
        icon.className = "work-link-icon";
        icon.src = "SVGs/LinkIcon.svg";
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");
        titleEl.appendChild(icon);
      }
      return;
    }

    el.removeAttribute("href");
    el.removeAttribute("target");
    el.removeAttribute("rel");
    el.setAttribute("aria-disabled", "true");
    el.classList.add("is-disabled");
    const card = el.closest(".work-card");
    if (card) card.classList.add("is-disabled-card");

    el.addEventListener("click", (e) => e.preventDefault());
    });
  }
  
  document.addEventListener("DOMContentLoaded", applyProjectLinks);
  