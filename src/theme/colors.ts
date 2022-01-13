interface IColor {
  primary: string;
  secondary: string;
}

interface IColors {
  buttons: IColor;
}

const colors: IColors = {
  buttons: {
    primary: '#0059b2',
    secondary: '#f71b52',
  },
};

export default colors;
