import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ._f3aUZHCOsZYQ_YzECs34gOW5dGOV_a_8PjHeoPrNDtJLFek4wPDjTMho3_Q',
  },
});
