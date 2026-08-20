const fs = require('fs')
const path = require('path')
const fetch = globalThis.fetch || require('node-fetch')

const outDir = path.join(__dirname, '../src/assets')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const images = {
  p1: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop&s=1',
  p2: 'https://images.unsplash.com/photo-1506917988371-2f3f2f1a2b5e?q=80&w=1200&auto=format&fit=crop&s=1',
  p3: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop&s=1',
  p4: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop&s=1',
  p5: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop&s=1',
  p6: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop&s=1',
  p7: 'https://images.unsplash.com/photo-1527515637463-5a12f6f3b3a6?q=80&w=1200&auto=format&fit=crop&s=1',
  p8: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop&s=1',
  p9: 'https://images.unsplash.com/photo-1512758017271-3d5a2f27f3a3?q=80&w=900&auto=format&fit=crop&s=1',
  p10: 'https://images.unsplash.com/photo-1547592180-9f9347f8e86a?q=80&w=1200&auto=format&fit=crop&s=1',
  p11: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=900&auto=format&fit=crop&s=1',
  p12: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop&s=1',
  p13: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop&s=1',
  p14: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop&s=1',
  p15: 'https://images.unsplash.com/photo-1516214104703-5a1b0d468b06?q=80&w=1200&auto=format&fit=crop&s=1',
  p16: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop&s=1',
  p17: 'https://images.unsplash.com/photo-1517686469429-8a5b3f6cf3b1?q=80&w=800&auto=format&fit=crop&s=1',
  p18: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop&s=1',
  p19: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=900&auto=format&fit=crop&s=1',
  p20: 'https://images.unsplash.com/photo-1466458548670-7bdfd0a0f1f1?q=80&w=700&auto=format&fit=crop&s=1',
  hero: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop&s=1'
  ,
  story: 'https://images.unsplash.com/photo-1527169402691-a7fe5d5b3d10?q=80&w=1600&auto=format&fit=crop&s=2'
}

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(dest, buf)
  console.log('Saved', dest)
}

;(async () => {
  try {
    for (const [id, url] of Object.entries(images)) {
      const dest = path.join(outDir, `${id}.jpg`)
      if (fs.existsSync(dest)) {
        console.log('Exists', dest)
        continue
      }
      try {
        await download(url, dest)
      } catch (err) {
        console.error('Skipped', id, '-', err.message)
      }
    }
    console.log('All images downloaded')
  } catch (err) {
    console.error('Error downloading images:', err)
    process.exit(1)
  }
})()
