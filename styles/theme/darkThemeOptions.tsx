import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});


const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
  components: {
    MuiLink: {
        defaultProps: {
            component: LinkBehaviour
        }
    },
    MuiButtonBase: {
        defaultProps: {
            LinkComponent: LinkBehaviour
        }
    }
}
};



export default darkThemeOptions;