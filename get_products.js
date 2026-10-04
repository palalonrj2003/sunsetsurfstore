const fs = require('fs');

async function getProducts() {
  try {
    const res = await fetch('https://a8fwmd-x3.myshopify.com/products.json?limit=50');
    const data = await res.json();
    const summary = data.products.map(p => ({
      id: p.id,
      title: p.title,
      handle: p.handle,
      product_type: p.product_type,
      tags: p.tags,
      image: p.images[0] ? p.images[0].src : null,
      images: p.images.map(img => img.src)
    }));
    fs.writeFileSync('products_list.json', JSON.stringify(summary, null, 2));
    console.log(`Fetched ${summary.length} products`);
  } catch (err) {
    console.error(err);
  }
}

getProducts();
