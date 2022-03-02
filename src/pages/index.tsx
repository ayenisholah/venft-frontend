import FTM from '../assets/icons/FTM'
import Info from '../assets/icons/Info'
import Minus from '../assets/icons/Minus'
import Plus from '../assets/icons/Plus'
import Spell from '../assets/icons/Spell'
import { Layout } from '../components/Layout'
import chart from '../assets/Infographic.svg'
import Image from 'next/image'

export default function Frogeconomics() {
  return (
    <div className="mx-auto w-full px-4 tablet:px-16">
      <div className="flex flex-col laptop:flex-row laptop:justify-center">
        <div className="mb-6 laptop:mr-20 laptop:w-[544px]">
          <h2 className="mb-[17px] text-[1.75rem] font-black leading-[38.19px] tracking-[-1px] text-frog-nation-black">
            2,871 of 10,000 minted
          </h2>
          <iframe
            className="mb-4 h-[208px] w-full tablet:h-[308px]"
            src="https://www.youtube.com/embed/iLWNjVJdMFc"
            // frameBorder="0"
          ></iframe>
          <div className="flex flex-col rounded-lg border-2 border-[#E9EEE9] pt-4 pr-[1.125rem] pb-[1.25rem] pl-6  tablet:flex-row tablet:items-center tablet:justify-between">
            <h3 className="mb-3 text-sm font-bold text-frog-nation-black tablet:mb-0">
              Claim rewards:
            </h3>
            <div className="flex items-center justify-between text-xs text-white tablet:justify-end">
              <button className="mr-2.5 flex h-[40px] w-[144px] items-center justify-between rounded-full bg-[#899EE2] pr-[1.125rem] pt-3 pb-2.5 pl-3 tablet:mr-3">
                <FTM />
                16,964 $FTM
              </button>
              <button className="flex h-[40px] w-[174px] items-center justify-between rounded-full bg-[#9C8FEE] py-2 pr-4 pl-3">
                <Spell />
                12875368 $SPELL
              </button>
            </div>
          </div>
        </div>
        <div className="mb-16 rounded-lg border-2 border-[#E9EEE9] py-8 px-6">
          <h3 className="mb-2.5 text-sm font-bold text-frog-nation-black">
            Select asset to mint with
          </h3>
          <select className="mb-10 w-full rounded-lg border border-[#E9EEE9] bg-white py-3 pl-3 pr-[21.5px]">
            <option value="FTM">FTM</option>
          </select>
          <h3 className="mb-3 text-sm font-bold text-frog-nation-black">
            Select NFTs amount
          </h3>
          <div className="mb-6 flex items-center">
            <Minus />
            <span className="mx-[21px] rounded-md border border-[#C8CEC8] py-[11px] px-6">
              1
            </span>
            <Plus />
          </div>
          <div className="mb-10 flex justify-between  text-[0.75rem] text-frog-nation-gray">
            <button className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] px-8 py-2 font-bold leading-[16.37px]">
              1
            </button>
            <button className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] px-[28px] py-2 font-bold leading-[16.37px]">
              10
            </button>
            <button className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] py-2 pl-6 pr-[26px] font-bold leading-[16.37px]">
              100
            </button>
            <button className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] py-2 pl-[19px] pr-[21px] font-bold leading-[16.37px]">
              1,000
            </button>
          </div>
          <button className="mx-auto mb-6 flex w-[320px] rounded-full bg-theme px-[122px] pt-[14px] pb-[13px] font-dmsans text-[1rem] font-bold leading-[21px] text-white">
            Mint NFTs
          </button>
          <div className="text-[0.875rem] leading-[19px] text-frog-nation-gray">
            <div className="mb-[7px] flex items-center justify-between">
              <div>You will pay</div>
              <div>$XX $USDT</div>
            </div>
            <div className="mb-[7px] flex items-center justify-between">
              <div className="flex items-center">
                <p className="mr-1.5">You will earn</p>
                <Info />
              </div>
              <div>$XX $USDT</div>
            </div>
            <div className="mb-[7px] flex items-center justify-between font-[800] text-frog-nation-black">
              <div>Total</div>
              <div>23 $USDT</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Treasury will get</div>
              <div>$XX $USDT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 tablet:mb-[117px]">
        <h2 className="mb-[3px] text-[1.75rem] font-black leading-[38px] tracking-[-1px] text-frog-nation-black tablet:mb-2 tablet:text-center tablet:text-lg">
          FrogEconomics
        </h2>
        <p className="mb-[17px] text-[1rem] leading-[22px] text-frog-nation-gray tablet:mb-8 tablet:text-center tablet:text-[1.125rem]">
          Building financial independence, one frog at a time
        </p>
        <iframe
          className="mb-6 h-[208px] w-full tablet:mx-auto tablet:h-[334px] tablet:w-[591px]"
          src="https://www.youtube.com/embed/iLWNjVJdMFc"
          // frameBorder="0"
        ></iframe>
        <button className="mx-auto flex h-[48px] w-[181px] rounded-full bg-theme px-8 pb-[14px] pt-[13px] text-[1rem] font-bold leading-[21px] text-white">
          Open roadmap
        </button>
      </div>
      <div className="mb-[118px] flex flex-col laptop:mx-auto laptop:mb-[192px] laptop:flex-row laptop:items-center laptop:justify-center">
        <div className="mx-auto mb-14 flex w-full flex-col tablet:w-4/5 laptop:mb-0 laptop:mr-[72px] laptop:ml-0 laptop:w-[460px]">
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="SPELL treasury">SPELL treasury</option>
          </select>
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="Claim royalty">Claim royalty</option>
          </select>
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="WAGMI airdrop">WAGMI airdrop</option>
          </select>
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="DAO whitelist">DAO whitelist</option>
          </select>
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="Supported chains">Supported chains</option>
          </select>
          <select className="mb-3 h-[64px] rounded-lg bg-[#E9EEE9] px-6 py-[22px] text-sm font-bold text-frog-nation-black">
            <option value="Claim mint rewards">Claim mint rewards</option>
          </select>
        </div>
        <Image src={chart} alt="infographics" />
      </div>
    </div>
  )
}

Frogeconomics.getLayout = (page: any) => <Layout>{page}</Layout>
