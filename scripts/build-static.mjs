import { promises as fs } from 'fs'
import path from 'path'

const root = process.cwd()

async function exists(p) {
  try { await fs.access(p); return true } catch { return false }
}

async function rmrf(p) {
  if (await exists(p)) {
    await fs.rm(p, { recursive: true, force: true })
  }
}

async function mkdirp(p) {
  await fs.mkdir(p, { recursive: true })
}

async function copyFile(src, dest) {
  await mkdirp(path.dirname(dest))
  await fs.copyFile(src, dest)
}

async function copyDir(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    const src = path.join(srcDir, entry.name)
    const dest = path.join(destDir, entry.name)
    if (entry.isDirectory()) {
      await copyDir(src, dest)
    } else if (entry.isFile()) {
      await copyFile(src, dest)
    }
  }
}

async function main() {
  const dist = path.join(root, 'dist')
  await rmrf(dist)
  await mkdirp(dist)

  const staticDir = path.join(root, 'static')
  const resourcesDir = path.join(root, 'resources')

  if (!(await exists(staticDir))) {
    throw new Error('static/ directory not found')
  }
  if (!(await exists(resourcesDir))) {
    throw new Error('resources/ directory not found')
  }

  // Copy HTML pages from static/ to the dist root so clean URLs work (e.g., /services -> services.html)
  await copyDir(staticDir, dist)
  // Keep resources under /resources for CSS/JS/images
  await copyDir(resourcesDir, path.join(dist, 'resources'))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
