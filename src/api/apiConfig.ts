import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.TTTkzjnA_YQA3-MMQFEhR9-Ms8ZUaEpZHl7VGAxJZihNsGyq_HNFRzjag3fB',
  },
});
