import http from 'k6/http';
import { check, sleep } from 'k6';

function validateResponse(response) {
  check(response, {
    'status was 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}

export default function () {
  const response = http.get('https://stickerfy.herokuapp.com/stickers');
  validateResponse(response);

  // Increase load by looping or using multiple VUs
  // sleep(Math.random() * 500); // Random delay between 0-500ms
}
