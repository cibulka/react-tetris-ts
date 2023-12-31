import { useTetrisContext } from '@/context/Context.utils';
import { TetrisTheme } from '@/types/public';
import { useBackgroundDark, useBackgroundLight, useGetColor } from '@/utils/colors';

export function CSSVars() {
  const { state } = useTetrisContext();
  const getColor = useGetColor();
  const bgLight = useBackgroundLight();
  const bgDark = useBackgroundDark();

  const theme: TetrisTheme = {
    background: getColor('background'),
    board: getColor('board'),
    button: getColor('button'),
    button_shade: getColor('button_shade'),
    button_text: getColor('button_text'),
    outline: getColor('outline'),
    text: getColor('text'),
    shape_i: getColor('shape_i'),
    shape_j: getColor('shape_j'),
    shape_l: getColor('shape_l'),
    shape_o: getColor('shape_o'),
    shape_s: getColor('shape_s'),
    shape_t: getColor('shape_t'),
    shape_z: getColor('shape_z'),
  };

  return (
    <style>{`
        :root {
            --background: ${theme.background};
            --background_dark: ${bgDark};
            --background_light: ${bgLight};
            --board: ${theme.board};
            --button: ${theme.button};
            --button_shade: ${theme.button_shade};
            --button_text: ${theme.button_text};
            --outline: ${theme.outline};
            --text: ${theme.text};
            --shape_i: ${theme.shape_i};
            --shape_j: ${theme.shape_j};
            --shape_l: ${theme.shape_l};
            --shape_o: ${theme.shape_o};
            --shape_s: ${theme.shape_s};
            --shape_t: ${theme.shape_t};
            --shape_z: ${theme.shape_z};
            --padding: ${state.config.padding};
            --layout_min-h: 640px;
        }
  `}</style>
  );
}
