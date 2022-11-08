//import supertest from 'supertest';
import resizeImg from '../utilities/image-resize';
//import path from 'path';
//const request = supertest(resizeImg);

describe('check the existance of an image', () => {
  it('fjord_200_200.jpg is existed', async () => {
    //it run the test
    //const assets = path.resolve('./assets')
    const input = await resizeImg(
      './assets/fjord',
      100,
      100,
      './assets/thumb/fjord'
    );
    expect(input).toBeTruthy;
  });
});
