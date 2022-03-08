import { Layout } from '../components/Layout'
import Image from 'next/image'
import Infographics from '../assets/Infographics'
import Coins from '../assets/icons/Coins'
import darkModeInfoGraphics from '../assets/darkmodeInfographics.png'
import { useTheme } from 'next-themes'
import DarkModeCoins from '../assets/icons/DarkModeCoins'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="venft mb-[120px]">
      <h2 className="mx-auto mb-2 text-center text-[1.75rem] font-black leading-[2.375rem] tracking-[-1px] text-[#262F27] dark:text-darkmode-offwhite tablet:text-lg">
        Protocol value locked (vePV)
      </h2>
      <div className="amount mb-4 text-center text-[3rem] text-xl font-black leading-[65.47px] text-theme dark:text-frog-nation-gold">
        $100,000
      </div>
      <p className="mx-auto mb-2 text-center text-base text-frog-nation-gray dark:text-darkmode-light-gray tablet:mb-4 tablet:w-[640px] tablet:text-md">
        Once you’ve locked your PV and received vePV, you’ll be eligible to
        claim rewards from the revenue-sharing vault every day!
      </p>
      <p className="mx-auto mb-[27px] text-center text-base text-frog-nation-gray dark:text-darkmode-light-gray tablet:mb-[24px] tablet:w-[640px] tablet:text-md">
        Yields collected from our strategies will be redistributed to the vault
        over time.
      </p>
      <div className="mx-auto mb-12 flex flex-col tablet:w-[660px] tablet:flex-row">
        <div className="mx-auto mb-[12px] h-[106px]	w-[368px] rounded-lg border-2 border-[#E9EEE9] py-[20px] pl-[24px] dark:border-darkmode-border tablet:mr-[12px] tablet:w-[324px]">
          <p className="title mb-[2px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
            Total veNFT
          </p>
          <span className="value text-lg font-black text-[#389D3C]">
            $234,432
          </span>
        </div>
        <div className="mx-auto h-[106px]	w-[368px] rounded-lg border-2 border-[#E9EEE9] py-[20px] pl-[24px] dark:border-darkmode-border tablet:w-[324px]">
          <p className="title mb-[2px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray ">
            Average time lock
          </p>
          <span className="value text-lg font-black text-[#389D3C]">
            346.5 days
          </span>
        </div>
      </div>
      <div className="mx-auto mb-12 w-[368px] rounded-lg border-2 border-[#E9EEE9] pt-[1.25rem] pl-[1.5rem] pb-[1.5rem] dark:border-darkmode-border tablet:w-[660px]">
        <h2 className="mb-[20px] text-[1.5rem] font-black leading-[32.74px] text-[#262F27] dark:text-darkmode-offwhite ">
          Farming treasury
        </h2>
        <div className="flex flex-col tablet:flex-row">
          <div className="mb-[20px] mr-[202px] flex flex-col tablet:mb-0">
            <h3 className="mb-[3px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
              Total inSPIRIT
            </h3>
            <span className="text-lg font-black text-theme">250,524</span>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-[3px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
              Total LPs
            </h3>
            <span className="text-lg font-black text-theme">$34,676</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 w-[368px] rounded-lg border-2 border-[#E9EEE9] px-[1.5rem] pt-[1.25rem] pb-[1.5rem] dark:border-darkmode-border tablet:mb-[7.5rem] tablet:w-[660px]">
        <h2 className="mb-[20px] text-[1.5rem] font-black leading-[32.74px] text-[#262F27] dark:text-darkmode-offwhite">
          Yield farming vault
        </h2>
        <div className="flex flex-col tablet:flex-row">
          <div className="mb-[23px] tablet:mr-[106px]">
            <p className="mb-[4px] w-[220px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
              Revenue sharing vault value for current epoch
            </p>
            <span className="text-lg font-black text-theme">$130,542</span>
          </div>
          <div className="mb-[1.25rem]">
            <p className="mb-[4px] w-[220px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray tablet:mb-[1.5rem]">
              Current epoch ends
            </p>
            <span className="text-lg font-black text-theme">
              16 hours 55 min
            </span>
          </div>
        </div>
        <div>
          <p className="mb-[9px] w-[220px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray tablet:mb-[1.5rem]">
            Your current yield
          </p>
          <div className="flex flex-col tablet:flex-row">
            <span className="mb-8 text-lg font-black text-theme tablet:mb-0 tablet:mr-[221px]">
              $57.59
            </span>
            <button className="h-[40px] w-[320px] rounded-full bg-theme px-[104px] py-[10px] text-sm text-white tablet:w-[160px] tablet:px-[1.5rem]">
              Harvest all now
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 tablet:mb-[120px] tablet:px-16">
        <h2 className="mb-[0.75rem] text-center text-[1.75rem] font-black leading-[38.19px] tracking-[-1px] text-[#262F27] dark:text-darkmode-offwhite tablet:mb-[0.625rem] tablet:text-lg">
          How it works
        </h2>
        <p className="mx-auto mb-[1.5rem] w-[368px] text-center text-base text-[#676C67] dark:text-darkmode-light-gray tablet:mb-8 tablet:w-[389px] tablet:text-md">
          Lock your NFTs for 1-2 years to collect yields from strategies and
          self-bribes from protocols
        </p>
        {theme === 'light' ? (
          <Infographics />
        ) : (
          <div className="flex justify-center">
            <Image src={darkModeInfoGraphics} alt="dark mode infographics" />
          </div>
        )}
      </div>

      <div className="mx-auto flex flex-col flex-wrap px-4 tablet:w-[820px] tablet:flex-row">
        <div className="first mx-auto mb-12 h-[562px] w-[368px] rounded-lg border-2 border-[#E9EEE9] py-8 px-6 dark:border-darkmode-border">
          <h3 className="mb-8 text-[1.5rem] font-black leading-[32.74px] text-frog-nation-black dark:text-darkmode-offwhite">
            Generate veNFT
          </h3>
          <div className="mb-2 flex flex-col">
            <label
              className="mb-[10px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray"
              htmlFor=""
            >
              Your NFT
            </label>
            <div className="input-wrapper">
              <input
                className="relative float-left w-[320px] rounded-lg border border-[#E9EEE9] px-4 py-2 dark:border-[#32322E] dark:bg-[#32322E] dark:text-darkmode-offwhite"
                type="text"
                placeholder="0"
              />
              <button className="relative bottom-[36px] left-[260px] overflow-visible rounded bg-[#E9EEE9]	px-3 py-1.5 text-xs font-bold text-[#676C67] dark:border dark:border-darkmode-light-gray dark:bg-[#32322E] dark:text-darkmode-light-gray">
                Max
              </button>
            </div>
          </div>
          <div className="mb-8 flex flex-col">
            <label
              className="mb-[10px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray"
              htmlFor=""
            >
              Lock until
            </label>
            <div className="input-wrapper">
              <input
                className="w-[320px] rounded-lg border border-[#E9EEE9] px-4 py-2 dark:border-[#32322E] dark:bg-[#32322E]                dark:text-darkmode-offwhite"
                type="date"
              />
            </div>
          </div>
          <div className="mb-8 flex flex-col">
            <div className="mb-[10px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
              Lock for
            </div>
            <div className="mb-12 grid grid-flow-col grid-rows-2 gap-6 text-xs font-bold text-frog-nation-gray dark:text-darkmode-offwhite">
              <div className="h-[40px] w-[148px] rounded bg-[#E9EEE9] py-3 px-12 dark:bg-[#32322E]">
                2 weeks
              </div>
              <div className="h-[40px] w-[148px] rounded bg-[#E9EEE9] py-3 px-12 dark:bg-[#32322E]">
                1 year
              </div>
              <div className="h-[40px] w-[148px] rounded bg-[#E9EEE9] py-3 pl-[46px] pr-[45px] dark:bg-[#32322E]">
                2 months
              </div>
              <div className="h-[40px] w-[148px] rounded bg-[#E9EEE9] py-3 px-12 dark:bg-[#32322E]">
                2 years
              </div>
            </div>
            <button className="w-full rounded-full bg-theme py-[10px] px-[130px] text-white">
              Approve
            </button>
          </div>
        </div>
        <div className="second mx-auto h-[888px] w-[368px] rounded-lg border-2 border-[#E9EEE9] py-8 px-6 dark:border-darkmode-border">
          <h3 className="mb-8 text-[1.5rem] font-black leading-[32.74px] text-frog-nation-black dark:text-darkmode-offwhite">
            Revenue Sharing Vault
          </h3>
          {theme === 'light' ? <Coins /> : <DarkModeCoins />}
          <div className="mt-6 flex items-center justify-between border-t border-b border-[#E9EEE9] py-4 text-frog-nation-black dark:border-[#32322E] dark:text-darkmode-offwhite">
            <h4 className="text-md ">Total APR</h4>
            <h4 className="text-[1.5rem] font-black leading-[33px]">95.78%</h4>
          </div>
          <div className="border-b border-[#E9EEE9] py-6 text-sm text-frog-nation-gray dark:border-[#32322E] dark:text-darkmode-light-gray">
            <div className="flex justify-between">
              <div>APR in LQDR</div>
              <div>22.15%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>APR in WFTM</div>
              <div>0.87%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>APR in LINSPIRIT</div>
              <div>54.48%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>APR in BOO</div>
              <div>13.30%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>APR in SPELL</div>
              <div>0.83%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>APR in BEETS</div>
              <div>4.12%</div>
            </div>
          </div>
          <div className="py-6 text-sm text-frog-nation-gray dark:text-darkmode-light-gray">
            <h3 className="text-md text-frog-nation-black dark:text-darkmode-offwhite">
              Claimable earnings
            </h3>
            <div className="mt-4 flex justify-between">
              <div>LQDR</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>WFTM</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>LINSPIRIT</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>BOO</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>SPELL</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>BEETS</div>
              <div>0 (~0 USD)</div>
            </div>
            <div className="mt-4 flex items-center justify-between text-frog-nation-black dark:text-darkmode-offwhite">
              <div className="text-md">Total</div>
              <div className="text-[1.5rem] font-black">~ 0 USD</div>
            </div>
            <button className="mt-8 h-[40px] w-[320px] rounded-full bg-theme px-[140px] py-[10px] text-sm text-white">
              Claim
            </button>
          </div>
        </div>
        <div className="third mx-auto mt-12 h-[456px] w-[368px] rounded-lg border-2 border-[#E9EEE9] py-8 px-6 dark:border-darkmode-border tablet:mt-[-280px]">
          <h3 className="mb-16 text-[1.5rem] font-black leading-[32.74px] text-frog-nation-black dark:text-darkmode-offwhite">
            Your veNFTs position
          </h3>
          <div className="mb-16 text-sm text-frog-nation-gray dark:text-darkmode-light-gray">
            <div className="mt-4 flex justify-between">
              <div>Amount of NFT</div>
              <div>12</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>Amount of veNFT</div>
              <div>12</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>Locked until</div>
              <div>1 March 2022</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>Vault share</div>
              <div>1%</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>Lock time</div>
              <div>122 days</div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>Yield farms value</div>
              <div>$342.00</div>
            </div>
          </div>
          <button className="h-[40px] w-[320px] rounded-full bg-theme px-[115px] py-[10px] text-sm text-white">
            Harvest now
          </button>
        </div>
        <div className="fourth mx-auto mt-12 h-[351px] w-[368px] rounded-lg border-2 border-[#E9EEE9] py-8 px-6 dark:border-darkmode-border">
          <h3 className="mb-[38px] text-[1.5rem] font-black leading-[32.74px] text-frog-nation-black dark:text-darkmode-offwhite">
            Withdraw NFT
          </h3>
          <p className="mb-[2px] text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
            Available NFT
          </p>
          <p className="mb-16 text-lg font-black text-theme">23</p>
          <button className="mb-3 h-[40px] w-[320px] rounded-full bg-theme px-[120px] py-[10px] text-sm text-white">
            Withdraw
          </button>
          <p className="mx-auto w-[247px] text-center text-sm text-frog-nation-gray dark:text-darkmode-light-gray">
            Once your lock expired, you’ll be able to claim your NFTs.
          </p>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = (page: any) => <Layout>{page}</Layout>
