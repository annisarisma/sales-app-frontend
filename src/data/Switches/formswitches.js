const defaultSwitches = [
  {
    id: 'togglePrimary',
    dot: 'switch-primary',
  },
  {
    id: 'togglePurple',
    dot: 'switch-purple',
  },
  {
    id: 'toggleGreen',
    dot: 'switch-green',
  },
  {
    id: 'toggleRed',
    dot: 'switch-red',
  },
  {
    id: 'toggleYellow',
    dot: 'switch-yellow',
  },
  {
    id: 'toggleSky',
    dot: 'switch-sky',
  },
  {
    id: 'togglePink',
    dot: 'switch-pink',
  },
  {
    id: 'toggleGray',
    dot: 'switch-gray',
  },
]

const softSwitches = [
  {
    id: 'togglePrimary1',
    dot: 'switch-primary',
  },
  {
    id: 'togglePurple2',
    dot: 'switch-purple',
  },
  {
    id: 'toggleGreen3',
    dot: 'switch-green',
  },
  {
    id: 'toggleRed4',
    dot: 'switch-red',
  },
  {
    id: 'toggleYellow5',
    dot: 'switch-yellow',
  },
  {
    id: 'toggleSky6',
    dot: 'switch-sky',
  },
  {
    id: 'togglePink7',
    dot: 'switch-pink',
  },
  {
    id: 'toggleGray8',
    dot: 'switch-gray',
  },
]

const softColoredSwitches = [
  {
    id: 'togglePrimary11',
    wrapper: 'peer-checked:!bg-primary-500/15',
    dot: 'peer-checked:!bg-primary-500',
  },
  {
    id: 'togglePurple12',
    wrapper: 'peer-checked:!bg-purple-500/15',
    dot: 'peer-checked:!bg-purple-500',
  },
  {
    id: 'toggleGreen13',
    wrapper: 'peer-checked:!bg-green-500/15',
    dot: 'peer-checked:!bg-green-500',
  },
  {
    id: 'toggleRed14',
    wrapper: 'peer-checked:!bg-red-500/15',
    dot: 'peer-checked:!bg-red-500',
  },
  {
    id: 'toggleYellow15',
    wrapper: 'peer-checked:!bg-yellow-500/15',
    dot: 'peer-checked:!bg-yellow-500',
  },
  {
    id: 'toggleSky16',
    wrapper: 'peer-checked:!bg-sky-500/15',
    dot: 'peer-checked:!bg-sky-500',
  },
  {
    id: 'togglePink17',
    wrapper: 'peer-checked:!bg-pink-500/15',
    dot: 'peer-checked:!bg-pink-500',
  },
  {
    id: 'toggleOarnge17',
    wrapper: 'peer-checked:!bg-orange-500/15',
    dot: 'peer-checked:!bg-orange-500',
  },
  {
    id: 'toggleIndigo17',
    wrapper: 'peer-checked:!bg-indigo-500/15',
    dot: 'peer-checked:!bg-indigo-500',
  },
]

const solidSwitches = [
  {
    id: 'togglePrimary21',
    wrapper: 'peer-checked:bg-primary-500 peer-checked:border-primary-500',
    dot: 'peer-checked:bg-primary-50',
  },
  {
    id: 'togglePurple22',
    wrapper: 'peer-checked:bg-purple-500 peer-checked:border-purple-500',
    dot: 'peer-checked:bg-purple-50',
  },
  {
    id: 'toggleGreen23',
    wrapper: 'peer-checked:border-green-500 peer-checked:bg-green-500',
    dot: 'peer-checked:bg-green-50',
  },
  {
    id: 'toggleRed24',
    wrapper: 'peer-checked:border-red-500 peer-checked:bg-red-500',
    dot: 'peer-checked:bg-red-50',
  },
  {
    id: 'toggleYellow25',
    wrapper: 'peer-checked:border-yellow-500 peer-checked:bg-yellow-500',
    dot: 'peer-checked:bg-yellow-50',
  },
  {
    id: 'toggleSky26',
    wrapper: 'peer-checked:border-sky-500 peer-checked:bg-sky-500',
    dot: 'peer-checked:bg-sky-50',
  },
  {
    id: 'togglePink27',
    wrapper: 'peer-checked:border-pink-500 peer-checked:bg-pink-500',
    dot: 'peer-checked:bg-pink-50',
  },
  {
    id: 'toggleOrange28',
    wrapper: 'peer-checked:border-orange-500 peer-checked:bg-orange-500',
    dot: 'peer-checked:bg-orange-50',
  },
  {
    id: 'toggleIndigo29',
    wrapper: 'peer-checked:border-indigo-500 peer-checked:bg-indigo-500',
    dot: 'peer-checked:bg-indigo-50',
  },
]

const textIconSwitches = [
  {
    id: 'toggleYesNo1',
    wrapper: 'switch-wrapper',
    dot: 'switch-primary peer-checked:bg-primary-500 peer-checked:after:text-primary-50',
  },
  {
    id: 'toggleYesNo2',
    wrapper: 'switch-wrapper peer-checked:!bg-purple-500/15',
    dot: 'peer-checked:!bg-purple-500 peer-checked:after:text-purple-50',
  },
  {
    id: 'toggleIcons',
    wrapper: 'switch-wrapper peer-checked:!bg-purple-500/15',
    dot: "peer-checked:!bg-purple-500 after:font-remix after:!content-['\\ea64'] peer-checked:after:!content-['\\ea6e'] peer-checked:after:text-purple-50",
  },
]

const squareSwitches = [
  {
    id: 'toggleSquare',
    container: 'switch-group',
    wrapper: '!rounded-md switch-wrapper',
    dot: '!rounded-md switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full switch-primary',
  },
  {
    id: 'toggleSquare2',
    container: 'switch-group switch-soft',
    wrapper: 'switch-wrapper !rounded-md',
    dot: 'switch-dot peer-checked:!bg-primary-500 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full !rounded-md',
  },
  {
    id: 'toggleSquare3',
    container: 'switch-group switch-soft',
    wrapper: 'switch-wrapper peer-checked:bg-primary-500/15 !rounded-md',
    dot: 'switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:!bg-primary-500 !rounded-md',
  },
  {
    id: 'toggleSquare4',
    container: 'switch-group',
    wrapper:
      '!rounded-md switch-wrapper peer-checked:bg-primary-500 peer-checked:border-primary-500',
    dot: '!rounded-md switch-dot peer-checked:translate-x-full rtl:peer-checked:-translate-x-full peer-checked:bg-primary-50',
  },
]

const threeDSwitches = [
  {
    id: 'toggle3D1',
    checked: true,
    color: 'switch-primary',
  },
  {
    id: 'toggle3D2',
    checked: false,
    color: 'switch-purple',
  },
  {
    id: 'toggle3D3',
    checked: false,
    color: 'switch-green',
  },
  {
    id: 'toggle3D4',
    checked: false,
    color: 'switch-red',
  },
  {
    id: 'toggle3D5',
    checked: false,
    color: 'switch-yellow',
  },
  {
    id: 'toggle3D6',
    checked: false,
    color: 'switch-sky',
  },
  {
    id: 'toggle3D7',
    checked: false,
    color: 'switch-pink',
  },
  {
    id: 'toggle3D8',
    checked: false,
    color: 'switch-orange',
  },
  {
    id: 'toggle3D9',
    checked: false,
    color: 'switch-indigo',
  },
]

export {
  defaultSwitches,
  softSwitches,
  softColoredSwitches,
  solidSwitches,
  textIconSwitches,
  squareSwitches,
  threeDSwitches,
}
