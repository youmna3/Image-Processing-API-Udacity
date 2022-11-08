import { Request, Response, Router } from 'express';
import path from 'path';
//import images from '../../utilities/data';
import fs from 'fs';
import resizeImg from '../../utilities/image-resize';
import imageName from '../../utilities/data';

const imageRoutes = Router();

imageRoutes.get('/', async (req: Request, res: Response): Promise<void> => {
  //access the name, width and height query parameters
  const name = req.query.name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  // (./) gives the current directory
  // resolve a sequence of path-segments to an absolute path
  const imgPath = path.resolve('./assets') + `/${name}.jpg`;
  const folderPath = path.resolve('./assets') + `/thumb`;
  const thumb = `${folderPath}/${name}x${width}x${height}.jpg`;
  //make the new folder for resized images
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

  if (fs.existsSync(thumb)) return res.sendFile(thumb);
  const result = await resizeImg(imgPath, width, height, thumb);
  if (result === true) res.sendFile(thumb);

  if (name === ' ') {
    res.send('please enter a valid name');
    return;
  }
  const imgs = imageName.includes(name);
  if (imgs === false) {
    res.send('please enter the right input');
    return;
  }
  if (isNaN(width) || isNaN(height)) {
    res.send('please enter the right input');
    return;
  }
  if (!name || !width || !height) {
    res.send('please enter the right input');
    return;
  }
  /* if (
    !name ||
    !width ||
    !height ||
    name === '' ||
    isNaN(width) ||
    isNaN(height)
  ) {
    res.send('Make sure of your inputs');
    return;
  }
  */
});
export default imageRoutes;

/*async function resizeImg(resizeImgF: string) {
    try {
      await access(resizeImgF, constants.F_OK, () => {
        console.log('image');
        res.sendFile(path.resolve(resizeImgF));
      });
    } catch (error) {
      res.send('error');
    }
  }
  resizeImg(resizeImgF);
  //resizeImg(name,width,height);

  //res.sendFile(path.resolve(resizeImgF));
});


    */
