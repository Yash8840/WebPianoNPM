import { useState } from 'react';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function SelectedScaleDropdown({ handleScaleChange, selectedScaleName}) {
  const scales = ["Chromatic", "Minor", "Minor Pentatonic", "Minor Blues", "Major", "Major Pentatonic", "Mixolodian", "Harmonic Minor", "Dorian", "Major Blues", "Klezmer", "Japanese","South East Asian"];
  return <>
    <label htmlFor="scale"> Scale: <FontAwesomeIcon icon={faMusic} /> </label>
    <select id="scale" value={selectedScaleName} onChange={handleScaleChange}>
      {scales.map((scale, key) => <option value={scale} key={key}>{scale}</option>)}
    </select>
  </>
}
export default SelectedScaleDropdown;