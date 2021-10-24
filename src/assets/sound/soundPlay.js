import { Howl } from 'howler';

export const soundPlay = (src) => {
  const sound = new Howl({
    src
  });
  sound.play();
};