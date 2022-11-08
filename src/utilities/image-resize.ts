import sharp from 'sharp';

const resizeImg = async (
  name: string,
  width: number,
  height: number,
  newImg: string
): Promise<boolean> => {
  try {
    await sharp(name)
      .resize({
        width: width,
        height: height,
      })
      .toFile(newImg);
    return true;
  } catch (error) {
    return false;
  }
};
export default resizeImg;

//to check the existance of a file
/*const resizeImg = (
  name:string,
  height:number,
  width:number,
  resizeImgF:string) =>{
    
    // Check if the file exists in the current directory.
    access (resizeImgF, constants.F_OK,()=>{
   sharp(name)
    .resize({
      width:width,
      height:height
    })
    .toFile(resizeImgF)
 })
}
*/

/*harp(input)
  .resize({ width: 100 })
  .toBuffer()
  .then(data => {
    // 100 pixels wide, auto-scaled height
  });
  */
