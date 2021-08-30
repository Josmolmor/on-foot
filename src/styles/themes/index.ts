import light from './default';
import dark from './dark';

const untypedThemes = {
  light,
  dark,
};

export type Theme = typeof light;
export type ThemeKey = keyof typeof untypedThemes;
const themes: { [k in ThemeKey]: Theme } = untypedThemes;

export default themes;
