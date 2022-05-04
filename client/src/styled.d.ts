import 'styled-components';
import { theme } from './DefaultTheme';

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string;
      BottomGradient: string;
      TopGradient: string;
      Primary: string;
      Secondary: string;
    };
  }
}
