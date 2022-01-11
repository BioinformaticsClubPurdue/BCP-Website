import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface IconProps {}

const Icon: React.FC<IconProps> = () => (
  <StaticImage src="../images/icon.svg" alt="Club icon" placeholder="blurred" />
);

export default Icon;
