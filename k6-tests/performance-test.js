import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50,                                  // Número fixo de usuários virtuais
  duration: '2m',                           // Tempo total do teste
};

export default function () {
  let response = http.get('https://stickerfy.herokuapp.com');

  // Validações simples para checar a resposta
  check(response, {
    'status was 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simula o tempo entre requisições
}
