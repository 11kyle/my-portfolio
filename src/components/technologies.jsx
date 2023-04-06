import SectionHeading from "./section-heading";
import { useElementOnScreen } from "../hooks/useElementOnScreen"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Technologies() {
  const [containerRef, isVisible] = useElementOnScreen({
    rootMargin: "-100px 0px",
    threshold: 0.0
  })
  
  return (
    <div 
      id="technologies"
      ref={containerRef} 
      className={classNames(
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3/4",
        "transition duration-700 pt-10 pb-20"
      )}
    >
      <div className="">
        <SectionHeading 
          title="Technologies"
        />
        <div className="grid grid-cols-5 items-center gap-x-8 gap-y-10 sm:grid-cols-7 sm:gap-x-10 md:grid-cols-8">
          <div>
            {/* Babel */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M90.18 50.5v.15h.31a1.18 1.18 0 01.09-.43v-.27c-.13 0-.26.21-.38.58zm-2.94-7.08v-.27h-.44v.27h.44zm-8.54 16a14.07 14.07 0 00-2.35-3c0-.32.5-.79 1.59-1.42L81 52.34A7.79 7.79 0 0082.28 48v-.46c-.12-1.38-1.12-2.49-3-3.34q-1.68-1.13-6-1.25a35.58 35.58 0 00-9.41 2.58 38.64 38.64 0 01-3.63 2.29v.23a.87.87 0 00.36-.16.21.21 0 01.26.21L61 48h.11v.1a12.79 12.79 0 01-2.52 2l.13.24h-.11l-.28-.1c0 .08-.11.14-.34.16v.1l.27.34a1 1 0 01-.39-.09 1.88 1.88 0 00-1.16.63l.16-.69a56.27 56.27 0 001.16-6.5L58 44a4.73 4.73 0 01-1.09-1 3.71 3.71 0 000-.49v-.1h-.11q-1.85 2.77-7.11 9.45-4 4.75-4.14 5.28c-1.09 1.13-1.61 1.81-1.56 2-.29.19-.41.37-.36.58a.12.12 0 01-.16-.09 3.17 3.17 0 01-2.08 1.45l-1 .22a.23.23 0 00-.19.28v.12l.36-.08v.1l-.82.32-1.45.34h-.76c-.11.11.61 0 .33.06l-1 .22c-.58.13-.89.08-1-.15h-.11a.54.54 0 010 .24l-.06-.23-.76.18Q35 62.29 32 59c0-.43.67-1.05 2.12-1.86l4.08-3.59q1.37-1.76 1.63-5.65l-.06-.61c-.16-1.83-1.48-3.3-4-4.44-1.47-1-4.12-1.53-7.94-1.61a47.82 47.82 0 00-12.39 3.36 47.39 47.39 0 01-4.78 3v.32a1.25 1.25 0 00.48-.19.27.27 0 01.34.26l.32-.18h.2V48a18.64 18.64 0 01-3.34 2.6l.18.28H8.7l-.34-.12c0 .09-.15.16-.48.19v.17l.37.41a1.36 1.36 0 01-.5-.1A3.17 3.17 0 005.63 53l.18.28a4.47 4.47 0 011.06-.85v.46a1.53 1.53 0 00-.48.19l.38.58a12.63 12.63 0 012.43-2c.44.11.67.25.68.4h.34a26 26 0 017.14-3.86v.32q-.66 1-.89 1a1 1 0 00.23.59q.06.6-3.21 8.1Q6.17 75.5 1.13 83.84a1.08 1.08 0 00.2.45 4.17 4.17 0 001.57-.6h.18v.32h.31l.32-.18c0 .09.11.14.33.12v.32a2.83 2.83 0 01-.52 1.42A7.37 7.37 0 002.48 88v.15h.31a19.55 19.55 0 003.06-4.41 48.85 48.85 0 009-3.38 8.39 8.39 0 004.74-1.63v-.17l-.78.23h-.18v-.17a7.07 7.07 0 003.17-1q4.46-3.44 6.74-4.87 4.68-3.44 6.08-6.7l.52-.12a6.81 6.81 0 00.75 0c0-.08 0-.13.1-.15.7-.07.36 0 .81-.06l1.17-.27h.2l-.09.06a1.14 1.14 0 00.43 0l.08.34-5.34 8.49L32 75.71l-.58 1.94h.11l.58-.24-.19.75.06.22.16.2c-.07 0-.1.07-.08.15v.12l.24-.06q.53-.46.45-.84a2.21 2.21 0 00.76.06v.12c-.23.06-.35.24-.37.56v.12h.13c1.94-2.12 6.69-9.35 10.5-14.27q-.18-.8 6-2.22h.13q.22 1-1 4.67a12.58 12.58 0 00-.71 2.44 18.69 18.69 0 00-.92 3.22l-1.37 4.69A43.46 43.46 0 0043.74 85a1 1 0 01.4 0l.21-.18a.12.12 0 00.16.09l-.08-.34h.63c.19 0 .34-.28.48-.71 0-.64.1-1 .39-1.06a10.29 10.29 0 01.72-2.32 10.29 10.29 0 01.81-2.6c.55-2 1-3 1.21-3.06l.06.24-.4 1a50.68 50.68 0 01-2.12 7.35l.21.89h.13q2.6-5.59 7.48-22.14A2.89 2.89 0 0155.4 60l-.19-.2v-.1a1.27 1.27 0 00.78-.44c0-.08-.34-.21-1-.37l1.62-7a2.41 2.41 0 01.62-.48v.35a.87.87 0 00-.36.16l.31.44A10 10 0 0159 50.83c.34.09.5.21.52.32h.24a19.75 19.75 0 015.43-2.91v.23q-.49.74-.67.75a1 1 0 00.15.45 42.49 42.49 0 01-2.41 6.16 167.41 167.41 0 01-9.44 19.55.87.87 0 00.17.34 3 3 0 001.18-.46h.11v.23h.26l.23-.12q0 .1.25.08v.25a2.12 2.12 0 01-.4 1.06 5.31 5.31 0 00-.85 1.82v.12h.24a14.72 14.72 0 002.32-3.35 37.55 37.55 0 006.8-2.56 6.39 6.39 0 003.62-1.24v-.12l-.61.18h-.13v-.12a5.36 5.36 0 002.4-.77c2.25-1.73 4-3 5.12-3.7 3.6-2.62 5.27-5.13 5.07-7.55zm-.62.16l.08.94c-.11.23-.23.35-.34.36l-.14-1.6c.26.09.39.19.4.3zM7.52 52h-.16v-.29l.64-.05v.15a1.24 1.24 0 00-.47.19zM4.38 83.4a2 2 0 00-1-.21v-.46c0-.18.08-.3.31-.34s.33.13.34.43a6.78 6.78 0 01.89-1l.34.14c-.11.93-.4 1.41-.86 1.44zm33.55-35.1c-.16 0-.48-.48-.93-1.45v-.29c.3 0 .61.46.93 1.45v.29zm-.45-3.48l-.13.31-4.56-1.9q4.56.15 4.69 1.59zM18.25 61.35l-.64.06v-.29l.64-.06v.29zm-.52-9.92h.16v.46c-.15 0-.34.23-.59.66v-.32c.29-.34.44-.61.42-.79zm-1.35 3.19l.06.61h-.16l-.06-.61zm-.71 1.14h.31c0 .5-.17.77-.42.79h-.16a1.46 1.46 0 00.27-.77zm-.53 1.58h.18v.15l-.29.48h-.31v-.15a.4.4 0 00.42-.49zm-.52 1.43l-.09.76h-.16l-.07-.75h.32zM9.38 73.62c-.21 1-.43 1.57-.66 1.59v-.15a1.67 1.67 0 01.67-1.44zm-1 2.08v.15a.27.27 0 01-.28.34V76q0-.27.28-.34zM8.15 80h.48v.17a1.25 1.25 0 00-.48.19h-.31c0-.16.08-.28.28-.34zm13.79-4.26a25.56 25.56 0 00-4.8 2.73q-4.42 1.53-4.38 1.92a48 48 0 00-5.17 2.27 1.86 1.86 0 01-.85-.22 1.37 1.37 0 01.71-1.3 2.75 2.75 0 011.31.21 12.78 12.78 0 012.53-.83v-.32l-1 .08A13.17 13.17 0 0113.1 79h.48v.15c-.83.07-1.29.32-1.39.75 0 .2.13.28.34.26.62-.39.93-.62.92-.69q1.77-.34 9.81-5.13v.29c0 .14-.45.53-1.37 1.2zm-8.22 2.7a3.17 3.17 0 002-.93c.22 0 .34.07.35.26a7.17 7.17 0 00-2.19 1h-.16v-.31zM27 68.27l-4.11 3.26a40.68 40.68 0 01-4.94 3q-7.3 4-9.07 4.17H8.7q.22-.82 6.5-13.31a35.47 35.47 0 008.71-2.58l1-.08a5.59 5.59 0 014.49 1.15l.06.61c-.74 2.13-1.56 3.38-2.44 3.75zm-8-4.52l.66-.06v.15l-.66.06v-.15zm9.29-1.57h.48c.45.21.68.4.7.57v.15a1.36 1.36 0 01-1.19-.67zm1.31-7.48a19 19 0 01-3.6 2.61c-.63.06-3 1-7.07 2.76a1.29 1.29 0 00-.63-.07v-.29a3.81 3.81 0 01.79-2.22c.32-1.68.66-2.64 1-2.87l3.4-7.65q-.06-.71 2.18-1.09h.48v.44c1.46-.22 2.38-.35 2.73-.38 2.7-.23 4.11.32 4.22 1.63h.31l-.07-.77h.34A2.12 2.12 0 0135 48.25a2.48 2.48 0 01-.69 1.59c-.21 0-.33-.13-.34-.43h-.34l-.07.93q-2.05 3.07-3 3.16c-.56.77-.9 1.16-1 1.16zm2.09 5.36a1.2 1.2 0 00-.67-.26v-.46h.31l.68.4a.27.27 0 01-.28.34zm2.16 2.56c.3.12.48.25.51.37h-.24l-.22.18-.06-.62zM34 63.9v-.12l.39-.09v.12l-.39.09zm.94 1.1c.4-.07.6-.09 1.34-.26v.12l-1.42.33a1.87 1.87 0 000-.19zm1.38.59a6.06 6.06 0 00-1.42.2v-.12l1.19-.38.57-.13.06.22c-.26.06-.07.06-.37.21zm1.26-.3a.26.26 0 01-.32-.19l.36-.08a.22.22 0 01.3.19l-.34.08zM41 61.57v-.12l.59-.14.06.22h-.62zm3.64 22.34a.92.92 0 000-.37h.13a.21.21 0 01.29.17v.12l-.48.11zm2.55-21.38h-.26a7.38 7.38 0 01-1.06.35l-.24.06a.24.24 0 01-.31-.17l1.68-.43.56-.26.19.21a1.25 1.25 0 00-.58.24zm1.31-.42v-.12a.71.71 0 00.32-.21l1.18-.27v.12a9.36 9.36 0 00-1.53.48zm.19-2.45a1 1 0 00-.34.21c0-.08-.19-.08-.5 0-.06-.23.84-.56 2.69-1l.26-.06.06.22c-1.3.38-2 .6-2.17.62zm3.26-3.52c-.13 1.48-.65 2.32-1.57 2.53v-.12l-.82.32-.36.08a.91.91 0 01-.5 0l-.07-.33a49.32 49.32 0 013.56-4.91h.28a5.09 5.09 0 01-.48 2.39zm5.77-4.94h-.12v-.23h.48v.12a1.57 1.57 0 00-.36.15zm-2.38 23.86a1.49 1.49 0 00-.75-.17v-.35q0-.18.22-.25c.16 0 .25.09.27.34a4.09 4.09 0 01.67-.77L56 74c-.09.71-.31 1.08-.64 1.11zm25.47-26.64c-.12 0-.35-.36-.72-1.12v-.23c.23 0 .48.34.72 1.09v.26zm-.34-2.66l-.11.24-3.45-1.44c2.3.07 3.49.48 3.56 1.2zM65.86 58.3h-.48v-.23h.48v.23zm-.4-7.54h.13v.35q-.18 0-.45.5v-.23a1.08 1.08 0 00.31-.62zm-1 2.42v.46h-.13v-.46zm-.55.87h.24q0 .59-.31.61h-.14a1.26 1.26 0 00.2-.61zm-.39 1.19h.11v.12l-.21.37h-.24v-.12c.25 0 .36-.15.34-.38zm-.39 1.08l-.08.6h-.11v-.59h.24zm-4 11.3q-.24 1.17-.5 1.2v-.1a1.33 1.33 0 01.51-1.1zm-.73 1.58v.1a.21.21 0 01-.22.27v-.12q0-.18.22-.25zm-.21 3.28h.37v.12a1.07 1.07 0 00-.36.14h-.24q0-.2.22-.25zm10.46-3.23A21.75 21.75 0 0065 71.31c-2.24.78-3.34 1.27-3.33 1.46a35.33 35.33 0 00-3.9 1.72 1.45 1.45 0 01-.64-.18 1 1 0 01.54-1 2.1 2.1 0 011 .15 10.83 10.83 0 011.93-.62v-.23l-.75.07a10 10 0 012.14-1h.37v.1c-.63.06-1 .24-1.06.58a.21.21 0 00.26.21c.47-.31.69-.48.69-.54q1.34-.24 7.44-3.9v.23c0 .09-.34.39-1 .9zm-6.24 2A2.5 2.5 0 0064 70.6c.16 0 .25.06.26.21a5.92 5.92 0 00-1.66.71h-.13v-.22zm10.08-7.74l-3.1 2.5a30.16 30.16 0 01-3.77 2.3q-5.53 3-6.89 3.16h-.13q.17-.63 4.95-10.1a27.26 27.26 0 006.61-2l.75-.07a4.2 4.2 0 013.4.89v.46c-.57 1.6-1.18 2.54-1.85 2.83zm-6.09-3.38h.48v.12h-.48v-.12zm7.05-1.2h.37c.34.17.52.32.53.44v.1a1 1 0 01-.91-.51zm1-5.67a14.26 14.26 0 01-2.66 2 35.66 35.66 0 00-5.37 2.08 1.23 1.23 0 00-.49-.07v-.23a2.92 2.92 0 01.59-1.69c.24-1.29.51-2 .79-2.17l2.6-5.81c0-.34.52-.62 1.64-.84h.37v.35q1.65-.27 2.07-.31c2-.18 3.12.23 3.21 1.24h.24v-.56h.24a1.55 1.55 0 011 1.18 1.93 1.93 0 01-.49 1.22c-.16 0-.25-.09-.27-.34h-.24l-.07.7c-1 1.57-1.79 2.39-2.26 2.42-.42.57-.68.86-.8.87zm1.09 3.88v-.35h.24l.52.32a.22.22 0 01-.22.25 1 1 0 00-.51-.2zM32.15 79.76l-.24.06-.21.18a.21.21 0 00.29.17c.16 0 .22-.13.19-.28v-.12zm-.92-1.84v.12c.16 0 .22-.13.19-.28v-.12a.22.22 0 00-.19.28zm6.6-12.39l.18-.11h-.09a.11.11 0 00-.08.13zm0-3.21l.28-.07L38 62l-.28.07.06.24zm65.85 9.41l-.63-.07-.11.24v.1l3.77-.32v-.23l-3 .26zm3.45-.29v.23-.23zm15.83-2.07v.23l.41.07v-.23l-.41-.07zm-.58 0a15.72 15.72 0 01-3.78.57v.23h.4l.31-.12c2.8-.31 3.13-.2 3.1-.51v-.11zm-17-4.12l-.25-.08a4.2 4.2 0 00-.3 1v.1c.2 0 .37-.34.54-1zm-3.41-1.84v-.12h-.13l-.23.15.13.22c.18 0 .26-.1.24-.26zm7.41 7.66v-.23h-.07v.23zm15.37-3.47h.18c.1 0 .15-.09.14-.24l-.1-.22a3 3 0 00-1.46.37v-.12l-.77.07c0-.23-.08-.35-.19-.34h-.4c-.47 0-.69 0-.92.2 0-.08 0-.12-.08-.12h-.45l-.26.15c0-.08 0-.12-.08-.12l-.16.14v-.12h-.77v.23l.32.08h.3a.54.54 0 00.34.07l.26-.13v.1a19.08 19.08 0 01-2.46.47.43.43 0 00-.25-.1.2.2 0 01-.19-.21l.52-.07a3.19 3.19 0 00.35.09c.42-.21.44-.29.66-.31v-.23a15.19 15.19 0 01-2.66.25h-.08v-.23c2.31-.28 1.54-.12 2.33-.34 0 .08 0 .12.08.12a.54.54 0 01.32-.16h.16a8.46 8.46 0 002.57-.28v.1l.26-.13h.24c0-.23.34-.27.46-.28v-.25c-2.81.57-3.55.41-4.33.63v-.1a3.41 3.41 0 01-1 .08.49.49 0 00-.23.15c0-.08 0-.12-.09-.12l-2.39.39c0-.07 0-.1-.09-.09a12.17 12.17 0 01-2.56.46.78.78 0 00-.31.13c0-.07 0-.1-.13-.09l-1 .08-.68.17c0-.07 0-.1-.13-.09a5.41 5.41 0 01-1 .19c-.17 0 .08 0 0-.1l-.21.12h-1.16c-1.8.22-1.6.25-1.8.26h-.67a.09.09 0 01-.1.11c-.76-.1-1.16-.22-1.16-.36q.15-1.09.53-1.12h.13l-.11.24h.13c.24-.13.35-.25.34-.36v-.25h-.24v-.23a.84.84 0 01.07-.47l.55-.89v.23h.26v-.23l-.15-.21a1 1 0 01.47-.27v-.12h-.35v-.35a10 10 0 001-2.57l.25.1c.16 0 .23-.1.22-.27h-.24v-.1a.89.89 0 01.09-.49 1.56 1.56 0 00.52-1.22c.07 0 .11 0 .12.11.33-.19.58-.68.76-1.5a46.87 46.87 0 002.47-6.25c2.05-5.52 2-6.1 2.25-7.41h-.24a.84.84 0 01-.09.48 1 1 0 00-.39-.09v-.1a2.83 2.83 0 01.61-1.71h.11l.21.8h.24a7.3 7.3 0 01.19-1c0-.12-.1-.2-.29-.21l-.23.15v-1.3h-.12a.91.91 0 01-.32-.51l-1.33.13a1.22 1.22 0 00-.15-.41c0-.12.29-.24.9-.36l.27.1.25-.15c0 .08.06.12.15.11l.25-.15c0 .08.06.12.15.11h.12v-.27h-1.46l-.25.17v-.15q-9.38.77-10.65.89H99.6c0 .1-.08.16-.27.18l-.27-.12L98 41a6.06 6.06 0 01-1.08 0 .93.93 0 01-.51.2l2.65-.2a1.22 1.22 0 01-.65.21.9.9 0 01-.53-.09 15.15 15.15 0 01-2 .47l-.27-.1-4.36.67a1.09 1.09 0 00-.59-.09 7.24 7.24 0 00-1.16.25l-2.11.88.16.26a1.17 1.17 0 00.43-.17l.75.07-.09.7a1.88 1.88 0 00-1.2 1.34c-1 .46-1.55.78-1.55 1v.12h.16l.28-.15.33.39v.54q0 .25-5.21 11c-3 6.9-4.6 10.67-4.75 11.35-1 .29-1.63.71-1.81 1.27 0 .18.33.3.92.34v.27l-.27.45v.54q0 .42 2.26.64c0-.09 0-.15.14-.16a8.16 8.16 0 01-.28 2H78a3.47 3.47 0 00.88-1.73H79c.15 0 .31.16.49.52q-.28.11-2 4.45l.16.26h.16q2.05-5.2 2.58-5.75 2.7-.24 9.33-1l.28-.17a.13.13 0 00.17.13h.29l.28-.17a.13.13 0 00.17.13l3.35-.29c.89-.07 1.3-.34 1.27-.8 0-.12.51-.26 1.57-.41a1.28 1.28 0 01.46.08c0-.08.52-.17 1.58-.26 0-.56.2-.86.52-.89v-.27a4.63 4.63 0 00-1 .23 6.26 6.26 0 01-1.33-.16 1.23 1.23 0 01-.43.17L94.51 69l-.28.15q0-.13-.17-.11h-.13l-.3.15c0-.08-.25-.15-.74-.21l-.3.18h-.58v-.15q4.5-.49 4.44-1.22a.26.26 0 01.32.27l.88-.22v-.27l-7.18.2c0 .09 0 .15-.14.16l-.88-.07a1.06 1.06 0 00-.56.2l-.35-.06a10 10 0 00-2 .33 12.73 12.73 0 00-2 0l-1.61.14-.75-.08c0-.48.89-2.81 2.79-7a6.11 6.11 0 011.54-2.64 1.08 1.08 0 01.46.11l1.03-.39.59.09a13.45 13.45 0 003.45-.85 1.62 1.62 0 01.75.07l.88-.21 2.61-.22a17.3 17.3 0 003.62-.74v-.27c-.48 0-.74 0-.75-.23 0-.36-.38-.51-1.06-.46v-.27l.72-.21 1.88-.16v-.27h-1.16v-.29l.73-.07c.2 0 .28-.11.26-.3-1 0-1.47 0-1.48-.15q-10.23.5-10.26.19a1.17 1.17 0 00-.43.19l-.29-.31q2.71-5.76 3.18-5.8a1.69 1.69 0 01-.22.72V49h.29c.72-1.71 1.32-2.6 1.83-2.64 2.14-.19-.3-.33 4.29-1a.89.89 0 00.41.11q2.7-.55 7.52-1.14v-.27l-1.71.16v-.27a.93.93 0 00.51-.2v.15a1 1 0 00.39-.19 1.23 1.23 0 01.68.08 9.92 9.92 0 011.44-.29l1.07-.1c.26-.17.38-.32.37-.46v-.12a3.38 3.38 0 01-.94-.06.27.27 0 01.24-.3l2-.19.91-.23c0 .1.06.14.13.14a1 1 0 00.39-.19h.15a7.45 7.45 0 00-.4 1.09h-.26a1.14 1.14 0 00-.15-.48H110c-2.42 6.75-3.5 9.89-5.74 15.07-.41 1.32-.75 2.06-1.05 2.22a.21.21 0 00.26.21 3.25 3.25 0 01-.46 1.93c-1 3-1.72 4.61-2.08 4.91l.23 1.41a.22.22 0 01-.22.25h-.24c0-.39-.18-.58-.43-.55h-.13a5.54 5.54 0 00-.72 1.72h.24a.81.81 0 00.45-.75h.48l.28.1a1.49 1.49 0 00-.31.85l.13.22-.32.75v.12a1.51 1.51 0 01.91.26A1.63 1.63 0 00102 71h3.12l.9-.31a20.9 20.9 0 002.23-.07h.39l.21-.14v.12a6.11 6.11 0 011.84.07v.12h-.55v.23a.79.79 0 00.44-.17c.14 0 .22.07.23.23a3.28 3.28 0 00-.75.17l-.24-.08c-.38.1-.3.13-.56.15l-.38-.07a.09.09 0 01-.09.11.2.2 0 00.23.21h.39l2-.18.77-.17c0 .07 0 .1.1.09l.37-.14.7-.06c.54 0 .53-.08 1.71-.27 0-.07 0-.1.07-.11v.1a17.2 17.2 0 002.34-.45v.06c.48-.11.21-.08.34-.18 0 .08 0 .12.08.12h.34v-.25h-.84a3.59 3.59 0 01-.76.06l-1.71.09v-.12l1-.13h.34l.2-.14V70c1.34-.11 1.82.22 8-1.1.34 0 .31-.31.52-.89a.58.58 0 01-.33-.07 9.7 9.7 0 01-1.77.26c-.08 0-.15-.07-.18-.21v-.1h1a2.4 2.4 0 001-.34c0 .08-.2.13-.08.12zm-45.88.74h-.44a8.26 8.26 0 01.7-2h.29a7.62 7.62 0 01-.55 2zm.53-2.12v-.12c0-.15.08-.25.29-.3v.2c0 .18-.08.28-.29.3zm5.82 4.5v.12l-.73.07v-.12l.73-.07zm-.88-.07c0 .15-.21.32-.7.48l-.89-.07h-.29v-.27l1.91-.18zm5.89-27.11h-.44v-.15c0-.15.07-.25.26-.3h.16l.3.12a.26.26 0 01-.27.3zm6.66-1.3H97v.27h-.4a.27.27 0 01.24-.3zm-1.68.59l-.66-.07v-.12a7.15 7.15 0 001.69-.32c0 .1.1.14.27.12v.27h-.26a.9.9 0 01-.53-.09 1.14 1.14 0 01-.51.19zm.79 2.46v-.12l1.07-.1v.12l-1.07.1zm1.15-.93v-.16h.52v.15h-.52zm.12-1.83h-.14l.12-.29 1.19-.11v.15a7.2 7.2 0 00-1.18.24zm.61 2.57v-.27h.52q.27 0 .28.25l-.78.07zm3.16-4.3l-.67.19h-.12A6.85 6.85 0 0199 41c.87-.06 1.7-.12 2-.17zm-.72 3v.12l-.92.08v-.12l.92-.08zm1.51.72c0-.11-.19-.19-.55-.22l-.92.26h-.71c-.16-.11-.24-.19-.25-.24h.82l1.84-.3h.94v.15a5.28 5.28 0 00-1.18.24zm9.49-2.52h.21a3.57 3.57 0 011.11-.75 6.55 6.55 0 01-1.57 3.27l-.52-.32a17 17 0 00.77-2.22zm-1.6 2.75h.13c-.18.34-.34.51-.47.52v-.35a.79.79 0 00.36-.16zm-1 2.47a3.5 3.5 0 01.72-1.72v.12c-.13.93-.34 1.43-.61 1.46v.59a1.32 1.32 0 00-.32.75h-.13l-.07-.81c.15 0 .27-.15.35-.39zm-.4 1.34a3.41 3.41 0 01-.27 1h-.13v-.35c.18-.41.33-.62.43-.62zm-7.52 21.82v-.1h.24v.35c-.13 0-.22-.07-.26-.23zm10.74.28c0-.08 0-.12-.13-.11l-.61.06v-.12h.06l1.43-.12v.12a1.26 1.26 0 00-.75.18zm-.72-.3c.06 0 0 .06 0 .07s-.07 0 0-.07zm.07-1.68l-.8.07v-.12l.73-.07.63-.16c0 .07 0 .1.13.09.75-.13.68-.17 1-.2.12 0 .2.07.21.21l-1.93.17zm2.8-.24a3.19 3.19 0 00-.79-.06v-.1l.72-.07v.1c-.07 0 .2 0 .07.12zm.06-.13v-.1h.39v.1h-.39zm.87-.07v-.1a.68.68 0 00.28-.15.28.28 0 01.32.26zm1.11-.14V68h.48v.12h-.48zm.66-.06c0-.14 0-.22.17-.24l.16.21a.09.09 0 01.07-.11l.12.22-.52-.07zm9.14-1.04zm.17-.12c.07 0 .11-.09-.07-.12s.09.12-.09.13V67l.1-.07-.1.08-.2.25.39-.14v-.23zm.68.53h-.07v.23h.55c0-.15-.37-.2-.49-.2z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Bootstrap */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z" fill="#000000"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Chrome */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <circle fill="#000000" cx="63.624" cy="64.474" r="22.634"></circle><path fill="#000000" d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748C38.015 48.48 48 37.07 64 37zm56.126 4H78.294c7.403 6 12.299 13.884 12.299 23.369 0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022 33.609 0 60.855-27.746 60.855-61.355.001-8-1.546-15.134-4.352-23.134zM63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789L13.07 30.585C6.565 40.271 2.767 51.93 2.767 64.474c0 30.632 22.634 55.972 52.089 60.224l20.996-36.179a26.853 26.853 0 01-12.228 2.926z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* CSS3 */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Figma */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Git */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M124.742 58.378L69.625 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.685 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314a9.66 9.66 0 012.293 9.993L87.42 55.529c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.578 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11V47.333c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576L40.983 20.333 3.229 58.123c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Github */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <g fill="#000000"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* GitLab */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Graphql */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <g fill="#000000"><path d="M18.39 96.852l-4.6-2.657L65.04 5.434l4.597 2.656zm0 0"></path><path d="M12.734 87.105H115.23v5.31H12.734zm0 0"></path><path d="M66.031 119.688L14.766 90.09l2.656-4.602 51.266 29.602zm0 0M110.566 42.543L59.301 12.941l2.656-4.597 51.266 29.597zm0 0"></path><path d="M17.434 42.523l-2.657-4.601 51.27-29.598 2.656 4.598zm0 0"></path><path d="M109.621 96.852L58.375 8.09l4.598-2.656 51.25 88.761zm0 0M16.8 34.398h5.313v59.204h-5.312zm0 0"></path><path d="M105.887 34.398h5.312v59.204h-5.312zm0 0"></path><path d="M65.129 117.441l-2.32-4.02 44.586-25.745 2.32 4.02zm0 0"></path><path d="M118.238 95.328c-3.07 5.344-9.918 7.168-15.261 4.098-5.344-3.074-7.168-9.922-4.098-15.266 3.074-5.344 9.922-7.168 15.266-4.097 5.375 3.105 7.199 9.921 4.093 15.265M29.09 43.84c-3.074 5.344-9.922 7.168-15.266 4.097-5.344-3.074-7.168-9.921-4.097-15.265 3.074-5.344 9.921-7.168 15.265-4.098 5.344 3.106 7.168 9.922 4.098 15.266M9.762 95.328c-3.075-5.344-1.25-12.16 4.093-15.266 5.344-3.07 12.16-1.246 15.266 4.098 3.07 5.344 1.246 12.16-4.098 15.266-5.375 3.07-12.191 1.246-15.261-4.098M98.91 43.84c-3.07-5.344-1.246-12.16 4.098-15.266 5.344-3.07 12.16-1.246 15.265 4.098 3.07 5.344 1.247 12.16-4.097 15.266-5.344 3.07-12.192 1.246-15.266-4.098M64 126.656a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 104.32a11.158 11.158 0 0111.168 11.168c0 6.145-4.992 11.168-11.168 11.168M64 23.68a11.158 11.158 0 01-11.168-11.168A11.158 11.158 0 0164 1.344a11.158 11.158 0 0111.168 11.168A11.158 11.158 0 0164 23.68"></path></g>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* HTML5 */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* JavaScript */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* MongoDB */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" fill="#000000" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Next.js */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Node.js */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* NPM */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Nuxt */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M39.267 108.97l-.284-.567c-.567-1.135-.567-2.27-.283-3.689H8.059l45.395-80.576 19.01 34.33 6.241-4.54-19.01-34.33c-.283-.567-2.553-3.971-6.241-3.971-1.703 0-4.256.567-6.242 4.256L1.25 101.31c-.284.85-2.27 4.54-.568 7.66 1.135 1.702 2.837 3.405 6.81 3.405h38.586c-3.973 0-5.959-1.703-6.81-3.405zm87.385-7.377l-36.883-66.39c-.567-.568-2.554-4.257-6.242-4.257-1.702 0-4.256.852-6.242 4.256l-4.823 7.944v15.321l11.065-19.01 36.6 65.256h-13.903a6.526 6.526 0 01-.567 3.973l-.284.283c-1.702 3.121-5.958 3.405-6.526 3.405h21.563c.851 0 4.823-.284 6.81-3.405.85-1.418 1.418-3.972-.568-7.376zm-20.144 7.377v-.284l.284-.567c.283-1.135.567-2.27.283-3.405l-1.134-3.404L77 50.808l-4.255-7.66h-.284l-4.256 7.66-28.939 50.502-1.135 3.404a6.81 6.81 0 00.568 4.256c1.135 1.702 2.837 3.405 6.81 3.405h53.906c.851 0 5.107-.284 7.093-3.405zM72.462 58.468l26.386 46.246H46.076z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Svelte */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M110.293 16.914C98.586-.086 75.668-5 58.02 5.707l-29.856 18.98a33.94 33.94 0 00-15.418 22.938 35.543 35.543 0 003.566 23.102 33.01 33.01 0 00-5.066 12.793 36.517 36.517 0 006.191 27.52c11.727 16.96 34.583 21.897 52.27 11.312l29.879-19a34.025 34.025 0 0015.355-22.938 35.44 35.44 0 00-3.586-23.02c7.938-12.456 7.52-28.48-1.062-40.48zm-55.254 95.773a23.645 23.645 0 01-25.394-9.433c-3.461-4.793-4.73-10.711-3.73-16.586l.585-2.832.54-1.75 1.605 1.062c3.52 2.668 7.46 4.582 11.668 5.875l1.082.375-.122 1.067c-.105 1.48.332 3.144 1.188 4.414 1.75 2.52 4.793 3.73 7.727 2.937.644-.207 1.273-.418 1.812-.754l29.754-18.976c1.5-.961 2.457-2.398 2.832-4.106.328-1.773-.106-3.585-1.066-5.02-1.774-2.46-4.793-3.565-7.727-2.831-.645.226-1.332.48-1.879.812l-11.25 7.145c-10.644 6.328-24.394 3.355-31.46-6.832a21.854 21.854 0 01-3.75-16.586 20.643 20.643 0 019.456-13.875l29.692-18.98c1.875-1.168 3.894-2.02 6.082-2.668 9.605-2.5 19.726 1.27 25.394 9.394a22.027 22.027 0 013.043 19.398l-.543 1.77-1.539-1.062a39.399 39.399 0 00-11.727-5.875l-1.066-.313.106-1.066c.105-1.563-.332-3.207-1.188-4.48-1.754-2.52-4.793-3.583-7.727-2.833-.644.211-1.273.418-1.812.754L45.812 49.977c-1.5 1-2.46 2.394-2.773 4.144-.312 1.707.106 3.582 1.066 4.957 1.708 2.524 4.81 3.586 7.688 2.832.687-.207 1.332-.414 1.855-.75l11.375-7.254c1.856-1.226 3.938-2.12 6.067-2.707 9.668-2.52 19.75 1.274 25.394 9.438 3.461 4.793 4.793 10.707 3.832 16.52a20.487 20.487 0 01-9.332 13.874L61.23 109.97a25.82 25.82 0 01-6.187 2.707zm0 0"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Tailwind */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#000000"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* TypeScript */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* React */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <g fill="#000000"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* VSCode */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
          <div>
            {/* Vue */}
            <svg viewBox="0 0 128 128" aria-hidden="true">
              <path fill="#000000" d="M0 8.934l49.854.158 14.3 24.415 14.3-24.415 49.548-.158-63.835 110.134zm126.987.637l-24.37.021-38.473 66.053L25.692 9.592l-24.75-.02 63.212 107.89z"></path>
            </svg>
            <span className="sr-only">Github</span>
          </div>
        </div>
      </div>
    </div>
  )
}
