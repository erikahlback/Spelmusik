"use client";

import { useEffect, useRef, useState } from "react";
import type { Track } from "@/content/tracks";

type Props = {
  tracks: ReadonlyArray<Track>;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function MusicPlayer({ tracks }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const active = tracks[activeIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, activeIndex]);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [activeIndex]);

  if (tracks.length === 0) {
    return (
      <div className="rounded-lg border border-line p-6 text-center text-muted">
        <p className="text-sm">Music coming soon.</p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em]">
          Player activates when the first track is added
        </p>
      </div>
    );
  }

  function selectTrack(i: number) {
    if (i === activeIndex) {
      setIsPlaying((p) => !p);
    } else {
      setActiveIndex(i);
      setIsPlaying(true);
    }
  }

  function onScrub(e: React.ChangeEvent<HTMLInputElement>) {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-line p-5 sm:p-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition hover:bg-foreground hover:text-background focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {isPlaying ? (
              <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden>
                <rect x="1" y="1" width="4" height="14" fill="currentColor" />
                <rect x="9" y="1" width="4" height="14" fill="currentColor" />
              </svg>
            ) : (
              <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden>
                <path d="M2 1 L13 8 L2 15 Z" fill="currentColor" />
              </svg>
            )}
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-lg leading-tight">
              {active.title}
            </p>
            {active.description && (
              <p className="mt-1 truncate text-sm text-muted">
                {active.description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3 font-mono text-xs text-muted">
          <span className="tabular-nums">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={onScrub}
            aria-label="Playback position"
            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-line accent-foreground"
          />
          <span className="tabular-nums">{formatTime(duration)}</span>
        </div>

        <audio
          ref={audioRef}
          src={active.file}
          preload="metadata"
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onEnded={() => {
            if (activeIndex < tracks.length - 1) {
              setActiveIndex(activeIndex + 1);
            } else {
              setIsPlaying(false);
            }
          }}
        />
      </div>

      {tracks.length > 1 && (
        <ol className="divide-y divide-line border-y border-line">
          {tracks.map((t, i) => (
            <li key={t.file}>
              <button
                type="button"
                onClick={() => selectTrack(i)}
                className={`flex w-full items-center gap-4 py-3 text-left transition hover:text-foreground ${
                  i === activeIndex ? "text-foreground" : "text-muted"
                }`}
              >
                <span className="font-mono text-xs tabular-nums w-6">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="flex-1 truncate text-base">{t.title}</span>
                {t.year && (
                  <span className="font-mono text-xs tabular-nums">
                    {t.year}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
