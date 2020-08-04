import React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '@components/ThemeContext';
import media from '@styles/media';

/* Kudos to Bill Heberer for the toggle button animation. I was stuck here for a
long time before giving up on doing the animation myself and looking for a nice
toggle on Codepen, and yours, my friend... Looks fantastic. */


const ToggleContainer = styled.div `
  display: flex;
  align-items: center;
`
const ToggleIcon = styled.div`
  .iconify {
      color: var(--color-titleHighlights);
      width: 3.2rem;
      height: 3.2rem;
    }
`

const ToggleLabel = styled.label`
  display: block;
  padding-left: 12px;
  ${media.tablet`padding-left: 12px;`};

  .toggle-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.toggle-slot {
  position: relative;
  height: 2.4rem;
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
  transform: translateX(calc((5.3rem - 100%)));
  position: absolute;
  height: 3rem;
  width: 3rem;
  top: -5px;
  left: -2px;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 1em rgb(33, 35, 44);
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 1em white;
  transform: translateX(0px);
}
`

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <ToggleContainer>
      <ToggleIcon>
        <span class="iconify" data-icon="heroicons-outline:light-bulb" data-inline="false"></span>
      </ToggleIcon>

      <ToggleLabel>
        <input 
        className='toggle-checkbox' 
        type='checkbox'
        checked={colorMode === 'dark'}
        onChange={ev => {
              setColorMode(ev.target.checked ? 'dark' : 'light');
            }}
          />{' '}

        <div title="Change between Light/Dark Mode" role="button" className='toggle-slot'>
          <div className='toggle-button'></div>
        </div>
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default DarkToggle;
