import React, { useEffect } from 'react'

import BreadCrumb from '@common//BreadCrumb'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import DynamicBounds from './daynamic'

const Range = () => {
  useEffect(() => {
    document.title =
      'Range Slider | Domiex - React JS Admin & Dashboard Template'
  }, [])

  const marks = {
    '-10': '-10°C',
    0: <strong>0°C</strong>,
    26: '26°C',
    37: '37°C',
    50: '50°C',
    100: {
      style: {
        color: 'red',
      },
      label: <strong>100°C</strong>,
    },
  }

  const [value, setValue] = React.useState([20, 60])
  return (
    <React.Fragment>
      <BreadCrumb title="Range Slider" subTitle="Forms" />
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Default Example</h6>
          </div>
          <div className="flex flex-col gap-5 card-body">
            <Slider
              trackStyle={{ backgroundColor: 'transparent' }}
              handleStyle={{ backgroundColor: 'green', borderColor: 'green' }}
              min={0}
              max={20}
              defaultValue={5}
            />
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Basic</h6>
          </div>
          <div className="card-body">
            <Slider range min={0} max={20} defaultValue={[8, 17]} />
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">DraggableTrack multiple points</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <Slider
                range={{ draggableTrack: true }}
                allowCross={false}
                defaultValue={[0, 20, 30, 40, 50]}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Using arbitrary (string) values</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <Slider
                marks={{
                  0: '128 MB',
                  20: '256 MB',
                  40: '1 GB',
                  60: '8 GB',
                  80: '16 GB',
                  100: '32 GB',
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Slider with fixed values</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <Slider
                min={20}
                defaultValue={20}
                marks={{ 20: 20, 40: 40, 100: 100 }}
                step={null}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Range Slider with marks</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <Slider
                range
                min={-10}
                marks={marks}
                step={null}
                defaultValue={[-10, 0]}
                allowCross={false}
                pushable
                onChangeComplete={(v) => console.log('AfterChange:', v)}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Multi Range with custom track</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <Slider
                range
                count={3}
                defaultValue={[20, 40, 60, 80]}
                pushable
                trackStyle={[
                  { backgroundColor: 'red' },
                  { backgroundColor: 'green' },
                ]}
                handleStyle={[
                  { backgroundColor: 'transparent' },
                  { backgroundColor: 'transparent' },
                ]}
                railStyle={{ backgroundColor: 'black' }}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Slider with reset button</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center h-20">
              <div id="overlapping-tooltip" className="w-full">
                <button
                  type="button"
                  onClick={() => setValue(value)}
                  className="mt-6 btn btn-primary">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">Slider with dynamic min, max, step</h6>
          </div>
          <div className="card-body">
            <div className="flex items-center justify-center">
              <DynamicBounds />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Range
