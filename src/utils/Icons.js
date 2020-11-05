import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faCircle as fasFaCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope as fasFaEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabFaGithub } from '@fortawesome/free-brands-svg-icons';

export const ArrowRight = <FontAwesomeIcon icon={faAngleRight} />;
export const CircleSolid = <FontAwesomeIcon icon={fasFaCircle} />;
export const CircleOpen = <FontAwesomeIcon icon={farFaCircle} />;
export const Email = <FontAwesomeIcon icon={fasFaEnvelope} />;
export const Github = <FontAwesomeIcon icon={fabFaGithub} />;