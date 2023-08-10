'use client'

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import './styles/global.scss';
import s from './styles/main.module.scss';
import 'normalize.css';
import valley from './assets/valley.mp4';
import castle from './assets/castle.png';
import { Fade } from '@mui/material';
import {
  FADE_OUT_VIDEO_MS,
  FADE_OUT_VIDEO_SECONDS,
  FADE_IN_VIDEO_MS,
  FADE_IN_MAIN_ABBREVIATED_MS,
  FADE_IN_CASTLE_MS,
  FADE_IN_CASTLE_BUFFER_SECONDS,
  PLAYBACK_RATE,
} from './constants/video';
import { drawer, Sections, SectionType } from './components/sections';
import Countdown from './components/countdown';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Divider from './divider';
import Image from 'next/image';

const Main = (): JSX.Element => {
  const videoRef = useRef() as React.RefObject<HTMLVideoElement>;
  const [fadeInVideo, setFadeInVideo] = useState(true);
  const [fadeInImage, setFadeInImage] = useState(false);
  const [endVideoEarly, setEndVideoEarly] = useState(false);
  const [selectedSection, setSelectedSection] = useState(Sections[0]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const contentRef = useRef<null | HTMLDivElement>(null);

  const toggleDrawer =
    (newValue = !drawerOpen) =>
    (): void =>
      setDrawerOpen(newValue);

  const handleSelectionClick = (section: SectionType) => () => {
    if (typeof section.content === 'string')
      return window ? window.open(section.content) : null;
    setSelectedSection(section);
  };

  useEffect((): void => {
    const video = videoRef.current;
    if (video) video.playbackRate = PLAYBACK_RATE;
  });

  useEffect((): void => {
    if (contentRef.current && !fadeInVideo)
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedSection]);

  const handleTimeUpdate = (): void => {
    const video = videoRef.current;
    if (video) {
      const { currentTime, duration } = video;

      const startVideoFadeOut = duration - FADE_OUT_VIDEO_SECONDS;
      const startImageFadeIn =
        startVideoFadeOut + FADE_IN_CASTLE_BUFFER_SECONDS;

      if (fadeInVideo && currentTime > duration - FADE_OUT_VIDEO_SECONDS) {
        setFadeInVideo(false);
      } else if (currentTime > startImageFadeIn) {
        setFadeInImage(true);
      }
    }
  };

  const onClickVideo = (): void => {
    if (fadeInVideo && !endVideoEarly) {
      setFadeInVideo(false);
      setFadeInImage(true);
      setEndVideoEarly(true);
    }
  };

  return (
    <div className={s.AppWrapper}>
      <div className={fadeInImage ? s.Wrapper : undefined}>
        <Fade
          in={fadeInVideo}
          timeout={{
            enter: FADE_IN_VIDEO_MS,
            exit: endVideoEarly ? FADE_IN_MAIN_ABBREVIATED_MS : FADE_OUT_VIDEO_MS,
          }}
          unmountOnExit
        >
          <div>
            <video
              autoPlay
              id="valley"
              className={s.Video}
              onTimeUpdate={handleTimeUpdate}
              ref={videoRef}
              onClick={onClickVideo}
              muted
            >
              <source src={valley} type="video/mp4" />
            </video>
            <div className={fadeInVideo ? s.VideoOverlay : s.DisplayNone}>
              Click to skip
            </div>
          </div>
        </Fade>
        <Fade
          in={fadeInImage}
          timeout={FADE_IN_CASTLE_MS}
          easing="ease-in"
          mountOnEnter
        >
          <div className={s.Main}>
            <IconButton onClick={toggleDrawer()}>
              <MenuIcon />
              <div className={s.MenuText}>Menu</div>
            </IconButton>
            <div className={s.Hero}>
              <div className={s.JoinUs}>Thanks for Joining Us!</div>
              <Image className={s.Castle} src={castle} alt="castle" />
              <div className={s.Names}>Andrea and Alexander</div>
            </div>
            <Countdown />
            <Divider />
            <div ref={contentRef} className={s.Container}>
              {selectedSection.content}
            </div>
            <div className={s.Author}>Site made by Alexander</div>
          </div>
        </Fade>
        {drawer(drawerOpen, toggleDrawer, handleSelectionClick)}
      </div>
    </div>
  );
};

export default Main;
