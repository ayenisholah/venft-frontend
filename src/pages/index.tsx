import FTM from '../assets/icons/FTM'
import Info from '../assets/icons/Info'
import Minus from '../assets/icons/Minus'
import Plus from '../assets/icons/Plus'
import Spell from '../assets/icons/Spell'
import { Layout } from '../components/Layout'
import chart from '../assets/Infographic.svg'
import DarkChart from '../assets/InfographicDark.png'
import Image from 'next/image'
import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTheme } from 'next-themes'
import { List, ListItem, ListItemIcon } from '@mui/material'
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import React from 'react'
import FTMIcon from '../assets/icons/FTMIcon'

export default function Frogeconomics() {
  const [amount, setAmount] = useState<number>(1)
  const { theme, setTheme } = useTheme()

  const increment = () => {
    setAmount((prev) => prev + 1)
  }

  const decrement = (amount: number) => {
    amount != 1 ? setAmount((prev) => prev - 1) : null
  }

  const setCount = (count: number) => {
    setAmount((prev) => prev + count)
  }

  const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  }

  const grey = {
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  }

  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid ${
        theme.palette.mode === 'dark' ? blue[600] : blue[100]
      };
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
  
    &::after {
      content: '▾';
      float: right;
    }
    `
  )

  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 320px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 0.75em;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
    `
  )

  const StyledOption = styled(OptionUnstyled)(
    () => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme === 'dark' ? blue[900] : blue[100]};
      color: ${theme === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme === 'dark' ? grey[800] : grey[100]};
      color: ${theme === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme === 'dark' ? blue[900] : blue[100]};
      color: ${theme === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme === 'dark' ? grey[800] : grey[100]};
      color: ${theme === 'dark' ? grey[300] : grey[900]};
    }
    `
  )

  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
    width: 320px;
    margin: 0 auto;
  `

  const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLUListElement>
  ) {
    const components: SelectUnstyledProps<TValue>['components'] = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    }

    return <SelectUnstyled {...props} ref={ref} components={components} />
  }) as <TValue>(
    props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
  ) => JSX.Element

  return (
    <div className="mx-auto w-full px-4 tablet:px-16">
      <div className="flex flex-col laptop:flex-row laptop:justify-center">
        <div className="mb-6 laptop:mr-20 laptop:w-[544px]">
          <h2 className="mb-[17px] text-[1.75rem] font-black leading-[38.19px] tracking-[-1px] text-frog-nation-black dark:text-darkmode-offwhite">
            2,871 of 10,000 minted
          </h2>
          <iframe
            className="mb-4 h-[208px] w-full tablet:h-[308px]"
            src="https://www.youtube.com/embed/iLWNjVJdMFc"
            // frameBorder="0"
          ></iframe>
          <div className="flex flex-col rounded-lg border-2 border-[#E9EEE9] pt-4 pr-[1.125rem] pb-[1.25rem] pl-6 dark:border-darkmode-border  tablet:flex-row tablet:items-center tablet:justify-between">
            <h3 className="mb-3 text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray tablet:mb-0">
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
        <div className="mb-16 rounded-lg border-2 border-[#E9EEE9] py-8 px-6 dark:border-darkmode-border">
          <h3 className="mb-2.5 text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
            Select asset to mint with
          </h3>
          <CustomSelect
            defaultValue="FTM"
            className="mx-0 mt-0 mb-10 flex w-full items-center justify-between rounded-lg border border-[#E9EEE9] bg-white py-3 pl-3 pr-[21.5px] dark:border-[#32322E] dark:bg-[#32322E]"
          >
            <StyledOption
              className="mb-4 flex w-auto items-center justify-between"
              value="FTM"
            >
              <ListItemIcon>
                <FTMIcon />
              </ListItemIcon>

              <Typography className="ml-[-20px] w-11/12 flex-initial text-sm font-bold dark:text-darkmode-offwhite">
                FTM
              </Typography>
            </StyledOption>
          </CustomSelect>

          <h3 className="mb-3 text-sm font-bold text-frog-nation-black dark:text-darkmode-light-gray">
            Select NFTs amount
          </h3>
          <div className="mb-6 flex items-center">
            <button onClick={() => decrement(amount)}>
              <Minus />
            </button>
            <input
              name="amount"
              placeholder="1"
              onChange={(event) =>
                setAmount(
                  isNaN(parseInt(event.target.value))
                    ? 0
                    : parseInt(event.target.value)
                )
              }
              value={amount}
              className="mx-[21px] w-[100px] max-w-fit rounded-md border border-[#C8CEC8] py-[11px] px-6 text-center font-bold dark:border-[#32322E] dark:bg-[#32322E] dark:text-darkmode-offwhite"
            />

            <button onClick={increment}>
              <Plus />
            </button>
          </div>
          <div className="mb-10 flex justify-between  text-[0.75rem] text-frog-nation-gray dark:text-darkmode-offwhite">
            <button
              className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] px-8 py-2 font-bold leading-[16.37px] dark:bg-[#32322E]"
              onClick={() => setCount(1)}
            >
              1
            </button>
            <button
              className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] px-[28px] py-2 font-bold leading-[16.37px] dark:bg-[#32322E]"
              onClick={() => setCount(10)}
            >
              10
            </button>
            <button
              className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] py-2 pl-6 pr-[26px] font-bold leading-[16.37px] dark:bg-[#32322E]"
              onClick={() => setCount(100)}
            >
              100
            </button>
            <button
              className="h-[32px] w-[72px] rounded-lg bg-[#E9EEE9] py-2 pl-[19px] pr-[21px] font-bold leading-[16.37px] dark:bg-[#32322E]"
              onClick={() => setCount(1000)}
            >
              1,000
            </button>
          </div>
          <button className="mx-auto mb-6 flex w-[320px] rounded-full bg-theme px-[122px] pt-[14px] pb-[13px] font-dmsans text-[1rem] font-bold leading-[21px] text-white">
            Mint NFTs
          </button>
          <div className="text-[0.875rem] leading-[19px] text-frog-nation-gray dark:text-darkmode-light-gray">
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
            <div className="mb-[7px] flex items-center justify-between font-[800] text-frog-nation-black dark:text-darkmode-offwhite">
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
        <h2 className="mb-[3px] text-[1.75rem] font-black leading-[38px] tracking-[-1px] text-frog-nation-black dark:text-darkmode-offwhite tablet:mb-2 tablet:text-center tablet:text-lg">
          FrogEconomics
        </h2>
        <p className="mb-[17px] text-[1rem] leading-[22px] text-frog-nation-gray dark:text-darkmode-light-gray tablet:mb-8 tablet:text-center tablet:text-[1.125rem]">
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
      <div className="mb-[118px] flex flex-col mobile:items-center mobile:justify-center tablet:items-center tablet:justify-center laptop:mx-auto laptop:mb-[192px] laptop:flex-row laptop:items-center laptop:justify-center">
        <div className="mx-auto mb-14 flex w-full flex-col tablet:w-4/5 laptop:mb-0 laptop:mr-[72px] laptop:ml-0 laptop:w-[460px]">
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px] dark:text-darkmode-offwhite"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  SPELL treasury
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      1. All FTM raised from the sale of the NFTs will be
                      converted into $sSpell and then they will be sent to the
                      smart contract that will freeze these sSpell for 1 year.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      2. These sSpells will continue to generate at least 25%
                      APY in $Spell.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      3. After one year, those who own 69420 Frogs’s NFTs can
                      claim sSpell in the contract, in proportional amount
                      (Reclaimable Spell amount for each NFT = (Total $sSpell in
                      the smart contract / N° of NFTs owned).)
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px]"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  Claim royalty
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      1.6,9% FTM from the sales of the 1° and 2° market are set
                      aside. Each holders can claim their total share capped at
                      12.34 FTM (per mint)
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      2. If you mint 10, you will be able to claim 123.40 FTM.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      3. You can claim your royalties at anytime but the total
                      share is unlocked 100 mints after your own mint
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:border-darkmode-border dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px]"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  WAGMI airdrop
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      1. All Minters of 69420 Frog&apos;s NFTs will receive an
                      airdrop of WAG ME TO THE SUN token ($ WAGME). Each minting
                      entitles you to $ 69420 WAGME.
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      2. Total tokens in circulation: 6.9 Billions
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      3. Token utility: Governance in Frog Nation DAO, Staking
                      yield and WUSD Minting (soon tm), for more visit{' '}
                      <a className="text-theme underline underline-offset-1">
                        WagMe Tokenomics
                      </a>
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px]"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  DAO whitelist
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      1. Get Whitelisted for the upcoming Ohm fork.{''}
                      <a className="text-theme underline underline-offset-1">
                        See the whitelist proposal
                      </a>
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                      2. The original minters will participate in the pre-sale
                      auction for the bootstrap of the Frog Nation DAO Treasury.
                      For more information, download the roadmap at{' '}
                      <span className="text-theme underline underline-offset-1">
                        frognationdao.com
                      </span>
                    </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px]"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  Supported chains
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                  Fantom.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="mb-3">
            <Accordion className="rounded-lg bg-[#E9EEE9] dark:bg-[#1D1D1A] dark:text-darkmode-offwhite">
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon className="dark:text-darkmode-offwhite" />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="h-[64px]"
              >
                <Typography className="text-sm font-bold text-frog-nation-black dark:text-darkmode-offwhite">
                  Claim mint rewards
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="text-sm text-frog-nation-black dark:text-darkmode-offwhite">
                  The team is ready to create the Marketplace, where it will be
                  possible to sell and buy the NFTs and also claim the accrued
                  royalties, and after a year also claim the Spells in the
                  treasury. The Marketplace is scheduled to launch in
                  mid-January.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {theme === 'light' ? (
          <Image src={chart} alt="infographics" />
        ) : (
          <div className="max-h-[464px] rounded-lg border-2 pl-[112px] pr-[91px] pt-[47px] pb-[45px] dark:border-darkmode-border dark:bg-[#1D1D1A] mobile:w-[360px] mobile:px-[60px] tablet:w-[460px]">
            <Image src={DarkChart} alt="dark mode infographics" />
          </div>
        )}
      </div>
    </div>
  )
}

Frogeconomics.getLayout = (page: any) => <Layout>{page}</Layout>
