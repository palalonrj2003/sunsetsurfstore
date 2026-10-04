const fs = require('fs');

async function run() {
  try {
    const res = await fetch('https://www.sunsetsurfstore.com/products.json?limit=30');
    const data = await res.json();
    const items = data.products.map(p => ({
      title: p.title,
      type: p.product_type,
      tags: p.tags,
      image1: p.images[0] ? p.images[0].src : null,
      image2: p.images[1] ? p.images[1].src : null
    }));
    fs.writeFileSync('sunset_live_catalog.json', JSON.stringify(items, null, 2));
    console.log('Saved ' + items.length + ' products');
  } catch (e) {
    console.error(e);
  }
}

run();
