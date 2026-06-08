'use client';

import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  className?: string;
};

// Browsers will refuse autoplay silently in a few common situations:
//   • Safari sometimes ignores the autoplay attribute when the video has
//     audio tracks, even with muted set declaratively.
//   • Tab visibility changes can pause the video and never resume it.
//   • A flaky first network frame can leave the element in a "stalled" state.
// This component owns the <video> ref and re-triggers play() on every signal
// that the video is not currently advancing.
export default function HeroVideoBackground({ src, className }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !video) return;
      const result = video.play();
      if (result && typeof result.catch === 'function') {
        result.catch(() => {
          // Some browsers reject the first play() if the data isn't ready
          // yet — retry once more on the next 'canplay' event below.
        });
      }
    };

    const handlePause = () => {
      if (!video.ended) tryPlay();
    };
    const handleEnded = () => tryPlay();
    const handleCanPlay = () => {
      if (video.paused) tryPlay();
    };
    const handleStalled = () => tryPlay();
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };

    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('stalled', handleStalled);
    video.addEventListener('loadeddata', handleCanPlay);
    document.addEventListener('visibilitychange', handleVisibility);

    tryPlay();

    return () => {
      cancelled = true;
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('stalled', handleStalled);
      video.removeEventListener('loadeddata', handleCanPlay);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
    />
  );
}
