'use client';
import { useRef, useState } from 'react';
import styles from '../styles/Carousel_01.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useInterval, useParentSize } from '../hooks';

export default function Carousel_01({ images, content, timer }) {
  const parentRef = useRef(null);
  const [width, height] = useParentSize(parentRef);
  const slotCol = width && width > 576 ? 6 : 4;
  const slotRow = Math.ceil(height / (width / slotCol));
  const slotSize = width / slotCol;
  const [clearSlot, setClearSlot] = useState(false);
  const [bgIdx, setBgIdx] = useState(0);
  const [slotIdx, setSlotIdx] = useState(0);
  const [bgSetting, setBgSetting] = useState({
    opacity: 0.6,
    transition: false
  });
  const [slotSetting, setSlotSetting] = useState({
    slotItemStart: true,
    slotItemImgTransformStart: true,
  });
  const [contentTitleSetting, setContentTitleSetting] = useState({
    transform: 'translate3d(0, 0, 0)',
    opacity: '1'
  });
  const [contentTagSetting, setContentTagSetting] = useState({
    transform: 'translate3d(0, 0, 0)',
    opacity: '1'
  });
  const [contentBtnSetting, setContentBtnSetting] = useState({
    transform: 'translate3d(0, 0, 0)',
    opacity: '1'
  });

  const slotMaker = () => {
    let d = 0;
    let c = 0;
    let r = 0;
    let elements = [];
    for (let i = 0; i < slotRow * slotCol; i++) {
      const left = (i - ((Math.ceil((i + 1) / slotCol) - 1) * slotCol)) * slotSize;
      const top = (Math.ceil((i + 1) / slotCol) - 1) * slotSize;
      const transition = `all 1s cubic-bezier(.24,.13,.04,.79) ${c}s`;
      const imgTransition = `transform 1s ease-out ${c}s`;
      c += 0.125;
      r++;
      if (r % slotCol === 0) {
        d += 0.075;
        c = d;
      }

      elements.push(
        <div
          key={`slot-item-${i}`}
          className={styles['slot-item']}
          style={{
            left,
            top,
            width: slotSetting.slotItemStart ? 0 : slotSize,
            height: slotSetting.slotItemStart ? 0 : slotSize,
            transition,
          }}
        >
          <div
            style={{
              left: -left,
              top: -top,
              width,
              height,
              transform: slotSetting.slotItemImgTransformStart ? `translate3d(-${slotSize}px, -${slotSize}px, 0)` : 'translate3d(0, 0, 0)',
              transition: imgTransition,
            }}
          >
            <Image
              src={images[slotIdx]}
              fill={true}
              alt='slot'
              style={{
                objectFit: "cover",
                objectPosition: "center top"
              }}
            />
          </div>
        </div>
      );
    }
    return elements;
  }

  const slotContent = () => {
    return (
      <div className={styles['c-01-content']}>
        <h3 style={{
          transform: contentTitleSetting.transform,
          opacity: contentTitleSetting.opacity
        }}>{content.title[bgIdx]}</h3>
        <p style={{
          transform: contentTagSetting.transform,
          opacity: contentTagSetting.opacity
        }}>{content.tag[bgIdx]}</p>
        <Link href='/'
          style={{
            transform: contentBtnSetting.transform,
            opacity: contentBtnSetting.opacity
          }}
        >
          See more
          <span className="material-symbols-outlined">
            arrow_right_alt
          </span>
        </Link>
      </div >
    )
  }

  const resetBgAnimation = () => {
    setBgSetting({ opacity: 0.6, transition: false });
  }

  const runBgAnimation = () => {
    setBgSetting({ opacity: 0.15, transition: true });
  }

  const resetSlotAnimation = () => {
    setSlotSetting({
      slotItemStart: true,
      slotItemImgTransformStart: true,
    });
  }

  const runSlotAnimation = () => {
    setSlotSetting({
      slotItemStart: false,
      slotItemImgTransformStart: false,
    });
  }

  const staticSlotAnimation = () => {
    setTimeout(() => runSlotAnimation(), 200);
  }

  const staticBgAnimation = (idx) => {
    setTimeout(() => {
      resetBgAnimation();
      setBgIdx(idx);
      setClearSlot(true);
    }, timer / 2 - 1000);
  }

  const slotContentIn = () => {
    setTimeout(() => {
      setContentTitleSetting({
        ...contentTitleSetting,
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      });
    }, timer / 2 - 950);
    setTimeout(() => {
      setContentTagSetting({
        ...contentTagSetting,
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      });
    }, timer / 2 - 850);
    setTimeout(() => {
      setContentBtnSetting({
        ...contentBtnSetting,
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      });
    }, timer / 2 - 800);
  }

  const slotContentOut = () => {
    setContentTitleSetting({
      ...contentTitleSetting,
      transform: 'translate3d(75px, 0, 0)',
      opacity: '0'
    });
    setTimeout(() => {
      setContentTagSetting({
        ...contentTagSetting,
        transform: 'translate3d(75px, 0, 0)',
        opacity: '0'
      });
    }, 100);
    setTimeout(() => {
      setContentBtnSetting({
        ...contentBtnSetting,
        transform: 'translate3d(75px, 0, 0)',
        opacity: '0'
      });
    }, 150);
  }
  useInterval(() => {
    const slotIndex = (slotIdx + 1 >= images.length) ? 0 : (slotIdx + 1);
    runBgAnimation();
    resetSlotAnimation();
    setSlotIdx(slotIndex);
    setClearSlot(false);
    staticSlotAnimation();
    staticBgAnimation(slotIndex);
    slotContentOut();
    slotContentIn();
  }, timer)

  return (
    <div className={styles['c-01-display']} ref={parentRef}>
      <Image
        className={styles['c-01-static-bg']}
        src={images[bgIdx]}
        fill={true}
        alt='slide'
        style={{
          opacity: bgSetting.opacity,
          transition: bgSetting.transition ? 'opacity 0.6s ease-in-out' : '',
          objectFit: "cover",
          objectPosition: "center top"
        }}
      />
      <div className={styles['c-01-slot-holder']}>{clearSlot ? <></> : slotMaker()}</div>
      <div className='container'>
        <div className={styles['c-01-content-wrapper']}>{slotContent()}</div>
      </div>
    </div>
  )
}

