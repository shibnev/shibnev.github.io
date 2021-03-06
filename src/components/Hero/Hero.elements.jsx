import styled from 'styled-components';
import {
  rem,
  paddingY,
  textAlign,
  maxWidth,
  gridTemplateAreas,
  justifySelf,
  justifyContent,
  justifyItems,
  gridGap,
  font,
} from '../../style/modal/';
import { Outer, Btn, Container, Avatar } from '../';
import { Desc, Title } from '../../style/helpers/typography';

export const StyledHero = styled(Outer)`
  ${paddingY({ xs: '70px' })};
  display: grid;
  align-items: center;
  height: 100%;
  position: relative;

  ${Container} {
    align-items: center;
    display: grid;
    ${justifyContent({ mob: 'center', xs: 'space-between;' })};
    ${justifyItems({ mob: 'center', xs: 'normal' })};
    ${gridTemplateAreas({
      mob: `'title' 'desc' 'avatar' 'btn'`,
      xs: `'title avatar' 'desc avatar' 'btn avatar'`,
    })};
    ${gridGap('20px 50px')};
    ${textAlign({ mob: 'center', xs: 'left' })};
  }
`;

export const HeroTitle = styled(Title)`
  ${maxWidth('800px')}
  text-shadow: 0 ${rem('4px')} 0 ${({ theme }) => theme.WHITE};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
  grid-area: title;
`;

export const HeroDesc = styled(Desc)`
  grid-area: desc;
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
`;

export const HeroBtn = styled(Btn)`
  grid-area: btn;
  ${justifySelf({ mob: 'center', xs: 'start' })};
  position: relative;
  z-index: ${({ theme }) => theme.Z_INDEX.normal};
`;

export const HeroAvatar = styled(Avatar)`
  grid-area: avatar;
  position: relative;
`;

export const HeroProf = styled.span`
  ${font({
    'font-size': { mob: '48px' },
    'line-hight': { mob: '56px' },
    'font-weight': '900',
    'letter-spacing': ' -1px',
  })};
`;
export const HeroPreTitle = styled.span`
  ${font({
    'font-size': { mob: '28px' },
    'line-hight': { mob: '1' },
    'font-weight': '900',
    'letter-spacing': ' -1px',
  })};
`;
