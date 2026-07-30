import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Duration of the test
};

export default function () {
  http.get('https://todolistapi-0uwb.onrender.com/compute'); //Link to Local Host or the API on render (https://todolistapi-0uwb.onrender.com/compute)
}