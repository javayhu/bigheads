import React from 'react'
import { colors } from '../theme'
import { ThemeContext } from '../themeContext'
import { Noop } from '../utils/Noop'

import { Base } from '../components/Base'

import { NormalEyebrows } from '../components/eyebrows/Normal'
import { LeftLoweredEyebrows } from '../components/eyebrows/LeftLoweredEyebrows'

import { Grin } from '../components/mouths/Grin'
import { SadMouth } from '../components/mouths/Sad'
import { Lips } from './mouths/Lips'
import { SmileOpen } from './mouths/SmileOpen'

import * as LongHair from '../components/hair/LongHair'
import * as BunHair from '../components/hair/BunHair'
import * as ShortHair from '../components/hair/ShortHair'
import * as PixieCut from '../components/hair/PixieCut'
import * as BaldingHair from '../components/hair/BaldingHair'

import * as Beanie from '../components/hats/Beanie'

import * as Chest from '../components/bodies/Chest'
import * as Breasts from '../components/bodies/Breasts'

import { MediumBeard } from './facialHair/MediumBeard'

import { WithLashesEyes } from './eyes/WithLashesEyes'
import { HappyEyes } from './eyes/HappyEyes'
import { NormalEyes } from '../components/eyes/NormalEyes'
import { LeftTwitchEyes } from '../components/eyes/LeftTwitchEyes'

import { Shirt } from './clothing/Shirt'
import { ContentEyes } from './eyes/ContentEyes'
import { SeriousEyebrows } from './eyebrows/SeriousEyebrows'
import { RoundGlasses } from './accessories/RoundGlasses'
import { AngryEyebrows } from './eyebrows/AngryEyebrows'
import { StubbleBeard } from './facialHair/Stubble'
import { RedwoodGraphic } from './clothingGraphic/Redwood'
import { GatsbyGraphic } from './clothingGraphic/Gatsby'
import { SquintEyes } from './eyes/SquintEyes'
import { ConcernedEyebrows } from './eyebrows/ConcernedEyebrows'
import { Shades } from './accessories/Shades'
import { TankTop } from './clothing/TankTop'
import { SimpleEyes } from './eyes/SimpleEyes'
import { Vue as VueGraphics } from './clothingGraphic/Vue'

const eyesMap = {
  normal: NormalEyes,
  leftTwitch: LeftTwitchEyes,
  withLashes: WithLashesEyes,
  happy: HappyEyes,
  content: ContentEyes,
  squint: SquintEyes,
  simple: SimpleEyes,
}

const eyebrowsMap = {
  raised: NormalEyebrows,
  leftLowered: LeftLoweredEyebrows,
  serious: SeriousEyebrows,
  angry: AngryEyebrows,
  concerned: ConcernedEyebrows,
}

const mouthsMap = {
  grin: Grin,
  sad: SadMouth,
  openSmile: SmileOpen,
  lips: Lips,
}

const hairMap = {
  none: { Front: Noop, Back: Noop },
  long: LongHair,
  bun: BunHair,
  short: ShortHair,
  pixie: PixieCut,
  balding: BaldingHair,
}

const facialHairMap = {
  none: Noop,
  none2: Noop,
  none3: Noop,
  stubble: StubbleBeard,
  mediumBeard: MediumBeard,
}

const clothingMap = {
  naked: Noop,
  shirt: Shirt,
  tankTop: TankTop,
}

const accessoryMap = {
  none: Noop,
  roundGlasses: RoundGlasses,
  shades: Shades,
}

const graphicsMap = {
  none: Noop,
  redwood: RedwoodGraphic,
  gatsby: GatsbyGraphic,
  vue: VueGraphics,
}

const hatMap = {
  none: { Front: Noop, Back: Noop },
  none2: { Front: Noop, Back: Noop },
  none3: { Front: Noop, Back: Noop },
  beanie: Beanie,
}

const bodyMap = {
  chest: Chest,
  breasts: Breasts,
}

function selectRandomKey<T extends {}>(object: T) {
  return (Object.keys(object) as Array<keyof typeof object>)[
    Math.floor(Math.random() * Object.keys(object).length)
  ]
}

console.log(
  'Combinations: ',
  Object.keys(colors.bgColors).length *
    Object.keys(colors.lipColors).length *
    Object.keys(colors.skin).length *
    Object.keys(colors.hair).length *
    Object.keys(colors.clothing).length *
    Object.keys(eyesMap).length *
    Object.keys(eyebrowsMap).length *
    Object.keys(mouthsMap).length *
    Object.keys(hairMap).length *
    Object.keys(facialHairMap).length *
    Object.keys(accessoryMap).length *
    Object.keys(clothingMap).length *
    Object.keys(hatMap).length *
    Object.keys(bodyMap).length *
    Object.keys(graphicsMap).length,
)

interface AvatarProps {
  skinTone?: keyof typeof colors.skin
  eyes?: keyof typeof eyesMap
  eyebrows?: keyof typeof eyebrowsMap
  mouth?: keyof typeof mouthsMap
  hair?: keyof typeof hairMap
  facialHair?: keyof typeof facialHairMap
  clothing?: keyof typeof clothingMap
  accessory?: keyof typeof accessoryMap
  graphic?: keyof typeof graphicsMap
  hat?: keyof typeof hatMap
  body?: keyof typeof bodyMap

  hairColor?: keyof typeof colors.hair
  clothingColor?: keyof typeof colors.clothing
  circleColor?: keyof typeof colors.bgColors
  lipColor?: keyof typeof colors.lipColors
  hatColor?: keyof typeof colors.clothing

  mask?: boolean
}

export const Avatar = ({
  skinTone = selectRandomKey(colors.skin),
  eyes = selectRandomKey(eyesMap),
  eyebrows = selectRandomKey(eyebrowsMap),
  mouth = selectRandomKey(mouthsMap),
  hair = selectRandomKey(hairMap),
  facialHair = selectRandomKey(facialHairMap),
  clothing = selectRandomKey(clothingMap),
  accessory = selectRandomKey(accessoryMap),
  graphic = selectRandomKey(graphicsMap),
  hat = selectRandomKey(hatMap),
  body = selectRandomKey(bodyMap),

  hairColor = selectRandomKey(colors.hair),
  clothingColor = selectRandomKey(colors.clothing),
  circleColor = selectRandomKey(colors.bgColors),
  lipColor = selectRandomKey(colors.lipColors),
  hatColor = selectRandomKey(colors.clothing),

  mask = true,
}: AvatarProps) => {
  const skin = colors.skin[skinTone]

  const Eyes = eyesMap[eyes]
  const Eyebrows = eyebrowsMap[eyebrows]
  const Mouth = mouthsMap[mouth]
  const Hair = hairMap[hair]
  const FacialHair = facialHairMap[facialHair]
  const Clothing = clothingMap[clothing]
  const Accessory = accessoryMap[accessory]
  const Graphic = graphicsMap[graphic]
  const Hat = hatMap[hat]
  const Body = bodyMap[body]

  return (
    <ThemeContext.Provider value={{ colors, skin }}>
      <Base
        eyes={Eyes}
        eyebrows={Eyebrows}
        mouth={Mouth}
        hair={Hair}
        facialHair={FacialHair}
        clothing={Clothing}
        accessory={Accessory}
        graphic={Graphic}
        hat={Hat}
        body={Body}
        hatColor={hatColor}
        hairColor={hairColor}
        clothingColor={clothingColor}
        circleColor={circleColor}
        lipColor={lipColor}
        mask={mask}
      />
    </ThemeContext.Provider>
  )
}
