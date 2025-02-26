import React, { createContext } from "react";
import { soundEffects, useSoundEffectStore } from "./useSoundEffectStore";

const soundKeys = Object.keys(soundEffects);

export const SoundEffectContext = createContext<{
  playSoundEffect: (name: keyof typeof soundEffects) => void;
}>({ playSoundEffect: () => {} });

export const SoundEffectProvider: React.FC = ({}) => {
  const add = useSoundEffectStore((x) => x.add);

  return (
    <>
      {soundKeys.map((key) => (
        <audio
          key={key}
          ref={(ref) => {
            if (ref) {
              add(key, ref);
            }
          }}
          src={`/sound-effects/${
            soundEffects[key as keyof typeof soundEffects]
          }`}
        />
      ))}
    </>
  );
};
