
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(CONFIG.SOCIAL_CARD)) {
    return <></>
  }
  return (
        <div className={'relative h-28 text-black flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#eeecfc] dark:bg-[#ffffff] dark:border-green-400'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>{CONFIG.SOCIAL_CARD_TITLE_1}</h2>
                        <h3 className='pt-2'>{CONFIG.SOCIAL_CARD_TITLE_2}</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://s1.ax1x.com/2023/08/20/pP8QPLF.png) center center no-repeat' }}></div>
                    </div>}
                backContent={<Link href={CONFIG.SOCIAL_CARD_URL}>
                    <div className='font-[1000] text-xl h-full'>
                        {CONFIG.SOCIAL_CARD_TITLE_3}
                    </div>
                </Link>}
            />

        </div>
  )
}
