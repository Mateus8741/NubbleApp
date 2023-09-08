import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.VHeC6auUmEBuukWZUy60IU4PmegOIIzoaYcjcbSEIKRnAQnSc0BJvQ91_LXX',
  },
});
