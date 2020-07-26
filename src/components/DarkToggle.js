import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '@components/ThemeContext';
import media from '@styles/media';

/* Kudos to Bill Heberer for the toggle button animation. I was stuck here for a
long time before giving up on doing the animation myself and looking for a nice
toggle on Codepen, and yours, my friend... Looks fantastic. */

const ToggleLabel = styled.label`
  display: block;
  padding-left: 26px;
  ${media.tablet`padding-left: 0;`};

  .toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  position: relative;
  height: 2.5rem;
  width: 5.2rem;
  border: 1px solid var(--color-toggleBorder);
  border-radius: 5rem;
  background-color: white;
  transition: background-color 250ms;
  cursor: pointer;
}
.toggle-slot:hover {
  box-shadow: 0px 0px 35px rgb(55, 65, 81, 0.3);
  transition: box-shadow 250ms;
  
}
.toggle-slot:focus {
  box-shadow: 0px 0px 35px rgb(55, 65, 81, 0.3);
  transition: box-shadow 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translateX(calc((5.2rem - 100%)));
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  top: -1px;
  
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 1em #ffd700;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 1em white;
  transform: translateX(0px);
}

{/* Control the icon size trough the icon classe selection and the icon positioning and 
transition on the wrapper class selection */}
.sun-icon {
  position: absolute;
  height: 18px;
  width: 18px;
  color: #ffbb52;
}

.sun-icon-wrapper {
  position: absolute;
  height: 18px;
  width: 18px;
  opacity: 1;
  transform: translate(0.20em, 0.25rem) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
}

.moon-icon {
  position: absolute;
  height: 16px;
  width: 16px;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 16px;
  width: 16px;
  opacity: 0;
  transform: translate(1.7em, 0.30rem) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
}
`

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
  <ToggleLabel>
    <input 
    className='toggle-checkbox' 
    type='checkbox'
    checked={colorMode === 'dark'}
    onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}


    {/* Working on showing the element outline only when tabbed, but no when selected.*/}
    <div title="Change between Light/Dark Mode" role="button" className='toggle-slot'>
      <div className='sun-icon-wrapper'>
        <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
      </div>
      <div className='toggle-button'></div>
      <div className='moon-icon-wrapper'>
        <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
      </div>
    </div>
  </ToggleLabel>
  );
};

export default DarkToggle;
