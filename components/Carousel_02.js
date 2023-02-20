'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useInterval } from '../hooks';
import styles from '../styles/Carousel_02.module.scss';

export default function Carousel_02({ images }) {
  const [oldIdx, setOldIdx] = useState(0);
  const [newIdx, setNewIdx] = useState(0);
  const [oldImg, setOldImg] = useState({
    transform: 'scale(1, 1)',
    opacity: 1,
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  });
  const [newImg, setNewImg] = useState({
    transform: 'scale(1.25, 1.25)',
    opacity: 0,
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
  });
  const [clearImgMask, setClearImgMask] = useState(true);
  useInterval(() => {
    slider();
  }, 6000);
  const slider = () => {
    const idx = (oldIdx + 1 >= images.length) ? 0 : (oldIdx + 1);
    setNewIdx(idx);
    setClearImgMask(false);
    setTimeout(() => {
      setNewImg({
        ...newImg,
        transform: 'scale(1, 1)',
        opacity: 1,
      });
      setOldImg({
        ...oldImg,
        transform: 'scale(1.25, 1.25)',
        opacity: 0,
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
      });
    }, 100);
    setTimeout(() => {
      setOldIdx(idx);
      setOldImg({
        ...oldImg,
        transform: 'scale(1, 1)',
        opacity: 1,
        transition: 'none'
      });
      setClearImgMask(true);
      setNewImg({
        ...newImg,
        transform: 'scale(1.25, 1.25)',
        opacity: 0,
      });
    }, 600);
  }
  const genNewImg = () => {
    return (
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          transform: newImg.transform,
          opacity: newImg.opacity,
          transition: newImg.transition
        }}
      >
        <Image
          src={images[newIdx]}
          fill={true}
          alt={`image-${newIdx}`}
          style={{
            objectFit: "cover",
            objectPosition: "center top"
          }}
        />
      </div>
    )
  }
  return (
    <div
      className={styles['c-02-display']}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          transform: oldImg.transform,
          opacity: oldImg.opacity,
          transition: oldImg.transition
        }}
      >
        <Image
          src={images[oldIdx]}
          fill={true}
          alt={`image-${oldIdx}`}
          style={{
            objectFit: "cover",
            objectPosition: "center top"
          }}
        />
      </div>
      {clearImgMask ? <></> : genNewImg()}
    </div>
  )
}