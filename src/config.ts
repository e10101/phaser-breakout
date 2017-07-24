
export const brickInfo = {
  width: 80,
  height: 60,
  color: "#4885ed",
  count: {
    row: 7,
    col: 3
  },
  offset: {
    top: 0,
    left: 0
  },
  padding: 10
};

export const ballInfo = {
  width: 20,
  height: 20,
  radius: 10,
  color: "#db3236",
}

export const paddleInfo = {
  width: 200,
  height: 15,
  color: "#3cba54",
}

const getFontStyle = (fontSize) => {
  return {
    font: `${fontSize}px VT323`,
    fill: "white",
    boundsAlignH: "center",
    boundsAlignV: "middle",
  }
}

export const gameOverUI = {
  backColorHex: 0x4885ed,
  title: "YOU LOSE",
  titleStyle: getFontStyle(32),
  subTitle: "Click to restart",
  subTitleStyle: getFontStyle(24),
}

export const gameWinUI = {
  backColorHex: 0x3cba54,
  title: "YOU WIN!",
  titleStyle: getFontStyle(32),
  subTitle: "Click to restart",
  subTitleStyle: getFontStyle(24),
}

export const splashUI = {
  backColorHex: 0x000000,
  title: "CLICK TO PLAY",
  titleStyle: getFontStyle(32),
  subTitle: "Created by Yishi Guo",
  subTitleStyle: getFontStyle(24),
}
