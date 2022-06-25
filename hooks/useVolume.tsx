import { ChangeEvent, useCallback } from "react";
import { useQuery } from "react-query";
import { VideoType } from "../components/Atoms/Media/Medias";

const useVolume = (type: VideoType) => {
  const { data: volume, refetch } = useQuery(`${type}:volume`, () => {
    if (!window) return 0;
    if (navigator.userAgent.includes("Mobile")) return 1;
    return +(localStorage.getItem(type) ?? 0.5);
  });

  const onVolumeChange = useCallback(
    (e: ChangeEvent<HTMLVideoElement>) => {
      const { volume } = e.target;
      localStorage.setItem(type, String(volume));
      refetch();
    },
    [type],
  );

  return {
    volume,
    onVolumeChange,
  };
};

export default useVolume;
