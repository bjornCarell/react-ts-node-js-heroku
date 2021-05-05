import { expect } from 'chai';
import { handleResponse } from './handleResponse';

const promise = (data) =>
  new Promise((res, rej) => {
    try {
      res(data);
    } catch (error) {
      rej(error);
    }
  });

it('should return the json of the Promise response', async () => {
  const body = {
    json: () => 'Testing promises is fun',
    status: 200,
  };

  const response = await promise(body);
  const expected = 'Testing promises is fun';
  const actual = await handleResponse(response);

  expect(actual).to.equal(expected);
});
