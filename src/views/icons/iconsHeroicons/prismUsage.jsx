import PrismCode from '@src/components/Common/Prism'

const installation = `<svg className="h-6 w-6 text-gray-500 dark:text-dark-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" >
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>`

const Usage = () => <PrismCode language="javascript" code={installation} />

export { Usage }
