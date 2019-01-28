/* eslint-disable react/destructuring-assignment */
import React from 'react';

import '../css/Home.css';
import PhotographerVideo from './PhotographerVideo';
import PhotographerMap from './PhotographerMap';

const translatedPoints = {
  bel: {
    dateOfBirth: 'Дата нараджэння: ',
    placeOfBirth: 'Месца нараджэння: ',
    dateOfDeath: 'Дата смерці: ',
    almaMater: 'Альма-матар: ',
    typeOfActivity: 'Род дзейнасці: ',
    biography: 'Біяграфія: ',
  },
  eng: {
    dateOfBirth: 'Born: ',
    placeOfBirth: 'Place of Birth: ',
    dateOfDeath: 'Died: ',
    almaMater: 'Alma-mater: ',
    typeOfActivity: 'Occupation: ',
    biography: 'Biography: ',
  },
  rus: {
    dateOfBirth: 'Дата рождения: ',
    placeOfBirth: 'Место рождения: ',
    dateOfDeath: 'Дата смерти: ',
    almaMater: 'Альма-матер: ',
    typeOfActivity: 'Род деятельности: ',
    biography: 'Биография: ',
  },
};

const coordinates =  {
  "lat": 54.7818,
  "lng": 32.0401
}

function Photographer(props) {
  return (
    <React.Fragment>
      <h2 className='ph-name'>{ props.info.name }</h2>
      <img className='ph-img' src={props.media.photo} alt='Foto Photographer' />
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].dateOfBirth }
        </span>
        {props.info.dateOfBirth}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].placeOfBirth }
        </span>
        {props.info.placeOfBirth}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].dateOfDeath }
        </span>
        {props.info.dateOfDeath}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].almaMater }
        </span>
        {props.info.almaMater}
      </p>
      <p>
        <span className='ph-info'>
          { translatedPoints[props.language].typeOfActivity }
        </span>
        {props.info.typeOfActivity}
      </p>
      <h2 className='ph-info'>{ translatedPoints[props.language].biography }</h2>
      <p>{props.info.biography}</p>
      {!props.day && <PhotographerVideo video={props.media.video} />}
      <PhotographerMap city='Minsk' coordinates={coordinates} />
    </React.Fragment>
  );
}

export default Photographer;
