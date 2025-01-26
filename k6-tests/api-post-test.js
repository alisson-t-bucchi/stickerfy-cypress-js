import http from 'k6/http';
import { check, sleep } from 'k6';

function addSticker(name, url) {
  const payload = JSON.stringify({ name, url });

  try {
    const response = http.post('https://stickerfy.herokuapp.com/stickers', payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    check(response, {
      'status é 201': (r) => r.status === 201,
      'resposta contém o nome correto': (r) => r.json('name') === name,
      // Add more assertions based on the expected response structure
    });
  } catch (error) {
    console.error('Error adding sticker:', error);
  }
}

export default function () {
  // Generate unique name (example)
  const name = `K6 Sticker - ${Date.now()}`;
  const url = 'https://www.example.com/sticker_image.png';

  addSticker(name, url);

  sleep(1);
}
