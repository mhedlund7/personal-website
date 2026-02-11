// Short one-liners used in the hybrid tile layout on projects.html.
// Keys must match the data-project values in the HTML and PROJECT_LINKS.

const PROJECT_DESCRIPTIONS = {
  "opengjk-gpu":
    "CUDA implementation of GJK + EPA collision detection with warp-parallel execution and 37x speedups over CPU baselines.",
  "cuda-path-tracer":
    "Physically-based path tracer with acceleration structures, stream compaction, and support for textured glTF meshes.",
  "cloud-search-engine":
    "Distributed crawl → index → rank pipeline with performance-focused query serving and robust web data handling.",
  "procedural-bird-wings":
    "Procedural wing generator with feather systems and texture-driven species variation.",
  "webgpu-gaussian-splat":
    "Real-time WebGPU renderer for neural point clouds (3D Gaussian Splatting) with culling, sorting, and fast frame times.",
  "webgpu-forward-plus":
    "Multiple lighting pipelines (Naive / Forward+ / Clustered Deferred) optimized for scenes with thousands of point lights.",
  "cuda-boids":
    "Reynolds Boids at scale with spatial hashing / uniform grid optimization for massive speedups and high FPS.",
  "cuda-stream-compaction":
    "Implemented scan variants and built stream compaction + radix sort primitives with profiling-driven optimization.",
  "mini-minecraft":
    "Chunk-based voxel engine with multithreaded procedural generation, shader effects, and tooling for voxelization/editing.",
  "multi-agent-playground":
    "LLM-powered agent simulation with action schemas, robust state management, and real-time visualization tools.",
  "ese3060-cifar-nanogpt":
    "Speed/accuracy optimization experiments plus distributed NanoGPT work and rigorous statistical benchmarking.",
  "3d-stylization":
    "Toon shader + rim lighting and post-process outlines (depth/normals) with interactive effects.",
  "pennos":
    "FAT-style file system, modular abstractions, and subsystem integration with careful concurrency debugging.",
  "music-exploration":
    "Full-stack music analytics app with dataset integration, feature visualization, and recommendation-oriented exploration.",
};

function applyProjectDescriptions() {
  document.querySelectorAll("[data-project-desc]").forEach((el) => {
    const key = el.getAttribute("data-project-desc");
    const desc = PROJECT_DESCRIPTIONS[key];
    if (desc) el.textContent = desc;
  });
}

document.addEventListener("DOMContentLoaded", applyProjectDescriptions);
