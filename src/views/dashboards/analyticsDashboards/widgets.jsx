// pages/index.tsx or any other component
import React from 'react'

import {
  Activity,
  ArrowUpFromDot,
  CircleArrowUp,
  Eye,
  Mouse,
  MousePointerClick,
} from 'lucide-react'

import { AdsRevenueChart, SalesRevenueChart } from './chart'
import AnimatedCounter from './counter'

const Widgets = () => {
  return (
    <React.Fragment>

      {/* Total Revenue */}
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="card-body">
          <div className="flex gap-3 mb-3">
            <div className="flex items-center justify-center border-2 rounded-full text-green-500 ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-green-500/20 size-12 border-green-500">
              <CircleArrowUp className="fill-green-500/10" />
            </div>
            <div>
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Total Revenue
              </p>
              <h5>
                $<AnimatedCounter start={0} end={145} duration={3000} />M
              </h5>
            </div>
          </div>
          <SalesRevenueChart
            chartColors="[bg-green-500, bg-green-100, bg-green-50, bg-green-300]"
            chartDarkColors={''}
            chartId="salesRevenueChart"
          />
        </div>
      </div>

      {/* Total Order */}
      <div className="col-span-12 xl:col-span-6 2xl:col-span-4 card">
        <div className="card-body">
          <div className="flex gap-3 mb-3">
            <div className="flex items-center justify-center text-primary-500 border-2 border-primary-400 rounded-full ring-1 ring-offset-2 dark:ring-offset-dark-900 ring-primary-500/20 size-12">
              <Activity className="fill-green-500/10" />
            </div>
            <div>
              <p className="mb-1 text-gray-500 dark:text-dark-500">
                Total Order
              </p>
              <h5>
                $<AnimatedCounter start={0} end={145} duration={3000} />M
              </h5>
            </div>
          </div>
          <AdsRevenueChart
            chartColors="[bg-primary-500, bg-primary-100, bg-primary-50, bg-primary-300]"
            chartDarkColors={''}
            chartId="adsRevenueChart"
          />
        </div>
      </div>

      {/* Impression */}
      <div className="relative col-span-12 overflow-hidden md:col-span-6 2xl:col-span-2 card">
        <div className="absolute inset-0">
          <svg viewBox="0 0 800 800" opacity="1">
            <g
              fill="none"
              strokeWidth="0.5"
              className="stroke-green-500/20"
              strokeLinecap="round"
              strokeDasharray="52.5 5.5"
              transform="matrix(1.8,0,0,1.8,-319.99998474121094,-320)">
              <line
                x1="236"
                y1="400"
                x2="564"
                y2="400"
                transform="rotate(0, 400, 400)"
                opacity="0.60"></line>
              <line
                x1="213"
                y1="400"
                x2="587"
                y2="400"
                transform="rotate(5, 400, 400)"
                opacity="0.29"></line>
              <line
                x1="394"
                y1="400"
                x2="406"
                y2="400"
                transform="rotate(10, 400, 400)"
                opacity="0.38"></line>
              <line
                x1="767.5"
                y1="400"
                x2="32.5"
                y2="400"
                transform="rotate(15, 400, 400)"
                opacity="0.43"></line>
              <line
                x1="210"
                y1="400"
                x2="590"
                y2="400"
                transform="rotate(20, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="760.5"
                y1="400"
                x2="39.5"
                y2="400"
                transform="rotate(25, 400, 400)"
                opacity="0.86"></line>
              <line
                x1="263"
                y1="400"
                x2="537"
                y2="400"
                transform="rotate(30, 400, 400)"
                opacity="0.82"></line>
              <line
                x1="384.5"
                y1="400"
                x2="415.5"
                y2="400"
                transform="rotate(35, 400, 400)"
                opacity="0.83"></line>
              <line
                x1="188"
                y1="400"
                x2="612"
                y2="400"
                transform="rotate(40, 400, 400)"
                opacity="0.69"></line>
              <line
                x1="268"
                y1="400"
                x2="532"
                y2="400"
                transform="rotate(45, 400, 400)"
                opacity="0.42"></line>
              <line
                x1="710.5"
                y1="400"
                x2="89.5"
                y2="400"
                transform="rotate(50, 400, 400)"
                opacity="0.42"></line>
              <line
                x1="209"
                y1="400"
                x2="591"
                y2="400"
                transform="rotate(55, 400, 400)"
                opacity="0.69"></line>
              <line
                x1="644.5"
                y1="400"
                x2="155.5"
                y2="400"
                transform="rotate(60, 400, 400)"
                opacity="0.68"></line>
              <line
                x1="670"
                y1="400"
                x2="130"
                y2="400"
                transform="rotate(65, 400, 400)"
                opacity="0.74"></line>
              <line
                x1="180.5"
                y1="400"
                x2="619.5"
                y2="400"
                transform="rotate(70, 400, 400)"
                opacity="0.21"></line>
              <line
                x1="622.5"
                y1="400"
                x2="177.5"
                y2="400"
                transform="rotate(75, 400, 400)"
                opacity="0.49"></line>
              <line
                x1="530.5"
                y1="400"
                x2="269.5"
                y2="400"
                transform="rotate(80, 400, 400)"
                opacity="0.09"></line>
              <line
                x1="645"
                y1="400"
                x2="155"
                y2="400"
                transform="rotate(85, 400, 400)"
                opacity="0.95"></line>
              <line
                x1="460.5"
                y1="400"
                x2="339.5"
                y2="400"
                transform="rotate(90, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="482.5"
                y1="400"
                x2="317.5"
                y2="400"
                transform="rotate(95, 400, 400)"
                opacity="0.34"></line>
              <line
                x1="182"
                y1="400"
                x2="618"
                y2="400"
                transform="rotate(100, 400, 400)"
                opacity="0.49"></line>
              <line
                x1="398"
                y1="400"
                x2="402"
                y2="400"
                transform="rotate(105, 400, 400)"
                opacity="0.88"></line>
              <line
                x1="340"
                y1="400"
                x2="460"
                y2="400"
                transform="rotate(110, 400, 400)"
                opacity="0.17"></line>
              <line
                x1="437.5"
                y1="400"
                x2="362.5"
                y2="400"
                transform="rotate(115, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="173.5"
                y1="400"
                x2="626.5"
                y2="400"
                transform="rotate(120, 400, 400)"
                opacity="0.64"></line>
              <line
                x1="513"
                y1="400"
                x2="287"
                y2="400"
                transform="rotate(125, 400, 400)"
                opacity="0.27"></line>
              <line
                x1="466.5"
                y1="400"
                x2="333.5"
                y2="400"
                transform="rotate(130, 400, 400)"
                opacity="0.17"></line>
              <line
                x1="128.5"
                y1="400"
                x2="671.5"
                y2="400"
                transform="rotate(135, 400, 400)"
                opacity="0.67"></line>
              <line
                x1="369"
                y1="400"
                x2="431"
                y2="400"
                transform="rotate(140, 400, 400)"
                opacity="0.22"></line>
              <line
                x1="150"
                y1="400"
                x2="650"
                y2="400"
                transform="rotate(145, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="520.5"
                y1="400"
                x2="279.5"
                y2="400"
                transform="rotate(150, 400, 400)"
                opacity="0.71"></line>
              <line
                x1="443.5"
                y1="400"
                x2="356.5"
                y2="400"
                transform="rotate(155, 400, 400)"
                opacity="0.47"></line>
              <line
                x1="734.5"
                y1="400"
                x2="65.5"
                y2="400"
                transform="rotate(160, 400, 400)"
                opacity="0.23"></line>
              <line
                x1="569.5"
                y1="400"
                x2="230.5"
                y2="400"
                transform="rotate(165, 400, 400)"
                opacity="0.52"></line>
              <line
                x1="541.5"
                y1="400"
                x2="258.5"
                y2="400"
                transform="rotate(170, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="405"
                y1="400"
                x2="395"
                y2="400"
                transform="rotate(175, 400, 400)"
                opacity="0.19"></line>
              <line
                x1="546.5"
                y1="400"
                x2="253.5"
                y2="400"
                transform="rotate(180, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="549"
                y1="400"
                x2="251"
                y2="400"
                transform="rotate(185, 400, 400)"
                opacity="0.57"></line>
              <line
                x1="443"
                y1="400"
                x2="357"
                y2="400"
                transform="rotate(190, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="308"
                y1="400"
                x2="492"
                y2="400"
                transform="rotate(195, 400, 400)"
                opacity="0.91"></line>
              <line
                x1="758.5"
                y1="400"
                x2="41.5"
                y2="400"
                transform="rotate(200, 400, 400)"
                opacity="0.25"></line>
              <line
                x1="280"
                y1="400"
                x2="520"
                y2="400"
                transform="rotate(205, 400, 400)"
                opacity="0.59"></line>
              <line
                x1="232"
                y1="400"
                x2="568"
                y2="400"
                transform="rotate(210, 400, 400)"
                opacity="0.67"></line>
              <line
                x1="326.5"
                y1="400"
                x2="473.5"
                y2="400"
                transform="rotate(215, 400, 400)"
                opacity="0.32"></line>
              <line
                x1="337.5"
                y1="400"
                x2="462.5"
                y2="400"
                transform="rotate(220, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="622"
                y1="400"
                x2="178"
                y2="400"
                transform="rotate(225, 400, 400)"
                opacity="0.51"></line>
              <line
                x1="714.5"
                y1="400"
                x2="85.5"
                y2="400"
                transform="rotate(230, 400, 400)"
                opacity="0.44"></line>
              <line
                x1="248"
                y1="400"
                x2="552"
                y2="400"
                transform="rotate(235, 400, 400)"
                opacity="0.31"></line>
              <line
                x1="531"
                y1="400"
                x2="269"
                y2="400"
                transform="rotate(240, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="147.5"
                y1="400"
                x2="652.5"
                y2="400"
                transform="rotate(245, 400, 400)"
                opacity="0.66"></line>
              <line
                x1="131.5"
                y1="400"
                x2="668.5"
                y2="400"
                transform="rotate(250, 400, 400)"
                opacity="0.54"></line>
              <line
                x1="150.5"
                y1="400"
                x2="649.5"
                y2="400"
                transform="rotate(255, 400, 400)"
                opacity="0.56"></line>
              <line
                x1="677"
                y1="400"
                x2="123"
                y2="400"
                transform="rotate(260, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="262.5"
                y1="400"
                x2="537.5"
                y2="400"
                transform="rotate(265, 400, 400)"
                opacity="0.62"></line>
              <line
                x1="629.5"
                y1="400"
                x2="170.5"
                y2="400"
                transform="rotate(270, 400, 400)"
                opacity="0.89"></line>
              <line
                x1="253.5"
                y1="400"
                x2="546.5"
                y2="400"
                transform="rotate(275, 400, 400)"
                opacity="0.94"></line>
              <line
                x1="589"
                y1="400"
                x2="211"
                y2="400"
                transform="rotate(280, 400, 400)"
                opacity="0.99"></line>
              <line
                x1="547"
                y1="400"
                x2="253"
                y2="400"
                transform="rotate(285, 400, 400)"
                opacity="0.72"></line>
              <line
                x1="418.5"
                y1="400"
                x2="381.5"
                y2="400"
                transform="rotate(290, 400, 400)"
                opacity="0.98"></line>
              <line
                x1="575"
                y1="400"
                x2="225"
                y2="400"
                transform="rotate(295, 400, 400)"
                opacity="0.33"></line>
              <line
                x1="664"
                y1="400"
                x2="136"
                y2="400"
                transform="rotate(300, 400, 400)"
                opacity="0.29"></line>
              <line
                x1="677"
                y1="400"
                x2="123"
                y2="400"
                transform="rotate(305, 400, 400)"
                opacity="0.10"></line>
              <line
                x1="423"
                y1="400"
                x2="377"
                y2="400"
                transform="rotate(310, 400, 400)"
                opacity="0.20"></line>
              <line
                x1="216"
                y1="400"
                x2="584"
                y2="400"
                transform="rotate(315, 400, 400)"
                opacity="0.44"></line>
              <line
                x1="626.5"
                y1="400"
                x2="173.5"
                y2="400"
                transform="rotate(320, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="507.5"
                y1="400"
                x2="292.5"
                y2="400"
                transform="rotate(325, 400, 400)"
                opacity="0.51"></line>
              <line
                x1="454"
                y1="400"
                x2="346"
                y2="400"
                transform="rotate(330, 400, 400)"
                opacity="1.00"></line>
              <line
                x1="342"
                y1="400"
                x2="458"
                y2="400"
                transform="rotate(335, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="571.5"
                y1="400"
                x2="228.5"
                y2="400"
                transform="rotate(340, 400, 400)"
                opacity="0.46"></line>
              <line
                x1="150.5"
                y1="400"
                x2="649.5"
                y2="400"
                transform="rotate(345, 400, 400)"
                opacity="0.55"></line>
              <line
                x1="582.5"
                y1="400"
                x2="217.5"
                y2="400"
                transform="rotate(350, 400, 400)"
                opacity="0.27"></line>
              <line
                x1="728"
                y1="400"
                x2="72"
                y2="400"
                transform="rotate(355, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="625.5"
                y1="400"
                x2="174.5"
                y2="400"
                transform="rotate(360, 400, 400)"
                opacity="0.72"></line>
              <line
                x1="481.5"
                y1="400"
                x2="318.5"
                y2="400"
                transform="rotate(365, 400, 400)"
                opacity="0.31"></line>
              <line
                x1="676"
                y1="400"
                x2="124"
                y2="400"
                transform="rotate(370, 400, 400)"
                opacity="0.43"></line>
              <line
                x1="586.5"
                y1="400"
                x2="213.5"
                y2="400"
                transform="rotate(375, 400, 400)"
                opacity="0.72"></line>
            </g>
          </svg>
        </div>
        <div className="relative flex flex-col h-full card-body">
          <p className="text-gray-500 uppercase dark:text-dark-500">
            Impressions
          </p>

          <div className="my-auto text-green-500">
            <ArrowUpFromDot className="mx-auto" />
            <h4 className="mt-2 text-center">+39.7%</h4>
          </div>
          <p className="text-green-500">
            <Eye className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> 47,859
          </p>
        </div>
      </div>

      {/* Customer */}
      <div className="relative col-span-12 overflow-hidden md:col-span-6 2xl:col-span-2 card">
        <div className="absolute inset-0">
          <svg viewBox="0 0 800 800" opacity="1">
            <g
              fill="none"
              strokeWidth="0.5"
              className="stroke-sky-500/20"
              strokeLinecap="round"
              strokeDasharray="52.5 5.5"
              transform="matrix(1.8,0,0,1.8,-319.99998474121094,-320)">
              <line
                x1="236"
                y1="400"
                x2="564"
                y2="400"
                transform="rotate(0, 400, 400)"
                opacity="0.60"></line>
              <line
                x1="213"
                y1="400"
                x2="587"
                y2="400"
                transform="rotate(5, 400, 400)"
                opacity="0.29"></line>
              <line
                x1="394"
                y1="400"
                x2="406"
                y2="400"
                transform="rotate(10, 400, 400)"
                opacity="0.38"></line>
              <line
                x1="767.5"
                y1="400"
                x2="32.5"
                y2="400"
                transform="rotate(15, 400, 400)"
                opacity="0.43"></line>
              <line
                x1="210"
                y1="400"
                x2="590"
                y2="400"
                transform="rotate(20, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="760.5"
                y1="400"
                x2="39.5"
                y2="400"
                transform="rotate(25, 400, 400)"
                opacity="0.86"></line>
              <line
                x1="263"
                y1="400"
                x2="537"
                y2="400"
                transform="rotate(30, 400, 400)"
                opacity="0.82"></line>
              <line
                x1="384.5"
                y1="400"
                x2="415.5"
                y2="400"
                transform="rotate(35, 400, 400)"
                opacity="0.83"></line>
              <line
                x1="188"
                y1="400"
                x2="612"
                y2="400"
                transform="rotate(40, 400, 400)"
                opacity="0.69"></line>
              <line
                x1="268"
                y1="400"
                x2="532"
                y2="400"
                transform="rotate(45, 400, 400)"
                opacity="0.42"></line>
              <line
                x1="710.5"
                y1="400"
                x2="89.5"
                y2="400"
                transform="rotate(50, 400, 400)"
                opacity="0.42"></line>
              <line
                x1="209"
                y1="400"
                x2="591"
                y2="400"
                transform="rotate(55, 400, 400)"
                opacity="0.69"></line>
              <line
                x1="644.5"
                y1="400"
                x2="155.5"
                y2="400"
                transform="rotate(60, 400, 400)"
                opacity="0.68"></line>
              <line
                x1="670"
                y1="400"
                x2="130"
                y2="400"
                transform="rotate(65, 400, 400)"
                opacity="0.74"></line>
              <line
                x1="180.5"
                y1="400"
                x2="619.5"
                y2="400"
                transform="rotate(70, 400, 400)"
                opacity="0.21"></line>
              <line
                x1="622.5"
                y1="400"
                x2="177.5"
                y2="400"
                transform="rotate(75, 400, 400)"
                opacity="0.49"></line>
              <line
                x1="530.5"
                y1="400"
                x2="269.5"
                y2="400"
                transform="rotate(80, 400, 400)"
                opacity="0.09"></line>
              <line
                x1="645"
                y1="400"
                x2="155"
                y2="400"
                transform="rotate(85, 400, 400)"
                opacity="0.95"></line>
              <line
                x1="460.5"
                y1="400"
                x2="339.5"
                y2="400"
                transform="rotate(90, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="482.5"
                y1="400"
                x2="317.5"
                y2="400"
                transform="rotate(95, 400, 400)"
                opacity="0.34"></line>
              <line
                x1="182"
                y1="400"
                x2="618"
                y2="400"
                transform="rotate(100, 400, 400)"
                opacity="0.49"></line>
              <line
                x1="398"
                y1="400"
                x2="402"
                y2="400"
                transform="rotate(105, 400, 400)"
                opacity="0.88"></line>
              <line
                x1="340"
                y1="400"
                x2="460"
                y2="400"
                transform="rotate(110, 400, 400)"
                opacity="0.17"></line>
              <line
                x1="437.5"
                y1="400"
                x2="362.5"
                y2="400"
                transform="rotate(115, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="173.5"
                y1="400"
                x2="626.5"
                y2="400"
                transform="rotate(120, 400, 400)"
                opacity="0.64"></line>
              <line
                x1="513"
                y1="400"
                x2="287"
                y2="400"
                transform="rotate(125, 400, 400)"
                opacity="0.27"></line>
              <line
                x1="466.5"
                y1="400"
                x2="333.5"
                y2="400"
                transform="rotate(130, 400, 400)"
                opacity="0.17"></line>
              <line
                x1="128.5"
                y1="400"
                x2="671.5"
                y2="400"
                transform="rotate(135, 400, 400)"
                opacity="0.67"></line>
              <line
                x1="369"
                y1="400"
                x2="431"
                y2="400"
                transform="rotate(140, 400, 400)"
                opacity="0.22"></line>
              <line
                x1="150"
                y1="400"
                x2="650"
                y2="400"
                transform="rotate(145, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="520.5"
                y1="400"
                x2="279.5"
                y2="400"
                transform="rotate(150, 400, 400)"
                opacity="0.71"></line>
              <line
                x1="443.5"
                y1="400"
                x2="356.5"
                y2="400"
                transform="rotate(155, 400, 400)"
                opacity="0.47"></line>
              <line
                x1="734.5"
                y1="400"
                x2="65.5"
                y2="400"
                transform="rotate(160, 400, 400)"
                opacity="0.23"></line>
              <line
                x1="569.5"
                y1="400"
                x2="230.5"
                y2="400"
                transform="rotate(165, 400, 400)"
                opacity="0.52"></line>
              <line
                x1="541.5"
                y1="400"
                x2="258.5"
                y2="400"
                transform="rotate(170, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="405"
                y1="400"
                x2="395"
                y2="400"
                transform="rotate(175, 400, 400)"
                opacity="0.19"></line>
              <line
                x1="546.5"
                y1="400"
                x2="253.5"
                y2="400"
                transform="rotate(180, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="549"
                y1="400"
                x2="251"
                y2="400"
                transform="rotate(185, 400, 400)"
                opacity="0.57"></line>
              <line
                x1="443"
                y1="400"
                x2="357"
                y2="400"
                transform="rotate(190, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="308"
                y1="400"
                x2="492"
                y2="400"
                transform="rotate(195, 400, 400)"
                opacity="0.91"></line>
              <line
                x1="758.5"
                y1="400"
                x2="41.5"
                y2="400"
                transform="rotate(200, 400, 400)"
                opacity="0.25"></line>
              <line
                x1="280"
                y1="400"
                x2="520"
                y2="400"
                transform="rotate(205, 400, 400)"
                opacity="0.59"></line>
              <line
                x1="232"
                y1="400"
                x2="568"
                y2="400"
                transform="rotate(210, 400, 400)"
                opacity="0.67"></line>
              <line
                x1="326.5"
                y1="400"
                x2="473.5"
                y2="400"
                transform="rotate(215, 400, 400)"
                opacity="0.32"></line>
              <line
                x1="337.5"
                y1="400"
                x2="462.5"
                y2="400"
                transform="rotate(220, 400, 400)"
                opacity="0.15"></line>
              <line
                x1="622"
                y1="400"
                x2="178"
                y2="400"
                transform="rotate(225, 400, 400)"
                opacity="0.51"></line>
              <line
                x1="714.5"
                y1="400"
                x2="85.5"
                y2="400"
                transform="rotate(230, 400, 400)"
                opacity="0.44"></line>
              <line
                x1="248"
                y1="400"
                x2="552"
                y2="400"
                transform="rotate(235, 400, 400)"
                opacity="0.31"></line>
              <line
                x1="531"
                y1="400"
                x2="269"
                y2="400"
                transform="rotate(240, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="147.5"
                y1="400"
                x2="652.5"
                y2="400"
                transform="rotate(245, 400, 400)"
                opacity="0.66"></line>
              <line
                x1="131.5"
                y1="400"
                x2="668.5"
                y2="400"
                transform="rotate(250, 400, 400)"
                opacity="0.54"></line>
              <line
                x1="150.5"
                y1="400"
                x2="649.5"
                y2="400"
                transform="rotate(255, 400, 400)"
                opacity="0.56"></line>
              <line
                x1="677"
                y1="400"
                x2="123"
                y2="400"
                transform="rotate(260, 400, 400)"
                opacity="0.26"></line>
              <line
                x1="262.5"
                y1="400"
                x2="537.5"
                y2="400"
                transform="rotate(265, 400, 400)"
                opacity="0.62"></line>
              <line
                x1="629.5"
                y1="400"
                x2="170.5"
                y2="400"
                transform="rotate(270, 400, 400)"
                opacity="0.89"></line>
              <line
                x1="253.5"
                y1="400"
                x2="546.5"
                y2="400"
                transform="rotate(275, 400, 400)"
                opacity="0.94"></line>
              <line
                x1="589"
                y1="400"
                x2="211"
                y2="400"
                transform="rotate(280, 400, 400)"
                opacity="0.99"></line>
              <line
                x1="547"
                y1="400"
                x2="253"
                y2="400"
                transform="rotate(285, 400, 400)"
                opacity="0.72"></line>
              <line
                x1="418.5"
                y1="400"
                x2="381.5"
                y2="400"
                transform="rotate(290, 400, 400)"
                opacity="0.98"></line>
              <line
                x1="575"
                y1="400"
                x2="225"
                y2="400"
                transform="rotate(295, 400, 400)"
                opacity="0.33"></line>
              <line
                x1="664"
                y1="400"
                x2="136"
                y2="400"
                transform="rotate(300, 400, 400)"
                opacity="0.29"></line>
              <line
                x1="677"
                y1="400"
                x2="123"
                y2="400"
                transform="rotate(305, 400, 400)"
                opacity="0.10"></line>
              <line
                x1="423"
                y1="400"
                x2="377"
                y2="400"
                transform="rotate(310, 400, 400)"
                opacity="0.20"></line>
              <line
                x1="216"
                y1="400"
                x2="584"
                y2="400"
                transform="rotate(315, 400, 400)"
                opacity="0.44"></line>
              <line
                x1="626.5"
                y1="400"
                x2="173.5"
                y2="400"
                transform="rotate(320, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="507.5"
                y1="400"
                x2="292.5"
                y2="400"
                transform="rotate(325, 400, 400)"
                opacity="0.51"></line>
              <line
                x1="454"
                y1="400"
                x2="346"
                y2="400"
                transform="rotate(330, 400, 400)"
                opacity="1.00"></line>
              <line
                x1="342"
                y1="400"
                x2="458"
                y2="400"
                transform="rotate(335, 400, 400)"
                opacity="0.12"></line>
              <line
                x1="571.5"
                y1="400"
                x2="228.5"
                y2="400"
                transform="rotate(340, 400, 400)"
                opacity="0.46"></line>
              <line
                x1="150.5"
                y1="400"
                x2="649.5"
                y2="400"
                transform="rotate(345, 400, 400)"
                opacity="0.55"></line>
              <line
                x1="582.5"
                y1="400"
                x2="217.5"
                y2="400"
                transform="rotate(350, 400, 400)"
                opacity="0.27"></line>
              <line
                x1="728"
                y1="400"
                x2="72"
                y2="400"
                transform="rotate(355, 400, 400)"
                opacity="0.18"></line>
              <line
                x1="625.5"
                y1="400"
                x2="174.5"
                y2="400"
                transform="rotate(360, 400, 400)"
                opacity="0.72"></line>
              <line
                x1="481.5"
                y1="400"
                x2="318.5"
                y2="400"
                transform="rotate(365, 400, 400)"
                opacity="0.31"></line>
              <line
                x1="676"
                y1="400"
                x2="124"
                y2="400"
                transform="rotate(370, 400, 400)"
                opacity="0.43"></line>
              <line
                x1="586.5"
                y1="400"
                x2="213.5"
                y2="400"
                transform="rotate(375, 400, 400)"
                opacity="0.72"></line>
            </g>
          </svg>
        </div>
        <div className="relative flex flex-col h-full card-body">
          <p className="text-gray-500 uppercase dark:text-dark-500">Customer</p>

          <div className="my-auto text-sky-500">
            <MousePointerClick className="mx-auto" />
            <h4 className="mt-2 text-center">+4.8%</h4>
          </div>
          <p className="text-sky-500">
            <Mouse className="inline-block ltr:mr-1 rtl:ml-1 size-4" /> 15,487
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Widgets
