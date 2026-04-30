import { spawn } from "node:child_process";
import path from "node:path";

const args = process.argv.slice(2);

function getPort(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if ((arg === "-p" || arg === "--port") && argv[index + 1]) {
      return argv[index + 1];
    }
    if (arg.startsWith("-p=")) {
      return arg.slice(3);
    }
    if (arg.startsWith("--port=")) {
      return arg.slice(7);
    }
  }

  return process.env.PORT || "3000";
}

const port = getPort(args);
const safePort = String(port).replace(/[^a-zA-Z0-9_-]/g, "_");
const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextBin, "dev", ...args], {
  env: {
    ...process.env,
    NEXT_DIST_DIR: `.next-dev-${safePort}`,
  },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
